# 🏋️‍♂️ MERN Gym Management System

A full-featured Gym Management Web Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling users to manage memberships, workouts, schedules, and trainers through a modern, responsive interface.

## ✨ Features
- 🏋️‍♂️ Member Management
- 📅 Workout Scheduling
- 💪 Trainer Management
- 📊 Membership Tracking 
- 🔐 User Authentication 
- 📱 Responsive Design 
 
## 🛠 Tech Stack   
- **Frontend:**  
  - React.js  
  - Vite  
  - Tailwind CSS 
  - React Router
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - Bcrypt

## 📁 Project Structure
```
Directory structure:
└── hariharans24-mern-gym-management/
    ├── README.md
    ├── LICENSE
    ├── backend/
    │   ├── app.js
    │   ├── config.env
    │   ├── package-lock.json
    │   ├── package.json
    │   └── utils/
    │       └── sendEmail.js
    └── frontend/
        ├── README.md
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── vite.config.js
        ├── public/
        │   └── img1.webp
        └── src/
            ├── App.css
            ├── App.jsx
            ├── main.jsx
            └── components/
                ├── BMICalculator.jsx
                ├── Contact.jsx
                ├── Footer.jsx
                ├── Gallery.jsx
                ├── Hero.jsx
                ├── Navbar.jsx
                ├── Pricing.jsx
                └── WorkoutSessions.jsx
```

### Frontend Structure Details
- **Components Directory (`src/components/`):**
  - `BMICalculator.jsx` - BMI calculation functionality
  - `Contact.jsx` - Contact form and information
  - `Footer.jsx` - Website footer component
  - `Gallery.jsx` - Image gallery display
  - `Hero.jsx` - Main landing section
  - `Navbar.jsx` - Navigation bar
  - `Pricing.jsx` - Membership pricing plans
  - `WorkoutSessions.jsx` - Workout session management

- **Public Assets (`public/`):**
  - Various images for the website (bmi.jpg, contact.jpg, gallery images)
  - Static assets and icons

- **Configuration Files:**
  - `vite.config.js` - Vite bundler configuration
  - `.eslintrc.cjs` - ESLint rules and settings
  - `package.json` - Project dependencies and scripts
  - `index.html` - Main HTML entry point

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/HARIHARANS24/mern-gym-management.git
cd mern-gym-management
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Configure Environment Variables
- Create a `.env` file in the backend directory
- Add necessary environment variables (see config.env.example)

5. Start the Development Servers

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
npm start
```

## 🤝 Contributing

We welcome contributions to the MERN Gym Management System! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Write clear, descriptive commit messages
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **HARIHARANS24** - *Initial work* - [GitHub Profile](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the MERN stack community for their excellent documentation and support 
