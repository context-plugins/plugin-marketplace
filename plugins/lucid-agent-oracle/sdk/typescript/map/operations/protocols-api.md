<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProtocolsApi — operations

Accessor: `client.protocolsApi` · Source: `src/resources/protocols-api.ts` · 3 operations · Request and error types: namespace `ProtocolsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lucid-agent-oracle-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProtocolDetail

- **Signature**: `getProtocolDetail(request: ProtocolsApi.GetProtocolDetailRequest, options?: RequestOptions): ApiPromise<V1OracleProtocolsResponse1, ProtocolsApi.GetProtocolDetailError>`
- **Wire**: `GET /v1/oracle/protocols/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleProtocolsResponse1`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `ProtocolsApi.GetProtocolDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProtocolsApi.GetProtocolDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleProtocolsResponse1` | `v1OracleProtocolsResponse1Schema` | `src/models/v1-oracle-protocols-response1.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### getProtocolMetrics

- **Signature**: `getProtocolMetrics(request: ProtocolsApi.GetProtocolMetricsRequest, options?: RequestOptions): ApiPromise<V1OracleProtocolsMetricsResponse, ProtocolsApi.GetProtocolMetricsError>`
- **Wire**: `GET /v1/oracle/protocols/{id}/metrics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleProtocolsMetricsResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `ProtocolsApi.GetProtocolMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [403] `ProblemDetail` · `"problemDetail2"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProtocolsApi.GetProtocolMetricsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleProtocolsMetricsResponse` | `v1OracleProtocolsMetricsResponseSchema` | `src/models/v1-oracle-protocols-metrics-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### listProtocols

- **Signature**: `listProtocols(options?: RequestOptions): ApiPromise<V1OracleProtocolsResponse, ApiError>`
- **Wire**: `GET /v1/oracle/protocols`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleProtocolsResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleProtocolsResponse` | `v1OracleProtocolsResponseSchema` | `src/models/v1-oracle-protocols-response.ts` |

