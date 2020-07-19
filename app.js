function getFromServer (params) {
    const { url, method = "GET" } = params
    return $.ajax({
        url,
        method,
    })
}

$(async function() {
    const container = $('#container');

    try {
        const result = await getFromServer({url : "https://randomuser.me/api/?results=50"})
        console.log(result);
        draw(result.results)
    } catch (err) {
        console.log(err);
    }

    function draw(data) {
        container.empty()
        const tr = data.map((user) => {
            return getTR(user)
        })

        container.append(...tr)
    }
    
    function getTR(user) {
        const row = $('<tr></tr>');
        const firstName = $(`<td>${user.name.first}</td>`);
        const lastName = $(`<td>${user.name.last}</td>`);
        const gender = $(`<td>${user.gender}</td>`);

        return row.append(firstName, lastName, gender);
    }
})