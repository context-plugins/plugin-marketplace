<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testexecutions — operations

Accessor: `client.testexecutions` · Source: `amazon_lex/apis/testexecutions.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.testexecutions.describe_test_execution

- **Route**: `GET /testexecutions/{testExecutionId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_test_execution(test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_execution_id`
- **Params**: `test_execution_id` — path `testExecutionId`
- **Returns (parsed)**: `DescribeTestExecutionResponse`
- **Returns (raw)**: `ApiResult[DescribeTestExecutionResponse, DescribeTestExecutionErrorBody]`
- **Error**: `DescribeTestExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeTestExecutionResponse` | `amazon_lex/models/describe_test_execution_response.py` |
| `DescribeTestExecutionErrorBody` | `amazon_lex/errors/describe_test_execution_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testexecutions.get_test_execution_artifacts_url

- **Route**: `GET /testexecutions/{testExecutionId}/artifacturl`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def get_test_execution_artifacts_url(test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_execution_id`
- **Params**: `test_execution_id` — path `testExecutionId`
- **Returns (parsed)**: `GetTestExecutionArtifactsUrlResponse`
- **Returns (raw)**: `ApiResult[GetTestExecutionArtifactsUrlResponse, GetTestExecutionArtifactsUrlErrorBody]`
- **Error**: `GetTestExecutionArtifactsUrlErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetTestExecutionArtifactsUrlResponse` | `amazon_lex/models/get_test_execution_artifacts_url_response.py` |
| `GetTestExecutionArtifactsUrlErrorBody` | `amazon_lex/errors/get_test_execution_artifacts_url_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testexecutions.list_test_execution_result_items

- **Route**: `POST /testexecutions/{testExecutionId}/results`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_test_execution_result_items(test_execution_id: str, *, body: ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_execution_id`
- **Params**: `test_execution_id` — path `testExecutionId` · `body` — JSON body
- **Returns (parsed)**: `ListTestExecutionResultItemsResponse`
- **Returns (raw)**: `ApiResult[ListTestExecutionResultItemsResponse, ListTestExecutionResultItemsErrorBody]`
- **Error**: `ListTestExecutionResultItemsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTestExecutionResultItemsRequest` | `amazon_lex/models/list_test_execution_result_items_request.py` |
| `ListTestExecutionResultItemsRequestDict` | `amazon_lex/models/list_test_execution_result_items_request.py` |
| `ListTestExecutionResultItemsResponse` | `amazon_lex/models/list_test_execution_result_items_response.py` |
| `ListTestExecutionResultItemsErrorBody` | `amazon_lex/errors/list_test_execution_result_items_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testexecutions.list_test_executions

- **Route**: `POST /testexecutions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_test_executions(*, body: ListTestExecutionsRequest | ListTestExecutionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListTestExecutionsResponse`
- **Returns (raw)**: `ApiResult[ListTestExecutionsResponse, ListTestExecutionsErrorBody]`
- **Error**: `ListTestExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTestExecutionsRequest` | `amazon_lex/models/list_test_executions_request.py` |
| `ListTestExecutionsRequestDict` | `amazon_lex/models/list_test_executions_request.py` |
| `ListTestExecutionsResponse` | `amazon_lex/models/list_test_executions_response.py` |
| `ListTestExecutionsErrorBody` | `amazon_lex/errors/list_test_executions_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testexecutions.start_test_execution

- **Route**: `POST /testsets/{testSetId}/testexecutions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_test_execution(test_set_id: str, *, body: StartTestExecutionRequest | StartTestExecutionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `StartTestExecutionResponse`
- **Returns (raw)**: `ApiResult[StartTestExecutionResponse, StartTestExecutionErrorBody]`
- **Error**: `StartTestExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartTestExecutionRequest` | `amazon_lex/models/start_test_execution_request.py` |
| `StartTestExecutionRequestDict` | `amazon_lex/models/start_test_execution_request.py` |
| `StartTestExecutionResponse` | `amazon_lex/models/start_test_execution_response.py` |
| `StartTestExecutionErrorBody` | `amazon_lex/errors/start_test_execution_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

