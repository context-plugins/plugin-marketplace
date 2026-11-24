<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.Assets` · Source: `src/UiPath/Api/Assets.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAsset

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateAsset(CreateAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Asset`
- **Error**: `ApiException<CreateAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAssetRequest` | `src/UiPath/Requests/Assets/CreateAssetRequest.cs` |
| `Asset` | `src/UiPath/Models/Asset.cs` |
| `CreateAssetError` | `src/UiPath/Errors/CreateAssetError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### DeleteAsset

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteAsset(DeleteAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAssetRequest` | `src/UiPath/Requests/Assets/DeleteAssetRequest.cs` |
| `DeleteAssetError` | `src/UiPath/Errors/DeleteAssetError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### GetAsset

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAsset(GetAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `Asset`
- **Error**: `ApiException<GetAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAssetRequest` | `src/UiPath/Requests/Assets/GetAssetRequest.cs` |
| `Asset` | `src/UiPath/Models/Asset.cs` |
| `GetAssetError` | `src/UiPath/Errors/GetAssetError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### ListAssets

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAssets(ListAssetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataAssetCollection`
- **Error**: `ApiException<ListAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAssetsRequest` | `src/UiPath/Requests/Assets/ListAssetsRequest.cs` |
| `ODataAssetCollection` | `src/UiPath/Models/ODataAssetCollection.cs` |
| `ListAssetsError` | `src/UiPath/Errors/ListAssetsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### UpdateAsset

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateAsset(UpdateAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Asset`
- **Error**: `ApiException<UpdateAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAssetRequest` | `src/UiPath/Requests/Assets/UpdateAssetRequest.cs` |
| `Asset` | `src/UiPath/Models/Asset.cs` |
| `UpdateAssetError` | `src/UiPath/Errors/UpdateAssetError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

