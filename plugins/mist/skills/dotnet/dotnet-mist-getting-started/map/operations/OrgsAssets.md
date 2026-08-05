# OrgsAssets — operations

Accessor: `client.OrgsAssets` · Source: `Api/OrgsAssets.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgAsset
- **HTTP**: `POST /api/v1/orgs/{org_id}/assets` (ApiHost (api))
- **Notes**: Create Org Asset
- **Signature**: `CreateOrgAsset(Guid orgId, Asset? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<CreateOrgAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgAsset
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/assets/{asset_id}` (ApiHost (api))
- **Notes**: Delete Org Asset
- **Signature**: `DeleteOrgAsset(Guid orgId, Guid assetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgAsset
- **HTTP**: `GET /api/v1/orgs/{org_id}/assets/{asset_id}` (ApiHost (api))
- **Notes**: Get Org Asset Details
- **Signature**: `GetOrgAsset(Guid orgId, Guid assetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<GetOrgAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ImportOrgAssets
- **HTTP**: `POST /api/v1/orgs/{org_id}/assets/import` (ApiHost (api))
- **Notes**: Import Org Assets. It can be done via a CSV file or a JSON payload. CSV File Format name,mac "asset_name",5c5b53010101
- **Signature**: `ImportOrgAssets(Guid orgId, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ImportOrgAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAssets
- **HTTP**: `GET /api/v1/orgs/{org_id}/assets` (ApiHost (api))
- **Notes**: Get List of Org Assets
- **Signature**: `ListOrgAssets(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Asset>`
- **Error**: `SdkException<ListOrgAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgAsset
- **HTTP**: `PUT /api/v1/orgs/{org_id}/assets/{asset_id}` (ApiHost (api))
- **Notes**: Update Org Asset
- **Signature**: `UpdateOrgAsset(Guid orgId, Guid assetId, Asset? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<UpdateOrgAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
