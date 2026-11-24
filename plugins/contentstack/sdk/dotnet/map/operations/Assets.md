<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.Assets` · Source: `src/Contentstack/Api/Assets.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAllAssets

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetAllAssets(GetAllAssetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`, `AccessToken`
- **Query params (wire ← C#)**: `skip` ← `Skip`, `limit` ← `Limit`, `include_count` ← `IncludeCount`
- **Returns**: `AssetList`
- **Error**: `ApiException<GetAllAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllAssetsRequest` | `src/Contentstack/Requests/Assets/GetAllAssetsRequest.cs` |
| `AssetList` | `src/Contentstack/Models/AssetList.cs` |
| `GetAllAssetsError` | `src/Contentstack/Errors/GetAllAssetsError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### GetSingleAsset

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `GetSingleAsset(GetSingleAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AssetUid`, `ApiKey`, `AccessToken`
- **Returns**: `Asset`
- **Error**: `ApiException<GetSingleAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSingleAssetRequest` | `src/Contentstack/Requests/Assets/GetSingleAssetRequest.cs` |
| `Asset` | `src/Contentstack/Models/Asset.cs` |
| `GetSingleAssetError` | `src/Contentstack/Errors/GetSingleAssetError.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

### UploadAsset

- **Server group**: `DefaultContentstackAssetsApi`
- **Auth**: `options.ApiKey` AND `options.DeliveryToken`
- **Signature**: `UploadAsset(UploadAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`
- **Returns**: `Asset2`
- **Error**: `ApiException<UploadAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400] · `TryGetErrorContentstackAssetsApi([NotNullWhen(true)] out ErrorContentstackAssetsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAssetRequest` | `src/Contentstack/Requests/Assets/UploadAssetRequest.cs` |
| `Asset2` | `src/Contentstack/Models/Asset2.cs` |
| `UploadAssetError` | `src/Contentstack/Errors/UploadAssetError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |
| `ErrorContentstackAssetsApi` | `src/Contentstack/Models/ErrorContentstackAssetsApi.cs` |

