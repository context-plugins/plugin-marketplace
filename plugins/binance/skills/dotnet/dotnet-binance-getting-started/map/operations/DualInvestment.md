# DualInvestment — operations

Accessor: `client.DualInvestment` · Source: `Api/DualInvestment.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangeAutoCompoundStatusUserData
- **HTTP**: `POST /sapi/v1/dci/product/auto_compound/edit-status` (Default (api))
- **Notes**: Change Auto-Compound status 15:31 ~ 16:00 UTC+8 This function is disabled Weight(IP): 1 Rate Limit: Maximum 1 time/s per account
- **Signature**: `ChangeAutoCompoundStatusUserData(long positionId, AutoCompoundPlan autoCompoundPlan, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `positionId` ← `positionId`, `autoCompoundPlan` ← `autoCompoundPlan`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1DciProductAutoCompoundEditStatusResponse`
- **Error**: `SdkException<ChangeAutoCompoundStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckDualInvestmentAccountsUserData
- **HTTP**: `GET /sapi/v1/dci/product/accounts` (Default (api))
- **Notes**: Check Dual Investment accounts Weight(IP): 1
- **Signature**: `CheckDualInvestmentAccountsUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1DciProductAccountsResponse`
- **Error**: `SdkException<CheckDualInvestmentAccountsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDualInvestmentPositionsUserData
- **HTTP**: `GET /sapi/v1/dci/product/positions` (Default (api))
- **Notes**: Get Dual Investment positions (batch) Weight(IP): 1
- **Signature**: `GetDualInvestmentPositionsUserData(long timestamp, string signature, Status2? status, string? pageSize, int? pageIndex, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `status` ← `status`, `pageSize` ← `pageSize`, `pageIndex` ← `pageIndex`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1DciProductPositionsResponse`
- **Error**: `SdkException<GetDualInvestmentPositionsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDualInvestmentProductListUserData
- **HTTP**: `GET /sapi/v1/dci/product/list` (Default (api))
- **Notes**: Get Dual Investment product list Weight(IP): 1
- **Signature**: `GetDualInvestmentProductListUserData(OptionType optionType, string exercisedCoin, string investCoin, long timestamp, string signature, string? pageSize, int? pageIndex, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `pageIndex` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `optionType` ← `optionType`, `exercisedCoin` ← `exercisedCoin`, `investCoin` ← `investCoin`, `timestamp` ← `timestamp`, `signature` ← `signature`, `pageSize` ← `pageSize`, `pageIndex` ← `pageIndex`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1DciProductListResponse`
- **Error**: `SdkException<GetDualInvestmentProductListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeDualInvestmentProductsUserData
- **HTTP**: `POST /sapi/v1/dci/product/subscribe` (Default (api))
- **Notes**: Subscribe Dual Investment products `Products are not available.` means that the APR changes to lower value, or the orders are not available. `Failed` is a system or network errors. Weight(IP): 1
- **Signature**: `SubscribeDualInvestmentProductsUserData(string id, string orderId, double depositAmount, AutoCompoundPlan autoCompoundPlan, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `orderId` ← `orderId`, `depositAmount` ← `depositAmount`, `autoCompoundPlan` ← `autoCompoundPlan`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1DciProductSubscribeResponse`
- **Error**: `SdkException<SubscribeDualInvestmentProductsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
