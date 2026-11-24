<!-- Generated file — do not edit; regenerated with the SDK. -->

# Service — operations

Accessor: `client.service` · Source: `src/resources/service.ts` · 5 operations · Request and error types: namespace `Service`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `odds-relay`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCoverage

- **Signature**: `getCoverage(request?: Service.GetCoverageRequest, options?: RequestOptions): ApiPromise<V2CoverageResponse, Service.GetCoverageError>`
- **Wire**: `GET /v2/coverage`
- **Auth**: any of `bearerAuth`, `apiKeyHeader`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2CoverageResponse`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Service.GetCoverageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400OddsRelayServiceApi"` [400] `Error400OddsRelayServiceApi` · `"error401OddsRelayServiceApi"` [401] `Error401OddsRelayServiceApi` · `"error403OddsRelayServiceApi"` [403] `Error403OddsRelayServiceApi` · `"error404OddsRelayServiceApi"` [404] `Error404OddsRelayServiceApi` · `"error429OddsRelayServiceApi"` [429] `Error429OddsRelayServiceApi` · `"error500OddsRelayServiceApi"` [500] `Error500OddsRelayServiceApi` · `"error503OddsRelayServiceApi"` [503] `Error503OddsRelayServiceApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Service.GetCoverageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `region` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2CoverageResponse` | `v2CoverageResponseSchema` | `src/models/unions/v2-coverage-response.ts` |
| `Error400OddsRelayServiceApi` | `error400OddsRelayServiceApiSchema` | `src/models/error400-odds-relay-service-api.ts` |
| `Error401OddsRelayServiceApi` | `error401OddsRelayServiceApiSchema` | `src/models/error401-odds-relay-service-api.ts` |
| `Error403OddsRelayServiceApi` | `error403OddsRelayServiceApiSchema` | `src/models/error403-odds-relay-service-api.ts` |
| `Error404OddsRelayServiceApi` | `error404OddsRelayServiceApiSchema` | `src/models/error404-odds-relay-service-api.ts` |
| `Error429OddsRelayServiceApi` | `error429OddsRelayServiceApiSchema` | `src/models/error429-odds-relay-service-api.ts` |
| `Error500OddsRelayServiceApi` | `error500OddsRelayServiceApiSchema` | `src/models/error500-odds-relay-service-api.ts` |
| `Error503OddsRelayServiceApi` | `error503OddsRelayServiceApiSchema` | `src/models/error503-odds-relay-service-api.ts` |

### getHealth

- **Signature**: `getHealth(options?: RequestOptions): ApiPromise<Health, Service.GetHealthError>`
- **Wire**: `GET /v2/health`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Service.GetHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400OddsRelayServiceApi"` [400] `Error400OddsRelayServiceApi` · `"error401OddsRelayServiceApi"` [401] `Error401OddsRelayServiceApi` · `"error403OddsRelayServiceApi"` [403] `Error403OddsRelayServiceApi` · `"error429OddsRelayServiceApi"` [429] `Error429OddsRelayServiceApi` · `"error500OddsRelayServiceApi"` [500] `Error500OddsRelayServiceApi` · `"error503OddsRelayServiceApi"` [503] `Error503OddsRelayServiceApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `Error400OddsRelayServiceApi` | `error400OddsRelayServiceApiSchema` | `src/models/error400-odds-relay-service-api.ts` |
| `Error401OddsRelayServiceApi` | `error401OddsRelayServiceApiSchema` | `src/models/error401-odds-relay-service-api.ts` |
| `Error403OddsRelayServiceApi` | `error403OddsRelayServiceApiSchema` | `src/models/error403-odds-relay-service-api.ts` |
| `Error429OddsRelayServiceApi` | `error429OddsRelayServiceApiSchema` | `src/models/error429-odds-relay-service-api.ts` |
| `Error500OddsRelayServiceApi` | `error500OddsRelayServiceApiSchema` | `src/models/error500-odds-relay-service-api.ts` |
| `Error503OddsRelayServiceApi` | `error503OddsRelayServiceApiSchema` | `src/models/error503-odds-relay-service-api.ts` |

### getLiveness

- **Signature**: `getLiveness(options?: RequestOptions): ApiPromise<string, Service.GetLivenessError>`
- **Wire**: `GET /healthz`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Service.GetLivenessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error503"` [503] `string` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### getOpenApi

- **Signature**: `getOpenApi(options?: RequestOptions): ApiPromise<Record<string, unknown>, Service.GetOpenApiError>`
- **Wire**: `GET /v2/openapi.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Service.GetOpenApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayServiceApi"` [400] `Error400OddsRelayServiceApi` · `"error429OddsRelayServiceApi"` [429] `Error429OddsRelayServiceApi` · `"error500OddsRelayServiceApi"` [500] `Error500OddsRelayServiceApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error400OddsRelayServiceApi` | `error400OddsRelayServiceApiSchema` | `src/models/error400-odds-relay-service-api.ts` |
| `Error429OddsRelayServiceApi` | `error429OddsRelayServiceApiSchema` | `src/models/error429-odds-relay-service-api.ts` |
| `Error500OddsRelayServiceApi` | `error500OddsRelayServiceApiSchema` | `src/models/error500-odds-relay-service-api.ts` |

### getStatus

- **Signature**: `getStatus(request?: Service.GetStatusRequest, options?: RequestOptions): ApiPromise<StatusOddsRelayServiceApi, Service.GetStatusError>`
- **Wire**: `GET /v2/status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatusOddsRelayServiceApi`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Service.GetStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400OddsRelayServiceApi"` [400] `Error400OddsRelayServiceApi` · `"error404OddsRelayServiceApi"` [404] `Error404OddsRelayServiceApi` · `"error429OddsRelayServiceApi"` [429] `Error429OddsRelayServiceApi` · `"error500OddsRelayServiceApi"` [500] `Error500OddsRelayServiceApi` · `"error502"` [502] no body · `"error503OddsRelayServiceApi"` [503] `Error503OddsRelayServiceApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Service.GetStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `region` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusOddsRelayServiceApi` | `statusOddsRelayServiceApiSchema` | `src/models/status-odds-relay-service-api.ts` |
| `Error400OddsRelayServiceApi` | `error400OddsRelayServiceApiSchema` | `src/models/error400-odds-relay-service-api.ts` |
| `Error404OddsRelayServiceApi` | `error404OddsRelayServiceApiSchema` | `src/models/error404-odds-relay-service-api.ts` |
| `Error429OddsRelayServiceApi` | `error429OddsRelayServiceApiSchema` | `src/models/error429-odds-relay-service-api.ts` |
| `Error500OddsRelayServiceApi` | `error500OddsRelayServiceApiSchema` | `src/models/error500-odds-relay-service-api.ts` |
| `Error503OddsRelayServiceApi` | `error503OddsRelayServiceApiSchema` | `src/models/error503-odds-relay-service-api.ts` |

