<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.Pipelines` · Source: `src/Buildkite/Api/Pipelines.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePipeline

- **Auth**: `options.BearerAuth`
- **Signature**: `CreatePipeline(CreatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreatePipelineRequest` | `src/Buildkite/Requests/Pipelines/CreatePipelineRequest.cs` |
| `Pipeline` | `src/Buildkite/Models/Pipeline.cs` |

### DeletePipeline

- **Auth**: `options.BearerAuth`
- **Signature**: `DeletePipeline(DeletePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeletePipelineRequest` | `src/Buildkite/Requests/Pipelines/DeletePipelineRequest.cs` |

### GetPipeline

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPipeline(GetPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelineRequest` | `src/Buildkite/Requests/Pipelines/GetPipelineRequest.cs` |

### ListPipelines

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPipelines(ListPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `IReadOnlyList<Pipeline>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPipelinesRequest` | `src/Buildkite/Requests/Pipelines/ListPipelinesRequest.cs` |
| `Pipeline` | `src/Buildkite/Models/Pipeline.cs` |

### UpdatePipeline

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePipeline(UpdatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdatePipelineRequest` | `src/Buildkite/Requests/Pipelines/UpdatePipelineRequest.cs` |

