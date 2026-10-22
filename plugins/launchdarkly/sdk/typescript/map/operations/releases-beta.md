<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReleasesBeta — operations

Accessor: `client.releasesBeta` · Source: `src/resources/releases-beta.ts` · 5 operations · Request and error types: namespace `ReleasesBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createReleaseForFlag

- **Signature**: `createReleaseForFlag(request: ReleasesBeta.CreateReleaseForFlagRequest, options?: RequestOptions): ApiPromise<Release, ReleasesBeta.CreateReleaseForFlagError>`
- **Wire**: `PUT /api/v2/projects/{projectKey}/flags/{flagKey}/release`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Release`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasesBeta.CreateReleaseForFlagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasesBeta.CreateReleaseForFlagRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `path` | `string` | yes |
| `body` | `body` | `CreateReleaseInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateReleaseInput` | `createReleaseInputSchema` | `src/models/create-release-input.ts` |
| `Release` | `releaseSchema` | `src/models/release.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteReleaseByFlagKey

- **Signature**: `deleteReleaseByFlagKey(request: ReleasesBeta.DeleteReleaseByFlagKeyRequest, options?: RequestOptions): ApiPromise<undefined, ReleasesBeta.DeleteReleaseByFlagKeyError>`
- **Wire**: `DELETE /api/v2/flags/{projectKey}/{flagKey}/release`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasesBeta.DeleteReleaseByFlagKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasesBeta.DeleteReleaseByFlagKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### getReleaseByFlagKey

- **Signature**: `getReleaseByFlagKey(request: ReleasesBeta.GetReleaseByFlagKeyRequest, options?: RequestOptions): ApiPromise<Release, ReleasesBeta.GetReleaseByFlagKeyError>`
- **Wire**: `GET /api/v2/flags/{projectKey}/{flagKey}/release`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Release`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasesBeta.GetReleaseByFlagKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasesBeta.GetReleaseByFlagKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Release` | `releaseSchema` | `src/models/release.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |

### patchReleaseByFlagKey

- **Signature**: `patchReleaseByFlagKey(request: ReleasesBeta.PatchReleaseByFlagKeyRequest, options?: RequestOptions): ApiPromise<Release, ReleasesBeta.PatchReleaseByFlagKeyError>`
- **Wire**: `PATCH /api/v2/flags/{projectKey}/{flagKey}/release`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Release`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasesBeta.PatchReleaseByFlagKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasesBeta.PatchReleaseByFlagKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `Release` | `releaseSchema` | `src/models/release.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updatePhaseStatus

- **Signature**: `updatePhaseStatus(request: ReleasesBeta.UpdatePhaseStatusRequest, options?: RequestOptions): ApiPromise<Release, ReleasesBeta.UpdatePhaseStatusError>`
- **Wire**: `PUT /api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Release`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ReleasesBeta.UpdatePhaseStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReleasesBeta.UpdatePhaseStatusRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `flagKey` | `path` | `string` | yes |
| `phaseId` | `path` | `string` | yes |
| `body` | `body` | `UpdatePhaseStatusInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePhaseStatusInput` | `updatePhaseStatusInputSchema` | `src/models/update-phase-status-input.ts` |
| `Release` | `releaseSchema` | `src/models/release.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

