

/**********************************************************
            Exercise 1
**********************************************************/

// let marksWeights = 78
// let marksHeights = 1.69
// let johnWeights = 92
// let johnHeights = 1.95
//
// let marksBMI = marksWeights / marksHeights**2
// console.log(marksBMI)
//
// let johnBMI = johnWeights / johnHeights**2
// console.log(johnBMI)
//
// let markHigherBMI
//
// if(marksBMI > johnBMI){
//     console.log(`Mark's BMI(${~~marksBMI}) is higher than John's(${~~johnBMI})!`)
// } else{
//     console.log(`John's BMI(${~~johnBMI}) is higher than Mark's(${~~marksBMI})!`)
// }
//
// console.log('-------------------------------------------------')
//
// marksWeights = 95
// marksHeights = 1.88
// johnWeights = 85
// johnHeights = 1.76
//
// marksBMI = marksWeights / marksHeights**2
// console.log(marksBMI)
//
// johnBMI = johnWeights / johnHeights**2
// console.log(johnBMI)
//
// if(marksBMI > johnBMI){
//     console.log(`Mark's BMI(${~~marksBMI}) is higher than John's(${~~johnBMI})!`)
// } else{
//     console.log(`John's BMI(${~~johnBMI}) is higher than Mark's!(${~~marksBMI})`)
// }


/**********************************************************
 Exercise 2
 **********************************************************/

// let dolphins = [96, 108, 89]
// let koalas = [88, 91, 110]
//
// let avg = (preValue, currValue) => preValue + currValue
// let avgDolphins = dolphins.reduce(avg)/dolphins.length
// let avgKoalas = koalas.reduce(avg)/koalas.length
//
// if(avgDolphins > avgKoalas){
//     console.log('The Dolphins won')
// } else if(avgKoalas > avgDolphins){
//     console.log('The Koalas won')
// } else{
//     console.log('Both teams draw')
// }
//
// if(avgDolphins > avgKoalas && avgDolphins > 100){
//     console.log('The Dolphins won 1')
// } else if(avgKoalas > avgDolphins && avgKoalas > 100){
//     console.log('The Koalas won 1')
// } else{
//     console.log('Both teams draw 1')
// }
//
// dolphins = [97, 112, 101]
// koalas = [109, 95, 123]
//
// avgDolphins = dolphins.reduce(avg)/dolphins.length
// avgKoalas = koalas.reduce(avg)/koalas.length
//
// if(avgDolphins > avgKoalas && avgDolphins > 100){
//     console.log('The Dolphins won 2')
// } else if(avgKoalas > avgDolphins && avgKoalas > 100){
//     console.log('The Koalas won 2')
// } else{
//     console.log('Both teams draw 2')
// }


/**********************************************************
 Exercise 3
 **********************************************************/

// const bill = 430
// const tip = bill >= 50 && bill <= 300 ? +(bill*0.15).toFixed(2) : +(bill*0.2).toFixed(2)
//
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)


/**********************************************************
 Exercise 4
 **********************************************************/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
//
// // const dolphins = calcAverage(44, 23, 71)
// // const koalas = calcAverage(65, 54, 49)
// const dolphins = calcAverage(85,54,41)
// const koalas = calcAverage(23,34,27)
//
// const checkWinner = (avgDolphins, avgKoalas) =>{
//     if(avgDolphins > avgKoalas*2){
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
//     } else if(avgKoalas > avgDolphins*2){
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`
//     } else{
//         return 'No one wins'
//     }
// }
//
// console.log(checkWinner(dolphins, koalas))


/**********************************************************
 Exercise 5
 **********************************************************/

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill + bill*0.15 : bill + bill*0.2
// // console.log(calcTip(100))
//
// const bill = [125, 555, 44]
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// console.log(bill, tip)


/**********************************************************
 Exercise 6
 **********************************************************/

// function calcBmi() {
//     this.bmi = this.mass / this.height**2
//     return this.bmi
// }
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: calcBmi
// }
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: calcBmi
// }
//
// mark.calcBMI()
// john.calcBMI()
//
// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(2)})`)
// }



/**********************************************************
 Exercise 7
 **********************************************************/

// const calcTip = (bills) => {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
// }
//
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []
//
// for(let i=0; i < bills.length; i++){
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(tip + bills[i])
// }
//
// console.log(bills)
// console.log(tips)
// console.log(totals)
//
// const calcAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum/arr.length
// }
//
// console.log(calcAverage(bills))
// console.log(calcAverage(tips))
// console.log(calcAverage(totals))


/**********************************************************
 Exercise 7
 **********************************************************/

// const prinForecast = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log(`${arr[i]}°C in ${i+1} days`)
//     }
// }
//
// const array = [17, 21, 23]
// const array2 = [12, 5, -5, 0, 4]
//
// prinForecast(array)
// prinForecast(array2)


/**********************************************************
 Exercise 7
 **********************************************************/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players:[
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummerls',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds:{
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// }
//
// // const players1 = game.players[0]
// // const players2 = game.players[1]
// const [players1, players2] = game.players
//
// // const gk = players1[0]
// // const fieldPlayers = players1.shift()
// const [gk, ...fieldPlayers] = players1
//
// // const allPlayers = players1.concat(players2)
// const allPlayers = [...players1, ...players2]
//
// // const players1Final = players1.push('Thiago', 'Coutinho', 'Perisic')
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
//
// // const team1 = game.odds.team1
// // const draw = game.odds.x
// // const team2 = game.odds.team2
// const {odds: {team1, x:draw, team2}} = game
//
// const printGoals = (...players) => {
//     console.log(`${players.length} goals were scored`)
// }
//
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals('Davies', 'Muller')
//
// team1 < team2 && console.log('Team 1 is more likely to win')
// team1 > team2 && console.log('Team 2 is more likely to win')


/**********************************************************
 Exercise 8
 **********************************************************/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players:[
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummerls',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds:{
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// }
//
// // for(let i = 0; i < game.scored.length; i++){
// //     console.log(`Goal ${i+1}: ${game.scored[i]}`)
// // }
// for(const [i, players] of game.scored.entries()){
//     console.log(`Goal ${i+1}: ${players}`)
// }
//
// const odds = Object.values(game.odds)
// let avg = 0
//
// for(const odd of odds){
//     avg += odd
// }
// avg /= odds.length
// console.log(avg)
//
// for(const [team, odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//     console.log(`Odd of ${teamStr}  ${odd}`)
// }
//
// const scorers = {}
//
// for(const player of game.scored){
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1)
// }
//
// console.log(scorers)


/**********************************************************
 Exercise 9
 **********************************************************/

// const gameEvents = new Map([
//     [17, 'Goal'],
//     [36, 'Substitution'],
//     [47, 'Goal'],
//     [61, 'Substitution'],
//     [64, 'Yellow card'],
//     [69, 'Red card'],
//     [70, 'Substitution'],
//     [72, 'Substitution'],
//     [76, 'Goal'],
//     [80, 'Goal'],
//     [92, 'Yellow card']
// ])
//
// const events = [...new Set(gameEvents.values())]
// console.log(events)
//
// gameEvents.delete(64)
// console.log(gameEvents)
//
// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)
//
// for(const [min, event] of gameEvents){
//     const half = min <=45 ? 'First' : 'Second'
//     console.log(`[${half} Half]: ${min}: ${event}`)
// }


/**********************************************************
 Exercise 10
 **********************************************************/

const camelCase = (str) => {
    let [first, second] = str.toLowerCase().trim().split('_')
    const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`
    console.log(output)
}

console.log(camelCase('first_name'))



























