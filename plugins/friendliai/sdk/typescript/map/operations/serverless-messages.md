<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessMessages — operations

Accessor: `client.serverlessMessages` · Source: `src/resources/serverless-messages.ts` · 2 operations · Request and error types: namespace `ServerlessMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### serverlessMessages

- **Signature**: `serverlessMessages(request: ServerlessMessages.ServerlessMessagesRequest, options?: RequestOptions): ApiPromise<ServerlessMessagesSuccess, ServerlessMessages.ServerlessMessagesError>`
- **Wire**: `POST /serverless/v1/messages`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServerlessMessagesSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessMessages.ServerlessMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messagesErrorResponse"` [422] `MessagesErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessMessages.ServerlessMessagesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessMessagesBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessMessagesBody` | `serverlessMessagesBodySchema` | `src/models/serverless-messages-body.ts` |
| `ServerlessMessagesSuccess` | `serverlessMessagesSuccessSchema` | `src/models/serverless-messages-success.ts` |
| `MessagesErrorResponse` | `messagesErrorResponseSchema` | `src/models/messages-error-response.ts` |

### serverlessMessagesStream

- **Signature**: `serverlessMessagesStream(request: ServerlessMessages.ServerlessMessagesStreamRequest, options?: RequestOptions): ApiPromise<EventStream<ServerlessMessagesStreamSuccess>, ServerlessMessages.ServerlessMessagesStreamError>`
- **Wire**: `POST /serverless/v1/messages#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<ServerlessMessagesStreamSuccess>` — `text/event-stream`, resolved at the response headers and read one `ServerlessMessagesStreamSuccess` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `ServerlessMessagesStreamSuccess`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessMessages.ServerlessMessagesStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messagesErrorResponse"` [422] `MessagesErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessMessages.ServerlessMessagesStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessMessagesStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessMessagesStreamBody` | `serverlessMessagesStreamBodySchema` | `src/models/serverless-messages-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ServerlessMessagesStreamSuccess` | `serverlessMessagesStreamSuccessSchema` | `src/models/serverless-messages-stream-success.ts` |
| `MessagesErrorResponse` | `messagesErrorResponseSchema` | `src/models/messages-error-response.ts` |

