<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeaturesV2 — operations

Accessor: `client.features_v2` · Source: `dev_cycle/apis/features_v2.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.features_v2.features_controller_create

- **Route**: `POST /v2/projects/{project}/features`
- **Server**: `default`
- **Signature**: `def features_controller_create(project: str, body: CreateFeatureDto | CreateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateErrorBody]`
- **Error**: `FeaturesControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateFeatureDto` | `dev_cycle/models/create_feature_dto.py` |
| `CreateFeatureDtoDict` | `dev_cycle/models/create_feature_dto.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerCreateErrorBody` | `dev_cycle/errors/features_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.features_v2.features_controller_find_all

- **Route**: `GET /v2/projects/{project}/features`
- **Server**: `default`
- **Signature**: `def features_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, type_: Type9OrStr | None = None, status: Status5OrStr | None = None, custom_status: list[str] | None = None, keys: list[str] | None = None, include_latest_update: bool | None = None, staleness: StalenessOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy` · `type_` — query `type` · `status` — query · `custom_status` — query `customStatus` · `keys` — query · `include_latest_update` — query `includeLatestUpdate` · `staleness` — query
- **Returns (parsed)**: `list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`
- **Returns (raw)**: `ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllErrorBody]`
- **Error**: `FeaturesControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Type9OrStr` | `dev_cycle/models/enums/type9.py` |
| `Status5OrStr` | `dev_cycle/models/enums/status5.py` |
| `StalenessOrStr` | `dev_cycle/models/enums/staleness.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerFindAllErrorBody` | `dev_cycle/errors/features_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.features_v2.features_controller_find_one

- **Route**: `GET /v2/projects/{project}/features/{feature}`
- **Server**: `default`
- **Signature**: `def features_controller_find_one(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneErrorBody]`
- **Error**: `FeaturesControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerFindOneErrorBody` | `dev_cycle/errors/features_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.features_v2.features_controller_find_static_configuration

- **Route**: `GET /v2/projects/{project}/features/{feature}/static-configuration`
- **Server**: `default`
- **Signature**: `def features_controller_find_static_configuration(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `StaticConfiguration`
- **Returns (raw)**: `ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationErrorBody]`
- **Error**: `FeaturesControllerFindStaticConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `StaticConfiguration` | `dev_cycle/models/static_configuration.py` |
| `FeaturesControllerFindStaticConfigurationErrorBody` | `dev_cycle/errors/features_controller_find_static_configuration_error.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.features_v2.features_controller_get_staleness

- **Route**: `GET /v2/projects/{project}/features/{feature}/staleness`
- **Server**: `default`
- **Signature**: `def features_controller_get_staleness(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `FeatureStalenessEntity`
- **Returns (raw)**: `ApiResult[FeatureStalenessEntity, FeaturesControllerGetStalenessErrorBody]`
- **Error**: `FeaturesControllerGetStalenessErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureStalenessEntity` | `dev_cycle/models/feature_staleness_entity.py` |
| `FeaturesControllerGetStalenessErrorBody` | `dev_cycle/errors/features_controller_get_staleness_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.features_v2.features_controller_update

- **Route**: `PATCH /v2/projects/{project}/features/{feature}`
- **Server**: `default`
- **Signature**: `def features_controller_update(feature: str, project: str, body: UpdateFeatureDto | UpdateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateErrorBody]`
- **Error**: `FeaturesControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureDto` | `dev_cycle/models/update_feature_dto.py` |
| `UpdateFeatureDtoDict` | `dev_cycle/models/update_feature_dto.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerUpdateErrorBody` | `dev_cycle/errors/features_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.features_v2.features_controller_update_staleness

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/staleness`
- **Server**: `default`
- **Signature**: `def features_controller_update_staleness(feature: str, project: str, body: UpdateStalenessDto | UpdateStalenessDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureStalenessEntity`
- **Returns (raw)**: `ApiResult[FeatureStalenessEntity, FeaturesControllerUpdateStalenessErrorBody]`
- **Error**: `FeaturesControllerUpdateStalenessErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStalenessDto` | `dev_cycle/models/update_staleness_dto.py` |
| `UpdateStalenessDtoDict` | `dev_cycle/models/update_staleness_dto.py` |
| `FeatureStalenessEntity` | `dev_cycle/models/feature_staleness_entity.py` |
| `FeaturesControllerUpdateStalenessErrorBody` | `dev_cycle/errors/features_controller_update_staleness_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.features_v2.features_controller_update_static_configuration

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/static-configuration`
- **Server**: `default`
- **Signature**: `def features_controller_update_static_configuration(feature: str, project: str, body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `StaticConfiguration`
- **Returns (raw)**: `ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationErrorBody]`
- **Error**: `FeaturesControllerUpdateStaticConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `PreconditionFailedErrorResponse` [412] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStaticConfigurationDto` | `dev_cycle/models/update_static_configuration_dto.py` |
| `UpdateStaticConfigurationDtoDict` | `dev_cycle/models/update_static_configuration_dto.py` |
| `StaticConfiguration` | `dev_cycle/models/static_configuration.py` |
| `FeaturesControllerUpdateStaticConfigurationErrorBody` | `dev_cycle/errors/features_controller_update_static_configuration_error.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.features_v2.features_controller_update_status

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/status`
- **Server**: `default`
- **Signature**: `def features_controller_update_status(feature: str, project: str, body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusErrorBody]`
- **Error**: `FeaturesControllerUpdateStatusErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureStatusDto` | `dev_cycle/models/update_feature_status_dto.py` |
| `UpdateFeatureStatusDtoDict` | `dev_cycle/models/update_feature_status_dto.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerUpdateStatusErrorBody` | `dev_cycle/errors/features_controller_update_status_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.features_v2.features_controller_update_summary

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/summary`
- **Server**: `default`
- **Signature**: `def features_controller_update_summary(feature: str, project: str, body: UpdateFeatureSummaryDto | UpdateFeatureSummaryDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureSummary`
- **Returns (raw)**: `ApiResult[FeatureSummary, FeaturesControllerUpdateSummaryErrorBody]`
- **Error**: `FeaturesControllerUpdateSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureSummaryDto` | `dev_cycle/models/update_feature_summary_dto.py` |
| `UpdateFeatureSummaryDtoDict` | `dev_cycle/models/update_feature_summary_dto.py` |
| `FeatureSummary` | `dev_cycle/models/feature_summary.py` |
| `FeaturesControllerUpdateSummaryErrorBody` | `dev_cycle/errors/features_controller_update_summary_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

