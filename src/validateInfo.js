export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username= "Username required"
    }
    if(!values.body.trim()) {
        errors.body= "Body required"
    }
    if(!values.title.trim()) {
        errors.title= "Title required"
    }

    return errors
}