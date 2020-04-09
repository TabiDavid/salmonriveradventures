//google fonts code//

WebFont.load({ google: { families: ['Trade Winds', 'Roboto', 'Sen', 'Comic Neue'] } });


// Menu nav bar//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



//Json object//


function John(){

    var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe", "age":"22", "Certificate":"Tourism","experience":"5 years", "email":"John@email.com","description":"I love to work with a lot of people and teaching and helping them to know the marvelous creation that this world has."},' +
    '{"firstName":"Anna","lastName":"Smith", "age":"25", "Certificate":"Tourism","experience":"4 years", "email":"Anna@email.com", "description":"If you are looking for someone who really likes to walk and teach you about plan and animal I am the right person."},' +
    '{"firstName":"Peter","lastName":"Jones", "age":"40", "Certificate":"Tourism","experience":"3 years", "email":"Peter@email.com", "description":"Explere and have adventure is something that I love since I was a child if you have the same desire just call me and spend a fun time." }]}';
    
    obj = JSON.parse(text);
    
    document.getElementById("outPut1").innerHTML = "Name: " + " " + 
    obj.employees[0].firstName + " " + obj.employees[0].lastName + " </br> " + "Age: " + " " + obj.employees[0].age + "</br> " + 
    "Certificate: " + " " + obj.employees[0].Certificate + " </br> " + "Experience:" + " " + obj.employees[0].experience + " </br> " + "Email: " + " " + 
    obj.employees[0].email + " </br> " + "Description: " + " " + obj.employees[0].description;
    

};

function Anna(){

    var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe", "age":"22", "Certificate":"Tourism","experience":"5 years", "email":"John@email.com","description":"I love to work with a lot of people and teaching and helping them to know the marvelous creation that this world has."},' +
    '{"firstName":"Anna","lastName":"Smith", "age":"25", "Certificate":"Tourism","experience":"4 years", "email":"Anna@email.com", "description":"If you are looking for someone who really likes to walk and teach you about plan and animal I am the right person."},' +
    '{"firstName":"Peter","lastName":"Jones", "age":"40", "Certificate":"Tourism","experience":"3 years", "email":"Peter@email.com", "description":"Explere and have adventure is something that I love since I was a child if you have the same desire just call me and spend a fun time." }]}';
    
    obj = JSON.parse(text);
    

    document.getElementById("outPut2").innerHTML = "Name: " + " " + 
    obj.employees[1].firstName + " " + obj.employees[1].lastName + " </br> " + "Age: " + " " + obj.employees[1].age + "</br> " + 
    "Certificate: " + " " + obj.employees[1].Certificate + " </br> " + "Experience:" + " " + obj.employees[1].experience + " </br> " + "Email: " + " " + 
    obj.employees[1].email + " </br> " + "Description: " + " " + obj.employees[1].description;
    

};

function Peter(){

    var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe", "age":"22", "Certificate":"Tourism","experience":"5 years", "email":"John@email.com","description":"I love to work with a lot of people and teaching and helping them to know the marvelous creation that this world has."},' +
    '{"firstName":"Anna","lastName":"Smith", "age":"25", "Certificate":"Tourism","experience":"4 years", "email":"Anna@email.com", "description":"If you are looking for someone who really likes to walk and teach you about plan and animal I am the right person."},' +
    '{"firstName":"Peter","lastName":"Jones", "age":"40", "Certificate":"Tourism","experience":"3 years", "email":"Peter@email.com", "description":"Explere and have adventure is something that I love since I was a child if you have the same desire just call me and spend a fun time." }]}';
    
    obj = JSON.parse(text);
    
    document.getElementById("outPut3").innerHTML = "Name: " + " " + 
    obj.employees[2].firstName + " " + obj.employees[2].lastName + " </br> " + "Age: " + " " + obj.employees[2].age + "</br> " + 
    "Certificate: " + " " + obj.employees[2].Certificate + " </br> " + "Experience:" + " " + obj.employees[2].experience + " </br> " + "Email: " + " " + 
    obj.employees[2].email + " </br> " + "Description: " + " " + obj.employees[2].description;
        
};