# Savings — operations

Accessor: `client.Savings` · Source: `Api/Savings.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangeFixedActivityPositionToDailyPositionUserData
- **HTTP**: `POST /sapi/v1/lending/positionChanged` (Default (api))
- **Notes**: PositionId is mandatory parameter for fixed position. Weight(IP): 1
- **Signature**: `ChangeFixedActivityPositionToDailyPositionUserData(string projectId, string lot, long timestamp, string signature, string? positionId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `positionId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `projectId` ← `projectId`, `lot` ← `lot`, `timestamp` ← `timestamp`, `signature` ← `signature`, `positionId` ← `positionId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingPositionChangedResponse`
- **Error**: `SdkException<ChangeFixedActivityPositionToDailyPositionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFixedActivityProjectListUserData
- **HTTP**: `GET /sapi/v1/lending/project/list` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetFixedActivityProjectListUserData(Type8 type, long timestamp, string signature, string? asset, Status? status, bool? isSortAsc, SortBy? sortBy, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `status` ← `status`, `isSortAsc` ← `isSortAsc`, `sortBy` ← `sortBy`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LendingProjectListResponse>`
- **Error**: `SdkException<GetFixedActivityProjectListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFixedActivityProjectPositionUserData
- **HTTP**: `GET /sapi/v1/lending/project/position/list` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetFixedActivityProjectPositionUserData(string asset, long timestamp, string signature, string? projectId, Status? status, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `projectId` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `projectId` ← `projectId`, `status` ← `status`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1LendingProjectPositionListResponse>`
- **Error**: `SdkException<GetFixedActivityProjectPositionUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PurchaseFixedActivityProjectUserData
- **HTTP**: `POST /sapi/v1/lending/customizedFixed/purchase` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `PurchaseFixedActivityProjectUserData(string projectId, string lot, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `projectId` ← `projectId`, `lot` ← `lot`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1LendingCustomizedFixedPurchaseResponse`
- **Error**: `SdkException<PurchaseFixedActivityProjectUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
