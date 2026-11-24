<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 1 operation · Request types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Workspaces

- **Signature**: `getApiV1Workspaces(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /api/v1/workspaces`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

