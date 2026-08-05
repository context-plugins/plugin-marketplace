# OrgsWxTags — operations

Accessor: `client.OrgsWxTags` · Source: `Api/OrgsWxTags.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgWxTag
- **HTTP**: `POST /api/v1/orgs/{org_id}/wxtags` (ApiHost (api))
- **Notes**: Create WxLAN Tag
- **Signature**: `CreateOrgWxTag(Guid orgId, WxlanTag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTag`
- **Error**: `SdkException<CreateOrgWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWxTag
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/wxtags/{wxtag_id}` (ApiHost (api))
- **Notes**: Delete WxLAN Tag
- **Signature**: `DeleteOrgWxTag(Guid orgId, Guid wxtagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgApplicationList
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxtags/apps` (ApiHost (api))
- **Notes**: Get Application List
- **Signature**: `GetOrgApplicationList(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SearchWxtagAppsItem>`
- **Error**: `SdkException<GetOrgApplicationListError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgCurrentMatchingClientsOfAwxTag
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxtags/{wxtag_id}/clients` (ApiHost (api))
- **Notes**: Get Current Matching Clients of a WXLAN Tag
- **Signature**: `GetOrgCurrentMatchingClientsOfAwxTag(Guid orgId, Guid wxtagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<WxtagClient>`
- **Error**: `SdkException<GetOrgCurrentMatchingClientsOfAwxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgWxTag
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxtags/{wxtag_id}` (ApiHost (api))
- **Notes**: Get WxLAN Tag Details
- **Signature**: `GetOrgWxTag(Guid orgId, Guid wxtagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTag`
- **Error**: `SdkException<GetOrgWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgWxTags
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxtags` (ApiHost (api))
- **Notes**: Get List of Org WxLAN Tags
- **Signature**: `ListOrgWxTags(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<WxlanTag>`
- **Error**: `SdkException<ListOrgWxTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgWxTag
- **HTTP**: `PUT /api/v1/orgs/{org_id}/wxtags/{wxtag_id}` (ApiHost (api))
- **Notes**: Update WxLAN Tag
- **Signature**: `UpdateOrgWxTag(Guid orgId, Guid wxtagId, WxlanTag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTag`
- **Error**: `SdkException<UpdateOrgWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
