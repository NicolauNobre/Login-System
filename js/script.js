let email = dom=document.getElementById("email")
let senha = dom=document.getElementById("senha")
const usr_label = document.querySelector('#email');
const psw_label = document.querySelector('#senha');

function logIn(){
    let user_list = []

    let user_valid = {
        user_mail: '',
        user_psw: ''
    }

    user_list = JSON.parse(localStorage.getItem('user_list'))
    user_list.forEach(item => {
        if (email.value == item.user_mail && senha.value == item.user_psw){
            user_valid = {
                user_mail: item.user_mail,
                user_psw: item.user_psw
            }
        }
        else {
            user_valid = {
                user_mail: null,
                user_psw: null
            }   
        }
    });
    
    if (email.value == user_valid.user_mail && senha.value == user_valid.user_psw){
        alert('Login realizado com sucesso!\nBem vindo ao Games Library!');
        window.location.href = 'index.html'  
    }
    else {
        usr_label.className = 'form-control is-invalid'
        psw_label.className = 'form-control is-invalid'
        setTimeout(() => {alert('Usuário ou senha inválidos');}, 100)
    }

}

function signIn(){
    let user_list = JSON.parse(localStorage.getItem("user_list") || '[]')

    if (email.value != '' && senha.value!= ''){
        user_list.push(
            {
                user_mail: email.value,
                user_psw: senha.value
            }
        )
        localStorage.setItem('user_list', JSON.stringify(user_list))
        alert('Usuário cadastrado com sucesso')
        window.location.href = 'login.html'
    }
    else {
        usr_label.className = 'form-control is-invalid'
        psw_label.className = 'form-control is-invalid'
        setTimeout(() => {alert('Insira o e-mail e a senha para cadastrar-se');}, 100)
    }
    
        
}



