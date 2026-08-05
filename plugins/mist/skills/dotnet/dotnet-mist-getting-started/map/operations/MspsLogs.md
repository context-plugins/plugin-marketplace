# MspsLogs — operations

Accessor: `client.MspsLogs` · Source: `Api/MspsLogs.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountMspAuditLogs
- **HTTP**: `GET /api/v1/msps/{msp_id}/logs/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Audit Logs.
- **Signature**: `CountMspAuditLogs(Guid mspId, MspLogsCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountMspAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspAuditLogs
- **HTTP**: `GET /api/v1/msps/{msp_id}/logs` (ApiHost (api))
- **Notes**: Get list of change logs for the current MSP
- **Signature**: `ListMspAuditLogs(Guid mspId, string? siteId, string? adminName, string? message, ListMspLogsSort? sort, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`siteId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `admin_name` ← `adminName`, `message` ← `message`, `sort` ← `sort`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseLogSearch`
- **Error**: `SdkException<ListMspAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
