<!-- Generated file — do not edit; regenerated with the SDK. -->

# PipelineTemplates — operations

Accessor: `client.PipelineTemplates` · Source: `src/Buildkite/Api/PipelineTemplates.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPipelineTemplates

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPipelineTemplates(ListPipelineTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPipelineTemplatesRequest` | `src/Buildkite/Requests/PipelineTemplates/ListPipelineTemplatesRequest.cs` |

