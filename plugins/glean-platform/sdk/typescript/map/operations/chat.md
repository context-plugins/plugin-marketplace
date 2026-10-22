<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chat — operations

Accessor: `client.chat` · Source: `src/resources/chat.ts` · 2 operations · Request and error types: namespace `Chat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### platformChatCreate

- **Signature**: `platformChatCreate(request: Chat.PlatformChatCreateRequestParams, options?: RequestOptions): ApiPromise<PlatformChatCompletedResponse, Chat.PlatformChatCreateError>`
- **Wire**: `POST /api/chat`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformChatCompletedResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Chat.PlatformChatCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chat.PlatformChatCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiChatRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiChatRequest` | `apiChatRequestSchema` | `src/models/api-chat-request.ts` |
| `PlatformChatCompletedResponse` | `platformChatCompletedResponseSchema` | `src/models/platform-chat-completed-response.ts` |

### platformChatCreateStream

- **Signature**: `platformChatCreateStream(request: Chat.PlatformChatCreateStreamRequest, options?: RequestOptions): ApiPromise<EventStream<PlatformChatStreamEventServerSentEvent>, Chat.PlatformChatCreateStreamError>`
- **Wire**: `POST /api/chat#stream`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<PlatformChatStreamEventServerSentEvent>` — `text/event-stream`, resolved at the response headers and read one `PlatformChatStreamEventServerSentEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `PlatformChatStreamEventServerSentEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Chat.PlatformChatCreateStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chat.PlatformChatCreateStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiChatStreamRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiChatStreamRequest` | `apiChatStreamRequestSchema` | `src/models/api-chat-stream-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `PlatformChatStreamEventServerSentEvent` | `platformChatStreamEventServerSentEventSchema` | `src/models/unions/platform-chat-stream-event-server-sent-event.ts` |

