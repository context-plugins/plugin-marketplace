# OrgsGuests — operations

Accessor: `client.OrgsGuests` · Source: `Api/OrgsGuests.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgGuestAuthorizations
- **HTTP**: `GET /api/v1/orgs/{org_id}/guests/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Authorized Guest
- **Signature**: `CountOrgGuestAuthorizations(Guid orgId, OrgGuestsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgGuestAuthorizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgGuestAuthorization
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/guests/{guest_mac}` (ApiHost (api))
- **Notes**: Delete Guest Authorization
- **Signature**: `DeleteOrgGuestAuthorization(Guid orgId, string guestMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgGuestAuthorization
- **HTTP**: `GET /api/v1/orgs/{org_id}/guests/{guest_mac}` (ApiHost (api))
- **Notes**: Get Guest Authorization
- **Signature**: `GetOrgGuestAuthorization(Guid orgId, string guestMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Guest`
- **Error**: `SdkException<GetOrgGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgGuestAuthorizations
- **HTTP**: `GET /api/v1/orgs/{org_id}/guests` (ApiHost (api))
- **Notes**: Get List of Org Guest Authorizations
- **Signature**: `ListOrgGuestAuthorizations(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Guest>`
- **Error**: `SdkException<ListOrgGuestAuthorizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgGuestAuthorization
- **HTTP**: `GET /api/v1/orgs/{org_id}/guests/search` (ApiHost (api))
- **Notes**: Search Authorized Guest
- **Signature**: `SearchOrgGuestAuthorization(Guid orgId, string? wlanId, string? authMethod, string? ssid, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`wlanId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `wlan_id` ← `wlanId`, `auth_method` ← `authMethod`, `ssid` ← `ssid`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseGuestSearch`
- **Error**: `SdkException<SearchOrgGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgGuestAuthorization
- **HTTP**: `PUT /api/v1/orgs/{org_id}/guests/{guest_mac}` (ApiHost (api))
- **Notes**: Update Guest Authorization
- **Signature**: `UpdateOrgGuestAuthorization(Guid orgId, string guestMac, GuestOrg? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Guest`
- **Error**: `SdkException<UpdateOrgGuestAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
