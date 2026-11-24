<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdSets — operations

Accessor: `client.AdSets` · Source: `src/FacebookBusinessManager/Api/AdSets.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAdSet

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateAdSet(CreateAdSetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreateAdSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAdSetRequest` | `src/FacebookBusinessManager/Requests/AdSets/CreateAdSetRequest.cs` |
| `AdSetCreate` | `src/FacebookBusinessManager/Models/AdSetCreate.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreateAdSetError` | `src/FacebookBusinessManager/Errors/CreateAdSetError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetAdSet

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAdSet(GetAdSetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdSetId`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `AdSet`
- **Error**: `ApiException<GetAdSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAdSetRequest` | `src/FacebookBusinessManager/Requests/AdSets/GetAdSetRequest.cs` |
| `AdSet` | `src/FacebookBusinessManager/Models/AdSet.cs` |
| `GetAdSetError` | `src/FacebookBusinessManager/Errors/GetAdSetError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### ListAdSets

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAdSets(ListAdSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`
- **Returns**: `AdSetList`
- **Error**: `ApiException<ListAdSetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAdSetsRequest` | `src/FacebookBusinessManager/Requests/AdSets/ListAdSetsRequest.cs` |
| `AdSetList` | `src/FacebookBusinessManager/Models/AdSetList.cs` |
| `ListAdSetsError` | `src/FacebookBusinessManager/Errors/ListAdSetsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### UpdateAdSet

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateAdSet(UpdateAdSetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdSetId`, `Body`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<UpdateAdSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAdSetRequest` | `src/FacebookBusinessManager/Requests/AdSets/UpdateAdSetRequest.cs` |
| `AdSetUpdate` | `src/FacebookBusinessManager/Models/AdSetUpdate.cs` |
| `SuccessResponse` | `src/FacebookBusinessManager/Models/SuccessResponse.cs` |
| `UpdateAdSetError` | `src/FacebookBusinessManager/Errors/UpdateAdSetError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

