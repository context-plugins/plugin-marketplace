<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkCheck — operations

Accessor: `client.bulk_check` · Source: `mailboxlayer/apis/bulk_check.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk_check.bulk_check_emails

- **Route**: `GET /bulk_check`
- **Auth**: `access_key_query`
- **Signature**: `def bulk_check_emails(access_key: str, emails: str, *, smtp: SmtpOrInt | None = None, catch_all: CatchAllOrInt | None = None, format_: FormatOrInt | None = None, callback: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `access_key`, `emails`
- **Params**: `access_key` — query · `emails` — query · `smtp` — query · `catch_all` — query · `format_` — query `format` · `callback` — query
- **Returns (parsed)**: `BulkCheckResponse`
- **Returns (raw)**: `ApiResult[BulkCheckResponse, BulkCheckEmailsErrorBody]`
- **Error**: `BulkCheckEmailsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 403, 404, 429, 500, 503] · `RequestValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SmtpOrInt` | `mailboxlayer/models/enums/smtp.py` |
| `CatchAllOrInt` | `mailboxlayer/models/enums/catch_all.py` |
| `FormatOrInt` | `mailboxlayer/models/enums/format.py` |
| `BulkCheckResponse` | `mailboxlayer/models/unions/bulk_check_response.py` |
| `BulkCheckEmailsErrorBody` | `mailboxlayer/errors/bulk_check_emails_error.py` |
| `ApiErrorModel` | `mailboxlayer/models/api_error_model.py` |
| `RequestValidationError` | `mailboxlayer/models/request_validation_error.py` |

