<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `src/resources/metrics.ts` · 7 operations · Request and error types: namespace `Metrics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### metricsControllerCreate

- **Signature**: `metricsControllerCreate(request: Metrics.MetricsControllerCreateRequest, options?: RequestOptions): ApiPromise<MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/metrics`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricDevCycleManagementMetricsApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.MetricsControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.MetricsControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateMetricDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMetricDto` | `createMetricDtoSchema` | `src/models/create-metric-dto.ts` |
| `MetricDevCycleManagementMetricsApi` | `metricDevCycleManagementMetricsApiSchema` | `src/models/metric-dev-cycle-management-metrics-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### metricsControllerFetchResults

- **Signature**: `metricsControllerFetchResults(request: Metrics.MetricsControllerFetchResultsRequest, options?: RequestOptions): ApiPromise<MetricResult, Metrics.MetricsControllerFetchResultsError>`
- **Wire**: `GET /v1/projects/{project}/metrics/{key}/results`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricResult`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.MetricsControllerFetchResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.MetricsControllerFetchResultsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `feature` | `query` | `string` | yes |
| `startDate` | `query` | `Date` (date-time) | yes |
| `endDate` | `query` | `Date` (date-time) | yes |
| `environment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricResult` | `metricResultSchema` | `src/models/metric-result.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### metricsControllerFindAll

- **Signature**: `metricsControllerFindAll(request: Metrics.MetricsControllerFindAllRequest, options?: RequestOptions): ApiPromise<MetricDevCycleManagementMetricsApi[], Metrics.MetricsControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/metrics`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricDevCycleManagementMetricsApi[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.MetricsControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.MetricsControllerFindAllRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `dimension` | `query` | `Dimension3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Dimension3` | `dimension3Schema` | `src/models/dimension3.ts` |
| `MetricDevCycleManagementMetricsApi` | `metricDevCycleManagementMetricsApiSchema` | `src/models/metric-dev-cycle-management-metrics-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### metricsControllerFindOne

- **Signature**: `metricsControllerFindOne(request: Metrics.MetricsControllerFindOneRequest, options?: RequestOptions): ApiPromise<MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/metrics/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricDevCycleManagementMetricsApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.MetricsControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.MetricsControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricDevCycleManagementMetricsApi` | `metricDevCycleManagementMetricsApiSchema` | `src/models/metric-dev-cycle-management-metrics-api.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### metricsControllerRemove

- **Signature**: `metricsControllerRemove(request: Metrics.MetricsControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, Metrics.MetricsControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/metrics/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.MetricsControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.MetricsControllerRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### metricsControllerUpdate

- **Signature**: `metricsControllerUpdate(request: Metrics.MetricsControllerUpdateRequest, options?: RequestOptions): ApiPromise<MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/metrics/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricDevCycleManagementMetricsApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.MetricsControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.MetricsControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateMetricDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMetricDto` | `updateMetricDtoSchema` | `src/models/update-metric-dto.ts` |
| `MetricDevCycleManagementMetricsApi` | `metricDevCycleManagementMetricsApiSchema` | `src/models/metric-dev-cycle-management-metrics-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### testMetricResultsControllerFetch

- **Signature**: `testMetricResultsControllerFetch(request: Metrics.TestMetricResultsControllerFetchRequest, options?: RequestOptions): ApiPromise<MetricResult, Metrics.TestMetricResultsControllerFetchError>`
- **Wire**: `GET /v1/projects/{project}/test-metric-results`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricResult`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Metrics.TestMetricResultsControllerFetchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Metrics.TestMetricResultsControllerFetchRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `feature` | `query` | `string` | yes |
| `control` | `query` | `string` | yes |
| `optimize` | `query` | `Optimize3` | yes |
| `event` | `query` | `string` | yes |
| `dimension` | `query` | `Dimension3` | yes |
| `startDate` | `query` | `Date` (date-time) | yes |
| `endDate` | `query` | `Date` (date-time) | yes |
| `environment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Optimize3` | `optimize3Schema` | `src/models/optimize3.ts` |
| `Dimension3` | `dimension3Schema` | `src/models/dimension3.ts` |
| `MetricResult` | `metricResultSchema` | `src/models/metric-result.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

