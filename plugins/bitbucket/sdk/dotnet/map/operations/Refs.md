<!-- Generated file — do not edit; regenerated with the SDK. -->

# Refs — operations

Accessor: `client.Refs` · Source: `src/Bitbucket/Api/Refs.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByName

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest` | `src/Bitbucket/Requests/Refs/DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByName

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByName(DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest` | `src/Bitbucket/Requests/Refs/DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugRefs

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugRefs(GetRepositoriesByWorkspaceByRepoSlugRefsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedRefs`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugRefsRequest` | `src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsRequest.cs` |
| `PaginatedRefs` | `src/Bitbucket/Models/PaginatedRefs.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugRefsBranches

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugRefsBranches(GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedBranches`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest` | `src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest.cs` |
| `PaginatedBranches` | `src/Bitbucket/Models/PaginatedBranches.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByName

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `RepoSlug`, `Workspace`
- **Returns**: `Branch`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest` | `src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest.cs` |
| `Branch` | `src/Bitbucket/Models/Branch.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugRefsTags

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugRefsTags(GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedTags`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest` | `src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest.cs` |
| `PaginatedTags` | `src/Bitbucket/Models/PaginatedTags.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsTagsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsTagsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugRefsTagsByName

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugRefsTagsByName(GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`, `RepoSlug`, `Workspace`
- **Returns**: `Tag`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest` | `src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest.cs` |
| `Tag` | `src/Bitbucket/Models/Tag.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugRefsBranches

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugRefsBranches(PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `Branch`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest` | `src/Bitbucket/Requests/Refs/PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest.cs` |
| `Branch` | `src/Bitbucket/Models/Branch.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugRefsTags

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugRefsTags(PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`, `Body`
- **Returns**: `Tag`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugRefsTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest` | `src/Bitbucket/Requests/Refs/PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest.cs` |
| `Tag` | `src/Bitbucket/Models/Tag.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugRefsTagsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugRefsTagsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

