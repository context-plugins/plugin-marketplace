<!-- Generated file — do not edit; regenerated with the SDK. -->

# HlrLookups — operations

Accessor: `client.hlrLookups` · Source: `src/resources/hlr-lookups.ts` · 2 operations · Request and error types: namespace `HlrLookups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### hlrCreate

- **Signature**: `hlrCreate(request: HlrLookups.HlrCreateRequest, options?: RequestOptions): ApiPromise<ApiV2HlrResponse, HlrLookups.HlrCreateError>`
- **Wire**: `POST /api/v2/hlr`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2HlrResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `HlrLookups.HlrCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Hlr401Error1"` [401] `ApiV2Hlr401Error1` · `"apiV2Hlr403Error1"` [403] `ApiV2Hlr403Error1` · `"apiV2Hlr422Error1"` [422] `ApiV2Hlr422Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HlrLookups.HlrCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV2HlrRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2HlrRequest` | `apiV2HlrRequestSchema` | `src/models/api-v2-hlr-request.ts` |
| `ApiV2HlrResponse` | `apiV2HlrResponseSchema` | `src/models/api-v2-hlr-response.ts` |
| `ApiV2Hlr401Error1` | `apiV2Hlr401Error1Schema` | `src/models/api-v2-hlr401-error1.ts` |
| `ApiV2Hlr403Error1` | `apiV2Hlr403Error1Schema` | `src/models/api-v2-hlr403-error1.ts` |
| `ApiV2Hlr422Error1` | `apiV2Hlr422Error1Schema` | `src/models/api-v2-hlr422-error1.ts` |

### hlrHistory

- **Signature**: `hlrHistory(request?: HlrLookups.HlrHistoryRequest, options?: RequestOptions): ApiPromise<ApiV2HlrHistoryResponse, HlrLookups.HlrHistoryError>`
- **Wire**: `GET /api/v2/hlr/history`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2HlrHistoryResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `HlrLookups.HlrHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2HlrHistory401Error1"` [401] `ApiV2HlrHistory401Error1` · `"apiV2HlrHistory403Error1"` [403] `ApiV2HlrHistory403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HlrLookups.HlrHistoryRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ids` | `query` | — | `string` | no | — |
| `taskIds` | `query` | `task_ids` | `string` | no | — |
| `number` | `query` | — | `string` | no | — |
| `numberStart` | `query` | `number_start` | `number` | no | — |
| `status` | `query` | — | `Status1` | no | — |
| `createdAtFrom` | `query` | `created_at_from` | `string` (date) | no | — |
| `createdAtTo` | `query` | `created_at_to` | `string` (date) | no | — |
| `processedAtFrom` | `query` | `processed_at_from` | `string` (date) | no | — |
| `processedAtTo` | `query` | `processed_at_to` | `string` (date) | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `order` | `query` | — | `Order` | no | `Order.Desc` |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `ApiV2HlrHistoryResponse` | `apiV2HlrHistoryResponseSchema` | `src/models/api-v2-hlr-history-response.ts` |
| `ApiV2HlrHistory401Error1` | `apiV2HlrHistory401Error1Schema` | `src/models/api-v2-hlr-history401-error1.ts` |
| `ApiV2HlrHistory403Error1` | `apiV2HlrHistory403Error1Schema` | `src/models/api-v2-hlr-history403-error1.ts` |

