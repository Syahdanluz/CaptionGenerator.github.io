var quotes= [
'Setiap jalan adalah jumlahan pilihan segala percabangan',
'Dunia lahir dari kebaikan',
'Hidup adalah kemungkinan',
'Kepandaian menuai haruslah selaras dengan kepandaian menanam',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}