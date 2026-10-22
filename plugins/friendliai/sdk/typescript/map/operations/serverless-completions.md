<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessCompletions — operations

Accessor: `client.serverlessCompletions` · Source: `src/resources/serverless-completions.ts` · 2 operations · Request and error types: namespace `ServerlessCompletions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### serverlessCompletionsComplete

- **Signature**: `serverlessCompletionsComplete(request: ServerlessCompletions.ServerlessCompletionsCompleteRequest, options?: RequestOptions): ApiPromise<CompletionsResult, ServerlessCompletions.ServerlessCompletionsCompleteError>`
- **Wire**: `POST /serverless/v1/completions`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompletionsResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessCompletions.ServerlessCompletionsCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessCompletions.ServerlessCompletionsCompleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessCompletionsBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessCompletionsBody` | `serverlessCompletionsBodySchema` | `src/models/unions/serverless-completions-body.ts` |
| `CompletionsResult` | `completionsResultSchema` | `src/models/completions-result.ts` |

### serverlessCompletionsStream

- **Signature**: `serverlessCompletionsStream(request: ServerlessCompletions.ServerlessCompletionsStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedCompletionsResult>, ServerlessCompletions.ServerlessCompletionsStreamError>`
- **Wire**: `POST /serverless/v1/completions#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedCompletionsResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedCompletionsResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedCompletionsResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessCompletions.ServerlessCompletionsStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessCompletions.ServerlessCompletionsStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessCompletionsStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessCompletionsStreamBody` | `serverlessCompletionsStreamBodySchema` | `src/models/unions/serverless-completions-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedCompletionsResult` | `streamedCompletionsResultSchema` | `src/models/streamed-completions-result.ts` |

