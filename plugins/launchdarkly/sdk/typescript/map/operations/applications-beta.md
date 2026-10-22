<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApplicationsBeta — operations

Accessor: `client.applicationsBeta` · Source: `src/resources/applications-beta.ts` · 7 operations · Request and error types: namespace `ApplicationsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApplication

- **Signature**: `deleteApplication(request: ApplicationsBeta.DeleteApplicationRequest, options?: RequestOptions): ApiPromise<undefined, ApplicationsBeta.DeleteApplicationError>`
- **Wire**: `DELETE /api/v2/applications/{applicationKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.DeleteApplicationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.DeleteApplicationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteApplicationVersion

- **Signature**: `deleteApplicationVersion(request: ApplicationsBeta.DeleteApplicationVersionRequest, options?: RequestOptions): ApiPromise<undefined, ApplicationsBeta.DeleteApplicationVersionError>`
- **Wire**: `DELETE /api/v2/applications/{applicationKey}/versions/{versionKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.DeleteApplicationVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.DeleteApplicationVersionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationKey` | `path` | `string` | yes |
| `versionKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApplication

- **Signature**: `getApplication(request: ApplicationsBeta.GetApplicationRequest, options?: RequestOptions): ApiPromise<ApplicationRep, ApplicationsBeta.GetApplicationError>`
- **Wire**: `GET /api/v2/applications/{applicationKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.GetApplicationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.GetApplicationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationRep` | `applicationRepSchema` | `src/models/application-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApplicationVersions

- **Signature**: `getApplicationVersions(request: ApplicationsBeta.GetApplicationVersionsRequest, options?: RequestOptions): ApiPromise<ApplicationVersionsCollectionRep, ApplicationsBeta.GetApplicationVersionsError>`
- **Wire**: `GET /api/v2/applications/{applicationKey}/versions`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationVersionsCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.GetApplicationVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.GetApplicationVersionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationKey` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `sort` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationVersionsCollectionRep` | `applicationVersionsCollectionRepSchema` | `src/models/application-versions-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getApplications

- **Signature**: `getApplications(request: ApplicationsBeta.GetApplicationsRequest, options?: RequestOptions): ApiPromise<ApplicationCollectionRep, ApplicationsBeta.GetApplicationsError>`
- **Wire**: `GET /api/v2/applications`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplicationCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.GetApplicationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.GetApplicationsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationCollectionRep` | `applicationCollectionRepSchema` | `src/models/application-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchApplication

- **Signature**: `patchApplication(request: ApplicationsBeta.PatchApplicationRequest, options?: RequestOptions): ApiPromise<ApplicationRep, ApplicationsBeta.PatchApplicationError>`
- **Wire**: `PATCH /api/v2/applications/{applicationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApplicationRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.PatchApplicationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.PatchApplicationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationKey` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `ApplicationRep` | `applicationRepSchema` | `src/models/application-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchApplicationVersion

- **Signature**: `patchApplicationVersion(request: ApplicationsBeta.PatchApplicationVersionRequest, options?: RequestOptions): ApiPromise<ApplicationVersionRep, ApplicationsBeta.PatchApplicationVersionError>`
- **Wire**: `PATCH /api/v2/applications/{applicationKey}/versions/{versionKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApplicationVersionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApplicationsBeta.PatchApplicationVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApplicationsBeta.PatchApplicationVersionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `applicationKey` | `path` | `string` | yes |
| `versionKey` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `ApplicationVersionRep` | `applicationVersionRepSchema` | `src/models/application-version-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

