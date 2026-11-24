<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.Builds` · Source: `src/Hud/Api/Builds.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BuildStatusV2BuildsBuildIdStatusGet

- **Signature**: `BuildStatusV2BuildsBuildIdStatusGet(BuildStatusV2BuildsBuildIdStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `BuildResponse`
- **Error**: `ApiException<BuildStatusV2BuildsBuildIdStatusGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BuildStatusV2BuildsBuildIdStatusGetRequest` | `src/Hud/Requests/Builds/BuildStatusV2BuildsBuildIdStatusGetRequest.cs` |
| `BuildResponse` | `src/Hud/Models/BuildResponse.cs` |
| `BuildStatusV2BuildsBuildIdStatusGetError` | `src/Hud/Errors/BuildStatusV2BuildsBuildIdStatusGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CancelBuildV2BuildsBuildIdCancelPost

- **Signature**: `CancelBuildV2BuildsBuildIdCancelPost(CancelBuildV2BuildsBuildIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `BuildResponse`
- **Error**: `ApiException<CancelBuildV2BuildsBuildIdCancelPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelBuildV2BuildsBuildIdCancelPostRequest` | `src/Hud/Requests/Builds/CancelBuildV2BuildsBuildIdCancelPostRequest.cs` |
| `BuildResponse` | `src/Hud/Models/BuildResponse.cs` |
| `CancelBuildV2BuildsBuildIdCancelPostError` | `src/Hud/Errors/CancelBuildV2BuildsBuildIdCancelPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DownloadBuildSourceV2BuildsBuildIdSourceDownloadGet

