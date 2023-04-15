//IIFE Imediatetly Invoked Function Expression
(async function () {
    const response = await fetch("./data.json")
    const data = await response.json()

    //GETTING ALL THE ELEMENTS
    const selectGenre = document.getElementById('selectGenre')
    const selectYear = document.getElementById('selectYear')
    const selectLang = document.getElementById('selectLang')
    const selectRating = document.getElementById('selectRating')
    const selectMovie = document.getElementById('movie')
    const year = document.getElementById('year')

    //FUNCTION FOR DISPLAYING GENRE
    function displayingGenre(allGenre) {
        allGenre.forEach(function (genre) {
            const option = document.createElement('option')
            const optItems = `
            <div class="genres">${genre.genres}</div>            
            `
            option.innerHTML = optItems
            selectGenre.appendChild(option)
        })
    }
    //FUNCTION FOR GENRE
    function genre1() {
        const allGenre = data.filter(function (genre) {
            return genre.genres
        })
        displayingGenre(allGenre)
    }
    genre1()
    // =========================================  //YEAR PART STARTS FROM HERE ======================================//

    //FUNCTION FOR DISPLAYING YEAR
    function displayingYear(allYear) {
        allYear.forEach(function (year) {
            const option = document.createElement('option')
            const optItems = `
            <div class="release_date">${year.release_date}</div>
            `
            option.innerHTML = optItems
            selectYear.appendChild(option)
        })
    }
    //FUNCTION FOR YEAR
    function year1() {
        const a = data.filter(function (year) {
            return year.release_date
        })
        displayingYear(a)
    }
    year1()
    // =========================================  //Language PART STARTS FROM HERE ======================================//

    //FUNCTION FOR DISPLAYING LANGUAGE
    function displayingLang(allLang) {
        allLang.forEach(function (lang) {
            const option = document.createElement('option')
            const optItems = `
            <div class="original_language">${lang.original_language}</div>
            `
            option.innerHTML = optItems
            selectLang.appendChild(option)
        })
    }
    //FUNCTION FOR YEAR
    function lang1() {
        const a = data.filter(function (lang) {
            return lang.original_language
        })
        displayingLang(a)
    }
    lang1()
    // =========================================  //RATING PART STARTS FROM HERE ======================================//
    
    //FUNCTION FOR DISPLAYING RATING
    function displayingRat(allRat) {
        allRat.forEach(function (rat) {
            const option = document.createElement('option')
            const optItems = `
            <div class="vote_average">${rat.vote_average}</div>
            `
            option.innerHTML = optItems
            selectRating.appendChild(option)
        })
    }
    //FUNCTION FOR RATING
    function rat1() {
        const a = data.filter(function (rat) {
            return rat.vote_average
        })
        displayingRat(a)
    }
    rat1()
    // =========================================  //MOVIE PART STARTS FROM HERE ======================================//
    //FUNCTION FOR DISPLAYING RATING
    function displayingMovie(allMovie) {
        allMovie.forEach(function (movie) {
            const option = document.createElement('li')
            const optItems = `
            <div class="title">${movie.title}</div>
            `
            option.innerHTML = optItems
            selectMovie.appendChild(option)
        })
    }
    //FUNCTION FOR RATING
    function movie1() {
        const a = data.filter(function (movie) {
            return movie.title
        })
        displayingMovie(a)
    }
    movie1()

    //  // =========================================  //YEAR PART STARTS FROM HERE ======================================//

    // //FUNCTION FOR DISPLAYING YEAR
    // function displayingYear1(allYear2) {
    //     allYear2.forEach(function (year2) {
    //         const option = document.createElement('p')
    //         const optItems = `
    //         <div class="release_date">${year2.release_date}</div>
    //         `
    //         option.innerHTML = optItems
    //         year2.appendChild(option)
    //     })
    // }
    // //FUNCTION FOR YEAR
    // function year2() {
    //     const a = data.filter(function (year2) {
    //         return year2.release_date
    //     })
    //     displayingYear1(a)
    // }
    // year2()
})()






























