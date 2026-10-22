<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsBeta — operations

Accessor: `client.integrationsBeta` · Source: `src/resources/integrations-beta.ts` · 5 operations · Request and error types: namespace `IntegrationsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createIntegrationConfiguration

- **Signature**: `createIntegrationConfiguration(request: IntegrationsBeta.CreateIntegrationConfigurationRequest, options?: RequestOptions): ApiPromise<IntegrationConfigurationsRep, IntegrationsBeta.CreateIntegrationConfigurationError>`
- **Wire**: `POST /api/v2/integration-configurations/keys/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntegrationConfigurationsRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationsBeta.CreateIntegrationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsBeta.CreateIntegrationConfigurationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |
| `body` | `body` | `IntegrationConfigurationPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationConfigurationPost` | `integrationConfigurationPostSchema` | `src/models/integration-configuration-post.ts` |
| `IntegrationConfigurationsRep` | `integrationConfigurationsRepSchema` | `src/models/integration-configurations-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteIntegrationConfiguration

- **Signature**: `deleteIntegrationConfiguration(request: IntegrationsBeta.DeleteIntegrationConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationsBeta.DeleteIntegrationConfigurationError>`
- **Wire**: `DELETE /api/v2/integration-configurations/{integrationConfigurationId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationsBeta.DeleteIntegrationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsBeta.DeleteIntegrationConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationConfigurationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getAllIntegrationConfigurations

- **Signature**: `getAllIntegrationConfigurations(request: IntegrationsBeta.GetAllIntegrationConfigurationsRequest, options?: RequestOptions): ApiPromise<IntegrationConfigurationCollectionRep, IntegrationsBeta.GetAllIntegrationConfigurationsError>`
- **Wire**: `GET /api/v2/integration-configurations/keys/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationConfigurationCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationsBeta.GetAllIntegrationConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsBeta.GetAllIntegrationConfigurationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationConfigurationCollectionRep` | `integrationConfigurationCollectionRepSchema` | `src/models/integration-configuration-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getIntegrationConfiguration

- **Signature**: `getIntegrationConfiguration(request: IntegrationsBeta.GetIntegrationConfigurationRequest, options?: RequestOptions): ApiPromise<IntegrationConfigurationsRep, IntegrationsBeta.GetIntegrationConfigurationError>`
- **Wire**: `GET /api/v2/integration-configurations/{integrationConfigurationId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationConfigurationsRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationsBeta.GetIntegrationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsBeta.GetIntegrationConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationConfigurationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationConfigurationsRep` | `integrationConfigurationsRepSchema` | `src/models/integration-configurations-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateIntegrationConfiguration

- **Signature**: `updateIntegrationConfiguration(request: IntegrationsBeta.UpdateIntegrationConfigurationRequest, options?: RequestOptions): ApiPromise<IntegrationConfigurationsRep, IntegrationsBeta.UpdateIntegrationConfigurationError>`
- **Wire**: `PATCH /api/v2/integration-configurations/{integrationConfigurationId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntegrationConfigurationsRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationsBeta.UpdateIntegrationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationsBeta.UpdateIntegrationConfigurationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `integrationConfigurationId` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `IntegrationConfigurationsRep` | `integrationConfigurationsRepSchema` | `src/models/integration-configurations-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

