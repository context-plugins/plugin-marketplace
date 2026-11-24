<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.Repositories` · Source: `src/Shortcut/Api/Repositories.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRepository

- **Auth**: `options.ApiToken`
- **Signature**: `GetRepository(GetRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoPublicId`
- **Returns**: `Repository`
- **Error**: `ApiException<GetRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryRequest` | `src/Shortcut/Requests/Repositories/GetRepositoryRequest.cs` |
| `Repository` | `src/Shortcut/Models/Repository.cs` |
| `GetRepositoryError` | `src/Shortcut/Errors/GetRepositoryError.cs` |

### ListRepositories

- **Auth**: `options.ApiToken`
- **Signature**: `ListRepositories(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Repository>`
- **Error**: `ApiException<ListRepositoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Repository` | `src/Shortcut/Models/Repository.cs` |
| `ListRepositoriesError` | `src/Shortcut/Errors/ListRepositoriesError.cs` |

