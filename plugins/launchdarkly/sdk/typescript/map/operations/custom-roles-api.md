<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomRolesApi — operations

Accessor: `client.customRolesApi` · Source: `src/resources/custom-roles-api.ts` · 5 operations · Request and error types: namespace `CustomRolesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCustomRole

- **Signature**: `deleteCustomRole(request: CustomRolesApi.DeleteCustomRoleRequest, options?: RequestOptions): ApiPromise<undefined, CustomRolesApi.DeleteCustomRoleError>`
- **Wire**: `DELETE /api/v2/roles/{customRoleKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CustomRolesApi.DeleteCustomRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomRolesApi.DeleteCustomRoleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customRoleKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getCustomRole

- **Signature**: `getCustomRole(request: CustomRolesApi.GetCustomRoleRequest, options?: RequestOptions): ApiPromise<CustomRole, CustomRolesApi.GetCustomRoleError>`
- **Wire**: `GET /api/v2/roles/{customRoleKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomRole`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CustomRolesApi.GetCustomRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomRolesApi.GetCustomRoleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customRoleKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomRole` | `customRoleSchema` | `src/models/custom-role.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getCustomRoles

- **Signature**: `getCustomRoles(request: CustomRolesApi.GetCustomRolesRequest, options?: RequestOptions): ApiPromise<CustomRoles, CustomRolesApi.GetCustomRolesError>`
- **Wire**: `GET /api/v2/roles`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomRoles`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CustomRolesApi.GetCustomRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomRolesApi.GetCustomRolesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomRoles` | `customRolesSchema` | `src/models/custom-roles.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchCustomRole

- **Signature**: `patchCustomRole(request: CustomRolesApi.PatchCustomRoleRequest, options?: RequestOptions): ApiPromise<CustomRole, CustomRolesApi.PatchCustomRoleError>`
- **Wire**: `PATCH /api/v2/roles/{customRoleKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomRole`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CustomRolesApi.PatchCustomRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomRolesApi.PatchCustomRoleRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customRoleKey` | `path` | `string` | yes |
| `body` | `body` | `PatchWithComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchWithComment` | `patchWithCommentSchema` | `src/models/patch-with-comment.ts` |
| `CustomRole` | `customRoleSchema` | `src/models/custom-role.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postCustomRole

- **Signature**: `postCustomRole(request: CustomRolesApi.PostCustomRoleRequest, options?: RequestOptions): ApiPromise<CustomRole, CustomRolesApi.PostCustomRoleError>`
- **Wire**: `POST /api/v2/roles`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomRole`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `CustomRolesApi.PostCustomRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomRolesApi.PostCustomRoleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomRolePost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomRolePost` | `customRolePostSchema` | `src/models/custom-role-post.ts` |
| `CustomRole` | `customRoleSchema` | `src/models/custom-role.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

