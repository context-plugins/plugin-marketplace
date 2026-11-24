<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 2 operations · Request types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Agents

- **Signature**: `getApiV1Agents(request?: Agents.GetApiV1AgentsRequest, options?: RequestOptions): ApiPromise<ApiV1AgentsResponse, ApiError>`
- **Wire**: `GET /api/v1/agents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AgentsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.GetApiV1AgentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AgentsResponse` | `apiV1AgentsResponseSchema` | `src/models/api-v1-agents-response.ts` |

### getApiV1AgentsById

- **Signature**: `getApiV1AgentsById(request: Agents.GetApiV1AgentsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1AgentsResponse1, ApiError>`
- **Wire**: `GET /api/v1/agents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AgentsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.GetApiV1AgentsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AgentsResponse1` | `apiV1AgentsResponse1Schema` | `src/models/api-v1-agents-response1.ts` |

