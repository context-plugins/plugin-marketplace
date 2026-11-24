<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContextApi — operations

Accessor: `client.ContextApi` · Source: `src/CircleCi/Api/ContextApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddOrUpdateContextEnvironmentVariable

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `AddOrUpdateContextEnvironmentVariable(AddOrUpdateContextEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContextId`, `EnvVarName`, `Body`
- **Returns**: `EnvironmentVariable`
- **Error**: `ApiException<AddOrUpdateContextEnvironmentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddOrUpdateContextEnvironmentVariableRequest` | `src/CircleCi/Requests/ContextApi/AddOrUpdateContextEnvironmentVariableRequest.cs` |
| `ContextEnvironmentVariableRequest` | `src/CircleCi/Models/ContextEnvironmentVariableRequest.cs` |
| `EnvironmentVariable` | `src/CircleCi/Models/EnvironmentVariable.cs` |
| `AddOrUpdateContextEnvironmentVariableError` | `src/CircleCi/Errors/AddOrUpdateContextEnvironmentVariableError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### CreateContext

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `CreateContext(CreateContextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Context`
- **Error**: `ApiException<CreateContextError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContextOperationRequest` | `src/CircleCi/Requests/ContextApi/CreateContextOperationRequest.cs` |
| `CreateContextRequest` | `src/CircleCi/Models/CreateContextRequest.cs` |
| `Context` | `src/CircleCi/Models/Context.cs` |
| `CreateContextError` | `src/CircleCi/Errors/CreateContextError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteContext

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `DeleteContext(DeleteContextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContextId`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteContextError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteContextRequest` | `src/CircleCi/Requests/ContextApi/DeleteContextRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `DeleteContextError` | `src/CircleCi/Errors/DeleteContextError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteContextEnvironmentVariable

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `DeleteContextEnvironmentVariable(DeleteContextEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContextId`, `EnvVarName`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteContextEnvironmentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteContextEnvironmentVariableRequest` | `src/CircleCi/Requests/ContextApi/DeleteContextEnvironmentVariableRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `DeleteContextEnvironmentVariableError` | `src/CircleCi/Errors/DeleteContextEnvironmentVariableError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetContext

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetContext(GetContextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContextId`
- **Returns**: `Context`
- **Error**: `ApiException<GetContextError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContextRequest` | `src/CircleCi/Requests/ContextApi/GetContextRequest.cs` |
| `Context` | `src/CircleCi/Models/Context.cs` |
| `GetContextError` | `src/CircleCi/Errors/GetContextError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListContextEnvironmentVariables

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListContextEnvironmentVariables(ListContextEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContextId`
- **Query params (wire ← C#)**: `page-token` ← `PageToken`
- **Returns**: `EnvironmentVariableList`
- **Error**: `ApiException<ListContextEnvironmentVariablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContextEnvironmentVariablesRequest` | `src/CircleCi/Requests/ContextApi/ListContextEnvironmentVariablesRequest.cs` |
| `EnvironmentVariableList` | `src/CircleCi/Models/EnvironmentVariableList.cs` |
| `ListContextEnvironmentVariablesError` | `src/CircleCi/Errors/ListContextEnvironmentVariablesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListContexts

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListContexts(ListContextsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `owner-id` ← `OwnerId`, `owner-slug` ← `OwnerSlug`, `owner-type` ← `OwnerType`, `page-token` ← `PageToken`
- **Returns**: `ContextList`
- **Error**: `ApiException<ListContextsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContextsRequest` | `src/CircleCi/Requests/ContextApi/ListContextsRequest.cs` |
| `OwnerType` | `src/CircleCi/Models/Enums/OwnerType.cs` |
| `ContextList` | `src/CircleCi/Models/ContextList.cs` |
| `ListContextsError` | `src/CircleCi/Errors/ListContextsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

