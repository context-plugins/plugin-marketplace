<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `zero_bounce/client.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.validate

- **Route**: `POST /api/validation/chatgpt-single-email-validation/`
- **Signature**: `def validate(body: ValidateEmailRequest | ValidateEmailRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ValidateEmailResponse`
- **Returns (raw)**: `ApiResult[ValidateEmailResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ValidateEmailRequest` | `zero_bounce/models/validate_email_request.py` |
| `ValidateEmailRequestDict` | `zero_bounce/models/validate_email_request.py` |
| `ValidateEmailResponse` | `zero_bounce/models/validate_email_response.py` |

### client.validate_batch

- **Route**: `POST /api/validation/chatgpt-batch-validation/`
- **Signature**: `def validate_batch(body: ValidateBatchRequest | ValidateBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[ValidateEmailResponse]`
- **Returns (raw)**: `ApiResult[list[ValidateEmailResponse], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ValidateBatchRequest` | `zero_bounce/models/validate_batch_request.py` |
| `ValidateBatchRequestDict` | `zero_bounce/models/validate_batch_request.py` |
| `ValidateEmailResponse` | `zero_bounce/models/validate_email_response.py` |

