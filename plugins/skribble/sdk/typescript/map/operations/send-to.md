<!-- Generated file — do not edit; regenerated with the SDK. -->

# SendTo — operations

Accessor: `client.sendTo` · Source: `src/resources/send-to.ts` · 4 operations · Request and error types: namespace `SendTo`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSendTo

- **Server**: `defaultSkribbleSendToApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSendTo(request: SendTo.CreateSendToRequestParams, options?: RequestOptions): ApiPromise<CreateSendToResponse, SendTo.CreateSendToError>`
- **Wire**: `POST /sendto`
- **Auth**: none — public; no credential is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `content` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateSendToResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SendTo.CreateSendToError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [406] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SendTo.CreateSendToRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `title` | `form` | `string` | yes |
| `content` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSendToResponse` | `createSendToResponseSchema` | `src/models/create-send-to-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### deleteSendTo

- **Server**: `defaultSkribbleSendToApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSendTo(request: SendTo.DeleteSendToRequest, options?: RequestOptions): ApiPromise<undefined, SendTo.DeleteSendToError>`
- **Wire**: `DELETE /sendto/{SEND_TO_ID}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SendTo.DeleteSendToError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SendTo.DeleteSendToRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sendToId` | `path` | `SEND_TO_ID` | `string` | yes |
| `xAccesscode` | `header` | `X-Accesscode` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### downloadSendTo

- **Server**: `defaultSkribbleSendToApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `downloadSendTo(request: SendTo.DownloadSendToRequest, options?: RequestOptions): ApiPromise<BinaryContent, SendTo.DownloadSendToError>`
- **Wire**: `GET /sendto/{SEND_TO_ID}/download`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SendTo.DownloadSendToError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SendTo.DownloadSendToRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sendToId` | `path` | `SEND_TO_ID` | `string` | yes |
| `xAccesscode` | `header` | `X-Accesscode` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### trackSendTo

- **Server**: `defaultSkribbleSendToApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `trackSendTo(request: SendTo.TrackSendToRequest, options?: RequestOptions): ApiPromise<TrackSendToResponse, SendTo.TrackSendToError>`
- **Wire**: `GET /sendto/{SEND_TO_ID}/track`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrackSendToResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `SendTo.TrackSendToError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SendTo.TrackSendToRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sendToId` | `path` | `SEND_TO_ID` | `string` | yes |
| `xAccesscode` | `header` | `X-Accesscode` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackSendToResponse` | `trackSendToResponseSchema` | `src/models/track-send-to-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

