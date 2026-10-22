<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedResponses — operations

Accessor: `client.dedicatedResponses` · Source: `src/resources/dedicated-responses.ts` · 2 operations · Request and error types: namespace `DedicatedResponses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### dedicatedResponses

- **Signature**: `dedicatedResponses(request: DedicatedResponses.DedicatedResponsesRequest, options?: RequestOptions): ApiPromise<DedicatedResponsesSuccess, DedicatedResponses.DedicatedResponsesError>`
- **Wire**: `POST /dedicated/v1/responses`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedResponsesSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedResponses.DedicatedResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedResponses.DedicatedResponsesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedResponsesBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedResponsesBody` | `dedicatedResponsesBodySchema` | `src/models/dedicated-responses-body.ts` |
| `DedicatedResponsesSuccess` | `dedicatedResponsesSuccessSchema` | `src/models/dedicated-responses-success.ts` |

### dedicatedResponsesStream

- **Signature**: `dedicatedResponsesStream(request: DedicatedResponses.DedicatedResponsesStreamRequest, options?: RequestOptions): ApiPromise<EventStream<DedicatedResponsesStreamSuccess>, DedicatedResponses.DedicatedResponsesStreamError>`
- **Wire**: `POST /dedicated/v1/responses#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<DedicatedResponsesStreamSuccess>` — `text/event-stream`, resolved at the response headers and read one `DedicatedResponsesStreamSuccess` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `DedicatedResponsesStreamSuccess`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedResponses.DedicatedResponsesStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedResponses.DedicatedResponsesStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedResponsesStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedResponsesStreamBody` | `dedicatedResponsesStreamBodySchema` | `src/models/dedicated-responses-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `DedicatedResponsesStreamSuccess` | `dedicatedResponsesStreamSuccessSchema` | `src/models/dedicated-responses-stream-success.ts` |

