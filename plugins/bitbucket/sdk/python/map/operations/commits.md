<!-- Generated file — do not edit; regenerated with the SDK. -->

# Commits — operations

Accessor: `client.commits` · Source: `bitbucket/apis/commits.py` · 25 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.commits.bulk_create_or_update_annotations

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def bulk_create_or_update_annotations(workspace: str, repo_slug: str, commit: str, report_id: str, body: list[ReportAnnotation | ReportAnnotationDict], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `body` — JSON body
- **Returns (parsed)**: `list[ReportAnnotation]`
- **Returns (raw)**: `ApiResult[list[ReportAnnotation], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ReportAnnotation` | `bitbucket/models/report_annotation.py` |
| `ReportAnnotationDict` | `bitbucket/models/report_annotation.py` |

### client.commits.create_or_update_annotation

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_or_update_annotation(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, body: ReportAnnotation | ReportAnnotationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `annotation_id`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `annotation_id` — path `annotationId` · `body` — JSON body
- **Returns (parsed)**: `ReportAnnotation`
- **Returns (raw)**: `ApiResult[ReportAnnotation, CreateOrUpdateAnnotationErrorBody]`
- **Error**: `CreateOrUpdateAnnotationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportAnnotation` | `bitbucket/models/report_annotation.py` |
| `ReportAnnotationDict` | `bitbucket/models/report_annotation.py` |
| `CreateOrUpdateAnnotationErrorBody` | `bitbucket/errors/create_or_update_annotation_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.create_or_update_report

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_or_update_report(workspace: str, repo_slug: str, commit: str, report_id: str, body: Report | ReportDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `body` — JSON body
- **Returns (parsed)**: `Report`
- **Returns (raw)**: `ApiResult[Report, CreateOrUpdateReportErrorBody]`
- **Error**: `CreateOrUpdateReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Report` | `bitbucket/models/report.py` |
| `ReportDict` | `bitbucket/models/report.py` |
| `CreateOrUpdateReportErrorBody` | `bitbucket/errors/create_or_update_report_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.delete_annotation

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_annotation(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `annotation_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `annotation_id` — path `annotationId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.commits.delete_report

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_report(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.commits.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/approve`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(comment_id: int, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `commit`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `commit` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error.py` |

### client.commits.get_annotation

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_annotation(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `annotation_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `annotation_id` — path `annotationId`
- **Returns (parsed)**: `ReportAnnotation`
- **Returns (raw)**: `ApiResult[ReportAnnotation, GetAnnotationErrorBody]`
- **Error**: `GetAnnotationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportAnnotation` | `bitbucket/models/report_annotation.py` |
| `GetAnnotationErrorBody` | `bitbucket/errors/get_annotation_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_annotations_for_report

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_annotations_for_report(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId`
- **Returns (parsed)**: `PaginatedAnnotations`
- **Returns (raw)**: `ApiResult[PaginatedAnnotations, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedAnnotations` | `bitbucket/models/paginated_annotations.py` |

### client.commits.get_report

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_report(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId`
- **Returns (parsed)**: `Report`
- **Returns (raw)**: `ApiResult[Report, GetReportErrorBody]`
- **Error**: `GetReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Report` | `bitbucket/models/report.py` |
| `GetReportErrorBody` | `bitbucket/errors/get_report_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_reports_for_commit

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_reports_for_commit(workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path
- **Returns (parsed)**: `PaginatedReports`
- **Returns (raw)**: `ApiResult[PaginatedReports, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedReports` | `bitbucket/models/paginated_reports.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commit_by_commit(commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Commit`
- **Returns (raw)**: `ApiResult[Commit, GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Commit` | `bitbucket/models/commit.py` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commit_by_commit_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(commit: str, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path · `q` — query · `sort` — query
- **Returns (parsed)**: `PaginatedCommitComments`
- **Returns (raw)**: `ApiResult[PaginatedCommitComments, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedCommitComments` | `bitbucket/models/paginated_commit_comments.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(comment_id: int, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `commit`, `repo_slug`, `workspace`
- **Params**: `comment_id` — path · `commit` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `CommitComment`
- **Returns (raw)**: `ApiResult[CommitComment, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CommitComment` | `bitbucket/models/commit_comment.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_commits

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commits`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commits(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Page`
- **Returns (raw)**: `ApiResult[Page, GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Page` | `bitbucket/models/page.py` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commits_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_commits_by_revision

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_commits_by_revision(repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `revision`, `workspace`
- **Params**: `repo_slug` — path · `revision` — path · `workspace` — path
- **Returns (parsed)**: `Page`
- **Returns (raw)**: `ApiResult[Page, GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Page` | `bitbucket/models/page.py` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commits_by_revision_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_diff_by_spec

- **Route**: `GET /repositories/{workspace}/{repo_slug}/diff/{spec}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_diff_by_spec(repo_slug: str, spec: str, workspace: str, *, context: int | None = None, path: str | None = None, ignore_whitespace: bool | None = None, binary: bool | None = None, renames: bool | None = None, merge: bool | None = None, topic: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `spec`, `workspace`
- **Params**: `repo_slug` — path · `spec` — path · `workspace` — path · `context` — query · `path` — query · `ignore_whitespace` — query · `binary` — query · `renames` — query · `merge` — query · `topic` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [555] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_diff_by_spec_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_diffstat_by_spec

- **Route**: `GET /repositories/{workspace}/{repo_slug}/diffstat/{spec}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(repo_slug: str, spec: str, workspace: str, *, ignore_whitespace: bool | None = None, merge: bool | None = None, path: str | None = None, renames: bool | None = None, topic: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `spec`, `workspace`
- **Params**: `repo_slug` — path · `spec` — path · `workspace` — path · `ignore_whitespace` — query · `merge` — query · `path` — query · `renames` — query · `topic` — query
- **Returns (parsed)**: `PaginatedDiffStat`
- **Returns (raw)**: `ApiResult[PaginatedDiffStat, GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [555] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedDiffStat` | `bitbucket/models/paginated_diff_stat.py` |
| `GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_diffstat_by_spec_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec

- **Route**: `GET /repositories/{workspace}/{repo_slug}/merge-base/{revspec}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(repo_slug: str, revspec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `revspec`, `workspace`
- **Params**: `repo_slug` — path · `revspec` — path · `workspace` — path
- **Returns (parsed)**: `Commit`
- **Returns (raw)**: `ApiResult[Commit, GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Commit` | `bitbucket/models/commit.py` |
| `GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.get_repositories_by_workspace_by_repo_slug_patch_by_spec

- **Route**: `GET /repositories/{workspace}/{repo_slug}/patch/{spec}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_patch_by_spec(repo_slug: str, spec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `spec`, `workspace`
- **Params**: `repo_slug` — path · `spec` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [555] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_patch_by_spec_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/approve`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Participant`
- **Returns (raw)**: `ApiResult[Participant, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Participant` | `bitbucket/models/participant.py` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/comments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(commit: str, repo_slug: str, workspace: str, body: CommitComment | CommitCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `commit`, `repo_slug`, `workspace`, `body`
- **Params**: `commit` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CommitComment` | `bitbucket/models/commit_comment.py` |
| `CommitCommentDict` | `bitbucket/models/commit_comment.py` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error.py` |

### client.commits.post_repositories_by_workspace_by_repo_slug_commits

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commits`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_commits(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `Page`
- **Returns (raw)**: `ApiResult[Page, PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Page` | `bitbucket/models/page.py` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commits_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.post_repositories_by_workspace_by_repo_slug_commits_by_revision

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commits/{revision}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_commits_by_revision(repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `revision`, `workspace`
- **Params**: `repo_slug` — path · `revision` — path · `workspace` — path
- **Returns (parsed)**: `Page`
- **Returns (raw)**: `ApiResult[Page, PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Page` | `bitbucket/models/page.py` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commits_by_revision_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.commits.put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(comment_id: int, commit: str, repo_slug: str, workspace: str, body: CommitComment | CommitCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `commit`, `repo_slug`, `workspace`, `body`
- **Params**: `comment_id` — path · `commit` — path · `repo_slug` — path · `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `CommitComment` | `bitbucket/models/commit_comment.py` |
| `CommitCommentDict` | `bitbucket/models/commit_comment.py` |
| `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error.py` |

