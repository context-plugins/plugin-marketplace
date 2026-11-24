<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dimensions — operations

Accessor: `client.Dimensions` · Source: `src/DoiT/Api/Dimensions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDimensions

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetDimensions(GetDimensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`, `Id`
- **Query params (wire ← C#)**: `type` ← `Type`, `id` ← `Id`
- **Returns**: `DimensionsExternalApiGetResponse`
- **Error**: `ApiException<GetDimensionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDimensionsRequest` | `src/DoiT/Requests/Dimensions/GetDimensionsRequest.cs` |
| `DimensionsTypes` | `src/DoiT/Models/Enums/DimensionsTypes.cs` |
| `DimensionsExternalApiGetResponse` | `src/DoiT/Models/DimensionsExternalApiGetResponse.cs` |
| `GetDimensionsError` | `src/DoiT/Errors/GetDimensionsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListDimensions

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListDimensions(ListDimensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`
- **Returns**: `DimensionsExternalApiListResponse`
- **Error**: `ApiException<ListDimensionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDimensionsRequest` | `src/DoiT/Requests/Dimensions/ListDimensionsRequest.cs` |
| `SortByDoiTDimensionsApi` | `src/DoiT/Models/Enums/SortByDoiTDimensionsApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `DimensionsExternalApiListResponse` | `src/DoiT/Models/DimensionsExternalApiListResponse.cs` |
| `ListDimensionsError` | `src/DoiT/Errors/ListDimensionsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

