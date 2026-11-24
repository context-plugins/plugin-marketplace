<!-- Generated file — do not edit; regenerated with the SDK. -->

# Idr — operations

Accessor: `client.Idr` · Source: `src/Hightouch/Api/Idr.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListIdrRuns

- **Auth**: `options.BearerAuth`
- **Signature**: `ListIdrRuns(ListIdrRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GraphId`
- **Query params (wire ← C#)**: `runId` ← `RunId`, `after` ← `After`, `before` ← `Before`, `limit` ← `Limit`, `offset` ← `Offset`, `orderBy` ← `OrderBy`
- **Returns**: `ListIdrRunsOutput`
- **Error**: `ApiException<ListIdrRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListIdrRunsRequest` | `src/Hightouch/Requests/Idr/ListIdrRunsRequest.cs` |
| `OrderByHightouchIdrApi` | `src/Hightouch/Models/Enums/OrderByHightouchIdrApi.cs` |
| `ListIdrRunsOutput` | `src/Hightouch/Models/ListIdrRunsOutput.cs` |
| `ListIdrRunsError` | `src/Hightouch/Errors/ListIdrRunsError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### QueueForReprocessing

- **Auth**: `options.BearerAuth`
- **Signature**: `QueueForReprocessing(QueueForReprocessingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GraphId`
- **Returns**: `IdrQueueForReprocessingOutput`
- **Error**: `ApiException<QueueForReprocessingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueueForReprocessingRequest` | `src/Hightouch/Requests/Idr/QueueForReprocessingRequest.cs` |
| `IdrQueueForReprocessingInput` | `src/Hightouch/Models/IdrQueueForReprocessingInput.cs` |
| `IdrQueueForReprocessingOutput` | `src/Hightouch/Models/IdrQueueForReprocessingOutput.cs` |
| `QueueForReprocessingError` | `src/Hightouch/Errors/QueueForReprocessingError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ReprocessStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `ReprocessStatus(ReprocessStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GraphId`, `RequestId`
- **Returns**: `IdrReprocessStatusOutput`
- **Error**: `ApiException<ReprocessStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReprocessStatusRequest` | `src/Hightouch/Requests/Idr/ReprocessStatusRequest.cs` |
| `IdrReprocessStatusOutput` | `src/Hightouch/Models/IdrReprocessStatusOutput.cs` |
| `ReprocessStatusError` | `src/Hightouch/Errors/ReprocessStatusError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### TriggerIdrRun

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerIdrRun(TriggerIdrRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GraphId`
- **Returns**: `TriggerRunIdrOutput`
- **Error**: `ApiException<TriggerIdrRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerIdrRunRequest` | `src/Hightouch/Requests/Idr/TriggerIdrRunRequest.cs` |
| `TriggerRunIdrInput` | `src/Hightouch/Models/TriggerRunIdrInput.cs` |
| `TriggerRunIdrOutput` | `src/Hightouch/Models/TriggerRunIdrOutput.cs` |
| `TriggerIdrRunError` | `src/Hightouch/Errors/TriggerIdrRunError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

