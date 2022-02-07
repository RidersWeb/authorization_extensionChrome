const data = {
  'login': ['Анастасия', 'Валерия', "Светлана", "Ангилина"],
  'mail': 'Valerascola@mail.ru',
  'nameMail': ['scola', 'Valera', 'sveta'],
  'domMail': ['@mail.ru', '@bk.ru', '@ya.ru', '@yandex.ru', '@gmail.com'],
  'password': 'Mossam55@',
  'city': ["Москва", "Казань", "Саратов", "Самара", "Ульяновск", "Архангельск"],
  'mdou': [1542, 754, 1243, 1346]

}


// start enter 
// setTimeout(() => {
//     const input = document.querySelectorAll(".mns-sign-in-input--placeholder")
//     // input[0].value = 'login@mail.ru'
//     // input[1].value = 'password'
//     function sendChange(target, val) {
//       var lastValue = target.value;
//       target.value = val;
//       var event = new Event('input', { bubbles: true });
//       event.simulated = true;
//       target._valueTracker && target._valueTracker.setValue(lastValue);
//       target.dispatchEvent(event);
//     }
//     sendChange(input[0], 'nastia@mail.ru')
//     sendChange(input[1], 'nastia2030')
//     setTimeout(() => {
//       document.querySelector('.mns-sign-in-button').click()
//     }, 1000) 
// }, 1000)
// end enter

// start registr
setTimeout(() => {
  const imgs = document.querySelectorAll(".mns-sign-in-button--underline")[0]
setTimeout(() => {
  imgs.click()
  console.log('Нажал')
  setTimeout(() => {
    document.querySelector('.mns-enter-pincode-button--underline').click()
    console.log('нажал регистрация')
    setTimeout(() => {
      const pedagog = document.querySelectorAll('.mns-sign-up-button--cancel')[1]
      pedagog.click()
      console.log('Нажал Педагог')
      setTimeout(() => {
        const inputReg = document.querySelectorAll('.mns-sign-up-input')
        console.log('Начинаем водить данные ...')
        inputReg.forEach(elem => {
          const num = Math.floor(Math.random() * data.login.length)
          if(elem.name == 'name') sendChange(elem, data.login[num])
          if(elem.name == 'login') sendChange(elem, data.mail)
          if(elem.name == 'password') sendChange(elem, data.password)
          if(elem.name == 'passwordRepeat') sendChange(elem, data.password)
          console.log('Ждем секунду и выбираем страну')

          setTimeout(() => {
            sendChange(inputReg[4], '171')
           }, 1000)
         if(elem.name == 'city') {
            const cityNum = Math.floor(Math.random() * data.city.length)
            sendChange(elem, data.city[cityNum])}
          if(elem.name == 'institution') sendChange(elem, data.mdou[num])
         document.querySelector('.mns-sign-up-agreements-checkbox-container').firstElementChild.checked = true
         })
      }, 500)
    }, 500)
  }, 500)
}, 500)

}, 500)
// end registr


const lk = document.querySelector('.mns-buttons-panel-first')
console.log(lk)

// start function fills the form
function sendChange(target, val) {
        var lastValue = target.value;
        target.value = val;
        var event = new Event('input', { bubbles: true });
        event.simulated = true;
        target._valueTracker && target._valueTracker.setValue(lastValue);
        target.dispatchEvent(event);
      }
// end function fills the form

function sendOption(target, val) {
  var lastValue = target.selectedIndex;
  target.selectedIndex = val;
  var event = new Event('select', { bubbles: true });
  event.simulated = true;
  target._valueTracker && target._valueTracker.setValue(lastValue);
  target.dispatchEvent(event);
}
