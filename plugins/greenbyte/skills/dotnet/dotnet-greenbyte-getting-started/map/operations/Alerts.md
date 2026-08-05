# Alerts — operations

Accessor: `client.Alerts` · Source: `Api/Alerts.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetActiveAlerts
- **HTTP**: `GET /activealerts` (Default)
- **Notes**: Gets active alerts for multiple devices. The timestamps are in the time zone configured in the Greenbyte Platform. Use the useUtc flag to get timestamps in UTC. _🔐 This endpoint requires the Alerts endpoint permission._ _This request can also be made using the POST method, with a request to `activealerts.json` and a JSON request body instead of query parameters._
- **Signature**: `GetActiveAlerts(IReadOnlyList<int> deviceIds, IReadOnlyList<string>? fields, IReadOnlyList<string>? sortBy, bool? sortAsc = false, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - `sortBy` — nullable, no default → **must pass explicitly**
  - defaults: `sortAsc` = false, `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `fields` ← `fields`, `sortBy` ← `sortBy`, `sortAsc` ← `sortAsc`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<AlertItem>`
- **Error**: `SdkException<GetActiveAlertsError>` — **Case A (typed)**
- **Error accessors**: `TryGetActivealerts400Error1(out Activealerts400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetActivealerts429Error1(out Activealerts429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetAlerts
- **HTTP**: `GET /alerts` (Default)
- **Notes**: Gets alerts for multiple devices and the given time period. The timestamps are in the time zone configured in the Greenbyte Platform. Use the useUtc flag to get timestamps in UTC. _🔐 This endpoint requires the Alerts endpoint permission._ _This request can also be made using the POST method, with a request to `alerts.json` and a JSON request body instead of query parameters._
- **Signature**: `GetAlerts(IReadOnlyList<int> deviceIds, DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<string>? fields, IReadOnlyList<string>? sortBy, bool? sortAsc = false, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - `sortBy` — nullable, no default → **must pass explicitly**
  - defaults: `sortAsc` = false, `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `fields` ← `fields`, `sortBy` ← `sortBy`, `sortAsc` ← `sortAsc`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<AlertItem>`
- **Error**: `SdkException<GetAlertsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAlerts400Error1(out Alerts400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetAlerts429Error1(out Alerts429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
