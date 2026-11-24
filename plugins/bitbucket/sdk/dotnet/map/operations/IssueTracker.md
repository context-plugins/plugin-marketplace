<!-- Generated file — do not edit; regenerated with the SDK. -->

# IssueTracker — operations

Accessor: `client.IssueTracker` · Source: `src/Bitbucket/Api/IssueTracker.cs` · 33 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest` | `src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `Path`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest` | `src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Error`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest` | `src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Error`
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest` | `src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.cs` |

### GetRepositoriesByWorkspaceByRepoSlugComponents

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugComponents(GetRepositoriesByWorkspaceByRepoSlugComponentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedComponents`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugComponentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugComponentsRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugComponentsRequest.cs` |
| `PaginatedComponents` | `src/Bitbucket/Models/PaginatedComponents.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugComponentsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugComponentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentId(GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`, `RepoSlug`, `Workspace`
- **Returns**: `Component`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest.cs` |
| `Component` | `src/Bitbucket/Models/AllOf/Component.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssues

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssues(GetRepositoriesByWorkspaceByRepoSlugIssuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedIssues`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesRequest.cs` |
| `PaginatedIssues` | `src/Bitbucket/Models/PaginatedIssues.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Issue`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest.cs` |
| `Issue` | `src/Bitbucket/Models/AllOf/Issue.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `PaginatedIssueAttachment`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest.cs` |
| `PaginatedIssueAttachment` | `src/Bitbucket/Models/PaginatedIssueAttachment.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `Path`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedLogEntries`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest.cs` |
| `PaginatedLogEntries` | `src/Bitbucket/Models/PaginatedLogEntries.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ChangeId`, `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `IssueChange`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest.cs` |
| `IssueChange` | `src/Bitbucket/Models/IssueChange.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`
- **Returns**: `PaginatedIssueComments`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest.cs` |
| `PaginatedIssueComments` | `src/Bitbucket/Models/PaginatedIssueComments.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `IssueComment`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest.cs` |
| `IssueComment` | `src/Bitbucket/Models/AllOf/IssueComment.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Error`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Error`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZip

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZip(GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoName`, `RepoSlug`, `TaskId`, `Workspace`
- **Returns**: `IssueJobStatus`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest.cs` |
| `IssueJobStatus` | `src/Bitbucket/Models/IssueJobStatus.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugIssuesImport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugIssuesImport(GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `IssueJobStatus`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest.cs` |
| `IssueJobStatus` | `src/Bitbucket/Models/IssueJobStatus.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugIssuesImportError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesImportError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugMilestones

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugMilestones(GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedMilestones`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugMilestonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest.cs` |
| `PaginatedMilestones` | `src/Bitbucket/Models/PaginatedMilestones.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugMilestonesError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugMilestonesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneId(GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MilestoneId`, `RepoSlug`, `Workspace`
- **Returns**: `Milestone`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest.cs` |
| `Milestone` | `src/Bitbucket/Models/AllOf/Milestone.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugVersions

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugVersions(GetRepositoriesByWorkspaceByRepoSlugVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedVersions`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugVersionsRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugVersionsRequest.cs` |
| `PaginatedVersions` | `src/Bitbucket/Models/PaginatedVersions.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugVersionsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugVersionsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionId(GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `VersionId`, `Workspace`
- **Returns**: `VersionModel`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest` | `src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest.cs` |
| `VersionModel` | `src/Bitbucket/Models/AllOf/VersionModel.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugIssues

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugIssues(PostRepositoriesByWorkspaceByRepoSlugIssuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`, `Body`
- **Returns**: `Issue`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesRequest` | `src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesRequest.cs` |
| `Issue` | `src/Bitbucket/Models/AllOf/Issue.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest` | `src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `IssueChange`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest` | `src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest.cs` |
| `IssueChange` | `src/Bitbucket/Models/IssueChange.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest` | `src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest.cs` |
| `IssueComment` | `src/Bitbucket/Models/AllOf/IssueComment.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugIssuesExport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugIssuesExport(PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest` | `src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest.cs` |
| `ExportOptions` | `src/Bitbucket/Models/ExportOptions.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesExportError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesExportError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugIssuesImport

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugIssuesImport(PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `IssueJobStatus`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest` | `src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest.cs` |
| `IssueJobStatus` | `src/Bitbucket/Models/IssueJobStatus.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugIssuesImportError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesImportError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Issue`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest` | `src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest.cs` |
| `Issue` | `src/Bitbucket/Models/AllOf/Issue.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `IssueId`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `IssueComment`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest.cs` |
| `IssueComment` | `src/Bitbucket/Models/AllOf/IssueComment.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Error`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest` | `src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError.cs` |

### PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IssueId`, `RepoSlug`, `Workspace`
- **Returns**: `Error`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest` | `src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.cs` |

