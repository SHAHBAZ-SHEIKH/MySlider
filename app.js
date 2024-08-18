let crickerterData = [
    {imageUrl:"https://www.samaa.tv/images/sa-34.jpg",
    name:"Babar Azam",
    profession:"Cricketer",
    Description:"Mohammad Babar Azam, is a Pakistani international cricketer and the current captain of the Pakistan national cricket team in limited overs. He is widely regarded as one of the finest batters in contemporary world cricket."},

    {imageUrl:"https://miro.medium.com/v2/resize:fit:900/1*mtSNo5MIEX7trMtFVRzbTg.jpeg",
    name:"AB de Villiers",
    profession:"Cricketer",
    Description:"Abraham Benjamin de Villiers is a South African former international cricketer, and a current commentator. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."},

    {imageUrl:"https://www.thenews.com.pk/assets/uploads/updates/2021-11-02/905186_2906224_jos-buttler2_updates.jpg",
    name:"Jos Buttler",
    profession:"Cricketer",
    Description:"Joseph Charles Buttler MBE is an English cricketer who is the captain of the England cricket team in limited overs cricket, and previously played for the England Test team."},

    {imageUrl:"https://c.cricketpakistan.com.pk/images/posts/cover_1687583415FotoJet---2023-06-24T100954.829.jpg",
    name:"Imad Wasim",
    profession:"Cricketer",
    Description:"Syed Imad Wasim Haider, commonly known as Imad Wasim, is a Pakistani cricketer who played for Pakistan national cricket team He is a left-handed all-rounder. He is known as t20 specialist. He was the member of the Pakistan team that won the 2017 ICC Champions Trophy."},

    {imageUrl:"https://sport360.com/wp-content/uploads/2019/12/Clarke.jpg",
    name:"Michael Clarke",
    profession:"Cricketer",
    Description:"A right-handed batsman renowned for his elegance and grit, he played a pivotal role in Australia's success for over a decade. He captained the national team in both Test and One Day International formats, leading them to a historic victory in the 2015 Cricket World Cup."},
    
]

var count = 0

function previousHandler(){
    console.log("test")
    if(count <= 0){
        console.log(count)
        count ++;
        count = crickerterData.length -1
        
        
        
        var name = document.getElementById("name")
        var profession = document.getElementById("profession")
        var description = document.getElementById("des")
        var img = document.getElementById("img")
        img.src=crickerterData[count].imageUrl
        name.innerHTML=crickerterData[count].name
        profession.innerHTML=crickerterData[count].profession
        description.innerHTML=crickerterData[count].Description

    }

        count --;
        var name = document.getElementById("name")
        var profession = document.getElementById("profession")
        var description = document.getElementById("des")
        var img = document.getElementById("img")
        img.src=crickerterData[count].imageUrl
        name.innerHTML=crickerterData[count].name
        profession.innerHTML=crickerterData[count].profession
        description.innerHTML=crickerterData[count].Description
        
}

function nextHandler(){
    
        if(count == crickerterData.length -1){
            count ++;
            count =0
            
            var name = document.getElementById("name")
            var profession = document.getElementById("profession")
            var description = document.getElementById("des")
            var img = document.getElementById("img")
            img.src=crickerterData[count].imageUrl
            name.innerHTML=crickerterData[count].name
            profession.innerHTML=crickerterData[count].profession
            description.innerHTML=crickerterData[count].Description
        }
        else{
            count ++;
            var name = document.getElementById("name")
            var profession = document.getElementById("profession")
            var description = document.getElementById("des")
            var img = document.getElementById("img")
            img.src=crickerterData[count].imageUrl
            name.innerHTML=crickerterData[count].name
            profession.innerHTML=crickerterData[count].profession
            description.innerHTML=crickerterData[count].Description
        }
    
}

