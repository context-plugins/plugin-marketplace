# PortfolioMargin — operations

Accessor: `client.PortfolioMargin` · Source: `Api/PortfolioMargin.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BnbTransferUserData
- **HTTP**: `POST /sapi/v1/portfolio/bnb-transfer` (Default (api))
- **Notes**: BNB transfer can be between Margin Account and USDM Account Weight(IP): 1500
- **Signature**: `BnbTransferUserData(TransferSide transferSide, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `transferSide` ← `transferSide`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioBnbTransferResponse`
- **Error**: `SdkException<BnbTransferUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ChangeAutoRepayFuturesStatusUserData
- **HTTP**: `POST /sapi/v1/portfolio/repay-futures-switch` (Default (api))
- **Notes**: Change Auto-repay-futures Status Weight(IP): 1500
- **Signature**: `ChangeAutoRepayFuturesStatusUserData(bool autoRepay, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `autoRepay` ← `autoRepay`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioRepayFuturesSwitchResponse`
- **Error**: `SdkException<ChangeAutoRepayFuturesStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FundAutoCollectionUserData
- **HTTP**: `POST /sapi/v1/portfolio/auto-collection` (Default (api))
- **Notes**: Transfers all assets from Futures Account to Margin account Weight(IP): 1500
- **Signature**: `FundAutoCollectionUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioAutoCollectionResponse`
- **Error**: `SdkException<FundAutoCollectionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FundCollectionByAssetUserData
- **HTTP**: `POST /sapi/v1/portfolio/asset-collection` (Default (api))
- **Notes**: Transfers specific asset from Futures Account to Margin account Weight(IP): 60
- **Signature**: `FundCollectionByAssetUserData(string asset, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioAssetCollectionResponse`
- **Error**: `SdkException<FundCollectionByAssetUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAutoRepayFuturesStatusUserData
- **HTTP**: `GET /sapi/v1/portfolio/repay-futures-switch` (Default (api))
- **Notes**: Query Auto-repay-futures Status Weight(IP): 30
- **Signature**: `GetAutoRepayFuturesStatusUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioRepayFuturesSwitchResponse1`
- **Error**: `SdkException<GetAutoRepayFuturesStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPortfolioMarginAssetLeverageUserData
- **HTTP**: `GET /sapi/v1/portfolio/margin-asset-leverage` (Default (api))
- **Notes**: Weight(IP): 50
- **Signature**: `GetPortfolioMarginAssetLeverageUserData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SapiV1PortfolioMarginAssetLeverageResponse>`
- **Error**: `SdkException<GetPortfolioMarginAssetLeverageUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PortfolioMarginAccountUserData
- **HTTP**: `GET /sapi/v1/portfolio/account` (Default (api))
- **Notes**: Get the account info 'Weight(IP): 1'
- **Signature**: `PortfolioMarginAccountUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioAccountResponse`
- **Error**: `SdkException<PortfolioMarginAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PortfolioMarginBankruptcyLoanAmountUserData
- **HTTP**: `GET /sapi/v1/portfolio/pmLoan` (Default (api))
- **Notes**: Query Portfolio Margin Bankruptcy Loan Amount. Weight(UID): 500
- **Signature**: `PortfolioMarginBankruptcyLoanAmountUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioPmLoanResponse`
- **Error**: `SdkException<PortfolioMarginBankruptcyLoanAmountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PortfolioMarginBankruptcyLoanRepayUserData
- **HTTP**: `POST /sapi/v1/portfolio/repay` (Default (api))
- **Notes**: Repay Portfolio Margin Bankruptcy Loan. Weight(UID): 3000
- **Signature**: `PortfolioMarginBankruptcyLoanRepayUserData(long timestamp, string signature, string? from, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `from` ← `from`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioRepayResponse`
- **Error**: `SdkException<PortfolioMarginBankruptcyLoanRepayUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PortfolioMarginCollateralRateMarketData
- **HTTP**: `GET /sapi/v1/portfolio/collateralRate` (Default (api))
- **Notes**: Portfolio Margin Collateral Rate. Weight(IP): 50
- **Signature**: `PortfolioMarginCollateralRateMarketData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SapiV1PortfolioCollateralRateResponse>`
- **Error**: `SdkException<PortfolioMarginCollateralRateMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PortfolioMarginProTieredCollateralRateUserData
- **HTTP**: `GET /sapi/v2/portfolio/collateralRate` (Default (api))
- **Notes**: Portfolio Margin PRO Tiered Collateral Rate Weight(IP): 50
- **Signature**: `PortfolioMarginProTieredCollateralRateUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV2PortfolioCollateralRateResponse>`
- **Error**: `SdkException<PortfolioMarginProTieredCollateralRateUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData
- **HTTP**: `GET /sapi/v1/portfolio/interest-history` (Default (api))
- **Notes**: Query interest history of negative balance for portfolio margin. Weight(IP): 50
- **Signature**: `QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserData(string asset, long timestamp, string signature, long? startTime, long? endTime, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1PortfolioInterestHistoryResponse>`
- **Error**: `SdkException<QueryClassicPortfolioMarginNegativeBalanceInterestHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryPortfolioMarginAssetIndexPriceMarketData
- **HTTP**: `GET /sapi/v1/portfolio/asset-index-price` (Default (api))
- **Notes**: Query Portfolio Margin Asset Index Price Weight(IP): - 1 if send asset - 50 if not send asset
- **Signature**: `QueryPortfolioMarginAssetIndexPriceMarketData(string? asset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asset` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`
- **Returns**: `IReadOnlyList<SapiV1PortfolioAssetIndexPriceResponse>`
- **Error**: `SdkException<QueryPortfolioMarginAssetIndexPriceMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepayFuturesNegativeBalanceUserData
- **HTTP**: `POST /sapi/v1/portfolio/repay-futures-negative-balance` (Default (api))
- **Notes**: Repay futures Negative Balance Weight(IP): 1500
- **Signature**: `RepayFuturesNegativeBalanceUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PortfolioRepayFuturesNegativeBalanceResponse`
- **Error**: `SdkException<RepayFuturesNegativeBalanceUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
