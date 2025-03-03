# 📚 **Library Book Collection - User Guide & Features**

![Image of Library](https://as2.ftcdn.net/v2/jpg/02/74/81/69/1000_F_274816901_dvhbzboD9RiGL4i1i2PhkZ5OeHLEhFrA.jpg)

Welcome to the **Library Book Collection** project! This web application allows users to **manage their personal book collection** in a beautifully designed **library-themed** interface. It provides an intuitive and engaging way to **add, view, edit, and delete books**, with **user authentication** to protect personal collections.

---

## 🖥️ **View Pages & User Experience**
The application consists of several key pages that shape the **user experience**, offering a **library-like** digital space.

### 🏡 **Home Page (`index.ejs`)**
- The starting point of the app.
- If **logged in**, users can navigate to their **library** or **sign out**.
- If **not logged in**, users are prompted to **sign in or sign up** to access features.

### 📖 **Library Page (`books/index.ejs`)**
- Displays all the books a user has **added to their personal library**.
- Each book is presented with:
  - 📘 **Title**
  - ✍️ **Author**
  - 📚 **Type (Hardcover, Audiobook, Ebook, Other)**
- Features a 📖 **"Open Book"** icon representing a **readable book collection**.
- Clicking on a book leads to its **details page**.

### 📘 **Add a Book Page (`books/new.ejs`)**
- Allows users to **add a book** by entering:
  - **Title**
  - **Author**
  - **Type** (Hardcover, Audiobook, Ebook, Other)
- A **📘 "Closed Book"** icon emphasizes the action of **adding a new book**.
- Submission redirects users to their **updated book collection**.

### 📄 **Book Details Page (`books/show.ejs`)**
- Displays **detailed information** about a selected book.
- Allows the user to:
  - **Edit** the book’s details.
  - **Delete** the book from their library.

### ✏️ **Edit a Book Page (`books/edit.ejs`)**
- Provides an interface to **update book information**.
- Users can modify **title, author, or book type** and save changes.

### 🚪 **Authentication Pages (`auth/sign-in.ejs`, `auth/sign-up.ejs`)**
- **Sign Up Page:** Users create an account to access features.
- **Sign In Page:** Users log in to their existing account.

---

## 🔐 **Authentication System & User Access**
The **authentication system** ensures that users can **securely manage their book collection** while protecting their data.

### 🚧 **Barriers & Protected Pages**
- **Unauthenticated Users**
  - ❌ **Cannot access any book-related pages.**
  - ✅ Can only **sign up or sign in**.
  - 🔀 Redirected to **Sign In** if they attempt to visit `/books`.

- **Authenticated Users**
  - ✅ Can **view, add, edit, and delete** books.
  - ✅ Can **log out at any time**.
  - 🔀 If an authenticated user tries to access another user’s library **(future feature)**, permissions will be required.

---

## 🔮 **Features Currently Being Built**
We are actively developing **new features** to make the Library Book Collection **more dynamic and interactive!**

### 📚 **Active Book Feature**
- Users will be able to **set a book as "Active"**, indicating that they are currently **reading or listening to it**.
- This feature will add an **"Active Now" badge** on the book in their collection.

### 🌍 **Browse Other Users’ Libraries**
- Users will be able to **view other people's book collections** (with privacy settings).
- This will allow users to **browse recommendations, find books they might like, and even interact** with other readers.

---

## 📌 **Summary of Current & Future Features**

| Feature | Available Now? | Coming Soon? |
|---------|---------------|-------------|
| **Sign Up / Sign In** | ✅ Yes | |
| **Personal Book Collection** | ✅ Yes | |
| **Add / Edit / Delete Books** | ✅ Yes | |
| **Book Details Page** | ✅ Yes | |
| **Library-Themed UI & Icons** | ✅ Yes | |
| **Set a Book as Active** | ❌ | ✅ In Development |
| **Browse Other Users' Libraries** | ❌ | ✅ In Development |

---

## 🚀 **Final Thoughts**
This project is **constantly evolving** to provide an **immersive and community-driven library experience.** We hope to make it a **social platform for book lovers** where users can **build and share their collections**.

Stay tuned for **new features** and feel free to contribute! 📚✨  

**Happy Reading!** 🚀
