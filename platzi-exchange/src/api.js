const url = 'https://api.coincap.io/v2'

const getAssets = async () => {
  try {
    const res = await fetch(`${url}/assets?limit=20`)
    const json = await res.json()
    return json.data
  } catch (err) {
    console.error(err)
  }
}

const getAsset = async coin => {
  try {
    const res = await fetch(`${url}/assets/${coin}`)
    const json = await res.json()
    return json.data
  } catch (err) {
    console.error(err)
  }
}

const getAssetHistory = async coin => {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  try {
    const res = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
    const json = await res.json()
    return json.data
  } catch (err) {
    console.error(err)
  }
}

const getMarkets = async coin => {
  try {
    const res = await fetch(`${url}/assets/${coin}/markets?limit=5`)
    const json = await res.json()
    return json.data
  } catch (err) {
    console.error(err)
  }
}

const getExchange = async id => {
  try {
    const res = await fetch(`${url}/exchanges/${id}`)
    const json = await res.json()
    return json.data
  } catch (err) {
    console.error(err)
  }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
}
