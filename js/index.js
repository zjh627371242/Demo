$(document).ready(function() {
    axios.get('https://5dbce78730411e0014f271ba.mockapi.io/index-new')
        .then(function(res) {
            for (var i = 0; i < res.data.length; i++) {
                console.log(res.data[i]);
                $('#new').append("<li class='new'><h5>" + "<img src='" + res.data[i].url + "'><span>" + res.data[i].title + "</span><hr><p>" + res.data[i].ant + "</p><h5/></li>");
            }

        }).catch(function(res) {

        })

    var timer = setInterval(picLoop, 1000);
    var index = 0;

    function picLoop() {
        index++;
        if (index == 5) {
            index = 0
        }
        $('#imgList').animate({
            "left": -1519 * index
        }, 300);
        $('.navDiv a').eq(index).css("background-color", "#262626").siblings().css("background-color",
            "rgba(100,100,100,0.3)");
    }
    $("#imgList").hover(function() {
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    }, function() {
        timer = setInterval(picLoop, 1000);
        $(".left").hide();
        $(".right").hide();
    })
    $('.navDiv a').mouseover(function() {
        clearInterval(timer);
        $(this).css("background-color", "#262626").siblings().css("background-color",
            "rgba(100,100,100,0.3)");
        index = $(this).index();
        $('#imgList').animate({
            "left": -1519 * index
        }, 300);
    })
    $('.navDiv a').mouseout(function() {
        timer = setInterval(picLoop, 1000);
    })
    $(".left").mouseover(function() {
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    });

    $(".left").click(function() {
        index--;
        if (index == -1) {
            index = 4;
        }
        $("#imgList").animate({
            "left": -1519 * index
        }, 300);
        $('.navDiv a').eq(index).css("background-color", "#262626")
            .siblings().css("background-color", "rgba(100,100,100,0.3)");
    })
    $(".right").mouseover(function() {
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    })
    $(".right").click(function() {
        index++;
        if (index == 5) {
            index = 0
        }
        $("#imgList").animate({
            "left": -1519 * index
        }, 300);
        $('.navDiv a').eq(index).css("background-color", "#262626")
            .siblings().css("background-color", "rgba(100,100,100,0.3)");
    })

})