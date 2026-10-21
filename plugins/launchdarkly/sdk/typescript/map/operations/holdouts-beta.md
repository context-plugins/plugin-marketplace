<!-- Generated file — do not edit; regenerated with the SDK. -->

# HoldoutsBeta — operations

Accessor: `client.holdoutsBeta` · Source: `src/resources/holdouts-beta.ts` · 5 operations · Request and error types: namespace `HoldoutsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllHoldouts

- **Signature**: `getAllHoldouts(request: HoldoutsBeta.GetAllHoldoutsRequest, options?: RequestOptions): ApiPromise<HoldoutsCollectionRep, HoldoutsBeta.GetAllHoldoutsError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HoldoutsCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `HoldoutsBeta.GetAllHoldoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HoldoutsBeta.GetAllHoldoutsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldoutsCollectionRep` | `holdoutsCollectionRepSchema` | `src/models/holdouts-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getHoldout

- **Signature**: `getHoldout(request: HoldoutsBeta.GetHoldoutRequest, options?: RequestOptions): ApiPromise<HoldoutDetailRep, HoldoutsBeta.GetHoldoutError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HoldoutDetailRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `HoldoutsBeta.GetHoldoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HoldoutsBeta.GetHoldoutRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `holdoutKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldoutDetailRep` | `holdoutDetailRepSchema` | `src/models/holdout-detail-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getHoldoutById

- **Signature**: `getHoldoutById(request: HoldoutsBeta.GetHoldoutByIdRequest, options?: RequestOptions): ApiPromise<HoldoutRep, HoldoutsBeta.GetHoldoutByIdError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/id/{holdoutId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HoldoutRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `HoldoutsBeta.GetHoldoutByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HoldoutsBeta.GetHoldoutByIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `holdoutId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldoutRep` | `holdoutRepSchema` | `src/models/holdout-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchHoldout

- **Signature**: `patchHoldout(request: HoldoutsBeta.PatchHoldoutRequest, options?: RequestOptions): ApiPromise<HoldoutRep, HoldoutsBeta.PatchHoldoutError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HoldoutRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `HoldoutsBeta.PatchHoldoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HoldoutsBeta.PatchHoldoutRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `holdoutKey` | `path` | `string` | yes |
| `body` | `body` | `HoldoutPatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldoutPatchInput` | `holdoutPatchInputSchema` | `src/models/holdout-patch-input.ts` |
| `HoldoutRep` | `holdoutRepSchema` | `src/models/holdout-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postHoldout

- **Signature**: `postHoldout(request: HoldoutsBeta.PostHoldoutRequest, options?: RequestOptions): ApiPromise<HoldoutRep, HoldoutsBeta.PostHoldoutError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HoldoutRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `HoldoutsBeta.PostHoldoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HoldoutsBeta.PostHoldoutRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `HoldoutPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldoutPostRequest` | `holdoutPostRequestSchema` | `src/models/holdout-post-request.ts` |
| `HoldoutRep` | `holdoutRepSchema` | `src/models/holdout-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |

