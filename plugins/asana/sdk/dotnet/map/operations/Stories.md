<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.Stories` · Source: `src/Asana/Api/Stories.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStoryForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateStoryForTask(CreateStoryForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksStoriesResponse1`
- **Error**: `ApiException<CreateStoryForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStoryForTaskRequest` | `src/Asana/Requests/Stories/CreateStoryForTaskRequest.cs` |
| `TasksStoriesRequest` | `src/Asana/Models/TasksStoriesRequest.cs` |
| `TasksStoriesResponse1` | `src/Asana/Models/TasksStoriesResponse1.cs` |
| `CreateStoryForTaskError` | `src/Asana/Errors/CreateStoryForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteStory

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteStory(DeleteStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `StoriesResponse2`
- **Error**: `ApiException<DeleteStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStoryRequest` | `src/Asana/Requests/Stories/DeleteStoryRequest.cs` |
| `StoriesResponse2` | `src/Asana/Models/StoriesResponse2.cs` |
| `DeleteStoryError` | `src/Asana/Errors/DeleteStoryError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetStoriesForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetStoriesForTask(GetStoriesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksStoriesResponse`
- **Error**: `ApiException<GetStoriesForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoriesForTaskRequest` | `src/Asana/Requests/Stories/GetStoriesForTaskRequest.cs` |
| `TasksStoriesResponse` | `src/Asana/Models/TasksStoriesResponse.cs` |
| `GetStoriesForTaskError` | `src/Asana/Errors/GetStoriesForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetStory

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetStory(GetStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `StoriesResponse`
- **Error**: `ApiException<GetStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoryRequest` | `src/Asana/Requests/Stories/GetStoryRequest.cs` |
| `StoriesResponse` | `src/Asana/Models/StoriesResponse.cs` |
| `GetStoryError` | `src/Asana/Errors/GetStoryError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateStory

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateStory(UpdateStoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StoryGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `StoriesResponse`
- **Error**: `ApiException<UpdateStoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStoryRequest` | `src/Asana/Requests/Stories/UpdateStoryRequest.cs` |
| `StoriesRequest` | `src/Asana/Models/StoriesRequest.cs` |
| `StoriesResponse` | `src/Asana/Models/StoriesResponse.cs` |
| `UpdateStoryError` | `src/Asana/Errors/UpdateStoryError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

