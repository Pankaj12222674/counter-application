<img width="1534" height="863" alt="image" src="https://github.com/user-attachments/assets/ddd0ebe9-ef07-4d58-b447-a47b6c0e3204" />
# 🚀 Counter App

A simple and responsive Counter Application built using React and Vite. Users can increment, decrement, and reset the counter with validation to prevent values below 0 and above 100.

## 📸 Preview

![Counter App Screenshot](./src/assets/counter-preview.png)

## ✨ Features

- ➕ Increment Counter
- ➖ Decrement Counter
- 🔄 Reset Counter
- ⚠️ Prevents count from going below 0
- ⚠️ Prevents count from exceeding 100
- 🎨 Modern Glassmorphism UI
- 📱 Fully Responsive Design

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS3

## 📂 Project Structure

```bash
counter-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/counter-app.git
```

### 2. Navigate to Project Directory

```bash
cd counter-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open Browser

```bash
http://localhost:5173
```

## 📋 Functionality

### Increment

- Increases counter value by 1.
- Maximum value allowed: **100**

### Decrement

- Decreases counter value by 1.
- Minimum value allowed: **0**

### Reset

- Resets counter value back to **0**.

## 💻 Code Logic

```javascript
const increment = () => {
  if (count < 100) {
    setCount(count + 1);
  } else {
    alert("You have reached the maximum count of 100");
  }
};

const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  } else {
    alert("You have reached the minimum count of 0");
  }
};
```

## 🎯 Future Enhancements

- Dark/Light Mode
- Custom Increment Value
- Counter History
- Local Storage Support
- Animated Counter Effects

## 👨‍💻 Author

**Pankaj Kumar**

- GitHub: https://github.com/Pankaj12222674
- LinkedIn: https://linkedin.com/in/pankaj-kumar-a89a51238/

## 📜 License

This project is open-source and available under the MIT License.

---

⭐ If you like this project, don't forget to give it a star on GitHub!
