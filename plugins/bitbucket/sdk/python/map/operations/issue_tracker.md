<!-- Generated file — do not edit; regenerated with the SDK. -->

# IssueTracker — operations

Accessor: `client.issue_tracker` · Source: `bitbucket/apis/issue_tracker.py` · 33 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/issues/{issue_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(issue_id: str, path: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `path`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `path` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(comment_id: int, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `issue_id`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_components

- **Route**: `GET /repositories/{workspace}/{repo_slug}/components`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_components(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedComponents`
- **Returns (raw)**: `ApiResult[PaginatedComponents, GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedComponents` | `bitbucket/models/paginated_components.py` |
| `GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_components_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_components_by_component_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/components/{component_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_components_by_component_id(component_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `component_id`, `repo_slug`, `workspace`
- **Params**: `component_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Component`
- **Returns (raw)**: `ApiResult[Component, GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Component` | `bitbucket/models/component.py` |
| `GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_components_by_component_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedIssues`
- **Returns (raw)**: `ApiResult[PaginatedIssues, GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedIssues` | `bitbucket/models/paginated_issues.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Issue`
- **Returns (raw)**: `ApiResult[Issue, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 410] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Issue` | `bitbucket/models/issue.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedIssueAttachment`
- **Returns (raw)**: `ApiResult[PaginatedIssueAttachment, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedIssueAttachment` | `bitbucket/models/paginated_issue_attachment.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(issue_id: str, path: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `path`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `path` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(issue_id: str, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedLogEntries`
- **Returns (raw)**: `ApiResult[PaginatedLogEntries, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedLogEntries` | `bitbucket/models/paginated_log_entries.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(change_id: str, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `change_id`, `issue_id`, `repo_slug`, `workspace`
- **Params**: `change_id` — path · `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `IssueChange`
- **Returns (raw)**: `ApiResult[IssueChange, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueChange` | `bitbucket/models/issue_change.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(issue_id: str, repo_slug: str, workspace: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path · `q` — query
- **Returns (parsed)**: `PaginatedIssueComments`
- **Returns (raw)**: `ApiResult[PaginatedIssueComments, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedIssueComments` | `bitbucket/models/paginated_issue_comments.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(comment_id: int, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `issue_id`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `IssueComment`
- **Returns (raw)**: `ApiResult[IssueComment, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `IssueComment` | `bitbucket/models/issue_comment.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(repo_name: str, repo_slug: str, task_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_name`, `repo_slug`, `task_id`, `workspace`
- **Params**: `repo_name` — path · `repo_slug` — path · `task_id` — path · `workspace` — path
- **Returns (parsed)**: `IssueJobStatus`
- **Returns (raw)**: `ApiResult[IssueJobStatus, GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueJobStatus` | `bitbucket/models/issue_job_status.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_import

- **Route**: `GET /repositories/{workspace}/{repo_slug}/issues/import`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_issues_import(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `IssueJobStatus`
- **Returns (raw)**: `ApiResult[IssueJobStatus, GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueJobStatus` | `bitbucket/models/issue_job_status.py` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_import_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_milestones

- **Route**: `GET /repositories/{workspace}/{repo_slug}/milestones`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_milestones(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedMilestones`
- **Returns (raw)**: `ApiResult[PaginatedMilestones, GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedMilestones` | `bitbucket/models/paginated_milestones.py` |
| `GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_milestones_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/milestones/{milestone_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(milestone_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `milestone_id`, `repo_slug`, `workspace`
- **Params**: `milestone_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Milestone`
- **Returns (raw)**: `ApiResult[Milestone, GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Milestone` | `bitbucket/models/milestone.py` |
| `GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_versions

- **Route**: `GET /repositories/{workspace}/{repo_slug}/versions`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_versions(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedVersions`
- **Returns (raw)**: `ApiResult[PaginatedVersions, GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedVersions` | `bitbucket/models/paginated_versions.py` |
| `GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_versions_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.get_repositories_by_workspace_by_repo_slug_versions_by_version_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/versions/{version_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_versions_by_version_id(repo_slug: str, version_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `version_id`, `workspace`
- **Params**: `repo_slug` — path · `version_id` — path · `workspace` — path
- **Returns (parsed)**: `Version`
- **Returns (raw)**: `ApiResult[Version, GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Version` | `bitbucket/models/version.py` |
| `GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues

- **Route**: `POST /repositories/{workspace}/{repo_slug}/issues`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_issues(repo_slug: str, workspace: str, body: Issue | IssueDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`, `body`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `Issue`
- **Returns (raw)**: `ApiResult[Issue, PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Issue` | `bitbucket/models/issue.py` |
| `IssueDict` | `bitbucket/models/issue.py` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments

- **Route**: `POST /repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes

- **Route**: `POST /repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(issue_id: str, repo_slug: str, workspace: str, body: IssueChange | IssueChangeDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`, `body`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `IssueChange`
- **Returns (raw)**: `ApiResult[IssueChange, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueChange` | `bitbucket/models/issue_change.py` |
| `IssueChangeDict` | `bitbucket/models/issue_change.py` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments

- **Route**: `POST /repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(issue_id: str, repo_slug: str, workspace: str, body: IssueComment | IssueCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`, `body`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueComment` | `bitbucket/models/issue_comment.py` |
| `IssueCommentDict` | `bitbucket/models/issue_comment.py` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_export

- **Route**: `POST /repositories/{workspace}/{repo_slug}/issues/export`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_issues_export(repo_slug: str, workspace: str, *, body: ExportOptions | ExportOptionsDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExportOptions` | `bitbucket/models/export_options.py` |
| `ExportOptionsDict` | `bitbucket/models/export_options.py` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_export_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_import

- **Route**: `POST /repositories/{workspace}/{repo_slug}/issues/import`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_issues_import(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `IssueJobStatus`
- **Returns (raw)**: `ApiResult[IssueJobStatus, PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueJobStatus` | `bitbucket/models/issue_job_status.py` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_import_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/issues/{issue_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Issue`
- **Returns (raw)**: `ApiResult[Issue, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Issue` | `bitbucket/models/issue.py` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(comment_id: int, issue_id: str, repo_slug: str, workspace: str, body: IssueComment | IssueCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `issue_id`, `repo_slug`, `workspace`, `body`
- **Params**: `comment_id` — path · `issue_id` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `IssueComment`
- **Returns (raw)**: `ApiResult[IssueComment, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IssueComment` | `bitbucket/models/issue_comment.py` |
| `IssueCommentDict` | `bitbucket/models/issue_comment.py` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error.py` |

### client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `issue_id`, `repo_slug`, `workspace`
- **Params**: `issue_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error.py` |

