require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let message = msg.content;
    if (message.substring(0, 2) == '!s' && message[2] >= '0' && message[2] <= '9') {
        let args = message.substring(2).split('+');
        let stage = args[0];
        let quantity;
        let type;
        if (args[1]) {
            quantity = parseInt(args[1].split('k')[0]);
            type = parseInt(args[1].split('k')[1]);
        }
        if ((args[1]) && (args[1].length > 0) && (!type)) {
            msg.reply("Wrong input");
        } else {
            switch(stage) {

                // k4 - 2
                case '1':
                    combineResults([4], msg, -2, quantity, type);
                break;

                // k4 - 1
                case '2':
                    combineResults([4], msg, -1, quantity, type);
                break;

                // k4
                case '3': 
                    combineResults([4], msg, 0, quantity, type);
                break;

                // k6
                case '4': 
                    combineResults([6], msg, 0, quantity, type);
                break;

                // k8
                case '5': 
                    combineResults([8], msg, 0, quantity, type);
                break;

                // k10
                case '6': 
                    combineResults([10], msg, 0, quantity, type);
                break;
                
                // k12
                case '7': 
                    combineResults([12], msg, 0, quantity, type);
                break;

                // 2k6
                case '8': 
                    combineResults([6, 6], msg, 0, quantity, type);
                break;

                // k8 + k6
                case '9': 
                    combineResults([8, 6], msg, 0, quantity, type);
                break;

                // k10 + k6
                case '10': 
                    combineResults([10, 6], msg, 0, quantity, type);
                break;

                // k10 + k8
                case '11': 
                    combineResults([10, 8], msg, 0, quantity, type);
                break;

                // 2k10
                case '12': 
                    combineResults([10, 10], msg, 0, quantity, type);
                break;

                // k12 + k10
                case '13': 
                    combineResults([12, 10], msg, 0, quantity, type);
                break;

                // k20 + k4
                case '14': 
                    combineResults([20, 4], msg, 0, quantity, type);
                break;

                // k20 + k6
                case '15': 
                    combineResults([20, 6], msg, 0, quantity, type);
                break;

                // k20 + k8
                case '16': 
                    combineResults([20, 8], msg, 0, quantity, type);
                break;

                // k20 + k10
                case '17': 
                    combineResults([20, 10], msg, 0, quantity, type);
                break;

                // k20 + k12
                case '18': 
                    combineResults([20, 12], msg, 0, quantity, type);
                break;

                // k20 + 2k6
                case '19': 
                    combineResults([20, 6, 6], msg, 0, quantity, type);
                break;

                // k20 + k8 + k6
                case '20': 
                    combineResults([20, 8, 6], msg, 0, quantity, type);
                break;

                // k20 + k10 + k6
                case '21': 
                    combineResults([20, 10, 6], msg, 0, quantity, type);
                break;

                // k20 + k10 + k8
                case '22': 
                    combineResults([20, 10, 8], msg, 0, quantity, type);
                break;

                // k20 + 2k10
                case '23': 
                    combineResults([20, 10, 10], msg, 0, quantity, type);
                break;

                // k20 + k12 + k10
                case '24': 
                    combineResults([20, 12, 10], msg, 0, quantity, type);
                break;

                // k20 + k10 + k8 + k4
                case '25': 
                    combineResults([20, 10, 8, 4], msg, 0, quantity, type);
                break;

                // k20 + k10 + k8 + k6
                case '26': 
                    combineResults([20, 10, 8, 6], msg, 0, quantity, type);
                break;

                // k20 + k10 + 2k8
                case '27': 
                    combineResults([20, 10, 8, 8], msg, 0, quantity, type);
                break;

                // k20 + 2k10 + k8
                case '28': 
                    combineResults([20, 10, 10, 8], msg, 0, quantity, type);
                break;

                // k20 + k12 + k10 + k8
                case '29': 
                    combineResults([20, 12, 10, 8], msg, 0, quantity, type);
                break;

                // k20 + k10 + k8 + 2k6
                case '30': 
                    combineResults([20, 10, 8, 6, 6], msg, 0, quantity, type);
                break;

                // k20 + k10 + 2k8 + k6
                case '31': 
                    combineResults([20, 10, 8, 8, 6], msg, 0, quantity, type);
                break;

                // k20 + 2k10 + k8 + k6
                case '32': 
                    combineResults([20, 10, 10, 8, 6], msg, 0, quantity, type);
                break;

                // k20 + 2k10 + 2k8 
                case '33': 
                    combineResults([20, 10, 10, 8, 8], msg, 0, quantity, type);
                break;

                // k20 + 3k10 + k8
                case '34': 
                    combineResults([20, 10, 10, 10, 8], msg, 0, quantity, type);
                break;

                // k20 + k12 + 2k10 + k8
                case '35': 
                    combineResults([20, 12, 10, 10, 8], msg, 0, quantity, type);
                break;

                // 2k20 + k10 + k8 + k4
                case '36': 
                    combineResults([20, 20, 10, 8, 4], msg, 0, quantity, type);
                break;

                // 2k20 + k10 + k8 + k6
                case '37': 
                    combineResults([20, 20, 10, 8, 6], msg, 0, quantity, type);
                break;

                // 2k20 + k10 + 2k8 
                case '38': 
                    combineResults([20, 20, 10, 10, 8], msg, 0, quantity, type);
                break;

                // 2k20 + 2k10 + k8
                case '39': 
                    combineResults([20, 20, 10, 10, 8], msg, 0, quantity, type);
                break;

                // 2k20 + k12 + k10 + k8
                case '40': 
                    combineResults([20, 20, 12, 10, 8], msg, 0, quantity, type);
                break;

                // Rzuć sobie k100 byczku
                case '100':
                    combineResults([100], msg, 0, quantity, type);
                break;
                
                default:
                    msg.reply('Wrong input');
                break;
            }
        }
     } else if (message.substring(0, 2) == '!c' && message[2] >= '0' && message[2] <= '9') { 
         switch (message[2]) {
             case '4':
                rollAndCompare([4, 6], msg)
             break;

             case '6':
                rollAndCompare([6, 6], msg)
             break;

             case '8':
                rollAndCompare([8, 6], msg)
             break;

             case '1':
                 if(message[3] == '0') {
                    rollAndCompare([10, 6], msg)
                 } else if(message[3] == '2') {
                    rollAndCompare([12, 6], msg)
                 }
            break; 
         }
    // n * d6
     } else if (message.substring(0, 2) == '!%') {
            // !% xk6 + yk8
        let args = message.substring(2).split('+');
        if (args.length < 2) {
            msg.reply('Wrong input');
        } else {
            let k6s = args[0];
            let k8s = args[1];
            let quantity6 = parseInt(k6s.split('k')[0]);
            let quantity8 = parseInt(k8s.split('k')[0]);
            let type6 = parseInt(k6s.split('k')[1]);
            let type8 = parseInt(k8s.split('k')[1]);
            if (!type8 || !type6 || !quantity6 || !quantity8 || type6 !== 6 || type8 !== 8) {
                msg.reply('Wrong input, error code', quantity6, type6, quantity8, type8);
            } else {
                msg.reply('k6s: ', k6s, ' k8s: ', k8s);
            }
        }

    }
     else if(message[0] == '!' && message[1] >= '1' && message[1] <= '9' && message[2] === 'd' && message[3] >='1'
                    && message[3] <= '9') {
        let diceType;
        if (message[3] == '1' && message[4] && message[4] >= '0' && message[4] <= '9') {
            let number = message[3] + '' + message[4]; 
            diceType = parseInt(number);
        } else {
            diceType = parseInt(message[3]);
        }
         let diceCount = [];
         for (let i = 0; i<parseInt(message[1]); i++ ) {
            diceCount.push(diceType);
         }
         combineResults(diceCount, msg, 0, undefined, undefined);
        }
});


