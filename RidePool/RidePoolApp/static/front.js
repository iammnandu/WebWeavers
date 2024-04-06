// Get the carpooling form and the myRequests and myRides lists
const form = document.getElementById('carpoolingForm');
const myRequestsList = document.getElementById('myRequests');
const myRidesList = document.getElementById('myRides');

// Add a submit event listener to the carpooling form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const location = document.getElementById('location').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Send a POST request to the Django backend with the carpooling request details
  fetch('/api/carpooling/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ location, destination, date, time })
  })
  .then(response => response.json())
  .then(data => {
    // Display a success message to the user
    alert('Carpooling request submitted successfully!');

    // Add the new carpooling request to the myRequests list
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${data.location}</strong> to <strong>${data.destination}</strong> on ${data.date} at ${data.time}
    `;
    myRequestsList.appendChild(li);
  })
  .catch(error => {
    // Display an error message to the user
    alert('Error submitting carpooling request.');
  });
});

// Add a click event listener to the myRequests list
myRequestsList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    // Send a DELETE request to the Django backend to delete the selected carpooling request
    fetch(`/api/carpooling/${e.target.dataset.id}/`, {
      method: 'DELETE'
    })
    .then(() => {
      // Remove the selected carpooling request from the myRequests list
      e.target.remove();
    });
  }
});

// Add a click event listener to the myRides list
myRidesList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    // Send a DELETE request to the Django backend to delete the selected ride
    fetch(`/api/rides/${e.target.dataset.id}/`, {
      method: 'DELETE'
    })
    .then(() => {
      // Remove the selected ride from the myRides list
      e.target.remove();
    });
  }
});