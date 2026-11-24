<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureConfigurations — operations

Accessor: `client.feature_configurations` · Source: `dev_cycle/apis/feature_configurations.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.feature_configurations.feature_configs_controller_find_all

- **Route**: `GET /v1/projects/{project}/features/{feature}/configurations`
- **Server**: `default`
- **Signature**: `def feature_configs_controller_find_all(feature: str, project: str, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path · `environment` — query
- **Returns (parsed)**: `list[FeatureConfig]`
- **Returns (raw)**: `ApiResult[list[FeatureConfig], FeatureConfigsControllerFindAllErrorBody]`
- **Error**: `FeatureConfigsControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureConfig` | `dev_cycle/models/feature_config.py` |
| `FeatureConfigsControllerFindAllErrorBody` | `dev_cycle/errors/feature_configs_controller_find_all_error.py` |

### client.feature_configurations.feature_configs_controller_update

- **Route**: `PATCH /v1/projects/{project}/features/{feature}/configurations`
- **Server**: `default`
- **Signature**: `def feature_configs_controller_update(feature: str, project: str, environment: str, body: UpdateFeatureConfigDto | UpdateFeatureConfigDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `environment`, `body`
- **Params**: `feature` — path · `project` — path · `environment` — query · `body` — JSON body
- **Returns (parsed)**: `FeatureConfig`
- **Returns (raw)**: `ApiResult[FeatureConfig, FeatureConfigsControllerUpdateErrorBody]`
- **Error**: `FeatureConfigsControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureConfigDto` | `dev_cycle/models/update_feature_config_dto.py` |
| `UpdateFeatureConfigDtoDict` | `dev_cycle/models/update_feature_config_dto.py` |
| `FeatureConfig` | `dev_cycle/models/feature_config.py` |
| `FeatureConfigsControllerUpdateErrorBody` | `dev_cycle/errors/feature_configs_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

