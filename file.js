var data = [
  {"id":1,"email":"michael.lawson@reqres.in","first_name":"hael","last_name":"Laon","avatar":"https://reqres.in/img/faces/1-image.jpg"},
  {"id":2,"email":"lindsay.ferguson@reqres.in","first_name":"Lisay","last_name":"Fergon","avatar":"https://reqres.in/img/faces/2-image.jpg"},
  {"id":3,"email":"tobias.funke@reqres.in","first_name":"Tas","last_name":"Fke","avatar":"https://reqres.in/img/faces/3-image.jpg"},
  {"id":4,"email":"byron.fields@reqres.in","first_name":"ron","last_name":"Filds","avatar":"https://reqres.in/img/faces/4-image.jpg"},
  {"id":5,"email":"george.edwards@reqres.in","first_name":"Grge","last_name":"Eards","avatar":"https://reqres.in/img/faces/5-image.jpg"},
  {"id":6,"email":"rachel.howell@reqres.in","first_name":"Rhel","last_name":"Holl","avatar":"https://reqres.in/img/faces/6-image.jpg"},
  {"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
  {"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
  {"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
  {"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
  {"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
  {"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}
  ];

var table = document.createElement('table');
table.setAttribute('class','mt-4 mb-4')
table.setAttribute('align','center');
var hrow = document.createElement('tr');
var head1 = document.createElement('th');
head1.innerHTML = "id";
head1.style.textAlign="center";
head1.style.border = "1px solid black";
var head2 = document.createElement('th');
head2.innerHTML = "email";
head2.style.textAlign="center";
head2.style.border = "1px solid black";
var head3 = document.createElement('th');
head3.innerHTML = "first_name";
head3.style.textAlign="center";
head3.style.border = "1px solid black";
var head4 = document.createElement('th');
head4.innerHTML = "last_name";
head4.style.textAlign="center";
head4.style.border = "1px solid black";
var head5 = document.createElement('th');
head5.innerHTML = "avatar";
head5.style.textAlign="center";
head5.style.border = "1px solid black";

var row1 = document.createElement('tr');
var c11 = document.createElement('td');
c11.style.border = "1px solid black";
var c12 = document.createElement('td');
c12.style.border = "1px solid black";
var c13 = document.createElement('td');
c13.style.border = "1px solid black";
var c14 = document.createElement('td');
c14.style.border = "1px solid black";
var c15 = document.createElement('td');
c15.style.border = "1px solid black";
row1.append(c11,c12,c13,c14,c15);
var row2 = document.createElement('tr');
var c21 = document.createElement('td');
c21.style.border = "1px solid black";
var c22 = document.createElement('td');
c22.style.border = "1px solid black";
var c23 = document.createElement('td');
c23.style.border = "1px solid black";
var c24 = document.createElement('td');
c24.style.border = "1px solid black";
var c25 = document.createElement('td');
c25.style.border = "1px solid black";
row2.append(c21,c22,c23,c24,c25);
var row3 = document.createElement('tr');
var c31 = document.createElement('td');
c31.style.border = "1px solid black";
var c32 = document.createElement('td');
c32.style.border = "1px solid black";
var c33 = document.createElement('td');
c33.style.border = "1px solid black";
var c34 = document.createElement('td');
c34.style.border = "1px solid black";
var c35 = document.createElement('td');
c35.style.border = "1px solid black";
row3.append(c31,c32,c33,c34,c35);
var row4 = document.createElement('tr');
var c41 = document.createElement('td');
c41.style.border = "1px solid black";
var c42 = document.createElement('td');
c42.style.border = "1px solid black";
var c43 = document.createElement('td');
c43.style.border = "1px solid black";
var c44 = document.createElement('td');
c44.style.border = "1px solid black";
var c45 = document.createElement('td');
c45.style.border = "1px solid black";
row4.append(c41,c42,c43,c44,c45);
var row5 = document.createElement('tr');
var c51 = document.createElement('td');
c51.style.border = "1px solid black";
var c52 = document.createElement('td');
c52.style.border = "1px solid black";
var c53 = document.createElement('td');
c53.style.border = "1px solid black";
var c54 = document.createElement('td');
c54.style.border = "1px solid black";
var c55 = document.createElement('td');
c55.style.border = "1px solid black";
row5.append(c51,c52,c53,c54,c55);
var row6 = document.createElement('tr');
var c61 = document.createElement('td');
c61.style.border = "1px solid black";
var c62 = document.createElement('td');
c62.style.border = "1px solid black";
var c63 = document.createElement('td');
c63.style.border = "1px solid black";
var c64 = document.createElement('td');
c64.style.border = "1px solid black";
var c65 = document.createElement('td');
c65.style.border = "1px solid black";
row6.append(c61,c62,c63,c64,c65);


function initial(){
c11.innerHTML = data[0].id;
c12.innerHTML = data[0].email;
c13.innerHTML = data[0].first_name;
c14.innerHTML = data[0].last_name;
c15.innerHTML = data[0].avatar;
c21.innerHTML = data[1].id;
c22.innerHTML = data[1].email;
c23.innerHTML = data[1].first_name;
c24.innerHTML = data[1].last_name;
c25.innerHTML = data[1].avatar;
c31.innerHTML = data[2].id;
c32.innerHTML = data[2].email;
c33.innerHTML = data[2].first_name;
c34.innerHTML = data[2].last_name;
c35.innerHTML = data[2].avatar;
c41.innerHTML = data[3].id;
c42.innerHTML = data[3].email;
c43.innerHTML = data[3].first_name;
c44.innerHTML = data[3].last_name;
c45.innerHTML = data[3].avatar;
c51.innerHTML = data[4].id;
c52.innerHTML = data[4].email;
c53.innerHTML = data[4].first_name;
c54.innerHTML = data[4].last_name;
c55.innerHTML = data[4].avatar;
c61.innerHTML = data[5].id;
c62.innerHTML = data[5].email;
c63.innerHTML = data[5].first_name;
c64.innerHTML = data[5].last_name;
c65.innerHTML = data[5].avatar;
}
initial();
hrow.append(head1,head2,head3,head4,head5);
table.append(hrow,row1,row2,row3,row4,row5,row6);
document.body.append(table);



var block = document.createElement('div');
block.setAttribute('class','conatiner');
block.setAttribute('align','center');

var row = document.createElement("div");
row.setAttribute('class','mt-2');

var first = document.createElement('button');
first.setAttribute('class','btn-warning');
var next = document.createElement('button');
next.setAttribute('class','btn-primary');


first.innerHTML = "First";
next.innerHTML = "Next";

row.append(first,next);
block.append(row);
document.body.append(block);

var dummy = data[0].id;

next.addEventListener('click',function(){
    var b = parseInt(dummy)+5;
c11.innerHTML = data[b].id;
c12.innerHTML = data[b].email;
c13.innerHTML = data[b].first_name;
c14.innerHTML = data[b].last_name;
c15.innerHTML = data[b].avatar;
c21.innerHTML = data[b+1].id;
c22.innerHTML = data[b+1].email;
c23.innerHTML = data[b+1].first_name;
c24.innerHTML = data[b+1].last_name;
c25.innerHTML = data[b+1].avatar;
c31.innerHTML = data[b+2].id;
c32.innerHTML = data[b+2].email;
c33.innerHTML = data[b+2].first_name;
c34.innerHTML = data[b+2].last_name;
c35.innerHTML = data[b+2].avatar;
c41.innerHTML = data[b+3].id;
c42.innerHTML = data[b+3].email;
c43.innerHTML = data[b+3].first_name;
c44.innerHTML = data[b+3].last_name;
c45.innerHTML = data[b+3].avatar;
c51.innerHTML = data[b+4].id;
c52.innerHTML = data[b+4].email;
c53.innerHTML = data[b+4].first_name;
c54.innerHTML = data[b+4].last_name;
c55.innerHTML = data[b+4].avatar;
c61.innerHTML = data[b+5].id;
c62.innerHTML = data[b+5].email;
c63.innerHTML = data[b+5].first_name;
c64.innerHTML = data[b+5].last_name;
c65.innerHTML = data[b+5].avatar;
dummy = data[b].id;
})

first.addEventListener('click',function(){
    initial();
dummy = data[0].id;
})



