<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.health` · Source: `src/resources/health.ts` · 2 operations · Request and error types: namespace `Health`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rendex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deepHealthCheck

- **Signature**: `deepHealthCheck(options?: RequestOptions): ApiPromise<DeepHealthResponse, Health.DeepHealthCheckError>`
- **Wire**: `GET /health/deep`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeepHealthResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Health.DeepHealthCheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deepHealthResponse"` [503] `DeepHealthResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DeepHealthResponse` | `deepHealthResponseSchema` | `src/models/deep-health-response.ts` |

### healthCheck

- **Signature**: `healthCheck(options?: RequestOptions): ApiPromise<HealthResponse, ApiError>`
- **Wire**: `GET /health`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HealthResponse`
- **Error**: `RendexError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `HealthResponse` | `healthResponseSchema` | `src/models/health-response.ts` |

