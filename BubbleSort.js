let a=[234, 43, 55, 63, 5, 6, 235, 547];
let i,j,temp,l;
for(i=0;i<a.length;i++)
{
    for(j=0;j<a.length;j++)
    {
        if(a[j]>a[j+1])
        {
            temp = a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log(a);
    

