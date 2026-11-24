<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommitStatuses — operations

Accessor: `client.commit_statuses` · Source: `bitbucket/apis/commit_statuses.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.commit_statuses.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(commit: str, repo_slug: str, workspace: str, *, refname: str | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path · `refname` — query · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedCommitStatuses`
- **Returns (raw)**: `ApiResult[PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedCommitStatuses` | `bitbucket/models/paginated_commit_statuses.py` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commit_statuses.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(commit: str, key: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `key`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `key` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Commitstatus`
- **Returns (raw)**: `ApiResult[Commitstatus, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `Commitstatus` | `bitbucket/models/commitstatus.py` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commit_statuses.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(pull_request_id: int, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedCommitStatuses`
- **Returns (raw)**: `ApiResult[PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedCommitStatuses` | `bitbucket/models/paginated_commit_statuses.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commit_statuses.post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(commit: str, repo_slug: str, workspace: str, *, body: Commitstatus | CommitstatusDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Commitstatus`
- **Returns (raw)**: `ApiResult[Commitstatus, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `Commitstatus` | `bitbucket/models/commitstatus.py` |
| `CommitstatusDict` | `bitbucket/models/commitstatus.py` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commit_statuses.put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(commit: str, key: str, repo_slug: str, workspace: str, *, body: Commitstatus | CommitstatusDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `key`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `key` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Commitstatus`
- **Returns (raw)**: `ApiResult[Commitstatus, PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `Commitstatus` | `bitbucket/models/commitstatus.py` |
| `CommitstatusDict` | `bitbucket/models/commitstatus.py` |
| `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error.py` |
| `Error` | `bitbucket/models/error.py` |

