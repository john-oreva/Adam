const client = require("./app");
const Cronjob = require("cron").CronJob;


const tweet = async () => {
    try{
        await client.v2.tweet ("Hi this is Adam a bot currently running a test")
    } catch(e){
        console.error("tweet not sent")
    }
}

const job = new Cronjob (
    '* * * * * ', () => {
    console.log("cron job running")
    tweet()
})

job.start();
