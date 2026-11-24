<!-- Generated file — do not edit; regenerated with the SDK. -->

# Downloads — operations

Accessor: `client.Downloads` · Source: `src/Bitbucket/Api/Downloads.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilename

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Filename`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest` | `src/Bitbucket/Requests/Downloads/DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDownloads

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDownloads(GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDownloadsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest` | `src/Bitbucket/Requests/Downloads/GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDownloadsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDownloadsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilename

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Filename`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest` | `src/Bitbucket/Requests/Downloads/GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugDownloads

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugDownloads(PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugDownloadsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest` | `src/Bitbucket/Requests/Downloads/PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugDownloadsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugDownloadsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

