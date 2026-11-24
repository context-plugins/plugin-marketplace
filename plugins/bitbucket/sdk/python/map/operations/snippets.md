<!-- Generated file — do not edit; regenerated with the SDK. -->

# Snippets — operations

Accessor: `client.snippets` · Source: `bitbucket/apis/snippets.py` · 25 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.snippets.delete_snippets_by_workspace_by_encoded_id

- **Route**: `DELETE /snippets/{workspace}/{encoded_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_snippets_by_workspace_by_encoded_id(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdErrorBody]`
- **Error**: `DeleteSnippetsByWorkspaceByEncodedIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdErrorBody` | `bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.delete_snippets_by_workspace_by_encoded_id_by_node_id

- **Route**: `DELETE /snippets/{workspace}/{encoded_id}/{node_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_snippets_by_workspace_by_encoded_id_by_node_id(encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `node_id`, `workspace`
- **Params**: `encoded_id` — path · `node_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]`
- **Error**: `DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 405] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody` | `bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_by_node_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id

- **Route**: `DELETE /snippets/{workspace}/{encoded_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `encoded_id`, `workspace`
- **Params**: `comment_id` — path · `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]`
- **Error**: `DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody` | `bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.delete_snippets_by_workspace_by_encoded_id_watch

- **Route**: `DELETE /snippets/{workspace}/{encoded_id}/watch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_snippets_by_workspace_by_encoded_id_watch(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody]`
- **Error**: `DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody` | `bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_watch_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets

- **Route**: `GET /snippets`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets(*, role: RoleBitbucketSnippetsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `role` — query
- **Returns (parsed)**: `PaginatedSnippets`
- **Returns (raw)**: `ApiResult[PaginatedSnippets, GetSnippetsErrorBody]`
- **Error**: `GetSnippetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleBitbucketSnippetsApiOrStr` | `bitbucket/models/enums/role_bitbucket_snippets_api.py` |
| `PaginatedSnippets` | `bitbucket/models/paginated_snippets.py` |
| `GetSnippetsErrorBody` | `bitbucket/errors/get_snippets_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace

- **Route**: `GET /snippets/{workspace}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace(workspace: str, *, role: RoleBitbucketSnippetsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path · `role` — query
- **Returns (parsed)**: `PaginatedSnippets`
- **Returns (raw)**: `ApiResult[PaginatedSnippets, GetSnippetsByWorkspaceErrorBody]`
- **Error**: `GetSnippetsByWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleBitbucketSnippetsApiOrStr` | `bitbucket/models/enums/role_bitbucket_snippets_api.py` |
| `PaginatedSnippets` | `bitbucket/models/paginated_snippets.py` |
| `GetSnippetsByWorkspaceErrorBody` | `bitbucket/errors/get_snippets_by_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id

- **Route**: `GET /snippets/{workspace}/{encoded_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `Snippet`
- **Returns (raw)**: `ApiResult[Snippet, GetSnippetsByWorkspaceByEncodedIdErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 410] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Snippet` | `bitbucket/models/snippet.py` |
| `GetSnippetsByWorkspaceByEncodedIdErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_by_node_id

- **Route**: `GET /snippets/{workspace}/{encoded_id}/{node_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_by_node_id(encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `node_id`, `workspace`
- **Params**: `encoded_id` — path · `node_id` — path · `workspace` — path
- **Returns (parsed)**: `Snippet`
- **Returns (raw)**: `ApiResult[Snippet, GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Snippet` | `bitbucket/models/snippet.py` |
| `GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_node_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path

- **Route**: `GET /snippets/{workspace}/{encoded_id}/{node_id}/files/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(encoded_id: str, node_id: str, path: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `node_id`, `path`, `workspace`
- **Params**: `encoded_id` — path · `node_id` — path · `path` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_by_revision_diff

- **Route**: `GET /snippets/{workspace}/{encoded_id}/{revision}/diff`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_by_revision_diff(encoded_id: str, revision: str, workspace: str, *, path: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `revision`, `workspace`
- **Params**: `encoded_id` — path · `revision` — path · `workspace` — path · `path` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_revision_diff_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_by_revision_patch

- **Route**: `GET /snippets/{workspace}/{encoded_id}/{revision}/patch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_by_revision_patch(encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `revision`, `workspace`
- **Params**: `encoded_id` — path · `revision` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_revision_patch_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_comments

- **Route**: `GET /snippets/{workspace}/{encoded_id}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_comments(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedSnippetComments`
- **Returns (raw)**: `ApiResult[PaginatedSnippetComments, GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedSnippetComments` | `bitbucket/models/paginated_snippet_comments.py` |
| `GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_comments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_comments_by_comment_id

- **Route**: `GET /snippets/{workspace}/{encoded_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `encoded_id`, `workspace`
- **Params**: `comment_id` — path · `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `SnippetComment`
- **Returns (raw)**: `ApiResult[SnippetComment, GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnippetComment` | `bitbucket/models/snippet_comment.py` |
| `GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_commits

- **Route**: `GET /snippets/{workspace}/{encoded_id}/commits`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_commits(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedSnippetCommits`
- **Returns (raw)**: `ApiResult[PaginatedSnippetCommits, GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedSnippetCommits` | `bitbucket/models/paginated_snippet_commits.py` |
| `GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_commits_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_commits_by_revision

- **Route**: `GET /snippets/{workspace}/{encoded_id}/commits/{revision}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_commits_by_revision(encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `revision`, `workspace`
- **Params**: `encoded_id` — path · `revision` — path · `workspace` — path
- **Returns (parsed)**: `SnippetCommit`
- **Returns (raw)**: `ApiResult[SnippetCommit, GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnippetCommit` | `bitbucket/models/snippet_commit.py` |
| `GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_commits_by_revision_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_files_by_path

- **Route**: `GET /snippets/{workspace}/{encoded_id}/files/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_files_by_path(encoded_id: str, path: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `path`, `workspace`
- **Params**: `encoded_id` — path · `path` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_files_by_path_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_watch

- **Route**: `GET /snippets/{workspace}/{encoded_id}/watch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_watch(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetSnippetsByWorkspaceByEncodedIdWatchErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdWatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdWatchErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_watch_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.get_snippets_by_workspace_by_encoded_id_watchers

- **Route**: `GET /snippets/{workspace}/{encoded_id}/watchers`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_snippets_by_workspace_by_encoded_id_watchers(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedAccounts`
- **Returns (raw)**: `ApiResult[PaginatedAccounts, GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody]`
- **Error**: `GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedAccounts` | `bitbucket/models/paginated_accounts.py` |
| `GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody` | `bitbucket/errors/get_snippets_by_workspace_by_encoded_id_watchers_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.post_snippets

- **Route**: `POST /snippets`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_snippets(body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Snippet`
- **Returns (raw)**: `ApiResult[Snippet, PostSnippetsErrorBody]`
- **Error**: `PostSnippetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Snippet` | `bitbucket/models/snippet.py` |
| `SnippetDict` | `bitbucket/models/snippet.py` |
| `PostSnippetsErrorBody` | `bitbucket/errors/post_snippets_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.post_snippets_by_workspace

- **Route**: `POST /snippets/{workspace}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_snippets_by_workspace(workspace: str, body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `body`
- **Params**: `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Snippet`
- **Returns (raw)**: `ApiResult[Snippet, PostSnippetsByWorkspaceErrorBody]`
- **Error**: `PostSnippetsByWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Snippet` | `bitbucket/models/snippet.py` |
| `SnippetDict` | `bitbucket/models/snippet.py` |
| `PostSnippetsByWorkspaceErrorBody` | `bitbucket/errors/post_snippets_by_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.post_snippets_by_workspace_by_encoded_id_comments

- **Route**: `POST /snippets/{workspace}/{encoded_id}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_snippets_by_workspace_by_encoded_id_comments(encoded_id: str, workspace: str, body: SnippetComment | SnippetCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`, `body`
- **Params**: `encoded_id` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `SnippetComment`
- **Returns (raw)**: `ApiResult[SnippetComment, PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody]`
- **Error**: `PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnippetComment` | `bitbucket/models/snippet_comment.py` |
| `SnippetCommentDict` | `bitbucket/models/snippet_comment.py` |
| `PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody` | `bitbucket/errors/post_snippets_by_workspace_by_encoded_id_comments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.put_snippets_by_workspace_by_encoded_id

- **Route**: `PUT /snippets/{workspace}/{encoded_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_snippets_by_workspace_by_encoded_id(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `Snippet`
- **Returns (raw)**: `ApiResult[Snippet, PutSnippetsByWorkspaceByEncodedIdErrorBody]`
- **Error**: `PutSnippetsByWorkspaceByEncodedIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Snippet` | `bitbucket/models/snippet.py` |
| `PutSnippetsByWorkspaceByEncodedIdErrorBody` | `bitbucket/errors/put_snippets_by_workspace_by_encoded_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.put_snippets_by_workspace_by_encoded_id_by_node_id

- **Route**: `PUT /snippets/{workspace}/{encoded_id}/{node_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_snippets_by_workspace_by_encoded_id_by_node_id(encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `node_id`, `workspace`
- **Params**: `encoded_id` — path · `node_id` — path · `workspace` — path
- **Returns (parsed)**: `Snippet`
- **Returns (raw)**: `ApiResult[Snippet, PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]`
- **Error**: `PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 405] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Snippet` | `bitbucket/models/snippet.py` |
| `PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody` | `bitbucket/errors/put_snippets_by_workspace_by_encoded_id_by_node_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.put_snippets_by_workspace_by_encoded_id_comments_by_comment_id

- **Route**: `PUT /snippets/{workspace}/{encoded_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(comment_id: int, encoded_id: str, workspace: str, body: SnippetComment | SnippetCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `encoded_id`, `workspace`, `body`
- **Params**: `comment_id` — path · `encoded_id` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `SnippetComment`
- **Returns (raw)**: `ApiResult[SnippetComment, PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody]`
- **Error**: `PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnippetComment` | `bitbucket/models/snippet_comment.py` |
| `SnippetCommentDict` | `bitbucket/models/snippet_comment.py` |
| `PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody` | `bitbucket/errors/put_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.snippets.put_snippets_by_workspace_by_encoded_id_watch

- **Route**: `PUT /snippets/{workspace}/{encoded_id}/watch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_snippets_by_workspace_by_encoded_id_watch(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `encoded_id`, `workspace`
- **Params**: `encoded_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutSnippetsByWorkspaceByEncodedIdWatchErrorBody]`
- **Error**: `PutSnippetsByWorkspaceByEncodedIdWatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutSnippetsByWorkspaceByEncodedIdWatchErrorBody` | `bitbucket/errors/put_snippets_by_workspace_by_encoded_id_watch_error.py` |
| `Error` | `bitbucket/models/error.py` |

