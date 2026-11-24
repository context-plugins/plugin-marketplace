<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signature — operations

Accessor: `client.signature` · Source: `src/resources/signature.ts` · 7 operations · Request and error types: namespace `Signature`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addDocumentInSignatureRequest

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `addDocumentInSignatureRequest(request: Signature.AddDocumentInSignatureRequestRequest, options?: RequestOptions): ApiPromise<undefined, Signature.AddDocumentInSignatureRequestError>`
- **Wire**: `POST /signature-requests/{SR_ID}/documents`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.AddDocumentInSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.AddDocumentInSignatureRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `body` | `body` | — | `SignatureDocumentUpload` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureDocumentUpload` | `signatureDocumentUploadSchema` | `src/models/signature-document-upload.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### createSignatureRequest

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSignatureRequest(request: Signature.CreateSignatureRequestRequest, options?: RequestOptions): ApiPromise<SignatureResponseV3, Signature.CreateSignatureRequestError>`
- **Wire**: `POST /signature-requests`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureResponseV3`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.CreateSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.CreateSignatureRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSignatureRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSignatureRequest` | `createSignatureRequestSchema` | `src/models/create-signature-request.ts` |
| `SignatureResponseV3` | `signatureResponseV3Schema` | `src/models/signature-response-v3.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### deleteDocumentInSignatureRequest

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDocumentInSignatureRequest(request: Signature.DeleteDocumentInSignatureRequestRequest, options?: RequestOptions): ApiPromise<undefined, Signature.DeleteDocumentInSignatureRequestError>`
- **Wire**: `DELETE /signature-requests/{SR_ID}/documents/{DOC_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.DeleteDocumentInSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.DeleteDocumentInSignatureRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `docId` | `path` | `DOC_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### deleteSignatureRequest

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSignatureRequest(request: Signature.DeleteSignatureRequestRequest, options?: RequestOptions): ApiPromise<undefined, Signature.DeleteSignatureRequestError>`
- **Wire**: `DELETE /signature-requests/{SR_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.DeleteSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [404] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.DeleteSignatureRequestRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureRequestDetails

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignatureRequestDetails(request: Signature.GetSignatureRequestDetailsRequest, options?: RequestOptions): ApiPromise<SignatureResponseV3, Signature.GetSignatureRequestDetailsError>`
- **Wire**: `GET /signature-requests/{SR_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignatureResponseV3`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.GetSignatureRequestDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.GetSignatureRequestDetailsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureResponseV3` | `signatureResponseV3Schema` | `src/models/signature-response-v3.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### initiateSignatureRequest

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `initiateSignatureRequest(request: Signature.InitiateSignatureRequestRequest, options?: RequestOptions): ApiPromise<undefined, Signature.InitiateSignatureRequestError>`
- **Wire**: `POST /signature-requests/{SR_ID}/initiate`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.InitiateSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.InitiateSignatureRequestRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### withdrawSignatureRequest

- **Server**: `defaultSkribbleSignatureApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `withdrawSignatureRequest(request: Signature.WithdrawSignatureRequestRequest, options?: RequestOptions): ApiPromise<SignatureResponse, Signature.WithdrawSignatureRequestError>`
- **Wire**: `POST /signature-requests/{SR_ID}/withdraw`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Signature.WithdrawSignatureRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [404] `Problem` · `"problem5"` [406] `Problem` · `"problem6"` [429] `Problem` · `"problem7"` [500] `Problem` · `"problem8"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signature.WithdrawSignatureRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `body` | `body` | — | `WithdrawSignatureRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WithdrawSignatureRequest` | `withdrawSignatureRequestSchema` | `src/models/withdraw-signature-request.ts` |
| `SignatureResponse` | `signatureResponseSchema` | `src/models/signature-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

