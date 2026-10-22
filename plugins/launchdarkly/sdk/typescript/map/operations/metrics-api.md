<!-- Generated file — do not edit; regenerated with the SDK. -->

# MetricsApi — operations

Accessor: `client.metricsApi` · Source: `src/resources/metrics-api.ts` · 5 operations · Request and error types: namespace `MetricsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMetric

- **Signature**: `deleteMetric(request: MetricsApi.DeleteMetricRequest, options?: RequestOptions): ApiPromise<undefined, MetricsApi.DeleteMetricError>`
- **Wire**: `DELETE /api/v2/metrics/{projectKey}/{metricKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsApi.DeleteMetricError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsApi.DeleteMetricRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `metricKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMetric

- **Signature**: `getMetric(request: MetricsApi.GetMetricRequest, options?: RequestOptions): ApiPromise<MetricRep, MetricsApi.GetMetricError>`
- **Wire**: `GET /api/v2/metrics/{projectKey}/{metricKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsApi.GetMetricError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsApi.GetMetricRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `metricKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |
| `versionId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricRep` | `metricRepSchema` | `src/models/metric-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMetrics

- **Signature**: `getMetrics(request: MetricsApi.GetMetricsRequest, options?: RequestOptions): ApiPromise<MetricCollectionRep, MetricsApi.GetMetricsError>`
- **Wire**: `GET /api/v2/metrics/{projectKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsApi.GetMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsApi.GetMetricsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricCollectionRep` | `metricCollectionRepSchema` | `src/models/metric-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### patchMetric

- **Signature**: `patchMetric(request: MetricsApi.PatchMetricRequest, options?: RequestOptions): ApiPromise<MetricRep, MetricsApi.PatchMetricError>`
- **Wire**: `PATCH /api/v2/metrics/{projectKey}/{metricKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsApi.PatchMetricError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsApi.PatchMetricRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `metricKey` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `MetricRep` | `metricRepSchema` | `src/models/metric-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postMetric

- **Signature**: `postMetric(request: MetricsApi.PostMetricRequest, options?: RequestOptions): ApiPromise<MetricRep, MetricsApi.PostMetricError>`
- **Wire**: `POST /api/v2/metrics/{projectKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsApi.PostMetricError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsApi.PostMetricRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `MetricPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricPost` | `metricPostSchema` | `src/models/metric-post.ts` |
| `MetricRep` | `metricRepSchema` | `src/models/metric-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

