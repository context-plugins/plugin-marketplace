<!-- Generated file — do not edit; regenerated with the SDK. -->

# IdGraphs — operations

Accessor: `client.IdGraphs` · Source: `src/Hightouch/Api/IdGraphs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TriggerRunIdGraph

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerRunIdGraph(TriggerRunIdGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GraphId`
- **Returns**: `TriggerRunIdrOutput`
- **Error**: `ApiException<TriggerRunIdGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerRunIdGraphRequest` | `src/Hightouch/Requests/IdGraphs/TriggerRunIdGraphRequest.cs` |
| `TriggerRunIdrInput` | `src/Hightouch/Models/TriggerRunIdrInput.cs` |
| `TriggerRunIdrOutput` | `src/Hightouch/Models/TriggerRunIdrOutput.cs` |
| `TriggerRunIdGraphError` | `src/Hightouch/Errors/TriggerRunIdGraphError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

