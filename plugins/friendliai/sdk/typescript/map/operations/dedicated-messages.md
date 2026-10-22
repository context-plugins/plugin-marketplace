<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedMessages — operations

Accessor: `client.dedicatedMessages` · Source: `src/resources/dedicated-messages.ts` · 2 operations · Request and error types: namespace `DedicatedMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### dedicatedMessages

- **Signature**: `dedicatedMessages(request: DedicatedMessages.DedicatedMessagesRequest, options?: RequestOptions): ApiPromise<DedicatedMessagesSuccess, DedicatedMessages.DedicatedMessagesError>`
- **Wire**: `POST /dedicated/v1/messages`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedMessagesSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedMessages.DedicatedMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messagesErrorResponse"` [422] `MessagesErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedMessages.DedicatedMessagesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedMessagesBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedMessagesBody` | `dedicatedMessagesBodySchema` | `src/models/dedicated-messages-body.ts` |
| `DedicatedMessagesSuccess` | `dedicatedMessagesSuccessSchema` | `src/models/dedicated-messages-success.ts` |
| `MessagesErrorResponse` | `messagesErrorResponseSchema` | `src/models/messages-error-response.ts` |

### dedicatedMessagesStream

- **Signature**: `dedicatedMessagesStream(request: DedicatedMessages.DedicatedMessagesStreamRequest, options?: RequestOptions): ApiPromise<EventStream<DedicatedMessagesStreamSuccess>, DedicatedMessages.DedicatedMessagesStreamError>`
- **Wire**: `POST /dedicated/v1/messages#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<DedicatedMessagesStreamSuccess>` — `text/event-stream`, resolved at the response headers and read one `DedicatedMessagesStreamSuccess` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `DedicatedMessagesStreamSuccess`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedMessages.DedicatedMessagesStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messagesErrorResponse"` [422] `MessagesErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedMessages.DedicatedMessagesStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedMessagesStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedMessagesStreamBody` | `dedicatedMessagesStreamBodySchema` | `src/models/dedicated-messages-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `DedicatedMessagesStreamSuccess` | `dedicatedMessagesStreamSuccessSchema` | `src/models/dedicated-messages-stream-success.ts` |
| `MessagesErrorResponse` | `messagesErrorResponseSchema` | `src/models/messages-error-response.ts` |

