
setTimeout(() => {
    import('./utils/math').then((d) => {
        console.log(d);
    })
}, 3000)
