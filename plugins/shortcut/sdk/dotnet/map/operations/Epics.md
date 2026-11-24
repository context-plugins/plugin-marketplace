<!-- Generated file — do not edit; regenerated with the SDK. -->

# Epics — operations

Accessor: `client.Epics` · Source: `src/Shortcut/Api/Epics.cs` · 17 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEpic

- **Auth**: `options.ApiToken`
- **Signature**: `CreateEpic(CreateEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Epic`
- **Error**: `ApiException<CreateEpicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEpicRequest` | `src/Shortcut/Requests/Epics/CreateEpicRequest.cs` |
| `CreateEpic` | `src/Shortcut/Models/CreateEpic.cs` |
| `Epic` | `src/Shortcut/Models/Epic.cs` |
| `CreateEpicError` | `src/Shortcut/Errors/CreateEpicError.cs` |

### CreateEpicComment

- **Auth**: `options.ApiToken`
- **Signature**: `CreateEpicComment(CreateEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `Body`
- **Returns**: `ThreadedComment`
- **Error**: `ApiException<CreateEpicCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEpicCommentRequest` | `src/Shortcut/Requests/Epics/CreateEpicCommentRequest.cs` |
| `CreateEpicComment` | `src/Shortcut/Models/CreateEpicComment.cs` |
| `ThreadedComment` | `src/Shortcut/Models/ThreadedComment.cs` |
| `CreateEpicCommentError` | `src/Shortcut/Errors/CreateEpicCommentError.cs` |

### CreateEpicCommentComment

- **Auth**: `options.ApiToken`
- **Signature**: `CreateEpicCommentComment(CreateEpicCommentCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `CommentPublicId`, `Body`
- **Returns**: `ThreadedComment`
- **Error**: `ApiException<CreateEpicCommentCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEpicCommentCommentRequest` | `src/Shortcut/Requests/Epics/CreateEpicCommentCommentRequest.cs` |
| `CreateCommentComment` | `src/Shortcut/Models/CreateCommentComment.cs` |
| `ThreadedComment` | `src/Shortcut/Models/ThreadedComment.cs` |
| `CreateEpicCommentCommentError` | `src/Shortcut/Errors/CreateEpicCommentCommentError.cs` |

### CreateEpicHealth

- **Auth**: `options.ApiToken`
- **Signature**: `CreateEpicHealth(CreateEpicHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `Body`
- **Returns**: `Health`
- **Error**: `ApiException<CreateEpicHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEpicHealthRequest` | `src/Shortcut/Requests/Epics/CreateEpicHealthRequest.cs` |
| `CreateEpicHealth` | `src/Shortcut/Models/CreateEpicHealth.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `CreateEpicHealthError` | `src/Shortcut/Errors/CreateEpicHealthError.cs` |

### DeleteEpic

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteEpic(DeleteEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEpicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEpicRequest` | `src/Shortcut/Requests/Epics/DeleteEpicRequest.cs` |
| `DeleteEpicError` | `src/Shortcut/Errors/DeleteEpicError.cs` |

### DeleteEpicComment

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteEpicComment(DeleteEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `CommentPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEpicCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEpicCommentRequest` | `src/Shortcut/Requests/Epics/DeleteEpicCommentRequest.cs` |
| `DeleteEpicCommentError` | `src/Shortcut/Errors/DeleteEpicCommentError.cs` |

### GetEpic

- **Auth**: `options.ApiToken`
- **Signature**: `GetEpic(GetEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Returns**: `Epic`
- **Error**: `ApiException<GetEpicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEpicRequest` | `src/Shortcut/Requests/Epics/GetEpicRequest.cs` |
| `Epic` | `src/Shortcut/Models/Epic.cs` |
| `GetEpicError` | `src/Shortcut/Errors/GetEpicError.cs` |

### GetEpicComment

- **Auth**: `options.ApiToken`
- **Signature**: `GetEpicComment(GetEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `CommentPublicId`
- **Returns**: `ThreadedComment`
- **Error**: `ApiException<GetEpicCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEpicCommentRequest` | `src/Shortcut/Requests/Epics/GetEpicCommentRequest.cs` |
| `ThreadedComment` | `src/Shortcut/Models/ThreadedComment.cs` |
| `GetEpicCommentError` | `src/Shortcut/Errors/GetEpicCommentError.cs` |

### GetEpicHealth

- **Auth**: `options.ApiToken`
- **Signature**: `GetEpicHealth(GetEpicHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Returns**: `Health`
- **Error**: `ApiException<GetEpicHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEpicHealthRequest` | `src/Shortcut/Requests/Epics/GetEpicHealthRequest.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `GetEpicHealthError` | `src/Shortcut/Errors/GetEpicHealthError.cs` |

### ListEpicComments

- **Auth**: `options.ApiToken`
- **Signature**: `ListEpicComments(ListEpicCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Returns**: `IReadOnlyList<ThreadedComment>`
- **Error**: `ApiException<ListEpicCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpicCommentsRequest` | `src/Shortcut/Requests/Epics/ListEpicCommentsRequest.cs` |
| `ThreadedComment` | `src/Shortcut/Models/ThreadedComment.cs` |
| `ListEpicCommentsError` | `src/Shortcut/Errors/ListEpicCommentsError.cs` |

### ListEpicDocuments

- **Auth**: `options.ApiToken`
- **Signature**: `ListEpicDocuments(ListEpicDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Returns**: `IReadOnlyList<DocSlim>`
- **Error**: `ApiException<ListEpicDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpicDocumentsRequest` | `src/Shortcut/Requests/Epics/ListEpicDocumentsRequest.cs` |
| `DocSlim` | `src/Shortcut/Models/DocSlim.cs` |
| `ListEpicDocumentsError` | `src/Shortcut/Errors/ListEpicDocumentsError.cs` |

### ListEpicHealths

- **Auth**: `options.ApiToken`
- **Signature**: `ListEpicHealths(ListEpicHealthsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Returns**: `IReadOnlyList<Health>`
- **Error**: `ApiException<ListEpicHealthsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpicHealthsRequest` | `src/Shortcut/Requests/Epics/ListEpicHealthsRequest.cs` |
| `Health` | `src/Shortcut/Models/Health.cs` |
| `ListEpicHealthsError` | `src/Shortcut/Errors/ListEpicHealthsError.cs` |

### ListEpicStories

- **Auth**: `options.ApiToken`
- **Signature**: `ListEpicStories(ListEpicStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`
- **Query params (wire ← C#)**: `includes_description` ← `IncludesDescription`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<ListEpicStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpicStoriesRequest` | `src/Shortcut/Requests/Epics/ListEpicStoriesRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `ListEpicStoriesError` | `src/Shortcut/Errors/ListEpicStoriesError.cs` |

### ListEpics

- **Auth**: `options.ApiToken`
- **Signature**: `ListEpics(ListEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `includes_description` ← `IncludesDescription`
- **Returns**: `IReadOnlyList<EpicSlim>`
- **Error**: `ApiException<ListEpicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpicsRequest` | `src/Shortcut/Requests/Epics/ListEpicsRequest.cs` |
| `EpicSlim` | `src/Shortcut/Models/EpicSlim.cs` |
| `ListEpicsError` | `src/Shortcut/Errors/ListEpicsError.cs` |

### ListEpicsPaginated

- **Auth**: `options.ApiToken`
- **Signature**: `ListEpicsPaginated(ListEpicsPaginatedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `includes_description` ← `IncludesDescription`, `page` ← `Page`, `page_size` ← `PageSize`
- **Returns**: `EpicPaginatedResults`
- **Error**: `ApiException<ListEpicsPaginatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEpicsPaginatedRequest` | `src/Shortcut/Requests/Epics/ListEpicsPaginatedRequest.cs` |
| `EpicPaginatedResults` | `src/Shortcut/Models/EpicPaginatedResults.cs` |
| `ListEpicsPaginatedError` | `src/Shortcut/Errors/ListEpicsPaginatedError.cs` |

### UpdateEpic

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateEpic(UpdateEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `Body`
- **Returns**: `Epic`
- **Error**: `ApiException<UpdateEpicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEpicRequest` | `src/Shortcut/Requests/Epics/UpdateEpicRequest.cs` |
| `UpdateEpic` | `src/Shortcut/Models/UpdateEpic.cs` |
| `Epic` | `src/Shortcut/Models/Epic.cs` |
| `UpdateEpicError` | `src/Shortcut/Errors/UpdateEpicError.cs` |

### UpdateEpicComment

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateEpicComment(UpdateEpicCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EpicPublicId`, `CommentPublicId`, `Body`
- **Returns**: `ThreadedComment`
- **Error**: `ApiException<UpdateEpicCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEpicCommentRequest` | `src/Shortcut/Requests/Epics/UpdateEpicCommentRequest.cs` |
| `UpdateComment` | `src/Shortcut/Models/UpdateComment.cs` |
| `ThreadedComment` | `src/Shortcut/Models/ThreadedComment.cs` |
| `UpdateEpicCommentError` | `src/Shortcut/Errors/UpdateEpicCommentError.cs` |

