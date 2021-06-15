import bcrypt from 'bcryptjs'
const users = [{
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: "John Doe",
    email: "John@example.com",
    password: bcrypt.hashSync('123456', 10),

},
{
    name: "Jamal Ghaura",
    email: "Jamal@example.com",
    password: bcrypt.hashSync('123456', 10),

},
{
    name: "Kholil Mekar",
    email: "Kholil@example.com",
    password: bcrypt.hashSync('123456', 10),

}]
export default users