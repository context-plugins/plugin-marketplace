<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApprovalsBeta — operations

Accessor: `client.approvalsBeta` · Source: `src/resources/approvals-beta.ts` · 4 operations · Request and error types: namespace `ApprovalsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApprovalRequestSettings

- **Signature**: `getApprovalRequestSettings(request: ApprovalsBeta.GetApprovalRequestSettingsRequest, options?: RequestOptions): ApiPromise<Record<string, ApprovalRequestSettingWithEnvs>, ApprovalsBeta.GetApprovalRequestSettingsError>`
- **Wire**: `GET /api/v2/approval-requests/projects/{projectKey}/settings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, ApprovalRequestSettingWithEnvs>` — a bare `application/json` map; the success type *is* the map
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApprovalsBeta.GetApprovalRequestSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApprovalsBeta.GetApprovalRequestSettingsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `environmentKey` | `query` | — | `string` | no |
| `resourceKind` | `query` | — | `string` | no |
| `expand` | `query` | — | `string` | no |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ApprovalRequestSettingWithEnvs` | `approvalRequestSettingWithEnvsSchema` | `src/models/approval-request-setting-with-envs.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchApprovalRequest

- **Signature**: `patchApprovalRequest(request: ApprovalsBeta.PatchApprovalRequestRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, ApprovalsBeta.PatchApprovalRequestError>`
- **Wire**: `PATCH /api/v2/approval-requests/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApprovalsBeta.PatchApprovalRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApprovalsBeta.PatchApprovalRequestRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApprovalRequestPatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApprovalRequestPatchInput` | `approvalRequestPatchInputSchema` | `src/models/approval-request-patch-input.ts` |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchApprovalRequestSettings

- **Signature**: `patchApprovalRequestSettings(request: ApprovalsBeta.PatchApprovalRequestSettingsRequest, options?: RequestOptions): ApiPromise<Record<string, ApprovalRequestSettingWithEnvs>, ApprovalsBeta.PatchApprovalRequestSettingsError>`
- **Wire**: `PATCH /api/v2/approval-requests/projects/{projectKey}/settings`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, ApprovalRequestSettingWithEnvs>` — a bare `application/json` map; the success type *is* the map
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApprovalsBeta.PatchApprovalRequestSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApprovalsBeta.PatchApprovalRequestSettingsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectKey` | `path` | — | `string` | yes |
| `ldApiVersion` | `header` | `LD-API-Version` | `LdApiVersion` | yes |
| `body` | `body` | — | `ApprovalRequestSettingsPatch` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LdApiVersion` | `ldApiVersionSchema` | `src/models/ld-api-version.ts` |
| `ApprovalRequestSettingsPatch` | `approvalRequestSettingsPatchSchema` | `src/models/approval-request-settings-patch.ts` |
| `ApprovalRequestSettingWithEnvs` | `approvalRequestSettingWithEnvsSchema` | `src/models/approval-request-setting-with-envs.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patchFlagConfigApprovalRequest

- **Signature**: `patchFlagConfigApprovalRequest(request: ApprovalsBeta.PatchFlagConfigApprovalRequestRequest, options?: RequestOptions): ApiPromise<FlagConfigApprovalRequestResponse, ApprovalsBeta.PatchFlagConfigApprovalRequestError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagConfigApprovalRequestResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `ApprovalsBeta.PatchFlagConfigApprovalRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApprovalsBeta.PatchFlagConfigApprovalRequestRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `featureFlagKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagConfigApprovalRequestResponse` | `flagConfigApprovalRequestResponseSchema` | `src/models/flag-config-approval-request-response.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

