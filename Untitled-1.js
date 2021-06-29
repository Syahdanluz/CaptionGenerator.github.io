var quotes= [
'Setiap jalan adalah jumlahan pilihan segala percabangan',
'Dunia lahir dari kebaikan',
'Hidup adalah kemungkinan',
'Kepandaian menuai haruslah selaras dengan kepandaian menanam',
'Hidup adalah keseimbangan',
'Apakah kelapa mempertanyakan kenapa dirinya bisa berakhir di dalam dadar gulung?',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}