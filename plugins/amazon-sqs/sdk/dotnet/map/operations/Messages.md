<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.Messages` · Source: `src/AmazonSqs/Api/Messages.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelMessageMoveTask

- **Auth**: `options.Sigv4`
- **Signature**: `CancelMessageMoveTask(CancelMessageMoveTaskOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CancelMessageMoveTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelMessageMoveTaskOperationRequest` | `src/AmazonSqs/Requests/Messages/CancelMessageMoveTaskOperationRequest.cs` |
| `XAmzTarget2` | `src/AmazonSqs/Models/Enums/XAmzTarget2.cs` |
| `CancelMessageMoveTaskError` | `src/AmazonSqs/Errors/CancelMessageMoveTaskError.cs` |

### ChangeMessageVisibility

- **Auth**: `options.Sigv4`
- **Signature**: `ChangeMessageVisibility(ChangeMessageVisibilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ChangeMessageVisibilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChangeMessageVisibilityOperationRequest` | `src/AmazonSqs/Requests/Messages/ChangeMessageVisibilityOperationRequest.cs` |
| `XAmzTarget5` | `src/AmazonSqs/Models/Enums/XAmzTarget5.cs` |
| `ChangeMessageVisibilityError` | `src/AmazonSqs/Errors/ChangeMessageVisibilityError.cs` |

### ChangeMessageVisibilityBatch

- **Auth**: `options.Sigv4`
- **Signature**: `ChangeMessageVisibilityBatch(ChangeMessageVisibilityBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ChangeMessageVisibilityBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChangeMessageVisibilityBatchOperationRequest` | `src/AmazonSqs/Requests/Messages/ChangeMessageVisibilityBatchOperationRequest.cs` |
| `XAmzTarget6` | `src/AmazonSqs/Models/Enums/XAmzTarget6.cs` |
| `ChangeMessageVisibilityBatchError` | `src/AmazonSqs/Errors/ChangeMessageVisibilityBatchError.cs` |

### DeleteMessage

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteMessage(DeleteMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMessageOperationRequest` | `src/AmazonSqs/Requests/Messages/DeleteMessageOperationRequest.cs` |
| `XAmzTarget` | `src/AmazonSqs/Models/Enums/XAmzTarget.cs` |
| `DeleteMessageError` | `src/AmazonSqs/Errors/DeleteMessageError.cs` |

### DeleteMessageBatch

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteMessageBatch(DeleteMessageBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMessageBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMessageBatchOperationRequest` | `src/AmazonSqs/Requests/Messages/DeleteMessageBatchOperationRequest.cs` |
| `XAmzTarget8` | `src/AmazonSqs/Models/Enums/XAmzTarget8.cs` |
| `DeleteMessageBatchError` | `src/AmazonSqs/Errors/DeleteMessageBatchError.cs` |

### ListMessageMoveTasks

- **Auth**: `options.Sigv4`
- **Signature**: `ListMessageMoveTasks(ListMessageMoveTasksOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMessageMoveTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMessageMoveTasksOperationRequest` | `src/AmazonSqs/Requests/Messages/ListMessageMoveTasksOperationRequest.cs` |
| `XAmzTarget3` | `src/AmazonSqs/Models/Enums/XAmzTarget3.cs` |
| `ListMessageMoveTasksError` | `src/AmazonSqs/Errors/ListMessageMoveTasksError.cs` |

### ReceiveMessage

- **Auth**: `options.Sigv4`
- **Signature**: `ReceiveMessage(ReceiveMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ReceiveMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReceiveMessageOperationRequest` | `src/AmazonSqs/Requests/Messages/ReceiveMessageOperationRequest.cs` |
| `XAmzTarget7` | `src/AmazonSqs/Models/Enums/XAmzTarget7.cs` |
| `ReceiveMessageError` | `src/AmazonSqs/Errors/ReceiveMessageError.cs` |

### SendMessage

- **Auth**: `options.Sigv4`
- **Signature**: `SendMessage(SendMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendMessageOperationRequest` | `src/AmazonSqs/Requests/Messages/SendMessageOperationRequest.cs` |
| `XAmzTarget1` | `src/AmazonSqs/Models/Enums/XAmzTarget1.cs` |
| `SendMessageError` | `src/AmazonSqs/Errors/SendMessageError.cs` |

### SendMessageBatch

- **Auth**: `options.Sigv4`
- **Signature**: `SendMessageBatch(SendMessageBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendMessageBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendMessageBatchOperationRequest` | `src/AmazonSqs/Requests/Messages/SendMessageBatchOperationRequest.cs` |
| `XAmzTarget9` | `src/AmazonSqs/Models/Enums/XAmzTarget9.cs` |
| `SendMessageBatchError` | `src/AmazonSqs/Errors/SendMessageBatchError.cs` |

### StartMessageMoveTask

- **Auth**: `options.Sigv4`
- **Signature**: `StartMessageMoveTask(StartMessageMoveTaskOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartMessageMoveTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMessageMoveTaskOperationRequest` | `src/AmazonSqs/Requests/Messages/StartMessageMoveTaskOperationRequest.cs` |
| `XAmzTarget4` | `src/AmazonSqs/Models/Enums/XAmzTarget4.cs` |
| `StartMessageMoveTaskError` | `src/AmazonSqs/Errors/StartMessageMoveTaskError.cs` |

