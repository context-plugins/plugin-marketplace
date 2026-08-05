# Predict — operations

Accessor: `client.Predict` · Source: `Api/Predict.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPredictAlerts
- **HTTP**: `GET /predict-alerts` (Default)
- **Notes**: Gets a list of Predict alerts based on filter criteria. The timestamps are in the time zone configured in the Greenbyte Platform. Use the useUtc flag to get timestamps in UTC. _🔐 This endpoint requires the Predict endpoint permission._ _This is a beta feature. Some details might change before it is released as a stable version._
- **Signature**: `GetPredictAlerts(IReadOnlyList<int> deviceIds, DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<int>? siteIds, IReadOnlyList<int>? componentIds, PredictStatus? status, PredictSeverity? severity, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`siteIds` … `fields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`, `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `siteIds` ← `siteIds`, `componentIds` ← `componentIds`, `status` ← `status`, `severity` ← `severity`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<PredictAlertsResponse>`
- **Error**: `SdkException<GetPredictAlertsError>` — **Case A (typed)**
- **Error accessors**: `TryGetPredictAlerts400Error1(out PredictAlerts400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetPredictAlerts429Error1(out PredictAlerts429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
