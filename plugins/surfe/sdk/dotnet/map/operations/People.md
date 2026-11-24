<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.People` · Source: `src/Surfe/Api/People.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FindPeopleByEmail

- **Auth**: `options.BearerAuth`
- **Signature**: `FindPeopleByEmail(FindPeopleByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PeopleFindByEmailResponse`
- **Error**: `ApiException<FindPeopleByEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindPeopleByEmailRequest` | `src/Surfe/Requests/People/FindPeopleByEmailRequest.cs` |
| `PeopleFindByEmailRequest` | `src/Surfe/Models/PeopleFindByEmailRequest.cs` |
| `PeopleFindByEmailResponse` | `src/Surfe/Models/PeopleFindByEmailResponse.cs` |
| `FindPeopleByEmailError` | `src/Surfe/Errors/FindPeopleByEmailError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

### GetPeopleEnrichment

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPeopleEnrichment(GetPeopleEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PeopleEnrichmentResult`
- **Error**: `ApiException<GetPeopleEnrichmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPeopleEnrichmentRequest` | `src/Surfe/Requests/People/GetPeopleEnrichmentRequest.cs` |
| `PeopleEnrichmentResult` | `src/Surfe/Models/PeopleEnrichmentResult.cs` |
| `GetPeopleEnrichmentError` | `src/Surfe/Errors/GetPeopleEnrichmentError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

### SearchPeople

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPeople(SearchPeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PeopleSearchResponse`
- **Error**: `ApiException<SearchPeopleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPeopleRequest` | `src/Surfe/Requests/People/SearchPeopleRequest.cs` |
| `PeopleSearchRequest` | `src/Surfe/Models/PeopleSearchRequest.cs` |
| `PeopleSearchResponse` | `src/Surfe/Models/PeopleSearchResponse.cs` |
| `SearchPeopleError` | `src/Surfe/Errors/SearchPeopleError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

### StartPeopleEnrichment

- **Auth**: `options.BearerAuth`
- **Signature**: `StartPeopleEnrichment(StartPeopleEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EnrichmentJobAccepted`
- **Error**: `ApiException<StartPeopleEnrichmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartPeopleEnrichmentRequest` | `src/Surfe/Requests/People/StartPeopleEnrichmentRequest.cs` |
| `PeopleEnrichmentRequest` | `src/Surfe/Models/PeopleEnrichmentRequest.cs` |
| `EnrichmentJobAccepted` | `src/Surfe/Models/EnrichmentJobAccepted.cs` |
| `StartPeopleEnrichmentError` | `src/Surfe/Errors/StartPeopleEnrichmentError.cs` |
| `Error` | `src/Surfe/Models/Error.cs` |

