
    var quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en';


    $(document).ready(function() {
        $(".btn").on('click',function() {
            $.ajax({
                url: quoteUrl,
                crossDomain: true,
                jsonpCallback: 'parseQuote',
                dataType: 'jsonp',
                success: function(data) {
                    $(".insertionPoint>.quote").html(data.quoteText);
                    $(".author").html("-" + data.quoteAuthor);
                    $(".twitter-share-button").attr('data-text',encodeURIComponent(data.quoteText));
                    console.log($(".twitter-share-button").attr('data-text'));
                }

            });


        });



    });
