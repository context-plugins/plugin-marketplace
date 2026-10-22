<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessResponses — operations

Accessor: `client.serverlessResponses` · Source: `src/resources/serverless-responses.ts` · 2 operations · Request and error types: namespace `ServerlessResponses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### serverlessResponses

- **Signature**: `serverlessResponses(request: ServerlessResponses.ServerlessResponsesRequest, options?: RequestOptions): ApiPromise<ServerlessResponsesSuccess, ServerlessResponses.ServerlessResponsesError>`
- **Wire**: `POST /serverless/v1/responses`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServerlessResponsesSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessResponses.ServerlessResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessResponses.ServerlessResponsesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessResponsesBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessResponsesBody` | `serverlessResponsesBodySchema` | `src/models/serverless-responses-body.ts` |
| `ServerlessResponsesSuccess` | `serverlessResponsesSuccessSchema` | `src/models/serverless-responses-success.ts` |

### serverlessResponsesStream

- **Signature**: `serverlessResponsesStream(request: ServerlessResponses.ServerlessResponsesStreamRequest, options?: RequestOptions): ApiPromise<EventStream<ServerlessResponsesStreamSuccess>, ServerlessResponses.ServerlessResponsesStreamError>`
- **Wire**: `POST /serverless/v1/responses#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<ServerlessResponsesStreamSuccess>` — `text/event-stream`, resolved at the response headers and read one `ServerlessResponsesStreamSuccess` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `ServerlessResponsesStreamSuccess`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessResponses.ServerlessResponsesStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessResponses.ServerlessResponsesStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessResponsesStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessResponsesStreamBody` | `serverlessResponsesStreamBodySchema` | `src/models/serverless-responses-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ServerlessResponsesStreamSuccess` | `serverlessResponsesStreamSuccessSchema` | `src/models/serverless-responses-stream-success.ts` |

