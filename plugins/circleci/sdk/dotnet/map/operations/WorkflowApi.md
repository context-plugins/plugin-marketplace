<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkflowApi — operations

Accessor: `client.WorkflowApi` · Source: `src/CircleCi/Api/WorkflowApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApproveWorkflowJob

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ApproveWorkflowJob(ApproveWorkflowJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `ApprovalRequestId`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<ApproveWorkflowJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveWorkflowJobRequest` | `src/CircleCi/Requests/WorkflowApi/ApproveWorkflowJobRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `ApproveWorkflowJobError` | `src/CircleCi/Errors/ApproveWorkflowJobError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### CancelWorkflow

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `CancelWorkflow(CancelWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<CancelWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelWorkflowRequest` | `src/CircleCi/Requests/WorkflowApi/CancelWorkflowRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `CancelWorkflowError` | `src/CircleCi/Errors/CancelWorkflowError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetWorkflow

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetWorkflow(GetWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Workflow`
- **Error**: `ApiException<GetWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkflowRequest` | `src/CircleCi/Requests/WorkflowApi/GetWorkflowRequest.cs` |
| `Workflow` | `src/CircleCi/Models/Workflow.cs` |
| `GetWorkflowError` | `src/CircleCi/Errors/GetWorkflowError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListWorkflowJobs

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListWorkflowJobs(ListWorkflowJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `WorkflowJobList`
- **Error**: `ApiException<ListWorkflowJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWorkflowJobsRequest` | `src/CircleCi/Requests/WorkflowApi/ListWorkflowJobsRequest.cs` |
| `WorkflowJobList` | `src/CircleCi/Models/WorkflowJobList.cs` |
| `ListWorkflowJobsError` | `src/CircleCi/Errors/ListWorkflowJobsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### RerunWorkflow

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `RerunWorkflow(RerunWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `RerunWorkflowResponse`
- **Error**: `ApiException<RerunWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RerunWorkflowRequest` | `src/CircleCi/Requests/WorkflowApi/RerunWorkflowRequest.cs` |
| `WorkflowRerunRequest` | `src/CircleCi/Models/WorkflowRerunRequest.cs` |
| `RerunWorkflowResponse` | `src/CircleCi/Models/RerunWorkflowResponse.cs` |
| `RerunWorkflowError` | `src/CircleCi/Errors/RerunWorkflowError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

