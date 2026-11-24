<!-- Generated file — do not edit; regenerated with the SDK. -->

# Variations — operations

Accessor: `client.variations` · Source: `dev_cycle/apis/variations.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.variations.variations_controller_create

- **Route**: `POST /v1/projects/{project}/features/{feature}/variations`
- **Server**: `default`
- **Signature**: `def variations_controller_create(project: str, feature: str, body: FeatureVariationDto | FeatureVariationDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `feature`, `body`
- **Params**: `project` — path · `feature` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementMetricAssociationsApi`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerCreateErrorBody]`
- **Error**: `VariationsControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureVariationDto` | `dev_cycle/models/feature_variation_dto.py` |
| `FeatureVariationDtoDict` | `dev_cycle/models/feature_variation_dto.py` |
| `FeatureDevCycleManagementMetricAssociationsApi` | `dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py` |
| `VariationsControllerCreateErrorBody` | `dev_cycle/errors/variations_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.variations.variations_controller_find_all

- **Route**: `GET /v1/projects/{project}/features/{feature}/variations`
- **Server**: `default`
- **Signature**: `def variations_controller_find_all(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `list[Variation]`
- **Returns (raw)**: `ApiResult[list[Variation], VariationsControllerFindAllErrorBody]`
- **Error**: `VariationsControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Variation` | `dev_cycle/models/variation.py` |
| `VariationsControllerFindAllErrorBody` | `dev_cycle/errors/variations_controller_find_all_error.py` |

### client.variations.variations_controller_find_one

- **Route**: `GET /v1/projects/{project}/features/{feature}/variations/{key}`
- **Server**: `default`
- **Signature**: `def variations_controller_find_one(key: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `feature`, `project`
- **Params**: `key` — path · `feature` — path · `project` — path
- **Returns (parsed)**: `Variation`
- **Returns (raw)**: `ApiResult[Variation, VariationsControllerFindOneErrorBody]`
- **Error**: `VariationsControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `Variation` | `dev_cycle/models/variation.py` |
| `VariationsControllerFindOneErrorBody` | `dev_cycle/errors/variations_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.variations.variations_controller_update

- **Route**: `PATCH /v1/projects/{project}/features/{feature}/variations/{key}`
- **Server**: `default`
- **Signature**: `def variations_controller_update(key: str, feature: str, project: str, body: UpdateFeatureVariationDto | UpdateFeatureVariationDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `feature`, `project`, `body`
- **Params**: `key` — path · `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementMetricAssociationsApi`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementMetricAssociationsApi, VariationsControllerUpdateErrorBody]`
- **Error**: `VariationsControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureVariationDto` | `dev_cycle/models/update_feature_variation_dto.py` |
| `UpdateFeatureVariationDtoDict` | `dev_cycle/models/update_feature_variation_dto.py` |
| `FeatureDevCycleManagementMetricAssociationsApi` | `dev_cycle/models/feature_dev_cycle_management_metric_associations_api.py` |
| `VariationsControllerUpdateErrorBody` | `dev_cycle/errors/variations_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

