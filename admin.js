// Admin credentials
const ADMIN_EMAIL = 'admin1426@gmail.com';
const ADMIN_PASSWORD = 'adminisme';

let currentPage = 1;
const itemsPerPage = 10;

// Initialize books data from localStorage
function initializeBooksData() {
    try {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            window.books = JSON.parse(storedBooks);
        } else {
            if (typeof books !== 'undefined') {
                window.books = JSON.parse(JSON.stringify(books));
            } else {
                window.books = {
                    science: [],
                    programming: [],
                    mathematics: [],
                    dbms: []
                };
            }
            localStorage.setItem('books', JSON.stringify(window.books));
        }
    } catch (e) {
        if (typeof books !== 'undefined') {
            window.books = JSON.parse(JSON.stringify(books));
        } else {
            window.books = {
                science: [],
                programming: [],
                mathematics: [],
                dbms: []
            };
        }
    }
}

// Check if user is admin
function checkAdminAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.isAdmin || currentUser.email !== ADMIN_EMAIL) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Initialize admin panel
function initAdminPanel() {
    initializeBooksData();

    if (typeof localStorage === 'undefined') return;

    // Initialize users if not exists
    if (!localStorage.getItem('users')) {
        const sampleUsers = [
            {
                email: 'user1@example.com',
                fullname: 'John Doe',
                password: 'password123',
                registrationDate: new Date().toISOString()
            },
            {
                email: 'user2@example.com',
                fullname: 'Jane Smith',
                password: 'password123',
                registrationDate: new Date().toISOString()
            }
        ];
        localStorage.setItem('users', JSON.stringify(sampleUsers));
    }

    // Initialize borrowed books if not exists
    if (!localStorage.getItem('borrowedBooks')) {
        const sampleBorrowedBooks = [
            {
                id: 'sci1',
                title: 'A Brief History of Time',
                author: 'Stephen Hawking',
                borrowedBy: 'user1@example.com',
                dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
            }
        ];
        localStorage.setItem('borrowedBooks', JSON.stringify(sampleBorrowedBooks));
    }

    if (!checkAdminAuth()) return;

    updateAllBookDisplays();
    setupNavigation();
    setupEventListeners();
    loadAllUsers();
    loadBorrowHistory();
}

document.addEventListener('DOMContentLoaded', initAdminPanel);

function setupEventListeners() {
    const editBookForm = document.getElementById('editBookForm');
    if (editBookForm) {
        editBookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveEditedBook();
        });
    }

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.admin-nav a');
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id !== 'dashboard') section.style.display = 'none';
    });
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            sections.forEach(section => {
                section.style.display = (section.id === targetId) ? 'block' : 'none';
            });
        });
    });
}

function loadDashboardStats() {
    const totalBooks = Object.values(books).flat().length;
    const totalUsers = (JSON.parse(localStorage.getItem('users')) || []).length;
    const totalBorrowed = (JSON.parse(localStorage.getItem('borrowedBooks')) || []).length;

    document.getElementById('totalBooks').textContent = totalBooks;
    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('totalBorrowed').textContent = totalBorrowed;
}

function loadAllBooks() {
    const booksList = document.getElementById('booksList');
    if (!booksList) return;
    booksList.innerHTML = '';
    const sortedCategories = Object.keys(window.books).sort();
    sortedCategories.forEach(category => {
        const books = window.books[category];
        books.sort((a, b) => a.title.localeCompare(b.title));
        books.forEach(book => {
            const row = document.createElement('tr');
            
            booksList.appendChild(row);
        });
    });
}

function loadAllUsers() {
    const usersList = document.getElementById('usersList');
    if (!usersList) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    usersList.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${new Date(user.registrationDate).toLocaleDateString()}</td>
            <td style="display: flex; flex-direction: column;">
                <button class="view-btn" data-user-email="${user.email}">View Details</button>
                <button class="delete-user-btn" data-user-email="${user.email}">Delete</button>
            </td>
        `;
        usersList.appendChild(row);
    });
    usersList.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => viewUserDetails(btn.dataset.userEmail));
    });
    usersList.querySelectorAll('.delete-user-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteUser(btn.dataset.userEmail));
    });

}

function loadBorrowHistory() {
    const searchTerm = document.getElementById('borrowSearch').value || '';
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    const status = document.getElementById('borrowStatus') ? document.getElementById('borrowStatus').value : 'all';

    let filtered = borrowedBooks.filter(book => {
        const user = users.find(u => u.email === book.borrowedBy);
        const dueDate = new Date(book.dueDate);
        const today = new Date();
        let statusValue = dueDate < today ? 'overdue' : 'active';
        const searchMatch =
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (user && user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user && user.fullname.toLowerCase().includes(searchTerm.toLowerCase()));
        return searchMatch;
    });

    const itemsPerPage = 10;
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;

    historyList.innerHTML = '';
    paginated.forEach(book => {
        const user = users.find(u => u.email === book.borrowedBy);
        const dueDate = new Date(book.dueDate);
        const today = new Date();
        let status = dueDate < today ? 'Overdue' : 'Active';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td title="${user ? user.fullname : book.borrowedBy}">${user ? user.fullname : book.borrowedBy}</td>
            <td>
                <div class="book-details">
                    <span class="book-title" title="${book.title}">${book.title}</span>
                    <span class="book-author" title="${book.author}">${book.author}</span>
                    ${book.isbn ? `<span class="book-isbn" title="ISBN: ${book.isbn}">ISBN: ${book.isbn}</span>` : ''}
                </div>
            </td>
            <td>${book.borrowDate ? new Date(book.borrowDate).toLocaleDateString() : '-'}</td>
            <td>${dueDate.toLocaleDateString()}</td>
            <td>
                <span class="status-badge ${getStatusClass(status)}" title="${status}">
                    <i class="fas ${getStatusIcon(status)}"></i>
                    ${status}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="return-btn" onclick="returnBook('${book.id}')">
                        <i class="fas fa-undo"></i> Return
                    </button>
                </div>
            </td>
        `;
        historyList.appendChild(row);
    });

    if (paginated.length === 0) {
        historyList.innerHTML = `<tr><td colspan="6" style="text-align:center;">No records found.</td></tr>`;
    }
}

