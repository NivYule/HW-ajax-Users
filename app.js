// Call from Server:

function getFromServer (params) {
    const { url, method = "GET" } = params
    return $.ajax({
        url,
        method,
    })
}
 
async function init() {
    try {
        const result = await getFromServer({url : "https://randomuser.me/api/?results=50"})
        console.log(result);
        // const renderedResult = result.result
        // DrawRenderAPI(renderedResult)
    } catch (error) {
        console.log(error);
    }
}
init()