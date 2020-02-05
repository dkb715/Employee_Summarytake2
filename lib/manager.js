const employee = require ("./employee.js");

class Manager extends employee {
    constructor (name, id, email, office) {
        this.office=office
        super (name, id, email)
    }
    getRole (){
        return "manager"
    }
    getOffice () {
        return this.office
    }
}
module.exports=Manager