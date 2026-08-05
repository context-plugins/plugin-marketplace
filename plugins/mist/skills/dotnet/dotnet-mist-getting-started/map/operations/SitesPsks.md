# SitesPsks — operations

Accessor: `client.SitesPsks` · Source: `Api/SitesPsks.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSitePsk
- **HTTP**: `POST /api/v1/sites/{site_id}/psks` (ApiHost (api))
- **Notes**: Create Site PSK When `usage`==`macs`, corresponding "macs" field will hold a list consisting of client mac addresses (["xx:xx:xx:xx:xx",...]) or mac patterns(["xx:xx:*","xx*",...]) or both (["xx:xx:xx:xx:xx:xx", "xx:*", ...]). This list is capped at 5000
- **Signature**: `CreateSitePsk(Guid siteId, Psk? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Psk`
- **Error**: `SdkException<CreateSitePskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSitePsk
- **HTTP**: `DELETE /api/v1/sites/{site_id}/psks/{psk_id}` (ApiHost (api))
- **Notes**: Delete Site PSK
- **Signature**: `DeleteSitePsk(Guid siteId, Guid pskId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSitePskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSitePsk
- **HTTP**: `GET /api/v1/sites/{site_id}/psks/{psk_id}` (ApiHost (api))
- **Notes**: Get Site PSK Details
- **Signature**: `GetSitePsk(Guid siteId, Guid pskId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Psk`
- **Error**: `SdkException<GetSitePskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportSitePsks
- **HTTP**: `POST /api/v1/sites/{site_id}/psks/import` (ApiHost (api))
- **Notes**: Import PSK from CSV file or JSON CSV File Format PSK Import CSV File Format: name,ssid,passphrase,usage,vlan_id,mac Common,warehouse,foryoureyesonly,single,35,a31425f31278 Justin,reception,visible,multi,1002
- **Signature**: `ImportSitePsks(Guid siteId, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Psk>`
- **Error**: `SdkException<ImportSitePsksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSitePsks
- **HTTP**: `GET /api/v1/sites/{site_id}/psks` (ApiHost (api))
- **Notes**: Get List of Site PSKs
- **Signature**: `ListSitePsks(Guid siteId, string? ssid, string? role, string? name, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ssid` — nullable, no default → **must pass explicitly**
  - `role` — nullable, no default → **must pass explicitly**
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `ssid` ← `ssid`, `role` ← `role`, `name` ← `name`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Psk>`
- **Error**: `SdkException<ListSitePsksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteMultiplePsks
- **HTTP**: `PUT /api/v1/sites/{site_id}/psks` (ApiHost (api))
- **Notes**: Update multiple PSKs
- **Signature**: `UpdateSiteMultiplePsks(Guid siteId, IReadOnlyList<Psk>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Psk>`
- **Error**: `SdkException<UpdateSiteMultiplePsksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSitePsk
- **HTTP**: `PUT /api/v1/sites/{site_id}/psks/{psk_id}` (ApiHost (api))
- **Notes**: Update Site PSK
- **Signature**: `UpdateSitePsk(Guid siteId, Guid pskId, Psk? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Psk`
- **Error**: `SdkException<UpdateSitePskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
