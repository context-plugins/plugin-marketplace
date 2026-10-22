<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlagTriggers — operations

Accessor: `client.flagTriggers` · Source: `src/resources/flag-triggers.ts` · 5 operations · Request and error types: namespace `FlagTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTriggerWorkflow

- **Signature**: `createTriggerWorkflow(request: FlagTriggers.CreateTriggerWorkflowRequest, options?: RequestOptions): ApiPromise<TriggerWorkflowRep, FlagTriggers.CreateTriggerWorkflowError>`
- **Wire**: `POST /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerWorkflowRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagTriggers.CreateTriggerWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagTriggers.CreateTriggerWorkflowRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `body` | `body` | `TriggerPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerPost` | `triggerPostSchema` | `src/models/trigger-post.ts` |
| `TriggerWorkflowRep` | `triggerWorkflowRepSchema` | `src/models/trigger-workflow-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteTriggerWorkflow

- **Signature**: `deleteTriggerWorkflow(request: FlagTriggers.DeleteTriggerWorkflowRequest, options?: RequestOptions): ApiPromise<undefined, FlagTriggers.DeleteTriggerWorkflowError>`
- **Wire**: `DELETE /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagTriggers.DeleteTriggerWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagTriggers.DeleteTriggerWorkflowRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getTriggerWorkflowById

- **Signature**: `getTriggerWorkflowById(request: FlagTriggers.GetTriggerWorkflowByIdRequest, options?: RequestOptions): ApiPromise<TriggerWorkflowRep, FlagTriggers.GetTriggerWorkflowByIdError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerWorkflowRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagTriggers.GetTriggerWorkflowByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagTriggers.GetTriggerWorkflowByIdRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerWorkflowRep` | `triggerWorkflowRepSchema` | `src/models/trigger-workflow-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getTriggerWorkflows

- **Signature**: `getTriggerWorkflows(request: FlagTriggers.GetTriggerWorkflowsRequest, options?: RequestOptions): ApiPromise<TriggerWorkflowCollectionRep, FlagTriggers.GetTriggerWorkflowsError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerWorkflowCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagTriggers.GetTriggerWorkflowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagTriggers.GetTriggerWorkflowsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerWorkflowCollectionRep` | `triggerWorkflowCollectionRepSchema` | `src/models/trigger-workflow-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchTriggerWorkflow

- **Signature**: `patchTriggerWorkflow(request: FlagTriggers.PatchTriggerWorkflowRequest, options?: RequestOptions): ApiPromise<TriggerWorkflowRep, FlagTriggers.PatchTriggerWorkflowError>`
- **Wire**: `PATCH /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerWorkflowRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagTriggers.PatchTriggerWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagTriggers.PatchTriggerWorkflowRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `FlagTriggerInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagTriggerInput` | `flagTriggerInputSchema` | `src/models/flag-trigger-input.ts` |
| `TriggerWorkflowRep` | `triggerWorkflowRepSchema` | `src/models/trigger-workflow-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

