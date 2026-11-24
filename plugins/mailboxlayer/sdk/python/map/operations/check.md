<!-- Generated file — do not edit; regenerated with the SDK. -->

# Check — operations

Accessor: `client.check` · Source: `mailboxlayer/apis/check.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.check.check_email

- **Route**: `GET /check`
- **Auth**: `access_key_query`
- **Signature**: `def check_email(access_key: str, email: EmailStr, *, smtp: SmtpOrInt | None = None, catch_all: CatchAllOrInt | None = None, format_: FormatOrInt | None = None, callback: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `access_key`, `email`
- **Params**: `access_key` — query · `email` — query · `smtp` — query · `catch_all` — query · `format_` — query `format` · `callback` — query
- **Returns (parsed)**: `CheckResponse`
- **Returns (raw)**: `ApiResult[CheckResponse, CheckEmailErrorBody]`
- **Error**: `CheckEmailErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 403, 404, 429, 500, 503] · `RequestValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SmtpOrInt` | `mailboxlayer/models/enums/smtp.py` |
| `CatchAllOrInt` | `mailboxlayer/models/enums/catch_all.py` |
| `FormatOrInt` | `mailboxlayer/models/enums/format.py` |
| `CheckResponse` | `mailboxlayer/models/unions/check_response.py` |
| `CheckEmailErrorBody` | `mailboxlayer/errors/check_email_error.py` |
| `ApiErrorModel` | `mailboxlayer/models/api_error_model.py` |
| `RequestValidationError` | `mailboxlayer/models/request_validation_error.py` |

