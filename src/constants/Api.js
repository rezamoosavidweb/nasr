// const BaseUrl = "http://185.211.58.22/api/v1/"
// const BaseImageUrl="http://185.211.58.22/"
// //---------------------------------------------------------
// const BaseUrl = "http://192.168.1.191/api/v1/"
// const BaseImageUrl="http://192.168.1.191/"
// // -----------------------------------------------------
const BaseImageUrl="http://api.bornadel.com/"
const BaseUrl="http://api.bornadel.com/api/v1/"

export default {
    GET_USERS: BaseUrl + "Users/GetNonSpecific",
    DELETE_USER: BaseUrl + "Users/Delete",
    CREATE_USER: BaseUrl + "Users/CreateUser",
    EDIT_USER: BaseUrl + 'Users/Update',
    GET_EDIT_USER: BaseUrl + 'Users/GetById',
    GET_ARTICLES: BaseUrl + "Article/GetAll",
    DELETE_ARTICLE: BaseUrl + "Article/Delete",
    CREATE_ARTICLE: BaseUrl + "Article/Insert",
    EDIT_ARTICLE: BaseUrl + 'Article/Update',
    APPROVE_ARTICLE :BaseUrl+"Article/Approve",
    GET_EDIT_USER: BaseUrl + 'Users/GetById',
    SET_PROFILE_IMAGE: BaseUrl + 'Users/SetProfileImage',
    SHOW_IMAGE:BaseImageUrl,
    GET_ROLES: BaseUrl + "Role/GetNonSpecificRoles",
    
    GET_SETTINGS: BaseUrl + "Settings/GetAll",
    EDIT_SETTINGS: BaseUrl + "Settings/Update",

    GET_AGE_CATEGORIES: BaseUrl + "AgeCategory/GetAll",
    DELETE_AGE_CATEGORY: BaseUrl + "AgeCategory/Delete",
    ADD_AGE_CATEGORY:BaseUrl + "AgeCategory/Insert",
    EDIT_AGE_CATEGORY:BaseUrl + "AgeCategory/Update",

    GET_CLASSROOM_LEVEL:BaseUrl+"ClassRoomLevel/GetAll",
    ADD_CLASSROOM_LEVEL:BaseUrl+"ClassRoomLevel/Insert",
    EDIT_CLASSROOM_LEVEL:BaseUrl+"ClassRoomLevel/Update",
    DELETE_CLASSROOM_LEVEL:BaseUrl+"ClassRoomLevel/Delete",

    GET_DIPLOMA:BaseUrl+"Diploma/GetAll",
    ADD_DIPLOMA:BaseUrl+"Diploma/Insert",
    EDIT_DIPLOMA:BaseUrl+"Diploma/Update",
    DELET_DIPLOMA:BaseUrl+"Diploma/Delete",

    GET_EDUCATION:BaseUrl+"Education/GetAll",
    ADD_EDUCATION:BaseUrl+"Education/Insert",
    EDIT_EDUCATION:BaseUrl+"Education/action",
    DELETE_EDUCATION:BaseUrl+"Education/Delete",

    GET_SERVER:BaseUrl+"Server/GetAll",
    ADD_SERVER:BaseUrl+"Server/Insert",
    EDIT_SERVER:BaseUrl+"Server/Update",
    DELET_SERVER:BaseUrl+"Server/Delete",

    GET_COMMON_QUESTION:BaseUrl+"CommonQuestion/GetAll",
    ADD_COMMON_QUESTION:BaseUrl+"CommonQuestion/Insert",
    EDIT_COMMON_QUESTION:BaseUrl+"CommonQuestion/Update",
    DELET_COMMON_QUESTION:BaseUrl+"CommonQuestion/Delete",

    GET_PROVISION:BaseUrl+"Provision/GetAll",
    ADD_PROVISION:BaseUrl+"Provision/Insert",
    EDIT_PROVISION:BaseUrl+"Provision/Update",
    DELETE_PROVISION:BaseUrl+"Provision/Delete",

    GET_DEPARTMENT:BaseUrl+"Department/GetAll",
    ADD_DEPARTMENT:BaseUrl+"Department/Insert",
    EDIT_DEPARTMENT:BaseUrl+"Department/Update",
    DELETE_DEPARTMENT:BaseUrl+"Department/Delete",

    GET_NEWS:BaseUrl+"News/GetAll",
    ADD_NEWS:BaseUrl+"News/Insert",
    EDIT_NEWS:BaseUrl+"News/Update",
    DELETE_NEWA:BaseUrl+"News/Delete",
    ARCHIVE_NEWS:BaseUrl+"News/Archive",

    GET_CONTACTUS:BaseUrl+"ContactUs/GetAll",
    ADD_CONTACTUS:BaseUrl+"ContactUs/Insert",
    ARCHIVE_CONTACTUS:BaseUrl+"ContactUs/Archive",

    GET_QUESTION:BaseUrl+"Question/GetAll",
    ADD_QUESTION:BaseUrl+"Question/Insert",
    DELETE_QUESTION:BaseUrl+"Question/Delete",
    APPROVE_QUESTION:BaseUrl+"Question/Approve",

    GET_COMPLAIN:BaseUrl+"Complain/GetAll",
    ADD_COMPLAIN:BaseUrl+"Complain/Insert",
    DELETE_COMPLAIN:BaseUrl+"Complain/Delete",
    APPROVE_COMPLAIN:BaseUrl+"Complain/Approve",

    GET_ACADEMY:BaseUrl+"Academy/GetAll",
    ADD_ACADEMY:BaseUrl+"Academy/Insert",
    EDIT_ACADEMY:BaseUrl+"Academy/Update",
    DELETE_ACADEMY:BaseUrl+"Academy/Delete",
    APPROVE_ACADEMY:BaseUrl+"Academy/Approve",

    GET_CLASSSUBJECT:BaseUrl+"ClassSubject/GetAll",
    ADD_CLASSSUBJECT:BaseUrl+"ClassSubject/Insert",
    EDIT_CLASSSUBJECT:BaseUrl+"ClassSubject/Update",
    DELETE_CLASSSUBJECT:BaseUrl+"ClassSubject/Delete",
    APPROVE_CLASSSUBJECT:BaseUrl+"ClassSubject/Approve",

    GET_CLASSROOM:BaseUrl+"ClassRoom/GetAll",
    ADD_CLASSROOM:BaseUrl+"ClassRoom/Insert",
    EDIT_CLASSROOM:BaseUrl+"ClassRoom/Update",
    DELETE_CLASSROOM:BaseUrl+"ClassRoom/Delete",
    APPROVE_CLASSROOM:BaseUrl+"ClassRoom/Approve",

    GET_QUESTION:BaseUrl+"Question/GetAll",
    ADD_QUESTION:BaseUrl+"Question/Insert",
    DELETE_QUESTION:BaseUrl+"Question/Delete",
    APPROVE_QUESTION:BaseUrl+"Question/Approve",
    
    GET_EDUCATIONSUBJECT:BaseUrl+"EducationSubject/GetAll",
    GET_EDUCATIONSUBJECTADMIN:BaseUrl+"EducationSubject/GetAllAdmin",
    ADD_EDUCATIONSUBJECTADMIN:BaseUrl+"EducationSubject/Insert",
    EDIT_EDUCATIONSUBJECT:BaseUrl+"EducationSubject/Update",
    DELETE_EDUCATIONSUBJECT:BaseUrl+"EducationSubject/Delete",
    LOGIN:BaseUrl+"Users/Login",

    GET_TICKET:BaseUrl+"Ticket/GetAll",
    ADD_TICKET:BaseUrl+"Ticket/Insert",


}