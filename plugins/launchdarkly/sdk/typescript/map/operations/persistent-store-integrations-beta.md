<!-- Generated file — do not edit; regenerated with the SDK. -->

# PersistentStoreIntegrationsBeta — operations

Accessor: `client.persistentStoreIntegrationsBeta` · Source: `src/resources/persistent-store-integrations-beta.ts` · 5 operations · Request and error types: namespace `PersistentStoreIntegrationsBeta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBigSegmentStoreIntegration

- **Signature**: `createBigSegmentStoreIntegration(request: PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationRequest, options?: RequestOptions): ApiPromise<BigSegmentStoreIntegration, PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationError>`
- **Wire**: `POST /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BigSegmentStoreIntegration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `body` | `body` | `IntegrationDeliveryConfigurationPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntegrationDeliveryConfigurationPost` | `integrationDeliveryConfigurationPostSchema` | `src/models/integration-delivery-configuration-post.ts` |
| `BigSegmentStoreIntegration` | `bigSegmentStoreIntegrationSchema` | `src/models/big-segment-store-integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### deleteBigSegmentStoreIntegration

- **Signature**: `deleteBigSegmentStoreIntegration(request: PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationRequest, options?: RequestOptions): ApiPromise<undefined, PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationError>`
- **Wire**: `DELETE /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getBigSegmentStoreIntegration

- **Signature**: `getBigSegmentStoreIntegration(request: PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationRequest, options?: RequestOptions): ApiPromise<BigSegmentStoreIntegration, PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationError>`
- **Wire**: `GET /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BigSegmentStoreIntegration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BigSegmentStoreIntegration` | `bigSegmentStoreIntegrationSchema` | `src/models/big-segment-store-integration.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getBigSegmentStoreIntegrations

- **Signature**: `getBigSegmentStoreIntegrations(options?: RequestOptions): ApiPromise<BigSegmentStoreIntegrationCollection, PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationsError>`
- **Wire**: `GET /api/v2/integration-capabilities/big-segment-store`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BigSegmentStoreIntegrationCollection`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BigSegmentStoreIntegrationCollection` | `bigSegmentStoreIntegrationCollectionSchema` | `src/models/big-segment-store-integration-collection.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchBigSegmentStoreIntegration

- **Signature**: `patchBigSegmentStoreIntegration(request: PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationRequest, options?: RequestOptions): ApiPromise<BigSegmentStoreIntegration, PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationError>`
- **Wire**: `PATCH /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BigSegmentStoreIntegration`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `integrationKey` | `path` | `string` | yes |
| `integrationId` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `BigSegmentStoreIntegration` | `bigSegmentStoreIntegrationSchema` | `src/models/big-segment-store-integration.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

