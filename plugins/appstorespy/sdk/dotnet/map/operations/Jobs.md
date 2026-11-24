<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/AppstoreSpy/Api/Jobs.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSearchJobsSearchPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `CreateSearchJobsSearchPost(CreateSearchJobsSearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResult`
- **Error**: `ApiException<CreateSearchJobsSearchPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetJobsSearch401Error1([NotNullWhen(true)] out JobsSearch401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSearchJobsSearchPostRequest` | `src/AppstoreSpy/Requests/Jobs/CreateSearchJobsSearchPostRequest.cs` |
| `SearchCreate` | `src/AppstoreSpy/Models/SearchCreate.cs` |
| `SearchResult` | `src/AppstoreSpy/Models/SearchResult.cs` |
| `CreateSearchJobsSearchPostError` | `src/AppstoreSpy/Errors/CreateSearchJobsSearchPostError.cs` |
| `JobsSearch401Error1` | `src/AppstoreSpy/Models/JobsSearch401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetSearchJobsSearchGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSearchJobsSearchGet(GetSearchJobsSearchGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `store` ← `Store`, `term` ← `Term`, `id_user` ← `IdUser`, `country` ← `Country`, `search_id` ← `SearchId`, `updated_gte` ← `UpdatedGte`, `updated_lte` ← `UpdatedLte`
- **Returns**: `IReadOnlyList<SearchResult>`
- **Error**: `ApiException<GetSearchJobsSearchGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetJobsSearch401Error1([NotNullWhen(true)] out JobsSearch401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSearchJobsSearchGetRequest` | `src/AppstoreSpy/Requests/Jobs/GetSearchJobsSearchGetRequest.cs` |
| `Store` | `src/AppstoreSpy/Models/Enums/Store.cs` |
| `SearchResult` | `src/AppstoreSpy/Models/SearchResult.cs` |
| `GetSearchJobsSearchGetError` | `src/AppstoreSpy/Errors/GetSearchJobsSearchGetError.cs` |
| `JobsSearch401Error1` | `src/AppstoreSpy/Models/JobsSearch401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

