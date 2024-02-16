// calendar.js

let calendarVisible = false; // Indicates whether the calendar is currently visible

function toggleCalendar(showCalendar, events) {
    calendarVisible = showCalendar;
    const calendarElement = document.getElementById('calendar');
    const toggleButton = document.querySelector('.toggle-button');
  
    if (calendarVisible) {
      // Display the calendar
      calendarElement.style.display = 'block';
      generateCalendar(events); // Call function to generate calendar content with events
    } else {
      // Hide the calendar
      calendarElement.style.display = 'none';
    }
  }
  function generateCalendar(events) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the number of days in the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

  const calendarElement = document.getElementById('calendar');
  calendarElement.innerHTML = `<h2>${currentMonth + 1}/${currentYear}</h2><table class="calendar-table"><thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody></tbody></table>`;

  const tbody = calendarElement.querySelector('tbody');
  let date = 1;

  // Generate rows and cells for each week of the month
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        // Add empty cells before the first day of the month
        const cell = document.createElement('td');
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        // If we've reached the end of the month, stop adding cells
        break;
      } else {
        // Add cells with the date
        const cell = document.createElement('td');
        cell.textContent = date;

        // Add events for the current date
        const eventsForDate = events.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate.getFullYear() === currentYear && eventDate.getMonth() === currentMonth && eventDate.getDate() === date;
        });

        if (eventsForDate.length > 0) {
          const eventsTable = document.createElement('table');
          eventsTable.classList.add('events-table');
          eventsForDate.forEach(event => {
            const eventRow = document.createElement('tr');
            const eventCell = document.createElement('td');
            eventCell.textContent = event.title;
            eventRow.appendChild(eventCell);
            eventsTable.appendChild(eventRow);
          });
          cell.appendChild(eventsTable);
        }

        row.appendChild(cell);
        date++;
      }
    }
    tbody.appendChild(row);
  }

  // Apply CSS styles for row and column size
  const calendarTable = calendarElement.querySelector('.calendar-table');
  calendarTable.style.width = '100%'; // Set table width to 100% of container
  calendarTable.style.tableLayout = 'fixed'; // Ensure fixed layout to apply specified column width

  const cells = calendarTable.querySelectorAll('td');
  cells.forEach(cell => {
    cell.style.width = '14.28%'; // Set column width to approximately 1/7th of the table width for 7 columns
    cell.style.height = '80px'; // Set row height
    cell.style.textAlign = 'center'; // Center text horizontally
    cell.style.verticalAlign = 'top'; // Align events at the top of the cell
    cell.style.padding = '5px'; // Add padding for better spacing
  });
}
// Call toggleCalendar with true to initially display the calendar
toggleCalendar(true);
