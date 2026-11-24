<!-- Generated file — do not edit; regenerated with the SDK. -->

# Seal — operations

Accessor: `client.seal` · Source: `src/resources/seal.ts` · 1 operation · Request and error types: namespace `Seal`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sealDocument

- **Server**: `defaultSkribbleSealApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `sealDocument(request: Seal.SealDocumentRequest, options?: RequestOptions): ApiPromise<CreateSealResponse, Seal.SealDocumentError>`
- **Wire**: `POST /seal`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSealResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Seal.SealDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [406] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Seal.SealDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSealRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSealRequest` | `createSealRequestSchema` | `src/models/create-seal-request.ts` |
| `CreateSealResponse` | `createSealResponseSchema` | `src/models/create-seal-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

