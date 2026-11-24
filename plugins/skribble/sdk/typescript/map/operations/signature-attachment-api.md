<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureAttachmentApi — operations

Accessor: `client.signatureAttachmentApi` · Source: `src/resources/signature-attachment-api.ts` · 3 operations · Request and error types: namespace `SignatureAttachmentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSignatureAttachment

- **Server**: `defaultSkribbleSignatureAttachmentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSignatureAttachment(request: SignatureAttachmentApi.CreateSignatureAttachmentRequestParams, options?: RequestOptions): ApiPromise<SignatureResponseSkribbleSignatureAttachmentApi, SignatureAttachmentApi.CreateSignatureAttachmentError>`
- **Wire**: `POST /signature-requests/{SR_ID}/attachments`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureResponseSkribbleSignatureAttachmentApi`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureAttachmentApi.CreateSignatureAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [404] `Problem` · `"problem5"` [406] `Problem` · `"problem6"` [429] `Problem` · `"problem7"` [500] `Problem` · `"problem8"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureAttachmentApi.CreateSignatureAttachmentRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `body` | `body` | — | `CreateSignatureAttachmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSignatureAttachmentRequest` | `createSignatureAttachmentRequestSchema` | `src/models/create-signature-attachment-request.ts` |
| `SignatureResponseSkribbleSignatureAttachmentApi` | `signatureResponseSkribbleSignatureAttachmentApiSchema` | `src/models/signature-response-skribble-signature-attachment-api.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### deleteSignatureAttachment

- **Server**: `defaultSkribbleSignatureAttachmentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSignatureAttachment(request: SignatureAttachmentApi.DeleteSignatureAttachmentRequest, options?: RequestOptions): ApiPromise<undefined, SignatureAttachmentApi.DeleteSignatureAttachmentError>`
- **Wire**: `DELETE /signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureAttachmentApi.DeleteSignatureAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureAttachmentApi.DeleteSignatureAttachmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `attachmentId` | `path` | `ATTACHMENT_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getSignatureAttachmentContent

- **Server**: `defaultSkribbleSignatureAttachmentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignatureAttachmentContent(request: SignatureAttachmentApi.GetSignatureAttachmentContentRequest, options?: RequestOptions): ApiPromise<BinaryContent, SignatureAttachmentApi.GetSignatureAttachmentContentError>`
- **Wire**: `GET /signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}/content`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureAttachmentApi.GetSignatureAttachmentContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureAttachmentApi.GetSignatureAttachmentContentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `attachmentId` | `path` | `ATTACHMENT_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

