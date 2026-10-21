<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationDeliveryConfigurationsBeta — operations

Accessor: `client.integrationDeliveryConfigurationsBeta` · Source: `src/resources/integration-delivery-configurations-beta.ts` · 7 operations · Request and error types: namespace `IntegrationDeliveryConfigurationsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createIntegrationDeliveryConfiguration

- **Signature**: `createIntegrationDeliveryConfiguration(request: IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationRequest, options?: RequestOptions): ApiPromise<IntegrationDeliveryConfiguration, IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationError>`
- **Wire**: `POST /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntegrationDeliveryConfiguration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationDeliveryConfigurationsBeta.CreateIntegrationDeliveryConfigurationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `body` | `body` | `IntegrationDeliveryConfigurationPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationDeliveryConfigurationPost` | `integrationDeliveryConfigurationPostSchema` | `src/models/integration-delivery-configuration-post.ts` |
| `IntegrationDeliveryConfiguration` | `integrationDeliveryConfigurationSchema` | `src/models/integration-delivery-configuration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteIntegrationDeliveryConfiguration

- **Signature**: `deleteIntegrationDeliveryConfiguration(request: IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationError>`
- **Wire**: `DELETE /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationDeliveryConfigurationsBeta.DeleteIntegrationDeliveryConfigurationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getIntegrationDeliveryConfigurationByEnvironment

- **Signature**: `getIntegrationDeliveryConfigurationByEnvironment(request: IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentRequest, options?: RequestOptions): ApiPromise<IntegrationDeliveryConfigurationCollection, IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentError>`
- **Wire**: `GET /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationDeliveryConfigurationCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByEnvironmentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationDeliveryConfigurationCollection` | `integrationDeliveryConfigurationCollectionSchema` | `src/models/integration-delivery-configuration-collection.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getIntegrationDeliveryConfigurationById

- **Signature**: `getIntegrationDeliveryConfigurationById(request: IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdRequest, options?: RequestOptions): ApiPromise<IntegrationDeliveryConfiguration, IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdError>`
- **Wire**: `GET /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationDeliveryConfiguration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationByIdRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationDeliveryConfiguration` | `integrationDeliveryConfigurationSchema` | `src/models/integration-delivery-configuration.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getIntegrationDeliveryConfigurations

- **Signature**: `getIntegrationDeliveryConfigurations(options?: RequestOptions): ApiPromise<IntegrationDeliveryConfigurationCollection, IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationsError>`
- **Wire**: `GET /api/v2/integration-capabilities/featureStore`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntegrationDeliveryConfigurationCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.GetIntegrationDeliveryConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationDeliveryConfigurationCollection` | `integrationDeliveryConfigurationCollectionSchema` | `src/models/integration-delivery-configuration-collection.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchIntegrationDeliveryConfiguration

- **Signature**: `patchIntegrationDeliveryConfiguration(request: IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationRequest, options?: RequestOptions): ApiPromise<IntegrationDeliveryConfiguration, IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationError>`
- **Wire**: `PATCH /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntegrationDeliveryConfiguration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"patchFailedErrorRep"` [422] `PatchFailedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationDeliveryConfigurationsBeta.PatchIntegrationDeliveryConfigurationRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `IntegrationDeliveryConfiguration` | `integrationDeliveryConfigurationSchema` | `src/models/integration-delivery-configuration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `PatchFailedErrorRep` | `patchFailedErrorRepSchema` | `src/models/patch-failed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### validateIntegrationDeliveryConfiguration

- **Signature**: `validateIntegrationDeliveryConfiguration(request: IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationRequest, options?: RequestOptions): ApiPromise<IntegrationDeliveryConfigurationResponse, IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationError>`
- **Wire**: `POST /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntegrationDeliveryConfigurationResponse`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IntegrationDeliveryConfigurationsBeta.ValidateIntegrationDeliveryConfigurationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationDeliveryConfigurationResponse` | `integrationDeliveryConfigurationResponseSchema` | `src/models/integration-delivery-configuration-response.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

