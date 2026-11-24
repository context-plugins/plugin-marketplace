<!-- Generated file — do not edit; regenerated with the SDK. -->

# BranchRestrictions — operations

Accessor: `client.branch_restrictions` · Source: `bitbucket/apis/branch_restrictions.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.branch_restrictions.delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `repo_slug`, `workspace`
- **Params**: `id_` — path `id` · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branch_restrictions.get_repositories_by_workspace_by_repo_slug_branch_restrictions

- **Route**: `GET /repositories/{workspace}/{repo_slug}/branch-restrictions`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_branch_restrictions(repo_slug: str, workspace: str, *, kind: str | None = None, pattern: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `kind` — query · `pattern` — query
- **Returns (parsed)**: `PaginatedBranchRestrictions`
- **Returns (raw)**: `ApiResult[PaginatedBranchRestrictions, GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedBranchRestrictions` | `bitbucket/models/paginated_branch_restrictions.py` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branch_restrictions_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branch_restrictions.get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `repo_slug`, `workspace`
- **Params**: `id_` — path `id` · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Branchrestriction`
- **Returns (raw)**: `ApiResult[Branchrestriction, GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Branchrestriction` | `bitbucket/models/branchrestriction.py` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branch_restrictions.post_repositories_by_workspace_by_repo_slug_branch_restrictions

- **Route**: `POST /repositories/{workspace}/{repo_slug}/branch-restrictions`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_branch_restrictions(repo_slug: str, workspace: str, body: Branchrestriction | BranchrestrictionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`, `body`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Branchrestriction`
- **Returns (raw)**: `ApiResult[Branchrestriction, PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Branchrestriction` | `bitbucket/models/branchrestriction.py` |
| `BranchrestrictionDict` | `bitbucket/models/branchrestriction.py` |
| `PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_branch_restrictions_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branch_restrictions.put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(id_: str, repo_slug: str, workspace: str, body: Branchrestriction | BranchrestrictionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `repo_slug`, `workspace`, `body`
- **Params**: `id_` — path `id` · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Branchrestriction`
- **Returns (raw)**: `ApiResult[Branchrestriction, PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Branchrestriction` | `bitbucket/models/branchrestriction.py` |
| `BranchrestrictionDict` | `bitbucket/models/branchrestriction.py` |
| `PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

