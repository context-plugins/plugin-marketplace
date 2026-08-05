# SelfAuditLogs — operations

Accessor: `client.SelfAuditLogs` · Source: `Api/SelfAuditLogs.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSelfAuditLogs
- **HTTP**: `GET /api/v1/self/logs` (ApiHost (api))
- **Notes**: Get List of change logs across all Orgs for current admin Audit logs records all administrative activities done by current admin across all orgs
- **Signature**: `ListSelfAuditLogs(int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseSelfAuditLogs`
- **Error**: `SdkException<ListSelfAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
