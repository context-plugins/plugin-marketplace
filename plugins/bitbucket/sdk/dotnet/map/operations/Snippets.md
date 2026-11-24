<!-- Generated file — do not edit; regenerated with the SDK. -->

# Snippets — operations

Accessor: `client.Snippets` · Source: `src/Bitbucket/Api/Snippets.cs` · 25 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteSnippetsByWorkspaceByEncodedId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteSnippetsByWorkspaceByEncodedId(DeleteSnippetsByWorkspaceByEncodedIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSnippetsByWorkspaceByEncodedIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdRequest` | `src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdRequest.cs` |
| `DeleteSnippetsByWorkspaceByEncodedIdError` | `src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteSnippetsByWorkspaceByEncodedIdByNodeId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteSnippetsByWorkspaceByEncodedIdByNodeId(DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `NodeId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest` | `src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest.cs` |
| `DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError` | `src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentId(DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `EncodedId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest.cs` |
| `DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError` | `src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteSnippetsByWorkspaceByEncodedIdWatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteSnippetsByWorkspaceByEncodedIdWatch(DeleteSnippetsByWorkspaceByEncodedIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSnippetsByWorkspaceByEncodedIdWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSnippetsByWorkspaceByEncodedIdWatchRequest` | `src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdWatchRequest.cs` |
| `DeleteSnippetsByWorkspaceByEncodedIdWatchError` | `src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdWatchError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippets

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippets(GetSnippetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `role` ← `Role`
- **Returns**: `PaginatedSnippets`
- **Error**: `ApiException<GetSnippetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsRequest.cs` |
| `RoleBitbucketSnippetsApi` | `src/Bitbucket/Models/Enums/RoleBitbucketSnippetsApi.cs` |
| `PaginatedSnippets` | `src/Bitbucket/Models/PaginatedSnippets.cs` |
| `GetSnippetsError` | `src/Bitbucket/Errors/GetSnippetsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspace(GetSnippetsByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Query params (wire ← C#)**: `role` ← `Role`
- **Returns**: `PaginatedSnippets`
- **Error**: `ApiException<GetSnippetsByWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceRequest.cs` |
| `RoleBitbucketSnippetsApi` | `src/Bitbucket/Models/Enums/RoleBitbucketSnippetsApi.cs` |
| `PaginatedSnippets` | `src/Bitbucket/Models/PaginatedSnippets.cs` |
| `GetSnippetsByWorkspaceError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedId(GetSnippetsByWorkspaceByEncodedIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `Snippet`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdRequest.cs` |
| `Snippet` | `src/Bitbucket/Models/AllOf/Snippet.cs` |
| `GetSnippetsByWorkspaceByEncodedIdError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdByNodeId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdByNodeId(GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `NodeId`, `Workspace`
- **Returns**: `Snippet`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdByNodeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest.cs` |
| `Snippet` | `src/Bitbucket/Models/AllOf/Snippet.cs` |
| `GetSnippetsByWorkspaceByEncodedIdByNodeIdError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByNodeIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPath

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPath(GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `NodeId`, `Path`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest.cs` |
| `GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdByRevisionDiff

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdByRevisionDiff(GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Revision`, `Workspace`
- **Query params (wire ← C#)**: `path` ← `Path`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest.cs` |
| `GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdByRevisionPatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdByRevisionPatch(GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Revision`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest.cs` |
| `GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdComments(GetSnippetsByWorkspaceByEncodedIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `PaginatedSnippetComments`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdCommentsRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommentsRequest.cs` |
| `PaginatedSnippetComments` | `src/Bitbucket/Models/PaginatedSnippetComments.cs` |
| `GetSnippetsByWorkspaceByEncodedIdCommentsError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdCommentsByCommentId(GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `EncodedId`, `Workspace`
- **Returns**: `SnippetComment`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest.cs` |
| `SnippetComment` | `src/Bitbucket/Models/AllOf/SnippetComment.cs` |
| `GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdCommits

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdCommits(GetSnippetsByWorkspaceByEncodedIdCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `PaginatedSnippetCommits`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdCommitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdCommitsRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommitsRequest.cs` |
| `PaginatedSnippetCommits` | `src/Bitbucket/Models/PaginatedSnippetCommits.cs` |
| `GetSnippetsByWorkspaceByEncodedIdCommitsError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommitsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdCommitsByRevision

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdCommitsByRevision(GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Revision`, `Workspace`
- **Returns**: `SnippetCommit`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest.cs` |
| `SnippetCommit` | `src/Bitbucket/Models/AllOf/SnippetCommit.cs` |
| `GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdFilesByPath

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdFilesByPath(GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Path`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdFilesByPathError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest.cs` |
| `GetSnippetsByWorkspaceByEncodedIdFilesByPathError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdFilesByPathError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdWatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdWatch(GetSnippetsByWorkspaceByEncodedIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdWatchRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdWatchRequest.cs` |
| `GetSnippetsByWorkspaceByEncodedIdWatchError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdWatchError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetSnippetsByWorkspaceByEncodedIdWatchers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetSnippetsByWorkspaceByEncodedIdWatchers(GetSnippetsByWorkspaceByEncodedIdWatchersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `PaginatedAccounts`
- **Error**: `ApiException<GetSnippetsByWorkspaceByEncodedIdWatchersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSnippetsByWorkspaceByEncodedIdWatchersRequest` | `src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdWatchersRequest.cs` |
| `PaginatedAccounts` | `src/Bitbucket/Models/PaginatedAccounts.cs` |
| `GetSnippetsByWorkspaceByEncodedIdWatchersError` | `src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdWatchersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostSnippets

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostSnippets(PostSnippetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Snippet`
- **Error**: `ApiException<PostSnippetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostSnippetsRequest` | `src/Bitbucket/Requests/Snippets/PostSnippetsRequest.cs` |
| `Snippet` | `src/Bitbucket/Models/AllOf/Snippet.cs` |
| `PostSnippetsError` | `src/Bitbucket/Errors/PostSnippetsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostSnippetsByWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostSnippetsByWorkspace(PostSnippetsByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `Body`
- **Returns**: `Snippet`
- **Error**: `ApiException<PostSnippetsByWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostSnippetsByWorkspaceRequest` | `src/Bitbucket/Requests/Snippets/PostSnippetsByWorkspaceRequest.cs` |
| `Snippet` | `src/Bitbucket/Models/AllOf/Snippet.cs` |
| `PostSnippetsByWorkspaceError` | `src/Bitbucket/Errors/PostSnippetsByWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostSnippetsByWorkspaceByEncodedIdComments

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostSnippetsByWorkspaceByEncodedIdComments(PostSnippetsByWorkspaceByEncodedIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`, `Body`
- **Returns**: `SnippetComment`
- **Error**: `ApiException<PostSnippetsByWorkspaceByEncodedIdCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostSnippetsByWorkspaceByEncodedIdCommentsRequest` | `src/Bitbucket/Requests/Snippets/PostSnippetsByWorkspaceByEncodedIdCommentsRequest.cs` |
| `SnippetComment` | `src/Bitbucket/Models/AllOf/SnippetComment.cs` |
| `PostSnippetsByWorkspaceByEncodedIdCommentsError` | `src/Bitbucket/Errors/PostSnippetsByWorkspaceByEncodedIdCommentsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutSnippetsByWorkspaceByEncodedId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutSnippetsByWorkspaceByEncodedId(PutSnippetsByWorkspaceByEncodedIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `Snippet`
- **Error**: `ApiException<PutSnippetsByWorkspaceByEncodedIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSnippetsByWorkspaceByEncodedIdRequest` | `src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdRequest.cs` |
| `Snippet` | `src/Bitbucket/Models/AllOf/Snippet.cs` |
| `PutSnippetsByWorkspaceByEncodedIdError` | `src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutSnippetsByWorkspaceByEncodedIdByNodeId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutSnippetsByWorkspaceByEncodedIdByNodeId(PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `NodeId`, `Workspace`
- **Returns**: `Snippet`
- **Error**: `ApiException<PutSnippetsByWorkspaceByEncodedIdByNodeIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest` | `src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest.cs` |
| `Snippet` | `src/Bitbucket/Models/AllOf/Snippet.cs` |
| `PutSnippetsByWorkspaceByEncodedIdByNodeIdError` | `src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdByNodeIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutSnippetsByWorkspaceByEncodedIdCommentsByCommentId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutSnippetsByWorkspaceByEncodedIdCommentsByCommentId(PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`, `EncodedId`, `Workspace`, `Body`
- **Returns**: `SnippetComment`
- **Error**: `ApiException<PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest` | `src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest.cs` |
| `SnippetComment` | `src/Bitbucket/Models/AllOf/SnippetComment.cs` |
| `PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError` | `src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutSnippetsByWorkspaceByEncodedIdWatch

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutSnippetsByWorkspaceByEncodedIdWatch(PutSnippetsByWorkspaceByEncodedIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EncodedId`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutSnippetsByWorkspaceByEncodedIdWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutSnippetsByWorkspaceByEncodedIdWatchRequest` | `src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdWatchRequest.cs` |
| `PutSnippetsByWorkspaceByEncodedIdWatchError` | `src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdWatchError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

