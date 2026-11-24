<!-- Generated file — do not edit; regenerated with the SDK. -->

# InboundDestinations — operations

Accessor: `client.inboundDestinations` · Source: `src/resources/inbound-destinations.ts` · 4 operations · Request and error types: namespace `InboundDestinations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### purchasesDestinationsCreate

- **Signature**: `purchasesDestinationsCreate(request: InboundDestinations.PurchasesDestinationsCreateRequest, options?: RequestOptions): ApiPromise<ApiV1PurchasesDestinationsResponse1, InboundDestinations.PurchasesDestinationsCreateError>`
- **Wire**: `POST /api/v1/purchases/{purchase_id}/destinations`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PurchasesDestinationsResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `InboundDestinations.PurchasesDestinationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PurchasesDestinations403Error1"` [403] `ApiV1PurchasesDestinations403Error1` · `"error"` [404] `Error` · `"error2"` [422] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InboundDestinations.PurchasesDestinationsCreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `purchaseId` | `path` | `purchase_id` | `string` | yes |
| `body` | `body` | — | `ApiV1PurchasesDestinationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PurchasesDestinationsRequest` | `apiV1PurchasesDestinationsRequestSchema` | `src/models/api-v1-purchases-destinations-request.ts` |
| `ApiV1PurchasesDestinationsResponse1` | `apiV1PurchasesDestinationsResponse1Schema` | `src/models/api-v1-purchases-destinations-response1.ts` |
| `ApiV1PurchasesDestinations403Error1` | `apiV1PurchasesDestinations403Error1Schema` | `src/models/api-v1-purchases-destinations403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### purchasesDestinationsDestroy

- **Signature**: `purchasesDestinationsDestroy(request: InboundDestinations.PurchasesDestinationsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, InboundDestinations.PurchasesDestinationsDestroyError>`
- **Wire**: `DELETE /api/v1/purchases/{purchase_id}/destinations/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `InboundDestinations.PurchasesDestinationsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PurchasesDestinations403Error1"` [403] `ApiV1PurchasesDestinations403Error1` · `"apiV1PurchasesDestinationsResponse31"` [404] `ApiV1PurchasesDestinationsResponse31` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InboundDestinations.PurchasesDestinationsDestroyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `purchaseId` | `path` | `purchase_id` | `string` | yes |
| `id` | `path` | — | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PurchasesDestinations403Error1` | `apiV1PurchasesDestinations403Error1Schema` | `src/models/api-v1-purchases-destinations403-error1.ts` |
| `ApiV1PurchasesDestinationsResponse31` | `apiV1PurchasesDestinationsResponse31Schema` | `src/models/unions/api-v1-purchases-destinations-response31.ts` |

### purchasesDestinationsIndex

- **Signature**: `purchasesDestinationsIndex(request: InboundDestinations.PurchasesDestinationsIndexRequest, options?: RequestOptions): ApiPromise<ApiV1PurchasesDestinationsResponse, InboundDestinations.PurchasesDestinationsIndexError>`
- **Wire**: `GET /api/v1/purchases/{purchase_id}/destinations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PurchasesDestinationsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `InboundDestinations.PurchasesDestinationsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PurchasesDestinations403Error1"` [403] `ApiV1PurchasesDestinations403Error1` · `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InboundDestinations.PurchasesDestinationsIndexRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `purchaseId` | `path` | `purchase_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PurchasesDestinationsResponse` | `apiV1PurchasesDestinationsResponseSchema` | `src/models/api-v1-purchases-destinations-response.ts` |
| `ApiV1PurchasesDestinations403Error1` | `apiV1PurchasesDestinations403Error1Schema` | `src/models/api-v1-purchases-destinations403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### purchasesDestinationsUpdate

- **Signature**: `purchasesDestinationsUpdate(request: InboundDestinations.PurchasesDestinationsUpdateRequest, options?: RequestOptions): ApiPromise<ApiV1PurchasesDestinationsResponse2, InboundDestinations.PurchasesDestinationsUpdateError>`
- **Wire**: `PATCH /api/v1/purchases/{purchase_id}/destinations/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PurchasesDestinationsResponse2`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `InboundDestinations.PurchasesDestinationsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PurchasesDestinations403Error1"` [403] `ApiV1PurchasesDestinations403Error1` · `"apiV1PurchasesDestinationsResponse31"` [404] `ApiV1PurchasesDestinationsResponse31` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InboundDestinations.PurchasesDestinationsUpdateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `purchaseId` | `path` | `purchase_id` | `string` | yes |
| `id` | `path` | — | `number` | yes |
| `body` | `body` | — | `ApiV1PurchasesDestinationsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PurchasesDestinationsRequest1` | `apiV1PurchasesDestinationsRequest1Schema` | `src/models/api-v1-purchases-destinations-request1.ts` |
| `ApiV1PurchasesDestinationsResponse2` | `apiV1PurchasesDestinationsResponse2Schema` | `src/models/api-v1-purchases-destinations-response2.ts` |
| `ApiV1PurchasesDestinations403Error1` | `apiV1PurchasesDestinations403Error1Schema` | `src/models/api-v1-purchases-destinations403-error1.ts` |
| `ApiV1PurchasesDestinationsResponse31` | `apiV1PurchasesDestinationsResponse31Schema` | `src/models/unions/api-v1-purchases-destinations-response31.ts` |

