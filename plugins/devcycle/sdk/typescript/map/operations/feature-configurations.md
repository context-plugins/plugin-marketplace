<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureConfigurations — operations

Accessor: `client.featureConfigurations` · Source: `src/resources/feature-configurations.ts` · 2 operations · Request and error types: namespace `FeatureConfigurations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### featureConfigsControllerFindAll

- **Signature**: `featureConfigsControllerFindAll(request: FeatureConfigurations.FeatureConfigsControllerFindAllRequest, options?: RequestOptions): ApiPromise<FeatureConfig[], FeatureConfigurations.FeatureConfigsControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/configurations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureConfig[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureConfigurations.FeatureConfigsControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureConfigurations.FeatureConfigsControllerFindAllRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `environment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureConfig` | `featureConfigSchema` | `src/models/feature-config.ts` |

### featureConfigsControllerUpdate

- **Signature**: `featureConfigsControllerUpdate(request: FeatureConfigurations.FeatureConfigsControllerUpdateRequest, options?: RequestOptions): ApiPromise<FeatureConfig, FeatureConfigurations.FeatureConfigsControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/features/{feature}/configurations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeatureConfig`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureConfigurations.FeatureConfigsControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureConfigurations.FeatureConfigsControllerUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `environment` | `query` | `string` | yes |
| `body` | `body` | `UpdateFeatureConfigDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFeatureConfigDto` | `updateFeatureConfigDtoSchema` | `src/models/update-feature-config-dto.ts` |
| `FeatureConfig` | `featureConfigSchema` | `src/models/feature-config.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

