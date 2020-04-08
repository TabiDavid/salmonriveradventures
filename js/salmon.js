//google fonts code//

WebFont.load({ google: { families: ['Trade Winds', 'Roboto'] } });


// Menu nav bar//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



//Json object//
function guideRiver(){

    var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe", "age":"22", "Certificate":"Tourism","experience":"5 years", "email":"John@email.com","description":"I love to work with a lot of people and teaching and helping them to know the marvelous creation that this world has."},' +
    '{"firstName":"Anna","lastName":"Smith", "age":"25", "Certificate":"Tourism","experience":"4 years", "email":"Anna@email.com", "description":"If you are looking for someone who really likes to walk and teach you about plan and animal I am the right person."},' +
    '{"firstName":"Peter","lastName":"Jones", "age":"40", "Certificate":"Tourism","experience":"3 years", "email":"Peter@email.com", "description":"Explere and have adventure is something that I love since I was a child if you have the same desire just call me and spend a fun time." }]}';
    
    obj = JSON.parse(text);
    
    document.getElementById("outPut1").innerHTML =
    obj.employees[0].firstName + " " + obj.employees[0].lastName + " " + obj.employees[0].age + " " + 
    obj.employees[0].Certificate + " " + obj.employees[0].experience + " " + obj.employees[0].email + " " + obj.employees[0].description;
    


    document.getElementById("outPut2").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName + " " + obj.employees[1].age + " " + 
    obj.employees[1].Certificate + " " + obj.employees[1].experience + " " + obj.employees[1].email + " " + obj.employees[1].description;
    
    
    document.getElementById("outPut3").innerHTML =
    obj.employees[2].firstName + " " + obj.employees[2].lastName + " " + obj.employees[2].age + " " + 
    obj.employees[2].Certificate + " " + obj.employees[2].experience + " " + obj.employees[2].email + " " + obj.employees[2].description;
        

};