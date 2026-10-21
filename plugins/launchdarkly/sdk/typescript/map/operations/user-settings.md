<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserSettings — operations

Accessor: `client.userSettings` · Source: `src/resources/user-settings.ts` · 5 operations · Request and error types: namespace `UserSettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getExpiringFlagsForUser

- **Signature**: `getExpiringFlagsForUser(request: UserSettings.GetExpiringFlagsForUserRequest, options?: RequestOptions): ApiPromise<ExpiringUserTargetGetResponse, UserSettings.GetExpiringFlagsForUserError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExpiringUserTargetGetResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `UserSettings.GetExpiringFlagsForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserSettings.GetExpiringFlagsForUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `userKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpiringUserTargetGetResponse` | `expiringUserTargetGetResponseSchema` | `src/models/expiring-user-target-get-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getUserFlagSetting

- **Signature**: `getUserFlagSetting(request: UserSettings.GetUserFlagSettingRequest, options?: RequestOptions): ApiPromise<UserFlagSetting, UserSettings.GetUserFlagSettingError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserFlagSetting`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `UserSettings.GetUserFlagSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserSettings.GetUserFlagSettingRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `userKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserFlagSetting` | `userFlagSettingSchema` | `src/models/user-flag-setting.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getUserFlagSettings

- **Signature**: `getUserFlagSettings(request: UserSettings.GetUserFlagSettingsRequest, options?: RequestOptions): ApiPromise<UserFlagSettings, UserSettings.GetUserFlagSettingsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserFlagSettings`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `UserSettings.GetUserFlagSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserSettings.GetUserFlagSettingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `userKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserFlagSettings` | `userFlagSettingsSchema` | `src/models/user-flag-settings.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchExpiringFlagsForUser

- **Signature**: `patchExpiringFlagsForUser(request: UserSettings.PatchExpiringFlagsForUserRequest, options?: RequestOptions): ApiPromise<ExpiringUserTargetPatchResponse, UserSettings.PatchExpiringFlagsForUserError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PATCH /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExpiringUserTargetPatchResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `UserSettings.PatchExpiringFlagsForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserSettings.PatchExpiringFlagsForUserRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `userKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `PatchUsersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchUsersRequest` | `patchUsersRequestSchema` | `src/models/patch-users-request.ts` |
| `ExpiringUserTargetPatchResponse` | `expiringUserTargetPatchResponseSchema` | `src/models/expiring-user-target-patch-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### putFlagSetting

- **Signature**: `putFlagSetting(request: UserSettings.PutFlagSettingRequest, options?: RequestOptions): ApiPromise<undefined, UserSettings.PutFlagSettingError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `UserSettings.PutFlagSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserSettings.PutFlagSettingRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `userKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `body` | `body` | `ValuePut` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValuePut` | `valuePutSchema` | `src/models/value-put.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

