<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agent — operations

Accessor: `client.agent` · Source: `src/resources/agent.ts` · 4 operations · Request and error types: namespace `Agent`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skylight-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### answer

- **Signature**: `answer(request: Agent.AnswerRequest, options?: RequestOptions): ApiPromise<StandardResponse, Agent.AnswerError>`
- **Wire**: `POST /agent/answer/{agent_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Agent.AnswerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.AnswerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### run

- **Signature**: `run(request: Agent.RunRequest, options?: RequestOptions): ApiPromise<StandardResponse, Agent.RunError>`
- **Wire**: `POST /agent/run/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Agent.RunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.RunRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `ClaudeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClaudeRequest` | `claudeRequestSchema` | `src/models/claude-request.ts` |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### status

- **Signature**: `status(request: Agent.StatusRequest, options?: RequestOptions): ApiPromise<AgentStatusResponse, Agent.StatusError>`
- **Wire**: `GET /agent/status/{agent_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentStatusResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Agent.StatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.StatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentStatusResponse` | `agentStatusResponseSchema` | `src/models/agent-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### stop

- **Signature**: `stop(request: Agent.StopRequest, options?: RequestOptions): ApiPromise<StandardResponse, Agent.StopError>`
- **Wire**: `POST /agent/stop/{instance_id}`
- **Auth**: `apikey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StandardResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `Agent.StopError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agent.StopRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StandardResponse` | `standardResponseSchema` | `src/models/standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

