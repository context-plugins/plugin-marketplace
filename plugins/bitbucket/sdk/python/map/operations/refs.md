<!-- Generated file — do not edit; regenerated with the SDK. -->

# Refs — operations

Accessor: `client.refs` · Source: `bitbucket/apis/refs.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.refs.delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/refs/branches/{name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `repo_slug`, `workspace`
- **Params**: `name` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/refs/tags/{name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `repo_slug`, `workspace`
- **Params**: `name` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.get_repositories_by_workspace_by_repo_slug_refs

- **Route**: `GET /repositories/{workspace}/{repo_slug}/refs`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_refs(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedRefs`
- **Returns (raw)**: `ApiResult[PaginatedRefs, GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedRefs` | `bitbucket/models/paginated_refs.py` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.get_repositories_by_workspace_by_repo_slug_refs_branches

- **Route**: `GET /repositories/{workspace}/{repo_slug}/refs/branches`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_refs_branches(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedBranches`
- **Returns (raw)**: `ApiResult[PaginatedBranches, GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedBranches` | `bitbucket/models/paginated_branches.py` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_branches_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.get_repositories_by_workspace_by_repo_slug_refs_branches_by_name

- **Route**: `GET /repositories/{workspace}/{repo_slug}/refs/branches/{name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `repo_slug`, `workspace`
- **Params**: `name` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Branch`
- **Returns (raw)**: `ApiResult[Branch, GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Branch` | `bitbucket/models/branch.py` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.get_repositories_by_workspace_by_repo_slug_refs_tags

- **Route**: `GET /repositories/{workspace}/{repo_slug}/refs/tags`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_refs_tags(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedTags`
- **Returns (raw)**: `ApiResult[PaginatedTags, GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedTags` | `bitbucket/models/paginated_tags.py` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_tags_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.get_repositories_by_workspace_by_repo_slug_refs_tags_by_name

- **Route**: `GET /repositories/{workspace}/{repo_slug}/refs/tags/{name}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `repo_slug`, `workspace`
- **Params**: `name` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `TagModel`
- **Returns (raw)**: `ApiResult[TagModel, GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagModel` | `bitbucket/models/tag_model.py` |
| `GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.post_repositories_by_workspace_by_repo_slug_refs_branches

- **Route**: `POST /repositories/{workspace}/{repo_slug}/refs/branches`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_refs_branches(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Branch`
- **Returns (raw)**: `ApiResult[Branch, PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Branch` | `bitbucket/models/branch.py` |
| `PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_refs_branches_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.refs.post_repositories_by_workspace_by_repo_slug_refs_tags

- **Route**: `POST /repositories/{workspace}/{repo_slug}/refs/tags`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_refs_tags(repo_slug: str, workspace: str, body: TagModel | TagModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`, `body`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `TagModel`
- **Returns (raw)**: `ApiResult[TagModel, PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagModel` | `bitbucket/models/tag_model.py` |
| `TagModelDict` | `bitbucket/models/tag_model.py` |
| `PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_refs_tags_error.py` |
| `Error` | `bitbucket/models/error.py` |

