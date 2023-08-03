

const formLogin = (req, res) => {
    res.render('auth/login', {
        pagina:'Iniciar Sesion'

    })
}


const formRegister = (req, res) => {
    res.render('auth/register', {
        pagina:'Crear cuenta'
    })
}


const formForgetPassword= (req, res) => {
    res.render('auth/forgetPassword', {
        pagina:'Recupera tu Cuenta de Bienes Raices'
    })
}








export {
    formLogin,
    formRegister,
    formForgetPassword
}