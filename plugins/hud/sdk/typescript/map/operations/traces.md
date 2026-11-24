<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.traces` · Source: `src/resources/traces.ts` · 13 operations · Request and error types: namespace `Traces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchValidateTracesV2TraceBatchValidatePost

- **Signature**: `batchValidateTracesV2TraceBatchValidatePost(request: Traces.BatchValidateTracesV2TraceBatchValidatePostRequest, options?: RequestOptions): ApiPromise<TraceBatchValidateResponse, Traces.BatchValidateTracesV2TraceBatchValidatePostError>`
- **Wire**: `POST /v2/trace/batch-validate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TraceBatchValidateResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.BatchValidateTracesV2TraceBatchValidatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.BatchValidateTracesV2TraceBatchValidatePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TraceBatchValidateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceBatchValidateRequest` | `traceBatchValidateRequestSchema` | `src/models/trace-batch-validate-request.ts` |
| `TraceBatchValidateResponse` | `traceBatchValidateResponseSchema` | `src/models/trace-batch-validate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet

- **Signature**: `getTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(request: Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest, options?: RequestOptions): ApiPromise<TraceAnalysisContextResponse, Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/analysis-context`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceAnalysisContextResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes | — |
| `includeSpans` | `query` | `include_spans` | `boolean` | no | `true` |
| `includeEnvLogs` | `query` | `include_env_logs` | `boolean` | no | `true` |
| `includeWorkerLogs` | `query` | `include_worker_logs` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceAnalysisContextResponse` | `traceAnalysisContextResponseSchema` | `src/models/trace-analysis-context-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet

- **Signature**: `getTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(request: Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest, options?: RequestOptions): ApiPromise<TraceAnalysisPromptResponse, Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/analysis-prompt`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceAnalysisPromptResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceAnalysisPromptResponse` | `traceAnalysisPromptResponseSchema` | `src/models/trace-analysis-prompt-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceEnvLogsV2TraceTraceIdEnvLogsGet

- **Signature**: `getTraceEnvLogsV2TraceTraceIdEnvLogsGet(request: Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest, options?: RequestOptions): ApiPromise<EnvLogsResponse, Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/env-logs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnvLogsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnvLogsResponse` | `envLogsResponseSchema` | `src/models/env-logs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceEventsV2TraceTraceIdEventsGet

- **Signature**: `getTraceEventsV2TraceTraceIdEventsGet(request: Traces.GetTraceEventsV2TraceTraceIdEventsGetRequest, options?: RequestOptions): ApiPromise<TraceEventsResponse, Traces.GetTraceEventsV2TraceTraceIdEventsGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/events`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceEventsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceEventsV2TraceTraceIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceEventsV2TraceTraceIdEventsGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes | — |
| `sinceSeq` | `query` | `since_seq` | `number` | no | `-1` |
| `limit` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceEventsResponse` | `traceEventsResponseSchema` | `src/models/trace-events-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceInfoV2TraceTraceIdInfoGet

- **Signature**: `getTraceInfoV2TraceTraceIdInfoGet(request: Traces.GetTraceInfoV2TraceTraceIdInfoGetRequest, options?: RequestOptions): ApiPromise<TraceInfoResponse, Traces.GetTraceInfoV2TraceTraceIdInfoGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/info`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceInfoResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceInfoV2TraceTraceIdInfoGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceInfoV2TraceTraceIdInfoGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceInfoResponse` | `traceInfoResponseSchema` | `src/models/trace-info-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceLogsV2TraceTraceIdLogsGet

