# SitesWxTags — operations

Accessor: `client.SitesWxTags` · Source: `Api/SitesWxTags.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteWxTag
- **HTTP**: `POST /api/v1/sites/{site_id}/wxtags` (ApiHost (api))
- **Notes**: Create Site WxTag
- **Signature**: `CreateSiteWxTag(Guid siteId, WxlanTag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTag`
- **Error**: `SdkException<CreateSiteWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWxTag
- **HTTP**: `DELETE /api/v1/sites/{site_id}/wxtags/{wxtag_id}` (ApiHost (api))
- **Notes**: Delete Site WxTag
- **Signature**: `DeleteSiteWxTag(Guid siteId, Guid wxtagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteApplicationList
- **HTTP**: `GET /api/v1/sites/{site_id}/wxtags/apps` (ApiHost (api))
- **Notes**: Get Application List
- **Signature**: `GetSiteApplicationList(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SearchWxtagAppsItem>`
- **Error**: `SdkException<GetSiteApplicationListError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteWxTag
- **HTTP**: `GET /api/v1/sites/{site_id}/wxtags/{wxtag_id}` (ApiHost (api))
- **Notes**: Get Site WxTag Details
- **Signature**: `GetSiteWxTag(Guid siteId, Guid wxtagId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTag`
- **Error**: `SdkException<GetSiteWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteWxTags
- **HTTP**: `GET /api/v1/sites/{site_id}/wxtags` (ApiHost (api))
- **Notes**: Get List of Site WxTags
- **Signature**: `ListSiteWxTags(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<WxlanTag>`
- **Error**: `SdkException<ListSiteWxTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteWxTag
- **HTTP**: `PUT /api/v1/sites/{site_id}/wxtags/{wxtag_id}` (ApiHost (api))
- **Notes**: Update Site WxTag
- **Signature**: `UpdateSiteWxTag(Guid siteId, Guid wxtagId, WxlanTag? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTag`
- **Error**: `SdkException<UpdateSiteWxTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
