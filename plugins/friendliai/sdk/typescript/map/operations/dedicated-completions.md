<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedCompletions — operations

Accessor: `client.dedicatedCompletions` · Source: `src/resources/dedicated-completions.ts` · 2 operations · Request and error types: namespace `DedicatedCompletions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### dedicatedCompletionsComplete

- **Signature**: `dedicatedCompletionsComplete(request: DedicatedCompletions.DedicatedCompletionsCompleteRequest, options?: RequestOptions): ApiPromise<CompletionsResult, DedicatedCompletions.DedicatedCompletionsCompleteError>`
- **Wire**: `POST /dedicated/v1/completions`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompletionsResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedCompletions.DedicatedCompletionsCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedCompletions.DedicatedCompletionsCompleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedCompletionsBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedCompletionsBody` | `dedicatedCompletionsBodySchema` | `src/models/unions/dedicated-completions-body.ts` |
| `CompletionsResult` | `completionsResultSchema` | `src/models/completions-result.ts` |

### dedicatedCompletionsStream

- **Signature**: `dedicatedCompletionsStream(request: DedicatedCompletions.DedicatedCompletionsStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedCompletionsResult>, DedicatedCompletions.DedicatedCompletionsStreamError>`
- **Wire**: `POST /dedicated/v1/completions#stream`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedCompletionsResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedCompletionsResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedCompletionsResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedCompletions.DedicatedCompletionsStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedCompletions.DedicatedCompletionsStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedCompletionsStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedCompletionsStreamBody` | `dedicatedCompletionsStreamBodySchema` | `src/models/unions/dedicated-completions-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedCompletionsResult` | `streamedCompletionsResultSchema` | `src/models/streamed-completions-result.ts` |

