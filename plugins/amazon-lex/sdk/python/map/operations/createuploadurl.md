<!-- Generated file — do not edit; regenerated with the SDK. -->

# Createuploadurl — operations

Accessor: `client.createuploadurl` · Source: `amazon_lex/apis/createuploadurl.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.createuploadurl.create_upload_url

- **Route**: `POST /createuploadurl`
- **Auth**: `sigv4`
- **Server**: `default_amazon_lex_model_building_v2_bots_api`
- **Signature**: `def create_upload_url(*, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateUploadUrlResponse`
- **Returns (raw)**: `ApiResult[CreateUploadUrlResponse, CreateUploadUrlErrorBody]`
- **Error**: `CreateUploadUrlErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateUploadUrlResponse` | `amazon_lex/models/create_upload_url_response.py` |
| `CreateUploadUrlErrorBody` | `amazon_lex/errors/create_upload_url_error.py` |
| `ValidationException` | `amazon_lex/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_lex/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_lex/models/throttling_exception.py` |
| `InternalServerException` | `amazon_lex/models/internal_server_exception.py` |

