<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduledChanges — operations

Accessor: `client.scheduledChanges` · Source: `src/resources/scheduled-changes.ts` · 5 operations · Request and error types: namespace `ScheduledChanges`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFlagConfigScheduledChanges

- **Signature**: `deleteFlagConfigScheduledChanges(request: ScheduledChanges.DeleteFlagConfigScheduledChangesRequest, options?: RequestOptions): ApiPromise<undefined, ScheduledChanges.DeleteFlagConfigScheduledChangesError>`
- **Wire**: `DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ScheduledChanges.DeleteFlagConfigScheduledChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduledChanges.DeleteFlagConfigScheduledChangesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFeatureFlagScheduledChange

- **Signature**: `getFeatureFlagScheduledChange(request: ScheduledChanges.GetFeatureFlagScheduledChangeRequest, options?: RequestOptions): ApiPromise<FeatureFlagScheduledChange, ScheduledChanges.GetFeatureFlagScheduledChangeError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureFlagScheduledChange`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ScheduledChanges.GetFeatureFlagScheduledChangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduledChanges.GetFeatureFlagScheduledChangeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlagScheduledChange` | `featureFlagScheduledChangeSchema` | `src/models/feature-flag-scheduled-change.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFlagConfigScheduledChanges

- **Signature**: `getFlagConfigScheduledChanges(request: ScheduledChanges.GetFlagConfigScheduledChangesRequest, options?: RequestOptions): ApiPromise<FeatureFlagScheduledChanges, ScheduledChanges.GetFlagConfigScheduledChangesError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureFlagScheduledChanges`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ScheduledChanges.GetFlagConfigScheduledChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduledChanges.GetFlagConfigScheduledChangesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlagScheduledChanges` | `featureFlagScheduledChangesSchema` | `src/models/feature-flag-scheduled-changes.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### patchFlagConfigScheduledChange

- **Signature**: `patchFlagConfigScheduledChange(request: ScheduledChanges.PatchFlagConfigScheduledChangeRequest, options?: RequestOptions): ApiPromise<FeatureFlagScheduledChange, ScheduledChanges.PatchFlagConfigScheduledChangeError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureFlagScheduledChange`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ScheduledChanges.PatchFlagConfigScheduledChangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduledChanges.PatchFlagConfigScheduledChangeRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `ignoreConflicts` | `query` | `boolean` | no |
| `body` | `body` | `FlagScheduledChangesInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagScheduledChangesInput` | `flagScheduledChangesInputSchema` | `src/models/flag-scheduled-changes-input.ts` |
| `FeatureFlagScheduledChange` | `featureFlagScheduledChangeSchema` | `src/models/feature-flag-scheduled-change.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postFlagConfigScheduledChanges

- **Signature**: `postFlagConfigScheduledChanges(request: ScheduledChanges.PostFlagConfigScheduledChangesRequest, options?: RequestOptions): ApiPromise<FeatureFlagScheduledChange, ScheduledChanges.PostFlagConfigScheduledChangesError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureFlagScheduledChange`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ScheduledChanges.PostFlagConfigScheduledChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScheduledChanges.PostFlagConfigScheduledChangesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `ignoreConflicts` | `query` | `boolean` | no |
| `body` | `body` | `PostFlagScheduledChangesInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostFlagScheduledChangesInput` | `postFlagScheduledChangesInputSchema` | `src/models/post-flag-scheduled-changes-input.ts` |
| `FeatureFlagScheduledChange` | `featureFlagScheduledChangeSchema` | `src/models/feature-flag-scheduled-change.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

