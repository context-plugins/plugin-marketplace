<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitoring — operations

Accessor: `client.monitoring` · Source: `src/resources/monitoring.ts` · 1 operation · Request and error types: namespace `Monitoring`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSystemHealth

- **Server**: `defaultSkribbleMonitoringApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSystemHealth(options?: RequestOptions): ApiPromise<SystemHealthResponse, Monitoring.GetSystemHealthError>`
- **Wire**: `GET /management/health`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SystemHealthResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Monitoring.GetSystemHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SystemHealthResponse` | `systemHealthResponseSchema` | `src/models/system-health-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

