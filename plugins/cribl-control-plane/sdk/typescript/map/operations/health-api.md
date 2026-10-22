<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.healthApi` · Source: `src/resources/health-api.ts` · 1 operation · Request and error types: namespace `HealthApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHealth

- **Signature**: `getHealth(options?: RequestOptions): ApiPromise<HealthServerStatus, HealthApi.GetHealthError>`
- **Wire**: `GET /health`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HealthServerStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `HealthApi.GetHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"healthServerStatus"` [420] `HealthServerStatus` · `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `HealthServerStatus` | `healthServerStatusSchema` | `src/models/health-server-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

