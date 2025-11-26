# Personal Dashboard

A minimalist, interactive personal dashboard web application that helps you stay organized with essential widgets including a real-time clock, weather updates, to-do list, quick notes, and contact form.

## Features

### 🌓 Dark/Light Mode Toggle
- Switch between light and dark themes for comfortable viewing at any time of day
- Theme preference persists during your session

### ⏰ Real-Time Clock
- Displays current time that updates automatically
- Shows time in your local timezone format

### 🌤️ Weather Widget
- Real-time weather information for Dhaka
- Displays current temperature and weather conditions
- Powered by WeatherAPI

### ✅ To-Do List
- Add tasks quickly with a simple input field
- Click on any task to remove it when completed
- Perfect for tracking daily activities

### 📝 Quick Notes
- Write and save quick notes
- Notes persist using browser's localStorage
- Automatically displays your saved note on page load

### 📧 Contact Form
- Simple contact form with name, email, and message fields
- Form validation ensures all required fields are filled
- Confirmation message upon submission

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with CSS custom properties (variables) for theming
- **JavaScript (Vanilla)** - Interactive functionality and API integration
- **WeatherAPI** - Real-time weather data
- **LocalStorage** - Client-side data persistence

## Project Structure

```
personal-dashboard/
│
├── index.html          # Main HTML structure
├── style.css           # Styles and theme definitions
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Installation & Setup

1. **Clone or download** this repository to your local machine

2. **API Key Configuration** (Optional but recommended):
   - The project uses WeatherAPI for weather data
   - Current API key is included but has usage limits
   - Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/)
   - Replace the API key in `script.js`:
   ```javascript
   fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Dhaka")
   ```

3. **Customize Location**:
   - Change the location parameter in `script.js` from "Dhaka" to your city:
   ```javascript
   fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=YourCity")
   ```

4. **Open the Project**:
   - Simply open `index.html` in your web browser
   - No server setup required - runs entirely in the browser

## Usage

### Dark Mode
Click the "Dark Mode" button in the header to toggle between light and dark themes.

### Clock
The clock automatically displays and updates every second with your current local time.

### Weather
Weather information loads automatically when you open the dashboard. Refresh the page to update weather data.

### To-Do List
1. Type your task in the input field
2. Click "Add" button
3. Click on any task in the list to remove it

### Quick Notes
1. Write your note in the textarea
2. Click "Add" to save
3. Your note will be displayed below and persist even after closing the browser

### Contact Form
1. Fill in your name, email, and message
2. Click "Send" to submit
3. A confirmation message will appear

## Customization

### Colors
Modify theme colors in `style.css`:
```css
:root{
    --bg:#eee;              /* Light mode background */
    --text:#33333;          /* Light mode text */
    --primary:#483D8B;      /* Primary color */
}

body.dark{
    --bg:#1e1e1e;          /* Dark mode background */
    --text:#eee;           /* Dark mode text */
    --primary:#2F4F4F;     /* Dark mode primary color */
}
```

### Layout
Adjust the grid layout in `style.css`:
```css
main{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1rem;
}
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Requires JavaScript enabled
- ⚠️ Requires localStorage support for Quick Notes feature

## Future Enhancements

Potential features for future versions:
- [ ] Multiple location weather support
- [ ] Todo list persistence with localStorage
- [ ] Note editing and deletion
- [ ] Calendar widget
- [ ] News feed integration
- [ ] Customizable widget arrangement (drag & drop)
- [ ] Export/import dashboard settings
- [ ] Additional color themes

## Known Issues

- Todo list items do not persist after page refresh
- Weather API has rate limits on free tier
- Contact form currently shows alert only (no backend integration)

## Contributing

Feel free to fork this project and submit pull requests with improvements. Some areas that could use enhancement:
- Backend integration for contact form
- Todo list persistence
- Additional widgets
- Responsive design improvements
- Accessibility features

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Built with vanilla JavaScript - no frameworks required!

---

**Created with ❤️ in 2025**

For questions or suggestions, use the contact form on the dashboard!
