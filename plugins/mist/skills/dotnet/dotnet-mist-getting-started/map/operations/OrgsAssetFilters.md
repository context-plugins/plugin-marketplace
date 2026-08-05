# OrgsAssetFilters — operations

Accessor: `client.OrgsAssetFilters` · Source: `Api/OrgsAssetFilters.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgAssetFilter
- **HTTP**: `POST /api/v1/orgs/{org_id}/assetfilters` (ApiHost (api))
- **Notes**: Create Asset Filter Creates a single BLE asset filter for the given site. Any subset of filter properties can be included in the filter. A matching asset must meet the conditions of all given filter properties (logical ‘AND’).
- **Signature**: `CreateOrgAssetFilter(Guid orgId, AssetFilter? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssetFilter`
- **Error**: `SdkException<CreateOrgAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgAssetFilter
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/assetfilters/{assetfilter_id}` (ApiHost (api))
- **Notes**: Deletes an existing BLE asset filter for the given site.
- **Signature**: `DeleteOrgAssetFilter(Guid orgId, Guid assetfilterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgAssetFilter
- **HTTP**: `GET /api/v1/orgs/{org_id}/assetfilters/{assetfilter_id}` (ApiHost (api))
- **Notes**: Get Org Asset Filter Details
- **Signature**: `GetOrgAssetFilter(Guid orgId, Guid assetfilterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AssetFilter`
- **Error**: `SdkException<GetOrgAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAssetFilters
- **HTTP**: `GET /api/v1/orgs/{org_id}/assetfilters` (ApiHost (api))
- **Notes**: Get List of Org BLE asset filters. Each asset filter in the list operates independently. For a filter object to match an asset, all of the filter properties must match (logical ‘AND’ of each filter property). For example, the "Visitor Tags" filter below will match an asset when both the "ibeacon\_uuid" and "ibeacon_major" properties match the asset. All non-matching assets are ignored.
- **Signature**: `ListOrgAssetFilters(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<AssetFilter>`
- **Error**: `SdkException<ListOrgAssetFiltersError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgAssetFilter
- **HTTP**: `PUT /api/v1/orgs/{org_id}/assetfilters/{assetfilter_id}` (ApiHost (api))
- **Notes**: Updates an existing BLE asset filter for the given site.
- **Signature**: `UpdateOrgAssetFilter(Guid orgId, Guid assetfilterId, AssetFilter? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssetFilter`
- **Error**: `SdkException<UpdateOrgAssetFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
