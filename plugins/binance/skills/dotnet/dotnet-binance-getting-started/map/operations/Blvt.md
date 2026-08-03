# Blvt — operations

Accessor: `client.Blvt` · Source: `Api/Blvt.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BlvtInfoMarketData
- **HTTP**: `GET /sapi/v1/blvt/tokenInfo` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `BlvtInfoMarketData(string? tokenName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `tokenName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `tokenName` ← `tokenName`
- **Returns**: `IReadOnlyList<SapiV1BlvtTokenInfoResponse>`
- **Error**: `SdkException<BlvtInfoMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BlvtUserLimitInfoUserData
- **HTTP**: `GET /sapi/v1/blvt/userLimit` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `BlvtUserLimitInfoUserData(long timestamp, string signature, string? tokenName, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `tokenName` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `tokenName` ← `tokenName`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1BlvtUserLimitResponse>`
- **Error**: `SdkException<BlvtUserLimitInfoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QuerySubscriptionRecordUserData
- **HTTP**: `GET /sapi/v1/blvt/subscribe/record` (Default (api))
- **Notes**: Only the data of the latest 90 days is available Weight(IP): 1
- **Signature**: `QuerySubscriptionRecordUserData(long timestamp, string signature, string? tokenName, long? id, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`tokenName` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `tokenName` ← `tokenName`, `id` ← `id`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1BlvtSubscribeRecordResponse`
- **Error**: `SdkException<QuerySubscriptionRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RedeemBlvtUserData
- **HTTP**: `POST /sapi/v1/blvt/redeem` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `RedeemBlvtUserData(string tokenName, double amount, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `tokenName` ← `tokenName`, `amount` ← `amount`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1BlvtRedeemResponse`
- **Error**: `SdkException<RedeemBlvtUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RedemptionRecordUserData
- **HTTP**: `GET /sapi/v1/blvt/redeem/record` (Default (api))
- **Notes**: Only the data of the latest 90 days is available Weight(IP): 1
- **Signature**: `RedemptionRecordUserData(long timestamp, string signature, string? tokenName, long? id, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`tokenName` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `tokenName` ← `tokenName`, `id` ← `id`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1BlvtRedeemRecordResponse>`
- **Error**: `SdkException<RedemptionRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeBlvtUserData
- **HTTP**: `POST /sapi/v1/blvt/subscribe` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `SubscribeBlvtUserData(string tokenName, double cost, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `tokenName` ← `tokenName`, `cost` ← `cost`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1BlvtSubscribeResponse`
- **Error**: `SdkException<SubscribeBlvtUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
