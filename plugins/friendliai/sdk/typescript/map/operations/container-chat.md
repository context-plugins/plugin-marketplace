<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerChat — operations

Accessor: `client.containerChat` · Source: `src/resources/container-chat.ts` · 2 operations · Request and error types: namespace `ContainerChat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### containerChatComplete

- **Signature**: `containerChatComplete(request: ContainerChat.ContainerChatCompleteRequest, options?: RequestOptions): ApiPromise<ChatResult, ContainerChat.ContainerChatCompleteError>`
- **Wire**: `POST /v1/chat/completions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerChat.ContainerChatCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerChat.ContainerChatCompleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerChatCompletionBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerChatCompletionBody` | `containerChatCompletionBodySchema` | `src/models/container-chat-completion-body.ts` |
| `ChatResult` | `chatResultSchema` | `src/models/chat-result.ts` |

### containerChatStream

- **Signature**: `containerChatStream(request: ContainerChat.ContainerChatStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedChatResult>, ContainerChat.ContainerChatStreamError>`
- **Wire**: `POST /v1/chat/completions#stream`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedChatResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedChatResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedChatResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerChat.ContainerChatStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerChat.ContainerChatStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerChatCompletionStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerChatCompletionStreamBody` | `containerChatCompletionStreamBodySchema` | `src/models/container-chat-completion-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedChatResult` | `streamedChatResultSchema` | `src/models/streamed-chat-result.ts` |

