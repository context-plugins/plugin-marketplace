<!-- Generated file — do not edit; regenerated with the SDK. -->

# Variations — operations

Accessor: `client.variations` · Source: `src/resources/variations.ts` · 4 operations · Request and error types: namespace `Variations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### variationsControllerCreate

- **Signature**: `variationsControllerCreate(request: Variations.VariationsControllerCreateRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/features/{feature}/variations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementMetricAssociationsApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Variations.VariationsControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Variations.VariationsControllerCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `body` | `body` | `FeatureVariationDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureVariationDto` | `featureVariationDtoSchema` | `src/models/feature-variation-dto.ts` |
| `FeatureDevCycleManagementMetricAssociationsApi` | `featureDevCycleManagementMetricAssociationsApiSchema` | `src/models/feature-dev-cycle-management-metric-associations-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### variationsControllerFindAll

- **Signature**: `variationsControllerFindAll(request: Variations.VariationsControllerFindAllRequest, options?: RequestOptions): ApiPromise<Variation[], Variations.VariationsControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/variations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Variation[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Variations.VariationsControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Variations.VariationsControllerFindAllRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Variation` | `variationSchema` | `src/models/variation.ts` |

### variationsControllerFindOne

- **Signature**: `variationsControllerFindOne(request: Variations.VariationsControllerFindOneRequest, options?: RequestOptions): ApiPromise<Variation, Variations.VariationsControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/variations/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Variation`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Variations.VariationsControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Variations.VariationsControllerFindOneRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Variation` | `variationSchema` | `src/models/variation.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### variationsControllerUpdate

- **Signature**: `variationsControllerUpdate(request: Variations.VariationsControllerUpdateRequest, options?: RequestOptions): ApiPromise<FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/features/{feature}/variations/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureDevCycleManagementMetricAssociationsApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Variations.VariationsControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Variations.VariationsControllerUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateFeatureVariationDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureVariationDto` | `updateFeatureVariationDtoSchema` | `src/models/update-feature-variation-dto.ts` |
| `FeatureDevCycleManagementMetricAssociationsApi` | `featureDevCycleManagementMetricAssociationsApiSchema` | `src/models/feature-dev-cycle-management-metric-associations-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

