<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueModels — operations

Accessor: `client.valueModels` · Source: `src/resources/value-models.ts` · 5 operations · Request and error types: namespace `ValueModels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCurrentValueModel

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCurrentValueModel(request: ValueModels.GetCurrentValueModelRequest, options?: RequestOptions): ApiPromise<ValueModelDetail, ValueModels.GetCurrentValueModelError>`
- **Wire**: `GET /value-models/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValueModelDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueModels.GetCurrentValueModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueModels.GetCurrentValueModelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueModelDetail` | `valueModelDetailSchema` | `src/models/value-model-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getValueModelVersion

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getValueModelVersion(request: ValueModels.GetValueModelVersionRequest, options?: RequestOptions): ApiPromise<ValueModelDetail, ValueModels.GetValueModelVersionError>`
- **Wire**: `GET /value-models/versions/{version}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValueModelDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueModels.GetValueModelVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueModels.GetValueModelVersionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `version` | `path` | — | `number` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueModelDetail` | `valueModelDetailSchema` | `src/models/value-model-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listValueModelVersions

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listValueModelVersions(request: ValueModels.ListValueModelVersionsRequest, options?: RequestOptions): ApiPromise<ValueModelVersionListResponse, ValueModels.ListValueModelVersionsError>`
- **Wire**: `GET /value-models/versions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValueModelVersionListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueModels.ListValueModelVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueModels.ListValueModelVersionsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueModelVersionListResponse` | `valueModelVersionListResponseSchema` | `src/models/value-model-version-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### refreshValueModelBackfill

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `refreshValueModelBackfill(request: ValueModels.RefreshValueModelBackfillRequest, options?: RequestOptions): ApiPromise<BackfillResponse, ValueModels.RefreshValueModelBackfillError>`
- **Wire**: `POST /value-models/backfill`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BackfillResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueModels.RefreshValueModelBackfillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueModels.RefreshValueModelBackfillRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BackfillResponse` | `backfillResponseSchema` | `src/models/backfill-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateValueModel

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateValueModel(request: ValueModels.UpdateValueModelRequest, options?: RequestOptions): ApiPromise<ValueModelDetail, ValueModels.UpdateValueModelError>`
- **Wire**: `PUT /value-models/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValueModelDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `ValueModels.UpdateValueModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ValueModels.UpdateValueModelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `ValueModelUploadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValueModelUploadRequest` | `valueModelUploadRequestSchema` | `src/models/value-model-upload-request.ts` |
| `ValueModelDetail` | `valueModelDetailSchema` | `src/models/value-model-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

