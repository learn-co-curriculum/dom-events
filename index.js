document.addEventListener("DOMContentLoaded", function() {
  // attach an event listener to the form
  const form = document.querySelector('form')

  // when the event happens, trigger a callback function (handler fn)
  form.addEventListener('change', function(e){
    const div = document.querySelector('.change')
    const color = e.target.value

    // that function should grab the value from the form

    // use that value to add a css class to the appropriate DOM node
    div.className = `change ${color}`
  })

});
