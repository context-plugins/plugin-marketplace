<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureObserverApi — operations

Accessor: `client.signatureObserverApi` · Source: `src/resources/signature-observer-api.ts` · 4 operations · Request and error types: namespace `SignatureObserverApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addSignatureObserver

- **Signature**: `addSignatureObserver(request: SignatureObserverApi.AddSignatureObserverRequest, options?: RequestOptions): ApiPromise<SignatureObserverResponse, SignatureObserverApi.AddSignatureObserverError>`
- **Wire**: `POST /signature-requests/{SR_ID}/observers`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureObserverResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureObserverApi.AddSignatureObserverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [404] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureObserverApi.AddSignatureObserverRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `body` | `body` | — | `SignatureObserver` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureObserver` | `signatureObserverSchema` | `src/models/unions/signature-observer.ts` |
| `SignatureObserverResponse` | `signatureObserverResponseSchema` | `src/models/unions/signature-observer-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### deleteSignatureObserver

- **Signature**: `deleteSignatureObserver(request: SignatureObserverApi.DeleteSignatureObserverRequest, options?: RequestOptions): ApiPromise<undefined, SignatureObserverApi.DeleteSignatureObserverError>`
- **Wire**: `DELETE /signature-requests/{SR_ID}/observers/{OBSERVER_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureObserverApi.DeleteSignatureObserverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureObserverApi.DeleteSignatureObserverRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `observerId` | `path` | `OBSERVER_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureObserver

- **Signature**: `getSignatureObserver(request: SignatureObserverApi.GetSignatureObserverRequest, options?: RequestOptions): ApiPromise<SignatureObserverResponse, SignatureObserverApi.GetSignatureObserverError>`
- **Wire**: `GET /signature-requests/{SR_ID}/observers/{OBSERVER_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureObserverResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureObserverApi.GetSignatureObserverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureObserverApi.GetSignatureObserverRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `observerId` | `path` | `OBSERVER_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureObserverResponse` | `signatureObserverResponseSchema` | `src/models/unions/signature-observer-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### listSignatureObservers

- **Signature**: `listSignatureObservers(request: SignatureObserverApi.ListSignatureObserversRequest, options?: RequestOptions): ApiPromise<SignatureObserverResponse[], SignatureObserverApi.ListSignatureObserversError>`
- **Wire**: `GET /signature-requests/{SR_ID}/observers`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureObserverResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureObserverApi.ListSignatureObserversError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureObserverApi.ListSignatureObserversRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureObserverResponse` | `signatureObserverResponseSchema` | `src/models/unions/signature-observer-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

