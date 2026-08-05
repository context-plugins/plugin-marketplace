# OrgsPsks — operations

Accessor: `client.OrgsPsks` · Source: `Api/OrgsPsks.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgPsk
- **HTTP**: `POST /api/v1/orgs/{org_id}/psks` (ApiHost (api))
- **Notes**: Create Org PSK When `usage`==`macs`, corresponding "macs" field will hold a list consisting of client mac addresses (["xx:xx:xx:xx:xx",...]) or mac patterns(["xx:xx:*","xx*",...]) or both (["xx:xx:xx:xx:xx:xx", "xx:*", ...]). This list is capped at 5000
- **Signature**: `CreateOrgPsk(Guid orgId, bool? upsert, Psk? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `upsert` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `upsert` ← `upsert`
- **Returns**: `Psk`
- **Error**: `SdkException<CreateOrgPskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgPsk
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/psks/{psk_id}` (ApiHost (api))
- **Notes**: Delete Org PSK
- **Signature**: `DeleteOrgPsk(Guid orgId, Guid pskId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgPskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgPskList
- **HTTP**: `POST /api/v1/orgs/{org_id}/psks/delete` (ApiHost (api))
- **Notes**: Delete Org PSK List Delete list of psks on the org. This API accepts single string or list of strings
- **Signature**: `DeleteOrgPskList(Guid orgId, PskIdList? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgPskListError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgPskOldPassphrase
- **HTTP**: `POST /api/v1/orgs/{org_id}/psks/{psk_id}/delete_old_passphrase` (ApiHost (api))
- **Notes**: Delete `old_passphrase` from PSK. If successful, response is same as GET, returns the PSK with `old_passphrase` removed.
- **Signature**: `DeleteOrgPskOldPassphrase(Guid orgId, Guid pskId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Psk`
- **Error**: `SdkException<DeleteOrgPskOldPassphraseError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgPsk
- **HTTP**: `GET /api/v1/orgs/{org_id}/psks/{psk_id}` (ApiHost (api))
- **Notes**: Get Org PSK Details
- **Signature**: `GetOrgPsk(Guid orgId, Guid pskId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Psk`
- **Error**: `SdkException<GetOrgPskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportOrgPsks
- **HTTP**: `POST /api/v1/orgs/{org_id}/psks/import` (ApiHost (api))
- **Notes**: Import PSK from CSV file or JSON CSV File Format PSK Import CSV File Format: name,ssid,passphrase,usage,vlan_id,mac,max_usage,role,expire_time,notify_expiry,expiry_notification_time,notify_on_create_or_edit,email Common,warehouse,foryoureyesonly,single,35,a31425f31278,0,student,1618594236 Justin,reception,visible,multi,1002,200,teacher,1618594236 Common2,ssid,1245678-xx,single,35,a31425f31278,0,student,1618594236,true,7,true,admin@test.com
- **Signature**: `ImportOrgPsks(Guid orgId, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Psk>`
- **Error**: `SdkException<ImportOrgPsksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgPsks
- **HTTP**: `GET /api/v1/orgs/{org_id}/psks` (ApiHost (api))
- **Notes**: Get List of Org Psks
- **Signature**: `ListOrgPsks(Guid orgId, string? name, string? ssid, string? role, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `ssid` — nullable, no default → **must pass explicitly**
  - `role` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `ssid` ← `ssid`, `role` ← `role`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Psk>`
- **Error**: `SdkException<ListOrgPsksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgMultiplePsks
- **HTTP**: `PUT /api/v1/orgs/{org_id}/psks` (ApiHost (api))
- **Notes**: Update Multiple PSKs
- **Signature**: `UpdateOrgMultiplePsks(Guid orgId, IReadOnlyList<Psk>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Psk>`
- **Error**: `SdkException<UpdateOrgMultiplePsksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgPsk
- **HTTP**: `PUT /api/v1/orgs/{org_id}/psks/{psk_id}` (ApiHost (api))
- **Notes**: Update Org PSK
- **Signature**: `UpdateOrgPsk(Guid orgId, Guid pskId, Psk? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Psk`
- **Error**: `SdkException<UpdateOrgPskError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
