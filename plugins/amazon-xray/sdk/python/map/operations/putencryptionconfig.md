<!-- Generated file — do not edit; regenerated with the SDK. -->

# Putencryptionconfig — operations

Accessor: `client.putencryptionconfig` · Source: `aws_x_ray/apis/putencryptionconfig.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.putencryptionconfig.put_encryption_config

- **Route**: `POST /PutEncryptionConfig`
- **Auth**: `sigv4`
- **Signature**: `def put_encryption_config(*, body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PutEncryptionConfigResult`
- **Returns (raw)**: `ApiResult[PutEncryptionConfigResult, PutEncryptionConfigErrorBody]`
- **Error**: `PutEncryptionConfigErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutEncryptionConfigRequest` | `aws_x_ray/models/put_encryption_config_request.py` |
| `PutEncryptionConfigRequestDict` | `aws_x_ray/models/put_encryption_config_request.py` |
| `PutEncryptionConfigResult` | `aws_x_ray/models/put_encryption_config_result.py` |
| `PutEncryptionConfigErrorBody` | `aws_x_ray/errors/put_encryption_config_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

