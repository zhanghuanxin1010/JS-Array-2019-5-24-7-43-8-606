// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
if(Array.prototype.isPrototypeOf(a))
{console.log('数组');}

if(Array.prototype.isPrototypeOf(b))
{console.log('数组');}






// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var output=new Array[5];
for(var i=0;i<a.length;i++)
{
  output[i]=a[i]*2;
}




// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors[0]+" "colors[1]+" "colors[2]+" "colors[3])
// case 2 output: 'Red+Green+White+Black'
console.log(colors[0]+"+"colors[1]+"+"colors[2]+"+"colors[3])
// case 3 output: 'Red,Green,White,Black'
console.log(colors[0]+","colors[1]+","colors[2]+","colors[3])



// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var i=0;i<a.length;i++)
{
   for(var j=i+1;j<a.length;j++)
 {
    if(a[j]>a[i])
   {
    var t;
    t=a[j];
    a[j]=a[i];
    a[i]=t;
  
    }
    
  }
}




// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
functon findmMoster(arr)
{
  if(!arr.length)return;
  if(arr.length==1)return 1;
 for(var i=0;i<arr.length;i++)
 {
   var a=arr[i];
   if(!res[a])
   {res[a]=1;}
   else{res[a]++;}

  }

var keys=object.keys(res);
var max=0,maxele;
for(var i=0;i<keys.length;i++)
{
  if(res[keys[i]]>max)
{max=res[keys[i]]};
maxele=keys[i];
}
return'出现次数最多的元素'+maxele;
}









