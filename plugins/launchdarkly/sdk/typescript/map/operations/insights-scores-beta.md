<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsScoresBeta — operations

Accessor: `client.insightsScoresBeta` · Source: `src/resources/insights-scores-beta.ts` · 6 operations · Request and error types: namespace `InsightsScoresBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInsightGroup

- **Signature**: `createInsightGroup(request: InsightsScoresBeta.CreateInsightGroupRequest, options?: RequestOptions): ApiPromise<InsightGroup, InsightsScoresBeta.CreateInsightGroupError>`
- **Wire**: `POST /api/v2/engineering-insights/insights/group`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightGroup`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsScoresBeta.CreateInsightGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsScoresBeta.CreateInsightGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PostInsightGroupParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostInsightGroupParams` | `postInsightGroupParamsSchema` | `src/models/post-insight-group-params.ts` |
| `InsightGroup` | `insightGroupSchema` | `src/models/insight-group.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteInsightGroup

- **Signature**: `deleteInsightGroup(request: InsightsScoresBeta.DeleteInsightGroupRequest, options?: RequestOptions): ApiPromise<undefined, InsightsScoresBeta.DeleteInsightGroupError>`
- **Wire**: `DELETE /api/v2/engineering-insights/insights/groups/{insightGroupKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsScoresBeta.DeleteInsightGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsScoresBeta.DeleteInsightGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `insightGroupKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getInsightGroup

- **Signature**: `getInsightGroup(request: InsightsScoresBeta.GetInsightGroupRequest, options?: RequestOptions): ApiPromise<InsightGroup, InsightsScoresBeta.GetInsightGroupError>`
- **Wire**: `GET /api/v2/engineering-insights/insights/groups/{insightGroupKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightGroup`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsScoresBeta.GetInsightGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsScoresBeta.GetInsightGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `insightGroupKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightGroup` | `insightGroupSchema` | `src/models/insight-group.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getInsightGroups

- **Signature**: `getInsightGroups(request: InsightsScoresBeta.GetInsightGroupsRequest, options?: RequestOptions): ApiPromise<InsightGroupCollection, InsightsScoresBeta.GetInsightGroupsError>`
- **Wire**: `GET /api/v2/engineering-insights/insights/groups`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightGroupCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsScoresBeta.GetInsightGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsScoresBeta.GetInsightGroupsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `query` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightGroupCollection` | `insightGroupCollectionSchema` | `src/models/insight-group-collection.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getInsightsScores

- **Signature**: `getInsightsScores(request: InsightsScoresBeta.GetInsightsScoresRequest, options?: RequestOptions): ApiPromise<InsightScores, InsightsScoresBeta.GetInsightsScoresError>`
- **Wire**: `GET /api/v2/engineering-insights/insights/scores`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightScores`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsScoresBeta.GetInsightsScoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsScoresBeta.GetInsightsScoresRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `query` | `string` | yes |
| `environmentKey` | `query` | `string` | yes |
| `applicationKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightScores` | `insightScoresSchema` | `src/models/insight-scores.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchInsightGroup

- **Signature**: `patchInsightGroup(request: InsightsScoresBeta.PatchInsightGroupRequest, options?: RequestOptions): ApiPromise<InsightGroup, InsightsScoresBeta.PatchInsightGroupError>`
- **Wire**: `PATCH /api/v2/engineering-insights/insights/groups/{insightGroupKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightGroup`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `InsightsScoresBeta.PatchInsightGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationFailedErrorRep"` [400] `ValidationFailedErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"patchFailedErrorRep"` [422] `PatchFailedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsScoresBeta.PatchInsightGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `insightGroupKey` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `InsightGroup` | `insightGroupSchema` | `src/models/insight-group.ts` |
| `ValidationFailedErrorRep` | `validationFailedErrorRepSchema` | `src/models/validation-failed-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `PatchFailedErrorRep` | `patchFailedErrorRepSchema` | `src/models/patch-failed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

