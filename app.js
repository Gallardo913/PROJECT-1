$(function() {

const promise = $.ajax({
    url: 'https://live-score-api.com'
});

promise.then(
    (data) => {
        console.log(data)
        render(data.results)
    },
    (error) => {
        console.error(error)
    }
})