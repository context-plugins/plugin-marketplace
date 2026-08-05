# EmsOrgAuditLogs — operations

Accessor: `client.EmsOrgAuditLogs` · Source: `Api/EmsOrgAuditLogs.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AuditLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/logs` (Default)
- **Signature**: `AuditLogs(string orgId, string? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### CountAuditLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/logs/count` (Default)
- **Signature**: `CountAuditLogs(string orgId, Distinct? distinct, int? start, int? end, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`
- **Returns**: `ApiV1OrgsLogsCountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJobIdLatestState
- **HTTP**: `GET /api/v1/orgs/{org_id}/jobs/{job_id}/status` (Default)
- **Signature**: `GetJobIdLatestState(string orgId, string jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchAuditLogsByJobId
- **HTTP**: `GET /api/v1/orgs/{org_id}/logs/search` (Default)
- **Signature**: `SearchAuditLogsByJobId(string orgId, string? jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `jobId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `job_id` ← `jobId`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
