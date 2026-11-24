<!-- Generated file — do not edit; regenerated with the SDK. -->

# NlWeb — operations

Accessor: `client.nlWeb` · Source: `src/resources/nl-web.ts` · 2 operations · Request and error types: namespace `NlWeb`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `agent-ready`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### askGet

- **Signature**: `askGet(request: NlWeb.AskGetRequest, options?: RequestOptions): ApiPromise<AskResponse1, NlWeb.AskGetError>`
- **Wire**: `GET /api/v1/ask`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AskResponse1`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `NlWeb.AskGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [429] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NlWeb.AskGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `query` | `query` | `string` | yes |
| `mode` | `query` | `Mode` | no |
| `itemType` | `query` | `ItemType3` | no |
| `stream` | `query` | `Stream` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Mode` | `modeSchema` | `src/models/mode.ts` |
| `ItemType3` | `itemType3Schema` | `src/models/item-type3.ts` |
| `Stream` | `streamSchema` | `src/models/stream.ts` |
| `AskResponse1` | `askResponse1Schema` | `src/models/unions/ask-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### askPost

- **Signature**: `askPost(request: NlWeb.AskPostRequest, options?: RequestOptions): ApiPromise<AskResponse1, NlWeb.AskPostError>`
- **Wire**: `POST /api/v1/ask`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AskResponse1`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `NlWeb.AskPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"askResponse1"` [404] `AskResponse1` · `"error2"` [429] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NlWeb.AskPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AskRequest` | `askRequestSchema` | `src/models/ask-request.ts` |
| `AskResponse1` | `askResponse1Schema` | `src/models/unions/ask-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