function getStatusIcon(status) {
    switch (status.toLowerCase()) {
        case 'active': return 'fa-clock';
        case 'returned': return 'fa-check-circle';
        case 'overdue': return 'fa-exclamation-circle';
        default: return 'fa-info-circle';
    }
}

function changePage(delta) {
    currentPage += delta;
    loadBorrowHistory();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function getBorrowStatus(record) {
    const today = new Date();
    const dueDate = new Date(record.dueDate);
    if (record.returnDate) {
        return 'Returned';
    } else if (today > dueDate) {
        return 'Overdue';
    } else {
        return 'Active';
    }
}

function getStatusClass(status) {
    switch (status) {
        case 'Active': return 'status-active';
        case 'Returned': return 'status-returned';
        case 'Overdue': return 'status-overdue';
        default: return '';
    }
}

// Return book from admin panel
function returnBook(bookId) {
    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    const updatedBorrowedBooks = borrowedBooks.filter(book => book.id !== bookId);
    localStorage.setItem('borrowedBooks', JSON.stringify(updatedBorrowedBooks));
    loadBorrowHistory();
    loadDashboardStats();
}

function viewDetails(bookId) {
    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const book = borrowedBooks.find(b => b.id === bookId);
    if (book) {
        const user = users.find(u => u.email === book.borrowedBy);
        alert(`
Book: ${book.title}
Author: ${book.author}
User: ${user ? user.fullname : book.borrowedBy}
Borrow Date: ${book.borrowDate ? new Date(book.borrowDate).toLocaleDateString() : '-'}
Due Date: ${book.dueDate ? new Date(book.dueDate).toLocaleDateString() : '-'}
        `);
    }
}
function deleteUser(email) {
    if (!confirm('Are you sure you want to delete this user?')) return;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(u => u.email !== email);
    localStorage.setItem('users', JSON.stringify(users));
    loadAllUsers();
    updateDashboardStats();
}



function updateAllBookDisplays() {
    loadAllBooks();
    updateDashboardStats();
    const event = new CustomEvent('booksUpdated', {
        detail: { books: window.books }
    });
    window.dispatchEvent(event);
    if (typeof loadBooks === 'function') {
        loadBooks();
    }
}



function viewUserDetails(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);
    if (!user) return;
    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    const userBorrowedBooks = borrowedBooks.filter(book => book.borrowedBy === email);
    document.getElementById('userDetailsName').textContent = user.fullname;
    document.getElementById('userDetailsEmail').textContent = user.email;
    document.getElementById('userDetailsRegistration').textContent = new Date(user.registrationDate).toLocaleDateString();
    document.getElementById('userDetailsBorrowed').textContent = userBorrowedBooks.length;
    document.getElementById('userDetailsModal').style.display = 'block';
}

function findBookById(bookId) {
    for (const genre in books) {
        const book = books[genre].find(b => b.id === bookId);
        if (book) return book;
    }
    return null;
}

function updateDashboardStats() {
    try {
        if (typeof window.books === 'undefined') {
            const storedBooks = localStorage.getItem('books');
            if (storedBooks) {
                try {
                    window.books = JSON.parse(storedBooks);
                } catch (e) {
                    window.books = {
                        science: [],
                        programming: [],
                        mathematics: [],
                        dbms: []
                    };
                }
            } else {
                window.books = {
                    science: [],
                    programming: [],
                    mathematics: [],
                    dbms: []
                };
            }
        }
        const totalBooks = Object.values(window.books).reduce((sum, category) => sum + category.length, 0);
        const totalUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')).length : 0;
        const activeBorrowings = localStorage.getItem('borrowedBooks') ? JSON.parse(localStorage.getItem('borrowedBooks')).length : 0;
        const totalBooksElement = document.getElementById('totalBooks');
        const totalUsersElement = document.getElementById('totalUsers');
        const totalBorrowedElement = document.getElementById('totalBorrowed');
        if (totalBooksElement) totalBooksElement.textContent = totalBooks;
        if (totalUsersElement) totalUsersElement.textContent = totalUsers;
        if (totalBorrowedElement) totalBorrowedElement.textContent = activeBorrowings;
        loadAllBooks();
    } catch (error) {
        console.error('Error updating dashboard stats:', error);
    }
}