# SitesWlans — operations

Accessor: `client.SitesWlans` · Source: `Api/SitesWlans.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteWlan
- **HTTP**: `POST /api/v1/sites/{site_id}/wlans` (ApiHost (api))
- **Notes**: Create Site WLAN
- **Signature**: `CreateSiteWlan(Guid siteId, Wlan? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Wlan`
- **Error**: `SdkException<CreateSiteWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWlan
- **HTTP**: `DELETE /api/v1/sites/{site_id}/wlans/{wlan_id}` (ApiHost (api))
- **Notes**: Delete Site WLAN
- **Signature**: `DeleteSiteWlan(Guid siteId, Guid wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWlanPortalImage
- **HTTP**: `DELETE /api/v1/sites/{site_id}/wlans/{wlan_id}/portal_image` (ApiHost (api))
- **Notes**: Delete Site WLAN Portal Image
- **Signature**: `DeleteSiteWlanPortalImage(Guid siteId, Guid wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWlanPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteWlan
- **HTTP**: `GET /api/v1/sites/{site_id}/wlans/{wlan_id}` (ApiHost (api))
- **Notes**: Get Site WLAN
- **Signature**: `GetSiteWlan(Guid siteId, Guid wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Wlan`
- **Error**: `SdkException<GetSiteWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteWlans
- **HTTP**: `GET /api/v1/sites/{site_id}/wlans` (ApiHost (api))
- **Notes**: Get List of Site WLANs
- **Signature**: `ListSiteWlans(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Wlan>`
- **Error**: `SdkException<ListSiteWlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSiteWlansDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/wlans/derived` (ApiHost (api))
- **Notes**: Get the list of derived Wlans for a Site
- **Signature**: `ListSiteWlansDerived(Guid siteId, string? wlanId, bool? resolve = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wlanId` — nullable, no default → **must pass explicitly**
  - defaults: `resolve` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `resolve` ← `resolve`, `wlan_id` ← `wlanId`
- **Returns**: `IReadOnlyList<Wlan>`
- **Error**: `SdkException<ListSiteWlansDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteWlan
- **HTTP**: `PUT /api/v1/sites/{site_id}/wlans/{wlan_id}` (ApiHost (api))
- **Notes**: Update Site WLAN
- **Signature**: `UpdateSiteWlan(Guid siteId, Guid wlanId, Wlan? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Wlan`
- **Error**: `SdkException<UpdateSiteWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteWlanPortalTemplate
- **HTTP**: `PUT /api/v1/sites/{site_id}/wlans/{wlan_id}/portal_template` (ApiHost (api))
- **Notes**: Update a Portal Template Sponsor Email Template Sponsor Email Template supports following template variables: | Name | Description | | --- | --- | | approve_url | Renders URL to approve the request; optionally &amp;minutes=N query param can be appended to change the Authorization period of the guest, where N is a valid integer denoting number of minutes a guest remains authorized | | deny_url | Renders URL to reject the request | | guest_email | Renders Email ID of the guest | | guest_name | Renders Name of the guest | | field1 | Renders value of the Custom Field 1 | | field2 | Renders value of the Custom Field 2 | | company | Renders value of the Company field | | sponsor_link_validity_duration | Renders validity time of the request (i.e. Approve/Deny URL) | | auth_expire_minutes | Renders Wlan-level configured Guest Authorization Expiration time period (in minutes), If not configured then default (1 day in minutes) |
- **Signature**: `UpdateSiteWlanPortalTemplate(Guid siteId, Guid wlanId, WlanPortalTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WlanPortalTemplate`
- **Error**: `SdkException<UpdateSiteWlanPortalTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadSiteWlanPortalImage
- **HTTP**: `POST /api/v1/sites/{site_id}/wlans/{wlan_id}/portal_image` (ApiHost (api))
- **Notes**: WLAN Portal Image Upload
- **Signature**: `UploadSiteWlanPortalImage(Guid siteId, Guid wlanId, BinaryContent file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadSiteWlanPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
