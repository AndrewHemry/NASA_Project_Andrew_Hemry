const btnClear = document.getElementById('submitBtn');

if (btnClear) {
    btnClear.addEventListener('click', () => {
        const inputName = document.getElementById('nameField');
        const inputMessage = document.getElementById('messageField');
        inputName.value = '';
        inputMessage.value = '';
    });
};









// btnClear.addEventListener('click', () => {
//     const inputName = document.getElementById('.nameField');
//     const inputMessage = document.getElementById('.messageField');
//     inputName.value = '';
//     inputMessage.value = ''
// });