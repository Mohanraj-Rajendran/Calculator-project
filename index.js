let os=document.getElementById('os');

function display(text)
{
    os.value= os.value+text;
}

function aclear()
{
os.value="";
}
 
function del()
{
    os.value=os.value.slice(0,-1);
}

function cube()
{
    os.value=os.value*os.value*os.value;
}

function square()
{
    os.value=os.value*os.value;
}
function calc()
{
    os.value=eval(os.value);
}

function sqroot()
{
os.value= Math.sqrt(os.value);
}

function curoot()
{
 os.value=Math.cbrt(os.value);   
}

function Arect()
{
 let l=prompt('Enter the Rectangle Length(L):');   
 let w=prompt('Enter the Rectangle Length(W):');
 let ans=l*w
alert(`Area of Rectangle is ${ans}` );
}

function VCylinder()
{
    let R=prompt('Enter Cylinder Radius(R)=');
    let H=prompt('Enter Cylinder height(H)=')
    let Vol=3.14*R*R*H
    alert(`Voulme of Cylinder is ${Vol} mm3`)
}