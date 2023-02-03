const refs = document.querySelector('#validation-input');

refs.addEventListener('blur', event =>  {
    if (refs.value.length === Number(refs.dataset.length)) {
        refs.classList.remove('invalid');
        return refs.classList.add('valid'); 
    }
    return refs.classList.add('invalid');
});
console.log(refs);