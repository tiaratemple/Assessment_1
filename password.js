let password = "aceMyCodeTest7"
// check for max length and no spaces
let hasASpace = /\s/.test(password)
if ( password.length >= 10 && password.length <= 20 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password) && !hasASpace ) {
    console.log("Success!")
} else {
    console.log("Password not accepted")
}


