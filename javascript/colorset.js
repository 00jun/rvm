function colorSet() {
    // 올해의컬러
    document.getElementById("today_num").value = todayColor();
    // 인생여정
    document.getElementById("life_num").value = lifeColor();
    // 성장컬러
    document.getElementById("grow_num").value = growColor();
    // 운명컬러
    document.getElementById("dstn_num").value = destinyColor();
    // 소울컬러
    document.getElementById("soul_num").value = soulColor();
    // 페르소나
    document.getElementById("prsn_num").value = personaColor();
    // 완성컬러
    document.getElementById("com_num").value = completeColor();
    // 생일컬러
    document.getElementById("br_num").value = birthColor();
    console.log("완료");
}