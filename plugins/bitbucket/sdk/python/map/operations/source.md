<!-- Generated file — do not edit; regenerated with the SDK. -->

# Source — operations

Accessor: `client.source` · Source: `bitbucket/apis/source.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.source.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(commit: str, path: str, repo_slug: str, workspace: str, *, renames: str | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `path`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `path` — path · `repo_slug` — path · `workspace` — path · `renames` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedFiles`
- **Returns (raw)**: `ApiResult[PaginatedFiles, GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedFiles` | `bitbucket/models/paginated_files.py` |
| `GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.source.get_repositories_by_workspace_by_repo_slug_src2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/src`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_src2(repo_slug: str, workspace: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `format_` — query `format`
- **Returns (parsed)**: `PaginatedTreeEntry`
- **Returns (raw)**: `ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `bitbucket/models/enums/format.py` |
| `PaginatedTreeEntry` | `bitbucket/models/paginated_tree_entry.py` |
| `GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.source.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(commit: str, path: str, repo_slug: str, workspace: str, *, format_: Format1OrStr | None = None, q: str | None = None, sort: str | None = None, max_depth: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `path`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `path` — path · `repo_slug` — path · `workspace` — path · `format_` — query `format` · `q` — query · `sort` — query · `max_depth` — query
- **Returns (parsed)**: `PaginatedTreeEntry`
- **Returns (raw)**: `ApiResult[PaginatedTreeEntry, GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 555] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Format1OrStr` | `bitbucket/models/enums/format1.py` |
| `PaginatedTreeEntry` | `bitbucket/models/paginated_tree_entry.py` |
| `GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.source.post_repositories_by_workspace_by_repo_slug_src2

- **Route**: `POST /repositories/{workspace}/{repo_slug}/src`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_src2(repo_slug: str, workspace: str, *, message: str | None = None, author: str | None = None, parents: str | None = None, files: str | None = None, branch: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `message` — query · `author` — query · `parents` — query · `files` — query · `branch` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_src2_error.py` |
| `Error` | `bitbucket/models/error.py` |

