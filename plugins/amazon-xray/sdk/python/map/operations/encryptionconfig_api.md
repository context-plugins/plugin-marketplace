<!-- Generated file — do not edit; regenerated with the SDK. -->

# EncryptionconfigApi — operations

Accessor: `client.encryptionconfig_api` · Source: `aws_x_ray/apis/encryptionconfig_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.encryptionconfig_api.get_encryption_config

- **Route**: `POST /EncryptionConfig`
- **Auth**: `sigv4`
- **Signature**: `def get_encryption_config(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetEncryptionConfigResult`
- **Returns (raw)**: `ApiResult[GetEncryptionConfigResult, GetEncryptionConfigErrorBody]`
- **Error**: `GetEncryptionConfigErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetEncryptionConfigResult` | `aws_x_ray/models/get_encryption_config_result.py` |
| `GetEncryptionConfigErrorBody` | `aws_x_ray/errors/get_encryption_config_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

