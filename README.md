

# 🧾 Smart Reconciliation & Audit System

A **Full-Stack MERN Application** that automates **financial transaction reconciliation**, detects mismatches, and maintains a **complete audit trail** of every change made in the system.

This system simulates how real financial platforms validate transaction data between systems and ensure data integrity.

---

## 🚀 Live Demo

🌐 Frontend: **https://smart-audit-frontend.onrender.com**

---

## 🎯 Project Purpose

Financial organizations process thousands of transactions daily. Manual reconciliation is slow and error-prone.

This system:

* Automates reconciliation
* Detects mismatches
* Flags duplicates
* Tracks edits with audit logs
* Provides dashboards & analytics

---

## 🧠 Core Features

### 📂 1. CSV File Upload

* Upload transaction data
* Automatic background processing
* Idempotency (same file cannot be processed twice)

### ⚖️ 2. Reconciliation Engine

System compares uploaded transactions with existing records.

| Status               | Meaning                           |
| -------------------- | --------------------------------- |
| 🟢 Matched           | Exact match found                 |
| 🟡 Partially Matched | Minor difference within tolerance |
| 🔴 Duplicate         | Same transaction already exists   |
| ⚪ Not Matched        | No matching record found          |
| ⏳ Pending            | Reconciliation not yet run        |

---

### 📊 3. Dashboard Analytics

* Total records processed
* Match accuracy %
* Status distribution (charts)
* Time-based statistics

---

### 📋 4. Reconciliation View

* Search & filter transactions
* Color-coded status badges
* Pagination
* Edit records (Admin only)

---

### 🕒 5. Audit Timeline

Tracks every change:

```
User A changed Amount: 500 → 505
User B changed Reference: REF123 → REF999
```

Includes:

* Who changed
* What changed
* Old vs New value
* Timestamp

---

### 🔐 6. Role-Based Access

| Role    | Permissions         |
| ------- | ------------------- |
| Admin   | Can edit records    |
| Analyst | View reconciliation |
| Viewer  | Read-only access    |

---

### ⚡ 7. Background Processing

* File processing runs asynchronously
* Upload status tracking
* Automatic reconciliation after file import

---

### 🔁 8. Idempotency Protection

If the same file is uploaded again:

> “File already processed. Try a new file.”

Prevents duplicate database processing.

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router
* Recharts
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer (file upload)
* CSV Parser

---

## 🏗 System Architecture

```
User → React Frontend → Express API → MongoDB
                ↓
         File Processor Service
                ↓
        Reconciliation Engine
                ↓
            Audit Logger
```

---

## 📁 Project Structure

```
smart-recon-frontend/
smart-recon-backend/

backend/
 ├── controllers/
 ├── services/
 ├── models/
 ├── routes/
 ├── middleware/

frontend/
 ├── pages/
 ├── layout/
 ├── components/
 ├── services/
```

---

## 🧪 Sample CSV Format

```
TransactionID,Amount,ReferenceNumber,Date
T1001,500,REF001,2024-01-01
T1002,700,REF002,2024-01-02
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone [repo-url]
cd project-folder
```

### 2️⃣ Backend Setup

```bash
cd smart-recon-backend
npm install
```

Create `.env`:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd smart-recon-frontend
npm install
npm start
```

---

## 🔒 Environment Variables

| Variable          | Description               |
| ----------------- | ------------------------- |
| MONGO_URI         | MongoDB connection string |
| JWT_SECRET        | Auth secret key           |
| REACT_APP_API_URL | Backend URL               |

---

## 📈 Performance Considerations

* Background job processing
* Idempotent file uploads
* Pagination on large datasets
* Indexed MongoDB queries

---

## 💡 What I Learned

This project helped me:

* Build a full MERN application
* Handle background processing
* Design reconciliation logic
* Implement audit logging
* Work with real-world system architecture
* Deploy production apps

---

## 🎓 Conclusion

This system demonstrates how financial reconciliation systems work in real applications, combining backend processing, data integrity, and user-friendly dashboards.

---

## 👨‍💻 Author

**Mohamed Rasith**
Full-Stack Developer



