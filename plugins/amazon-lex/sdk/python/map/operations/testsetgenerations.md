<!-- Generated file — do not edit; regenerated with the SDK. -->

# Testsetgenerations — operations

Accessor: `client.testsetgenerations` · Source: `amazon_lex/apis/testsetgenerations.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.testsetgenerations.describe_test_set_generation

- **Route**: `GET /testsetgenerations/{testSetGenerationId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_test_set_generation(test_set_generation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `test_set_generation_id`
- **Params**: `test_set_generation_id` — path `testSetGenerationId`
- **Returns (parsed)**: `DescribeTestSetGenerationResponse`
- **Returns (raw)**: `ApiResult[DescribeTestSetGenerationResponse, DescribeTestSetGenerationErrorBody]`
- **Error**: `DescribeTestSetGenerationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeTestSetGenerationResponse` | `amazon_lex/models/describe_test_set_generation_response.py` |
| `DescribeTestSetGenerationErrorBody` | `amazon_lex/errors/describe_test_set_generation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.testsetgenerations.start_test_set_generation

- **Route**: `PUT /testsetgenerations`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_test_set_generation(*, body: StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StartTestSetGenerationResponse`
- **Returns (raw)**: `ApiResult[StartTestSetGenerationResponse, StartTestSetGenerationErrorBody]`
- **Error**: `StartTestSetGenerationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartTestSetGenerationRequest` | `amazon_lex/models/start_test_set_generation_request.py` |
| `StartTestSetGenerationRequestDict` | `amazon_lex/models/start_test_set_generation_request.py` |
| `StartTestSetGenerationResponse` | `amazon_lex/models/start_test_set_generation_response.py` |
| `StartTestSetGenerationErrorBody` | `amazon_lex/errors/start_test_set_generation_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

