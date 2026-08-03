# CryptoLoans — operations

Accessor: `client.CryptoLoans` · Source: `Api/CryptoLoans.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdjustLtvFlexibleLoanAdjustLtvTrade
- **HTTP**: `POST /sapi/v2/loan/flexible/adjust/ltv` (Default (api))
- **Notes**: API Key needs Spot &amp; Margin Trading permission for this endpoint Weight(UID): 6000
- **Signature**: `AdjustLtvFlexibleLoanAdjustLtvTrade(double adjustmentAmount, Direction direction, long timestamp, string signature, string? loanCoin, string? collateralCoin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanCoin` — nullable, no default → **must pass explicitly**
  - `collateralCoin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `adjustmentAmount` ← `adjustmentAmount`, `direction` ← `direction`, `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleAdjustLtvResponse`
- **Error**: `SdkException<AdjustLtvFlexibleLoanAdjustLtvTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData
- **HTTP**: `GET /sapi/v2/loan/flexible/ltv/adjustment/history` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
- **Signature**: `AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserData(long timestamp, string signature, string? loanCoin, string? collateralCoin, long? startTime, long? endTime, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`loanCoin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleLtvAdjustmentHistoryResponse`
- **Error**: `SdkException<AdjustLtvGetFlexibleLoanLtvAdjustmentHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BorrowFlexibleLoanBorrowTrade
- **HTTP**: `POST /sapi/v2/loan/flexible/borrow` (Default (api))
- **Notes**: Only available for master account Weight(UID): 6000
- **Signature**: `BorrowFlexibleLoanBorrowTrade(long timestamp, string signature, string? loanCoin, double? loanAmount, string? collateralCoin, double? collateralAmount, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`loanCoin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `loanAmount` ← `loanAmount`, `collateralCoin` ← `collateralCoin`, `collateralAmount` ← `collateralAmount`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleBorrowResponse`
- **Error**: `SdkException<BorrowFlexibleLoanBorrowTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BorrowGetFlexibleLoanBorrowHistoryUserData
- **HTTP**: `GET /sapi/v2/loan/flexible/borrow/history` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
- **Signature**: `BorrowGetFlexibleLoanBorrowHistoryUserData(long timestamp, string signature, string? loanCoin, string? collateralCoin, long? startTime, long? endTime, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`loanCoin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleBorrowHistoryResponse`
- **Error**: `SdkException<BorrowGetFlexibleLoanBorrowHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BorrowGetFlexibleLoanOngoingOrdersUserData
- **HTTP**: `GET /sapi/v2/loan/flexible/ongoing/orders` (Default (api))
- **Notes**: Weight(IP): 300
- **Signature**: `BorrowGetFlexibleLoanOngoingOrdersUserData(long timestamp, string signature, string? loanCoin, string? collateralCoin, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`loanCoin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleOngoingOrdersResponse`
- **Error**: `SdkException<BorrowGetFlexibleLoanOngoingOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckCollateralRepayRateUserData
- **HTTP**: `GET /sapi/v1/loan/repay/collateral/rate` (Default (api))
- **Notes**: Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second. Weight(IP): 6000
- **Signature**: `CheckCollateralRepayRateUserData(string loanCoin, string collateralCoin, double repayAmount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `repayAmount` ← `repayAmount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanRepayCollateralRateResponse`
- **Error**: `SdkException<CheckCollateralRepayRateUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CryptoLoanAdjustLtvTrade
- **HTTP**: `POST /sapi/v1/loan/adjust/ltv` (Default (api))
- **Notes**: Weight(UID): 6000
- **Signature**: `CryptoLoanAdjustLtvTrade(long orderId, double amount, Direction direction, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `orderId` ← `orderId`, `amount` ← `amount`, `direction` ← `direction`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanAdjustLtvResponse`
- **Error**: `SdkException<CryptoLoanAdjustLtvTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CryptoLoanBorrowTrade
- **HTTP**: `POST /sapi/v1/loan/borrow` (Default (api))
- **Notes**: Weight(UID): 6000
- **Signature**: `CryptoLoanBorrowTrade(string loanCoin, string collateralCoin, int loanTerm, long timestamp, string signature, double? loanAmount, double? collateralAmount, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanAmount` — nullable, no default → **must pass explicitly**
  - `collateralAmount` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `loanTerm` ← `loanTerm`, `timestamp` ← `timestamp`, `signature` ← `signature`, `loanAmount` ← `loanAmount`, `collateralAmount` ← `collateralAmount`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanBorrowResponse`
- **Error**: `SdkException<CryptoLoanBorrowTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CryptoLoanCustomizeMarginCallTrade
- **HTTP**: `POST /sapi/v1/loan/customize/margin_call` (Default (api))
- **Notes**: Customize margin call for ongoing orders only. Weight(UID): 6000
- **Signature**: `CryptoLoanCustomizeMarginCallTrade(double marginCall, long timestamp, string signature, long? orderId, string? collateralCoin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderId` — nullable, no default → **must pass explicitly**
  - `collateralCoin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `marginCall` ← `marginCall`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `collateralCoin` ← `collateralCoin`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanCustomizeMarginCallResponse`
- **Error**: `SdkException<CryptoLoanCustomizeMarginCallTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CryptoLoanRepayTrade
- **HTTP**: `POST /sapi/v1/loan/repay` (Default (api))
- **Notes**: Weight(UID): 6000
- **Signature**: `CryptoLoanRepayTrade(long orderId, double amount, long timestamp, string signature, int? type, bool? collateralReturn, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `collateralReturn` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `orderId` ← `orderId`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `type` ← `type`, `collateralReturn` ← `collateralReturn`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanRepayResponse`
- **Error**: `SdkException<CryptoLoanRepayTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCollateralAssetsDataUserData
- **HTTP**: `GET /sapi/v1/loan/collateral/data` (Default (api))
- **Notes**: Get LTV information and collateral limit of collateral assets. The collateral limit is shown in USD value. Weight(IP): 400
- **Signature**: `GetCollateralAssetsDataUserData(long timestamp, string signature, string? collateralCoin, int? vipLevel, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `collateralCoin` — nullable, no default → **must pass explicitly**
  - `vipLevel` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `collateralCoin` ← `collateralCoin`, `vipLevel` ← `vipLevel`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanCollateralDataResponse`
- **Error**: `SdkException<GetCollateralAssetsDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCryptoLoansBorrowHistoryUserData
- **HTTP**: `GET /sapi/v1/loan/borrow/history` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
- **Signature**: `GetCryptoLoansBorrowHistoryUserData(long timestamp, string signature, long? orderId, string? loanCoin, string? collateralCoin, long? startTime, long? endTime, int? current, long? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanBorrowHistoryResponse`
- **Error**: `SdkException<GetCryptoLoansBorrowHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCryptoLoansIncomeHistoryUserData
- **HTTP**: `GET /sapi/v1/loan/income` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 7-day data will be returned. The max interval between startTime and endTime is 30 days. Weight(UID): 6000
- **Signature**: `GetCryptoLoansIncomeHistoryUserData(long timestamp, string signature, string? asset, Type9? type, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `type` ← `type`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LoanIncomeResponse>`
- **Error**: `SdkException<GetCryptoLoansIncomeHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleLoanAssetsDataUserData
- **HTTP**: `GET /sapi/v2/loan/flexible/loanable/data` (Default (api))
- **Notes**: Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in USD value. Weight(IP): 400
- **Signature**: `GetFlexibleLoanAssetsDataUserData(long timestamp, string signature, string? loanCoin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanCoin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleLoanableDataResponse`
- **Error**: `SdkException<GetFlexibleLoanAssetsDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFlexibleLoanCollateralAssetsDataUserData
- **HTTP**: `GET /sapi/v2/loan/flexible/collateral/data` (Default (api))
- **Notes**: Get LTV information and collateral limit of flexible loan's collateral assets. The collateral limit is shown in USD value. Weight(IP): 400
- **Signature**: `GetFlexibleLoanCollateralAssetsDataUserData(long timestamp, string signature, string? collateralCoin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `collateralCoin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `collateralCoin` ← `collateralCoin`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleCollateralDataResponse`
- **Error**: `SdkException<GetFlexibleLoanCollateralAssetsDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLoanLtvAdjustmentHistoryUserData
- **HTTP**: `GET /sapi/v1/loan/ltv/adjustment/history` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
- **Signature**: `GetLoanLtvAdjustmentHistoryUserData(long timestamp, string signature, long? orderId, string? loanCoin, string? collateralCoin, long? startTime, long? endTime, int? current, long? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanLtvAdjustmentHistoryResponse`
- **Error**: `SdkException<GetLoanLtvAdjustmentHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLoanOngoingOrdersUserData
- **HTTP**: `GET /sapi/v1/loan/ongoing/orders` (Default (api))
- **Notes**: Weight(IP): 300
- **Signature**: `GetLoanOngoingOrdersUserData(long timestamp, string signature, long? orderId, string? loanCoin, string? collateralCoin, int? current, long? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanOngoingOrdersResponse`
- **Error**: `SdkException<GetLoanOngoingOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLoanRepaymentHistoryUserData
- **HTTP**: `GET /sapi/v1/loan/repay/history` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
- **Signature**: `GetLoanRepaymentHistoryUserData(long timestamp, string signature, long? orderId, string? loanCoin, string? collateralCoin, long? startTime, long? endTime, int? current, long? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanRepayHistoryResponse`
- **Error**: `SdkException<GetLoanRepaymentHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLoanableAssetsDataUserData
- **HTTP**: `GET /sapi/v1/loan/loanable/data` (Default (api))
- **Notes**: Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value. Weight(IP): 400
- **Signature**: `GetLoanableAssetsDataUserData(long timestamp, string signature, string? loanCoin, int? vipLevel, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanCoin` — nullable, no default → **must pass explicitly**
  - `vipLevel` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `vipLevel` ← `vipLevel`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanLoanableDataResponse`
- **Error**: `SdkException<GetLoanableAssetsDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepayFlexibleLoanRepayTrade
- **HTTP**: `POST /sapi/v2/loan/flexible/repay` (Default (api))
- **Notes**: repayAmount is mandatory even fullRepayment = FALSE Weight(IP): 6000
- **Signature**: `RepayFlexibleLoanRepayTrade(double repayAmount, long timestamp, string signature, string? loanCoin, string? collateralCoin, bool? collateralReturn, bool? fullRepayment, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`loanCoin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `repayAmount` ← `repayAmount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `collateralReturn` ← `collateralReturn`, `fullRepayment` ← `fullRepayment`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleRepayResponse`
- **Error**: `SdkException<RepayFlexibleLoanRepayTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RepayGetFlexibleLoanRepaymentHistoryUserData
- **HTTP**: `GET /sapi/v2/loan/flexible/repay/history` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90-day data will be returned. The max interval between startTime and endTime is 180 days. Weight(IP): 400
- **Signature**: `RepayGetFlexibleLoanRepaymentHistoryUserData(long timestamp, string signature, string? loanCoin, string? collateralCoin, long? startTime, long? endTime, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`loanCoin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV2LoanFlexibleRepayHistoryResponse`
- **Error**: `SdkException<RepayGetFlexibleLoanRepaymentHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
