<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policy — operations

Accessor: `client.policy` · Source: `amazon_lex/apis/policy.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.policy.create_resource_policy

- **Route**: `POST /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_resource_policy(resource_arn: str, *, body: CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `CreateResourcePolicyResponse`
- **Returns (raw)**: `ApiResult[CreateResourcePolicyResponse, CreateResourcePolicyErrorBody]`
- **Error**: `CreateResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateResourcePolicyRequest` | `amazon_lex/models/create_resource_policy_request.py` |
| `CreateResourcePolicyRequestDict` | `amazon_lex/models/create_resource_policy_request.py` |
| `CreateResourcePolicyResponse` | `amazon_lex/models/create_resource_policy_response.py` |
| `CreateResourcePolicyErrorBody` | `amazon_lex/errors/create_resource_policy_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.policy.create_resource_policy_statement

- **Route**: `POST /policy/{resourceArn}/statements`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_resource_policy_statement(resource_arn: str, *, body: CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `CreateResourcePolicyStatementResponse`
- **Returns (raw)**: `ApiResult[CreateResourcePolicyStatementResponse, CreateResourcePolicyStatementErrorBody]`
- **Error**: `CreateResourcePolicyStatementErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateResourcePolicyStatementRequest` | `amazon_lex/models/create_resource_policy_statement_request.py` |
| `CreateResourcePolicyStatementRequestDict` | `amazon_lex/models/create_resource_policy_statement_request.py` |
| `CreateResourcePolicyStatementResponse` | `amazon_lex/models/create_resource_policy_statement_response.py` |
| `CreateResourcePolicyStatementErrorBody` | `amazon_lex/errors/create_resource_policy_statement_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.policy.delete_resource_policy

- **Route**: `DELETE /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_resource_policy(resource_arn: str, *, body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `DeleteResourcePolicyResponse`
- **Returns (raw)**: `ApiResult[DeleteResourcePolicyResponse, DeleteResourcePolicyErrorBody]`
- **Error**: `DeleteResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ResourceNotFoundException` [404] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyRequest` | `amazon_lex/models/delete_resource_policy_request.py` |
| `DeleteResourcePolicyRequestDict` | `amazon_lex/models/delete_resource_policy_request.py` |
| `DeleteResourcePolicyResponse` | `amazon_lex/models/delete_resource_policy_response.py` |
| `DeleteResourcePolicyErrorBody` | `amazon_lex/errors/delete_resource_policy_error.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.policy.delete_resource_policy_statement

- **Route**: `DELETE /policy/{resourceArn}/statements/{statementId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_resource_policy_statement(resource_arn: str, statement_id: str, *, body: DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`, `statement_id`
- **Params**: `resource_arn` — path `resourceArn` · `statement_id` — path `statementId` · `body` — JSON body
- **Returns (parsed)**: `DeleteResourcePolicyStatementResponse`
- **Returns (raw)**: `ApiResult[DeleteResourcePolicyStatementResponse, DeleteResourcePolicyStatementErrorBody]`
- **Error**: `DeleteResourcePolicyStatementErrorBody` — **Case A (typed)**
- **Error arms**: `ResourceNotFoundException` [404] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyStatementRequest` | `amazon_lex/models/delete_resource_policy_statement_request.py` |
| `DeleteResourcePolicyStatementRequestDict` | `amazon_lex/models/delete_resource_policy_statement_request.py` |
| `DeleteResourcePolicyStatementResponse` | `amazon_lex/models/delete_resource_policy_statement_response.py` |
| `DeleteResourcePolicyStatementErrorBody` | `amazon_lex/errors/delete_resource_policy_statement_error.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.policy.describe_resource_policy

- **Route**: `GET /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_resource_policy(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn`
- **Returns (parsed)**: `DescribeResourcePolicyResponse`
- **Returns (raw)**: `ApiResult[DescribeResourcePolicyResponse, DescribeResourcePolicyErrorBody]`
- **Error**: `DescribeResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeResourcePolicyResponse` | `amazon_lex/models/describe_resource_policy_response.py` |
| `DescribeResourcePolicyErrorBody` | `amazon_lex/errors/describe_resource_policy_error.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.policy.update_resource_policy

- **Route**: `PUT /policy/{resourceArn}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def update_resource_policy(resource_arn: str, *, body: UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_arn`
- **Params**: `resource_arn` — path `resourceArn` · `body` — JSON body
- **Returns (parsed)**: `UpdateResourcePolicyResponse`
- **Returns (raw)**: `ApiResult[UpdateResourcePolicyResponse, UpdateResourcePolicyErrorBody]`
- **Error**: `UpdateResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateResourcePolicyRequest` | `amazon_lex/models/update_resource_policy_request.py` |
| `UpdateResourcePolicyRequestDict` | `amazon_lex/models/update_resource_policy_request.py` |
| `UpdateResourcePolicyResponse` | `amazon_lex/models/update_resource_policy_response.py` |
| `UpdateResourcePolicyErrorBody` | `amazon_lex/errors/update_resource_policy_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

