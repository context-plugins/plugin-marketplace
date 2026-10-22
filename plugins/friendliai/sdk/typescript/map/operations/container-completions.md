<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerCompletions — operations

Accessor: `client.containerCompletions` · Source: `src/resources/container-completions.ts` · 2 operations · Request and error types: namespace `ContainerCompletions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### containerCompletionsComplete

- **Signature**: `containerCompletionsComplete(request: ContainerCompletions.ContainerCompletionsCompleteRequest, options?: RequestOptions): ApiPromise<CompletionsResult, ContainerCompletions.ContainerCompletionsCompleteError>`
- **Wire**: `POST /v1/completions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompletionsResult`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerCompletions.ContainerCompletionsCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerCompletions.ContainerCompletionsCompleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerCompletionsBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerCompletionsBody` | `containerCompletionsBodySchema` | `src/models/unions/container-completions-body.ts` |
| `CompletionsResult` | `completionsResultSchema` | `src/models/completions-result.ts` |

### containerCompletionsStream

- **Signature**: `containerCompletionsStream(request: ContainerCompletions.ContainerCompletionsStreamRequest, options?: RequestOptions): ApiPromise<EventStream<StreamedCompletionsResult>, ContainerCompletions.ContainerCompletionsStreamError>`
- **Wire**: `POST /v1/completions#stream`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<StreamedCompletionsResult>` — `text/event-stream`, resolved at the response headers and read one `StreamedCompletionsResult` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `StreamedCompletionsResult`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerCompletions.ContainerCompletionsStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerCompletions.ContainerCompletionsStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerCompletionsStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerCompletionsStreamBody` | `containerCompletionsStreamBodySchema` | `src/models/unions/container-completions-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `StreamedCompletionsResult` | `streamedCompletionsResultSchema` | `src/models/streamed-completions-result.ts` |

