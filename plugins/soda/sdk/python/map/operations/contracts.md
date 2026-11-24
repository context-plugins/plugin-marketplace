<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contracts — operations

Accessor: `client.contracts` · Source: `soda/apis/contracts.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contracts.get_api_v1_contracts

- **Route**: `GET /api/v1/contracts`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_contracts(*, dataset_id: str | None = None, dataset_qualified_name: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `dataset_id` — query `datasetId` · `dataset_qualified_name` — query `datasetQualifiedName` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListContractsResponse`
- **Returns (raw)**: `ApiResult[PublicApiListContractsResponse, GetApiV1ContractsErrorBody]`
- **Error**: `GetApiV1ContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListContractsResponse` | `soda/models/public_api_list_contracts_response.py` |
| `GetApiV1ContractsErrorBody` | `soda/errors/get_api_v1_contracts_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.get_api_v1_contracts_actions_create_skeleton_operation_id

- **Route**: `GET /api/v1/contracts/actions/createSkeleton/{operationId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_contracts_actions_create_skeleton_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operation_id`
- **Params**: `operation_id` — path `operationId`
- **Returns (parsed)**: `PublicApiCreateSkeletonContractStatusResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateSkeletonContractStatusResponse, GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody]`
- **Error**: `GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateSkeletonContractStatusResponse` | `soda/models/public_api_create_skeleton_contract_status_response.py` |
| `GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody` | `soda/errors/get_api_v1_contracts_actions_create_skeleton_operation_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.get_api_v1_contracts_actions_generate_operation_id

- **Route**: `GET /api/v1/contracts/actions/generate/{operationId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_contracts_actions_generate_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operation_id`
- **Params**: `operation_id` — path `operationId`
- **Returns (parsed)**: `PublicApiGenerateContractStatusResponse`
- **Returns (raw)**: `ApiResult[PublicApiGenerateContractStatusResponse, GetApiV1ContractsActionsGenerateOperationIdErrorBody]`
- **Error**: `GetApiV1ContractsActionsGenerateOperationIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGenerateContractStatusResponse` | `soda/models/public_api_generate_contract_status_response.py` |
| `GetApiV1ContractsActionsGenerateOperationIdErrorBody` | `soda/errors/get_api_v1_contracts_actions_generate_operation_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.get_api_v1_contracts_contract_id

- **Route**: `GET /api/v1/contracts/{contractId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_contracts_contract_id(contract_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contract_id`
- **Params**: `contract_id` — path `contractId`
- **Returns (parsed)**: `PublicApiGetContractResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetContractResponse, GetApiV1ContractsContractIdErrorBody]`
- **Error**: `GetApiV1ContractsContractIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGetContractResponse` | `soda/models/public_api_get_contract_response.py` |
| `GetApiV1ContractsContractIdErrorBody` | `soda/errors/get_api_v1_contracts_contract_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.get_api_v1_contracts_contract_id_versions

- **Route**: `GET /api/v1/contracts/{contractId}/versions`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_contracts_contract_id_versions(contract_id: str, *, created_before: RFC3339DateTime | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contract_id`
- **Params**: `contract_id` — path `contractId` · `created_before` — query `createdBefore` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListContractVersionsResponse`
- **Returns (raw)**: `ApiResult[PublicApiListContractVersionsResponse, GetApiV1ContractsContractIdVersionsErrorBody]`
- **Error**: `GetApiV1ContractsContractIdVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListContractVersionsResponse` | `soda/models/public_api_list_contract_versions_response.py` |
| `GetApiV1ContractsContractIdVersionsErrorBody` | `soda/errors/get_api_v1_contracts_contract_id_versions_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.post_api_v1_contracts

- **Route**: `POST /api/v1/contracts`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_contracts(body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiGetContractResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetContractResponse, PostApiV1ContractsErrorBody]`
- **Error**: `PostApiV1ContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateContractRequestDto` | `soda/models/public_api_create_contract_request_dto.py` |
| `PublicApiCreateContractRequestDtoDict` | `soda/models/public_api_create_contract_request_dto.py` |
| `PublicApiGetContractResponse` | `soda/models/public_api_get_contract_response.py` |
| `PostApiV1ContractsErrorBody` | `soda/errors/post_api_v1_contracts_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.post_api_v1_contracts_actions_create_skeleton

- **Route**: `POST /api/v1/contracts/actions/createSkeleton`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_contracts_actions_create_skeleton(body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1ContractsActionsCreateSkeletonErrorBody]`
- **Error**: `PostApiV1ContractsActionsCreateSkeletonErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateSkeletonContractRequestDto` | `soda/models/public_api_create_skeleton_contract_request_dto.py` |
| `PublicApiCreateSkeletonContractRequestDtoDict` | `soda/models/public_api_create_skeleton_contract_request_dto.py` |
| `PostApiV1ContractsActionsCreateSkeletonErrorBody` | `soda/errors/post_api_v1_contracts_actions_create_skeleton_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.post_api_v1_contracts_actions_generate

- **Route**: `POST /api/v1/contracts/actions/generate`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_contracts_actions_generate(body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1ContractsActionsGenerateErrorBody]`
- **Error**: `PostApiV1ContractsActionsGenerateErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGenerateContractRequestDto` | `soda/models/public_api_generate_contract_request_dto.py` |
| `PublicApiGenerateContractRequestDtoDict` | `soda/models/public_api_generate_contract_request_dto.py` |
| `PostApiV1ContractsActionsGenerateErrorBody` | `soda/errors/post_api_v1_contracts_actions_generate_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.post_api_v1_contracts_contract_id

- **Route**: `POST /api/v1/contracts/{contractId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_contracts_contract_id(contract_id: str, body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contract_id`, `body`
- **Params**: `contract_id` — path `contractId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiGetContractResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetContractResponse, PostApiV1ContractsContractIdErrorBody]`
- **Error**: `PostApiV1ContractsContractIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiPublishContractRequestDto` | `soda/models/public_api_publish_contract_request_dto.py` |
| `PublicApiPublishContractRequestDtoDict` | `soda/models/public_api_publish_contract_request_dto.py` |
| `PublicApiGetContractResponse` | `soda/models/public_api_get_contract_response.py` |
| `PostApiV1ContractsContractIdErrorBody` | `soda/errors/post_api_v1_contracts_contract_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.contracts.post_api_v1_contracts_contract_id_verify

- **Route**: `POST /api/v1/contracts/{contractId}/verify`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_contracts_contract_id_verify(contract_id: str, body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contract_id`, `body`
- **Params**: `contract_id` — path `contractId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1ContractsContractIdVerifyErrorBody]`
- **Error**: `PostApiV1ContractsContractIdVerifyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiVerifyContractRequestDto` | `soda/models/public_api_verify_contract_request_dto.py` |
| `PublicApiVerifyContractRequestDtoDict` | `soda/models/public_api_verify_contract_request_dto.py` |
| `PostApiV1ContractsContractIdVerifyErrorBody` | `soda/errors/post_api_v1_contracts_contract_id_verify_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

