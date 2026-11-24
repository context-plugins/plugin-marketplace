<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactPoints — operations

Accessor: `client.ContactPoints` · Source: `src/Perigon/Api/ContactPoints.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateContactPoint

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateContactPoint(CreateContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactPointResult`
- **Error**: `ApiException<CreateContactPointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContactPointRequest` | `src/Perigon/Requests/ContactPoints/CreateContactPointRequest.cs` |
| `ContactPointRequestBody` | `src/Perigon/Models/ContactPointRequestBody.cs` |
| `ContactPointResult` | `src/Perigon/Models/ContactPointResult.cs` |
| `CreateContactPointError` | `src/Perigon/Errors/CreateContactPointError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### DeleteContactPoint

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteContactPoint(DeleteContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`
- **Returns**: `ContactPointResult`
- **Error**: `ApiException<DeleteContactPointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteContactPointRequest` | `src/Perigon/Requests/ContactPoints/DeleteContactPointRequest.cs` |
| `ContactPointResult` | `src/Perigon/Models/ContactPointResult.cs` |
| `DeleteContactPointError` | `src/Perigon/Errors/DeleteContactPointError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### GetContactPoint

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactPoint(GetContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`
- **Returns**: `ContactPointResult`
- **Error**: `ApiException<GetContactPointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactPointRequest` | `src/Perigon/Requests/ContactPoints/GetContactPointRequest.cs` |
| `ContactPointResult` | `src/Perigon/Models/ContactPointResult.cs` |
| `GetContactPointError` | `src/Perigon/Errors/GetContactPointError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListContactPoints

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListContactPoints(ListContactPointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `status` ← `Status`, `type` ← `Type`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `ContactPointListResult`
- **Error**: `ApiException<ListContactPointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContactPointsRequest` | `src/Perigon/Requests/ContactPoints/ListContactPointsRequest.cs` |
| `ContactPointSortBy` | `src/Perigon/Models/Enums/ContactPointSortBy.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Status1` | `src/Perigon/Models/Enums/Status1.cs` |
| `Type1` | `src/Perigon/Models/Enums/Type1.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `ContactPointListResult` | `src/Perigon/Models/ContactPointListResult.cs` |
| `ListContactPointsError` | `src/Perigon/Errors/ListContactPointsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### UpdateContactPoint

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateContactPoint(UpdateContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`, `Body`
- **Returns**: `ContactPointResult`
- **Error**: `ApiException<UpdateContactPointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContactPointRequest` | `src/Perigon/Requests/ContactPoints/UpdateContactPointRequest.cs` |
| `ContactPointUpdateBody` | `src/Perigon/Models/ContactPointUpdateBody.cs` |
| `ContactPointResult` | `src/Perigon/Models/ContactPointResult.cs` |
| `UpdateContactPointError` | `src/Perigon/Errors/UpdateContactPointError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

