<!-- Generated file — do not edit; regenerated with the SDK. -->

# QaAgents — operations

Accessor: `client.qaAgents` · Source: `src/resources/qa-agents.ts` · 5 operations · Request and error types: namespace `QaAgents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet

- **Signature**: `getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(request: QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest, options?: RequestOptions): ApiPromise<TraceEventsResponse, QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/qa-agents/results/{result_id}/rollout`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceEventsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `resultId` | `path` | `result_id` | `string` | yes | — |
| `sinceSeq` | `query` | `since_seq` | `number` | no | `-1` |
| `limit` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceEventsResponse` | `traceEventsResponseSchema` | `src/models/trace-events-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getQaAgentV2QaAgentsAgentIdGet

- **Signature**: `getQaAgentV2QaAgentsAgentIdGet(request: QaAgents.GetQaAgentV2QaAgentsAgentIdGetRequest, options?: RequestOptions): ApiPromise<QaAgentResponse, QaAgents.GetQaAgentV2QaAgentsAgentIdGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/qa-agents/{agent_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QaAgentResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `QaAgents.GetQaAgentV2QaAgentsAgentIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QaAgents.GetQaAgentV2QaAgentsAgentIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QaAgentResponse` | `qaAgentResponseSchema` | `src/models/qa-agent-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listQaAgentsV2QaAgentsGet

- **Signature**: `listQaAgentsV2QaAgentsGet(request?: QaAgents.ListQaAgentsV2QaAgentsGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseQaAgentResponse, QaAgents.ListQaAgentsV2QaAgentsGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/qa-agents`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseQaAgentResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `QaAgents.ListQaAgentsV2QaAgentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QaAgents.ListQaAgentsV2QaAgentsGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `subjectType` | `query` | `subject_type` | `QaAgentSubjectType` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `QaAgentSubjectType` | `qaAgentSubjectTypeSchema` | `src/models/qa-agent-subject-type.ts` |
| `PaginatedResponseQaAgentResponse` | `paginatedResponseQaAgentResponseSchema` | `src/models/paginated-response-qa-agent-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listResourceQaAgentResultsV2QaAgentsResultsResourcesGet

- **Signature**: `listResourceQaAgentResultsV2QaAgentsResultsResourcesGet(request?: QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest, options?: RequestOptions): ApiPromise<QaAgentResourceResultDetail[], QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/qa-agents/results/resources`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QaAgentResourceResultDetail[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subjectType` | `query` | `subject_type` | `SubjectType` | no |
| `subjectIds` | `query` | `subject_ids` | `SubjectIds` | no |
| `resultIds` | `query` | `result_ids` | `ResultIds` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubjectType` | `subjectTypeSchema` | `src/models/unions/subject-type.ts` |
| `SubjectIds` | `subjectIdsSchema` | `src/models/unions/subject-ids.ts` |
| `ResultIds` | `resultIdsSchema` | `src/models/unions/result-ids.ts` |
| `QaAgentResourceResultDetail` | `qaAgentResourceResultDetailSchema` | `src/models/qa-agent-resource-result-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost

- **Signature**: `runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(request: QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest, options?: RequestOptions): ApiPromise<QaAgentResultResponse[], QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /v2/qa-agents/{agent_id}/run-resources`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QaAgentResultResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `body` | `body` | — | `QaAgentResourceRunRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QaAgentResourceRunRequest` | `qaAgentResourceRunRequestSchema` | `src/models/qa-agent-resource-run-request.ts` |
| `QaAgentResultResponse` | `qaAgentResultResponseSchema` | `src/models/qa-agent-result-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

