<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkDelivery — operations

Accessor: `client.bulkDelivery` · Source: `src/resources/bulk-delivery.ts` · 11 operations · Request and error types: namespace `BulkDelivery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deliveriesCancel

- **Signature**: `deliveriesCancel(request: BulkDelivery.DeliveriesCancelRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesResponse3, BulkDelivery.DeliveriesCancelError>`
- **Wire**: `DELETE /api/v1/deliveries/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DeliveriesResponse3`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesResponse3` | `apiV1DeliveriesResponse3Schema` | `src/models/api-v1-deliveries-response3.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesCatalog

- **Signature**: `deliveriesCatalog(request?: BulkDelivery.DeliveriesCatalogRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesDatasetsResponse, BulkDelivery.DeliveriesCatalogError>`
- **Wire**: `GET /api/v1/deliveries/datasets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DeliveriesDatasetsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesCatalogError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesCatalogRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataset` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesDatasetsResponse` | `apiV1DeliveriesDatasetsResponseSchema` | `src/models/api-v1-deliveries-datasets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesCreate

- **Signature**: `deliveriesCreate(request: BulkDelivery.DeliveriesCreateRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesResponse, BulkDelivery.DeliveriesCreateError>`
- **Wire**: `POST /api/v1/deliveries`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DeliveriesResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1DeliveriesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesRequest` | `apiV1DeliveriesRequestSchema` | `src/models/api-v1-deliveries-request.ts` |
| `ApiV1DeliveriesResponse` | `apiV1DeliveriesResponseSchema` | `src/models/api-v1-deliveries-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesDownload

- **Signature**: `deliveriesDownload(request: BulkDelivery.DeliveriesDownloadRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesDownloadResponse, BulkDelivery.DeliveriesDownloadError>`
- **Wire**: `GET /api/v1/deliveries/{id}/download`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DeliveriesDownloadResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesDownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesDownloadRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `token` | `query` | `string` | no |
| `part` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesDownloadResponse` | `apiV1DeliveriesDownloadResponseSchema` | `src/models/api-v1-deliveries-download-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesList

- **Signature**: `deliveriesList(options?: RequestOptions): ApiPromise<ApiV1DeliveriesResponse1, BulkDelivery.DeliveriesListError>`
- **Wire**: `GET /api/v1/deliveries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DeliveriesResponse1`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesResponse1` | `apiV1DeliveriesResponse1Schema` | `src/models/api-v1-deliveries-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesScheduleDelete

- **Signature**: `deliveriesScheduleDelete(request: BulkDelivery.DeliveriesScheduleDeleteRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleDeleteError>`
- **Wire**: `DELETE /api/v1/deliveries/schedules/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DeliveriesSchedulesResponse3`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesScheduleDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesScheduleDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesSchedulesResponse3` | `apiV1DeliveriesSchedulesResponse3Schema` | `src/models/api-v1-deliveries-schedules-response3.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesScheduleDetail

- **Signature**: `deliveriesScheduleDetail(request: BulkDelivery.DeliveriesScheduleDetailRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesSchedulesResponse2, BulkDelivery.DeliveriesScheduleDetailError>`
- **Wire**: `GET /api/v1/deliveries/schedules/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DeliveriesSchedulesResponse2`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesScheduleDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesScheduleDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesSchedulesResponse2` | `apiV1DeliveriesSchedulesResponse2Schema` | `src/models/api-v1-deliveries-schedules-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesScheduleUpdate

- **Signature**: `deliveriesScheduleUpdate(request: BulkDelivery.DeliveriesScheduleUpdateRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesSchedulesResponse3, BulkDelivery.DeliveriesScheduleUpdateError>`
- **Wire**: `PATCH /api/v1/deliveries/schedules/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DeliveriesSchedulesResponse3`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesScheduleUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesScheduleUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1DeliveriesSchedulesRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesSchedulesRequest1` | `apiV1DeliveriesSchedulesRequest1Schema` | `src/models/api-v1-deliveries-schedules-request1.ts` |
| `ApiV1DeliveriesSchedulesResponse3` | `apiV1DeliveriesSchedulesResponse3Schema` | `src/models/api-v1-deliveries-schedules-response3.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesSchedulesCreate

- **Signature**: `deliveriesSchedulesCreate(request: BulkDelivery.DeliveriesSchedulesCreateRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesSchedulesResponse, BulkDelivery.DeliveriesSchedulesCreateError>`
- **Wire**: `POST /api/v1/deliveries/schedules`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DeliveriesSchedulesResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesSchedulesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesSchedulesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1DeliveriesSchedulesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesSchedulesRequest` | `apiV1DeliveriesSchedulesRequestSchema` | `src/models/api-v1-deliveries-schedules-request.ts` |
| `ApiV1DeliveriesSchedulesResponse` | `apiV1DeliveriesSchedulesResponseSchema` | `src/models/api-v1-deliveries-schedules-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesSchedulesList

- **Signature**: `deliveriesSchedulesList(options?: RequestOptions): ApiPromise<ApiV1DeliveriesSchedulesResponse1, BulkDelivery.DeliveriesSchedulesListError>`
- **Wire**: `GET /api/v1/deliveries/schedules`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DeliveriesSchedulesResponse1`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesSchedulesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesSchedulesResponse1` | `apiV1DeliveriesSchedulesResponse1Schema` | `src/models/api-v1-deliveries-schedules-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deliveriesStatus

- **Signature**: `deliveriesStatus(request: BulkDelivery.DeliveriesStatusRequest, options?: RequestOptions): ApiPromise<ApiV1DeliveriesResponse2, BulkDelivery.DeliveriesStatusError>`
- **Wire**: `GET /api/v1/deliveries/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DeliveriesResponse2`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkDelivery.DeliveriesStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkDelivery.DeliveriesStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DeliveriesResponse2` | `apiV1DeliveriesResponse2Schema` | `src/models/api-v1-deliveries-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

