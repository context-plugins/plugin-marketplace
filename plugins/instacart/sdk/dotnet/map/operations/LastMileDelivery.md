<!-- Generated file — do not edit; regenerated with the SDK. -->

# LastMileDelivery — operations

Accessor: `client.LastMileDelivery` · Source: `src/Instacart/Api/LastMileDelivery.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateLastMileOrder

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateLastMileOrder(CreateLastMileOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrderResponse`
- **Error**: `ApiException<CreateLastMileOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLastMileOrderRequest` | `src/Instacart/Requests/LastMileDelivery/CreateLastMileOrderRequest.cs` |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | `src/Instacart/Models/CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi.cs` |
| `OrderResponse` | `src/Instacart/Models/OrderResponse.cs` |
| `CreateLastMileOrderError` | `src/Instacart/Errors/CreateLastMileOrderError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### FindLastMileStores

- **Auth**: `options.BearerAuth`
- **Signature**: `FindLastMileStores(FindLastMileStoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StoresResponse`
- **Error**: `ApiException<FindLastMileStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindLastMileStoresRequest` | `src/Instacart/Requests/LastMileDelivery/FindLastMileStoresRequest.cs` |
| `FindStoresRequest` | `src/Instacart/Models/FindStoresRequest.cs` |
| `StoresResponse` | `src/Instacart/Models/StoresResponse.cs` |
| `FindLastMileStoresError` | `src/Instacart/Errors/FindLastMileStoresError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### PreviewLastMileServiceOptions

- **Auth**: `options.BearerAuth`
- **Signature**: `PreviewLastMileServiceOptions(PreviewLastMileServiceOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ServiceOptionsResponse`
- **Error**: `ApiException<PreviewLastMileServiceOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PreviewLastMileServiceOptionsRequest` | `src/Instacart/Requests/LastMileDelivery/PreviewLastMileServiceOptionsRequest.cs` |
| `PreviewServiceOptionsRequest` | `src/Instacart/Models/PreviewServiceOptionsRequest.cs` |
| `ServiceOptionsResponse` | `src/Instacart/Models/ServiceOptionsResponse.cs` |
| `PreviewLastMileServiceOptionsError` | `src/Instacart/Errors/PreviewLastMileServiceOptionsError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### StageLastMileOrder

- **Auth**: `options.BearerAuth`
- **Signature**: `StageLastMileOrder(StageLastMileOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `OrderResponse`
- **Error**: `ApiException<StageLastMileOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StageLastMileOrderRequest` | `src/Instacart/Requests/LastMileDelivery/StageLastMileOrderRequest.cs` |
| `OrderResponse` | `src/Instacart/Models/OrderResponse.cs` |
| `StageLastMileOrderError` | `src/Instacart/Errors/StageLastMileOrderError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

