<!-- Generated file — do not edit; regenerated with the SDK. -->

# Imports — operations

Accessor: `client.imports` · Source: `amazon_lex/apis/imports.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.imports.delete_import

- **Route**: `DELETE /imports/{importId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def delete_import(import_id: str, *, body: DeleteImportRequest | DeleteImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId` · `body` — JSON body
- **Returns (parsed)**: `DeleteImportResponse`
- **Returns (raw)**: `ApiResult[DeleteImportResponse, DeleteImportErrorBody]`
- **Error**: `DeleteImportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `PreconditionFailedException` [412] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteImportRequest` | `amazon_lex/models/delete_import_request.py` |
| `DeleteImportRequestDict` | `amazon_lex/models/delete_import_request.py` |
| `DeleteImportResponse` | `amazon_lex/models/delete_import_response.py` |
| `DeleteImportErrorBody` | `amazon_lex/errors/delete_import_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `PreconditionFailedException` | `amazon_lex/models/precondition_failed_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.imports.describe_import

- **Route**: `GET /imports/{importId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def describe_import(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `DescribeImportResponse`
- **Returns (raw)**: `ApiResult[DescribeImportResponse, DescribeImportErrorBody]`
- **Error**: `DescribeImportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeImportResponse` | `amazon_lex/models/describe_import_response.py` |
| `DescribeImportErrorBody` | `amazon_lex/errors/describe_import_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.imports.list_imports

- **Route**: `POST /imports`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def list_imports(*, body: ListImportsRequest | ListImportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListImportsResponse`
- **Returns (raw)**: `ApiResult[ListImportsResponse, ListImportsErrorBody]`
- **Error**: `ListImportsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListImportsRequest` | `amazon_lex/models/list_imports_request.py` |
| `ListImportsRequestDict` | `amazon_lex/models/list_imports_request.py` |
| `ListImportsResponse` | `amazon_lex/models/list_imports_response.py` |
| `ListImportsErrorBody` | `amazon_lex/errors/list_imports_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

### client.imports.start_import

- **Route**: `PUT /imports`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def start_import(*, body: StartImportRequest | StartImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StartImportResponse`
- **Returns (raw)**: `ApiResult[StartImportResponse, StartImportErrorBody]`
- **Error**: `StartImportErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartImportRequest` | `amazon_lex/models/start_import_request.py` |
| `StartImportRequestDict` | `amazon_lex/models/start_import_request.py` |
| `StartImportResponse` | `amazon_lex/models/start_import_response.py` |
| `StartImportErrorBody` | `amazon_lex/errors/start_import_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_lex/models/service_quota_exceeded_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

