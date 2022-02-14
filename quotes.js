$(document).ready( function() {
    $.ajax({
      url: 'https://type.fit/api/quotes',
      method: 'GET',
      dataType: 'json',
  
    })
        .then(function(data) {
            console.log(data);
            
            function getQuotes() {
                const indx = Math.floor(Math.random()* (data.length));
                const randomQuotes = data[indx];
                
                const currentQuote = randomQuotes.text;
                const currentAuthor = randomQuotes.author;

                $("#text").html(currentQuote);
                $("#author").html((currentAuthor));

                $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
                );

                const colors = ["#150485", "#7D0633", "#C02739", "#45046A", "#FF4301", "#C70039", "#FF1E56"];
                const color = Math.floor(Math.random() * colors.length);
            
                $('#body_custom').css(
                    {
                    backgroundColor: colors[color]
                    },
                    1000
                );
            
            }
            
            getQuotes();

            $('#new-quote').on('click', getQuotes);

        });
});

