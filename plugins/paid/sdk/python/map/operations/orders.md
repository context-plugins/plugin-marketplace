<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `paid/apis/orders.py` · 19 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.orders.activate

- **Route**: `POST /orders/{orderId}/activate`
- **Server**: `default`
- **Signature**: `def activate(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Order` | `paid/models/order.py` |

### client.orders.activate_and_pay

- **Route**: `POST /orders/{orderId}/activate-and-pay`
- **Server**: `default`
- **Signature**: `def activate_and_pay(order_id: str, authorization: str, *, body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, ActivateAndPayErrorBody]`
- **Error**: `ActivateAndPayErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrdersActivateAndPayRequest` | `paid/models/orders_activate_and_pay_request.py` |
| `OrdersActivateAndPayRequestDict` | `paid/models/orders_activate_and_pay_request.py` |
| `Order` | `paid/models/order.py` |
| `ActivateAndPayErrorBody` | `paid/errors/activate_and_pay_error.py` |
| `Error` | `paid/models/error.py` |

### client.orders.activate_order_by_id

- **Route**: `POST /orders/{id}/activate`
- **Server**: `default`
- **Signature**: `def activate_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Order1`
- **Returns (raw)**: `ApiResult[Order1, ActivateOrderByIdErrorBody]`
- **Error**: `ActivateOrderByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Order1` | `paid/models/order1.py` |
| `ActivateOrderByIdErrorBody` | `paid/errors/activate_order_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.batch_order_seat_assignments

- **Route**: `POST /orders/{id}/seat-assignments`
- **Server**: `default`
- **Signature**: `def batch_order_seat_assignments(id_: str, authorization: str, *, body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `BatchSeatAssignmentsResponse`
- **Returns (raw)**: `ApiResult[BatchSeatAssignmentsResponse, BatchOrderSeatAssignmentsErrorBody]`
- **Error**: `BatchOrderSeatAssignmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchSeatAssignmentsRequest` | `paid/models/batch_seat_assignments_request.py` |
| `BatchSeatAssignmentsRequestDict` | `paid/models/batch_seat_assignments_request.py` |
| `BatchSeatAssignmentsResponse` | `paid/models/batch_seat_assignments_response.py` |
| `BatchOrderSeatAssignmentsErrorBody` | `paid/errors/batch_order_seat_assignments_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.cancel_renewal

- **Route**: `POST /orders/{orderId}/cancel`
- **Server**: `default`
- **Signature**: `def cancel_renewal(order_id: str, authorization: str, *, body: CancelRenewalRequest | CancelRenewalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CancelRenewalResponse`
- **Returns (raw)**: `ApiResult[CancelRenewalResponse, CancelRenewalErrorBody]`
- **Error**: `CancelRenewalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelRenewalRequest` | `paid/models/cancel_renewal_request.py` |
| `CancelRenewalRequestDict` | `paid/models/cancel_renewal_request.py` |
| `CancelRenewalResponse` | `paid/models/cancel_renewal_response.py` |
| `CancelRenewalErrorBody` | `paid/errors/cancel_renewal_error.py` |
| `Error` | `paid/models/error.py` |

### client.orders.create_order

- **Route**: `POST /orders/`
- **Server**: `default`
- **Signature**: `def create_order(authorization: str, *, body: CreateOrderRequest | CreateOrderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Order1`
- **Returns (raw)**: `ApiResult[Order1, CreateOrderErrorBody]`
- **Error**: `CreateOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOrderRequest` | `paid/models/create_order_request.py` |
| `CreateOrderRequestDict` | `paid/models/create_order_request.py` |
| `Order1` | `paid/models/order1.py` |
| `CreateOrderErrorBody` | `paid/errors/create_order_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.create4

- **Route**: `POST /orders`
- **Server**: `default`
- **Signature**: `def create4(authorization: str, *, body: OrderCreate | OrderCreateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `OrderCreate` | `paid/models/order_create.py` |
| `OrderCreateDict` | `paid/models/order_create.py` |
| `Order` | `paid/models/order.py` |

### client.orders.delete_order_by_id

- **Route**: `DELETE /orders/{id}`
- **Server**: `default`
- **Signature**: `def delete_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteOrderByIdErrorBody]`
- **Error**: `DeleteOrderByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteOrderByIdErrorBody` | `paid/errors/delete_order_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.delete4

- **Route**: `DELETE /orders/{orderId}`
- **Server**: `default`
- **Signature**: `def delete4(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.orders.get_invoices

- **Route**: `GET /orders/{orderId}/invoices`
- **Server**: `default`
- **Signature**: `def get_invoices(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `list[InvoicePaidOrdersApi]`
- **Returns (raw)**: `ApiResult[list[InvoicePaidOrdersApi], GetInvoicesErrorBody]`
- **Error**: `GetInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoicePaidOrdersApi` | `paid/models/invoice_paid_orders_api.py` |
| `GetInvoicesErrorBody` | `paid/errors/get_invoices_error.py` |
| `Error` | `paid/models/error.py` |

### client.orders.get_order_by_id

- **Route**: `GET /orders/{id}`
- **Server**: `default`
- **Signature**: `def get_order_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Order1`
- **Returns (raw)**: `ApiResult[Order1, GetOrderByIdErrorBody]`
- **Error**: `GetOrderByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Order1` | `paid/models/order1.py` |
| `GetOrderByIdErrorBody` | `paid/errors/get_order_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.get_order_lines

- **Route**: `GET /orders/{id}/lines`
- **Server**: `default`
- **Signature**: `def get_order_lines(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `OrderLinesResponse`
- **Returns (raw)**: `ApiResult[OrderLinesResponse, GetOrderLinesErrorBody]`
- **Error**: `GetOrderLinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderLinesResponse` | `paid/models/order_lines_response.py` |
| `GetOrderLinesErrorBody` | `paid/errors/get_order_lines_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.get4

- **Route**: `GET /orders/{orderId}`
- **Server**: `default`
- **Signature**: `def get4(order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Order` | `paid/models/order.py` |

### client.orders.list_order_seats

- **Route**: `GET /orders/{id}/seats`
- **Server**: `default`
- **Signature**: `def list_order_seats(id_: str, authorization: str, *, limit: int | None = 10, offset: int | None = None, product_external_id: str | None = None, status: OrdersIdSeatsGetParametersStatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `product_external_id` — query `productExternalId` · `status` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `OrderSeatListResponse`
- **Returns (raw)**: `ApiResult[OrderSeatListResponse, ListOrderSeatsErrorBody]`
- **Error**: `ListOrderSeatsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrdersIdSeatsGetParametersStatusOrStr` | `paid/models/enums/orders_id_seats_get_parameters_status.py` |
| `OrderSeatListResponse` | `paid/models/order_seat_list_response.py` |
| `ListOrderSeatsErrorBody` | `paid/errors/list_order_seats_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.list_orders

- **Route**: `GET /orders/`
- **Server**: `default`
- **Signature**: `def list_orders(authorization: str, *, limit: int | None = 10, offset: int | None = None, customer_id: str | None = None, external_customer_id: str | None = None, external_id: str | None = None, creation_state: OrdersGetParametersCreationStateOrStr | None = None, status: OrdersGetParametersStatusOrStr | None = None, start_date_from: str | None = None, start_date_to: str | None = None, end_date_from: str | None = None, end_date_to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `customer_id` — query `customerId` · `external_customer_id` — query `externalCustomerId` · `external_id` — query `externalId` · `creation_state` — query `creationState` · `status` — query · `start_date_from` — query `startDateFrom` · `start_date_to` — query `startDateTo` · `end_date_from` — query `endDateFrom` · `end_date_to` — query `endDateTo` · `authorization` — header `Authorization`
- **Returns (parsed)**: `OrderListResponse`
- **Returns (raw)**: `ApiResult[OrderListResponse, ListOrdersErrorBody]`
- **Error**: `ListOrdersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrdersGetParametersCreationStateOrStr` | `paid/models/enums/orders_get_parameters_creation_state.py` |
| `OrdersGetParametersStatusOrStr` | `paid/models/enums/orders_get_parameters_status.py` |
| `OrderListResponse` | `paid/models/order_list_response.py` |
| `ListOrdersErrorBody` | `paid/errors/list_orders_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.list4

- **Route**: `GET /orders`
- **Server**: `default`
- **Signature**: `def list4(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `list[Order]`
- **Returns (raw)**: `ApiResult[list[Order], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Order` | `paid/models/order.py` |

### client.orders.schedule_plan_change

- **Route**: `POST /orders/{orderId}/schedule-plan-change`
- **Server**: `default`
- **Signature**: `def schedule_plan_change(order_id: str, authorization: str, *, body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`, `authorization`
- **Params**: `order_id` — path `orderId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ProrationUpgradeResponse`
- **Returns (raw)**: `ApiResult[ProrationUpgradeResponse, SchedulePlanChangeErrorBody]`
- **Error**: `SchedulePlanChangeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProrationUpgradeRequest` | `paid/models/proration_upgrade_request.py` |
| `ProrationUpgradeRequestDict` | `paid/models/proration_upgrade_request.py` |
| `ProrationUpgradeResponse` | `paid/models/proration_upgrade_response.py` |
| `SchedulePlanChangeErrorBody` | `paid/errors/schedule_plan_change_error.py` |
| `Error` | `paid/models/error.py` |

### client.orders.update_order_by_id

- **Route**: `PUT /orders/{id}`
- **Server**: `default`
- **Signature**: `def update_order_by_id(id_: str, authorization: str, *, body: UpdateOrderRequest | UpdateOrderRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Order1`
- **Returns (raw)**: `ApiResult[Order1, UpdateOrderByIdErrorBody]`
- **Error**: `UpdateOrderByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateOrderRequest` | `paid/models/update_order_request.py` |
| `UpdateOrderRequestDict` | `paid/models/update_order_request.py` |
| `Order1` | `paid/models/order1.py` |
| `UpdateOrderByIdErrorBody` | `paid/errors/update_order_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.orders.update_order_seat_assignment

- **Route**: `PUT /orders/{id}/seats/{seatId}`
- **Server**: `default`
- **Signature**: `def update_order_seat_assignment(id_: str, seat_id: str, authorization: str, *, body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `seat_id`, `authorization`
- **Params**: `id_` — path `id` · `seat_id` — path `seatId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `OrderSeat`
- **Returns (raw)**: `ApiResult[OrderSeat, UpdateOrderSeatAssignmentErrorBody]`
- **Error**: `UpdateOrderSeatAssignmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSeatAssignmentRequest` | `paid/models/update_seat_assignment_request.py` |
| `UpdateSeatAssignmentRequestDict` | `paid/models/update_seat_assignment_request.py` |
| `OrderSeat` | `paid/models/order_seat.py` |
| `UpdateOrderSeatAssignmentErrorBody` | `paid/errors/update_order_seat_assignment_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

