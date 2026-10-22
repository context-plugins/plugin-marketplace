<!-- Generated file — do not edit; regenerated with the SDK. -->

# BridgePhrases — operations

Accessor: `client.bridgePhrases` · Source: `src/resources/bridge-phrases.ts` · 5 operations · Request and error types: namespace `BridgePhrases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bridgePhrasesCreate

- **Signature**: `bridgePhrasesCreate(request: BridgePhrases.BridgePhrasesCreateRequestParams, options?: RequestOptions): ApiPromise<BridgePhrasesResponse, BridgePhrases.BridgePhrasesCreateError>`
- **Wire**: `POST /api/v1/bridge_phrases/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BridgePhrasesResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `BridgePhrases.BridgePhrasesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BridgePhrases.BridgePhrasesCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BridgePhrasesCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BridgePhrasesCreateRequest` | `bridgePhrasesCreateRequestSchema` | `src/models/bridge-phrases-create-request.ts` |
| `BridgePhrasesResponse` | `bridgePhrasesResponseSchema` | `src/models/bridge-phrases-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### bridgePhrasesDelete

- **Signature**: `bridgePhrasesDelete(request: BridgePhrases.BridgePhrasesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, BridgePhrases.BridgePhrasesDeleteError>`
- **Wire**: `DELETE /api/v1/bridge_phrases/{bridge_phrases_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `BridgePhrases.BridgePhrasesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BridgePhrases.BridgePhrasesDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bridgePhrasesId` | `path` | `bridge_phrases_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### bridgePhrasesGetById

- **Signature**: `bridgePhrasesGetById(request: BridgePhrases.BridgePhrasesGetByIdRequest, options?: RequestOptions): ApiPromise<BridgePhrasesResponse, BridgePhrases.BridgePhrasesGetByIdError>`
- **Wire**: `GET /api/v1/bridge_phrases/{bridge_phrases_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BridgePhrasesResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `BridgePhrases.BridgePhrasesGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BridgePhrases.BridgePhrasesGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bridgePhrasesId` | `path` | `bridge_phrases_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BridgePhrasesResponse` | `bridgePhrasesResponseSchema` | `src/models/bridge-phrases-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### bridgePhrasesList

- **Signature**: `bridgePhrasesList(request: BridgePhrases.BridgePhrasesListRequest, options?: RequestOptions): ApiPromise<ListResponseBridgePhrasesResponse, BridgePhrases.BridgePhrasesListError>`
- **Wire**: `GET /api/v1/bridge_phrases/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseBridgePhrasesResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `BridgePhrases.BridgePhrasesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BridgePhrases.BridgePhrasesListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `BridgePhrasesProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy11` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields1` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `BridgePhrasesProperties` | `bridgePhrasesPropertiesSchema` | `src/models/bridge-phrases-properties.ts` |
| `OrderBy11` | `orderBy11Schema` | `src/models/unions/order-by11.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields1` | `fields1Schema` | `src/models/unions/fields1.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseBridgePhrasesResponse` | `listResponseBridgePhrasesResponseSchema` | `src/models/list-response-bridge-phrases-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### bridgePhrasesUpdate

- **Signature**: `bridgePhrasesUpdate(request: BridgePhrases.BridgePhrasesUpdateRequestParams, options?: RequestOptions): ApiPromise<BridgePhrasesResponse, BridgePhrases.BridgePhrasesUpdateError>`
- **Wire**: `PUT /api/v1/bridge_phrases/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BridgePhrasesResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `BridgePhrases.BridgePhrasesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BridgePhrases.BridgePhrasesUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BridgePhrasesUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BridgePhrasesUpdateRequest` | `bridgePhrasesUpdateRequestSchema` | `src/models/bridge-phrases-update-request.ts` |
| `BridgePhrasesResponse` | `bridgePhrasesResponseSchema` | `src/models/bridge-phrases-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

