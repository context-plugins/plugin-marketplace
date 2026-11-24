<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataStandards — operations

Accessor: `client.data_standards` · Source: `soda/apis/data_standards.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_standards.delete_api_v1_data_standards_data_standard_id

- **Route**: `DELETE /api/v1/dataStandards/{dataStandardId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_data_standards_data_standard_id(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`
- **Params**: `data_standard_id` — path `dataStandardId`
- **Returns (parsed)**: `PublicApiDeleteDataStandardResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDataStandardResponse, DeleteApiV1DataStandardsDataStandardIdErrorBody]`
- **Error**: `DeleteApiV1DataStandardsDataStandardIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDataStandardResponse` | `soda/models/public_api_delete_data_standard_response.py` |
| `DeleteApiV1DataStandardsDataStandardIdErrorBody` | `soda/errors/delete_api_v1_data_standards_data_standard_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.get_api_v1_data_standards

- **Route**: `GET /api/v1/dataStandards`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_data_standards(*, page: int | None = None, search: str | None = None, size: int | None = None, sort: DataStandardSortFieldDtoOrStr | None = None, status: DataStandardStatusDtoOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `search` — query · `size` — query · `sort` — query · `status` — query
- **Returns (parsed)**: `PublicApiListDataStandardsResponse`
- **Returns (raw)**: `ApiResult[PublicApiListDataStandardsResponse, GetApiV1DataStandardsErrorBody]`
- **Error**: `GetApiV1DataStandardsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataStandardSortFieldDtoOrStr` | `soda/models/enums/data_standard_sort_field_dto.py` |
| `DataStandardStatusDtoOrStr` | `soda/models/enums/data_standard_status_dto.py` |
| `PublicApiListDataStandardsResponse` | `soda/models/public_api_list_data_standards_response.py` |
| `GetApiV1DataStandardsErrorBody` | `soda/errors/get_api_v1_data_standards_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.get_api_v1_data_standards_activity

- **Route**: `GET /api/v1/dataStandards/activity`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_data_standards_activity(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PublicApiDataStandardsActivityResponse`
- **Returns (raw)**: `ApiResult[PublicApiDataStandardsActivityResponse, GetApiV1DataStandardsActivityErrorBody]`
- **Error**: `GetApiV1DataStandardsActivityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDataStandardsActivityResponse` | `soda/models/public_api_data_standards_activity_response.py` |
| `GetApiV1DataStandardsActivityErrorBody` | `soda/errors/get_api_v1_data_standards_activity_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.get_api_v1_data_standards_data_standard_id

- **Route**: `GET /api/v1/dataStandards/{dataStandardId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_data_standards_data_standard_id(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`
- **Params**: `data_standard_id` — path `dataStandardId`
- **Returns (parsed)**: `PublicApiGetDataStandardResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetDataStandardResponse, GetApiV1DataStandardsDataStandardIdErrorBody]`
- **Error**: `GetApiV1DataStandardsDataStandardIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGetDataStandardResponse` | `soda/models/public_api_get_data_standard_response.py` |
| `GetApiV1DataStandardsDataStandardIdErrorBody` | `soda/errors/get_api_v1_data_standards_data_standard_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.get_api_v1_data_standards_data_standard_id_checks

- **Route**: `GET /api/v1/dataStandards/{dataStandardId}/checks`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_data_standards_data_standard_id_checks(data_standard_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`
- **Params**: `data_standard_id` — path `dataStandardId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListDataStandardChecksResponse`
- **Returns (raw)**: `ApiResult[PublicApiListDataStandardChecksResponse, GetApiV1DataStandardsDataStandardIdChecksErrorBody]`
- **Error**: `GetApiV1DataStandardsDataStandardIdChecksErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListDataStandardChecksResponse` | `soda/models/public_api_list_data_standard_checks_response.py` |
| `GetApiV1DataStandardsDataStandardIdChecksErrorBody` | `soda/errors/get_api_v1_data_standards_data_standard_id_checks_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.get_api_v1_data_standards_data_standard_id_datasets

- **Route**: `GET /api/v1/dataStandards/{dataStandardId}/datasets`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_data_standards_data_standard_id_datasets(data_standard_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`
- **Params**: `data_standard_id` — path `dataStandardId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListDataStandardDatasetsResponse`
- **Returns (raw)**: `ApiResult[PublicApiListDataStandardDatasetsResponse, GetApiV1DataStandardsDataStandardIdDatasetsErrorBody]`
- **Error**: `GetApiV1DataStandardsDataStandardIdDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListDataStandardDatasetsResponse` | `soda/models/public_api_list_data_standard_datasets_response.py` |
| `GetApiV1DataStandardsDataStandardIdDatasetsErrorBody` | `soda/errors/get_api_v1_data_standards_data_standard_id_datasets_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards

- **Route**: `POST /api/v1/dataStandards`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards(body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiCreateDataStandardResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateDataStandardResponse, PostApiV1DataStandardsErrorBody]`
- **Error**: `PostApiV1DataStandardsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDataStandardRequestDto` | `soda/models/public_api_data_standard_request_dto.py` |
| `PublicApiDataStandardRequestDtoDict` | `soda/models/public_api_data_standard_request_dto.py` |
| `PublicApiCreateDataStandardResponse` | `soda/models/public_api_create_data_standard_response.py` |
| `PostApiV1DataStandardsErrorBody` | `soda/errors/post_api_v1_data_standards_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards_actions_execute

- **Route**: `POST /api/v1/dataStandards/actions/execute`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards_actions_execute(body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiExecuteDataStandardsResponse`
- **Returns (raw)**: `ApiResult[PublicApiExecuteDataStandardsResponse, PostApiV1DataStandardsActionsExecuteErrorBody]`
- **Error**: `PostApiV1DataStandardsActionsExecuteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiExecuteDataStandardsRequestDto` | `soda/models/public_api_execute_data_standards_request_dto.py` |
| `PublicApiExecuteDataStandardsRequestDtoDict` | `soda/models/public_api_execute_data_standards_request_dto.py` |
| `PublicApiExecuteDataStandardsResponse` | `soda/models/public_api_execute_data_standards_response.py` |
| `PostApiV1DataStandardsActionsExecuteErrorBody` | `soda/errors/post_api_v1_data_standards_actions_execute_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards_actions_preview_scope

- **Route**: `POST /api/v1/dataStandards/actions/previewScope`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards_actions_preview_scope(body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiPreviewDataStandardScopeResponse`
- **Returns (raw)**: `ApiResult[PublicApiPreviewDataStandardScopeResponse, PostApiV1DataStandardsActionsPreviewScopeErrorBody]`
- **Error**: `PostApiV1DataStandardsActionsPreviewScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiPreviewDataStandardScopeRequestDto` | `soda/models/public_api_preview_data_standard_scope_request_dto.py` |
| `PublicApiPreviewDataStandardScopeRequestDtoDict` | `soda/models/public_api_preview_data_standard_scope_request_dto.py` |
| `PublicApiPreviewDataStandardScopeResponse` | `soda/models/public_api_preview_data_standard_scope_response.py` |
| `PostApiV1DataStandardsActionsPreviewScopeErrorBody` | `soda/errors/post_api_v1_data_standards_actions_preview_scope_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards_actions_test

- **Route**: `POST /api/v1/dataStandards/actions/test`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards_actions_test(body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiTestDataStandardResponse`
- **Returns (raw)**: `ApiResult[PublicApiTestDataStandardResponse, PostApiV1DataStandardsActionsTestErrorBody]`
- **Error**: `PostApiV1DataStandardsActionsTestErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiTestDataStandardRequestDto` | `soda/models/public_api_test_data_standard_request_dto.py` |
| `PublicApiTestDataStandardRequestDtoDict` | `soda/models/public_api_test_data_standard_request_dto.py` |
| `PublicApiTestDataStandardResponse` | `soda/models/public_api_test_data_standard_response.py` |
| `PostApiV1DataStandardsActionsTestErrorBody` | `soda/errors/post_api_v1_data_standards_actions_test_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards_data_standard_id

- **Route**: `POST /api/v1/dataStandards/{dataStandardId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards_data_standard_id(data_standard_id: str, body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`, `body`
- **Params**: `data_standard_id` — path `dataStandardId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateDataStandardResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateDataStandardResponse, PostApiV1DataStandardsDataStandardIdErrorBody]`
- **Error**: `PostApiV1DataStandardsDataStandardIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDataStandardRequestDto` | `soda/models/public_api_data_standard_request_dto.py` |
| `PublicApiDataStandardRequestDtoDict` | `soda/models/public_api_data_standard_request_dto.py` |
| `PublicApiUpdateDataStandardResponse` | `soda/models/public_api_update_data_standard_response.py` |
| `PostApiV1DataStandardsDataStandardIdErrorBody` | `soda/errors/post_api_v1_data_standards_data_standard_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope

- **Route**: `POST /api/v1/dataStandards/{dataStandardId}/actions/evaluateScope`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`
- **Params**: `data_standard_id` — path `dataStandardId`
- **Returns (parsed)**: `PublicApiEvaluateDataStandardScopeResponse`
- **Returns (raw)**: `ApiResult[PublicApiEvaluateDataStandardScopeResponse, PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody]`
- **Error**: `PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiEvaluateDataStandardScopeResponse` | `soda/models/public_api_evaluate_data_standard_scope_response.py` |
| `PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody` | `soda/errors/post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_standards.post_api_v1_data_standards_data_standard_id_actions_status

- **Route**: `POST /api/v1/dataStandards/{dataStandardId}/actions/status`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_data_standards_data_standard_id_actions_status(data_standard_id: str, body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `data_standard_id`, `body`
- **Params**: `data_standard_id` — path `dataStandardId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateDataStandardStatusResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateDataStandardStatusResponse, PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody]`
- **Error**: `PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateDataStandardStatusRequestDto` | `soda/models/public_api_update_data_standard_status_request_dto.py` |
| `PublicApiUpdateDataStandardStatusRequestDtoDict` | `soda/models/public_api_update_data_standard_status_request_dto.py` |
| `PublicApiUpdateDataStandardStatusResponse` | `soda/models/public_api_update_data_standard_status_response.py` |
| `PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody` | `soda/errors/post_api_v1_data_standards_data_standard_id_actions_status_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

