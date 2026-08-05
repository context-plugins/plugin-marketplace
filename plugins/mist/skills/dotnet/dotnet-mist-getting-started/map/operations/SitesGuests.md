# SitesGuests — operations

Accessor: `client.SitesGuests` · Source: `Api/SitesGuests.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteGuestAuthorizations
- **HTTP**: `GET /api/v1/sites/{site_id}/guests/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Authorized Guest
- **Signature**: `CountSiteGuestAuthorizations(Guid siteId, SiteGuestsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteGuestAuthorizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteGuestAuthorization
- **HTTP**: `DELETE /api/v1/sites/{site_id}/guests/{guest_mac}` (ApiHost (api))
- **Notes**: Delete Guest Authorization
- **Signature**: `DeleteSiteGuestAuthorization(Guid siteId, string guestMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteGuestAuthorization
- **HTTP**: `GET /api/v1/sites/{site_id}/guests/{guest_mac}` (ApiHost (api))
- **Notes**: Get Guest Authorization
- **Signature**: `GetSiteGuestAuthorization(Guid siteId, string guestMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Guest`
- **Error**: `SdkException<GetSiteGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAllGuestAuthorizations
- **HTTP**: `GET /api/v1/sites/{site_id}/guests` (ApiHost (api))
- **Notes**: Get List of Site Guest Authorizations
- **Signature**: `ListSiteAllGuestAuthorizations(Guid siteId, string? wlanId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wlanId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `wlan_id` ← `wlanId`
- **Returns**: `IReadOnlyList<Guest>`
- **Error**: `SdkException<ListSiteAllGuestAuthorizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAllGuestAuthorizationsDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/guests/derived` (ApiHost (api))
- **Notes**: Get the list of derived Guest Authorizations for a site
- **Signature**: `ListSiteAllGuestAuthorizationsDerived(Guid siteId, string? wlanId, bool? crossSite = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wlanId` — nullable, no default → **must pass explicitly**
  - defaults: `crossSite` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `wlan_id` ← `wlanId`, `cross_site` ← `crossSite`
- **Returns**: `IReadOnlyList<Guest>`
- **Error**: `SdkException<ListSiteAllGuestAuthorizationsDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteGuestAuthorization
- **HTTP**: `GET /api/v1/sites/{site_id}/guests/search` (ApiHost (api))
- **Notes**: Search Authorized Guest
- **Signature**: `SearchSiteGuestAuthorization(Guid siteId, string? wlanId, string? authMethod, string? ssid, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`wlanId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `wlan_id` ← `wlanId`, `auth_method` ← `authMethod`, `ssid` ← `ssid`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseGuestSearch`
- **Error**: `SdkException<SearchSiteGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteGuestAuthorization
- **HTTP**: `PUT /api/v1/sites/{site_id}/guests/{guest_mac}` (ApiHost (api))
- **Notes**: Update Guest Authorization
- **Signature**: `UpdateSiteGuestAuthorization(Guid siteId, string guestMac, Guest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Guest`
- **Error**: `SdkException<UpdateSiteGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
