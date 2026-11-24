<!-- Generated file — do not edit; regenerated with the SDK. -->

# QueueItems — operations

Accessor: `client.QueueItems` · Source: `src/UiPath/Api/QueueItems.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddQueueItem

- **Auth**: `options.BearerAuth`
- **Signature**: `AddQueueItem(AddQueueItemOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QueueItem`
- **Error**: `ApiException<AddQueueItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddQueueItemOperationRequest` | `src/UiPath/Requests/QueueItems/AddQueueItemOperationRequest.cs` |
| `AddQueueItemRequest` | `src/UiPath/Models/AddQueueItemRequest.cs` |
| `QueueItem` | `src/UiPath/Models/QueueItem.cs` |
| `AddQueueItemError` | `src/UiPath/Errors/AddQueueItemError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### ListQueueItems

- **Auth**: `options.BearerAuth`
- **Signature**: `ListQueueItems(ListQueueItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataQueueItemCollection`
- **Error**: `ApiException<ListQueueItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQueueItemsRequest` | `src/UiPath/Requests/QueueItems/ListQueueItemsRequest.cs` |
| `ODataQueueItemCollection` | `src/UiPath/Models/ODataQueueItemCollection.cs` |
| `ListQueueItemsError` | `src/UiPath/Errors/ListQueueItemsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

