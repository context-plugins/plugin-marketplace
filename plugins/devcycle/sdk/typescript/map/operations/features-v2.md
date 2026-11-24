<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeaturesV2 — operations

Accessor: `client.featuresV2` · Source: `src/resources/features-v2.ts` · 10 operations · Request and error types: namespace `FeaturesV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### featuresControllerCreate

- **Signature**: `featuresControllerCreate(request: FeaturesV2.FeaturesControllerCreateRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerCreateError>`
- **Wire**: `POST /v2/projects/{project}/features`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateFeatureDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFeatureDto` | `createFeatureDtoSchema` | `src/models/create-feature-dto.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerFindAll

- **Signature**: `featuresControllerFindAll(request: FeaturesV2.FeaturesControllerFindAllRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api[], FeaturesV2.FeaturesControllerFindAllError>`
- **Wire**: `GET /v2/projects/{project}/features`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerFindAllRequest` (13):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |
| `type` | `query` | `Type9` | no | — |
| `status` | `query` | `Status5` | no | — |
| `customStatus` | `query` | `string[]` | no | — |
| `keys` | `query` | `string[]` | no | — |
| `includeLatestUpdate` | `query` | `boolean` | no | — |
| `staleness` | `query` | `Staleness` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Type9` | `type9Schema` | `src/models/type9.ts` |
| `Status5` | `status5Schema` | `src/models/status5.ts` |
| `Staleness` | `stalenessSchema` | `src/models/staleness.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### featuresControllerFindOne

- **Signature**: `featuresControllerFindOne(request: FeaturesV2.FeaturesControllerFindOneRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerFindOneError>`
- **Wire**: `GET /v2/projects/{project}/features/{feature}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featuresControllerFindStaticConfiguration

- **Signature**: `featuresControllerFindStaticConfiguration(request: FeaturesV2.FeaturesControllerFindStaticConfigurationRequest, options?: RequestOptions): ApiPromise<StaticConfiguration, FeaturesV2.FeaturesControllerFindStaticConfigurationError>`
- **Wire**: `GET /v2/projects/{project}/features/{feature}/static-configuration`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StaticConfiguration`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerFindStaticConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerFindStaticConfigurationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StaticConfiguration` | `staticConfigurationSchema` | `src/models/static-configuration.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerGetStaleness

- **Signature**: `featuresControllerGetStaleness(request: FeaturesV2.FeaturesControllerGetStalenessRequest, options?: RequestOptions): ApiPromise<FeatureStalenessEntity, FeaturesV2.FeaturesControllerGetStalenessError>`
- **Wire**: `GET /v2/projects/{project}/features/{feature}/staleness`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureStalenessEntity`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerGetStalenessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerGetStalenessRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureStalenessEntity` | `featureStalenessEntitySchema` | `src/models/feature-staleness-entity.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### featuresControllerUpdate

- **Signature**: `featuresControllerUpdate(request: FeaturesV2.FeaturesControllerUpdateRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateFeatureDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureDto` | `updateFeatureDtoSchema` | `src/models/update-feature-dto.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerUpdateStaleness

- **Signature**: `featuresControllerUpdateStaleness(request: FeaturesV2.FeaturesControllerUpdateStalenessRequest, options?: RequestOptions): ApiPromise<FeatureStalenessEntity, FeaturesV2.FeaturesControllerUpdateStalenessError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/staleness`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureStalenessEntity`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerUpdateStalenessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerUpdateStalenessRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateStalenessDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStalenessDto` | `updateStalenessDtoSchema` | `src/models/update-staleness-dto.ts` |
| `FeatureStalenessEntity` | `featureStalenessEntitySchema` | `src/models/feature-staleness-entity.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerUpdateStaticConfiguration

- **Signature**: `featuresControllerUpdateStaticConfiguration(request: FeaturesV2.FeaturesControllerUpdateStaticConfigurationRequest, options?: RequestOptions): ApiPromise<StaticConfiguration, FeaturesV2.FeaturesControllerUpdateStaticConfigurationError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/static-configuration`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StaticConfiguration`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerUpdateStaticConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerUpdateStaticConfigurationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateStaticConfigurationDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStaticConfigurationDto` | `updateStaticConfigurationDtoSchema` | `src/models/update-static-configuration-dto.ts` |
| `StaticConfiguration` | `staticConfigurationSchema` | `src/models/static-configuration.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerUpdateStatus

- **Signature**: `featuresControllerUpdateStatus(request: FeaturesV2.FeaturesControllerUpdateStatusRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateStatusError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/status`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerUpdateStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerUpdateStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateFeatureStatusDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureStatusDto` | `updateFeatureStatusDtoSchema` | `src/models/update-feature-status-dto.ts` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `featureDevCycleManagementDeprecatedFeaturesV1ApiSchema` | `src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### featuresControllerUpdateSummary

- **Signature**: `featuresControllerUpdateSummary(request: FeaturesV2.FeaturesControllerUpdateSummaryRequest, options?: RequestOptions): ApiPromise<FeatureSummary, FeaturesV2.FeaturesControllerUpdateSummaryError>`
- **Wire**: `PATCH /v2/projects/{project}/features/{feature}/summary`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureSummary`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeaturesV2.FeaturesControllerUpdateSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeaturesV2.FeaturesControllerUpdateSummaryRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateFeatureSummaryDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureSummaryDto` | `updateFeatureSummaryDtoSchema` | `src/models/update-feature-summary-dto.ts` |
| `FeatureSummary` | `featureSummarySchema` | `src/models/feature-summary.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

