<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/Asana/Api/Tags.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTag

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateTag(CreateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TagsResponse1`
- **Error**: `ApiException<CreateTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTagRequest` | `src/Asana/Requests/Tags/CreateTagRequest.cs` |
| `TagsRequest` | `src/Asana/Models/TagsRequest.cs` |
| `TagsResponse1` | `src/Asana/Models/TagsResponse1.cs` |
| `CreateTagError` | `src/Asana/Errors/CreateTagError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateTagForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateTagForWorkspace(CreateTagForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesTagsResponse1`
- **Error**: `ApiException<CreateTagForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTagForWorkspaceRequest` | `src/Asana/Requests/Tags/CreateTagForWorkspaceRequest.cs` |
| `WorkspacesTagsRequest` | `src/Asana/Models/WorkspacesTagsRequest.cs` |
| `WorkspacesTagsResponse1` | `src/Asana/Models/WorkspacesTagsResponse1.cs` |
| `CreateTagForWorkspaceError` | `src/Asana/Errors/CreateTagForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteTag

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteTag(DeleteTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TagGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TagsResponse4`
- **Error**: `ApiException<DeleteTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTagRequest` | `src/Asana/Requests/Tags/DeleteTagRequest.cs` |
| `TagsResponse4` | `src/Asana/Models/TagsResponse4.cs` |
| `DeleteTagError` | `src/Asana/Errors/DeleteTagError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTag

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTag(GetTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TagGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TagsResponse1`
- **Error**: `ApiException<GetTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTagRequest` | `src/Asana/Requests/Tags/GetTagRequest.cs` |
| `TagsResponse1` | `src/Asana/Models/TagsResponse1.cs` |
| `GetTagError` | `src/Asana/Errors/GetTagError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTags

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTags(GetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `workspace` ← `Workspace`
- **Returns**: `TagsResponse`
- **Error**: `ApiException<GetTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTagsRequest` | `src/Asana/Requests/Tags/GetTagsRequest.cs` |
| `TagsResponse` | `src/Asana/Models/TagsResponse.cs` |
| `GetTagsError` | `src/Asana/Errors/GetTagsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTagsForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTagsForTask(GetTagsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksTagsResponse`
- **Error**: `ApiException<GetTagsForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTagsForTaskRequest` | `src/Asana/Requests/Tags/GetTagsForTaskRequest.cs` |
| `TasksTagsResponse` | `src/Asana/Models/TasksTagsResponse.cs` |
| `GetTagsForTaskError` | `src/Asana/Errors/GetTagsForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTagsForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTagsForWorkspace(GetTagsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `WorkspacesTagsResponse`
- **Error**: `ApiException<GetTagsForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTagsForWorkspaceRequest` | `src/Asana/Requests/Tags/GetTagsForWorkspaceRequest.cs` |
| `WorkspacesTagsResponse` | `src/Asana/Models/WorkspacesTagsResponse.cs` |
| `GetTagsForWorkspaceError` | `src/Asana/Errors/GetTagsForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateTag

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateTag(UpdateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TagGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TagsResponse1`
- **Error**: `ApiException<UpdateTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTagRequest` | `src/Asana/Requests/Tags/UpdateTagRequest.cs` |
| `TagsResponse1` | `src/Asana/Models/TagsResponse1.cs` |
| `UpdateTagError` | `src/Asana/Errors/UpdateTagError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

