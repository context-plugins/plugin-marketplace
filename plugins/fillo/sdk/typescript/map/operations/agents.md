<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 2 operations · Request and error types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAgentGrants

- **Signature**: `listAgentGrants(options?: RequestOptions): ApiPromise<ApiV1ManageAgentsResponse, Agents.ListAgentGrantsError>`
- **Wire**: `GET /api/v1/manage/agents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageAgentsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Agents.ListAgentGrantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageAgentsResponse` | `apiV1ManageAgentsResponseSchema` | `src/models/api-v1-manage-agents-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### revokeAgentGrant

- **Signature**: `revokeAgentGrant(request: Agents.RevokeAgentGrantRequest, options?: RequestOptions): ApiPromise<ApiV1ManageAgentsResponse1, Agents.RevokeAgentGrantError>`
- **Wire**: `DELETE /api/v1/manage/agents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageAgentsResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Agents.RevokeAgentGrantError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.RevokeAgentGrantRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageAgentsResponse1` | `apiV1ManageAgentsResponse1Schema` | `src/models/api-v1-manage-agents-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

