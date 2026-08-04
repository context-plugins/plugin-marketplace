# AssetApi — operations

Accessor: `client.AssetApi` · Source: `Api/AssetApi.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAsset
- **HTTP**: `POST /Assets` (Default2 (api))
- **Notes**: Adds an asset to the system
- **Signature**: `CreateAsset(string xeroTenantId, string? idempotencyKey, Asset body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<CreateAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetAssetsResponse(out AssetsResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAssetType
- **HTTP**: `POST /AssetTypes` (Default2 (api))
- **Notes**: Adds an fixed asset type to the system
- **Signature**: `CreateAssetType(string xeroTenantId, string? idempotencyKey, AssetType body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssetType`
- **Error**: `SdkException<CreateAssetTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetAssetTypesResponse(out AssetTypesResponse)` [400] · `TryGetNoContent(out RawError)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAssetById
- **HTTP**: `GET /Assets/{id}` (Default2 (api))
- **Notes**: By passing in the appropriate asset id, you can search for a specific fixed asset in the system
- **Signature**: `GetAssetById(Guid id, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Asset`
- **Error**: `SdkException<GetAssetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAssetSettings
- **HTTP**: `GET /Settings` (Default2 (api))
- **Notes**: By passing in the appropriate options, you can search for available fixed asset types in the system
- **Signature**: `GetAssetSettings(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Setting`
- **Error**: `SdkException<GetAssetSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAssetTypes
- **HTTP**: `GET /AssetTypes` (Default2 (api))
- **Notes**: By passing in the appropriate options, you can search for available fixed asset types in the system
- **Signature**: `GetAssetTypes(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<AssetType>`
- **Error**: `SdkException<GetAssetTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAssets
- **HTTP**: `GET /Assets` (Default2 (api))
- **Notes**: By passing in the appropriate options, you can search for available fixed asset in the system
- **Signature**: `GetAssets(AssetStatusQueryParam status, int? page, int? pageSize, OrderBy? orderBy, SortDirection? sortDirection, string? filterBy, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`page` … `filterBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `page` ← `page`, `pageSize` ← `pageSize`, `orderBy` ← `orderBy`, `sortDirection` ← `sortDirection`, `filterBy` ← `filterBy`
- **Returns**: `Assets`
- **Error**: `SdkException<GetAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
