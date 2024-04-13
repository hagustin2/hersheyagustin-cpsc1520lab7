 async function appInit() {
    const res = await fetch('https://661a1e6c125e9bb9f29b5a74.mockapi.io/api/v1/albums')
    const payload = await res.json()
    console.log(payload)
 }

 appInit()