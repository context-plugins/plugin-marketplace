<!-- Generated file — do not edit; regenerated with the SDK. -->

# Downloads — operations

Accessor: `client.downloads` · Source: `bitbucket/apis/downloads.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.downloads.delete_repositories_by_workspace_by_repo_slug_downloads_by_filename

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/downloads/{filename}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filename`, `repo_slug`, `workspace`
- **Params**: `filename` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_downloads_by_filename_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.downloads.get_repositories_by_workspace_by_repo_slug_downloads

- **Route**: `GET /repositories/{workspace}/{repo_slug}/downloads`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_downloads(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_downloads_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.downloads.get_repositories_by_workspace_by_repo_slug_downloads_by_filename

- **Route**: `GET /repositories/{workspace}/{repo_slug}/downloads/{filename}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_downloads_by_filename(filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filename`, `repo_slug`, `workspace`
- **Params**: `filename` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_downloads_by_filename_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.downloads.post_repositories_by_workspace_by_repo_slug_downloads

- **Route**: `POST /repositories/{workspace}/{repo_slug}/downloads`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_downloads(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 406] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_downloads_error.py` |
| `Error` | `bitbucket/models/error.py` |

