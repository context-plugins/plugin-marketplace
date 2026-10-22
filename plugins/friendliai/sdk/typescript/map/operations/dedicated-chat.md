<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedChat — operations

Accessor: `client.dedicatedChat` · Source: `src/resources/dedicated-chat.ts` · 2 operations · Request and error types: namespace `DedicatedChat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### dedicatedChatComplete

- **Signature**: `dedicatedChatComplete(request: DedicatedChat.DedicatedChatCompleteRequest, options?: RequestOptions): ApiPromise<ChatResult, DedicatedChat.DedicatedChatCompleteError>`
- **Wire**: `POST /dedicated/v1/chat/completions`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedChat.DedicatedChatCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedChat.DedicatedChatCompleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedChatCompletionBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedChatCompletionBody` | `dedicatedChatCompletionBodySchema` | `src/models/dedicated-chat-completion-body.ts` |
| `ChatResult` | `chatResultSchema` | `src/models/chat-result.ts` |

### dedicatedChatStream

- **Signature**: `dedicatedChatStream(request: DedicatedChat.DedicatedChatStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedChatResult>, DedicatedChat.DedicatedChatStreamError>`
- **Wire**: `POST /dedicated/v1/chat/completions#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedChatResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedChatResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedChatResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedChat.DedicatedChatStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedChat.DedicatedChatStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedChatCompletionStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedChatCompletionStreamBody` | `dedicatedChatCompletionStreamBodySchema` | `src/models/dedicated-chat-completion-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedChatResult` | `streamedChatResultSchema` | `src/models/streamed-chat-result.ts` |

