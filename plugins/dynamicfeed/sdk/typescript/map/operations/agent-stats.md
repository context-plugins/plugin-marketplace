<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentStats — operations

Accessor: `client.agentStats` · Source: `src/resources/agent-stats.ts` · 1 operation · Request types: namespace `AgentStats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### agentStatsV1AgentStatsGet

- **Signature**: `agentStatsV1AgentStatsGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/agent-stats`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

