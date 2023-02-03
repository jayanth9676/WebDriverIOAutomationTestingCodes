class LoginPage{
    get username(){
        return $("input[name='username']")
    }

    get password(){
        return $("//input[@type='password']")
    }

    get alert()
    {
        return $(".alert-danger")
    }

    get signIn(){
        return $("#signInBtn")
    }

    get textInfo()
    {
        return $("p")
    }

    async login(username, password){
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.signIn.click()
    }
}

module.exports = new LoginPage()