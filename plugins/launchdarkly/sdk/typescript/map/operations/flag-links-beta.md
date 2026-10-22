<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlagLinksBeta — operations

Accessor: `client.flagLinksBeta` · Source: `src/resources/flag-links-beta.ts` · 4 operations · Request and error types: namespace `FlagLinksBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFlagLink

- **Signature**: `createFlagLink(request: FlagLinksBeta.CreateFlagLinkRequest, options?: RequestOptions): ApiPromise<FlagLinkRep, FlagLinksBeta.CreateFlagLinkError>`
- **Wire**: `POST /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagLinkRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagLinksBeta.CreateFlagLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagLinksBeta.CreateFlagLinkRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `body` | `body` | `FlagLinkPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagLinkPost` | `flagLinkPostSchema` | `src/models/flag-link-post.ts` |
| `FlagLinkRep` | `flagLinkRepSchema` | `src/models/flag-link-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteFlagLink

- **Signature**: `deleteFlagLink(request: FlagLinksBeta.DeleteFlagLinkRequest, options?: RequestOptions): ApiPromise<undefined, FlagLinksBeta.DeleteFlagLinkError>`
- **Wire**: `DELETE /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagLinksBeta.DeleteFlagLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagLinksBeta.DeleteFlagLinkRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFlagLinks

- **Signature**: `getFlagLinks(request: FlagLinksBeta.GetFlagLinksRequest, options?: RequestOptions): ApiPromise<FlagLinkCollectionRep, FlagLinksBeta.GetFlagLinksError>`
- **Wire**: `GET /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagLinkCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagLinksBeta.GetFlagLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagLinksBeta.GetFlagLinksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagLinkCollectionRep` | `flagLinkCollectionRepSchema` | `src/models/flag-link-collection-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateFlagLink

- **Signature**: `updateFlagLink(request: FlagLinksBeta.UpdateFlagLinkRequest, options?: RequestOptions): ApiPromise<FlagLinkRep, FlagLinksBeta.UpdateFlagLinkError>`
- **Wire**: `PATCH /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagLinkRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagLinksBeta.UpdateFlagLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagLinksBeta.UpdateFlagLinkRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `FlagLinkRep` | `flagLinkRepSchema` | `src/models/flag-link-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

