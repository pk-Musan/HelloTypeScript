function hello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Murotani", lastName: "Toshiki" };
document.body.innerHTML = hello(user);
