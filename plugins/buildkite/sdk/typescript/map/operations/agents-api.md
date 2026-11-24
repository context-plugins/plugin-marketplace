<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentsApi — operations

Accessor: `client.agentsApi` · Source: `src/resources/agents-api.ts` · 3 operations · Request types: namespace `AgentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAgent

- **Signature**: `getAgent(request: AgentsApi.GetAgentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/agents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AgentsApi.GetAgentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

### listAgents

- **Signature**: `listAgents(request: AgentsApi.ListAgentsRequest, options?: RequestOptions): ApiPromise<Agent[], ApiError>`
- **Wire**: `GET /organizations/{org}/agents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Agent[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AgentsApi.ListAgentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### stopAgent

- **Signature**: `stopAgent(request: AgentsApi.StopAgentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /organizations/{org}/agents/{id}/stop`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AgentsApi.StopAgentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

