<!-- Generated file — do not edit; regenerated with the SDK. -->

# MetricsBeta — operations

Accessor: `client.metricsBeta` · Source: `src/resources/metrics-beta.ts` · 5 operations · Request and error types: namespace `MetricsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMetricGroup

- **Signature**: `createMetricGroup(request: MetricsBeta.CreateMetricGroupRequest, options?: RequestOptions): ApiPromise<MetricGroupRep, MetricsBeta.CreateMetricGroupError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/metric-groups`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricGroupRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsBeta.CreateMetricGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsBeta.CreateMetricGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `MetricGroupPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricGroupPost` | `metricGroupPostSchema` | `src/models/metric-group-post.ts` |
| `MetricGroupRep` | `metricGroupRepSchema` | `src/models/metric-group-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteMetricGroup

- **Signature**: `deleteMetricGroup(request: MetricsBeta.DeleteMetricGroupRequest, options?: RequestOptions): ApiPromise<undefined, MetricsBeta.DeleteMetricGroupError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsBeta.DeleteMetricGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsBeta.DeleteMetricGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `metricGroupKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMetricGroup

- **Signature**: `getMetricGroup(request: MetricsBeta.GetMetricGroupRequest, options?: RequestOptions): ApiPromise<MetricGroupRep, MetricsBeta.GetMetricGroupError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricGroupRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsBeta.GetMetricGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsBeta.GetMetricGroupRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `metricGroupKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricGroupRep` | `metricGroupRepSchema` | `src/models/metric-group-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getMetricGroups

- **Signature**: `getMetricGroups(request: MetricsBeta.GetMetricGroupsRequest, options?: RequestOptions): ApiPromise<MetricGroupCollectionRep, MetricsBeta.GetMetricGroupsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/metric-groups`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricGroupCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsBeta.GetMetricGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsBeta.GetMetricGroupsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `expand` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricGroupCollectionRep` | `metricGroupCollectionRepSchema` | `src/models/metric-group-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchMetricGroup

- **Signature**: `patchMetricGroup(request: MetricsBeta.PatchMetricGroupRequest, options?: RequestOptions): ApiPromise<MetricGroupRep, MetricsBeta.PatchMetricGroupError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MetricGroupRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `MetricsBeta.PatchMetricGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MetricsBeta.PatchMetricGroupRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `metricGroupKey` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `MetricGroupRep` | `metricGroupRepSchema` | `src/models/metric-group-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

