<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsets — operations

Accessor: `client.testsets` · Source: `amazon_lex/apis/testsets.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.testsets.create_test_set_discrepancy_report2

- **Route**: `POST /testsets/{testSetId}/testsetdiscrepancy`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_test_set_discrepancy_report2(test_set_id: str, *, body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `CreateTestSetDiscrepancyReportResponse`
- **Returns (raw)**: `ApiResult[CreateTestSetDiscrepancyReportResponse, CreateTestSetDiscrepancyReport2ErrorBody]`
- **Error**: `CreateTestSetDiscrepancyReport2ErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTestSetDiscrepancyReportRequest` | `amazon_lex/models/create_test_set_discrepancy_report_request.py` |
| `CreateTestSetDiscrepancyReportRequestDict` | `amazon_lex/models/create_test_set_discrepancy_report_request.py` |
| `CreateTestSetDiscrepancyReportResponse` | `amazon_lex/models/create_test_set_discrepancy_report_response.py` |
| `CreateTestSetDiscrepancyReport2ErrorBody` | `amazon_lex/errors/create_test_set_discrepancy_report2_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsets.delete_test_set

- **Route**: `DELETE /testsets/{testSetId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_test_set(test_set_id: str, *, body: DeleteTestSetRequest | DeleteTestSetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteTestSetErrorBody]`
- **Error**: `DeleteTestSetErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteTestSetRequest` | `amazon_lex/models/delete_test_set_request.py` |
| `DeleteTestSetRequestDict` | `amazon_lex/models/delete_test_set_request.py` |
| `DeleteTestSetErrorBody` | `amazon_lex/errors/delete_test_set_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsets.describe_test_set

- **Route**: `GET /testsets/{testSetId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_test_set(test_set_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId`
- **Returns (parsed)**: `DescribeTestSetResponse`
- **Returns (raw)**: `ApiResult[DescribeTestSetResponse, DescribeTestSetErrorBody]`
- **Error**: `DescribeTestSetErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeTestSetResponse` | `amazon_lex/models/describe_test_set_response.py` |
| `DescribeTestSetErrorBody` | `amazon_lex/errors/describe_test_set_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsets.list_test_set_records

- **Route**: `POST /testsets/{testSetId}/records`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_test_set_records(test_set_id: str, *, body: ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `ListTestSetRecordsResponse`
- **Returns (raw)**: `ApiResult[ListTestSetRecordsResponse, ListTestSetRecordsErrorBody]`
- **Error**: `ListTestSetRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTestSetRecordsRequest` | `amazon_lex/models/list_test_set_records_request.py` |
| `ListTestSetRecordsRequestDict` | `amazon_lex/models/list_test_set_records_request.py` |
| `ListTestSetRecordsResponse` | `amazon_lex/models/list_test_set_records_response.py` |
| `ListTestSetRecordsErrorBody` | `amazon_lex/errors/list_test_set_records_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsets.list_test_sets

- **Route**: `POST /testsets`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_test_sets(*, body: ListTestSetsRequest | ListTestSetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListTestSetsResponse`
- **Returns (raw)**: `ApiResult[ListTestSetsResponse, ListTestSetsErrorBody]`
- **Error**: `ListTestSetsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTestSetsRequest` | `amazon_lex/models/list_test_sets_request.py` |
| `ListTestSetsRequestDict` | `amazon_lex/models/list_test_sets_request.py` |
| `ListTestSetsResponse` | `amazon_lex/models/list_test_sets_response.py` |
| `ListTestSetsErrorBody` | `amazon_lex/errors/list_test_sets_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsets.start_test_execution2

- **Route**: `POST /testsets/{testSetId}/testexecutions`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_test_execution2(test_set_id: str, *, body: StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi`
- **Returns (raw)**: `ApiResult[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi, StartTestExecution2ErrorBody]`
- **Error**: `StartTestExecution2ErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi` | `amazon_lex/models/start_test_execution_request_amazon_lex_model_building_v2_testsets_api.py` |
| `StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict` | `amazon_lex/models/start_test_execution_request_amazon_lex_model_building_v2_testsets_api.py` |
| `StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi` | `amazon_lex/models/start_test_execution_response_amazon_lex_model_building_v2_testsets_api.py` |
| `StartTestExecution2ErrorBody` | `amazon_lex/errors/start_test_execution2_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsets.update_test_set

- **Route**: `PUT /testsets/{testSetId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_test_set(test_set_id: str, *, body: UpdateTestSetRequest | UpdateTestSetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `UpdateTestSetResponse`
- **Returns (raw)**: `ApiResult[UpdateTestSetResponse, UpdateTestSetErrorBody]`
- **Error**: `UpdateTestSetErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTestSetRequest` | `amazon_lex/models/update_test_set_request.py` |
| `UpdateTestSetRequestDict` | `amazon_lex/models/update_test_set_request.py` |
| `UpdateTestSetResponse` | `amazon_lex/models/update_test_set_response.py` |
| `UpdateTestSetErrorBody` | `amazon_lex/errors/update_test_set_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

