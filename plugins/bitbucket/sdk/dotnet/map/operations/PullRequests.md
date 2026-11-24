<!-- Generated file — do not edit; regenerated with the SDK. -->

# PullRequests — operations

Accessor: `client.PullRequests` · Source: `src/Bitbucket/Api/PullRequests.cs` · 37 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `TargetUsername`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest` | `src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest` | `src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest` | `src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest` | `src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `TaskId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest` | `src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPullrequestsForCommit

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPullrequestsForCommit(GetPullrequestsForCommitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`
- **Query params (wire ← C#)**: `page` ← `Page`, `pagelen` ← `Pagelen`
- **Returns**: `PaginatedPullRequests`
- **Error**: `ApiException<GetPullrequestsForCommitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPullrequestsForCommitRequest` | `src/Bitbucket/Requests/PullRequests/GetPullrequestsForCommitRequest.cs` |
| `PaginatedPullRequests` | `src/Bitbucket/Models/PaginatedPullRequests.cs` |
| `GetPullrequestsForCommitError` | `src/Bitbucket/Errors/GetPullrequestsForCommitError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDefaultReviewers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewers(GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedAccounts`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest.cs` |
| `PaginatedAccounts` | `src/Bitbucket/Models/PaginatedAccounts.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `TargetUsername`, `Workspace`
- **Returns**: `Account`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest.cs` |
| `Account` | `src/Bitbucket/Models/AllOf/Account.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewers(GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedDefaultReviewerAndType`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest.cs` |
| `PaginatedDefaultReviewerAndType` | `src/Bitbucket/Models/PaginatedDefaultReviewerAndType.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequests

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequests(GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `state` ← `State`
- **Returns**: `PaginatedPullRequests`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest.cs` |
| `State5` | `src/Bitbucket/Models/Enums/State5.cs` |
| `PaginatedPullRequests` | `src/Bitbucket/Models/PaginatedPullRequests.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivity

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivity(GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `Pullrequest`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest.cs` |
| `Pullrequest` | `src/Bitbucket/Models/AllOf/Pullrequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivity

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivity(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `PaginatedPullRequestComments`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest.cs` |
| `PaginatedPullRequestComments` | `src/Bitbucket/Models/PaginatedPullRequestComments.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `PullrequestComment`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest.cs` |
| `PullrequestComment` | `src/Bitbucket/Models/AllOf/PullrequestComment.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommits

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommits(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiff

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiff(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstat

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstat(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `TaskId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatch(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`
- **Returns**: `PaginatedCommitStatuses`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request.cs` |
| `PaginatedCommitStatuses` | `src/Bitbucket/Models/PaginatedCommitStatuses.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `q` ← `Q`, `sort` ← `Sort`, `pagelen` ← `Pagelen`
- **Returns**: `PaginatedTasks`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest.cs` |
| `PaginatedTasks` | `src/Bitbucket/Models/PaginatedTasks.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `TaskId`, `Workspace`
- **Returns**: `PullrequestCommentTask`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest` | `src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest.cs` |
| `PullrequestCommentTask` | `src/Bitbucket/Models/PullrequestCommentTask.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspacePullrequestsBySelectedUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspacePullrequestsBySelectedUser(GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `Workspace`
- **Query params (wire ← C#)**: `state` ← `State`
- **Returns**: `PaginatedPullRequests`
- **Error**: `ApiException<GetWorkspacesByWorkspacePullrequestsBySelectedUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest` | `src/Bitbucket/Requests/PullRequests/GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest.cs` |
| `State5` | `src/Bitbucket/Models/Enums/State5.cs` |
| `PaginatedPullRequests` | `src/Bitbucket/Models/PaginatedPullRequests.cs` |
| `GetWorkspacesByWorkspacePullrequestsBySelectedUserError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspacePullrequestsBySelectedUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequests

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequests(PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `Pullrequest`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest.cs` |
| `Pullrequest` | `src/Bitbucket/Models/AllOf/Pullrequest.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `Participant`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest.cs` |
| `Participant` | `src/Bitbucket/Models/AllOf/Participant.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `PullrequestComment`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest.cs` |
| `PullrequestComment` | `src/Bitbucket/Models/AllOf/PullrequestComment.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `CommentResolution`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest.cs` |
| `CommentResolution` | `src/Bitbucket/Models/CommentResolution.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDecline

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDecline(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `Pullrequest`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest.cs` |
| `Pullrequest` | `src/Bitbucket/Models/AllOf/Pullrequest.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMerge

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMerge(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Query params (wire ← C#)**: `async` ← `Async`
- **Returns**: `Pullrequest`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetError([NotNullWhen(true)] out Error? value)` [555] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest.cs` |
| `PullRequestMergeParameters` | `src/Bitbucket/Models/PullRequestMergeParameters.cs` |
| `Pullrequest` | `src/Bitbucket/Models/AllOf/Pullrequest.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `Participant`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest.cs` |
| `Participant` | `src/Bitbucket/Models/AllOf/Participant.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `PullrequestCommentTask`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest` | `src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest.cs` |
| `PullRequestTaskCreate` | `src/Bitbucket/Models/PullRequestTaskCreate.cs` |
| `PullrequestCommentTask` | `src/Bitbucket/Models/PullrequestCommentTask.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `TargetUsername`, `Workspace`
- **Returns**: `Account`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest` | `src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest.cs` |
| `Account` | `src/Bitbucket/Models/AllOf/Account.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `Workspace`
- **Returns**: `Pullrequest`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest` | `src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest.cs` |
| `Pullrequest` | `src/Bitbucket/Models/AllOf/Pullrequest.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `PullRequestId`, `RepoSlug`, `Workspace`, `Body`
- **Returns**: `PullrequestComment`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest.cs` |
| `PullrequestComment` | `src/Bitbucket/Models/AllOf/PullrequestComment.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PullRequestId`, `RepoSlug`, `TaskId`, `Workspace`, `Body`
- **Returns**: `PullrequestCommentTask`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest` | `src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest.cs` |
| `PullRequestTaskUpdate` | `src/Bitbucket/Models/PullRequestTaskUpdate.cs` |
| `PullrequestCommentTask` | `src/Bitbucket/Models/PullrequestCommentTask.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

