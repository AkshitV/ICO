//url parameters
const BASE_URL = "http://localhost:3000/";

const MAIL_FROM = '';
const MAIL_FROM_AUTH = '@gmail.com';
const MAIL_PASSWORD = '';
const MAIL_HOST = 'smtp.gmail.com';
const MAIL_PORT = '587';
const MAIL_METHOD = 'SMTP';
const MAIL_SECURE = true;
const BOUNTY_ADDRESS = "0x453990C0AA4b3C616CEeC05f5D909539920432F4";
const OWNER_ADDRESS = "0x9601571625e59bE592ecc925Fb18e8BDb7D0926D";
const PRIV_KEY = "";
const INFURA_ENDPOINT = "https://ropsten.infura.io/";
const INFURA_KEY = "";
const CONTRACT_ADDRESS = '0x42778e2cbaa21a73805a845f91a1968618973391';
const DECIMALS = 1000000000000000000;
const SECRET = "Secret";
const ETHERSCAN_API_KEY = "";
const ETHERSCAN_URL_DETAILS = "https://ropsten.etherscan.io/tx";
//const ETHERSCAN_URL_DETAILS = "https://etherscan.io/tx/";
const ETHERSCAN_URL = "https://api-ropsten.etherscan.io";
//const ETHERSCAN_API_KEY = "https://api.etherscan.io";
const ETHERSCAN_API_URL = "https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=";
const ROUND_INDEXES = [1,2,3,4,5,6];
const ETHERSCAN_USER_BOUNTY = "https://api-ropsten.etherscan.io/api?module=account&action=tokentx&contractaddress=";
module.exports = {
    ROUND_INDEXES:ROUND_INDEXES,
    ACCESSURL: BASE_URL,
    MAIL_FROM: MAIL_FROM,
    MAIL_FROM_AUTH: MAIL_FROM_AUTH,
    MAIL_PASSWORD: MAIL_PASSWORD,
    MAIL_HOST: MAIL_HOST,
    MAIL_PORT: MAIL_PORT,
    MAIL_METHOD: MAIL_METHOD,
    MAIL_SECURE: MAIL_SECURE,
    PRIV_KEY: PRIV_KEY,
    BOUNTY_ADDRESS: BOUNTY_ADDRESS,
    OWNER_ADDRESS: OWNER_ADDRESS,
    INFURA_KEY: INFURA_KEY,
    DECIMALS: DECIMALS,
    SECRET: SECRET,
    CONTRACT_ADDRESS: CONTRACT_ADDRESS,
    INFURA_ENDPOINT: INFURA_ENDPOINT,
    ETHERSCAN_API_KEY: ETHERSCAN_API_KEY,
    ETHERSCAN_URL: ETHERSCAN_URL,
    ETHERSCAN_URL_DETAILS: ETHERSCAN_URL_DETAILS,
    ETHERSCAN_API_URL:ETHERSCAN_API_URL,
    ETHERSCAN_USER_BOUNTY:ETHERSCAN_USER_BOUNTY
};
