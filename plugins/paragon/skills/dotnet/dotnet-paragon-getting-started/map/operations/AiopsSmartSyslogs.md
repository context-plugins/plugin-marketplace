# AiopsSmartSyslogs — operations

Accessor: `client.AiopsSmartSyslogs` · Source: `Api/AiopsSmartSyslogs.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSmartlogs
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/smartlogs/count` (Default)
- **Notes**: Get counts of total logs, logs with composite and negative score greater than the threshold and severity count
- **Signature**: `CountSmartlogs(Guid orgId, string? xIamToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xIamToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `JaimlApiV1OrgsSmartlogsCountResponse`
- **Error**: `SdkException<CountSmartlogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetNextAndPreviousLogs
- **HTTP**: `POST /jaiml/api/v1/orgs/{org_id}/smartlogs/rows` (Default)
- **Notes**: Get the next and previous rows of data for a given log
- **Signature**: `GetNextAndPreviousLogs(Guid orgId, string? xIamToken, SmartLog body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xIamToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `JaimlApiV1OrgsSmartlogsRowsResponse`
- **Error**: `SdkException<GetNextAndPreviousLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSmartlogs
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/smartlogs/search` (Default)
- **Notes**: Search for smart logs based on a query string
- **Signature**: `SearchSmartlogs(Guid orgId, int? limit, int? offset, int? start, int? end, string? mac, string? siteId, string? severity, string? xIamToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`limit` … `xIamToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `start` ← `start`, `end` ← `end`, `mac` ← `mac`, `site_id` ← `siteId`, `severity` ← `severity`
- **Returns**: `JaimlApiV1OrgsSmartlogsSearchResponse`
- **Error**: `SdkException<SearchSmartlogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
