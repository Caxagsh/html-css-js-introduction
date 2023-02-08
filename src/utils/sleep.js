export function sleep(timeout) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), timeout * 1000)
    })
}