<!-- Generated file — do not edit; regenerated with the SDK. -->

# Source — operations

Accessor: `client.Source` · Source: `src/Bitbucket/Api/Source.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2(GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `Path`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `renames` ← `Renames`, `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedFiles`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request` | `src/Bitbucket/Requests/Source/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request.cs` |
| `PaginatedFiles` | `src/Bitbucket/Models/PaginatedFiles.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugSrc2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugSrc2(GetRepositoriesByWorkspaceByRepoSlugSrc2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `PaginatedTreeEntry`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugSrc2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugSrc2Request` | `src/Bitbucket/Requests/Source/GetRepositoriesByWorkspaceByRepoSlugSrc2Request.cs` |
| `Format` | `src/Bitbucket/Models/Enums/Format.cs` |
| `PaginatedTreeEntry` | `src/Bitbucket/Models/PaginatedTreeEntry.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugSrc2Error` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrc2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2(GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `Path`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `format` ← `Format`, `q` ← `Q`, `sort` ← `Sort`, `max_depth` ← `MaxDepth`
- **Returns**: `PaginatedTreeEntry`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request` | `src/Bitbucket/Requests/Source/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request.cs` |
| `Format1` | `src/Bitbucket/Models/Enums/Format1.cs` |
| `PaginatedTreeEntry` | `src/Bitbucket/Models/PaginatedTreeEntry.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugSrc2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugSrc2(PostRepositoriesByWorkspaceByRepoSlugSrc2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `message` ← `Message`, `author` ← `Author`, `parents` ← `Parents`, `files` ← `Files`, `branch` ← `Branch`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugSrc2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugSrc2Request` | `src/Bitbucket/Requests/Source/PostRepositoriesByWorkspaceByRepoSlugSrc2Request.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugSrc2Error` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugSrc2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

