<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsetdiscrepancy — operations

Accessor: `client.testsetdiscrepancy` · Source: `amazon_lex/apis/testsetdiscrepancy.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.testsetdiscrepancy.create_test_set_discrepancy_report

- **Route**: `POST /testsets/{testSetId}/testsetdiscrepancy`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_test_set_discrepancy_report(test_set_id: str, *, body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_id`
- **Params**: `test_set_id` — path `testSetId` · `body` — JSON body
- **Returns (parsed)**: `CreateTestSetDiscrepancyReportResponse`
- **Returns (raw)**: `ApiResult[CreateTestSetDiscrepancyReportResponse, CreateTestSetDiscrepancyReportErrorBody]`
- **Error**: `CreateTestSetDiscrepancyReportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTestSetDiscrepancyReportRequest` | `amazon_lex/models/create_test_set_discrepancy_report_request.py` |
| `CreateTestSetDiscrepancyReportRequestDict` | `amazon_lex/models/create_test_set_discrepancy_report_request.py` |
| `CreateTestSetDiscrepancyReportResponse` | `amazon_lex/models/create_test_set_discrepancy_report_response.py` |
| `CreateTestSetDiscrepancyReportErrorBody` | `amazon_lex/errors/create_test_set_discrepancy_report_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsetdiscrepancy.describe_test_set_discrepancy_report

- **Route**: `GET /testsetdiscrepancy/{testSetDiscrepancyReportId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_test_set_discrepancy_report(test_set_discrepancy_report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_discrepancy_report_id`
- **Params**: `test_set_discrepancy_report_id` — path `testSetDiscrepancyReportId`
- **Returns (parsed)**: `DescribeTestSetDiscrepancyReportResponse`
- **Returns (raw)**: `ApiResult[DescribeTestSetDiscrepancyReportResponse, DescribeTestSetDiscrepancyReportErrorBody]`
- **Error**: `DescribeTestSetDiscrepancyReportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeTestSetDiscrepancyReportResponse` | `amazon_lex/models/describe_test_set_discrepancy_report_response.py` |
| `DescribeTestSetDiscrepancyReportErrorBody` | `amazon_lex/errors/describe_test_set_discrepancy_report_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

