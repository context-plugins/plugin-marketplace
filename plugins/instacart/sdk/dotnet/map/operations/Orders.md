<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.Orders` · Source: `src/Instacart/Api/Orders.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOrderHandling

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrderHandling(GetOrderHandlingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `OrderHandlingResponse`
- **Error**: `ApiException<GetOrderHandlingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderHandlingRequest` | `src/Instacart/Requests/Orders/GetOrderHandlingRequest.cs` |
| `OrderHandlingResponse` | `src/Instacart/Models/OrderHandlingResponse.cs` |
| `GetOrderHandlingError` | `src/Instacart/Errors/GetOrderHandlingError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### GetOrderItems

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrderItems(GetOrderItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `OrderItemsResponse`
- **Error**: `ApiException<GetOrderItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderItemsRequest` | `src/Instacart/Requests/Orders/GetOrderItemsRequest.cs` |
| `OrderItemsResponse` | `src/Instacart/Models/OrderItemsResponse.cs` |
| `GetOrderItemsError` | `src/Instacart/Errors/GetOrderItemsError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

