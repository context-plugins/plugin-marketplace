<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 5 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-storage-transfer-service`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### storagetransferProjectsAgentPoolsCreate

- **Signature**: `storagetransferProjectsAgentPoolsCreate(request: Projects.StoragetransferProjectsAgentPoolsCreateRequest, options?: RequestOptions): ApiPromise<AgentPool, Projects.StoragetransferProjectsAgentPoolsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/agentPools`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentPool`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `Projects.StoragetransferProjectsAgentPoolsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.StoragetransferProjectsAgentPoolsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `agentPoolId` | `query` | `string` | no |
| `body` | `body` | `AgentPool` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentPool` | `agentPoolSchema` | `src/models/agent-pool.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferProjectsAgentPoolsDelete

- **Signature**: `storagetransferProjectsAgentPoolsDelete(request: Projects.StoragetransferProjectsAgentPoolsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.StoragetransferProjectsAgentPoolsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/agentPools/{agentPoolsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `Projects.StoragetransferProjectsAgentPoolsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.StoragetransferProjectsAgentPoolsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `agentPoolsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferProjectsAgentPoolsGet

- **Signature**: `storagetransferProjectsAgentPoolsGet(request: Projects.StoragetransferProjectsAgentPoolsGetRequest, options?: RequestOptions): ApiPromise<AgentPool, Projects.StoragetransferProjectsAgentPoolsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/agentPools/{agentPoolsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentPool`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `Projects.StoragetransferProjectsAgentPoolsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.StoragetransferProjectsAgentPoolsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `agentPoolsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentPool` | `agentPoolSchema` | `src/models/agent-pool.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferProjectsAgentPoolsList

- **Signature**: `storagetransferProjectsAgentPoolsList(request: Projects.StoragetransferProjectsAgentPoolsListRequest, options?: RequestOptions): ApiPromise<ListAgentPoolsResponse, Projects.StoragetransferProjectsAgentPoolsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/agentPools`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAgentPoolsResponse`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `Projects.StoragetransferProjectsAgentPoolsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.StoragetransferProjectsAgentPoolsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAgentPoolsResponse` | `listAgentPoolsResponseSchema` | `src/models/list-agent-pools-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferProjectsAgentPoolsPatch

- **Signature**: `storagetransferProjectsAgentPoolsPatch(request: Projects.StoragetransferProjectsAgentPoolsPatchRequest, options?: RequestOptions): ApiPromise<AgentPool, Projects.StoragetransferProjectsAgentPoolsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/agentPools/{agentPoolsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentPool`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `Projects.StoragetransferProjectsAgentPoolsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.StoragetransferProjectsAgentPoolsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `agentPoolsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `AgentPool` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentPool` | `agentPoolSchema` | `src/models/agent-pool.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

