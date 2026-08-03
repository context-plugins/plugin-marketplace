# GiftCard — operations

Accessor: `client.GiftCard` · Source: `Api/GiftCard.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BuyABinanceCodeTrade
- **HTTP**: `POST /sapi/v1/giftcard/buyCode` (Default (api))
- **Notes**: This API is for buying a fixed-value Binance Code, which means your Binance Code will be redeemable to a token that is different to the token that you are paying in. If the token you’re paying and the redeemable token are the same, please use the Create Binance Code endpoint. You can use supported crypto currency or fiat token as baseToken to buy Binance Code that is redeemable to your chosen faceToken. Once successfully purchased, the amount of baseToken would be deducted from your funding wallet. To get started with, please make sure: - You have a Binance account - You have passed kyc - You have a sufficient balance in your Binance funding wallet - You need Enable Withdrawals for the API Key which requests this endpoint. Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H Weight(IP): 1
- **Signature**: `BuyABinanceCodeTrade(string baseToken, string faceToken, double baseTokenAmount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `baseToken` ← `baseToken`, `faceToken` ← `faceToken`, `baseTokenAmount` ← `baseTokenAmount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1GiftcardBuyCodeResponse`
- **Error**: `SdkException<BuyABinanceCodeTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateABinanceCodeUserData
- **HTTP**: `POST /sapi/v1/giftcard/createCode` (Default (api))
- **Notes**: This API is for creating a Binance Code. To get started with, please make sure: You have a Binance account You have passed kyc You have a sufficient balance in your Binance funding wallet You need Enable Withdrawals for the API Key which requests this endpoint. Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H Weight(IP): 1
- **Signature**: `CreateABinanceCodeUserData(string token, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1GiftcardCreateCodeResponse`
- **Error**: `SdkException<CreateABinanceCodeUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchRsaPublicKeyUserData
- **HTTP**: `GET /sapi/v1/giftcard/cryptography/rsa-public-key` (Default (api))
- **Notes**: This API is for fetching the RSA Public Key. This RSA Public key will be used to encrypt the card code. Please note that the RSA Public key fetched is valid only for the current day. Weight(IP): 1
- **Signature**: `FetchRsaPublicKeyUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1GiftcardCryptographyRsaPublicKeyResponse`
- **Error**: `SdkException<FetchRsaPublicKeyUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchTokenLimitUserData
- **HTTP**: `GET /sapi/v1/giftcard/buyCode/token-limit` (Default (api))
- **Notes**: This API is to help you verify which tokens are available for you to purchase fixed-value gift cards as mentioned in section 2 and it's limitation. Weight(IP): 1
- **Signature**: `FetchTokenLimitUserData(string baseToken, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `baseToken` ← `baseToken`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1GiftcardBuyCodeTokenLimitResponse`
- **Error**: `SdkException<FetchTokenLimitUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RedeemABinanceCodeUserData
- **HTTP**: `POST /sapi/v1/giftcard/redeemCode` (Default (api))
- **Notes**: This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your funding wallet. Please note that if you enter the wrong code 5 times within 24 hours, you will no longer be able to redeem any Binance Code that day. Weight(IP): 1
- **Signature**: `RedeemABinanceCodeUserData(string code, long timestamp, string signature, string? externalUid, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `externalUid` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`, `timestamp` ← `timestamp`, `signature` ← `signature`, `externalUid` ← `externalUid`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1GiftcardRedeemCodeResponse`
- **Error**: `SdkException<RedeemABinanceCodeUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyABinanceCodeUserData
- **HTTP**: `GET /sapi/v1/giftcard/verify` (Default (api))
- **Notes**: This API is for verifying whether the Binance Code is valid or not by entering Binance Code or reference number. Please note that if you enter the wrong binance code 5 times within an hour, you will no longer be able to verify any binance code for that hour. Weight(IP): 1
- **Signature**: `VerifyABinanceCodeUserData(string referenceNo, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `referenceNo` ← `referenceNo`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1GiftcardVerifyResponse`
- **Error**: `SdkException<VerifyABinanceCodeUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
