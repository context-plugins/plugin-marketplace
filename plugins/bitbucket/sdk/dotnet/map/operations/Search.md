<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Bitbucket/Api/Search.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchAccount

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `SearchAccount(SearchAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `SearchQuery`
- **Query params (wire ← C#)**: `search_query` ← `SearchQuery`, `page` ← `Page`, `pagelen` ← `Pagelen`
- **Returns**: `SearchResultPage`
- **Error**: `ApiException<SearchAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchAccountRequest` | `src/Bitbucket/Requests/Search/SearchAccountRequest.cs` |
| `SearchResultPage` | `src/Bitbucket/Models/SearchResultPage.cs` |
| `SearchAccountError` | `src/Bitbucket/Errors/SearchAccountError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### SearchTeam

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `SearchTeam(SearchTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`, `SearchQuery`
- **Query params (wire ← C#)**: `search_query` ← `SearchQuery`, `page` ← `Page`, `pagelen` ← `Pagelen`
- **Returns**: `SearchResultPage`
- **Error**: `ApiException<SearchTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchTeamRequest` | `src/Bitbucket/Requests/Search/SearchTeamRequest.cs` |
| `SearchResultPage` | `src/Bitbucket/Models/SearchResultPage.cs` |
| `SearchTeamError` | `src/Bitbucket/Errors/SearchTeamError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### SearchWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `SearchWorkspace(SearchWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `SearchQuery`
- **Query params (wire ← C#)**: `search_query` ← `SearchQuery`, `page` ← `Page`, `pagelen` ← `Pagelen`
- **Returns**: `SearchResultPage`
- **Error**: `ApiException<SearchWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchWorkspaceRequest` | `src/Bitbucket/Requests/Search/SearchWorkspaceRequest.cs` |
| `SearchResultPage` | `src/Bitbucket/Models/SearchResultPage.cs` |
| `SearchWorkspaceError` | `src/Bitbucket/Errors/SearchWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

