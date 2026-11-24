<!-- Generated file — do not edit; regenerated with the SDK. -->

# FindAll — operations

Accessor: `client.findAll` · Source: `src/resources/find-all.ts` · 10 operations · Request and error types: namespace `FindAll`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### cancelFindallRunV1BetaFindallRunsFindallIdCancelPost

- **Signature**: `cancelFindallRunV1BetaFindallRunsFindallIdCancelPost(request: FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest, options?: RequestOptions): ApiPromise<undefined, FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError>`
- **Wire**: `POST /v1beta/findall/runs/{findall_id}/cancel`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost

- **Signature**: `enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(request: FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest, options?: RequestOptions): ApiPromise<FindAllSchema, FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError>`
- **Wire**: `POST /v1beta/findall/runs/{findall_id}/enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FindAllSchema`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |
| `body` | `body` | — | `FindAllEnrichInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `FindAllEnrichInput` | `findAllEnrichInputSchema` | `src/models/find-all-enrich-input.ts` |
| `FindAllSchema` | `findAllSchemaSchema` | `src/models/find-all-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### extendFindallRunV1BetaFindallRunsFindallIdExtendPost

- **Signature**: `extendFindallRunV1BetaFindallRunsFindallIdExtendPost(request: FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest, options?: RequestOptions): ApiPromise<FindAllSchema, FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError>`
- **Wire**: `POST /v1beta/findall/runs/{findall_id}/extend`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FindAllSchema`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |
| `body` | `body` | — | `FindAllExtendInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `FindAllExtendInput` | `findAllExtendInputSchema` | `src/models/find-all-extend-input.ts` |
| `FindAllSchema` | `findAllSchemaSchema` | `src/models/find-all-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### findallEntitySearchV1BetaFindallEntitySearchPost

- **Signature**: `findallEntitySearchV1BetaFindallEntitySearchPost(request: FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostRequest, options?: RequestOptions): ApiPromise<FindAllEntitySearchResponse, FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError>`
- **Wire**: `POST /v1beta/findall/entity-search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FindAllEntitySearchResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FindAllEntitySearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindAllEntitySearchRequest` | `findAllEntitySearchRequestSchema` | `src/models/find-all-entity-search-request.ts` |
| `FindAllEntitySearchResponse` | `findAllEntitySearchResponseSchema` | `src/models/find-all-entity-search-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### findallRunsV1GetV1BetaFindallRunsFindallIdGet

- **Signature**: `findallRunsV1GetV1BetaFindallRunsFindallIdGet(request: FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest, options?: RequestOptions): ApiPromise<FindAllRun, FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError>`
- **Wire**: `GET /v1beta/findall/runs/{findall_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FindAllRun`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `FindAllRun` | `findAllRunSchema` | `src/models/find-all-run.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### findallRunsV1V1BetaFindallRunsPost

- **Signature**: `findallRunsV1V1BetaFindallRunsPost(request: FindAll.FindallRunsV1V1BetaFindallRunsPostRequest, options?: RequestOptions): ApiPromise<FindAllRun, FindAll.FindallRunsV1V1BetaFindallRunsPostError>`
- **Wire**: `POST /v1beta/findall/runs`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FindAllRun`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.FindallRunsV1V1BetaFindallRunsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [402] `ErrorResponse` · `"errorResponse2"` [422] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.FindallRunsV1V1BetaFindallRunsPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |
| `body` | `body` | — | `FindAllRunInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `FindAllRunInput` | `findAllRunInputSchema` | `src/models/find-all-run-input.ts` |
| `FindAllRun` | `findAllRunSchema` | `src/models/find-all-run.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getFindallEventsV1BetaFindallRunsFindallIdEventsGet

- **Signature**: `getFindallEventsV1BetaFindallRunsFindallIdEventsGet(request: FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest, options?: RequestOptions): ApiPromise<EventStream<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>, FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError>`
- **Wire**: `GET /v1beta/findall/runs/{findall_id}/events`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventStream<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>` — `text/event-stream`, resolved at the response headers and read one `Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet`, whatever the event is named. The stream ends when the server closes it
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `lastEventId` | `query` | `last_event_id` | `LastEventId1` | no |
| `timeout` | `query` | — | `Timeout` | no |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LastEventId1` | `lastEventId1Schema` | `src/models/unions/last-event-id1.ts` |
| `Timeout` | `timeoutSchema` | `src/models/unions/timeout.ts` |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet` | `response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetSchema` | `src/models/unions/response200-get-findall-events-v1-beta-findall-runs-findall-id-events-get.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getFindallResultV1BetaFindallRunsFindallIdResultGet

- **Signature**: `getFindallResultV1BetaFindallRunsFindallIdResultGet(request: FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest, options?: RequestOptions): ApiPromise<FindAllRunResult, FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError>`
- **Wire**: `GET /v1beta/findall/runs/{findall_id}/result`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FindAllRunResult`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `FindAllRunResult` | `findAllRunResultSchema` | `src/models/find-all-run-result.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet

- **Signature**: `getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(request: FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest, options?: RequestOptions): ApiPromise<FindAllSchema, FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError>`
- **Wire**: `GET /v1beta/findall/runs/{findall_id}/schema`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FindAllSchema`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `findallId` | `path` | `findall_id` | `string` | yes |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `FindAllSchema` | `findAllSchemaSchema` | `src/models/find-all-schema.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### ingestFindallRunV1BetaFindallIngestPost

- **Signature**: `ingestFindallRunV1BetaFindallIngestPost(request: FindAll.IngestFindallRunV1BetaFindallIngestPostRequest, options?: RequestOptions): ApiPromise<FindAllSchema, FindAll.IngestFindallRunV1BetaFindallIngestPostError>`
- **Wire**: `POST /v1beta/findall/ingest`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FindAllSchema`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `FindAll.IngestFindallRunV1BetaFindallIngestPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FindAll.IngestFindallRunV1BetaFindallIngestPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |
| `body` | `body` | — | `IngestInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `IngestInput` | `ingestInputSchema` | `src/models/ingest-input.ts` |
| `FindAllSchema` | `findAllSchemaSchema` | `src/models/find-all-schema.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

