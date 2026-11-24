<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 8 operations · Request types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create

- **Signature**: `create(request: Agents.CreateRequest, options?: RequestOptions): ApiPromise<Agent, ApiError>`
- **Wire**: `POST /agents`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Agent`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.CreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `AgentCreate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentCreate` | `agentCreateSchema` | `src/models/agent-create.ts` |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### delete

- **Signature**: `delete(request: Agents.DeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /agents/{agentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.DeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### deleteByExternalId

- **Signature**: `deleteByExternalId(request: Agents.DeleteByExternalIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /agents/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.DeleteByExternalIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### get

- **Signature**: `get(request: Agents.GetRequest, options?: RequestOptions): ApiPromise<Agent, ApiError>`
- **Wire**: `GET /agents/{agentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Agent`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.GetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### getByExternalId

- **Signature**: `getByExternalId(request: Agents.GetByExternalIdRequest, options?: RequestOptions): ApiPromise<Agent, ApiError>`
- **Wire**: `GET /agents/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Agent`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.GetByExternalIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### list

- **Signature**: `list(request: Agents.ListRequest, options?: RequestOptions): ApiPromise<Agent[], ApiError>`
- **Wire**: `GET /agents`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Agent[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.ListRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### update

- **Signature**: `update(request: Agents.UpdateRequest, options?: RequestOptions): ApiPromise<Agent, ApiError>`
- **Wire**: `PUT /agents/{agentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Agent`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.UpdateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `agentId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `AgentUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentUpdate` | `agentUpdateSchema` | `src/models/agent-update.ts` |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

### updateByExternalId

- **Signature**: `updateByExternalId(request: Agents.UpdateByExternalIdRequest, options?: RequestOptions): ApiPromise<Agent, ApiError>`
- **Wire**: `PUT /agents/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Agent`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Agents.UpdateByExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `AgentUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentUpdate` | `agentUpdateSchema` | `src/models/agent-update.ts` |
| `Agent` | `agentSchema` | `src/models/agent.ts` |

