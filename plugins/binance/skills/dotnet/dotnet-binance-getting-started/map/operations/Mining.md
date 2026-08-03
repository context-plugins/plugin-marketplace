# Mining — operations

Accessor: `client.Mining` · Source: `Api/Mining.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AccountListUserData
- **HTTP**: `GET /sapi/v1/mining/statistics/user/list` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `AccountListUserData(string algo, string userName, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningStatisticsUserListResponse`
- **Error**: `SdkException<AccountListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AcquiringAlgorithmMarketData
- **HTTP**: `GET /sapi/v1/mining/pub/algoList` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `AcquiringAlgorithmMarketData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SapiV1MiningPubAlgoListResponse`
- **Error**: `SdkException<AcquiringAlgorithmMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AcquiringCoinNameMarketData
- **HTTP**: `GET /sapi/v1/mining/pub/coinList` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `AcquiringCoinNameMarketData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SapiV1MiningPubCoinListResponse`
- **Error**: `SdkException<AcquiringCoinNameMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelHashrateResaleConfigurationUserData
- **HTTP**: `POST /sapi/v1/mining/hash-transfer/config/cancel` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `CancelHashrateResaleConfigurationUserData(string configId, string userName, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `configId` ← `configId`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningHashTransferConfigCancelResponse`
- **Error**: `SdkException<CancelHashrateResaleConfigurationUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EarningsListUserData
- **HTTP**: `GET /sapi/v1/mining/payment/list` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `EarningsListUserData(string algo, string userName, long timestamp, string signature, string? coin, string? startDate, string? endDate, int? pageIndex, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`coin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `coin` ← `coin`, `startDate` ← `startDate`, `endDate` ← `endDate`, `pageIndex` ← `pageIndex`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningPaymentListResponse`
- **Error**: `SdkException<EarningsListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExtraBonusListUserData
- **HTTP**: `GET /sapi/v1/mining/payment/other` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `ExtraBonusListUserData(string algo, string userName, long timestamp, string signature, string? coin, string? startDate, string? endDate, int? pageIndex, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`coin` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `coin` ← `coin`, `startDate` ← `startDate`, `endDate` ← `endDate`, `pageIndex` ← `pageIndex`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningPaymentOtherResponse`
- **Error**: `SdkException<ExtraBonusListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HashrateResaleDetailsUserData
- **HTTP**: `GET /sapi/v1/mining/hash-transfer/profit/details` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `HashrateResaleDetailsUserData(string configId, string userName, long timestamp, string signature, int? pageIndex, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageIndex` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `configId` ← `configId`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `pageIndex` ← `pageIndex`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningHashTransferProfitDetailsResponse`
- **Error**: `SdkException<HashrateResaleDetailsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HashrateResaleListUserData
- **HTTP**: `GET /sapi/v1/mining/hash-transfer/config/details/list` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `HashrateResaleListUserData(long timestamp, string signature, int? pageIndex, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageIndex` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `pageIndex` ← `pageIndex`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningHashTransferConfigDetailsListResponse`
- **Error**: `SdkException<HashrateResaleListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HashrateResaleRequestUserData
- **HTTP**: `POST /sapi/v1/mining/hash-transfer/config` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `HashrateResaleRequestUserData(string userName, string algo, string toPoolUser, string hashRate, long timestamp, string signature, string? startDate, string? endDate, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `userName` ← `userName`, `algo` ← `algo`, `toPoolUser` ← `toPoolUser`, `hashRate` ← `hashRate`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startDate` ← `startDate`, `endDate` ← `endDate`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningHashTransferConfigResponse`
- **Error**: `SdkException<HashrateResaleRequestUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MiningAccountEarningUserData
- **HTTP**: `GET /sapi/v1/mining/payment/uid` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `MiningAccountEarningUserData(string algo, long timestamp, string signature, string? startDate, string? endDate, int? pageIndex, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startDate` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startDate` ← `startDate`, `endDate` ← `endDate`, `pageIndex` ← `pageIndex`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningPaymentUidResponse`
- **Error**: `SdkException<MiningAccountEarningUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RequestForDetailMinerListUserData
- **HTTP**: `GET /sapi/v1/mining/worker/detail` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `RequestForDetailMinerListUserData(string algo, string userName, string workerName, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `userName` ← `userName`, `workerName` ← `workerName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningWorkerDetailResponse`
- **Error**: `SdkException<RequestForDetailMinerListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RequestForMinerListUserData
- **HTTP**: `GET /sapi/v1/mining/worker/list` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `RequestForMinerListUserData(string algo, string userName, long timestamp, string signature, int? pageIndex, int? sort, int? sortColumn, int? workerStatus, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`pageIndex` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `pageIndex` ← `pageIndex`, `sort` ← `sort`, `sortColumn` ← `sortColumn`, `workerStatus` ← `workerStatus`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningWorkerListResponse`
- **Error**: `SdkException<RequestForMinerListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StatisticListUserData
- **HTTP**: `GET /sapi/v1/mining/statistics/user/status` (Default (api))
- **Notes**: Weight(IP): 5
- **Signature**: `StatisticListUserData(string algo, string userName, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algo` ← `algo`, `userName` ← `userName`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MiningStatisticsUserStatusResponse`
- **Error**: `SdkException<StatisticListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
