<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.Pipelines` · Source: `src/RelmCrm/Api/Pipelines.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddStage

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `AddStage(AddStageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AddStageRequest` | `src/RelmCrm/Requests/Pipelines/AddStageRequest.cs` |
| `PipelinesStagesRequest` | `src/RelmCrm/Models/PipelinesStagesRequest.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### CreatePipeline

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreatePipeline(CreatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreatePipelineRequest` | `src/RelmCrm/Requests/Pipelines/CreatePipelineRequest.cs` |
| `PipelineInput` | `src/RelmCrm/Models/PipelineInput.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### DeletePipeline

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeletePipeline(DeletePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeletePipelineRequest` | `src/RelmCrm/Requests/Pipelines/DeletePipelineRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### DeleteStage

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteStage(DeleteStageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Stage`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteStageRequest` | `src/RelmCrm/Requests/Pipelines/DeleteStageRequest.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### GetPipeline

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetPipeline(GetPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelineRequest` | `src/RelmCrm/Requests/Pipelines/GetPipelineRequest.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### ListPipelines

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListPipelines(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### ReorderStages

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ReorderStages(ReorderStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReorderStagesRequest` | `src/RelmCrm/Requests/Pipelines/ReorderStagesRequest.cs` |
| `PipelinesStagesReorderRequest` | `src/RelmCrm/Models/PipelinesStagesReorderRequest.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### SetDefaultPipeline

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `SetDefaultPipeline(SetDefaultPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SetDefaultPipelineRequest` | `src/RelmCrm/Requests/Pipelines/SetDefaultPipelineRequest.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### UpdatePipeline

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdatePipeline(UpdatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdatePipelineRequest` | `src/RelmCrm/Requests/Pipelines/UpdatePipelineRequest.cs` |
| `PipelinesRequest` | `src/RelmCrm/Models/PipelinesRequest.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

### UpdateStage

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateStage(UpdateStageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Stage`, `Body`
- **Returns**: `Pipeline`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateStageRequest` | `src/RelmCrm/Requests/Pipelines/UpdateStageRequest.cs` |
| `PipelinesStagesRequest1` | `src/RelmCrm/Models/PipelinesStagesRequest1.cs` |
| `Pipeline` | `src/RelmCrm/Models/Pipeline.cs` |

