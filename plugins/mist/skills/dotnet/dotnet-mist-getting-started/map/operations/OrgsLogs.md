# OrgsLogs — operations

Accessor: `client.OrgsLogs` · Source: `Api/OrgsLogs.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgAuditLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/logs/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Audit Logs
- **Signature**: `CountOrgAuditLogs(Guid orgId, OrgLogsCountDistinct? distinct, Guid? adminId, string? adminName, Guid? siteId, string? message, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `admin_id` ← `adminId`, `admin_name` ← `adminName`, `site_id` ← `siteId`, `message` ← `message`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAuditLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/logs` (ApiHost (api))
- **Notes**: Get List of change logs for the current Org
- **Signature**: `ListOrgAuditLogs(Guid orgId, Guid? siteId, string? adminName, string? message, ListOrgLogsSort? sort, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`siteId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `admin_name` ← `adminName`, `message` ← `message`, `sort` ← `sort`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseLogSearch`
- **Error**: `SdkException<ListOrgAuditLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
