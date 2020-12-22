console.log(`ddd ${5+2} asd`);
let homeword = true;
console.log(`아 숙제 ${homeword ? "다했다" : "까먹었다"}`);


//화살표 함수 이름이 x 익명함수
// (매개변수) => { 함수 본문 , 리턴값 }
//매개변수가 하나면 소괄호 생갹가능
// 만약 본문이 한 줄이라면 중괄호도 생략 
// 중괄호 생략이라면 리턴은 암묵적으로 이우러어짐

const arowadd =(num1,num2) =>num1+num2;
console.log(arowadd(1,2));

const ad = num1 => num1*num1;
console.log(ad(3));

const ipsos = num => (num<=0 ? 0 : num);

setTimeout( ()=> console.log("heoo"), 3000);


const number =[1,2,3,4];
// 배열의 길이 알아보기 .length 
console.log(number.length);
//선언한 배열의 길이와 요소의 갯수는 같을까?? : 다르다! 
// ex arr=[]   arr[2]=3  >>> 2번배열에는 3이라는 값이 들어가지는 1번 0번에는 아무런 값이 없으므로 길이와 요소갯수는 다르다

//배열의 요소 추가 하기 
    //배열을 직접 건드리기 
//  .push(추가요소)
    //직접 건드리지 않고 
    // .concat(추가요소)

    number.push(7,8);
    console.log(number);
    
    const rul = number.concat(5,6);
console.log(rul);


// 배열 요소 순회하기

const namearr =['지현' , '길환'];

for( i=0; i<namearr.length; i ++){
    console.log(`내이름은 ${namearr}이야`);
}   

namearr.forEach(name => console.log(name));

// .map
const nameas = [1,3,5,7,9];

const newarr = nameas.map(num=>num*2);
console.log(newarr);

// 내가 원하는 조건을 만족하는 배열 속 요소 찾기
//filter(함수)

const flitearr=nameas.filter( x=> x>4 );
console.log(flitearr);

// fliter 용도 음 ... 조회?

const postlist = [{"date": "today" , "id" :1 }, {"date" : "yesterday" , "id" : 2}, {"date" : "today", "id":3}];
const daylist = postlist.filter(post=> post.date==="today");
console.log(daylist);
