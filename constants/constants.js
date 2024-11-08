"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELL_AT_TP1 = exports.SELL_SLIPPAGE = exports.STOP_LOSS = exports.TAKE_PROFIT2 = exports.TAKE_PROFIT1 = exports.PRICE_CHECK_DURATION = exports.PRICE_CHECK_INTERVAL = exports.MAX_BUY_RETRIES = exports.JITO_FEE = exports.JITO_AUTH_KEYPAIR = exports.BLOCKENGINE_URL = exports.JITO_ALL = exports.JITO_MODE = exports.CHECK_SOCIAL = exports.CHECK_IF_MINT_IS_BURNED = exports.CHECK_IF_MINT_IS_MUTABLE = exports.ONE_TOKEN_AT_A_TIME = exports.MAX_POOL_SIZE = exports.MIN_POOL_SIZE = exports.QUOTE_AMOUNT = exports.QUOTE_MINT = exports.PRIVATE_KEY = exports.MAX_SELL_RETRIES = exports.SNIPE_LIST_REFRESH_INTERVAL = exports.USE_SNIPE_LIST = exports.CHECK_IF_MINT_IS_RENOUNCED = exports.LOG_LEVEL = exports.RPC_WEBSOCKET_ENDPOINT = exports.RPC_ENDPOINT = exports.COMMITMENT_LEVEL = exports.NETWORK = void 0;
const utils_1 = require("../utils");
exports.NETWORK = 'mainnet-beta';
exports.COMMITMENT_LEVEL = (0, utils_1.retrieveEnvVariable)('COMMITMENT_LEVEL', utils_1.logger);
exports.RPC_ENDPOINT = (0, utils_1.retrieveEnvVariable)('RPC_ENDPOINT', utils_1.logger);
exports.RPC_WEBSOCKET_ENDPOINT = (0, utils_1.retrieveEnvVariable)('RPC_WEBSOCKET_ENDPOINT', utils_1.logger);
exports.LOG_LEVEL = (0, utils_1.retrieveEnvVariable)('LOG_LEVEL', utils_1.logger);
exports.CHECK_IF_MINT_IS_RENOUNCED = (0, utils_1.retrieveEnvVariable)('CHECK_IF_MINT_IS_RENOUNCED', utils_1.logger) === 'true';
exports.USE_SNIPE_LIST = (0, utils_1.retrieveEnvVariable)('USE_SNIPE_LIST', utils_1.logger) === 'true';
exports.SNIPE_LIST_REFRESH_INTERVAL = Number((0, utils_1.retrieveEnvVariable)('SNIPE_LIST_REFRESH_INTERVAL', utils_1.logger));
exports.MAX_SELL_RETRIES = Number((0, utils_1.retrieveEnvVariable)('MAX_SELL_RETRIES', utils_1.logger));
exports.PRIVATE_KEY = (0, utils_1.retrieveEnvVariable)('PRIVATE_KEY', utils_1.logger);
exports.QUOTE_MINT = (0, utils_1.retrieveEnvVariable)('QUOTE_MINT', utils_1.logger);
exports.QUOTE_AMOUNT = (0, utils_1.retrieveEnvVariable)('QUOTE_AMOUNT', utils_1.logger);
exports.MIN_POOL_SIZE = (0, utils_1.retrieveEnvVariable)('MIN_POOL_SIZE', utils_1.logger);
exports.MAX_POOL_SIZE = (0, utils_1.retrieveEnvVariable)('MAX_POOL_SIZE', utils_1.logger);
exports.ONE_TOKEN_AT_A_TIME = (0, utils_1.retrieveEnvVariable)('ONE_TOKEN_AT_A_TIME', utils_1.logger) === 'true';
exports.CHECK_IF_MINT_IS_MUTABLE = (0, utils_1.retrieveEnvVariable)('CHECK_IF_MINT_IS_MUTABLE', utils_1.logger) === 'true';
exports.CHECK_IF_MINT_IS_BURNED = (0, utils_1.retrieveEnvVariable)('CHECK_IF_MINT_IS_BURNED', utils_1.logger) === 'true';
exports.CHECK_SOCIAL = (0, utils_1.retrieveEnvVariable)('CHECK_SOCIAL', utils_1.logger) === 'true';
exports.JITO_MODE = (0, utils_1.retrieveEnvVariable)('JITO_MODE', utils_1.logger) === 'true';
exports.JITO_ALL = (0, utils_1.retrieveEnvVariable)('JITO_ALL', utils_1.logger) === 'true';
exports.BLOCKENGINE_URL = (0, utils_1.retrieveEnvVariable)('BLOCKENGINE_URL', utils_1.logger);
exports.JITO_AUTH_KEYPAIR = (0, utils_1.retrieveEnvVariable)('JITO_KEY', utils_1.logger);
exports.JITO_FEE = Number((0, utils_1.retrieveEnvVariable)('JITO_FEE', utils_1.logger)) * 10 ** 9;
exports.MAX_BUY_RETRIES = Number((0, utils_1.retrieveEnvVariable)('MAX_BUY_RETRIES', utils_1.logger));
exports.PRICE_CHECK_INTERVAL = Number((0, utils_1.retrieveEnvVariable)('PRICE_CHECK_INTERVAL', utils_1.logger));
exports.PRICE_CHECK_DURATION = Number((0, utils_1.retrieveEnvVariable)('PRICE_CHECK_DURATION', utils_1.logger));
exports.TAKE_PROFIT1 = Number((0, utils_1.retrieveEnvVariable)('TAKE_PROFIT1', utils_1.logger));
exports.TAKE_PROFIT2 = Number((0, utils_1.retrieveEnvVariable)('TAKE_PROFIT2', utils_1.logger));
exports.STOP_LOSS = Number((0, utils_1.retrieveEnvVariable)('STOP_LOSS', utils_1.logger));
exports.SELL_SLIPPAGE = Number((0, utils_1.retrieveEnvVariable)('SELL_SLIPPAGE', utils_1.logger));
exports.SELL_AT_TP1 = Number((0, utils_1.retrieveEnvVariable)('SELL_AT_TP1', utils_1.logger));
