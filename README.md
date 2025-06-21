# Library Management System (Frontend Only)

A fully functional *Library Management System* (LMS) built using HTML, CSS, and JavaScript. This system simulates user login, book borrowing, and admin-level controls — all powered entirely on the frontend using localStorage.

---

## Features

### User Side
- Login and user profile
- View available books
- Borrow and return books
- View borrowed books in profile
- Due date display (without borrow date)
- Automatic overdue detection
- can return throgh return button

### Admin Panel
- View all users and their current borrow details
- View active borrow history
- Delete users
- Return books for users if overdue


### Data Handling
- All data (users, books, borrow info) stored and persisted using localStorage
- Book data is dummy (cannot read actual PDFs)
- Admin and user roles are not secured — only simulated via UI

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- localStorage for browser-side data persistence

---

## 🚧 Known Limitations / Future Scope

- status and admin-side search button are not functional yet
- Books cannot be added by admin dynamically (preloaded only)
- Users can only see due date, not *borrow date* in profile
- Borrow history only shows currently borrowed books (no past borrow log)
- No backend integration (currently frontend-only)

---

## 🚀 Getting Started

1. Clone this repo:
   ```bash
   git clone https://github.com/bhoomika-padala/library_management.git
