<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deliveries — operations

Accessor: `client.deliveries` · Source: `src/resources/deliveries.ts` · 3 operations · Request and error types: namespace `Deliveries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFormDeliveries

- **Signature**: `getFormDeliveries(request: Deliveries.GetFormDeliveriesRequest, options?: RequestOptions): ApiPromise<DeliveryHealth, Deliveries.GetFormDeliveriesError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/deliveries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeliveryHealth`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Deliveries.GetFormDeliveriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deliveries.GetFormDeliveriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeliveryHealth` | `deliveryHealthSchema` | `src/models/delivery-health.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### redeliverFormResponses

- **Signature**: `redeliverFormResponses(request: Deliveries.RedeliverFormResponsesRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsDeliveriesRedeliverResponse, Deliveries.RedeliverFormResponsesError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/deliveries/redeliver`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsDeliveriesRedeliverResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Deliveries.RedeliverFormResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deliveries.RedeliverFormResponsesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsDeliveriesRedeliverRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsDeliveriesRedeliverRequest` | `apiV1ManageFormsDeliveriesRedeliverRequestSchema` | `src/models/api-v1-manage-forms-deliveries-redeliver-request.ts` |
| `ApiV1ManageFormsDeliveriesRedeliverResponse` | `apiV1ManageFormsDeliveriesRedeliverResponseSchema` | `src/models/api-v1-manage-forms-deliveries-redeliver-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### retryFormDeliveries

- **Signature**: `retryFormDeliveries(request: Deliveries.RetryFormDeliveriesRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsDeliveriesRetryResponse, Deliveries.RetryFormDeliveriesError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/deliveries/retry`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsDeliveriesRetryResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Deliveries.RetryFormDeliveriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deliveries.RetryFormDeliveriesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsDeliveriesRetryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsDeliveriesRetryRequest` | `apiV1ManageFormsDeliveriesRetryRequestSchema` | `src/models/api-v1-manage-forms-deliveries-retry-request.ts` |
| `ApiV1ManageFormsDeliveriesRetryResponse` | `apiV1ManageFormsDeliveriesRetryResponseSchema` | `src/models/api-v1-manage-forms-deliveries-retry-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

