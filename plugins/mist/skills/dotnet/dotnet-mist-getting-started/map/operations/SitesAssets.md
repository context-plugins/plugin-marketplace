# SitesAssets — operations

Accessor: `client.SitesAssets` · Source: `Api/SitesAssets.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteAsset
- **HTTP**: `POST /api/v1/sites/{site_id}/assets` (ApiHost (api))
- **Notes**: Create Site Asset
- **Signature**: `CreateSiteAsset(Guid siteId, Asset? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<CreateSiteAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteAsset
- **HTTP**: `DELETE /api/v1/sites/{site_id}/assets/{asset_id}` (ApiHost (api))
- **Notes**: Delete Site Asset
- **Signature**: `DeleteSiteAsset(Guid siteId, Guid assetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteAsset
- **HTTP**: `GET /api/v1/sites/{site_id}/assets/{asset_id}` (ApiHost (api))
- **Notes**: Get Site Asset Details
- **Signature**: `GetSiteAsset(Guid siteId, Guid assetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<GetSiteAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportSiteAssets
- **HTTP**: `POST /api/v1/sites/{site_id}/assets/import` (ApiHost (api))
- **Notes**: Import Site Assets. It can be done via a CSV file or a JSON payload. CSV File Format name,mac "asset_name",5c5b53010101
- **Signature**: `ImportSiteAssets(Guid siteId, ImportSiteAssetsUpsert? upsert, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `upsert` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `upsert` ← `upsert`
- **Returns**: `void` (Task)
- **Error**: `SdkException<ImportSiteAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteAssets
- **HTTP**: `GET /api/v1/sites/{site_id}/assets` (ApiHost (api))
- **Notes**: Get List of Site Assets
- **Signature**: `ListSiteAssets(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Asset>`
- **Error**: `SdkException<ListSiteAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteAsset
- **HTTP**: `PUT /api/v1/sites/{site_id}/assets/{asset_id}` (ApiHost (api))
- **Notes**: Update Site Asset
- **Signature**: `UpdateSiteAsset(Guid siteId, Guid assetId, Asset? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<UpdateSiteAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
