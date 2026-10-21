<!-- Generated file — do not edit; regenerated with the SDK. -->

# CapturesApi — operations

Accessor: `client.capturesApi` · Source: `src/resources/captures-api.ts` · 3 operations · Request and error types: namespace `CapturesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCapture

- **Signature**: `createCapture(request: CapturesApi.CreateCaptureRequest, options?: RequestOptions): ApiPromise<undefined, CapturesApi.CreateCaptureError>`
- **Wire**: `POST /v2/payments/{paymentId}/captures`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CapturesApi.CreateCaptureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CapturesApi.CreateCaptureRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `EntityCapture` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCapture` | `entityCaptureSchema` | `src/models/entity-capture.ts` |

### getCapture

- **Signature**: `getCapture(request: CapturesApi.GetCaptureRequest, options?: RequestOptions): ApiPromise<undefined, CapturesApi.GetCaptureError>`
- **Wire**: `GET /v2/payments/{paymentId}/captures/{captureId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CapturesApi.GetCaptureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CapturesApi.GetCaptureRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `captureId` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listCaptures

- **Signature**: `listCaptures(request: CapturesApi.ListCapturesRequest, options?: RequestOptions): ApiPromise<undefined, CapturesApi.ListCapturesError>`
- **Wire**: `GET /v2/payments/{paymentId}/captures`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CapturesApi.ListCapturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CapturesApi.ListCapturesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `embed` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

