<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerMessages — operations

Accessor: `client.containerMessages` · Source: `src/resources/container-messages.ts` · 2 operations · Request and error types: namespace `ContainerMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### containerMessages

- **Signature**: `containerMessages(request: ContainerMessages.ContainerMessagesRequest, options?: RequestOptions): ApiPromise<ContainerMessagesSuccess, ContainerMessages.ContainerMessagesError>`
- **Wire**: `POST /v1/messages`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContainerMessagesSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerMessages.ContainerMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messagesErrorResponse"` [422] `MessagesErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerMessages.ContainerMessagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerMessagesBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerMessagesBody` | `containerMessagesBodySchema` | `src/models/container-messages-body.ts` |
| `ContainerMessagesSuccess` | `containerMessagesSuccessSchema` | `src/models/container-messages-success.ts` |
| `MessagesErrorResponse` | `messagesErrorResponseSchema` | `src/models/messages-error-response.ts` |

### containerMessagesStream

- **Signature**: `containerMessagesStream(request: ContainerMessages.ContainerMessagesStreamRequest, options?: RequestOptions): ApiPromise<EventStream<ContainerMessagesStreamSuccess>, ContainerMessages.ContainerMessagesStreamError>`
- **Wire**: `POST /v1/messages#stream`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<ContainerMessagesStreamSuccess>` — `text/event-stream`, resolved at the response headers and read one `ContainerMessagesStreamSuccess` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `ContainerMessagesStreamSuccess`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerMessages.ContainerMessagesStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messagesErrorResponse"` [422] `MessagesErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerMessages.ContainerMessagesStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerMessagesStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerMessagesStreamBody` | `containerMessagesStreamBodySchema` | `src/models/container-messages-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ContainerMessagesStreamSuccess` | `containerMessagesStreamSuccessSchema` | `src/models/container-messages-stream-success.ts` |
| `MessagesErrorResponse` | `messagesErrorResponseSchema` | `src/models/messages-error-response.ts` |

