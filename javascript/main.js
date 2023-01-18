/*
오늘 날짜
today = Tue Jan 10 2023 21:15:32 GMT+0900 (한국 표준시)
to_year = 2023
to_month = 1
today = 10
*/
let today = new Date();
console.log("Test:",today);
let to_year = today.getFullYear();
let to_month = today.getMonth() + 1;
let to_day = today.getDate();

/*
user_year = 1999
user_month = 01
user_day = 31
*/
let user_year;
let user_month;
let user_day;

/*
자음, 모음 점수
*/
let jm_score = new Map([
    ["ㄱ",1],["ㄴ",2],["ㄷ",3],["ㄹ",4],["ㅁ",5],["ㅂ",6],["ㅅ",7],["ㅇ",8],["ㅈ",9],["ㅊ",1],["ㅋ",2],["ㅌ",3],["ㅍ",4],["ㅎ",5],["ㅏ",1],["ㅑ",2],["ㅓ",3],["ㅕ",4],["ㅗ",5],["ㅛ",6],["ㅜ",7],["ㅠ",8],["ㅡ",9],["ㅣ",1],["ㅐ",2],["ㅒ",3],["ㅖ",5],["ㅔ",4]
])

// 사용법 ja_score.get("ㅈ");


function start() {
    change();
    userInfo();
    colorImg();
}

function change() {
    console.log("change 함수 실행");
    event.preventDefault();
}

let name = "";

function userInfo() {
    name = document.getElementById('name').value;
    name = name.slice(1, 3);
    let jumin = document.getElementById('date').value;
    jumin = jumin.split("-");

    
    user_year = jumin[0];
    user_month = jumin[1];
    user_day = jumin[2];

    // 길동 first_name = 길 , second_name = 동
    first_name = name[0];
    second_name = name[1];
    // 자모분리 테스트
    jamoCheck(name);
    return [user_year, user_month, user_day];
}

// 숫자를 받으면 한자리로 만들어주는 함수
function one(num) {
    if(num <= 0) {
        num = Math.abs(num);
    } 

    while(true) {
        // 숫자를 문자열로 변환
        num = num.toString(); 
        // numleng 에 숫자 자릿수 담기
        numleng = num.length;

        // 숫자 자릿수가 한자리 수 이상일때
        if(numleng > 1) {
            // 모든 자릿 수를 더하고 numtotal 에 넣음
            numsplit = num.split("");
            let numtotal = 0;
            
            for(var i = 0; i < numleng; i++) {
                numtotal += parseInt(numsplit[i]);
            }
            num = numtotal;
        } else {
            break;
        }
        
    }
    num = parseInt(num);
    return num;
}

// 월 이나 일 같은 십의자리 더해서 한자리로 만드는 함수
function spl(num) {
    num = num.toString();
    num = num.split("");
    num = parseInt(num[0]) + parseInt(num[1]);
    return num;
}

// 자음 확인
function jamoCheck(word) {
    // 자모 분리
    word = Hangul.disassemble(word);
    wordleng = word.length;

    // 자음 포인트 ja_point / 모음 포인트 mo_point
    ja_point = 0;
    mo_point = 0;
    jm_point = 0;

    for(var i = 0; i < wordleng; i++) {

        s = word[i];

        // 자음인지 아닌지
        ja = Hangul.isConsonant(s);

        // 자음이면 자음포인트 + / 모음이면 모음포인트 +
        if(ja == true) {
            ja_point += jm_score.get(s);
        } else {
            mo_point += jm_score.get(s);
        }
    }

    jm_point += ja_point + mo_point;

    return [ja_point, mo_point, jm_point];
    // Index 자음 0 / 모음 1 / 자모 2
}

// 올해의 컬러 : 올해 년도와 생일 합산한 한 자리수 / ex) 2023 -> 7 / 생일 07.09 0 + 7 + 0 + 9 = 16 -> 1 + 6 -> 7 / 7 + 7 = 14 -> 1 + 4 = 5 / 결과 5
function todayColor() {
    p = spl(user_month) + spl(user_day);
    p = one(one(to_year) + one(p));
    console.log("올해의 컬러는 ",p);
    return p;
}

// 인생여정 컬러 : ex) 1974-03-14 / 년도를 한자릿수 함수 돌림(1974) -> 3 / 3(년도) + 3(월) + 1(일) + 4(일) = 11 이 결과도 한자릿수 함수 돌림 -> 2 / 결과 = 2
function lifeColor() {
    p = one(user_year) + spl(user_month) + spl(user_day);
    p = one(p);
    console.log("인생여정은 ",p);
    return p;
}

// 성장 컬러 : 출생이름 (성 제외) 첫번째만 합산
function growColor() {
    p = jamoCheck(name[0]);
    p = one(p[2]);
    console.log("성장코어는 ",p);
    return p;
}

// 운명 컬러 : 출생이름 (성 제외) 합산
function destinyColor() {
    p = jamoCheck(name);
    p = one(p[2]);
    console.log("운명 컬러는 ",p);
    return p;
}

// 소울 컬러 : 출생이름 (성 제외) 모음 합산
function soulColor() {
    p = jamoCheck(name);
    p = one(p[1]);
    console.log("소울 컬러는 ",p);
    return p;
}

// 페르소나 컬러 : 출생이름 (성 제외) 자음 합산
function personaColor() {
    p = jamoCheck(name);
    p = one(p[0]);
    console.log("페르소나 컬러는 ",p);
    return p;
}

// 완성 컬러 : 인생여정 + 운명
function completeColor() {
    p = one(lifeColor() + destinyColor());
    console.log("완성 컬러는 ",p);
    return p;
}

// 생일 컬러 : ex) 03-14 / 1 + 4 = 5 & 14
function birthColor() {
    p = one(user_day);
    console.log("생일 컬러는 ",p);
    return p;
}