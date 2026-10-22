<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlagImportConfigurationsBeta — operations

Accessor: `client.flagImportConfigurationsBeta` · Source: `src/resources/flag-import-configurations-beta.ts` · 6 operations · Request and error types: namespace `FlagImportConfigurationsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFlagImportConfiguration

- **Signature**: `createFlagImportConfiguration(request: FlagImportConfigurationsBeta.CreateFlagImportConfigurationRequest, options?: RequestOptions): ApiPromise<FlagImportIntegration, FlagImportConfigurationsBeta.CreateFlagImportConfigurationError>`
- **Wire**: `POST /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagImportIntegration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagImportConfigurationsBeta.CreateFlagImportConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagImportConfigurationsBeta.CreateFlagImportConfigurationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `body` | `body` | `FlagImportConfigurationPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagImportConfigurationPost` | `flagImportConfigurationPostSchema` | `src/models/flag-import-configuration-post.ts` |
| `FlagImportIntegration` | `flagImportIntegrationSchema` | `src/models/flag-import-integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteFlagImportConfiguration

- **Signature**: `deleteFlagImportConfiguration(request: FlagImportConfigurationsBeta.DeleteFlagImportConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, FlagImportConfigurationsBeta.DeleteFlagImportConfigurationError>`
- **Wire**: `DELETE /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagImportConfigurationsBeta.DeleteFlagImportConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagImportConfigurationsBeta.DeleteFlagImportConfigurationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFlagImportConfiguration

- **Signature**: `getFlagImportConfiguration(request: FlagImportConfigurationsBeta.GetFlagImportConfigurationRequest, options?: RequestOptions): ApiPromise<FlagImportIntegration, FlagImportConfigurationsBeta.GetFlagImportConfigurationError>`
- **Wire**: `GET /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagImportIntegration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagImportConfigurationsBeta.GetFlagImportConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagImportConfigurationsBeta.GetFlagImportConfigurationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagImportIntegration` | `flagImportIntegrationSchema` | `src/models/flag-import-integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getFlagImportConfigurations

- **Signature**: `getFlagImportConfigurations(options?: RequestOptions): ApiPromise<FlagImportIntegrationCollection, FlagImportConfigurationsBeta.GetFlagImportConfigurationsError>`
- **Wire**: `GET /api/v2/integration-capabilities/flag-import`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlagImportIntegrationCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagImportConfigurationsBeta.GetFlagImportConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `FlagImportIntegrationCollection` | `flagImportIntegrationCollectionSchema` | `src/models/flag-import-integration-collection.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchFlagImportConfiguration

- **Signature**: `patchFlagImportConfiguration(request: FlagImportConfigurationsBeta.PatchFlagImportConfigurationRequest, options?: RequestOptions): ApiPromise<FlagImportIntegration, FlagImportConfigurationsBeta.PatchFlagImportConfigurationError>`
- **Wire**: `PATCH /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlagImportIntegration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagImportConfigurationsBeta.PatchFlagImportConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagImportConfigurationsBeta.PatchFlagImportConfigurationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `FlagImportIntegration` | `flagImportIntegrationSchema` | `src/models/flag-import-integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### triggerFlagImportJob

- **Signature**: `triggerFlagImportJob(request: FlagImportConfigurationsBeta.TriggerFlagImportJobRequest, options?: RequestOptions): ApiPromise<undefined, FlagImportConfigurationsBeta.TriggerFlagImportJobError>`
- **Wire**: `POST /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `FlagImportConfigurationsBeta.TriggerFlagImportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlagImportConfigurationsBeta.TriggerFlagImportJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

