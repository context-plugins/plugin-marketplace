<!-- Generated file — do not edit; regenerated with the SDK. -->

# EpicWorkflowApi — operations

Accessor: `client.EpicWorkflowApi` · Source: `src/Shortcut/Api/EpicWorkflowApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEpicWorkflow

- **Auth**: `options.ApiToken`
- **Signature**: `GetEpicWorkflow(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `EpicWorkflow`
- **Error**: `ApiException<GetEpicWorkflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EpicWorkflow` | `src/Shortcut/Models/EpicWorkflow.cs` |
| `GetEpicWorkflowError` | `src/Shortcut/Errors/GetEpicWorkflowError.cs` |

