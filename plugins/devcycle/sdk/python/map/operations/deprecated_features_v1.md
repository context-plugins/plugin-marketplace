<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeprecatedFeaturesV1 — operations

Accessor: `client.deprecated_features_v1` · Source: `dev_cycle/apis/deprecated_features_v1.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deprecated_features_v1.features_controller_create_multiple_v1

- **Route**: `POST /v1/projects/{project}/features/multiple`
- **Server**: `default`
- **Signature**: `def features_controller_create_multiple_v1(project: str, body: list[str], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`
- **Returns (raw)**: `ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerCreateMultipleV1ErrorBody]`
- **Error**: `FeaturesControllerCreateMultipleV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerCreateMultipleV1ErrorBody` | `dev_cycle/errors/features_controller_create_multiple_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.deprecated_features_v1.features_controller_create_v1

- **Route**: `POST /v1/projects/{project}/features`
- **Server**: `default`
- **Signature**: `def features_controller_create_v1(project: str, body: CreateFeatureDto | CreateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateV1ErrorBody]`
- **Error**: `FeaturesControllerCreateV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateFeatureDto` | `dev_cycle/models/create_feature_dto.py` |
| `CreateFeatureDtoDict` | `dev_cycle/models/create_feature_dto.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerCreateV1ErrorBody` | `dev_cycle/errors/features_controller_create_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.deprecated_features_v1.features_controller_find_all_linked_issues_v1

- **Route**: `GET /v1/projects/{project}/features/{feature}/integrations/jira/issues`
- **Server**: `default`
- **Signature**: `def features_controller_find_all_linked_issues_v1(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `list[JiraIssueLink]`
- **Returns (raw)**: `ApiResult[list[JiraIssueLink], FeaturesControllerFindAllLinkedIssuesV1ErrorBody]`
- **Error**: `FeaturesControllerFindAllLinkedIssuesV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `JiraIssueLink` | `dev_cycle/models/jira_issue_link.py` |
| `FeaturesControllerFindAllLinkedIssuesV1ErrorBody` | `dev_cycle/errors/features_controller_find_all_linked_issues_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.deprecated_features_v1.features_controller_find_all_v1

- **Route**: `GET /v1/projects/{project}/features`
- **Server**: `default`
- **Signature**: `def features_controller_find_all_v1(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, type_: Type9OrStr | None = None, status: Status5OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy` · `type_` — query `type` · `status` — query
- **Returns (parsed)**: `list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`
- **Returns (raw)**: `ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllV1ErrorBody]`
- **Error**: `FeaturesControllerFindAllV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Type9OrStr` | `dev_cycle/models/enums/type9.py` |
| `Status5OrStr` | `dev_cycle/models/enums/status5.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerFindAllV1ErrorBody` | `dev_cycle/errors/features_controller_find_all_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.deprecated_features_v1.features_controller_find_one_v1

- **Route**: `GET /v1/projects/{project}/features/{feature}`
- **Server**: `default`
- **Signature**: `def features_controller_find_one_v1(feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `key`, `project`
- **Params**: `feature` — path · `key` — path · `project` — path
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneV1ErrorBody]`
- **Error**: `FeaturesControllerFindOneV1ErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerFindOneV1ErrorBody` | `dev_cycle/errors/features_controller_find_one_v1_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.deprecated_features_v1.features_controller_find_static_configuration_v1

- **Route**: `GET /v1/projects/{project}/features/{feature}/static-configuration`
- **Server**: `default`
- **Signature**: `def features_controller_find_static_configuration_v1(feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `key`, `project`
- **Params**: `feature` — path · `key` — path · `project` — path
- **Returns (parsed)**: `StaticConfiguration`
- **Returns (raw)**: `ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationV1ErrorBody]`
- **Error**: `FeaturesControllerFindStaticConfigurationV1ErrorBody` — **Case A (typed)**
- **Error arms**: `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `StaticConfiguration` | `dev_cycle/models/static_configuration.py` |
| `FeaturesControllerFindStaticConfigurationV1ErrorBody` | `dev_cycle/errors/features_controller_find_static_configuration_v1_error.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.deprecated_features_v1.features_controller_link_issue_v1

- **Route**: `POST /v1/projects/{project}/features/{feature}/integrations/jira/issues`
- **Server**: `default`
- **Signature**: `def features_controller_link_issue_v1(feature: str, project: str, body: LinkJiraIssueDto | LinkJiraIssueDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `JiraIssueLink`
- **Returns (raw)**: `ApiResult[JiraIssueLink, FeaturesControllerLinkIssueV1ErrorBody]`
- **Error**: `FeaturesControllerLinkIssueV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `LinkJiraIssueDto` | `dev_cycle/models/link_jira_issue_dto.py` |
| `LinkJiraIssueDtoDict` | `dev_cycle/models/link_jira_issue_dto.py` |
| `JiraIssueLink` | `dev_cycle/models/jira_issue_link.py` |
| `FeaturesControllerLinkIssueV1ErrorBody` | `dev_cycle/errors/features_controller_link_issue_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.deprecated_features_v1.features_controller_remove_linked_issue_v1

- **Route**: `DELETE /v1/projects/{project}/features/{feature}/integrations/jira/issues/{issue_id}`
- **Server**: `default`
- **Signature**: `def features_controller_remove_linked_issue_v1(feature: str, issue_id: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `issue_id`, `key`, `project`
- **Params**: `feature` — path · `issue_id` — path · `key` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FeaturesControllerRemoveLinkedIssueV1ErrorBody]`
- **Error**: `FeaturesControllerRemoveLinkedIssueV1ErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `FeaturesControllerRemoveLinkedIssueV1ErrorBody` | `dev_cycle/errors/features_controller_remove_linked_issue_v1_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.deprecated_features_v1.features_controller_remove_v1

- **Route**: `DELETE /v1/projects/{project}/features/{feature}`
- **Server**: `default`
- **Signature**: `def features_controller_remove_v1(feature: str, key: str, project: str, *, delete_variables: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `key`, `project`
- **Params**: `feature` — path · `key` — path · `project` — path · `delete_variables` — query `deleteVariables`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FeaturesControllerRemoveV1ErrorBody]`
- **Error**: `FeaturesControllerRemoveV1ErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `FeaturesControllerRemoveV1ErrorBody` | `dev_cycle/errors/features_controller_remove_v1_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.deprecated_features_v1.features_controller_update_static_configuration_v1

- **Route**: `PATCH /v1/projects/{project}/features/{feature}/static-configuration`
- **Server**: `default`
- **Signature**: `def features_controller_update_static_configuration_v1(feature: str, key: str, project: str, body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `key`, `project`, `body`
- **Params**: `feature` — path · `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `StaticConfiguration`
- **Returns (raw)**: `ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationV1ErrorBody]`
- **Error**: `FeaturesControllerUpdateStaticConfigurationV1ErrorBody` — **Case A (typed)**
- **Error arms**: `PreconditionFailedErrorResponse` [412] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStaticConfigurationDto` | `dev_cycle/models/update_static_configuration_dto.py` |
| `UpdateStaticConfigurationDtoDict` | `dev_cycle/models/update_static_configuration_dto.py` |
| `StaticConfiguration` | `dev_cycle/models/static_configuration.py` |
| `FeaturesControllerUpdateStaticConfigurationV1ErrorBody` | `dev_cycle/errors/features_controller_update_static_configuration_v1_error.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.deprecated_features_v1.features_controller_update_status_v1

- **Route**: `PATCH /v1/projects/{project}/features/{feature}/status`
- **Server**: `default`
- **Signature**: `def features_controller_update_status_v1(feature: str, key: str, project: str, body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `key`, `project`, `body`
- **Params**: `feature` — path · `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusV1ErrorBody]`
- **Error**: `FeaturesControllerUpdateStatusV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureStatusDto` | `dev_cycle/models/update_feature_status_dto.py` |
| `UpdateFeatureStatusDtoDict` | `dev_cycle/models/update_feature_status_dto.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerUpdateStatusV1ErrorBody` | `dev_cycle/errors/features_controller_update_status_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.deprecated_features_v1.features_controller_update_v1

- **Route**: `PATCH /v1/projects/{project}/features/{feature}`
- **Server**: `default`
- **Signature**: `def features_controller_update_v1(feature: str, project: str, body: UpdateFeatureDto | UpdateFeatureDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureDevCycleManagementDeprecatedFeaturesV1Api`
- **Returns (raw)**: `ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateV1ErrorBody]`
- **Error**: `FeaturesControllerUpdateV1ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateFeatureDto` | `dev_cycle/models/update_feature_dto.py` |
| `UpdateFeatureDtoDict` | `dev_cycle/models/update_feature_dto.py` |
| `FeatureDevCycleManagementDeprecatedFeaturesV1Api` | `dev_cycle/models/feature_dev_cycle_management_deprecated_features_v1_api.py` |
| `FeaturesControllerUpdateV1ErrorBody` | `dev_cycle/errors/features_controller_update_v1_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

