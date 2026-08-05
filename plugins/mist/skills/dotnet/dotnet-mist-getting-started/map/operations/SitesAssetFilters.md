# SitesAssetFilters — operations

Accessor: `client.SitesAssetFilters` · Source: `Api/SitesAssetFilters.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteAssetFilter
- **HTTP**: `POST /api/v1/sites/{site_id}/assetfilters` (ApiHost (api))
- **Notes**: Create Site Asset Filter
- **Signature**: `CreateSiteAssetFilter(Guid siteId, AssetFilter? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssetFilter`
- **Error**: `SdkException<CreateSiteAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteAssetFilter
- **HTTP**: `DELETE /api/v1/sites/{site_id}/assetfilters/{assetfilter_id}` (ApiHost (api))
- **Notes**: Deletes an existing BLE asset filter for the given site.
- **Signature**: `DeleteSiteAssetFilter(Guid siteId, Guid assetfilterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteAssetFilter
- **HTTP**: `GET /api/v1/sites/{site_id}/assetfilters/{assetfilter_id}` (ApiHost (api))
- **Notes**: Get Site Asset Filter Details
- **Signature**: `GetSiteAssetFilter(Guid siteId, Guid assetfilterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AssetFilter`
- **Error**: `SdkException<GetSiteAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAssetFilters
- **HTTP**: `GET /api/v1/sites/{site_id}/assetfilters` (ApiHost (api))
- **Notes**: Get List of Site Asset Filters
- **Signature**: `ListSiteAssetFilters(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<AssetFilter>`
- **Error**: `SdkException<ListSiteAssetFiltersError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteAssetFilter
- **HTTP**: `PUT /api/v1/sites/{site_id}/assetfilters/{assetfilter_id}` (ApiHost (api))
- **Notes**: Updates an existing BLE asset filter for the given site.
- **Signature**: `UpdateSiteAssetFilter(Guid siteId, Guid assetfilterId, AssetFilter? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssetFilter`
- **Error**: `SdkException<UpdateSiteAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
