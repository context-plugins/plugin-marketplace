<!-- Generated file — do not edit; regenerated with the SDK. -->

# LimitsApi — operations

Accessor: `client.limitsApi` · Source: `src/resources/limits-api.ts` · 5 operations · Request and error types: namespace `LimitsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSpendLimitV2LimitsPost

- **Signature**: `createSpendLimitV2LimitsPost(request: LimitsApi.CreateSpendLimitV2LimitsPostRequest, options?: RequestOptions): ApiPromise<SpendLimitItem, LimitsApi.CreateSpendLimitV2LimitsPostError>`
- **Wire**: `POST /v2/limits`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpendLimitItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `LimitsApi.CreateSpendLimitV2LimitsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LimitsApi.CreateSpendLimitV2LimitsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SpendLimitCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpendLimitCreateRequest` | `spendLimitCreateRequestSchema` | `src/models/spend-limit-create-request.ts` |
| `SpendLimitItem` | `spendLimitItemSchema` | `src/models/spend-limit-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteSpendLimitV2LimitsLimitIdDelete

- **Signature**: `deleteSpendLimitV2LimitsLimitIdDelete(request: LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError>`
- **Wire**: `DELETE /v2/limits/{limit_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limitId` | `path` | `limit_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listSpendLimitsV2LimitsGet

- **Signature**: `listSpendLimitsV2LimitsGet(options?: RequestOptions): ApiPromise<SpendLimitListResponse, LimitsApi.ListSpendLimitsV2LimitsGetError>`
- **Wire**: `GET /v2/limits`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SpendLimitListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `LimitsApi.ListSpendLimitsV2LimitsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SpendLimitListResponse` | `spendLimitListResponseSchema` | `src/models/spend-limit-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resetSpendLimitV2LimitsLimitIdResetPost

- **Signature**: `resetSpendLimitV2LimitsLimitIdResetPost(request: LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostRequest, options?: RequestOptions): ApiPromise<SpendLimitItem, LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError>`
- **Wire**: `POST /v2/limits/{limit_id}/reset`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpendLimitItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limitId` | `path` | `limit_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpendLimitItem` | `spendLimitItemSchema` | `src/models/spend-limit-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateSpendLimitV2LimitsLimitIdPatch

- **Signature**: `updateSpendLimitV2LimitsLimitIdPatch(request: LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchRequest, options?: RequestOptions): ApiPromise<SpendLimitItem, LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError>`
- **Wire**: `PATCH /v2/limits/{limit_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpendLimitItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limitId` | `path` | `limit_id` | `string` | yes |
| `body` | `body` | — | `SpendLimitUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpendLimitUpdateRequest` | `spendLimitUpdateRequestSchema` | `src/models/spend-limit-update-request.ts` |
| `SpendLimitItem` | `spendLimitItemSchema` | `src/models/spend-limit-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

