const augment = require('./augment').default;
let globalObj;
try {
    globalObj = Function('return this')();
} catch (e) {
    globalObj = window;
}
augment(globalObj);
globalObj.env = {
    API_BASE: 'https://nodestestnet.acrylplatform.com',
    SEED: 'default seed',
    CHAIN_ID: 'K',
    timeout: 20000
};
