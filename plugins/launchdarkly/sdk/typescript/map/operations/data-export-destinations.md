<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataExportDestinations — operations

Accessor: `client.dataExportDestinations` · Source: `src/resources/data-export-destinations.ts` · 7 operations · Request and error types: namespace `DataExportDestinations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDestination

- **Signature**: `deleteDestination(request: DataExportDestinations.DeleteDestinationRequest, options?: RequestOptions): ApiPromise<undefined, DataExportDestinations.DeleteDestinationError>`
- **Wire**: `DELETE /api/v2/destinations/{projectKey}/{environmentKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.DeleteDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExportDestinations.DeleteDestinationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getDestination

- **Signature**: `getDestination(request: DataExportDestinations.GetDestinationRequest, options?: RequestOptions): ApiPromise<Destination, DataExportDestinations.GetDestinationError>`
- **Wire**: `GET /api/v2/destinations/{projectKey}/{environmentKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Destination`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.GetDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExportDestinations.GetDestinationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Destination` | `destinationSchema` | `src/models/destination.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getDestinations

- **Signature**: `getDestinations(options?: RequestOptions): ApiPromise<Destinations, DataExportDestinations.GetDestinationsError>`
- **Wire**: `GET /api/v2/destinations`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Destinations`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.GetDestinationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Destinations` | `destinationsSchema` | `src/models/destinations.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchDestination

- **Signature**: `patchDestination(request: DataExportDestinations.PatchDestinationRequest, options?: RequestOptions): ApiPromise<Destination, DataExportDestinations.PatchDestinationError>`
- **Wire**: `PATCH /api/v2/destinations/{projectKey}/{environmentKey}/{id}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Destination`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.PatchDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExportDestinations.PatchDestinationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchOperation[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchOperation` | `patchOperationSchema` | `src/models/patch-operation.ts` |
| `Destination` | `destinationSchema` | `src/models/destination.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postDestination

- **Signature**: `postDestination(request: DataExportDestinations.PostDestinationRequest, options?: RequestOptions): ApiPromise<Destination, DataExportDestinations.PostDestinationError>`
- **Wire**: `POST /api/v2/destinations/{projectKey}/{environmentKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Destination`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.PostDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExportDestinations.PostDestinationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `environmentKey` | `path` | `string` | yes |
| `body` | `body` | `DestinationPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestinationPost` | `destinationPostSchema` | `src/models/destination-post.ts` |
| `Destination` | `destinationSchema` | `src/models/destination.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postGenerateTrustPolicy

- **Signature**: `postGenerateTrustPolicy(request: DataExportDestinations.PostGenerateTrustPolicyRequest, options?: RequestOptions): ApiPromise<GenerateTrustPolicyPostRep, DataExportDestinations.PostGenerateTrustPolicyError>`
- **Wire**: `POST /api/v2/destinations/projects/{projKey}/environments/{envKey}/generate-trust-policy`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateTrustPolicyPostRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.PostGenerateTrustPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExportDestinations.PostGenerateTrustPolicyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projKey` | `path` | `string` | yes |
| `envKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateTrustPolicyPostRep` | `generateTrustPolicyPostRepSchema` | `src/models/generate-trust-policy-post-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postGenerateWarehouseDestinationKeyPair

- **Signature**: `postGenerateWarehouseDestinationKeyPair(options?: RequestOptions): ApiPromise<GenerateWarehouseDestinationKeyPairPostRep, DataExportDestinations.PostGenerateWarehouseDestinationKeyPairError>`
- **Wire**: `POST /api/v2/destinations/generate-warehouse-destination-key-pair`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateWarehouseDestinationKeyPairPostRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `DataExportDestinations.PostGenerateWarehouseDestinationKeyPairError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateWarehouseDestinationKeyPairPostRep` | `generateWarehouseDestinationKeyPairPostRepSchema` | `src/models/generate-warehouse-destination-key-pair-post-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

