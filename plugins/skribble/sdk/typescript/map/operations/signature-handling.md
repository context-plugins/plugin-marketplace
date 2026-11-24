<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureHandling — operations

Accessor: `client.signatureHandling` · Source: `src/resources/signature-handling.ts` · 8 operations · Request and error types: namespace `SignatureHandling`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkGetSignatureRequests

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `bulkGetSignatureRequests(request: SignatureHandling.BulkGetSignatureRequestsRequest, options?: RequestOptions): ApiPromise<SignatureResponse[], SignatureHandling.BulkGetSignatureRequestsError>`
- **Wire**: `POST /signature-requests/bulk`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.BulkGetSignatureRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [406] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.BulkGetSignatureRequestsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureResponse` | `signatureResponseSchema` | `src/models/signature-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### deleteSignatureRequestExpiresAt

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSignatureRequestExpiresAt(request: SignatureHandling.DeleteSignatureRequestExpiresAtRequest, options?: RequestOptions): ApiPromise<undefined, SignatureHandling.DeleteSignatureRequestExpiresAtError>`
- **Wire**: `DELETE /signature-requests/{SR_ID}/expires-at`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.DeleteSignatureRequestExpiresAtError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [404] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.DeleteSignatureRequestExpiresAtRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureReport

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignatureReport(request: SignatureHandling.GetSignatureReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, SignatureHandling.GetSignatureReportError>`
- **Wire**: `GET /signature-requests/{SR_ID}/report`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.GetSignatureReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.GetSignatureReportRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes | — |
| `type` | `query` | — | `TypeSkribbleSignatureHandlingApi` | no | `TypeSkribbleSignatureHandlingApi.Pdf` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeSkribbleSignatureHandlingApi` | `typeSkribbleSignatureHandlingApiSchema` | `src/models/type-skribble-signature-handling-api.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureRequest

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignatureRequest(request?: SignatureHandling.GetSignatureRequestRequest, options?: RequestOptions): ApiPromise<SignatureResponseV3[], SignatureHandling.GetSignatureRequestError>`
- **Wire**: `GET /signature-requests`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureResponseV3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.GetSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [406] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.GetSignatureRequestRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountEmail` | `query` | `account_email` | `string` | no | — |
| `search` | `query` | — | `string` | no | — |
| `signatureStatus` | `query` | `signature_status` | `SignatureStatusCode` | no | — |
| `statusOverall` | `query` | `status_overall` | `SignatureStatusOverall` | no | — |
| `pageNumber` | `query` | `page_number` | `number` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureStatusCode` | `signatureStatusCodeSchema` | `src/models/signature-status-code.ts` |
| `SignatureStatusOverall` | `signatureStatusOverallSchema` | `src/models/signature-status-overall.ts` |
| `SignatureResponseV3` | `signatureResponseV3Schema` | `src/models/signature-response-v3.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureRequestCallbacksV3

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignatureRequestCallbacksV3(request: SignatureHandling.GetSignatureRequestCallbacksV3Request, options?: RequestOptions): ApiPromise<SignatureCallbacksInResponse[], SignatureHandling.GetSignatureRequestCallbacksV3Error>`
- **Wire**: `GET /signature-requests/{SR_ID}/callbacks`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureCallbacksInResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.GetSignatureRequestCallbacksV3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.GetSignatureRequestCallbacksV3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureCallbacksInResponse` | `signatureCallbacksInResponseSchema` | `src/models/signature-callbacks-in-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureRequestDetails2

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignatureRequestDetails2(request: SignatureHandling.GetSignatureRequestDetails2Request, options?: RequestOptions): ApiPromise<SignatureResponseV3, SignatureHandling.GetSignatureRequestDetails2Error>`
- **Wire**: `GET /signature-requests/{SR_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureResponseV3`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.GetSignatureRequestDetails2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.GetSignatureRequestDetails2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureResponseV3` | `signatureResponseV3Schema` | `src/models/signature-response-v3.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### remindSignatureRequest

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `remindSignatureRequest(request: SignatureHandling.RemindSignatureRequestRequest, options?: RequestOptions): ApiPromise<undefined, SignatureHandling.RemindSignatureRequestError>`
- **Wire**: `POST /signature-requests/{SR_ID}/remind`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.RemindSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.RemindSignatureRequestRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### updateSignatureRequest

- **Server**: `defaultSkribbleSignatureHandlingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSignatureRequest(request: SignatureHandling.UpdateSignatureRequestRequest, options?: RequestOptions): ApiPromise<SignatureResponseV3, SignatureHandling.UpdateSignatureRequestError>`
- **Wire**: `PUT /signature-requests`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureResponseV3`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureHandling.UpdateSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureHandling.UpdateSignatureRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateSignatureRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSignatureRequest` | `updateSignatureRequestSchema` | `src/models/update-signature-request.ts` |
| `SignatureResponseV3` | `signatureResponseV3Schema` | `src/models/signature-response-v3.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

