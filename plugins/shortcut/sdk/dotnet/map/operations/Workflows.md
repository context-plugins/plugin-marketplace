<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workflows — operations

Accessor: `client.Workflows` · Source: `src/Shortcut/Api/Workflows.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetWorkflow

- **Auth**: `options.ApiToken`
- **Signature**: `GetWorkflow(GetWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkflowPublicId`
- **Returns**: `Workflow`
- **Error**: `ApiException<GetWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkflowRequest` | `src/Shortcut/Requests/Workflows/GetWorkflowRequest.cs` |
| `Workflow` | `src/Shortcut/Models/Workflow.cs` |
| `GetWorkflowError` | `src/Shortcut/Errors/GetWorkflowError.cs` |

### ListWorkflows

- **Auth**: `options.ApiToken`
- **Signature**: `ListWorkflows(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Workflow>`
- **Error**: `ApiException<ListWorkflowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Workflow` | `src/Shortcut/Models/Workflow.cs` |
| `ListWorkflowsError` | `src/Shortcut/Errors/ListWorkflowsError.cs` |