/* METODY DO EARTHDAWNOWEGO BOTA */
function combineResults(dicesArr, msg, modifier, quantity, type) {
    try {
        let finalResult = 0;
        let results = [];
        let i = 0;
        let replyMessage = '';
        if(type) {
            if(!quantity) {
                quantity = 1;
            }
            for (i=0;i<quantity;i++) {
                dicesArr.push(type);
            }
        }
        for(i=0; i<dicesArr.length; i++) {
            finalResult = addResult(finalResult, results, dicesArr[i]);
        }
        finalResult = finalResult + modifier;
        replyMessage = 'Result: **' + (finalResult) +  '** \n';
        if (modifier > 0) {
            replyMessage = 'Wrong input';
        } else { 
            replyMessage = replyMessage + 'Dice rolls: ' + printDices(results, dicesArr);
        }
        if(replyMessage.length > 1500) {
            msg.reply('Anser body is too long to print it. Don\'t overload me ;)');
        } else {
            msg.reply(replyMessage);
        }
    } catch (error) {
        msg.reply('Wrong input or answer body is too long to print it');
    }
    
}

function printDices(results, dicesArr) {
    let printed = '';
    for (let i=0; i<results.length; i++) {
        printed = printed + ' (k' + dicesArr[i] + ':\xa0';
        for(let j=0; j<results[i].length; j++) {
            printed = printed + results[i][j];
            if(j!==results[i].length-1) {
                printed = printed + ',\xa0'
            }
        }
        printed = printed + ')';
        if (i!==results.length-1) {
            printed = printed + ', '
        }
    }
    printed = printed + '';
    return printed;
}

function addResult(res, tab, number) {
    dice = rollADice(number);
    res = res + dice.reduce((a, b) => a + b, 0);
    tab.push(dice);
    return res;
}

function rollADice(dice) {
    let rolled = dice;
    let results = [];
    while (rolled === dice) {
        rolled = Math.floor(Math.random()*dice) + 1
        results.push(rolled);
    }
    return results;
}

/* METODY DO SAVAGE WORLDS BOTA */
// Roll a dice d6 | roll a dice d? | compare | zapisuj wyniki
function rollAndCompare(dicesArr, msg) {
    try {
        let finalResult = 0;
        let results = [];
        let replyMessage = '';

        for(i=0; i<dicesArr.length; i++) {
            finalResult = compareResults(finalResult, results, dicesArr[i]);
        }

        replyMessage = 'Result: **' + (finalResult) +  '** \n';
        replyMessage = replyMessage + 'Dice rolls: ' + printDices(results, dicesArr);
        if(replyMessage.length > 1500) {
            msg.reply('Anser body is too long to print it. Don\'t overload me ;)');
        } else {
            msg.reply(replyMessage);
        }
    } catch (error) {
        msg.reply('Wrong input or answer body is too long to print it');
    }
}

function compareResults(res, tab, number) {
    dice = rollADice(number);
    let diceSum = dice.reduce((a, b) => a + b, 0);
    if (res < diceSum ) {
        res = diceSum;
    }
    tab.push(dice);
    return res;
}

client.login(process.env.DISCORD_TOKEN);
