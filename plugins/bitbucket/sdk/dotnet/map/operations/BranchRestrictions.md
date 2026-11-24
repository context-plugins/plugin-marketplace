<!-- Generated file — do not edit; regenerated with the SDK. -->

# BranchRestrictions — operations

Accessor: `client.BranchRestrictions` · Source: `src/Bitbucket/Api/BranchRestrictions.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest` | `src/Bitbucket/Requests/BranchRestrictions/DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugBranchRestrictions

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictions(GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `kind` ← `Kind`, `pattern` ← `Pattern`
- **Returns**: `PaginatedBranchRestrictions`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest` | `src/Bitbucket/Requests/BranchRestrictions/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest.cs` |
| `PaginatedBranchRestrictions` | `src/Bitbucket/Models/PaginatedBranchRestrictions.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `RepoSlug`, `Workspace`
- **Returns**: `Branchrestriction`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest` | `src/Bitbucket/Requests/BranchRestrictions/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest.cs` |
| `Branchrestriction` | `src/Bitbucket/Models/AllOf/Branchrestriction.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugBranchRestrictions

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugBranchRestrictions(PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`, `Body`
- **Returns**: `Branchrestriction`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest` | `src/Bitbucket/Requests/BranchRestrictions/PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest.cs` |
| `Branchrestriction` | `src/Bitbucket/Models/AllOf/Branchrestriction.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `Branchrestriction`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest` | `src/Bitbucket/Requests/BranchRestrictions/PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest.cs` |
| `Branchrestriction` | `src/Bitbucket/Models/AllOf/Branchrestriction.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

