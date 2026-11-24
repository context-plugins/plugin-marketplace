<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `src/resources/metrics.ts` · 1 operation · Request types: namespace `Metrics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMetrics

- **Server**: `defaultBuildkiteAgentMetricsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMetrics(options?: RequestOptions): ApiPromise<MetricsResponse, ApiError>`
- **Wire**: `GET /metrics`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsResponse`
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsResponse` | `metricsResponseSchema` | `src/models/metrics-response.ts` |

