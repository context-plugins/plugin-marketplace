<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.exports` · Source: `amazon_lex/apis/exports.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.exports.create_export

- **Route**: `PUT /exports`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_exports_api`
- **Signature**: `def create_export(*, body: CreateExportRequest | CreateExportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateExportResponse`
- **Returns (raw)**: `ApiResult[CreateExportResponse, CreateExportErrorBody]`
- **Error**: `CreateExportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateExportRequest` | `amazon_lex/models/create_export_request.py` |
| `CreateExportRequestDict` | `amazon_lex/models/create_export_request.py` |
| `CreateExportResponse` | `amazon_lex/models/create_export_response.py` |
| `CreateExportErrorBody` | `amazon_lex/errors/create_export_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.exports.delete_export

- **Route**: `DELETE /exports/{exportId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_exports_api`
- **Signature**: `def delete_export(export_id: str, *, body: DeleteExportRequest | DeleteExportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `export_id`
- **Params**: `export_id` — path `exportId` · `body` — JSON body
- **Returns (parsed)**: `DeleteExportResponse`
- **Returns (raw)**: `ApiResult[DeleteExportResponse, DeleteExportErrorBody]`
- **Error**: `DeleteExportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteExportRequest` | `amazon_lex/models/delete_export_request.py` |
| `DeleteExportRequestDict` | `amazon_lex/models/delete_export_request.py` |
| `DeleteExportResponse` | `amazon_lex/models/delete_export_response.py` |
| `DeleteExportErrorBody` | `amazon_lex/errors/delete_export_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.exports.describe_export

- **Route**: `GET /exports/{exportId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_exports_api`
- **Signature**: `def describe_export(export_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `export_id`
- **Params**: `export_id` — path `exportId`
- **Returns (parsed)**: `DescribeExportResponse`
- **Returns (raw)**: `ApiResult[DescribeExportResponse, DescribeExportErrorBody]`
- **Error**: `DescribeExportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeExportResponse` | `amazon_lex/models/describe_export_response.py` |
| `DescribeExportErrorBody` | `amazon_lex/errors/describe_export_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.exports.get_export

- **Route**: `GET /exports`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_exports_api`
- **Signature**: `def get_export(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetExportResponse`
- **Returns (raw)**: `ApiResult[GetExportResponse, GetExportErrorBody]`
- **Error**: `GetExportErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetExportResponse` | `amazon_lex/models/get_export_response.py` |
| `GetExportErrorBody` | `amazon_lex/errors/get_export_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.exports.list_exports

- **Route**: `POST /exports`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_exports_api`
- **Signature**: `def list_exports(*, body: ListExportsRequest | ListExportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListExportsResponse`
- **Returns (raw)**: `ApiResult[ListExportsResponse, ListExportsErrorBody]`
- **Error**: `ListExportsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListExportsRequest` | `amazon_lex/models/list_exports_request.py` |
| `ListExportsRequestDict` | `amazon_lex/models/list_exports_request.py` |
| `ListExportsResponse` | `amazon_lex/models/list_exports_response.py` |
| `ListExportsErrorBody` | `amazon_lex/errors/list_exports_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.exports.update_export

- **Route**: `PUT /exports/{exportId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_exports_api`
- **Signature**: `def update_export(export_id: str, *, body: UpdateExportRequest | UpdateExportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `export_id`
- **Params**: `export_id` — path `exportId` · `body` — JSON body
- **Returns (parsed)**: `UpdateExportResponse`
- **Returns (raw)**: `ApiResult[UpdateExportResponse, UpdateExportErrorBody]`
- **Error**: `UpdateExportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateExportRequest` | `amazon_lex/models/update_export_request.py` |
| `UpdateExportRequestDict` | `amazon_lex/models/update_export_request.py` |
| `UpdateExportResponse` | `amazon_lex/models/update_export_response.py` |
| `UpdateExportErrorBody` | `amazon_lex/errors/update_export_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

