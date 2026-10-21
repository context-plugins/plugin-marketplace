<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 7 operations · Request and error types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformAgentsCancelRun

- **Signature**: `platformAgentsCancelRun(request: Agents.PlatformAgentsCancelRunRequest, options?: RequestOptions): ApiPromise<PlatformAgentRunResponse, Agents.PlatformAgentsCancelRunError>`
- **Wire**: `POST /api/agents/{agent_id}/cancellations`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformAgentRunResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsCancelRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsCancelRunRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `body` | `body` | — | `PlatformAgentRunCancellationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentRunCancellationRequest` | `platformAgentRunCancellationRequestSchema` | `src/models/platform-agent-run-cancellation-request.ts` |
| `PlatformAgentRunResponse` | `platformAgentRunResponseSchema` | `src/models/platform-agent-run-response.ts` |

### platformAgentsCreateRun

- **Signature**: `platformAgentsCreateRun(request: Agents.PlatformAgentsCreateRunRequest, options?: RequestOptions): ApiPromise<PlatformAgentRunWaitResponse, Agents.PlatformAgentsCreateRunError>`
- **Wire**: `POST /api/agents/{agent_id}/runs`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformAgentRunWaitResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsCreateRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsCreateRunRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `body` | `body` | — | `PlatformAgentRunCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentRunCreateRequest` | `platformAgentRunCreateRequestSchema` | `src/models/platform-agent-run-create-request.ts` |
| `PlatformAgentRunWaitResponse` | `platformAgentRunWaitResponseSchema` | `src/models/platform-agent-run-wait-response.ts` |

### platformAgentsCreateRunResponses

- **Signature**: `platformAgentsCreateRunResponses(request: Agents.PlatformAgentsCreateRunResponsesRequest, options?: RequestOptions): ApiPromise<PlatformAgentRunResponse, Agents.PlatformAgentsCreateRunResponsesError>`
- **Wire**: `POST /api/agents/{agent_id}/responses`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformAgentRunResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsCreateRunResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsCreateRunResponsesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `body` | `body` | — | `PlatformAgentRunResponsesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentRunResponsesRequest` | `platformAgentRunResponsesRequestSchema` | `src/models/platform-agent-run-responses-request.ts` |
| `PlatformAgentRunResponse` | `platformAgentRunResponseSchema` | `src/models/platform-agent-run-response.ts` |

### platformAgentsGet

- **Signature**: `platformAgentsGet(request: Agents.PlatformAgentsGetRequest, options?: RequestOptions): ApiPromise<PlatformAgentGetResponse, Agents.PlatformAgentsGetError>`
- **Wire**: `GET /api/agents/{agent_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformAgentGetResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentGetResponse` | `platformAgentGetResponseSchema` | `src/models/platform-agent-get-response.ts` |

### platformAgentsGetRun

- **Signature**: `platformAgentsGetRun(request: Agents.PlatformAgentsGetRunRequest, options?: RequestOptions): ApiPromise<PlatformAgentRunResponse, Agents.PlatformAgentsGetRunError>`
- **Wire**: `GET /api/agents/{agent_id}/runs/{run_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformAgentRunResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsGetRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsGetRunRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentRunResponse` | `platformAgentRunResponseSchema` | `src/models/platform-agent-run-response.ts` |

### platformAgentsGetSchemas

- **Signature**: `platformAgentsGetSchemas(request: Agents.PlatformAgentsGetSchemasRequest, options?: RequestOptions): ApiPromise<PlatformAgentSchemasResponse, Agents.PlatformAgentsGetSchemasError>`
- **Wire**: `GET /api/agents/{agent_id}/schemas`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformAgentSchemasResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsGetSchemasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsGetSchemasRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `agentId` | `path` | `agent_id` | `string` | yes | — |
| `includeTools` | `query` | `include_tools` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentSchemasResponse` | `platformAgentSchemasResponseSchema` | `src/models/platform-agent-schemas-response.ts` |

### platformAgentsSearch

- **Signature**: `platformAgentsSearch(request: Agents.PlatformAgentsSearchRequestParams, options?: RequestOptions): ApiPromise<PlatformAgentsSearchResponse, Agents.PlatformAgentsSearchError>`
- **Wire**: `POST /api/agents/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformAgentsSearchResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Agents.PlatformAgentsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.PlatformAgentsSearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformAgentsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentsSearchRequest` | `platformAgentsSearchRequestSchema` | `src/models/platform-agents-search-request.ts` |
| `PlatformAgentsSearchResponse` | `platformAgentsSearchResponseSchema` | `src/models/platform-agents-search-response.ts` |

