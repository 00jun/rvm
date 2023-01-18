function colorImg() {
    // <!-- 올해의 컬러 -->
    document.getElementById("today_img").src="./img/"+todayColor()+".png";
    // <!-- 인생여정 컬러 -->
    document.getElementById("life_img").src="./img/"+lifeColor()+".png";
    // <!-- 성장 컬러 -->
    document.getElementById("grow_img").src="./img/"+growColor()+".png";
    // <!-- 운명 컬러 -->
    document.getElementById("destiny_img").src="./img/"+destinyColor()+".png";
    // <!-- 소울 컬러 -->
    document.getElementById("soul_img").src="./img/"+soulColor()+".png";
    // <!-- 페르소나 컬러 -->
    document.getElementById("persona_img").src="./img/"+personaColor()+".png";
    // <!-- 완성 컬러 -->
    document.getElementById("complete_img").src="./img/"+completeColor()+".png";
    // <!-- 생일 컬러 -->
    document.getElementById("birth_img").src="./img/"+birthColor()+".png";
}