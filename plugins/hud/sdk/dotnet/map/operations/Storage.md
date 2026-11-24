<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.Storage` · Source: `src/Hud/Api/Storage.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTraceArtifactsV2StorageTracesTraceIdArtifactsGet

- **Signature**: `ListTraceArtifactsV2StorageTracesTraceIdArtifactsGet(ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceStorageObjectListResponse`
- **Error**: `ApiException<ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest` | `src/Hud/Requests/Storage/ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest.cs` |
| `TraceStorageObjectListResponse` | `src/Hud/Models/TraceStorageObjectListResponse.cs` |
| `ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError` | `src/Hud/Errors/ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet

- **Signature**: `TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceWorkspaceChangesResponse`
- **Error**: `ApiException<TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest` | `src/Hud/Requests/Storage/TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest.cs` |
| `TraceWorkspaceChangesResponse` | `src/Hud/Models/TraceWorkspaceChangesResponse.cs` |
| `TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError` | `src/Hud/Errors/TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet

- **Signature**: `TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceWorkspaceFilesResponse`
- **Error**: `ApiException<TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest` | `src/Hud/Requests/Storage/TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest.cs` |
| `TraceWorkspaceFilesResponse` | `src/Hud/Models/TraceWorkspaceFilesResponse.cs` |
| `TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError` | `src/Hud/Errors/TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

