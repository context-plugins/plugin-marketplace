<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pickup — operations

Accessor: `client.pickup` · Source: `src/resources/pickup.ts` · 3 operations · Request and error types: namespace `Pickup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPickupOrder

- **Signature**: `createPickupOrder(request: Pickup.CreatePickupOrderRequest, options?: RequestOptions): ApiPromise<OrderResponse, Pickup.CreatePickupOrderError>`
- **Wire**: `POST /v2/fulfillment/users/{user_id}/orders/pickup`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrderResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Pickup.CreatePickupOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pickup.CreatePickupOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi` | `createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiSchema` | `src/models/create-order-request-instacart-connect-fulfillment-last-mile-delivery-api.ts` |
| `OrderResponse` | `orderResponseSchema` | `src/models/order-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### findPickupStores

- **Signature**: `findPickupStores(request: Pickup.FindPickupStoresRequest, options?: RequestOptions): ApiPromise<StoresResponse, Pickup.FindPickupStoresError>`
- **Wire**: `POST /v2/fulfillment/stores/pickup`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoresResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Pickup.FindPickupStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pickup.FindPickupStoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FindStoresRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindStoresRequest` | `findStoresRequestSchema` | `src/models/find-stores-request.ts` |
| `StoresResponse` | `storesResponseSchema` | `src/models/stores-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### previewPickupTimeSlots

- **Signature**: `previewPickupTimeSlots(request: Pickup.PreviewPickupTimeSlotsRequest, options?: RequestOptions): ApiPromise<ServiceOptionsResponse, Pickup.PreviewPickupTimeSlotsError>`
- **Wire**: `POST /v2/fulfillment/users/{user_id}/service_options/pickup`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceOptionsResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Pickup.PreviewPickupTimeSlotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pickup.PreviewPickupTimeSlotsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `PreviewServiceOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PreviewServiceOptionsRequest` | `previewServiceOptionsRequestSchema` | `src/models/preview-service-options-request.ts` |
| `ServiceOptionsResponse` | `serviceOptionsResponseSchema` | `src/models/service-options-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

