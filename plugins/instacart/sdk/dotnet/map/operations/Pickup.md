<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pickup — operations

Accessor: `client.Pickup` · Source: `src/Instacart/Api/Pickup.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePickupOrder

- **Auth**: `options.BearerAuth`
- **Signature**: `CreatePickupOrder(CreatePickupOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `OrderResponse`
- **Error**: `ApiException<CreatePickupOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePickupOrderRequest` | `src/Instacart/Requests/Pickup/CreatePickupOrderRequest.cs` |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | `src/Instacart/Models/CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi.cs` |
| `OrderResponse` | `src/Instacart/Models/OrderResponse.cs` |
| `CreatePickupOrderError` | `src/Instacart/Errors/CreatePickupOrderError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### FindPickupStores

- **Auth**: `options.BearerAuth`
- **Signature**: `FindPickupStores(FindPickupStoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StoresResponse`
- **Error**: `ApiException<FindPickupStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindPickupStoresRequest` | `src/Instacart/Requests/Pickup/FindPickupStoresRequest.cs` |
| `FindStoresRequest` | `src/Instacart/Models/FindStoresRequest.cs` |
| `StoresResponse` | `src/Instacart/Models/StoresResponse.cs` |
| `FindPickupStoresError` | `src/Instacart/Errors/FindPickupStoresError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### PreviewPickupTimeSlots

- **Auth**: `options.BearerAuth`
- **Signature**: `PreviewPickupTimeSlots(PreviewPickupTimeSlotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ServiceOptionsResponse`
- **Error**: `ApiException<PreviewPickupTimeSlotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PreviewPickupTimeSlotsRequest` | `src/Instacart/Requests/Pickup/PreviewPickupTimeSlotsRequest.cs` |
| `PreviewServiceOptionsRequest` | `src/Instacart/Models/PreviewServiceOptionsRequest.cs` |
| `ServiceOptionsResponse` | `src/Instacart/Models/ServiceOptionsResponse.cs` |
| `PreviewPickupTimeSlotsError` | `src/Instacart/Errors/PreviewPickupTimeSlotsError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

