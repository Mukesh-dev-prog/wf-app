const cache = {}

const check = async (date) => {
    if(cache[date] === undefined){
        return false;
    }
    else{
        return cache[date]
    }
}

const updateCache = async(year) => {
    const API = `https://date.nager.at/api/v3/PublicHolidays/${year}/US`

    const data = await fetch(API).then((res) => res.json());

    data.forEach((item) => {
        cache[item.date] = item.localName;
    })
}

module.exports = {
    check: check,
    updateCache: updateCache
}