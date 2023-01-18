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