<script>
    let calendarVisible = false; // Indicates whether the calendar is currently visible

    function toggleCalendar(showCalendar) {
      calendarVisible = showCalendar;
      const calendarElement = document.getElementById('calendar');
      const toggleButton = document.querySelector('.toggle-button');

      if (calendarVisible) {
        // Display the calendar
        calendarElement.style.display = 'block';
        toggleButton.textContent = 'Hide Calendar';
        generateCalendar(); // Call function to generate calendar content
      } else {
        // Hide the calendar
        calendarElement.style.display = 'none';
        toggleButton.textContent = 'Show Calendar';
      }
    }

    function generateCalendar() {
      // This function will generate and display the calendar content
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      // You can implement your calendar generation logic here
      // For example, you can create HTML elements to represent the calendar structure
      // and populate them with the days of the month, highlighting the current day, etc.
      // You can also use libraries like moment.js or date-fns for easier date manipulation.

      // Example: Generate a basic calendar showing the current month and year
      const calendarElement = document.getElementById('calendar');
      calendarElement.innerHTML = `<h2>${currentMonth + 1}/${currentYear}</h2>`;
      // Add your calendar content generation logic here
    }

    // Call toggleCalendar with true to initially display the calendar
    toggleCalendar(true);
  </script>