<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lifecycle — operations

Accessor: `client.lifecycle` · Source: `src/resources/lifecycle.ts` · 1 operation · Request and error types: namespace `Lifecycle`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### healthCheck

- **Signature**: `healthCheck(request: Lifecycle.HealthCheckRequest, options?: RequestOptions): ApiPromise<string, Lifecycle.HealthCheckError>`
- **Wire**: `GET /api/lifecycle/healthcheck`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `Lifecycle.HealthCheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lifecycle.HealthCheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `extended` | `query` | `boolean` | no |

