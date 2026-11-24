<!-- Generated file — do not edit; regenerated with the SDK. -->

# PullRequests — operations

Accessor: `client.pull_requests` · Source: `bitbucket/apis/pull_requests.py` · 37 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.pull_requests.delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(repo_slug: str, target_username: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `target_username`, `workspace`
- **Params**: `repo_slug` — path · `target_username` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(pull_request_id: int, repo_slug: str, task_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `task_id`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `task_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_pullrequests_for_commit

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pullrequests_for_commit(workspace: str, repo_slug: str, commit: str, *, page: int | None = 1, pagelen: int | None = 30, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `page` — query · `pagelen` — query
- **Returns (parsed)**: `PaginatedPullRequests`
- **Returns (raw)**: `ApiResult[PaginatedPullRequests, GetPullrequestsForCommitErrorBody]`
- **Error**: `GetPullrequestsForCommitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedPullRequests` | `bitbucket/models/paginated_pull_requests.py` |
| `GetPullrequestsForCommitErrorBody` | `bitbucket/errors/get_pullrequests_for_commit_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_default_reviewers

- **Route**: `GET /repositories/{workspace}/{repo_slug}/default-reviewers`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_default_reviewers(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedAccounts`
- **Returns (raw)**: `ApiResult[PaginatedAccounts, GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedAccounts` | `bitbucket/models/paginated_accounts.py` |
| `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_default_reviewers_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username

- **Route**: `GET /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(repo_slug: str, target_username: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `target_username`, `workspace`
- **Params**: `repo_slug` — path · `target_username` — path · `workspace` — path
- **Returns (parsed)**: `Account`
- **Returns (raw)**: `ApiResult[Account, GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Account` | `bitbucket/models/account.py` |
| `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_effective_default_reviewers

- **Route**: `GET /repositories/{workspace}/{repo_slug}/effective-default-reviewers`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedDefaultReviewerAndType`
- **Returns (raw)**: `ApiResult[PaginatedDefaultReviewerAndType, GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedDefaultReviewerAndType` | `bitbucket/models/paginated_default_reviewer_and_type.py` |
| `GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_effective_default_reviewers_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests(repo_slug: str, workspace: str, *, state: State5OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `state` — query
- **Returns (parsed)**: `PaginatedPullRequests`
- **Returns (raw)**: `ApiResult[PaginatedPullRequests, GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `State5OrStr` | `bitbucket/models/enums/state5.py` |
| `PaginatedPullRequests` | `bitbucket/models/paginated_pull_requests.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_activity

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/activity`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_activity(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_activity_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Pullrequest`
- **Returns (raw)**: `ApiResult[Pullrequest, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `Pullrequest` | `bitbucket/models/pullrequest.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedPullRequestComments`
- **Returns (raw)**: `ApiResult[PaginatedPullRequestComments, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedPullRequestComments` | `bitbucket/models/paginated_pull_request_comments.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PullrequestComment`
- **Returns (raw)**: `ApiResult[PullrequestComment, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PullrequestComment` | `bitbucket/models/pullrequest_comment.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(pull_request_id: int, repo_slug: str, task_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `task_id`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `task_id` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id_error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(pull_request_id: int, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedCommitStatuses`
- **Returns (raw)**: `ApiResult[PaginatedCommitStatuses, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedCommitStatuses` | `bitbucket/models/paginated_commit_statuses.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(pull_request_id: int, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, pagelen: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query · `pagelen` — query
- **Returns (parsed)**: `PaginatedTasks`
- **Returns (raw)**: `ApiResult[PaginatedTasks, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedTasks` | `bitbucket/models/paginated_tasks.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(pull_request_id: int, repo_slug: str, task_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `task_id`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `task_id` — path · `workspace` — path
- **Returns (parsed)**: `PullrequestCommentTask`
- **Returns (raw)**: `ApiResult[PullrequestCommentTask, GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PullrequestCommentTask` | `bitbucket/models/pullrequest_comment_task.py` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.get_workspaces_by_workspace_pullrequests_by_selected_user

- **Route**: `GET /workspaces/{workspace}/pullrequests/{selected_user}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_pullrequests_by_selected_user(selected_user: str, workspace: str, *, state: State5OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `workspace`
- **Params**: `selected_user` — path · `workspace` — path · `state` — query
- **Returns (parsed)**: `PaginatedPullRequests`
- **Returns (raw)**: `ApiResult[PaginatedPullRequests, GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody]`
- **Error**: `GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `State5OrStr` | `bitbucket/models/enums/state5.py` |
| `PaginatedPullRequests` | `bitbucket/models/paginated_pull_requests.py` |
| `GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_pullrequests_by_selected_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests(repo_slug: str, workspace: str, *, body: Pullrequest | PullrequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Pullrequest`
- **Returns (raw)**: `ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pullrequest` | `bitbucket/models/pullrequest.py` |
| `PullrequestDict` | `bitbucket/models/pullrequest.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Participant`
- **Returns (raw)**: `ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Participant` | `bitbucket/models/participant.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(pull_request_id: int, repo_slug: str, workspace: str, body: PullrequestComment | PullrequestCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`, `body`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `PullrequestComment`
- **Returns (raw)**: `ApiResult[PullrequestComment, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PullrequestComment` | `bitbucket/models/pullrequest_comment.py` |
| `PullrequestCommentDict` | `bitbucket/models/pullrequest_comment.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `CommentResolution`
- **Returns (raw)**: `ApiResult[CommentResolution, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CommentResolution` | `bitbucket/models/comment_resolution.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Pullrequest`
- **Returns (raw)**: `ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [555] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pullrequest` | `bitbucket/models/pullrequest.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(pull_request_id: int, repo_slug: str, workspace: str, *, async_: bool | None = None, body: PullRequestMergeParameters | PullRequestMergeParametersDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `async_` — query `async` · `body` — JSON body
- **Returns (parsed)**: `Pullrequest`
- **Returns (raw)**: `ApiResult[Pullrequest, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [555] · `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `PullRequestMergeParameters` | `bitbucket/models/pull_request_merge_parameters.py` |
| `PullRequestMergeParametersDict` | `bitbucket/models/pull_request_merge_parameters.py` |
| `Pullrequest` | `bitbucket/models/pullrequest.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Participant`
- **Returns (raw)**: `ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Participant` | `bitbucket/models/participant.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(pull_request_id: int, repo_slug: str, workspace: str, body: PullRequestTaskCreate | PullRequestTaskCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`, `body`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `PullrequestCommentTask`
- **Returns (raw)**: `ApiResult[PullrequestCommentTask, PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PullRequestTaskCreate` | `bitbucket/models/pull_request_task_create.py` |
| `PullRequestTaskCreateDict` | `bitbucket/models/pull_request_task_create.py` |
| `PullrequestCommentTask` | `bitbucket/models/pullrequest_comment_task.py` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(repo_slug: str, target_username: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `target_username`, `workspace`
- **Params**: `repo_slug` — path · `target_username` — path · `workspace` — path
- **Returns (parsed)**: `Account`
- **Returns (raw)**: `ApiResult[Account, PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Account` | `bitbucket/models/account.py` |
| `PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(pull_request_id: int, repo_slug: str, workspace: str, *, body: Pullrequest | PullrequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `workspace`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Pullrequest`
- **Returns (raw)**: `ApiResult[Pullrequest, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pullrequest` | `bitbucket/models/pullrequest.py` |
| `PullrequestDict` | `bitbucket/models/pullrequest.py` |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, body: PullrequestComment | PullrequestCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `pull_request_id`, `repo_slug`, `workspace`, `body`
- **Params**: `comment_id` — path · `pull_request_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `PullrequestComment`
- **Returns (raw)**: `ApiResult[PullrequestComment, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PullrequestComment` | `bitbucket/models/pullrequest_comment.py` |
| `PullrequestCommentDict` | `bitbucket/models/pullrequest_comment.py` |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(pull_request_id: int, repo_slug: str, task_id: int, workspace: str, body: PullRequestTaskUpdate | PullRequestTaskUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pull_request_id`, `repo_slug`, `task_id`, `workspace`, `body`
- **Params**: `pull_request_id` — path · `repo_slug` — path · `task_id` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `PullrequestCommentTask`
- **Returns (raw)**: `ApiResult[PullrequestCommentTask, PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PullRequestTaskUpdate` | `bitbucket/models/pull_request_task_update.py` |
| `PullRequestTaskUpdateDict` | `bitbucket/models/pull_request_task_update.py` |
| `PullrequestCommentTask` | `bitbucket/models/pullrequest_comment_task.py` |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

