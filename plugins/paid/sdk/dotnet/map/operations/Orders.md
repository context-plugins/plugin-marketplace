<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.Orders` · Source: `src/Paid/Api/Orders.cs` · 19 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Activate

- **Signature**: `Activate(ActivateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `Order`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ActivateRequest` | `src/Paid/Requests/Orders/ActivateRequest.cs` |
| `Order` | `src/Paid/Models/Order.cs` |

### ActivateAndPay

- **Signature**: `ActivateAndPay(ActivateAndPayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `Order`
- **Error**: `ApiException<ActivateAndPayError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateAndPayRequest` | `src/Paid/Requests/Orders/ActivateAndPayRequest.cs` |
| `OrdersActivateAndPayRequest` | `src/Paid/Models/OrdersActivateAndPayRequest.cs` |
| `Order` | `src/Paid/Models/Order.cs` |
| `ActivateAndPayError` | `src/Paid/Errors/ActivateAndPayError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### ActivateOrderById

- **Signature**: `ActivateOrderById(ActivateOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Order1`
- **Error**: `ApiException<ActivateOrderByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateOrderByIdRequest` | `src/Paid/Requests/Orders/ActivateOrderByIdRequest.cs` |
| `Order1` | `src/Paid/Models/Order1.cs` |
| `ActivateOrderByIdError` | `src/Paid/Errors/ActivateOrderByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### BatchOrderSeatAssignments

- **Signature**: `BatchOrderSeatAssignments(BatchOrderSeatAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `BatchSeatAssignmentsResponse`
- **Error**: `ApiException<BatchOrderSeatAssignmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchOrderSeatAssignmentsRequest` | `src/Paid/Requests/Orders/BatchOrderSeatAssignmentsRequest.cs` |
| `BatchSeatAssignmentsRequest` | `src/Paid/Models/BatchSeatAssignmentsRequest.cs` |
| `BatchSeatAssignmentsResponse` | `src/Paid/Models/BatchSeatAssignmentsResponse.cs` |
| `BatchOrderSeatAssignmentsError` | `src/Paid/Errors/BatchOrderSeatAssignmentsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### CancelRenewal

- **Signature**: `CancelRenewal(CancelRenewalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `CancelRenewalResponse`
- **Error**: `ApiException<CancelRenewalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelRenewalOperationRequest` | `src/Paid/Requests/Orders/CancelRenewalOperationRequest.cs` |
| `CancelRenewalRequest` | `src/Paid/Models/CancelRenewalRequest.cs` |
| `CancelRenewalResponse` | `src/Paid/Models/CancelRenewalResponse.cs` |
| `CancelRenewalError` | `src/Paid/Errors/CancelRenewalError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### Create4

- **Signature**: `Create4(Create4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Order`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Create4Request` | `src/Paid/Requests/Orders/Create4Request.cs` |
| `OrderCreate` | `src/Paid/Models/OrderCreate.cs` |
| `Order` | `src/Paid/Models/Order.cs` |

### CreateOrder

- **Signature**: `CreateOrder(CreateOrderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Order1`
- **Error**: `ApiException<CreateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrderOperationRequest` | `src/Paid/Requests/Orders/CreateOrderOperationRequest.cs` |
| `CreateOrderRequest` | `src/Paid/Models/CreateOrderRequest.cs` |
| `Order1` | `src/Paid/Models/Order1.cs` |
| `CreateOrderError` | `src/Paid/Errors/CreateOrderError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Delete4

- **Signature**: `Delete4(Delete4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Delete4Request` | `src/Paid/Requests/Orders/Delete4Request.cs` |

### DeleteOrderById

- **Signature**: `DeleteOrderById(DeleteOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<DeleteOrderByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteOrderByIdRequest` | `src/Paid/Requests/Orders/DeleteOrderByIdRequest.cs` |
| `DeleteOrderByIdError` | `src/Paid/Errors/DeleteOrderByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Get4

- **Signature**: `Get4(Get4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `Order`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Get4Request` | `src/Paid/Requests/Orders/Get4Request.cs` |
| `Order` | `src/Paid/Models/Order.cs` |

### GetInvoices

- **Signature**: `GetInvoices(GetInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `IReadOnlyList<InvoicePaidOrdersApi>`
- **Error**: `ApiException<GetInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInvoicesRequest` | `src/Paid/Requests/Orders/GetInvoicesRequest.cs` |
| `InvoicePaidOrdersApi` | `src/Paid/Models/InvoicePaidOrdersApi.cs` |
| `GetInvoicesError` | `src/Paid/Errors/GetInvoicesError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### GetOrderById

- **Signature**: `GetOrderById(GetOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Order1`
- **Error**: `ApiException<GetOrderByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderByIdRequest` | `src/Paid/Requests/Orders/GetOrderByIdRequest.cs` |
| `Order1` | `src/Paid/Models/Order1.cs` |
| `GetOrderByIdError` | `src/Paid/Errors/GetOrderByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetOrderLines

- **Signature**: `GetOrderLines(GetOrderLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `OrderLinesResponse`
- **Error**: `ApiException<GetOrderLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrderLinesRequest` | `src/Paid/Requests/Orders/GetOrderLinesRequest.cs` |
| `OrderLinesResponse` | `src/Paid/Models/OrderLinesResponse.cs` |
| `GetOrderLinesError` | `src/Paid/Errors/GetOrderLinesError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### List4

- **Signature**: `List4(List4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `IReadOnlyList<Order>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `List4Request` | `src/Paid/Requests/Orders/List4Request.cs` |
| `Order` | `src/Paid/Models/Order.cs` |

### ListOrderSeats

- **Signature**: `ListOrderSeats(ListOrderSeatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `productExternalId` ← `ProductExternalId`, `status` ← `Status`
- **Returns**: `OrderSeatListResponse`
- **Error**: `ApiException<ListOrderSeatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrderSeatsRequest` | `src/Paid/Requests/Orders/ListOrderSeatsRequest.cs` |
| `OrdersIdSeatsGetParametersStatus` | `src/Paid/Models/Enums/OrdersIdSeatsGetParametersStatus.cs` |
| `OrderSeatListResponse` | `src/Paid/Models/OrderSeatListResponse.cs` |
| `ListOrderSeatsError` | `src/Paid/Errors/ListOrderSeatsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListOrders

- **Signature**: `ListOrders(ListOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `customerId` ← `CustomerId`, `externalCustomerId` ← `ExternalCustomerId`, `externalId` ← `ExternalId`, `creationState` ← `CreationState`, `status` ← `Status`, `startDateFrom` ← `StartDateFrom`, `startDateTo` ← `StartDateTo`, `endDateFrom` ← `EndDateFrom`, `endDateTo` ← `EndDateTo`
- **Returns**: `OrderListResponse`
- **Error**: `ApiException<ListOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrdersRequest` | `src/Paid/Requests/Orders/ListOrdersRequest.cs` |
| `OrdersGetParametersCreationState` | `src/Paid/Models/Enums/OrdersGetParametersCreationState.cs` |
| `OrdersGetParametersStatus` | `src/Paid/Models/Enums/OrdersGetParametersStatus.cs` |
| `OrderListResponse` | `src/Paid/Models/OrderListResponse.cs` |
| `ListOrdersError` | `src/Paid/Errors/ListOrdersError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### SchedulePlanChange

- **Signature**: `SchedulePlanChange(SchedulePlanChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Authorization`
- **Returns**: `ProrationUpgradeResponse`
- **Error**: `ApiException<SchedulePlanChangeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SchedulePlanChangeRequest` | `src/Paid/Requests/Orders/SchedulePlanChangeRequest.cs` |
| `ProrationUpgradeRequest` | `src/Paid/Models/ProrationUpgradeRequest.cs` |
| `ProrationUpgradeResponse` | `src/Paid/Models/ProrationUpgradeResponse.cs` |
| `SchedulePlanChangeError` | `src/Paid/Errors/SchedulePlanChangeError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### UpdateOrderById

- **Signature**: `UpdateOrderById(UpdateOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Order1`
- **Error**: `ApiException<UpdateOrderByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrderByIdRequest` | `src/Paid/Requests/Orders/UpdateOrderByIdRequest.cs` |
| `UpdateOrderRequest` | `src/Paid/Models/UpdateOrderRequest.cs` |
| `Order1` | `src/Paid/Models/Order1.cs` |
| `UpdateOrderByIdError` | `src/Paid/Errors/UpdateOrderByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateOrderSeatAssignment

- **Signature**: `UpdateOrderSeatAssignment(UpdateOrderSeatAssignmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `SeatId`, `Authorization`
- **Returns**: `OrderSeat`
- **Error**: `ApiException<UpdateOrderSeatAssignmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrderSeatAssignmentRequest` | `src/Paid/Requests/Orders/UpdateOrderSeatAssignmentRequest.cs` |
| `UpdateSeatAssignmentRequest` | `src/Paid/Models/UpdateSeatAssignmentRequest.cs` |
| `OrderSeat` | `src/Paid/Models/OrderSeat.cs` |
| `UpdateOrderSeatAssignmentError` | `src/Paid/Errors/UpdateOrderSeatAssignmentError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

