<!-- Generated file — do not edit; regenerated with the SDK. -->

# Commits — operations

Accessor: `client.Commits` · Source: `src/Bitbucket/Api/Commits.cs` · 25 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkCreateOrUpdateAnnotations

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `BulkCreateOrUpdateAnnotations(BulkCreateOrUpdateAnnotationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `Body`
- **Returns**: `IReadOnlyList<ReportAnnotation>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BulkCreateOrUpdateAnnotationsRequest` | `src/Bitbucket/Requests/Commits/BulkCreateOrUpdateAnnotationsRequest.cs` |
| `ReportAnnotation` | `src/Bitbucket/Models/AllOf/ReportAnnotation.cs` |

### CreateOrUpdateAnnotation

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateOrUpdateAnnotation(CreateOrUpdateAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `AnnotationId`, `Body`
- **Returns**: `ReportAnnotation`
- **Error**: `ApiException<CreateOrUpdateAnnotationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrUpdateAnnotationRequest` | `src/Bitbucket/Requests/Commits/CreateOrUpdateAnnotationRequest.cs` |
| `ReportAnnotation` | `src/Bitbucket/Models/AllOf/ReportAnnotation.cs` |
| `CreateOrUpdateAnnotationError` | `src/Bitbucket/Errors/CreateOrUpdateAnnotationError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateOrUpdateReport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateOrUpdateReport(CreateOrUpdateReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `Body`
- **Returns**: `Report`
- **Error**: `ApiException<CreateOrUpdateReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrUpdateReportRequest` | `src/Bitbucket/Requests/Commits/CreateOrUpdateReportRequest.cs` |
| `Report` | `src/Bitbucket/Models/AllOf/Report.cs` |
| `CreateOrUpdateReportError` | `src/Bitbucket/Errors/CreateOrUpdateReportError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteAnnotation

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteAnnotation(DeleteAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `AnnotationId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteAnnotationRequest` | `src/Bitbucket/Requests/Commits/DeleteAnnotationRequest.cs` |

### DeleteReport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteReportRequest` | `src/Bitbucket/Requests/Commits/DeleteReportRequest.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest` | `src/Bitbucket/Requests/Commits/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `Commit`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest` | `src/Bitbucket/Requests/Commits/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError.cs` |

### GetAnnotation

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAnnotation(GetAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `AnnotationId`
- **Returns**: `ReportAnnotation`
- **Error**: `ApiException<GetAnnotationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnnotationRequest` | `src/Bitbucket/Requests/Commits/GetAnnotationRequest.cs` |
| `ReportAnnotation` | `src/Bitbucket/Models/AllOf/ReportAnnotation.cs` |
| `GetAnnotationError` | `src/Bitbucket/Errors/GetAnnotationError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetAnnotationsForReport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAnnotationsForReport(GetAnnotationsForReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`
- **Returns**: `PaginatedAnnotations`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetAnnotationsForReportRequest` | `src/Bitbucket/Requests/Commits/GetAnnotationsForReportRequest.cs` |
| `PaginatedAnnotations` | `src/Bitbucket/Models/PaginatedAnnotations.cs` |

### GetReport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetReport(GetReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`
- **Returns**: `Report`
- **Error**: `ApiException<GetReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReportRequest` | `src/Bitbucket/Requests/Commits/GetReportRequest.cs` |
| `Report` | `src/Bitbucket/Models/AllOf/Report.cs` |
| `GetReportError` | `src/Bitbucket/Errors/GetReportError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetReportsForCommit

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetReportsForCommit(GetReportsForCommitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`
- **Returns**: `PaginatedReports`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetReportsForCommitRequest` | `src/Bitbucket/Requests/Commits/GetReportsForCommitRequest.cs` |
| `PaginatedReports` | `src/Bitbucket/Models/PaginatedReports.cs` |

### GetRepositoriesByWorkspaceByRepoSlugCommitByCommit

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommit(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`
- **Returns**: `Commit`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest.cs` |
| `Commit` | `src/Bitbucket/Models/AllOf/Commit.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugCommitByCommitComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedCommitComments`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest.cs` |
| `PaginatedCommitComments` | `src/Bitbucket/Models/PaginatedCommitComments.cs` |

### GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `Commit`, `RepoSlug`, `Workspace`
- **Returns**: `CommitComment`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest.cs` |
| `CommitComment` | `src/Bitbucket/Models/AllOf/CommitComment.cs` |

### GetRepositoriesByWorkspaceByRepoSlugCommits

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommits(GetRepositoriesByWorkspaceByRepoSlugCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `Page`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitsRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitsRequest.cs` |
| `Page` | `src/Bitbucket/Models/Page.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugCommitsByRevision

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugCommitsByRevision(GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Revision`, `Workspace`
- **Returns**: `Page`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest.cs` |
| `Page` | `src/Bitbucket/Models/Page.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDiffBySpec

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDiffBySpec(GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Spec`, `Workspace`
- **Query params (wire ← C#)**: `context` ← `Context`, `path` ← `Path`, `ignore_whitespace` ← `IgnoreWhitespace`, `binary` ← `Binary`, `renames` ← `Renames`, `merge` ← `Merge`, `topic` ← `Topic`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpec

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpec(GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Spec`, `Workspace`
- **Query params (wire ← C#)**: `ignore_whitespace` ← `IgnoreWhitespace`, `merge` ← `Merge`, `path` ← `Path`, `renames` ← `Renames`, `topic` ← `Topic`
- **Returns**: `PaginatedDiffStat`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest.cs` |
| `PaginatedDiffStat` | `src/Bitbucket/Models/PaginatedDiffStat.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspec

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspec(GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Revspec`, `Workspace`
- **Returns**: `Commit`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest.cs` |
| `Commit` | `src/Bitbucket/Models/AllOf/Commit.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPatchBySpec

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPatchBySpec(GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Spec`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest` | `src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`
- **Returns**: `Participant`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest` | `src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest.cs` |
| `Participant` | `src/Bitbucket/Models/AllOf/Participant.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugCommitByCommitComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Commit`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest` | `src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest.cs` |
| `CommitComment` | `src/Bitbucket/Models/AllOf/CommitComment.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError.cs` |

### PostRepositoriesByWorkspaceByRepoSlugCommits

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugCommits(PostRepositoriesByWorkspaceByRepoSlugCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `Page`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugCommitsRequest` | `src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitsRequest.cs` |
| `Page` | `src/Bitbucket/Models/Page.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugCommitsByRevision

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugCommitsByRevision(PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Revision`, `Workspace`
- **Returns**: `Page`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest` | `src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest.cs` |
| `Page` | `src/Bitbucket/Models/Page.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `Commit`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest` | `src/Bitbucket/Requests/Commits/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest.cs` |
| `CommitComment` | `src/Bitbucket/Models/AllOf/CommitComment.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError.cs` |

