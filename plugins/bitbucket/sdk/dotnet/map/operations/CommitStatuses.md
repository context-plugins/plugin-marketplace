<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommitStatuses — operations

Accessor: `client.CommitStatuses` · Source: `src/Bitbucket/Api/CommitStatuses.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatuses

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatuses(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `refname` ← `Refname`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedCommitStatuses`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest` | `src/Bitbucket/Requests/CommitStatuses/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest.cs` |
| `PaginatedCommitStatuses` | `src/Bitbucket/Models/PaginatedCommitStatuses.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `Key`, `RepoSlug`, `Workspace`
- **Returns**: `Commitstatus`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest` | `src/Bitbucket/Requests/CommitStatuses/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest.cs` |
| `Commitstatus` | `src/Bitbucket/Models/AllOf/Commitstatus.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedCommitStatuses`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest` | `src/Bitbucket/Requests/CommitStatuses/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest.cs` |
| `PaginatedCommitStatuses` | `src/Bitbucket/Models/PaginatedCommitStatuses.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuild

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuild(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`
- **Returns**: `Commitstatus`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest` | `src/Bitbucket/Requests/CommitStatuses/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest.cs` |
| `Commitstatus` | `src/Bitbucket/Models/AllOf/Commitstatus.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `Key`, `RepoSlug`, `Workspace`
- **Returns**: `Commitstatus`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest` | `src/Bitbucket/Requests/CommitStatuses/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest.cs` |
| `Commitstatus` | `src/Bitbucket/Models/AllOf/Commitstatus.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

