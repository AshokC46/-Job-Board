# 💼 Job Board & Resume Builder

A modern, responsive **Job Board & Resume Builder** built with **React**, **Redux**, **React Router**, and **Bootstrap**. This project allows users to **browse and filter jobs**, **bookmark favorites**, and **create a professional resume** that can be exported as a **PDF**. It also includes a **mock admin panel** to manage job listings.

---

## 🚀 Project Overview

The Job Board & Resume Builder is designed to help **job seekers** streamline their job search and **create impressive resumes** without relying on third-party tools. It combines the core functionalities of a job portal with an interactive resume generator.

---

## 🛠️ Features

### 🌐 Job Board
- Browse job listings from an API
- Filter jobs by category, location, or type
- Bookmark/save favorite job posts
- Responsive layout for mobile and desktop

### 📄 Resume Builder
- Input personal details, education, skills, projects, and experience
- Live preview of resume
- Export resume as PDF using `html2pdf.js`
- Support for multiple resume templates (coming soon)

### 🛡️ Admin Panel (Mock)
- Add new job listings (mock functionality)
- View and manage existing job data
- Easily simulate job board updates

---

## 🎯 Problem It Solves

- 📋 **Simplifies Job Hunting**: Users can easily find jobs using filters and save jobs of interest for later viewing.
- 📑 **One-Stop Resume Creation**: No need to use external tools like Word or Canva—users can build and download resumes right in the app.
- 📁 **Resume Storage (Planned)**: In future versions, users will be able to save multiple resumes locally or in the cloud.
- 🧪 **For Developers**: Demonstrates integration of React state management, routing, component reusability, and real-time PDF rendering.

---

## 🧰 Tech Stack

- **React.js** – Front-end UI
- **Redux Toolkit** – Global state management
- **React Router DOM** – Navigation and routing
- **Bootstrap 5** – Styling and layout
- **html2pdf.js** – Resume PDF export
- **Fake Job API / Mock Data** – For job listings

---

## 🖥️ How It Works

1. **Users land on the homepage** and view available jobs.
2. **Filters and bookmarks** allow users to organize and track preferred roles.
3. Users go to the **Resume Builder** to fill in their personal and professional information.
4. A **live preview** of the resume is generated dynamically.
5. With a single click, users can **download their resume as a PDF**.
6. (Admin panel is mocked) – simulate adding new jobs or modifying listings.

---

## 📌 Future Enhancements

- Authentication & user accounts
- Backend integration for saving resumes/bookmarks
- More resume templates
- Admin dashboard with full CRUD operations

---

## 📷 Screenshots

> _![Image](https://github.com/user-attachments/assets/c618a1df-50cb-4735-9a57-c3bfba212ff2)
---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/job-board-resume-builder.git
cd job-board-resume-builder
npm install
npm start
