<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.Assets` · Source: `src/DoiT/Api/Assets.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAsset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateAsset(CreateAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `mode` ← `Mode`, `accountName` ← `AccountName`, `rootEmail` ← `RootEmail`
- **Returns**: `AssetResponse`
- **Error**: `ApiException<CreateAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAssetRequest` | `src/DoiT/Requests/Assets/CreateAssetRequest.cs` |
| `AssetResponse` | `src/DoiT/Models/AssetResponse.cs` |
| `CreateAssetError` | `src/DoiT/Errors/CreateAssetError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetAsset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAsset(GetAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AssetItemDetailed`
- **Error**: `ApiException<GetAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAssetRequest` | `src/DoiT/Requests/Assets/GetAssetRequest.cs` |
| `AssetItemDetailed` | `src/DoiT/Models/AssetItemDetailed.cs` |
| `GetAssetError` | `src/DoiT/Errors/GetAssetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### IdOfAsset

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `IdOfAsset(IdOfAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BillingV1AssetsResponse1`
- **Error**: `ApiException<IdOfAssetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IdOfAssetRequest` | `src/DoiT/Requests/Assets/IdOfAssetRequest.cs` |
| `BillingV1AssetsRequest` | `src/DoiT/Models/BillingV1AssetsRequest.cs` |
| `BillingV1AssetsResponse1` | `src/DoiT/Models/BillingV1AssetsResponse1.cs` |
| `IdOfAssetError` | `src/DoiT/Errors/IdOfAssetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### IdOfAssets

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `IdOfAssets(IdOfAssetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`
- **Returns**: `BillingV1AssetsResponse`
- **Error**: `ApiException<IdOfAssetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IdOfAssetsRequest` | `src/DoiT/Requests/Assets/IdOfAssetsRequest.cs` |
| `BillingV1AssetsResponse` | `src/DoiT/Models/BillingV1AssetsResponse.cs` |
| `IdOfAssetsError` | `src/DoiT/Errors/IdOfAssetsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

