setTimeout(() => {
    const input = document.querySelectorAll(".mns-sign-in-input--placeholder")
    input[0].value = 'login@mail.ru'
    input[1].value = 'password'
    setTimeout(() => {
      document.querySelector('.mns-sign-in-button').click()
    }, 1000) 
}, 1000)
