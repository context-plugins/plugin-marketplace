<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentTokens — operations

Accessor: `client.agentTokens` · Source: `src/resources/agent-tokens.ts` · 1 operation · Request types: namespace `AgentTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAgentTokens

- **Signature**: `listAgentTokens(request: AgentTokens.ListAgentTokensRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/clusters/{cluster}/tokens`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AgentTokens.ListAgentTokensRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `cluster` | `path` | `string` | yes |

