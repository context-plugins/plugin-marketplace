<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signups — operations

Accessor: `client.signups` · Source: `hightouch/apis/signups.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signups.create_signup

- **Route**: `POST /signups`
- **Auth**: `bearer_auth`
- **Signature**: `def create_signup(body: CreateSignupRequest | CreateSignupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SignupsResponse`
- **Returns (raw)**: `ApiResult[SignupsResponse, CreateSignupErrorBody]`
- **Error**: `CreateSignupErrorBody` — **Case A (typed)**
- **Error arms**: `SignupErrorResponse` [400, 404, 409, 502] · `SignupsResponse1` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSignupRequest` | `hightouch/models/create_signup_request.py` |
| `CreateSignupRequestDict` | `hightouch/models/create_signup_request.py` |
| `SignupsResponse` | `hightouch/models/unions/signups_response.py` |
| `CreateSignupErrorBody` | `hightouch/errors/create_signup_error.py` |
| `SignupErrorResponse` | `hightouch/models/signup_error_response.py` |
| `SignupsResponse1` | `hightouch/models/unions/signups_response1.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