- **Signature**: `getTraceLogsV2TraceTraceIdLogsGet(request: Traces.GetTraceLogsV2TraceTraceIdLogsGetRequest, options?: RequestOptions): ApiPromise<TraceLogsResponse, Traces.GetTraceLogsV2TraceTraceIdLogsGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/logs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceLogsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceLogsV2TraceTraceIdLogsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceLogsV2TraceTraceIdLogsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceLogsResponse` | `traceLogsResponseSchema` | `src/models/trace-logs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceUsageV2TraceTraceIdUsageGet

- **Signature**: `getTraceUsageV2TraceTraceIdUsageGet(request: Traces.GetTraceUsageV2TraceTraceIdUsageGetRequest, options?: RequestOptions): ApiPromise<TraceUsageBreakdown, Traces.GetTraceUsageV2TraceTraceIdUsageGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceUsageBreakdown`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceUsageV2TraceTraceIdUsageGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceUsageV2TraceTraceIdUsageGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceUsageBreakdown` | `traceUsageBreakdownSchema` | `src/models/trace-usage-breakdown.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTraceV2TraceTraceIdGet

- **Signature**: `getTraceV2TraceTraceIdGet(request: Traces.GetTraceV2TraceTraceIdGetRequest, options?: RequestOptions): ApiPromise<TraceDetailResponse, Traces.GetTraceV2TraceTraceIdGetError>`
- **Wire**: `GET /v2/trace/{trace_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceDetailResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.GetTraceV2TraceTraceIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.GetTraceV2TraceTraceIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceDetailResponse` | `traceDetailResponseSchema` | `src/models/trace-detail-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listRelatedTracesV2TraceTraceIdRelatedGet

- **Signature**: `listRelatedTracesV2TraceTraceIdRelatedGet(request: Traces.ListRelatedTracesV2TraceTraceIdRelatedGetRequest, options?: RequestOptions): ApiPromise<TraceThumbnail[], Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError>`
- **Wire**: `GET /v2/trace/{trace_id}/related`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceThumbnail[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.ListRelatedTracesV2TraceTraceIdRelatedGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.ListRelatedTracesV2TraceTraceIdRelatedGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes | — |
| `kind` | `query` | — | `RelatedKind1` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |
| `scopeToJob` | `query` | `scope_to_job` | `boolean` | no | `false` |
| `status` | `query` | — | `Status21` | no | — |
| `order` | `query` | — | `RelatedOrder1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RelatedKind1` | `relatedKind1Schema` | `src/models/related-kind1.ts` |
| `Status21` | `status21Schema` | `src/models/unions/status21.ts` |
| `RelatedOrder1` | `relatedOrder1Schema` | `src/models/related-order1.ts` |
| `TraceThumbnail` | `traceThumbnailSchema` | `src/models/trace-thumbnail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### publishTraceV2TraceTraceIdPublishPost

- **Signature**: `publishTraceV2TraceTraceIdPublishPost(request: Traces.PublishTraceV2TraceTraceIdPublishPostRequest, options?: RequestOptions): ApiPromise<PublishTraceResponse, Traces.PublishTraceV2TraceTraceIdPublishPostError>`
- **Wire**: `POST /v2/trace/{trace_id}/publish`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublishTraceResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.PublishTraceV2TraceTraceIdPublishPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.PublishTraceV2TraceTraceIdPublishPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishTraceResponse` | `publishTraceResponseSchema` | `src/models/publish-trace-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### unpublishTraceV2TraceTraceIdPublishDelete

- **Signature**: `unpublishTraceV2TraceTraceIdPublishDelete(request: Traces.UnpublishTraceV2TraceTraceIdPublishDeleteRequest, options?: RequestOptions): ApiPromise<StatusResponse, Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError>`
- **Wire**: `DELETE /v2/trace/{trace_id}/publish`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.UnpublishTraceV2TraceTraceIdPublishDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.UnpublishTraceV2TraceTraceIdPublishDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusResponse` | `statusResponseSchema` | `src/models/status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateTraceV2TraceTraceIdPatch

- **Signature**: `updateTraceV2TraceTraceIdPatch(request: Traces.UpdateTraceV2TraceTraceIdPatchRequest, options?: RequestOptions): ApiPromise<TraceInfoResponse, Traces.UpdateTraceV2TraceTraceIdPatchError>`
- **Wire**: `PATCH /v2/trace/{trace_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TraceInfoResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Traces.UpdateTraceV2TraceTraceIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Traces.UpdateTraceV2TraceTraceIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |
| `body` | `body` | — | `TraceUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceUpdateRequest` | `traceUpdateRequestSchema` | `src/models/trace-update-request.ts` |
| `TraceInfoResponse` | `traceInfoResponseSchema` | `src/models/trace-info-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

