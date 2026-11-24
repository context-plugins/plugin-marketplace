<!-- Generated file — do not edit; regenerated with the SDK. -->

# PipelineApi — operations

Accessor: `client.PipelineApi` · Source: `src/CircleCi/Api/PipelineApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ContinuePipeline

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ContinuePipeline(ContinuePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<ContinuePipelineError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContinuePipelineRequest` | `src/CircleCi/Requests/PipelineApi/ContinuePipelineRequest.cs` |
| `PipelineContinueRequest` | `src/CircleCi/Models/PipelineContinueRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `ContinuePipelineError` | `src/CircleCi/Errors/ContinuePipelineError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetPipeline

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetPipeline(GetPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PipelineId`
- **Returns**: `PipelineCircleCiRestApiV2PipelineApi`
- **Error**: `ApiException<GetPipelineError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineRequest` | `src/CircleCi/Requests/PipelineApi/GetPipelineRequest.cs` |
| `PipelineCircleCiRestApiV2PipelineApi` | `src/CircleCi/Models/PipelineCircleCiRestApiV2PipelineApi.cs` |
| `GetPipelineError` | `src/CircleCi/Errors/GetPipelineError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetPipelineConfig

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetPipelineConfig(GetPipelineConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PipelineId`
- **Returns**: `PipelineConfig`
- **Error**: `ApiException<GetPipelineConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineConfigRequest` | `src/CircleCi/Requests/PipelineApi/GetPipelineConfigRequest.cs` |
| `PipelineConfig` | `src/CircleCi/Models/PipelineConfig.cs` |
| `GetPipelineConfigError` | `src/CircleCi/Errors/GetPipelineConfigError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListMyProjectPipelines

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListMyProjectPipelines(ListMyProjectPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Query params (wire ← C#)**: `page-token` ← `PageToken`
- **Returns**: `PipelineList`
- **Error**: `ApiException<ListMyProjectPipelinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMyProjectPipelinesRequest` | `src/CircleCi/Requests/PipelineApi/ListMyProjectPipelinesRequest.cs` |
| `PipelineList` | `src/CircleCi/Models/PipelineList.cs` |
| `ListMyProjectPipelinesError` | `src/CircleCi/Errors/ListMyProjectPipelinesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListPipelineWorkflows

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListPipelineWorkflows(ListPipelineWorkflowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PipelineId`
- **Query params (wire ← C#)**: `page-token` ← `PageToken`
- **Returns**: `WorkflowList`
- **Error**: `ApiException<ListPipelineWorkflowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPipelineWorkflowsRequest` | `src/CircleCi/Requests/PipelineApi/ListPipelineWorkflowsRequest.cs` |
| `WorkflowList` | `src/CircleCi/Models/WorkflowList.cs` |
| `ListPipelineWorkflowsError` | `src/CircleCi/Errors/ListPipelineWorkflowsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListPipelines

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListPipelines(ListPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `org-slug` ← `OrgSlug`, `mine` ← `Mine`, `page-token` ← `PageToken`
- **Returns**: `PipelineList`
- **Error**: `ApiException<ListPipelinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPipelinesRequest` | `src/CircleCi/Requests/PipelineApi/ListPipelinesRequest.cs` |
| `PipelineList` | `src/CircleCi/Models/PipelineList.cs` |
| `ListPipelinesError` | `src/CircleCi/Errors/ListPipelinesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListProjectPipelines

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListProjectPipelines(ListProjectPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Query params (wire ← C#)**: `branch` ← `Branch`, `page-token` ← `PageToken`
- **Returns**: `PipelineList`
- **Error**: `ApiException<ListProjectPipelinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjectPipelinesRequest` | `src/CircleCi/Requests/PipelineApi/ListProjectPipelinesRequest.cs` |
| `PipelineList` | `src/CircleCi/Models/PipelineList.cs` |
| `ListProjectPipelinesError` | `src/CircleCi/Errors/ListProjectPipelinesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### TriggerPipeline

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `TriggerPipeline(TriggerPipelineOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Returns**: `PipelineCreation`
- **Error**: `ApiException<TriggerPipelineError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerPipelineOperationRequest` | `src/CircleCi/Requests/PipelineApi/TriggerPipelineOperationRequest.cs` |
| `TriggerPipelineRequest` | `src/CircleCi/Models/TriggerPipelineRequest.cs` |
| `PipelineCreation` | `src/CircleCi/Models/PipelineCreation.cs` |
| `TriggerPipelineError` | `src/CircleCi/Errors/TriggerPipelineError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

