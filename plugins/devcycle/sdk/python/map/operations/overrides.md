<!-- Generated file — do not edit; regenerated with the SDK. -->

# Overrides — operations

Accessor: `client.overrides` · Source: `dev_cycle/apis/overrides.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.overrides.overrides_controller_delete_overrides_for_feature

- **Route**: `DELETE /v1/projects/{project}/features/{feature}/overrides/current`
- **Server**: `default`
- **Signature**: `def overrides_controller_delete_overrides_for_feature(feature: str, project: str, environment: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `environment`
- **Params**: `feature` — path · `project` — path · `environment` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, OverridesControllerDeleteOverridesForFeatureErrorBody]`
- **Error**: `OverridesControllerDeleteOverridesForFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `OverridesControllerDeleteOverridesForFeatureErrorBody` | `dev_cycle/errors/overrides_controller_delete_overrides_for_feature_error.py` |

### client.overrides.overrides_controller_delete_overrides_for_project

- **Route**: `DELETE /v1/projects/{project}/overrides/current`
- **Server**: `default`
- **Signature**: `def overrides_controller_delete_overrides_for_project(project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, OverridesControllerDeleteOverridesForProjectErrorBody]`
- **Error**: `OverridesControllerDeleteOverridesForProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `OverridesControllerDeleteOverridesForProjectErrorBody` | `dev_cycle/errors/overrides_controller_delete_overrides_for_project_error.py` |

### client.overrides.overrides_controller_find_one

- **Route**: `GET /v1/projects/{project}/features/{feature}/overrides/current`
- **Server**: `default`
- **Signature**: `def overrides_controller_find_one(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `OverrideResponse`
- **Returns (raw)**: `ApiResult[OverrideResponse, OverridesControllerFindOneErrorBody]`
- **Error**: `OverridesControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `OverrideResponse` | `dev_cycle/models/override_response.py` |
| `OverridesControllerFindOneErrorBody` | `dev_cycle/errors/overrides_controller_find_one_error.py` |

### client.overrides.overrides_controller_find_overrides_for_feature

- **Route**: `GET /v1/projects/{project}/features/{feature}/overrides`
- **Server**: `default`
- **Signature**: `def overrides_controller_find_overrides_for_feature(feature: str, project: str, *, add_metadata: bool | None = None, environment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path · `add_metadata` — query `addMetadata` · `environment` — query
- **Returns (parsed)**: `FeatureOverrides`
- **Returns (raw)**: `ApiResult[FeatureOverrides, OverridesControllerFindOverridesForFeatureErrorBody]`
- **Error**: `OverridesControllerFindOverridesForFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureOverrides` | `dev_cycle/models/feature_overrides.py` |
| `OverridesControllerFindOverridesForFeatureErrorBody` | `dev_cycle/errors/overrides_controller_find_overrides_for_feature_error.py` |

### client.overrides.overrides_controller_find_overrides_for_project

- **Route**: `GET /v1/projects/{project}/overrides/current`
- **Server**: `default`
- **Signature**: `def overrides_controller_find_overrides_for_project(project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path
- **Returns (parsed)**: `list[UserOverride]`
- **Returns (raw)**: `ApiResult[list[UserOverride], OverridesControllerFindOverridesForProjectErrorBody]`
- **Error**: `OverridesControllerFindOverridesForProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `UserOverride` | `dev_cycle/models/user_override.py` |
| `OverridesControllerFindOverridesForProjectErrorBody` | `dev_cycle/errors/overrides_controller_find_overrides_for_project_error.py` |

### client.overrides.overrides_controller_update_feature_override

- **Route**: `PUT /v1/projects/{project}/features/{feature}/overrides/current`
- **Server**: `default`
- **Signature**: `def overrides_controller_update_feature_override(feature: str, project: str, body: UpdateOverrideDto | UpdateOverrideDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `Override`
- **Returns (raw)**: `ApiResult[Override, OverridesControllerUpdateFeatureOverrideErrorBody]`
- **Error**: `OverridesControllerUpdateFeatureOverrideErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateOverrideDto` | `dev_cycle/models/update_override_dto.py` |
| `UpdateOverrideDtoDict` | `dev_cycle/models/update_override_dto.py` |
| `Override` | `dev_cycle/models/override.py` |
| `OverridesControllerUpdateFeatureOverrideErrorBody` | `dev_cycle/errors/overrides_controller_update_feature_override_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

