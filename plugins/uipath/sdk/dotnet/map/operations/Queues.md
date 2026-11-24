<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.Queues` · Source: `src/UiPath/Api/Queues.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateQueue

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateQueue(CreateQueueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QueueDefinition`
- **Error**: `ApiException<CreateQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateQueueRequest` | `src/UiPath/Requests/Queues/CreateQueueRequest.cs` |
| `QueueDefinition` | `src/UiPath/Models/QueueDefinition.cs` |
| `CreateQueueError` | `src/UiPath/Errors/CreateQueueError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### ListQueues

- **Auth**: `options.BearerAuth`
- **Signature**: `ListQueues(ListQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataQueueDefinitionCollection`
- **Error**: `ApiException<ListQueuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQueuesRequest` | `src/UiPath/Requests/Queues/ListQueuesRequest.cs` |
| `ODataQueueDefinitionCollection` | `src/UiPath/Models/ODataQueueDefinitionCollection.cs` |
| `ListQueuesError` | `src/UiPath/Errors/ListQueuesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

