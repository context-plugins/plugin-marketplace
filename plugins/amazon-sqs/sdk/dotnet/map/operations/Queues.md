<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.Queues` · Source: `src/AmazonSqs/Api/Queues.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateQueue

- **Auth**: `options.Sigv4`
- **Signature**: `CreateQueue(CreateQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateQueueOperationRequest` | `src/AmazonSqs/Requests/Queues/CreateQueueOperationRequest.cs` |
| `XAmzTargetAmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTargetAmazonSimpleQueueServiceQueuesApi.cs` |
| `CreateQueueError` | `src/AmazonSqs/Errors/CreateQueueError.cs` |

### DeleteQueue

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteQueue(DeleteQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteQueueOperationRequest` | `src/AmazonSqs/Requests/Queues/DeleteQueueOperationRequest.cs` |
| `XAmzTarget1AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget1AmazonSimpleQueueServiceQueuesApi.cs` |
| `DeleteQueueError` | `src/AmazonSqs/Errors/DeleteQueueError.cs` |

### GetQueueAttributes

- **Auth**: `options.Sigv4`
- **Signature**: `GetQueueAttributes(GetQueueAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetQueueAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQueueAttributesOperationRequest` | `src/AmazonSqs/Requests/Queues/GetQueueAttributesOperationRequest.cs` |
| `XAmzTarget6AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget6AmazonSimpleQueueServiceQueuesApi.cs` |
| `GetQueueAttributesError` | `src/AmazonSqs/Errors/GetQueueAttributesError.cs` |

### GetQueueUrl

- **Auth**: `options.Sigv4`
- **Signature**: `GetQueueUrl(GetQueueUrlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetQueueUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQueueUrlOperationRequest` | `src/AmazonSqs/Requests/Queues/GetQueueUrlOperationRequest.cs` |
| `XAmzTarget8AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget8AmazonSimpleQueueServiceQueuesApi.cs` |
| `GetQueueUrlError` | `src/AmazonSqs/Errors/GetQueueUrlError.cs` |

### ListDeadLetterSourceQueues

- **Auth**: `options.Sigv4`
- **Signature**: `ListDeadLetterSourceQueues(ListDeadLetterSourceQueuesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDeadLetterSourceQueuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDeadLetterSourceQueuesOperationRequest` | `src/AmazonSqs/Requests/Queues/ListDeadLetterSourceQueuesOperationRequest.cs` |
| `XAmzTarget9AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget9AmazonSimpleQueueServiceQueuesApi.cs` |
| `ListDeadLetterSourceQueuesError` | `src/AmazonSqs/Errors/ListDeadLetterSourceQueuesError.cs` |

### ListQueues

- **Auth**: `options.Sigv4`
- **Signature**: `ListQueues(ListQueuesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListQueuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQueuesOperationRequest` | `src/AmazonSqs/Requests/Queues/ListQueuesOperationRequest.cs` |
| `XAmzTarget2AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget2AmazonSimpleQueueServiceQueuesApi.cs` |
| `ListQueuesError` | `src/AmazonSqs/Errors/ListQueuesError.cs` |

### PurgeQueue

- **Auth**: `options.Sigv4`
- **Signature**: `PurgeQueue(PurgeQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PurgeQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurgeQueueOperationRequest` | `src/AmazonSqs/Requests/Queues/PurgeQueueOperationRequest.cs` |
| `XAmzTarget5AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget5AmazonSimpleQueueServiceQueuesApi.cs` |
| `PurgeQueueError` | `src/AmazonSqs/Errors/PurgeQueueError.cs` |

### SetQueueAttributes

- **Auth**: `options.Sigv4`
- **Signature**: `SetQueueAttributes(SetQueueAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetQueueAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetQueueAttributesOperationRequest` | `src/AmazonSqs/Requests/Queues/SetQueueAttributesOperationRequest.cs` |
| `XAmzTarget7AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget7AmazonSimpleQueueServiceQueuesApi.cs` |
| `SetQueueAttributesError` | `src/AmazonSqs/Errors/SetQueueAttributesError.cs` |

### TagQueue

- **Auth**: `options.Sigv4`
- **Signature**: `TagQueue(TagQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagQueueOperationRequest` | `src/AmazonSqs/Requests/Queues/TagQueueOperationRequest.cs` |
| `XAmzTarget3AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget3AmazonSimpleQueueServiceQueuesApi.cs` |
| `TagQueueError` | `src/AmazonSqs/Errors/TagQueueError.cs` |

### UntagQueue

- **Auth**: `options.Sigv4`
- **Signature**: `UntagQueue(UntagQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagQueueOperationRequest` | `src/AmazonSqs/Requests/Queues/UntagQueueOperationRequest.cs` |
| `XAmzTarget4AmazonSimpleQueueServiceQueuesApi` | `src/AmazonSqs/Models/Enums/XAmzTarget4AmazonSimpleQueueServiceQueuesApi.cs` |
| `UntagQueueError` | `src/AmazonSqs/Errors/UntagQueueError.cs` |

