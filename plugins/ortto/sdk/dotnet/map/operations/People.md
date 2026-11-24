<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.People` · Source: `src/Ortto/Api/People.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeletePeople

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeletePeople(DeletePeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePeopleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePeopleRequest` | `src/Ortto/Requests/People/DeletePeopleRequest.cs` |
| `PersonDeleteRequest` | `src/Ortto/Models/PersonDeleteRequest.cs` |
| `DeletePeopleError` | `src/Ortto/Errors/DeletePeopleError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

### GetPeople

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetPeople(GetPeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PersonGetResponse`
- **Error**: `ApiException<GetPeopleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPeopleRequest` | `src/Ortto/Requests/People/GetPeopleRequest.cs` |
| `PersonGetRequest` | `src/Ortto/Models/PersonGetRequest.cs` |
| `PersonGetResponse` | `src/Ortto/Models/PersonGetResponse.cs` |
| `GetPeopleError` | `src/Ortto/Errors/GetPeopleError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

### GetPeopleByIds

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetPeopleByIds(GetPeopleByIdsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PersonGetResponse`
- **Error**: `ApiException<GetPeopleByIdsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPeopleByIdsRequest` | `src/Ortto/Requests/People/GetPeopleByIdsRequest.cs` |
| `PersonGetByIdsRequest` | `src/Ortto/Models/PersonGetByIdsRequest.cs` |
| `PersonGetResponse` | `src/Ortto/Models/PersonGetResponse.cs` |
| `GetPeopleByIdsError` | `src/Ortto/Errors/GetPeopleByIdsError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

### MergePeople

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MergePeople(MergePeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PersonMergeResponse`
- **Error**: `ApiException<MergePeopleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MergePeopleRequest` | `src/Ortto/Requests/People/MergePeopleRequest.cs` |
| `PersonMergeRequest` | `src/Ortto/Models/PersonMergeRequest.cs` |
| `PersonMergeResponse` | `src/Ortto/Models/PersonMergeResponse.cs` |
| `MergePeopleError` | `src/Ortto/Errors/MergePeopleError.cs` |
| `Error` | `src/Ortto/Models/Error.cs` |

