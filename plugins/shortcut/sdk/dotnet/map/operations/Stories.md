<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.Stories` · Source: `src/Shortcut/Api/Stories.cs` · 23 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMultipleStories

- **Auth**: `options.ApiToken`
- **Signature**: `CreateMultipleStories(CreateMultipleStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<CreateMultipleStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMultipleStoriesRequest` | `src/Shortcut/Requests/Stories/CreateMultipleStoriesRequest.cs` |
| `CreateStories` | `src/Shortcut/Models/CreateStories.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `CreateMultipleStoriesError` | `src/Shortcut/Errors/CreateMultipleStoriesError.cs` |

### CreateStory

- **Auth**: `options.ApiToken`
- **Signature**: `CreateStory(CreateStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Story`
- **Error**: `ApiException<CreateStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStoryRequest` | `src/Shortcut/Requests/Stories/CreateStoryRequest.cs` |
| `CreateStoryParams` | `src/Shortcut/Models/CreateStoryParams.cs` |
| `Story` | `src/Shortcut/Models/Story.cs` |
| `CreateStoryError` | `src/Shortcut/Errors/CreateStoryError.cs` |

### CreateStoryComment

- **Auth**: `options.ApiToken`
- **Signature**: `CreateStoryComment(CreateStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `Body`
- **Returns**: `StoryComment`
- **Error**: `ApiException<CreateStoryCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStoryCommentRequest` | `src/Shortcut/Requests/Stories/CreateStoryCommentRequest.cs` |
| `CreateStoryComment` | `src/Shortcut/Models/CreateStoryComment.cs` |
| `StoryComment` | `src/Shortcut/Models/StoryComment.cs` |
| `CreateStoryCommentError` | `src/Shortcut/Errors/CreateStoryCommentError.cs` |

### CreateStoryFromTemplate

- **Auth**: `options.ApiToken`
- **Signature**: `CreateStoryFromTemplate(CreateStoryFromTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Story`
- **Error**: `ApiException<CreateStoryFromTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStoryFromTemplateRequest` | `src/Shortcut/Requests/Stories/CreateStoryFromTemplateRequest.cs` |
| `CreateStoryFromTemplateParams` | `src/Shortcut/Models/CreateStoryFromTemplateParams.cs` |
| `Story` | `src/Shortcut/Models/Story.cs` |
| `CreateStoryFromTemplateError` | `src/Shortcut/Errors/CreateStoryFromTemplateError.cs` |

### CreateStoryReaction

- **Auth**: `options.ApiToken`
- **Signature**: `CreateStoryReaction(CreateStoryReactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `CommentPublicId`, `Body`
- **Returns**: `IReadOnlyList<StoryReaction>`
- **Error**: `ApiException<CreateStoryReactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStoryReactionRequest` | `src/Shortcut/Requests/Stories/CreateStoryReactionRequest.cs` |
| `CreateOrDeleteStoryReaction` | `src/Shortcut/Models/CreateOrDeleteStoryReaction.cs` |
| `StoryReaction` | `src/Shortcut/Models/StoryReaction.cs` |
| `CreateStoryReactionError` | `src/Shortcut/Errors/CreateStoryReactionError.cs` |

### CreateTask

- **Auth**: `options.ApiToken`
- **Signature**: `CreateTask(CreateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `Body`
- **Returns**: `TaskModel`
- **Error**: `ApiException<CreateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTaskRequest` | `src/Shortcut/Requests/Stories/CreateTaskRequest.cs` |
| `CreateTask` | `src/Shortcut/Models/CreateTask.cs` |
| `TaskModel` | `src/Shortcut/Models/TaskModel.cs` |
| `CreateTaskError` | `src/Shortcut/Errors/CreateTaskError.cs` |

### DeleteMultipleStories

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteMultipleStories(DeleteMultipleStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMultipleStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMultipleStoriesRequest` | `src/Shortcut/Requests/Stories/DeleteMultipleStoriesRequest.cs` |
| `DeleteStories` | `src/Shortcut/Models/DeleteStories.cs` |
| `DeleteMultipleStoriesError` | `src/Shortcut/Errors/DeleteMultipleStoriesError.cs` |

### DeleteStory

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteStory(DeleteStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStoryRequest` | `src/Shortcut/Requests/Stories/DeleteStoryRequest.cs` |
| `DeleteStoryError` | `src/Shortcut/Errors/DeleteStoryError.cs` |

### DeleteStoryComment

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteStoryComment(DeleteStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `CommentPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStoryCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStoryCommentRequest` | `src/Shortcut/Requests/Stories/DeleteStoryCommentRequest.cs` |
| `DeleteStoryCommentError` | `src/Shortcut/Errors/DeleteStoryCommentError.cs` |

### DeleteStoryReaction

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteStoryReaction(DeleteStoryReactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `CommentPublicId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStoryReactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStoryReactionRequest` | `src/Shortcut/Requests/Stories/DeleteStoryReactionRequest.cs` |
| `CreateOrDeleteStoryReaction` | `src/Shortcut/Models/CreateOrDeleteStoryReaction.cs` |
| `DeleteStoryReactionError` | `src/Shortcut/Errors/DeleteStoryReactionError.cs` |

### DeleteTask

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteTask(DeleteTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `TaskPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTaskRequest` | `src/Shortcut/Requests/Stories/DeleteTaskRequest.cs` |
| `DeleteTaskError` | `src/Shortcut/Errors/DeleteTaskError.cs` |

### GetStory

- **Auth**: `options.ApiToken`
- **Signature**: `GetStory(GetStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`
- **Returns**: `Story`
- **Error**: `ApiException<GetStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoryRequest` | `src/Shortcut/Requests/Stories/GetStoryRequest.cs` |
| `Story` | `src/Shortcut/Models/Story.cs` |
| `GetStoryError` | `src/Shortcut/Errors/GetStoryError.cs` |

### GetStoryComment

- **Auth**: `options.ApiToken`
- **Signature**: `GetStoryComment(GetStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `CommentPublicId`
- **Returns**: `StoryComment`
- **Error**: `ApiException<GetStoryCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoryCommentRequest` | `src/Shortcut/Requests/Stories/GetStoryCommentRequest.cs` |
| `StoryComment` | `src/Shortcut/Models/StoryComment.cs` |
| `GetStoryCommentError` | `src/Shortcut/Errors/GetStoryCommentError.cs` |

### GetTask

- **Auth**: `options.ApiToken`
- **Signature**: `GetTask(GetTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `TaskPublicId`
- **Returns**: `TaskModel`
- **Error**: `ApiException<GetTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskRequest` | `src/Shortcut/Requests/Stories/GetTaskRequest.cs` |
| `TaskModel` | `src/Shortcut/Models/TaskModel.cs` |
| `GetTaskError` | `src/Shortcut/Errors/GetTaskError.cs` |

### ListStoryComment

- **Auth**: `options.ApiToken`
- **Signature**: `ListStoryComment(ListStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`
- **Returns**: `IReadOnlyList<StoryComment>`
- **Error**: `ApiException<ListStoryCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStoryCommentRequest` | `src/Shortcut/Requests/Stories/ListStoryCommentRequest.cs` |
| `StoryComment` | `src/Shortcut/Models/StoryComment.cs` |
| `ListStoryCommentError` | `src/Shortcut/Errors/ListStoryCommentError.cs` |

### ListStorySubTasks

- **Auth**: `options.ApiToken`
- **Signature**: `ListStorySubTasks(ListStorySubTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<ListStorySubTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStorySubTasksRequest` | `src/Shortcut/Requests/Stories/ListStorySubTasksRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `ListStorySubTasksError` | `src/Shortcut/Errors/ListStorySubTasksError.cs` |

### QueryStories

- **Auth**: `options.ApiToken`
- **Signature**: `QueryStories(QueryStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<QueryStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryStoriesRequest` | `src/Shortcut/Requests/Stories/QueryStoriesRequest.cs` |
| `SearchStories` | `src/Shortcut/Models/SearchStories.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `QueryStoriesError` | `src/Shortcut/Errors/QueryStoriesError.cs` |

### StoryHistory

- **Auth**: `options.ApiToken`
- **Signature**: `StoryHistory(StoryHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`
- **Returns**: `IReadOnlyList<History>`
- **Error**: `ApiException<StoryHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoryHistoryRequest` | `src/Shortcut/Requests/Stories/StoryHistoryRequest.cs` |
| `History` | `src/Shortcut/Models/History.cs` |
| `StoryHistoryError` | `src/Shortcut/Errors/StoryHistoryError.cs` |

### UnlinkCommentThreadFromSlack

- **Auth**: `options.ApiToken`
- **Signature**: `UnlinkCommentThreadFromSlack(UnlinkCommentThreadFromSlackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `CommentPublicId`
- **Returns**: `StoryComment`
- **Error**: `ApiException<UnlinkCommentThreadFromSlackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnlinkCommentThreadFromSlackRequest` | `src/Shortcut/Requests/Stories/UnlinkCommentThreadFromSlackRequest.cs` |
| `StoryComment` | `src/Shortcut/Models/StoryComment.cs` |
| `UnlinkCommentThreadFromSlackError` | `src/Shortcut/Errors/UnlinkCommentThreadFromSlackError.cs` |

### UpdateMultipleStories

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateMultipleStories(UpdateMultipleStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<UpdateMultipleStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMultipleStoriesRequest` | `src/Shortcut/Requests/Stories/UpdateMultipleStoriesRequest.cs` |
| `UpdateStories` | `src/Shortcut/Models/UpdateStories.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `UpdateMultipleStoriesError` | `src/Shortcut/Errors/UpdateMultipleStoriesError.cs` |

### UpdateStory

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateStory(UpdateStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `Body`
- **Returns**: `Story`
- **Error**: `ApiException<UpdateStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStoryRequest` | `src/Shortcut/Requests/Stories/UpdateStoryRequest.cs` |
| `UpdateStory` | `src/Shortcut/Models/UpdateStory.cs` |
| `Story` | `src/Shortcut/Models/Story.cs` |
| `UpdateStoryError` | `src/Shortcut/Errors/UpdateStoryError.cs` |

### UpdateStoryComment

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateStoryComment(UpdateStoryCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `CommentPublicId`, `Body`
- **Returns**: `StoryComment`
- **Error**: `ApiException<UpdateStoryCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStoryCommentRequest` | `src/Shortcut/Requests/Stories/UpdateStoryCommentRequest.cs` |
| `UpdateStoryComment` | `src/Shortcut/Models/UpdateStoryComment.cs` |
| `StoryComment` | `src/Shortcut/Models/StoryComment.cs` |
| `UpdateStoryCommentError` | `src/Shortcut/Errors/UpdateStoryCommentError.cs` |

### UpdateTask

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateTask(UpdateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryPublicId`, `TaskPublicId`, `Body`
- **Returns**: `TaskModel`
- **Error**: `ApiException<UpdateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTaskRequest` | `src/Shortcut/Requests/Stories/UpdateTaskRequest.cs` |
| `UpdateTask` | `src/Shortcut/Models/UpdateTask.cs` |
| `TaskModel` | `src/Shortcut/Models/TaskModel.cs` |
| `UpdateTaskError` | `src/Shortcut/Errors/UpdateTaskError.cs` |

