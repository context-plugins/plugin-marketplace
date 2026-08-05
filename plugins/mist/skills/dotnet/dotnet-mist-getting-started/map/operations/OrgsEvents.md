# OrgsEvents — operations

Accessor: `client.OrgsEvents` · Source: `Api/OrgsEvents.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgSystemEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/events/system/count` (ApiHost (api))
- **Notes**: Count Org System Events
- **Signature**: `CountOrgSystemEvents(Guid orgId, string? distinct, int? start, int? end, int? limit = 100, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgSystemEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/events/search` (ApiHost (api))
- **Notes**: Search Org events Supported Event Types: - CRADLEPOINT_SYNC_FAILED - ORG_CA_CERT_ADDED - ORG_CA_CERT_REGENERATED
- **Signature**: `SearchOrgEvents(Guid orgId, string? type, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `type` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseEventsOrgsSearch`
- **Error**: `SdkException<SearchOrgEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgSystemEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/events/system/search` (ApiHost (api))
- **Notes**: Search Org System Events
- **Signature**: `SearchOrgSystemEvents(Guid orgId, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseOrgSystemEventsSearch`
- **Error**: `SdkException<SearchOrgSystemEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
