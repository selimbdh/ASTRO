
$( document ).ready(function() {
var opening = ["this",'the',,'maybe','that','in the end of '];
var verbs = ['month','year','weak','seasson','day','hour','minute','faze'];
var objects = ['a surprise','a catastrophique','','','','terrible thing','a weird thing',];
var nouns = ['will','gonna',];
var adj=['happen','disappear','rise','end','cleard']
var randomElement = function(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

 function randomMessage(){
    return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(adj) ].join(' ');
  };
  function clicks(){
    $('#result').empty()
    var message=randomMessage()
    $('#result').append('<p class="ligne">'+message+'</p>')
}
function postSomething(){
    if($('#input').val()==='selim'){
        $('.posts').append('<p>'+'you are a toxic manipulater shit go  out of here' +'</p>')
    }
    else
    $('.posts').append('<p class="">'+$('#input').val() +'</p>').addClass("postfont")
   }
$("#Aries").click(function(){
    alert('<div class="alert">',"Expanding your mind could be of interest today, Aries. You might decide to plan a trip to a place you've always wanted to visit, if possible. Or you could decide to go back to school for an advanced degree. Either way, you're likely to spend the day considering the idea and doing a lot of research. At some point you will want to get in a workout to rid your system of some of the day's tension.",'</div>')
})
$("#Taurus").click(function(){
    alert('<div class="alert">',"Generally, Taurus, you tend to be interested in what makes everything tick, from the human mind to the workings of the Universe to religion. Today that interest could be piqued by something you read or hear. You might want to delve into a field of interest and learn whatever you can about it. You could have some insights that are as valid as anyone else's, so write them down!",'</div>')
})
$("#Gemini").click(function(){
    alert('<div class="alert">'," Stimulating conversations could take place with partners of all sorts, Gemini, from business to exercise to romantic. Some new and useful information could come your way that you will want to explore further. This is a great day to execute legal papers or enter into any kind of agreement or commitment. It's a good time to sign up for an online class or workshop. Make good use of the energies of the day.",'</div>')
})
$("#cancer").click(function(){
    alert('<div class="alert">'," Some stimulating discussions could take place today. Your energy is likely to be very high, Cancer. You may want to throw yourself into your work, particularly if it involves paperwork. You might also want to get in a workout, try your hand at writing, or read about the latest discoveries concerning optimal health. Books, magazines, and the Internet could prove especially useful.",'</div>')
})
$("#Leo").click(function(){
    alert('<div class="alert">'," Today you might decide to do some writing, Leo. This could be job related, but it's more likely personal, either correspondence with friends and colleagues or creative. Some stimulating discussion could take place with friends, romantic partners, or children that could set your mind buzzing with new ideas. This is a great day to attend or participate in a solo sport.",'</div>')
})
$("#Virgo").click(function(){
    alert('<div class="alert">',"Some people who share your interests could call you today. You might want to take a walk while on the phone with each other, but you will probably get into some stimulating debates. Don't be surprised if you both talk at once! New books that you will want to read could come to your attention. In the evening, stream some movies on whatever subject you've discussed. ",'</div>')
})
$("#Libra").click(function(){
    alert('<div class="alert">',"Your mind will be especially quick and active today, Libra, and you're likely to want to spend much of the day involved in intellectual activities like reading, writing, or teaching. Communication with others should be a powerful part of your day, so you will probably spend time on the phone. You will want to write down many of the ideas you hear. You will find most of them interesting and want to remember them. ",'</div>')
})
$("#Scorpio").click(function(){
    alert('<div class="alert">',"Today you might decide to tackle your financial paperwork and get it all done. This is a great day for that, Scorpio, although you might be a little too ambitious and not get as much done as you'd like. This is a good time to make use of any writing talent, because ideas could be coming to you thick and fast. Expect many of letters or phone calls in this busy and stimulating day. ",'</div>')
})
$("#Sagittarius").click(function(){
    alert('<div class="alert">',"Your mind is usually quick, agile, and hungry for information, Sagittarius. Today it's likely to be even more so than usual. Your curiosity is high, and you could go to unusual lengths to satisfy it. You might also feel particularly energetic and want to get in a good workout. This is a good idea. Exercise can clear your head and give you a better perspective on new ideas and information. ",'</div>')
})
$("#Capricon").click(function(){
    alert('<div class="alert">',"You generally tend to be sensitive and intuitive, Capricorn, but today you might be even more so. Reading about people from other places and times might cause you to tune into their thoughts and feelings and receive new insight into human nature. Creative projects, particularly writing, benefit from this. If you want to remember what you come up with, write it down.",'</div>')
})
$("#Aquarius").click(function(){
    alert('<div class="alert">',"- A virtual group meeting or social event could bring up so many new and interesting ideas that you may not be able to digest them all, Aquarius. Some new friends who share your interests might want to continue the discussions. Your mind is especially quick today. You could well grasp unusual concepts that usually don't interest you. But watch your step - you might be so preoccupied that you could have an accident.",'</div>')
})
$("#Pisces").click(function(){
    
    alert('<div class="alert">'," A lot of paperwork might need attention today, Pisces. You might throw a lot of your focus and energy into getting it all done. Stimulating conversations with colleagues could keep your mind occupied so you avoid boredom. You could take a walk at the end of the day since you're apt to encounter so much new information that you will want to clear your head in order to absorb it all.",'</div>')
})

});