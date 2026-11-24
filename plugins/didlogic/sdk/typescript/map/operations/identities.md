<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.identities` · Source: `src/resources/identities.ts` · 3 operations · Request and error types: namespace `Identities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### identitiesCreate

- **Signature**: `identitiesCreate(request: Identities.IdentitiesCreateRequest, options?: RequestOptions): ApiPromise<ApiV2IdentitiesResponse1, Identities.IdentitiesCreateError>`
- **Wire**: `POST /api/v2/identities`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2IdentitiesResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Identities.IdentitiesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Identities401Error1"` [401] `ApiV2Identities401Error1` · `"error"` [422] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identities.IdentitiesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV2IdentitiesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2IdentitiesRequest` | `apiV2IdentitiesRequestSchema` | `src/models/api-v2-identities-request.ts` |
| `ApiV2IdentitiesResponse1` | `apiV2IdentitiesResponse1Schema` | `src/models/api-v2-identities-response1.ts` |
| `ApiV2Identities401Error1` | `apiV2Identities401Error1Schema` | `src/models/api-v2-identities401-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### identitiesDestroy

- **Signature**: `identitiesDestroy(request: Identities.IdentitiesDestroyRequest, options?: RequestOptions): ApiPromise<ApiV2IdentitiesResponse2, Identities.IdentitiesDestroyError>`
- **Wire**: `DELETE /api/v2/identities/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2IdentitiesResponse2`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Identities.IdentitiesDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Identities401Error1"` [401] `ApiV2Identities401Error1` · `"apiV2Identities404Error1"` [404] `ApiV2Identities404Error1` · `"apiV2Identities422Error1"` [422] `ApiV2Identities422Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identities.IdentitiesDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2IdentitiesResponse2` | `apiV2IdentitiesResponse2Schema` | `src/models/api-v2-identities-response2.ts` |
| `ApiV2Identities401Error1` | `apiV2Identities401Error1Schema` | `src/models/api-v2-identities401-error1.ts` |
| `ApiV2Identities404Error1` | `apiV2Identities404Error1Schema` | `src/models/api-v2-identities404-error1.ts` |
| `ApiV2Identities422Error1` | `apiV2Identities422Error1Schema` | `src/models/api-v2-identities422-error1.ts` |

### identitiesIndex

- **Signature**: `identitiesIndex(request?: Identities.IdentitiesIndexRequest, options?: RequestOptions): ApiPromise<ApiV2IdentitiesResponse, Identities.IdentitiesIndexError>`
- **Wire**: `GET /api/v2/identities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2IdentitiesResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Identities.IdentitiesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Identities401Error1"` [401] `ApiV2Identities401Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identities.IdentitiesIndexRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ids` | `query` | — | `string` | no | — |
| `name` | `query` | — | `string` | no | — |
| `createdAtFrom` | `query` | `created_at_from` | `string` (date) | no | — |
| `createdAtTo` | `query` | `created_at_to` | `string` (date) | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `order` | `query` | — | `Order` | no | `Order.Desc` |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `ApiV2IdentitiesResponse` | `apiV2IdentitiesResponseSchema` | `src/models/api-v2-identities-response.ts` |
| `ApiV2Identities401Error1` | `apiV2Identities401Error1Schema` | `src/models/api-v2-identities401-error1.ts` |

