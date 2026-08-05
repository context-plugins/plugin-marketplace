# OrgsSites — operations

Accessor: `client.OrgsSites` · Source: `Api/OrgsSites.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgSites
- **HTTP**: `GET /api/v1/orgs/{org_id}/sites/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Sites
- **Signature**: `CountOrgSites(Guid orgId, OrgSitesCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgSite
- **HTTP**: `POST /api/v1/orgs/{org_id}/sites` (ApiHost (api))
- **Notes**: Create Org Site
- **Signature**: `CreateOrgSite(Guid orgId, Site? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Site`
- **Error**: `SdkException<CreateOrgSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSites
- **HTTP**: `GET /api/v1/orgs/{org_id}/sites` (ApiHost (api))
- **Notes**: Get List of Org Sites
- **Signature**: `ListOrgSites(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Site>`
- **Error**: `SdkException<ListOrgSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchOrgSites
- **HTTP**: `GET /api/v1/orgs/{org_id}/sites/search` (ApiHost (api))
- **Notes**: Search Sites
- **Signature**: `SearchOrgSites(Guid orgId, bool? analyticEnabled, bool? appWaking, bool? assetEnabled, bool? autoUpgradeEnabled, string? autoUpgradeVersion, string? countryCode, bool? honeypotEnabled, string? id, bool? locateUnconnected, bool? meshEnabled, string? name, bool? rogueEnabled, bool? remoteSyslogEnabled, bool? rtsaEnabled, bool? vnaEnabled, bool? wifiEnabled, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 18 params (`analyticEnabled` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `analytic_enabled` ← `analyticEnabled`, `app_waking` ← `appWaking`, `asset_enabled` ← `assetEnabled`, `auto_upgrade_enabled` ← `autoUpgradeEnabled`, `auto_upgrade_version` ← `autoUpgradeVersion`, `country_code` ← `countryCode`, `honeypot_enabled` ← `honeypotEnabled`, `id` ← `id`, `locate_unconnected` ← `locateUnconnected`, `mesh_enabled` ← `meshEnabled`, `name` ← `name`, `rogue_enabled` ← `rogueEnabled`, `remote_syslog_enabled` ← `remoteSyslogEnabled`, `rtsa_enabled` ← `rtsaEnabled`, `vna_enabled` ← `vnaEnabled`, `wifi_enabled` ← `wifiEnabled`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseSiteSearch`
- **Error**: `SdkException<SearchOrgSitesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
