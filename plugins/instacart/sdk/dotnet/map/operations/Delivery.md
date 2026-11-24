<!-- Generated file — do not edit; regenerated with the SDK. -->

# Delivery — operations

Accessor: `client.Delivery` · Source: `src/Instacart/Api/Delivery.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelOrder

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelOrder(CancelOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `OrderId`
- **Returns**: `OrderResponse`
- **Error**: `ApiException<CancelOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelOrderRequest` | `src/Instacart/Requests/Delivery/CancelOrderRequest.cs` |
| `OrderResponse` | `src/Instacart/Models/OrderResponse.cs` |
| `CancelOrderError` | `src/Instacart/Errors/CancelOrderError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### CreateDeliveryOrder

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateDeliveryOrder(CreateDeliveryOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrderResponse`
- **Error**: `ApiException<CreateDeliveryOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDeliveryOrderRequest` | `src/Instacart/Requests/Delivery/CreateDeliveryOrderRequest.cs` |
| `CreateOrderRequest` | `src/Instacart/Models/CreateOrderRequest.cs` |
| `OrderResponse` | `src/Instacart/Models/OrderResponse.cs` |
| `CreateDeliveryOrderError` | `src/Instacart/Errors/CreateDeliveryOrderError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### FindDeliveryStores

- **Auth**: `options.BearerAuth`
- **Signature**: `FindDeliveryStores(FindDeliveryStoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StoresResponse`
- **Error**: `ApiException<FindDeliveryStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindDeliveryStoresRequest` | `src/Instacart/Requests/Delivery/FindDeliveryStoresRequest.cs` |
| `FindStoresRequest` | `src/Instacart/Models/FindStoresRequest.cs` |
| `StoresResponse` | `src/Instacart/Models/StoresResponse.cs` |
| `FindDeliveryStoresError` | `src/Instacart/Errors/FindDeliveryStoresError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### GetOrder

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOrder(GetOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `OrderId`
- **Returns**: `OrderResponse`
- **Error**: `ApiException<GetOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderRequest` | `src/Instacart/Requests/Delivery/GetOrderRequest.cs` |
| `OrderResponse` | `src/Instacart/Models/OrderResponse.cs` |
| `GetOrderError` | `src/Instacart/Errors/GetOrderError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### PreviewDeliveryTimeSlots

- **Auth**: `options.BearerAuth`
- **Signature**: `PreviewDeliveryTimeSlots(PreviewDeliveryTimeSlotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ServiceOptionsResponse`
- **Error**: `ApiException<PreviewDeliveryTimeSlotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PreviewDeliveryTimeSlotsRequest` | `src/Instacart/Requests/Delivery/PreviewDeliveryTimeSlotsRequest.cs` |
| `PreviewServiceOptionsRequest` | `src/Instacart/Models/PreviewServiceOptionsRequest.cs` |
| `ServiceOptionsResponse` | `src/Instacart/Models/ServiceOptionsResponse.cs` |
| `PreviewDeliveryTimeSlotsError` | `src/Instacart/Errors/PreviewDeliveryTimeSlotsError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### ReserveDeliveryTimeSlot

- **Auth**: `options.BearerAuth`
- **Signature**: `ReserveDeliveryTimeSlot(ReserveDeliveryTimeSlotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ServiceOptionHoldResponse`
- **Error**: `ApiException<ReserveDeliveryTimeSlotError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReserveDeliveryTimeSlotRequest` | `src/Instacart/Requests/Delivery/ReserveDeliveryTimeSlotRequest.cs` |
| `ReserveTimeSlotRequest` | `src/Instacart/Models/ReserveTimeSlotRequest.cs` |
| `ServiceOptionHoldResponse` | `src/Instacart/Models/ServiceOptionHoldResponse.cs` |
| `ReserveDeliveryTimeSlotError` | `src/Instacart/Errors/ReserveDeliveryTimeSlotError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

