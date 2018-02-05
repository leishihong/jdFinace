function Fetch(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw `${res.status}, ${res.statusText}`
            }
        })
            .then(json => {
                resolve(json)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export default Fetch