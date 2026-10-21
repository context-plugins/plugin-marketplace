<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessChat — operations

Accessor: `client.serverlessChat` · Source: `src/resources/serverless-chat.ts` · 2 operations · Request and error types: namespace `ServerlessChat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### serverlessChatComplete

- **Signature**: `serverlessChatComplete(request: ServerlessChat.ServerlessChatCompleteRequest, options?: RequestOptions): ApiPromise<ChatResult, ServerlessChat.ServerlessChatCompleteError>`
- **Wire**: `POST /serverless/v1/chat/completions`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessChat.ServerlessChatCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessChat.ServerlessChatCompleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessChatCompletionBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessChatCompletionBody` | `serverlessChatCompletionBodySchema` | `src/models/serverless-chat-completion-body.ts` |
| `ChatResult` | `chatResultSchema` | `src/models/chat-result.ts` |

### serverlessChatStream

- **Signature**: `serverlessChatStream(request: ServerlessChat.ServerlessChatStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedChatResult>, ServerlessChat.ServerlessChatStreamError>`
- **Wire**: `POST /serverless/v1/chat/completions#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedChatResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedChatResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedChatResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessChat.ServerlessChatStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessChat.ServerlessChatStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessChatCompletionStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessChatCompletionStreamBody` | `serverlessChatCompletionStreamBodySchema` | `src/models/serverless-chat-completion-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedChatResult` | `streamedChatResultSchema` | `src/models/streamed-chat-result.ts` |

