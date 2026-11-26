<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForceDreamClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 8 operations · Request and error types: namespace `ForceDreamClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ForceDreamClient.GetInvokeResultRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `force-dream`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAgentReliability

- **Signature**: `getAgentReliability(options?: RequestOptions): ApiPromise<ReliabilityListResult, ApiError>`
- **Wire**: `GET /v1/agents/reliability`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReliabilityListResult`
- **Error**: `ForceDreamError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ReliabilityListResult` | `reliabilityListResultSchema` | `src/models/reliability-list-result.ts` |

### getBalance

- **Signature**: `getBalance(options?: RequestOptions): ApiPromise<BalanceResult, ForceDreamClient.GetBalanceError>`
- **Wire**: `GET /v1/account/balance`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalanceResult`
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.GetBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceResult` | `balanceResultSchema` | `src/models/balance-result.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |

### getInvokeResult

- **Signature**: `getInvokeResult(request: ForceDreamClient.GetInvokeResultRequest, options?: RequestOptions): ApiPromise<InvokeResult, ApiError>`
- **Wire**: `GET /v1/agents/{slug}/result/{taskId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvokeResult`
- **Error**: `ForceDreamError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ForceDreamClient.GetInvokeResultRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `taskId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvokeResult` | `invokeResultSchema` | `src/models/invoke-result.ts` |

### getProof

- **Signature**: `getProof(request: ForceDreamClient.GetProofRequest, options?: RequestOptions): ApiPromise<V1WorkforceProofPublicResponse, ApiError>`
- **Wire**: `GET /v1/workforce/proof/{task_id}/public`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WorkforceProofPublicResponse`
- **Error**: `ForceDreamError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ForceDreamClient.GetProofRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WorkforceProofPublicResponse` | `v1WorkforceProofPublicResponseSchema` | `src/models/v1-workforce-proof-public-response.ts` |

### getProofPublicKey

- **Signature**: `getProofPublicKey(options?: RequestOptions): ApiPromise<V1WorkforceProofPublicKeyResponse, ApiError>`
- **Wire**: `GET /v1/workforce/proof/public-key`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WorkforceProofPublicKeyResponse`
- **Error**: `ForceDreamError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WorkforceProofPublicKeyResponse` | `v1WorkforceProofPublicKeyResponseSchema` | `src/models/v1-workforce-proof-public-key-response.ts` |

### invokeAgent

- **Signature**: `invokeAgent(request: ForceDreamClient.InvokeAgentRequest, options?: RequestOptions): ApiPromise<V1AgentsInvokeResponse, ForceDreamClient.InvokeAgentError>`
- **Wire**: `POST /v1/agents/{slug}/invoke`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1AgentsInvokeResponse`
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.InvokeAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.InvokeAgentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `body` | `body` | `V1AgentsInvokeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AgentsInvokeRequest` | `v1AgentsInvokeRequestSchema` | `src/models/v1-agents-invoke-request.ts` |
| `V1AgentsInvokeResponse` | `v1AgentsInvokeResponseSchema` | `src/models/v1-agents-invoke-response.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |

### listAgents

- **Signature**: `listAgents(options?: RequestOptions): ApiPromise<AgentListResult, ApiError>`
- **Wire**: `GET /v1/agents/list`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentListResult`
- **Error**: `ForceDreamError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentListResult` | `agentListResultSchema` | `src/models/agent-list-result.ts` |

### signup

- **Signature**: `signup(request: ForceDreamClient.SignupRequest, options?: RequestOptions): ApiPromise<SignupResult, ApiError>`
- **Wire**: `POST /api/signup`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignupResult`
- **Error**: `ForceDreamError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ForceDreamClient.SignupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiSignupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiSignupRequest` | `apiSignupRequestSchema` | `src/models/api-signup-request.ts` |
| `SignupResult` | `signupResultSchema` | `src/models/signup-result.ts` |

