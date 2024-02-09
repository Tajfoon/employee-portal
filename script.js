const current_dateField = document.querySelector('#currentDate');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  const now = new Date();

  const [day, month, year] = [
    String(now.getDate()).padStart(2, '0'),
    String(now.getMonth()+1).padStart(2, '0'),
    // Padstart porównuje wskazanego stringa póki nie spełni określonego rezultatu.
    now.getFullYear()
  ];

  let current_date = `${day}-${month}-${year}`;
  current_dateField.textContent = current_date;



  