<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureSigner — operations

Accessor: `client.signatureSigner` · Source: `src/resources/signature-signer.ts` · 2 operations · Request and error types: namespace `SignatureSigner`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addSignatureSigner

- **Server**: `defaultSkribbleSignatureSignerApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `addSignatureSigner(request: SignatureSigner.AddSignatureSignerRequest, options?: RequestOptions): ApiPromise<SignatureResponseV3, SignatureSigner.AddSignatureSignerError>`
- **Wire**: `POST /signature-requests/{SR_ID}/signatures`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureResponseV3`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureSigner.AddSignatureSignerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureSigner.AddSignatureSignerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `body` | `body` | — | `SignatureRecipientModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignatureRecipientModel` | `signatureRecipientModelSchema` | `src/models/unions/signature-recipient-model.ts` |
| `SignatureResponseV3` | `signatureResponseV3Schema` | `src/models/signature-response-v3.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### removeSignatureSigner

- **Server**: `defaultSkribbleSignatureSignerApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `removeSignatureSigner(request: SignatureSigner.RemoveSignatureSignerRequest, options?: RequestOptions): ApiPromise<undefined, SignatureSigner.RemoveSignatureSignerError>`
- **Wire**: `DELETE /signature-requests/{SR_ID}/signatures/{SID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SignatureSigner.RemoveSignatureSignerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignatureSigner.RemoveSignatureSignerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `sid` | `path` | `SID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

