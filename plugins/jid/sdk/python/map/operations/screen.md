<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screen — operations

Accessor: `client.screen` · Source: `jid/apis/screen.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.screen.email_check

- **Route**: `POST /v1/email-check`
- **Signature**: `def email_check(body: V1EmailCheckRequest | V1EmailCheckRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, EmailCheckErrorBody]`
- **Error**: `EmailCheckErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1EmailCheckRequest` | `jid/models/v1_email_check_request.py` |
| `V1EmailCheckRequestDict` | `jid/models/v1_email_check_request.py` |
| `EmailCheckErrorBody` | `jid/errors/email_check_error.py` |
| `Error` | `jid/models/error.py` |

### client.screen.screen

- **Route**: `POST /v1/screen`
- **Signature**: `def screen(body: V1ScreenRequest | V1ScreenRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ScreenResult`
- **Returns (raw)**: `ApiResult[ScreenResult, ScreenErrorBody]`
- **Error**: `ScreenErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ScreenRequest` | `jid/models/v1_screen_request.py` |
| `V1ScreenRequestDict` | `jid/models/v1_screen_request.py` |
| `ScreenResult` | `jid/models/screen_result.py` |
| `ScreenErrorBody` | `jid/errors/screen_error.py` |
| `Error` | `jid/models/error.py` |

### client.screen.screen_get

- **Route**: `GET /v1/screen`
- **Signature**: `def screen_get(*, domain: str | None = None, url: str | None = None, email: str | None = None, phone: str | None = None, company_name: str | None = None, name: str | None = None, context: str | None = None, policy: str | None = None, amount: float | None = None, country: str | None = None, ip_country: str | None = None, ip_region: str | None = None, ip_asn: str | None = None, browser_timezone: str | None = None, stated_country: str | None = None, signal: str | None = None, site: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `domain` — query · `url` — query · `email` — query · `phone` — query · `company_name` — query · `name` — query · `context` — query · `policy` — query · `amount` — query · `country` — query · `ip_country` — query · `ip_region` — query · `ip_asn` — query · `browser_timezone` — query · `stated_country` — query · `signal` — query · `site` — query
- **Returns (parsed)**: `ScreenResult`
- **Returns (raw)**: `ApiResult[ScreenResult, ScreenGetErrorBody]`
- **Error**: `ScreenGetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScreenResult` | `jid/models/screen_result.py` |
| `ScreenGetErrorBody` | `jid/errors/screen_get_error.py` |
| `Error` | `jid/models/error.py` |

