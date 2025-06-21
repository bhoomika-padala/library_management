// Initialize books data
const defaultBooks = {
    science: [
        { id: 'sci1', title: 'A Brief History of Time', author: 'Stephen Hawking', image: 'https://th.bing.com/th/id/OIP.ZaBSfVwWlpmiddmdTGdjGgHaL0?w=197&h=315&c=7&r=0&o=7&cb=iwp2&dpr=1.1&pid=1.7&rm=3', description: 'A compelling overview of cosmology, this modern classic breaks down complex topics like black holes, time travel, and the nature of the universe into accessible language. Hawking explores questions about the beginning of time, the role of God in creation, and the fate of the cosmos, all while maintaining scientific rigor and philosophical depth.', isbn: '978-0553380163', publishedYear: 1988 },
        { id: 'sci2', title: 'The Selfish Gene', author: 'Richard Dawkins', image: 'https://th.bing.com/th/id/OIP.yEzQgS_WwBYD1FP_UQd8eAHaLh?w=200&h=311&c=7&r=0&o=7&cb=iwp2&dpr=1.1&pid=1.7&rm=3', description: 'Richard Dawkins revolutionizes our understanding of natural selection by shifting the focus to the gene as the central unit of evolution. In this groundbreaking book, he explains complex evolutionary concepts through vivid metaphors and compelling examples, introducing ideas like "selfish" genes, altruism, and the replicator. A must-read for anyone curious about the biological mechanisms behind behavior and evolution.', isbn: '978-0198788607', publishedYear: 1976 },
        { id: 'sci3', title: 'Cosmos', author: 'Carl Sagan', image: 'https://th.bing.com/th/id/OIP.tviqzH5L-QasGQv96ZhbAAHaLb?w=201&h=310&c=7&r=0&o=7&cb=iwp2&dpr=1.1&pid=1.7&rm=3', description: 'Carl Sagan takes readers on a breathtaking journey across space and time, blending science, philosophy, and history. From the birth of the universe to the development of life on Earth, Cosmos celebrates the human spirit of exploration and curiosity. Sagan s poetic prose and deep reverence for the scientific method make this a timeless classic for stargazers and science enthusiasts alike', isbn: '978-0345539435', publishedYear: 1980 },
        { id: 'sci4', title: 'The Elegant Universe', author: 'Brian Greene', image: 'https://th.bing.com/th/id/OIP.ikXpcRqb7OI6N3CTge3hDAAAAA?w=188&h=282&c=7&r=0&o=7&cb=iwp2&dpr=1.1&pid=1.7&rm=3', description: 'Brian Greene demystifies one of modern physics most ambitious theories—string theory. By blending storytelling with scientific accuracy, he introduces concepts like extra dimensions, superstrings, and quantum gravity in a way thats both informative and awe inspiring. Greene s engaging narrative explores humanitys search for a unified understanding of the universe, from Newton to Einstein to string theorists.', isbn: '978-0393338102', publishedYear: 1999 },
        { id: 'sci5', title: 'The Gene', author: 'Siddhartha Mukherjee', image: 'https://universalbooksellers.com/wp-content/uploads/2023/12/md_9780143422167.jpg', description: 'Siddhartha Mukherjee weaves science, history, and personal narrative to tell the story of the gene—the most influential unit of heredity. From Mendel s pea experiments to the age of genetic engineering, this compelling account delves into scientific discoveries and ethical dilemmas that define modern medicine and biology. It a profound reflection on identity, inheritance, and the future of humanity.', isbn: '978-1476733500', publishedYear: 2016 },
        { id: 'sci6', title: 'Sapiens', author: 'Yuval Noah Harari', image: 'https://dynamic.indigoimages.ca/v1/books/books/0771038518/1.jpg?width=614&maxheight=614&quality=85', description: 'Yuval Noah Harari explores the sweeping history of Homo sapiens, from primitive hunter-gatherers to digital-age global citizens. Through bold insights and provocative questions, he examines how biology, culture, and technology have shaped human societies. Sapiens challenges conventional narratives and offers a gripping narrative of humanity s past, present, and future.', isbn: '978-0062316097', publishedYear: 2014 },
        { id: 'sci7', title: 'The Origin of Species', author: 'Charles Darwin', image: 'https://imgv2-1-f.scribdassets.com/img/word_document/394697315/original/de184d27cd/1627880679?v=1', description: 'Charles Darwin s landmark work introduced the theory of natural selection, forever changing our understanding of life. With meticulous observations and logical reasoning, Darwin builds his argument for how species evolve over time due to environmental pressures. It remains a cornerstone of biology, blending scientific insight with Victorian-era elegance.', isbn: '978-0451529060', publishedYear: 1859 },
        { id: 'sci8', title: 'The Double Helix', author: 'James D. Watson', image: 'https://pictures.abebooks.com/inventory/30156352041.jpg', description: 'In this candid and sometimes controversial memoir, James D. Watson recounts the dramatic race to uncover the structure of DNA. With wit, personality clashes, and groundbreaking science, Watson offers a behind-the-scenes look at one of the most important discoveries in biology. A story of ambition, competition, and intellectual triumph.', isbn: '978-0743216302', publishedYear: 1968 },
        { id: 'sci9', title: 'The Emperor of All Maladies', author: 'Siddhartha Mukherjee', image: 'https://tse4.mm.bing.net/th/id/OIP.2gyTNryPwUgqSai6G9KJ7AHaK2?cb=iwp2&rs=1&pid=ImgDetMain', description: 'Siddhartha Mukherjee masterfully traces the history of cancer, treating it as a character in a gripping narrative of scientific discovery. From ancient records to cutting-edge therapies, this Pulitzer Prize-winning book humanizes the battle against cancer and honors the patients, doctors, and researchers who have fought it. A deeply moving and informative chronicle.', isbn: '978-1439170915', publishedYear: 2010 },
        { id: 'sci10', title: 'The Sixth Extinction', author: 'Elizabeth Kolbert', image: 'https://m.media-amazon.com/images/I/811HumtGpTL.jpg', description: 'Elizabeth Kolbert presents a sobering account of the ongoing mass extinction caused by human activity. Blending field reporting with scientific analysis, she explores how climate change, habitat destruction, and invasive species are driving countless organisms to the brink. A powerful call to recognize and address our impact on Earths biodiversity.', isbn: '978-0805092998', publishedYear: 2014 }
    ],
    programming: [
        { id: 'prog1', title: 'Clean Code', author: 'Robert C. Martin', image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/143d5ceb-231b-4653-908d-3663c3e90fa9.__CR0,0,362,453_PT0_SX362_V1___.png', description: 'A handbook of agile software craftsmanship.', isbn: '978-0132350884', publishedYear: 2008 },
        { id: 'prog2', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', image: 'https://tse4.mm.bing.net/th/id/OIP.VaRPe46wPM5m_BLXOskkDgHaJb?cb=iwp2&rs=1&pid=ImgDetMain', description: 'Your journey to mastery.', isbn: '978-0201616224', publishedYear: 1999 },
        { id: 'prog3', title: 'Design Patterns', author: 'Erich Gamma', image: 'https://rukminim1.flixcart.com/image/832/832/book/0/7/5/design-patterns-original-imadh2znggcvbzuf.jpeg?q=70', description: 'Elements of reusable object-oriented software.', isbn: '978-0201633610', publishedYear: 1994 },
        { id: 'prog4', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', image: 'https://indianpdf.com/wp-content/uploads/2021/07/JavaScript-The-Good-Parts-PDF-Book-Online-Download-Free-indianpdf.com_-300x458.jpg', description: 'The good parts of JavaScript.', isbn: '978-0596517748', publishedYear: 2008 },
        { id: 'prog5', title: 'Python Crash Course', author: 'Eric Matthes', image: 'https://images.thenile.io/r1000/9781593279288.jpg', description: 'A hands-on, project-based introduction to programming.', isbn: '978-1593279288', publishedYear: 2015 },
        { id: 'prog6', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', image: 'https://m.media-amazon.com/images/I/81HqVRRwp3L._SL1500_.jpg', description: 'A modern introduction to programming.', isbn: '978-1593275846', publishedYear: 2011 },
        { id: 'prog7', title: 'Head First Design Patterns', author: 'Eric Freeman', image: 'https://img.ebook-hunter.org/img/Head%20First%20Design%20Patterns%20by%20Eric%20Freeman.jpg', description: 'A brain-friendly guide.', isbn: '978-0596007126', publishedYear: 2004 },
        { id: 'prog8', title: 'Clean Architecture', author: 'Robert C. Martin', image: 'https://m.media-amazon.com/images/I/411csr6Nn0L.jpg', description: 'A craftsmans guide to software structure and design.', isbn: '978-0134494166', publishedYear: 2017 },
        { id: 'prog9', title: 'Refactoring', author: 'Martin Fowler', image: 'https://dynamic.thoughtworks.com/landing_pages/book_cover_image-1e10d5912d81ba44076053cf81758956.jpeg', description: 'Improving the design of existing code.', isbn: '978-0134757599', publishedYear: 2018 },
        { id: 'prog10', title: 'Code Complete', author: 'Steve McConnell', image: 'https://tse1.explicit.bing.net/th/id/OIP.V7-S0L56LQNG_mkGaFI2hwAAAA?cb=iwp2&w=404&h=500&rs=1&pid=ImgDetMain', description: 'A practical handbook of software construction.', isbn: '978-0735619678', publishedYear: 2004 }
    ],
    mathematics: [
        { id: 'math1', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', image: 'https://th.bing.com/th/id/OIP.ENTDslbJQpcV63lxgtHCuwHaIc?w=202&h=230&c=7&r=0&o=5&cb=iwc2&dpr=1.1&pid=1.7', description: 'A comprehensive guide to algorithms.', isbn: '978-0262033848', publishedYear: 2009 },
        { id: 'math2', title: 'Calculus', author: 'Michael Spivak', image: 'https://m.media-amazon.com/images/I/81tBwy10k0L._SL1500_.jpg', description: 'A rigorous introduction to calculus.', isbn: '978-0914098911', publishedYear: 2008 },
        { id: 'math3', title: 'Linear Algebra', author: 'Gilbert Strang', image: 'https://th.bing.com/th/id/OIP.3UsypkqheirjdeTMAUQ-JAAAAA?cb=iwc2&rs=1&pid=ImgDetMain', description: 'An introduction to linear algebra.', isbn: '978-0980232776', publishedYear: 2016 },
        { id: 'math4', title: 'Number Theory', author: 'George E. Andrews', image: 'https://th.bing.com/th/id/OIP.07Hpo7n7xvKJx2rJ87txuwAAAA?cb=iwc2&rs=1&pid=ImgDetMain', description: 'A comprehensive introduction to number theory.', isbn: '978-0486682525', publishedYear: 1994 },
        { id: 'math5', title: 'Abstract Algebra', author: 'David S. Dummit', image: 'https://th.bing.com/th/id/OIP.zQUjdUvG35Nl2FtP7J4CYQHaKW?cb=iwc2&rs=1&pid=ImgDetMain', description: 'A comprehensive introduction to abstract algebra.', isbn: '978-0471433347', publishedYear: 2003 },
        { id: 'math6', title: 'Real Analysis', author: 'Walter Rudin', image: 'https://th.bing.com/th/id/OIP.fs6s8hThvDlPMQeHvmsYMAHaLO?cb=iwc2&rs=1&pid=ImgDetMain', description: 'Principles of mathematical analysis.', isbn: '978-0070542358', publishedYear: 1976 },
        { id: 'math7', title: 'Topology', author: 'James R. Munkres', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1448041845i/27866790.jpg', description: 'A first course in topology.', isbn: '978-0131816299', publishedYear: 2000 },
        { id: 'math8', title: 'Differential Equations', author: 'William E. Boyce', image: 'https://m.media-amazon.com/images/I/81nkzNbqGUL._SL1500_.jpg', description: 'Elementary differential equations.', isbn: '978-1119386054', publishedYear: 2017 },
        { id: 'math9', title: 'Probability Theory', author: 'Sheldon M. Ross', image: 'https://m.media-amazon.com/images/I/91XjK3aTCiL._SL1500_.jpg', description: 'A first course in probability.', isbn: '978-0134753119', publishedYear: 2018 },
        { id: 'math10', title: 'Statistics', author: 'David Freedman', image: 'https://th.bing.com/th/id/OIP.l9fnYSjmCQZsI1cUBRVCtwAAAA?w=190&h=282&c=7&r=0&o=5&cb=iwc2&dpr=1.1&pid=1.7', description: 'Statistical theory and methods.', isbn: '978-0393929720', publishedYear: 2007 }
    ],
    dbms: [
        { id: 'db1', title: 'Database Design', author: 'C.J. Date', image: 'https://pictures.abebooks.com/isbn/9789350237298-es.jpg', description: 'A comprehensive guide to database design.', isbn: '978-0321228386', publishedYear: 2003 },
        { id: 'db2', title: 'SQL Tuning', author: 'Dan Tow', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834305l/405363.jpg', description: 'Tuning and optimization techniques.', isbn: '978-0596005733', publishedYear: 2003 },
        { id: 'db3', title: 'NoSQL Distilled', author: 'Martin Fowler', image: 'https://blog.vvsevolodovich.dev/content/images/size/w2000/2020/11/815Ehvb8g8L-2.jpg', description: 'A brief guide to the emerging world of polyglot persistence.', isbn: '978-0321826626', publishedYear: 2012 },
        { id: 'db4', title: 'Database Systems', author: 'Raghu Ramakrishnan', image: 'https://m.media-amazon.com/images/I/41jzTIhCQJL.jpg', description: 'The complete book.', isbn: '978-0072465631', publishedYear: 2002 },
        { id: 'db5', title: 'SQL Cookbook', author: 'Anthony Molinaro', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388194970i/43238.jpg', description: 'Query solutions and techniques for database developers.', isbn: '978-0596009762', publishedYear: 2005 },
        { id: 'db6', title: 'Database Internals', author: 'Alex Petrov', image: 'https://th.bing.com/th/id/OIP.3Ra2sS1X4hXvDDtx73nU9QAAAA?cb=iwc2&rs=1&pid=ImgDetMain', description: 'A deep dive into how distributed data systems work.', isbn: '978-1492040347', publishedYear: 2019 },
        { id: 'db7', title: 'SQL Antipatterns', author: 'Bill Karwin', image: 'https://th.bing.com/th/id/OIP.pknKir3x1tHwuu80rDJA9AHaI4?cb=iwc2&rs=1&pid=ImgDetMain', description: 'Avoiding the pitfalls of database programming.', isbn: '978-1934356555', publishedYear: 2010 },
        { id: 'db8', title: 'Database Design', author: 'Teorey', image: 'https://www.oreilly.com/api/v2/epubs/9780123746306/files/content/resources/_cover_.jpg', description: 'Database design and implementation.', isbn: '978-0072465631', publishedYear: 2005 },
        { id: 'db9', title: 'SQL for Smarties', author: 'Joe Celko', image: 'https://m.media-amazon.com/images/I/51pHznbyWNL._SY425_.jpg', description: 'Advanced SQL programming.', isbn: '978-0128007617', publishedYear: 2014 },
        { id: 'db10', title: 'Database Reliability', author: 'Laine Campbell', image: 'https://m.media-amazon.com/images/I/91yh89fTUsL._SY342_.jpg', description: 'Engineering and operations.', isbn: '978-1491925945', publishedYear: 2017 }
    ]
};

// Initialize borrowed books if not exists
let borrowedBooks = [];
try {
    const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
    if (storedBorrowedBooks) {
        borrowedBooks = JSON.parse(storedBorrowedBooks);
    }
} catch (error) {
    console.error('Error loading borrowed books:', error);
    borrowedBooks = [];
}

// Initialize books if not exists
if (!window.books) {
    window.books = defaultBooks;
    localStorage.setItem('books', JSON.stringify(window.books));
    console.log('Initialized and saved books data to localStorage');
}

// Load books from localStorage
function loadBooksFromLocalStorage() {
    try {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            const parsedBooks = JSON.parse(storedBooks);
            // Validate the structure of loaded books
            if (isValidBooksStructure(parsedBooks)) {
                window.books = parsedBooks;
                console.log('Loaded books from localStorage:', window.books);
            } else {
                console.error('Invalid books data structure in localStorage');
                window.books = defaultBooks;
                localStorage.setItem('books', JSON.stringify(window.books));
            }
        } else {
            console.log('No books data in localStorage, using default');
            window.books = defaultBooks;
            localStorage.setItem('books', JSON.stringify(window.books));
        }
    } catch (error) {
        console.error('Error loading books from localStorage:', error);
        window.books = defaultBooks;
        localStorage.setItem('books', JSON.stringify(window.books));
    }
}

// Validate books data structure
function isValidBooksStructure(books) {
    if (!books || typeof books !== 'object') return false;
    
    // Check if all required categories exist
    const requiredCategories = ['science', 'programming', 'mathematics', 'dbms'];
    for (const category of requiredCategories) {
        if (!Array.isArray(books[category])) return false;
        
        // Validate each book in the category
        for (const book of books[category]) {
            if (!book.id || !book.title || !book.author) return false;
        }
    }
    return true;
}

// Refresh all book displays
function refreshAllBookDisplays() {
    console.log('Refreshing book displays with books:', window.books);
    
    // Refresh featured books on home page
    const featuredBooksGrid = document.getElementById('featuredBooksGrid');
    if (featuredBooksGrid) {
        featuredBooksGrid.innerHTML = '';
        const featuredBooks = [
            window.books.science?.[0],
            window.books.programming?.[0],
            window.books.mathematics?.[0],
            window.books.dbms?.[0]
        ].filter(book => book); // Filter out undefined books

        featuredBooks.forEach(book => {
            const card = createFeaturedBookCard(book);
            featuredBooksGrid.appendChild(card);
        });
    }

    // Refresh books in books page
    Object.keys(window.books).forEach(genre => {
        const genreContainer = document.querySelector(`#${genre} .books-grid`);
        if (genreContainer) {
            genreContainer.innerHTML = '';
            if (Array.isArray(window.books[genre])) {
                window.books[genre].forEach(book => {
                    const bookCard = createBookCard(book);
                    genreContainer.appendChild(bookCard);
                });
            }
        }
    });

    // Refresh borrowed books in profile page
    const borrowedBooksList = document.getElementById('borrowedBooksList');
    if (borrowedBooksList) {
        loadBorrowedBooks();
    }
}

// Helper function to format dates with timezone
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        console.error('Error formatting date:', e);
        return 'Invalid Date';
    }
}

// Helper function to check if current page is admin page
function isAdminPage() {
    return window.location.pathname.includes('admin.html');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load books first
    loadBooksFromLocalStorage();
    
    // Update header based on login status
    updateHeader();

    // Initial display of books
    refreshAllBookDisplays();

    // Listen for book updates from admin panel
    window.addEventListener('booksUpdated', () => {
        console.log('Books updated event received');
        // Reload books from localStorage
        loadBooksFromLocalStorage();
        // Refresh all displays
        refreshAllBookDisplays();
    });

    // Set up modal close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = () => {
            const modal = document.getElementById('bookModal');
            if (modal) {
                modal.style.display = 'none';
            }
        };
    }

    // Close modal when clicking outside
    window.onclick = (event) => {
        const modal = document.getElementById('bookModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Add periodic refresh of book data
    setInterval(() => {
        loadBooksFromLocalStorage();
        refreshAllBookDisplays();
    }, 5000); // Refresh every 5 seconds

    // Admin page initialization is handled in admin.js
});

// Create a book card element
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    // Add error handling for image loading
    const imageUrl = book.image || 'https://via.placeholder.com/150x200?text=No+Image';
    
    card.innerHTML = `
        <div class="book-image-container">
            <img src="${imageUrl}" 
                 alt="${book.title}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/150x200?text=No+Image';"
                 loading="lazy">
        </div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">By ${book.author}</p>
            <p class="isbn">ISBN: ${book.isbn}</p>
        </div>
    `;
    
    // Add click handler for book details
    card.onclick = () => showBookDetails(book);
    return card;
}

// Create a featured book card element
function createFeaturedBookCard(book) {
    const card = document.createElement('div');
    card.className = 'featured-book-card';
    
    // Add error handling for image loading
    const imageUrl = book.image || 'https://via.placeholder.com/150x200?text=No+Image';
    
    card.innerHTML = `
        <div class="book-image-container">
            <img src="${imageUrl}" 
                 alt="${book.title}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/150x200?text=No+Image';"
                 loading="lazy">
        </div>
        <div class="featured-book-info">
            <h3>${book.title}</h3>
            <p class="featured-book-author">By ${book.author}</p>
        </div>
    `;
    
    // Add click handler for book details
    card.onclick = () => showBookDetails(book);
    return card;
}

// Show book details in modal
function showBookDetails(book) {
    const modal = document.getElementById('bookModal');
    const modalContent = document.getElementById('modalContent');
    if (!modal || !modalContent) return;

    // Load current borrowed books from localStorage
    try {
        borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    } catch (error) {
        console.error('Error loading borrowed books:', error);
        borrowedBooks = [];
    }

    const isBorrowed = borrowedBooks.some(b => b.id === book.id);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    modalContent.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>ISBN:</strong> ${book.isbn}</p>
        <p><strong>Published Year:</strong> ${book.publishedYear}</p>
        <p><strong>Description:</strong> ${book.description || 'No description available'}</p>
        ${currentUser ? 
            `<button onclick="borrowBook('${book.id}')" ${isBorrowed ? 'disabled' : ''}>
                ${isBorrowed ? 'Already Borrowed' : 'Borrow Book'}
            </button>` :
            `<button onclick="window.location.href='login.html'">Login to Borrow</button>`
        }
    `;
    modal.style.display = 'block';
}

// Borrow a book
function borrowBook(bookId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Please log in to borrow books');
        window.location.href = 'login.html';
        return;
    }

    const book = findBookById(bookId);
    if (!book) {
        alert('Book not found');
        return;
    }

    // Get existing borrowed books
    let borrowedBooks = [];
    try {
        const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
        if (storedBorrowedBooks) {
            borrowedBooks = JSON.parse(storedBorrowedBooks);
        }
    } catch (error) {
        console.error('Error loading borrowed books:', error);
        borrowedBooks = [];
    }

    // Check if book is already borrowed by this user
    const alreadyBorrowed = borrowedBooks.some(b => 
        b.id === bookId && b.borrowedBy === currentUser.email && !b.returnDate
    );

    if (alreadyBorrowed) {
        alert('You have already borrowed this book');
        return;
    }

    // Add to borrowed books
    const borrowDate = new Date().toISOString();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14); // 14 days from now

    borrowedBooks.push({
        ...book,
        borrowDate: borrowDate,  // Ensure borrowDate is set
        dueDate: dueDate.toISOString(),
        borrowedBy: currentUser.email,
        returnDate: null
    });

    // Save back to localStorage
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    
    // Show success message with formatted dates
    alert(`Book borrowed successfully!\nDue Date: ${formatDate(dueDate)}`);
    
    // Update the UI
    loadBorrowedBooks();
}

// Find a book by ID
function findBookById(bookId) {
    for (const genre in books) {
        const book = books[genre].find(b => b.id === bookId);
        if (book) return book;
    }
    return null;
}

// Return a book
function returnBook(bookId) {
    borrowedBooks = borrowedBooks.filter(book => book.id !== bookId);
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    loadBorrowedBooks(); // Refresh the borrowed books list
    alert('Book returned successfully!');
}

// Update header based on login status
function updateHeader() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.querySelector('.auth-buttons');
    const adminLink = document.getElementById('adminLink');
    
    if (currentUser) {
        authButtons.innerHTML = `
            <span class="user-info">Welcome, ${currentUser.fullname || currentUser.email}</span>
            <button onclick="logout()">Logout</button>
        `;
        // Show admin link only for admin user
        if (currentUser.isAdmin && currentUser.email === 'admin1426@gmail.com') {
            if (adminLink) {
                adminLink.style.display = 'inline-block';
                // Add active class if on admin page
                if (window.location.pathname.includes('admin.html')) {
                    adminLink.classList.add('active');
                }
            }
        } else {
            if (adminLink) adminLink.style.display = 'none';
        }
    } else {
        authButtons.innerHTML = `
            <button id="loginBtn" onclick="window.location.href='login.html'">Login</button>
            <button id="signupBtn" onclick="window.location.href='signup.html'">Sign Up</button>
        `;
        if (adminLink) adminLink.style.display = 'none';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    updateHeader();
    window.location.href = 'index.html';
}

// Update the loadBorrowedBooks function to include return button
function loadBorrowedBooks() {
    // Always reload the latest borrowed books from localStorage
    let borrowedBooks = [];
    try {
        const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
        if (storedBorrowedBooks) {
            borrowedBooks = JSON.parse(storedBorrowedBooks);
        }
    } catch (error) {
        console.error('Error loading borrowed books:', error);
        borrowedBooks = [];
    }
    
    const borrowedBooksList = document.getElementById('borrowedBooksList');
    if (!borrowedBooksList) return;

    borrowedBooksList.innerHTML = '';
    const today = new Date();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;

    // Only show books borrowed by the current user
    const userBooks = borrowedBooks.filter(book => 
        book.borrowedBy === currentUser.email && !book.returnDate
    );

    if (userBooks.length === 0) {
        borrowedBooksList.innerHTML = '<p>No borrowed books.</p>';
        return;
    }

    userBooks.forEach(book => {
        const dueDate = new Date(book.dueDate);
        const isOverdue = dueDate < today;

        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <div>
                <h4>${book.title}</h4>
                <p>Borrowed on: ${formatDate(book.borrowedDate)}</p>
                <p>Due: ${formatDate(book.dueDate)}</p>
            </div>
            <div class="book-actions">
                ${isOverdue ? '<span class="due-date">Overdue!</span>' : ''}
                <button onclick="returnBook('${book.id}')" class="return-btn">
                    <i class="fas fa-undo"></i> Return Book
                </button>
            </div>
        `;
        borrowedBooksList.appendChild(bookItem);
    });
}
