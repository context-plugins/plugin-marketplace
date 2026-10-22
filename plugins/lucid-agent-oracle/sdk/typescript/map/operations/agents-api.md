<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentsApi — operations

Accessor: `client.agentsApi` · Source: `src/resources/agents-api.ts` · 6 operations · Request and error types: namespace `AgentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lucid-agent-oracle-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### agentLeaderboard

- **Signature**: `agentLeaderboard(request: AgentsApi.AgentLeaderboardRequest, options?: RequestOptions): ApiPromise<V1OracleAgentsLeaderboardResponse, ApiError>`
- **Wire**: `GET /v1/oracle/agents/leaderboard`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleAgentsLeaderboardResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AgentsApi.AgentLeaderboardRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `cursor` | `query` | `string` | no | — |
| `sort` | `query` | `Sort4` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort4` | `sort4Schema` | `src/models/unions/sort4.ts` |
| `V1OracleAgentsLeaderboardResponse` | `v1OracleAgentsLeaderboardResponseSchema` | `src/models/v1-oracle-agents-leaderboard-response.ts` |

### getAgentActivity

- **Signature**: `getAgentActivity(request: AgentsApi.GetAgentActivityRequest, options?: RequestOptions): ApiPromise<V1OracleAgentsActivityResponse, AgentsApi.GetAgentActivityError>`
- **Wire**: `GET /v1/oracle/agents/{id}/activity`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleAgentsActivityResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `AgentsApi.GetAgentActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [403] `ProblemDetail` · `"problemDetail2"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentsApi.GetAgentActivityRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `20` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleAgentsActivityResponse` | `v1OracleAgentsActivityResponseSchema` | `src/models/v1-oracle-agents-activity-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### getAgentMetrics

- **Signature**: `getAgentMetrics(request: AgentsApi.GetAgentMetricsRequest, options?: RequestOptions): ApiPromise<V1OracleAgentsMetricsResponse, AgentsApi.GetAgentMetricsError>`
- **Wire**: `GET /v1/oracle/agents/{id}/metrics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleAgentsMetricsResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `AgentsApi.GetAgentMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [403] `ProblemDetail` · `"problemDetail2"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentsApi.GetAgentMetricsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleAgentsMetricsResponse` | `v1OracleAgentsMetricsResponseSchema` | `src/models/v1-oracle-agents-metrics-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### getAgentProfile

- **Signature**: `getAgentProfile(request: AgentsApi.GetAgentProfileRequest, options?: RequestOptions): ApiPromise<V1OracleAgentsResponse, AgentsApi.GetAgentProfileError>`
- **Wire**: `GET /v1/oracle/agents/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleAgentsResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `AgentsApi.GetAgentProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentsApi.GetAgentProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleAgentsResponse` | `v1OracleAgentsResponseSchema` | `src/models/v1-oracle-agents-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### getModelUsageDistribution

- **Signature**: `getModelUsageDistribution(request: AgentsApi.GetModelUsageDistributionRequest, options?: RequestOptions): ApiPromise<V1OracleAgentsModelUsageResponse, AgentsApi.GetModelUsageDistributionError>`
- **Wire**: `GET /v1/oracle/agents/model-usage`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleAgentsModelUsageResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `AgentsApi.GetModelUsageDistributionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [403] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentsApi.GetModelUsageDistributionRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `period` | `query` | `Period3` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period3` | `period3Schema` | `src/models/unions/period3.ts` |
| `V1OracleAgentsModelUsageResponse` | `v1OracleAgentsModelUsageResponseSchema` | `src/models/v1-oracle-agents-model-usage-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### searchAgents

- **Signature**: `searchAgents(request: AgentsApi.SearchAgentsRequest, options?: RequestOptions): ApiPromise<V1OracleAgentsSearchResponse, AgentsApi.SearchAgentsError>`
- **Wire**: `GET /v1/oracle/agents/search`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleAgentsSearchResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `AgentsApi.SearchAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [400] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AgentsApi.SearchAgentsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |
| `wallet` | `query` | — | `string` | no | — |
| `chain` | `query` | — | `string` | no | — |
| `protocol` | `query` | — | `string` | no | — |
| `protocolId` | `query` | `protocol_id` | `string` | no | — |
| `erc8004Id` | `query` | `erc8004_id` | `string` | no | — |
| `q` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleAgentsSearchResponse` | `v1OracleAgentsSearchResponseSchema` | `src/models/v1-oracle-agents-search-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

