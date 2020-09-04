const body = document.querySelector("body");  //배경이미지는 body쪽에 해당함으로 HTML body부분 지정
const IMG_NUMBER =3;  //3장의 이미지를 선택함

//그림출력 함수 
// 이미지를 랜덤하게 출력해야함
// 생성자함수
// .src (이미지 가져오는 메서드) `파일위치 확장자선언부분 ` (+1부분은 기본값을 1로 하기위해서 1,2,3)
//  JS에서 자체적으로 요소 생성하기 위해서는 classList.add("이름")
// appendChild(image) body부분에 출력하기 위한 부분.

function paintImage(imgNumber) {  
    const image = new Image();
    image.src = `images/${imgNumber + 1 }.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
//랜덤함수
//Math 메서드.floor를 사용하면 
function genRandom(){
    const number = Math.floor(Math.random()   *  IMG_NUMBER);
    return number;
}
//함수 실행 초기화
function itit() {
    const randomNumber=genRandom();  
    paintImage(randomNumber);
}

itit();