- **Signature**: `DownloadBuildSourceV2BuildsBuildIdSourceDownloadGet(DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`, `Path`
- **Query params (wire ← C#)**: `path` ← `Path`
- **Returns**: `BuildSourceDownloadResponse`
- **Error**: `ApiException<DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest` | `src/Hud/Requests/Builds/DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest.cs` |
| `BuildSourceDownloadResponse` | `src/Hud/Models/BuildSourceDownloadResponse.cs` |
| `DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError` | `src/Hud/Errors/DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet

- **Signature**: `DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `object`
- **Error**: `ApiException<DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest` | `src/Hud/Requests/Builds/DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest.cs` |
| `DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError` | `src/Hud/Errors/DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListBuildSourceV2BuildsBuildIdSourceGet

- **Signature**: `ListBuildSourceV2BuildsBuildIdSourceGet(ListBuildSourceV2BuildsBuildIdSourceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Query params (wire ← C#)**: `path` ← `Path`, `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `BuildSourceListResponse`
- **Error**: `ApiException<ListBuildSourceV2BuildsBuildIdSourceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildSourceV2BuildsBuildIdSourceGetRequest` | `src/Hud/Requests/Builds/ListBuildSourceV2BuildsBuildIdSourceGetRequest.cs` |
| `Cursor` | `src/Hud/Models/AnyOf/Cursor.cs` |
| `BuildSourceListResponse` | `src/Hud/Models/BuildSourceListResponse.cs` |
| `ListBuildSourceV2BuildsBuildIdSourceGetError` | `src/Hud/Errors/ListBuildSourceV2BuildsBuildIdSourceGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListBuildWorkspaceV2BuildsBuildIdWorkspaceGet

- **Signature**: `ListBuildWorkspaceV2BuildsBuildIdWorkspaceGet(ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Query params (wire ← C#)**: `path` ← `Path`, `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `BuildWorkspaceListResponse`
- **Error**: `ApiException<ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest` | `src/Hud/Requests/Builds/ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest.cs` |
| `Cursor` | `src/Hud/Models/AnyOf/Cursor.cs` |
| `BuildWorkspaceListResponse` | `src/Hud/Models/BuildWorkspaceListResponse.cs` |
| `ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError` | `src/Hud/Errors/ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListBuildsV2BuildsGet

- **Signature**: `ListBuildsV2BuildsGet(ListBuildsV2BuildsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RegistryId`
- **Query params (wire ← C#)**: `registry_id` ← `RegistryId`, `limit` ← `Limit`
- **Returns**: `BuildListResponse`
- **Error**: `ApiException<ListBuildsV2BuildsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildsV2BuildsGetRequest` | `src/Hud/Requests/Builds/ListBuildsV2BuildsGetRequest.cs` |
| `BuildListResponse` | `src/Hud/Models/BuildListResponse.cs` |
| `ListBuildsV2BuildsGetError` | `src/Hud/Errors/ListBuildsV2BuildsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### LookupBuildsV2BuildsLookupPost

- **Signature**: `LookupBuildsV2BuildsLookupPost(LookupBuildsV2BuildsLookupPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BuildLookupResponse`
- **Error**: `ApiException<LookupBuildsV2BuildsLookupPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LookupBuildsV2BuildsLookupPostRequest` | `src/Hud/Requests/Builds/LookupBuildsV2BuildsLookupPostRequest.cs` |
| `BuildLookupRequest` | `src/Hud/Models/BuildLookupRequest.cs` |
| `BuildLookupResponse` | `src/Hud/Models/BuildLookupResponse.cs` |
| `LookupBuildsV2BuildsLookupPostError` | `src/Hud/Errors/LookupBuildsV2BuildsLookupPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### PreviewBuildSourceV2BuildsBuildIdSourcePreviewGet

- **Signature**: `PreviewBuildSourceV2BuildsBuildIdSourcePreviewGet(PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`, `Path`
- **Query params (wire ← C#)**: `path` ← `Path`
- **Returns**: `BuildSourcePreviewResponse`
- **Error**: `ApiException<PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest` | `src/Hud/Requests/Builds/PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest.cs` |
| `BuildSourcePreviewResponse` | `src/Hud/Models/BuildSourcePreviewResponse.cs` |
| `PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError` | `src/Hud/Errors/PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet

- **Signature**: `PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`, `Path`
- **Query params (wire ← C#)**: `path` ← `Path`
- **Returns**: `BuildSourcePreviewResponse`
- **Error**: `ApiException<PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest` | `src/Hud/Requests/Builds/PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest.cs` |
| `BuildSourcePreviewResponse` | `src/Hud/Models/BuildSourcePreviewResponse.cs` |
| `PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError` | `src/Hud/Errors/PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RegisterBuildSourceV2BuildsRegisterPost

- **Signature**: `RegisterBuildSourceV2BuildsRegisterPost(RegisterBuildSourceV2BuildsRegisterPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BuildRegisterResponse`
- **Error**: `ApiException<RegisterBuildSourceV2BuildsRegisterPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterBuildSourceV2BuildsRegisterPostRequest` | `src/Hud/Requests/Builds/RegisterBuildSourceV2BuildsRegisterPostRequest.cs` |
| `BuildRegisterRequest` | `src/Hud/Models/BuildRegisterRequest.cs` |
| `BuildRegisterResponse` | `src/Hud/Models/BuildRegisterResponse.cs` |
| `RegisterBuildSourceV2BuildsRegisterPostError` | `src/Hud/Errors/RegisterBuildSourceV2BuildsRegisterPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ReindexBuildSourceV2BuildsBuildIdSourceReindexPost

- **Signature**: `ReindexBuildSourceV2BuildsBuildIdSourceReindexPost(ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest` | `src/Hud/Requests/Builds/ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest.cs` |
| `ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError` | `src/Hud/Errors/ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### SetLatestBuildV2BuildsBuildIdSetLatestPost

- **Signature**: `SetLatestBuildV2BuildsBuildIdSetLatestPost(SetLatestBuildV2BuildsBuildIdSetLatestPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `BuildResponse`
- **Error**: `ApiException<SetLatestBuildV2BuildsBuildIdSetLatestPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetLatestBuildV2BuildsBuildIdSetLatestPostRequest` | `src/Hud/Requests/Builds/SetLatestBuildV2BuildsBuildIdSetLatestPostRequest.cs` |
| `BuildResponse` | `src/Hud/Models/BuildResponse.cs` |
| `SetLatestBuildV2BuildsBuildIdSetLatestPostError` | `src/Hud/Errors/SetLatestBuildV2BuildsBuildIdSetLatestPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### TriggerBuildV2BuildsTriggerDirectPost

- **Signature**: `TriggerBuildV2BuildsTriggerDirectPost(TriggerBuildV2BuildsTriggerDirectPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BuildResponse`
- **Error**: `ApiException<TriggerBuildV2BuildsTriggerDirectPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerBuildV2BuildsTriggerDirectPostRequest` | `src/Hud/Requests/Builds/TriggerBuildV2BuildsTriggerDirectPostRequest.cs` |
| `BuildTriggerRequest` | `src/Hud/Models/BuildTriggerRequest.cs` |
| `BuildResponse` | `src/Hud/Models/BuildResponse.cs` |
| `TriggerBuildV2BuildsTriggerDirectPostError` | `src/Hud/Errors/TriggerBuildV2BuildsTriggerDirectPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### TriggerBuildV2BuildsTriggerPost

- **Signature**: `TriggerBuildV2BuildsTriggerPost(TriggerBuildV2BuildsTriggerPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BuildResponse`
- **Error**: `ApiException<TriggerBuildV2BuildsTriggerPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerBuildV2BuildsTriggerPostRequest` | `src/Hud/Requests/Builds/TriggerBuildV2BuildsTriggerPostRequest.cs` |
| `BuildTriggerRequest` | `src/Hud/Models/BuildTriggerRequest.cs` |
| `BuildResponse` | `src/Hud/Models/BuildResponse.cs` |
| `TriggerBuildV2BuildsTriggerPostError` | `src/Hud/Errors/TriggerBuildV2BuildsTriggerPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UploadUrlV2BuildsUploadUrlPost

- **Signature**: `UploadUrlV2BuildsUploadUrlPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BuildUploadUrlResponse`
- **Error**: `ApiException<UploadUrlV2BuildsUploadUrlPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BuildUploadUrlResponse` | `src/Hud/Models/BuildUploadUrlResponse.cs` |
| `UploadUrlV2BuildsUploadUrlPostError` | `src/Hud/Errors/UploadUrlV2BuildsUploadUrlPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

