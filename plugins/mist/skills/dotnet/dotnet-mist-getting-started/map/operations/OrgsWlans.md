# OrgsWlans — operations

Accessor: `client.OrgsWlans` · Source: `Api/OrgsWlans.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgWlan
- **HTTP**: `POST /api/v1/orgs/{org_id}/wlans` (ApiHost (api))
- **Notes**: Create Org Wlan
- **Signature**: `CreateOrgWlan(Guid orgId, Wlan? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Wlan`
- **Error**: `SdkException<CreateOrgWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWlan
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/wlans/{wlan_id}` (ApiHost (api))
- **Notes**: Delete Org WLAN
- **Signature**: `DeleteOrgWlan(Guid orgId, Guid wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWlanPortalImage
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/wlans/{wlan_id}/portal_image` (ApiHost (api))
- **Notes**: Delete Org WLAN Portal Image
- **Signature**: `DeleteOrgWlanPortalImage(Guid orgId, Guid wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWlanPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgWlan
- **HTTP**: `GET /api/v1/orgs/{org_id}/wlans/{wlan_id}` (ApiHost (api))
- **Notes**: Get Org Wlan Detail
- **Signature**: `GetOrgWlan(Guid orgId, Guid wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Wlan`
- **Error**: `SdkException<GetOrgWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgWlans
- **HTTP**: `GET /api/v1/orgs/{org_id}/wlans` (ApiHost (api))
- **Notes**: Get List of Org Wlans
- **Signature**: `ListOrgWlans(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Wlan>`
- **Error**: `SdkException<ListOrgWlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgWlan
- **HTTP**: `PUT /api/v1/orgs/{org_id}/wlans/{wlan_id}` (ApiHost (api))
- **Notes**: Update Org Wlan
- **Signature**: `UpdateOrgWlan(Guid orgId, Guid wlanId, Wlan? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Wlan`
- **Error**: `SdkException<UpdateOrgWlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgWlanPortalTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/wlans/{wlan_id}/portal_template` (ApiHost (api))
- **Notes**: Update a Portal Template Sponsor Email Template Sponsor Email Template supports following template variables: | Name | Description | | --- | --- | | approve_url | Renders URL to approve the request; optionally &amp;minutes=N query param can be appended to change the Authorization period of the guest, where N is a valid integer denoting number of minutes a guest remains authorized | | deny_url | Renders URL to reject the request | | guest_email | Renders Email ID of the guest | | guest_name | Renders Name of the guest | | field1 | Renders value of the Custom Field 1 | | field2 | Renders value of the Custom Field 2 | | company | Renders value of the Company field | | sponsor_link_validity_duration | Renders validity time of the request (i.e. Approve/Deny URL) | | auth_expire_minutes | Renders Wlan-level configured Guest Authorization Expiration time period (in minutes), If not configured then default (1 day in minutes) |
- **Signature**: `UpdateOrgWlanPortalTemplate(Guid orgId, Guid wlanId, WlanPortalTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WlanPortalTemplate`
- **Error**: `SdkException<UpdateOrgWlanPortalTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadOrgWlanPortalImage
- **HTTP**: `POST /api/v1/orgs/{org_id}/wlans/{wlan_id}/portal_image` (ApiHost (api))
- **Notes**: Upload Org WLAN Portal Image
- **Signature**: `UploadOrgWlanPortalImage(Guid orgId, Guid wlanId, BinaryContent file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadOrgWlanPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
