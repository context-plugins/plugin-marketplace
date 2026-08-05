# OrgsClientsWan — operations

Accessor: `client.OrgsClientsWan` · Source: `Api/OrgsClientsWan.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgWanClientEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/wan_client/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org WAN Client-Events
- **Signature**: `CountOrgWanClientEvents(Guid orgId, OrgWanClientsEventsCountDistinct? distinct, string? type, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `type` ← `type`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWanClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgWanClients
- **HTTP**: `GET /api/v1/orgs/{org_id}/wan_clients/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org WAN Clients
- **Signature**: `CountOrgWanClients(Guid orgId, OrgWanClientsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgWanClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWanClientEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/wan_clients/events/search` (ApiHost (api))
- **Notes**: Search Org WAN Client Events
- **Signature**: `SearchOrgWanClientEvents(Guid orgId, string? type, string? mac, string? hostname, string? ip, string? mfg, string? nacruleId, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `mac` ← `mac`, `hostname` ← `hostname`, `ip` ← `ip`, `mfg` ← `mfg`, `nacrule_id` ← `nacruleId`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchEventsWanClient`
- **Error**: `SdkException<SearchOrgWanClientEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgWanClients
- **HTTP**: `GET /api/v1/orgs/{org_id}/wan_clients/search` (ApiHost (api))
- **Notes**: Search Org WAN Clients
- **Signature**: `SearchOrgWanClients(Guid orgId, string? mac, string? hostname, string? ip, string? network, string? ipSrc, string? mfg, int? start, int? end, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`mac` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`, `hostname` ← `hostname`, `ip` ← `ip`, `network` ← `network`, `ip_src` ← `ipSrc`, `mfg` ← `mfg`, `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `SearchWanClient`
- **Error**: `SdkException<SearchOrgWanClientsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
