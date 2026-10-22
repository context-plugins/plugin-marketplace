<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureFlagsApi — operations

Accessor: `client.featureFlagsApi` · Source: `src/resources/feature-flags-api.ts` · 14 operations · Request and error types: namespace `FeatureFlagsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### copyFeatureFlag

- **Signature**: `copyFeatureFlag(request: FeatureFlagsApi.CopyFeatureFlagRequest, options?: RequestOptions): ApiPromise<FeatureFlag, FeatureFlagsApi.CopyFeatureFlagError>`
- **Wire**: `POST /api/v2/flags/{projectKey}/{featureFlagKey}/copy`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureFlag`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.CopyFeatureFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.CopyFeatureFlagRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `body` | `body` | `FlagCopyConfigPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagCopyConfigPost` | `flagCopyConfigPostSchema` | `src/models/flag-copy-config-post.ts` |
| `FeatureFlag` | `featureFlagSchema` | `src/models/feature-flag.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteFeatureFlag

- **Signature**: `deleteFeatureFlag(request: FeatureFlagsApi.DeleteFeatureFlagRequest, options?: RequestOptions): ApiPromise<undefined, FeatureFlagsApi.DeleteFeatureFlagError>`
- **Wire**: `DELETE /api/v2/flags/{projectKey}/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.DeleteFeatureFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.DeleteFeatureFlagRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getExpiringContextTargets

- **Signature**: `getExpiringContextTargets(request: FeatureFlagsApi.GetExpiringContextTargetsRequest, options?: RequestOptions): ApiPromise<ExpiringTargetGetResponse, FeatureFlagsApi.GetExpiringContextTargetsError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpiringTargetGetResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetExpiringContextTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetExpiringContextTargetsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpiringTargetGetResponse` | `expiringTargetGetResponseSchema` | `src/models/expiring-target-get-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getExpiringUserTargets

- **Signature**: `getExpiringUserTargets(request: FeatureFlagsApi.GetExpiringUserTargetsRequest, options?: RequestOptions): ApiPromise<ExpiringUserTargetGetResponse, FeatureFlagsApi.GetExpiringUserTargetsError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpiringUserTargetGetResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetExpiringUserTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetExpiringUserTargetsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpiringUserTargetGetResponse` | `expiringUserTargetGetResponseSchema` | `src/models/expiring-user-target-get-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFeatureFlag

- **Signature**: `getFeatureFlag(request: FeatureFlagsApi.GetFeatureFlagRequest, options?: RequestOptions): ApiPromise<FeatureFlag, FeatureFlagsApi.GetFeatureFlagError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureFlag`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetFeatureFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetFeatureFlagRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `env` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlag` | `featureFlagSchema` | `src/models/feature-flag.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFeatureFlagStatus

