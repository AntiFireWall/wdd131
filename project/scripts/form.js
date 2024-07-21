const showBox = document.querySelectorAll("input[type='radio']");
const companyBox = document.querySelector(".company");
let value;

console.log(showBox);

showBox.forEach(button => {
    button.addEventListener('click', () => {
        if (button.checked){
            value = button.value;
        };
        if (value == 1){
            companyBox.classList.add("show");
            companyBox.querySelector("input[name='name']").required = true;
            companyBox.querySelector("input[name='text']").required = true;
        }
        else if (value == 0){
            companyBox.classList.remove("show");
            companyBox.querySelector("input[name='name']").required = false;
            companyBox.querySelector("input[name='text']").required = false;
        }
    });
})