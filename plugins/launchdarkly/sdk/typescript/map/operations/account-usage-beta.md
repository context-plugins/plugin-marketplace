<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountUsageBeta — operations

Accessor: `client.accountUsageBeta` · Source: `src/resources/account-usage-beta.ts` · 21 operations · Request and error types: namespace `AccountUsageBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getContextsClientsideUsage

- **Signature**: `getContextsClientsideUsage(request: AccountUsageBeta.GetContextsClientsideUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetContextsClientsideUsageError>`
- **Wire**: `GET /api/v2/usage/clientside-contexts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetContextsClientsideUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetContextsClientsideUsageRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `contextKind` | `query` | `string` | no |
| `sdkName` | `query` | `string` | no |
| `anonymous` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getContextsServersideUsage

- **Signature**: `getContextsServersideUsage(request: AccountUsageBeta.GetContextsServersideUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetContextsServersideUsageError>`
- **Wire**: `GET /api/v2/usage/serverside-contexts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetContextsServersideUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetContextsServersideUsageRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `contextKind` | `query` | `string` | no |
| `sdkName` | `query` | `string` | no |
| `anonymous` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getContextsTotalUsage

- **Signature**: `getContextsTotalUsage(request: AccountUsageBeta.GetContextsTotalUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetContextsTotalUsageError>`
- **Wire**: `GET /api/v2/usage/total-contexts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetContextsTotalUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetContextsTotalUsageRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `contextKind` | `query` | `string` | no |
| `sdkName` | `query` | `string` | no |
| `sdkType` | `query` | `string` | no |
| `anonymous` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getDataExportEventsUsage

- **Signature**: `getDataExportEventsUsage(request: AccountUsageBeta.GetDataExportEventsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetDataExportEventsUsageError>`
- **Wire**: `GET /api/v2/usage/data-export-events`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetDataExportEventsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetDataExportEventsUsageRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `eventKind` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getEvaluationsUsage

- **Signature**: `getEvaluationsUsage(request: AccountUsageBeta.GetEvaluationsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetEvaluationsUsageError>`
- **Wire**: `GET /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetEvaluationsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetEvaluationsUsageRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `tz` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getEventsUsage

- **Signature**: `getEventsUsage(request: AccountUsageBeta.GetEventsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetEventsUsageError>`
- **Wire**: `GET /api/v2/usage/events/{type}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetEventsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetEventsUsageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `path` | `string` | yes |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getExperimentationEventsUsage

- **Signature**: `getExperimentationEventsUsage(request: AccountUsageBeta.GetExperimentationEventsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetExperimentationEventsUsageError>`
- **Wire**: `GET /api/v2/usage/experimentation-events`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetExperimentationEventsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetExperimentationEventsUsageRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `eventKey` | `query` | `string` | no |
| `eventKind` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getExperimentationKeysUsage

- **Signature**: `getExperimentationKeysUsage(request: AccountUsageBeta.GetExperimentationKeysUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetExperimentationKeysUsageError>`
- **Wire**: `GET /api/v2/usage/experimentation-keys`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetExperimentationKeysUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetExperimentationKeysUsageRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `experimentId` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getMauClientsideUsage

- **Signature**: `getMauClientsideUsage(request: AccountUsageBeta.GetMauClientsideUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauClientsideUsageError>`
- **Wire**: `GET /api/v2/usage/clientside-mau`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetMauClientsideUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetMauClientsideUsageRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `sdkName` | `query` | `string` | no |
| `anonymous` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getMauTotalUsage

- **Signature**: `getMauTotalUsage(request: AccountUsageBeta.GetMauTotalUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauTotalUsageError>`
- **Wire**: `GET /api/v2/usage/total-mau`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetMauTotalUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetMauTotalUsageRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `sdkName` | `query` | `string` | no |
| `sdkType` | `query` | `string` | no |
| `anonymous` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getMauSdksByType

- **Signature**: `getMauSdksByType(request: AccountUsageBeta.GetMauSdksByTypeRequest, options?: RequestOptions): ApiPromise<SdkListRep, AccountUsageBeta.GetMauSdksByTypeError>`
- **Wire**: `GET /api/v2/usage/mau/sdks`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SdkListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetMauSdksByTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetMauSdksByTypeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `sdktype` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SdkListRep` | `sdkListRepSchema` | `src/models/sdk-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMauUsage

- **Signature**: `getMauUsage(request: AccountUsageBeta.GetMauUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauUsageError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v2/usage/mau`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetMauUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetMauUsageRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `project` | `query` | `string` | no |
| `environment` | `query` | `string` | no |
| `sdktype` | `query` | `string` | no |
| `sdk` | `query` | `string` | no |
| `anonymous` | `query` | `string` | no |
| `groupby` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `contextKind` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMauUsageByCategory

- **Signature**: `getMauUsageByCategory(request: AccountUsageBeta.GetMauUsageByCategoryRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauUsageByCategoryError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v2/usage/mau/bycategory`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetMauUsageByCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetMauUsageByCategoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getObservabilityErrorsUsage

- **Signature**: `getObservabilityErrorsUsage(request: AccountUsageBeta.GetObservabilityErrorsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilityErrorsUsageError>`
- **Wire**: `GET /api/v2/usage/observability/errors`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetObservabilityErrorsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetObservabilityErrorsUsageRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getObservabilityLogsUsage

- **Signature**: `getObservabilityLogsUsage(request: AccountUsageBeta.GetObservabilityLogsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilityLogsUsageError>`
- **Wire**: `GET /api/v2/usage/observability/logs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetObservabilityLogsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetObservabilityLogsUsageRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getObservabilitySessionsUsage

- **Signature**: `getObservabilitySessionsUsage(request: AccountUsageBeta.GetObservabilitySessionsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilitySessionsUsageError>`
- **Wire**: `GET /api/v2/usage/observability/sessions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetObservabilitySessionsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetObservabilitySessionsUsageRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getObservabilityTracesUsage

- **Signature**: `getObservabilityTracesUsage(request: AccountUsageBeta.GetObservabilityTracesUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilityTracesUsageError>`
- **Wire**: `GET /api/v2/usage/observability/traces`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetObservabilityTracesUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetObservabilityTracesUsageRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getServiceConnectionsUsage

- **Signature**: `getServiceConnectionsUsage(request: AccountUsageBeta.GetServiceConnectionsUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRepFloat, AccountUsageBeta.GetServiceConnectionsUsageError>`
- **Wire**: `GET /api/v2/usage/service-connections`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRepFloat`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetServiceConnectionsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetServiceConnectionsUsageRequest` (12):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `projectKey` | `query` | `string` | no |
| `environmentKey` | `query` | `string` | no |
| `connectionType` | `query` | `string` | no |
| `relayVersion` | `query` | `string` | no |
| `sdkName` | `query` | `string` | no |
| `sdkVersion` | `query` | `string` | no |
| `sdkType` | `query` | `string` | no |
| `groupBy` | `query` | `string` | no |
| `aggregationType` | `query` | `string` | no |
| `granularity` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRepFloat` | `seriesListRepFloatSchema` | `src/models/series-list-rep-float.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

### getStreamUsage

- **Signature**: `getStreamUsage(request: AccountUsageBeta.GetStreamUsageRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetStreamUsageError>`
- **Wire**: `GET /api/v2/usage/streams/{source}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetStreamUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetStreamUsageRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `source` | `path` | `string` | yes |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `tz` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getStreamUsageBySdkVersion

- **Signature**: `getStreamUsageBySdkVersion(request: AccountUsageBeta.GetStreamUsageBySdkVersionRequest, options?: RequestOptions): ApiPromise<SeriesListRep, AccountUsageBeta.GetStreamUsageBySdkVersionError>`
- **Wire**: `GET /api/v2/usage/streams/{source}/bysdkversion`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeriesListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetStreamUsageBySdkVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetStreamUsageBySdkVersionRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `source` | `path` | `string` | yes |
| `from` | `query` | `string` | no |
| `to` | `query` | `string` | no |
| `tz` | `query` | `string` | no |
| `sdk` | `query` | `string` | no |
| `version` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SeriesListRep` | `seriesListRepSchema` | `src/models/series-list-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getStreamUsageSdkversion

- **Signature**: `getStreamUsageSdkversion(request: AccountUsageBeta.GetStreamUsageSdkversionRequest, options?: RequestOptions): ApiPromise<SdkVersionListRep, AccountUsageBeta.GetStreamUsageSdkversionError>`
- **Wire**: `GET /api/v2/usage/streams/{source}/sdkversions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SdkVersionListRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `AccountUsageBeta.GetStreamUsageSdkversionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountUsageBeta.GetStreamUsageSdkversionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `source` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SdkVersionListRep` | `sdkVersionListRepSchema` | `src/models/sdk-version-list-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