- **Signature**: `getFeatureFlagStatus(request: FeatureFlagsApi.GetFeatureFlagStatusRequest, options?: RequestOptions): ApiPromise<FlagStatusRep, FeatureFlagsApi.GetFeatureFlagStatusError>`
- **Wire**: `GET /api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagStatusRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetFeatureFlagStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetFeatureFlagStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagStatusRep` | `flagStatusRepSchema` | `src/models/flag-status-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFeatureFlagStatusAcrossEnvironments

- **Signature**: `getFeatureFlagStatusAcrossEnvironments(request: FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsRequest, options?: RequestOptions): ApiPromise<FeatureFlagStatusAcrossEnvironments, FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsError>`
- **Wire**: `GET /api/v2/flag-status/{projectKey}/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureFlagStatusAcrossEnvironments`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetFeatureFlagStatusAcrossEnvironmentsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `env` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlagStatusAcrossEnvironments` | `featureFlagStatusAcrossEnvironmentsSchema` | `src/models/feature-flag-status-across-environments.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFeatureFlagStatuses

- **Signature**: `getFeatureFlagStatuses(request: FeatureFlagsApi.GetFeatureFlagStatusesRequest, options?: RequestOptions): ApiPromise<FeatureFlagStatuses, FeatureFlagsApi.GetFeatureFlagStatusesError>`
- **Wire**: `GET /api/v2/flag-statuses/{projectKey}/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureFlagStatuses`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetFeatureFlagStatusesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetFeatureFlagStatusesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlagStatuses` | `featureFlagStatusesSchema` | `src/models/feature-flag-statuses.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFeatureFlags

- **Signature**: `getFeatureFlags(request: FeatureFlagsApi.GetFeatureFlagsRequest, options?: RequestOptions): ApiPromise<FeatureFlags, FeatureFlagsApi.GetFeatureFlagsError>`
- **Wire**: `GET /api/v2/flags/{projectKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureFlags`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.GetFeatureFlagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.GetFeatureFlagsRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `env` | `query` | `string` | no |
| `tag` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `archived` | `query` | `boolean` | no |
| `summary` | `query` | `boolean` | no |
| `filter` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `compare` | `query` | `boolean` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlags` | `featureFlagsSchema` | `src/models/feature-flags.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchExpiringTargets

- **Signature**: `patchExpiringTargets(request: FeatureFlagsApi.PatchExpiringTargetsRequest, options?: RequestOptions): ApiPromise<ExpiringTargetPatchResponse, FeatureFlagsApi.PatchExpiringTargetsError>`
- **Wire**: `PATCH /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpiringTargetPatchResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.PatchExpiringTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.PatchExpiringTargetsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `body` | `body` | `PatchFlagsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchFlagsRequest` | `patchFlagsRequestSchema` | `src/models/patch-flags-request.ts` |
| `ExpiringTargetPatchResponse` | `expiringTargetPatchResponseSchema` | `src/models/expiring-target-patch-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchExpiringUserTargets

- **Signature**: `patchExpiringUserTargets(request: FeatureFlagsApi.PatchExpiringUserTargetsRequest, options?: RequestOptions): ApiPromise<ExpiringUserTargetPatchResponse, FeatureFlagsApi.PatchExpiringUserTargetsError>`
- **Wire**: `PATCH /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpiringUserTargetPatchResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.PatchExpiringUserTargetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.PatchExpiringUserTargetsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `body` | `body` | `PatchFlagsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchFlagsRequest` | `patchFlagsRequestSchema` | `src/models/patch-flags-request.ts` |
| `ExpiringUserTargetPatchResponse` | `expiringUserTargetPatchResponseSchema` | `src/models/expiring-user-target-patch-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchFeatureFlag

- **Signature**: `patchFeatureFlag(request: FeatureFlagsApi.PatchFeatureFlagRequest, options?: RequestOptions): ApiPromise<FeatureFlag, FeatureFlagsApi.PatchFeatureFlagError>`
- **Wire**: `PATCH /api/v2/flags/{projectKey}/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureFlag`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.PatchFeatureFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.PatchFeatureFlagRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `ignoreConflicts` | `query` | `boolean` | no |
| `dryRun` | `query` | `boolean` | no |
| `body` | `body` | `PatchWithComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchWithComment` | `patchWithCommentSchema` | `src/models/patch-with-comment.ts` |
| `FeatureFlag` | `featureFlagSchema` | `src/models/feature-flag.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postFeatureFlag

- **Signature**: `postFeatureFlag(request: FeatureFlagsApi.PostFeatureFlagRequest, options?: RequestOptions): ApiPromise<FeatureFlag, FeatureFlagsApi.PostFeatureFlagError>`
- **Wire**: `POST /api/v2/flags/{projectKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureFlag`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.PostFeatureFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.PostFeatureFlagRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `clone` | `query` | `string` | no |
| `body` | `body` | `FeatureFlagBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureFlagBody` | `featureFlagBodySchema` | `src/models/feature-flag-body.ts` |
| `FeatureFlag` | `featureFlagSchema` | `src/models/feature-flag.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postMigrationSafetyIssues

- **Signature**: `postMigrationSafetyIssues(request: FeatureFlagsApi.PostMigrationSafetyIssuesRequest, options?: RequestOptions): ApiPromise<MigrationSafetyIssueRep[], FeatureFlagsApi.PostMigrationSafetyIssuesError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MigrationSafetyIssueRep[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FeatureFlagsApi.PostMigrationSafetyIssuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"statusServiceUnavailable"` [503] `StatusServiceUnavailable` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureFlagsApi.PostMigrationSafetyIssuesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `FlagSempatch` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagSempatch` | `flagSempatchSchema` | `src/models/flag-sempatch.ts` |
| `MigrationSafetyIssueRep` | `migrationSafetyIssueRepSchema` | `src/models/migration-safety-issue-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |
| `StatusServiceUnavailable` | `statusServiceUnavailableSchema` | `src/models/status-service-unavailable.ts` |

