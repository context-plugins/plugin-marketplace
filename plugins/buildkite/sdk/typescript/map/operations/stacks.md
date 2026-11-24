<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stacks — operations

Accessor: `client.stacks` · Source: `src/resources/stacks.ts` · 1 operation · Request types: namespace `Stacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getStacks

- **Server**: `defaultBuildkiteAgentMetricsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStacks(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /stacks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

