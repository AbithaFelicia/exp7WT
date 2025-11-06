# BMI Calculator - React Application

A responsive and interactive BMI (Body Mass Index) Calculator built with React JS, featuring modern web development concepts including functional components, JSX, state management with Hooks, and Bootstrap integration.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Input Validation**: Comprehensive validation for empty, negative, and invalid inputs
- **Real-time Calculation**: Instant BMI calculation using the standard formula
- **Status Classification**: Displays BMI status with color-coded results:
  - Underweight: BMI < 18.5 (Blue)
  - Normal weight: 18.5 ≤ BMI ≤ 24.9 (Green)
  - Overweight: 25 ≤ BMI ≤ 29.9 (Orange)
  - Obese: BMI ≥ 30 (Red)
- **Modern UI**: Clean, professional interface with Bootstrap styling
- **Interactive Elements**: Smooth animations and hover effects

## Technical Implementation

### React Concepts Used
- **Functional Components**: Modern React component structure
- **JSX**: JavaScript XML for declarative UI rendering
- **React Hooks**: `useState` for state management
- **Event Handling**: `onClick` and `onChange` events
- **Conditional Rendering**: Dynamic display of results

### State Management
```javascript
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");
const [bmi, setBmi] = useState(null);
const [bmiStatus, setBmiStatus] = useState("");
const [statusColor, setStatusColor] = useState("");
```

### BMI Calculation Formula
```javascript
BMI = Weight (kg) / (Height (m))²
```

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:3000`

## Project Structure

```
wtex7/
├── src/
│   ├── App.jsx          # Main BMI Calculator component
│   ├── App.css          # Custom styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## Usage

1. Enter your height in centimeters
2. Enter your weight in kilograms
3. Click "Calculate BMI" button
4. View your BMI value and status classification
5. Use "Reset" button to clear inputs and start over

## Input Validation

- Checks for empty fields
- Validates positive numbers only
- Provides user-friendly error messages
- Prevents calculation with invalid data

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Technologies Used

- **React 18.2.0**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Bootstrap 5.3.0**: CSS framework for responsive design
- **Font Awesome**: Icons for enhanced UI
- **CSS3**: Custom styling and animations

## Learning Objectives Achieved

✅ React functional components implementation
✅ JSX syntax and structure
✅ State management with useState Hook
✅ Event handling (onClick, onChange)
✅ User input validation
✅ Conditional rendering
✅ Bootstrap integration
✅ Responsive web design
✅ Modern ES6+ JavaScript features

## Author

Student Project - Web Technology Lab 2025
Course Code: 23CS2049
