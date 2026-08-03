# VipLoans — operations

Accessor: `client.VipLoans` · Source: `Api/VipLoans.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckLockedValueOfVipCollateralAccountUserData
- **HTTP**: `GET /sapi/v1/loan/vip/collateral/account` (Default (api))
- **Notes**: VIP loan is available for VIP users only. Weight(IP): 6000
- **Signature**: `CheckLockedValueOfVipCollateralAccountUserData(long timestamp, string signature, long? orderId, long? collateralAccountId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderId` — nullable, no default → **must pass explicitly**
  - `collateralAccountId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `collateralAccountId` ← `collateralAccountId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipCollateralAccountResponse`
- **Error**: `SdkException<CheckLockedValueOfVipCollateralAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBorrowInterestRateUserData
- **HTTP**: `GET /sapi/v1/loan/vip/request/interestRate` (Default (api))
- **Notes**: Get borrow interest rate. Weight(UID): 400
- **Signature**: `GetBorrowInterestRateUserData(long timestamp, string signature, string? loanCoin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanCoin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LoanVipRequestInterestRateResponse>`
- **Error**: `SdkException<GetBorrowInterestRateUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCollateralAssetDataUserData
- **HTTP**: `GET /sapi/v1/loan/vip/collateral/data` (Default (api))
- **Notes**: Get collateral asset data. Weight(IP): 400
- **Signature**: `GetCollateralAssetDataUserData(long timestamp, string signature, string? collateralCoin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `collateralCoin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `collateralCoin` ← `collateralCoin`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipCollateralDataResponse`
- **Error**: `SdkException<GetCollateralAssetDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLoanableAssetsData
- **HTTP**: `GET /sapi/v1/loan/vip/loanable/data` (Default (api))
- **Notes**: Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value. Weight(IP): 400
- **Signature**: `GetLoanableAssetsData(long timestamp, string signature, string? loanCoin, int? vipLevel, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanCoin` — nullable, no default → **must pass explicitly**
  - `vipLevel` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `vipLevel` ← `vipLevel`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipLoanableDataResponse`
- **Error**: `SdkException<GetLoanableAssetsDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVipLoanOngoingOrdersUserData
- **HTTP**: `GET /sapi/v1/loan/vip/ongoing/orders` (Default (api))
- **Notes**: VIP loan is available for VIP users only. Weight(IP): 400
- **Signature**: `GetVipLoanOngoingOrdersUserData(long timestamp, string signature, long? orderId, long? collateralAccountId, string? loanCoin, string? collateralCoin, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `collateralAccountId` ← `collateralAccountId`, `loanCoin` ← `loanCoin`, `collateralCoin` ← `collateralCoin`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipOngoingOrdersResponse`
- **Error**: `SdkException<GetVipLoanOngoingOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVipLoanRepaymentHistoryUserData
- **HTTP**: `GET /sapi/v1/loan/vip/repay/history` (Default (api))
- **Notes**: VIP loan is available for VIP users only. Weight(IP): 400
- **Signature**: `GetVipLoanRepaymentHistoryUserData(long timestamp, string signature, long? orderId, string? loanCoin, long? startTime, long? endTime, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `loanCoin` ← `loanCoin`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipRepayHistoryResponse`
- **Error**: `SdkException<GetVipLoanRepaymentHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryApplicationStatusUserData
- **HTTP**: `GET /sapi/v1/loan/vip/request/data` (Default (api))
- **Notes**: Get Application Status Weight(UID): 400
- **Signature**: `QueryApplicationStatusUserData(long timestamp, string signature, int? current, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `current` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `current` ← `current`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipRequestDataResponse`
- **Error**: `SdkException<QueryApplicationStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VipLoanBorrow
- **HTTP**: `POST /sapi/v1/loan/vip/borrow` (Default (api))
- **Notes**: VIP loan is available for VIP users only. Weight(UID): 6000
- **Signature**: `VipLoanBorrow(long loanAccountId, double loanAmount, string collateralAccountId, string collateralCoin, IsFlexibleRate isFlexibleRate, long timestamp, string signature, string? loanCoin, int? loanTerm, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `loanCoin` — nullable, no default → **must pass explicitly**
  - `loanTerm` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `loanAccountId` ← `loanAccountId`, `loanAmount` ← `loanAmount`, `collateralAccountId` ← `collateralAccountId`, `collateralCoin` ← `collateralCoin`, `isFlexibleRate` ← `isFlexibleRate`, `timestamp` ← `timestamp`, `signature` ← `signature`, `loanCoin` ← `loanCoin`, `loanTerm` ← `loanTerm`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipBorrowResponse`
- **Error**: `SdkException<VipLoanBorrowError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VipLoanRenew
- **HTTP**: `POST /sapi/v1/loan/vip/renew` (Default (api))
- **Notes**: VIP loan is available for VIP users only. Weight(UID): 6000
- **Signature**: `VipLoanRenew(long timestamp, string signature, long? orderId, int? loanTerm, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderId` — nullable, no default → **must pass explicitly**
  - `loanTerm` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `loanTerm` ← `loanTerm`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipRenewResponse`
- **Error**: `SdkException<VipLoanRenewError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VipLoanRepayTrade
- **HTTP**: `POST /sapi/v1/loan/vip/repay` (Default (api))
- **Notes**: VIP loan is available for VIP users only. Weight(UID): 6000
- **Signature**: `VipLoanRepayTrade(double amount, long timestamp, string signature, long? orderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LoanVipRepayResponse`
- **Error**: `SdkException<VipLoanRepayTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
