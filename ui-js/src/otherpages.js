
function showAUTB(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('TB-form').style.display = 'block';
}

function showVATWD(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('TW-form').style.display = 'block';
}

function AiyinaseT(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('TB-form').style.display = 'none';
    document.getElementById('ATB-form').style.display = 'block';
}

function BogosoT(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('TB-form').style.display = 'none';
    document.getElementById('BTB-form').style.display = 'block';
}

function PresteaT(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('TB-form').style.display = 'none';
    document.getElementById('PTB-form').style.display = 'block';
}

function TandSbalancing(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('TandS-form').style.display = 'block';
}

function XportAllDocs(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('XportAllDocs-form').style.display = 'block';
}

function Download1(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('XportAllDocs-form').style.display = 'none';
    document.getElementById('XportAllDocs-form2').style.display = 'block';
}

function Download2(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('XportAllDocs-form').style.display = 'none';
    document.getElementById('XportAllDocs-form1').style.display = 'block';
}

function Download3(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('XportAllDocs-form').style.display = 'none';
    document.getElementById('XportAllDocs-form3').style.display = 'block';
}

function Sbalancing(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('SuperuserBlc-form').style.display = 'block';
}

function ForInvites(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('SuperuserMore-form').style.display = 'block';
}

function mcb(){
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('mcb-form').style.display = 'block';
}

function hideForm() {

    document.getElementById('overlay').style.display = 'none';

    var forms = document.querySelectorAll('.popup-form');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
}