<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bootstrap — operations

Accessor: `client.bootstrap` · Source: `statable/apis/bootstrap.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bootstrap.bootstrap_send_otp

- **Route**: `POST /auth/send-otp`
- **Signature**: `def bootstrap_send_otp(body: BootstrapSendOtpRequest | BootstrapSendOtpRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BootstrapSendOtpResponse`
- **Returns (raw)**: `ApiResult[BootstrapSendOtpResponse, BootstrapSendOtpErrorBody]`
- **Error**: `BootstrapSendOtpErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BootstrapSendOtpRequest` | `statable/models/bootstrap_send_otp_request.py` |
| `BootstrapSendOtpRequestDict` | `statable/models/bootstrap_send_otp_request.py` |
| `BootstrapSendOtpResponse` | `statable/models/bootstrap_send_otp_response.py` |
| `BootstrapSendOtpErrorBody` | `statable/errors/bootstrap_send_otp_error.py` |
| `Error` | `statable/models/error.py` |

### client.bootstrap.bootstrap_verify_otp

- **Route**: `POST /auth/verify-otp`
- **Signature**: `def bootstrap_verify_otp(body: BootstrapVerifyOtpRequest | BootstrapVerifyOtpRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BootstrapVerifyOtpResponse`
- **Returns (raw)**: `ApiResult[BootstrapVerifyOtpResponse, BootstrapVerifyOtpErrorBody]`
- **Error**: `BootstrapVerifyOtpErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BootstrapVerifyOtpRequest` | `statable/models/bootstrap_verify_otp_request.py` |
| `BootstrapVerifyOtpRequestDict` | `statable/models/bootstrap_verify_otp_request.py` |
| `BootstrapVerifyOtpResponse` | `statable/models/bootstrap_verify_otp_response.py` |
| `BootstrapVerifyOtpErrorBody` | `statable/errors/bootstrap_verify_otp_error.py` |
| `Error` | `statable/models/error.py` |

