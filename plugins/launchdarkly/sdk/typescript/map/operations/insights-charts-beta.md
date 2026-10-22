<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsChartsBeta — operations

Accessor: `client.insightsChartsBeta` · Source: `src/resources/insights-charts-beta.ts` · 5 operations · Request and error types: namespace `InsightsChartsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDeploymentFrequencyChart

- **Signature**: `getDeploymentFrequencyChart(request: InsightsChartsBeta.GetDeploymentFrequencyChartRequest, options?: RequestOptions): ApiPromise<InsightsChart, InsightsChartsBeta.GetDeploymentFrequencyChartError>`
- **Wire**: `GET /api/v2/engineering-insights/charts/deployments/frequency`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsChart`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsChartsBeta.GetDeploymentFrequencyChartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsChartsBeta.GetDeploymentFrequencyChartRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `applicationKey` | `query` | `string` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `bucketType` | `query` | `string` | no |
| `bucketMs` | `query` | `number` | no |
| `groupBy` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsChart` | `insightsChartSchema` | `src/models/insights-chart.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFlagStatusChart

- **Signature**: `getFlagStatusChart(request: InsightsChartsBeta.GetFlagStatusChartRequest, options?: RequestOptions): ApiPromise<InsightsChart, InsightsChartsBeta.GetFlagStatusChartError>`
- **Wire**: `GET /api/v2/engineering-insights/charts/flags/status`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsChart`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsChartsBeta.GetFlagStatusChartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsChartsBeta.GetFlagStatusChartRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | yes |
| `applicationKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsChart` | `insightsChartSchema` | `src/models/insights-chart.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getLeadTimeChart

- **Signature**: `getLeadTimeChart(request: InsightsChartsBeta.GetLeadTimeChartRequest, options?: RequestOptions): ApiPromise<InsightsChart, InsightsChartsBeta.GetLeadTimeChartError>`
- **Wire**: `GET /api/v2/engineering-insights/charts/lead-time`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsChart`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsChartsBeta.GetLeadTimeChartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsChartsBeta.GetLeadTimeChartRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | no |
| `applicationKey` | `query` | `string` | no |
| `from` | `query` | `number` | no |
| `to` | `query` | `number` | no |
| `bucketType` | `query` | `string` | no |
| `bucketMs` | `query` | `number` | no |
| `groupBy` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsChart` | `insightsChartSchema` | `src/models/insights-chart.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getReleaseFrequencyChart

- **Signature**: `getReleaseFrequencyChart(request: InsightsChartsBeta.GetReleaseFrequencyChartRequest, options?: RequestOptions): ApiPromise<InsightsChart, InsightsChartsBeta.GetReleaseFrequencyChartError>`
- **Wire**: `GET /api/v2/engineering-insights/charts/releases/frequency`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsChart`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsChartsBeta.GetReleaseFrequencyChartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsChartsBeta.GetReleaseFrequencyChartRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | yes |
| `applicationKey` | `query` | `string` | no |
| `hasExperiments` | `query` | `boolean` | no |
| `global` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `bucketType` | `query` | `string` | no |
| `bucketMs` | `query` | `number` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsChart` | `insightsChartSchema` | `src/models/insights-chart.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getStaleFlagsChart

- **Signature**: `getStaleFlagsChart(request: InsightsChartsBeta.GetStaleFlagsChartRequest, options?: RequestOptions): ApiPromise<InsightsChart, InsightsChartsBeta.GetStaleFlagsChartError>`
- **Wire**: `GET /api/v2/engineering-insights/charts/flags/stale`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsChart`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsChartsBeta.GetStaleFlagsChartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsChartsBeta.GetStaleFlagsChartRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | yes |
| `applicationKey` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `maintainerId` | `query` | `string` | no |
| `maintainerTeamKey` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsChart` | `insightsChartSchema` | `src/models/insights-chart.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

