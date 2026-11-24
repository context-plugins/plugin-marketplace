<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identification — operations

Accessor: `client.identification` · Source: `src/resources/identification.ts` · 4 operations · Request and error types: namespace `Identification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getIdentificationEvidenceFiles

- **Server**: `defaultSkribbleIdentificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getIdentificationEvidenceFiles(request: Identification.GetIdentificationEvidenceFilesRequest, options?: RequestOptions): ApiPromise<BinaryContent, Identification.GetIdentificationEvidenceFilesError>`
- **Wire**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/files`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Identification.GetIdentificationEvidenceFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [401] `Problem` · `"problem2"` [403] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identification.GetIdentificationEvidenceFilesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `evidenceId` | `path` | `EVIDENCE_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getIdentificationEvidenceJson

- **Server**: `defaultSkribbleIdentificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getIdentificationEvidenceJson(request: Identification.GetIdentificationEvidenceJsonRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Identification.GetIdentificationEvidenceJsonError>`
- **Wire**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Identification.GetIdentificationEvidenceJsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [401] `Problem` · `"problem2"` [403] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identification.GetIdentificationEvidenceJsonRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `evidenceId` | `path` | `EVIDENCE_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getIdentificationEvidenceJwt

- **Server**: `defaultSkribbleIdentificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getIdentificationEvidenceJwt(request: Identification.GetIdentificationEvidenceJwtRequest, options?: RequestOptions): ApiPromise<string, Identification.GetIdentificationEvidenceJwtError>`
- **Wire**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/jwt`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Identification.GetIdentificationEvidenceJwtError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [401] `Problem` · `"problem2"` [403] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identification.GetIdentificationEvidenceJwtRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `evidenceId` | `path` | `EVIDENCE_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getIdentificationEvidenceStatus

- **Server**: `defaultSkribbleIdentificationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getIdentificationEvidenceStatus(request: Identification.GetIdentificationEvidenceStatusRequest, options?: RequestOptions): ApiPromise<IdentificationEvidenceStatusResponse, Identification.GetIdentificationEvidenceStatusError>`
- **Wire**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/status`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IdentificationEvidenceStatusResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Identification.GetIdentificationEvidenceStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [401] `Problem` · `"problem2"` [403] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Identification.GetIdentificationEvidenceStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `srId` | `path` | `SR_ID` | `string` | yes |
| `evidenceId` | `path` | `EVIDENCE_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentificationEvidenceStatusResponse` | `identificationEvidenceStatusResponseSchema` | `src/models/identification-evidence-status-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

