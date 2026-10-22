<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerResponses — operations

Accessor: `client.containerResponses` · Source: `src/resources/container-responses.ts` · 2 operations · Request and error types: namespace `ContainerResponses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### containerResponses

- **Signature**: `containerResponses(request: ContainerResponses.ContainerResponsesRequest, options?: RequestOptions): ApiPromise<ContainerResponsesSuccess, ContainerResponses.ContainerResponsesError>`
- **Wire**: `POST /v1/responses`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContainerResponsesSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerResponses.ContainerResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerResponses.ContainerResponsesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerResponsesBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerResponsesBody` | `containerResponsesBodySchema` | `src/models/container-responses-body.ts` |
| `ContainerResponsesSuccess` | `containerResponsesSuccessSchema` | `src/models/container-responses-success.ts` |

### containerResponsesStream

- **Signature**: `containerResponsesStream(request: ContainerResponses.ContainerResponsesStreamRequest, options?: RequestOptions): ApiPromise<EventStream<ContainerResponsesStreamSuccess>, ContainerResponses.ContainerResponsesStreamError>`
- **Wire**: `POST /v1/responses#stream`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<ContainerResponsesStreamSuccess>` — `text/event-stream`, resolved at the response headers and read one `ContainerResponsesStreamSuccess` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `ContainerResponsesStreamSuccess`, whatever the event is named. The stream ends when the server closes it
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerResponses.ContainerResponsesStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerResponses.ContainerResponsesStreamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerResponsesStreamBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerResponsesStreamBody` | `containerResponsesStreamBodySchema` | `src/models/container-responses-stream-body.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ContainerResponsesStreamSuccess` | `containerResponsesStreamSuccessSchema` | `src/models/container-responses-stream-success.ts` |

