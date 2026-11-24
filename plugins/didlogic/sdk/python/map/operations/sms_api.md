<!-- Generated file — do not edit; regenerated with the SDK. -->

# SmsApi — operations

Accessor: `client.sms_api` · Source: `did_logic/apis/sms_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sms_api.sms_create

- **Route**: `POST /api/v1/sms`
- **Auth**: `bearer_auth`
- **Signature**: `def sms_create(body: ApiV1SmsRequest | ApiV1SmsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SmsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1SmsResponse1, SmsCreateErrorBody]`
- **Error**: `SmsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `ApiV1Sms403Error1` [403] · `ApiV1SmsResponse21` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SmsRequest` | `did_logic/models/api_v1_sms_request.py` |
| `ApiV1SmsRequestDict` | `did_logic/models/api_v1_sms_request.py` |
| `ApiV1SmsResponse1` | `did_logic/models/api_v1_sms_response1.py` |
| `SmsCreateErrorBody` | `did_logic/errors/sms_create_error.py` |
| `Error` | `did_logic/models/error.py` |
| `ApiV1Sms403Error1` | `did_logic/models/api_v1_sms403_error1.py` |
| `ApiV1SmsResponse21` | `did_logic/models/unions/api_v1_sms_response21.py` |

### client.sms_api.sms_index

- **Route**: `GET /api/v1/sms`
- **Auth**: `bearer_auth`
- **Signature**: `def sms_index(*, page: str | None = "1", per_page: str | None = "20", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV1SmsResponse`
- **Returns (raw)**: `ApiResult[ApiV1SmsResponse, SmsIndexErrorBody]`
- **Error**: `SmsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Sms403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SmsResponse` | `did_logic/models/api_v1_sms_response.py` |
| `SmsIndexErrorBody` | `did_logic/errors/sms_index_error.py` |
| `ApiV1Sms403Error1` | `did_logic/models/api_v1_sms403_error1.py` |

### client.sms_api.sms_show

- **Route**: `GET /api/v1/sms/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def sms_show(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1SmsResponse3`
- **Returns (raw)**: `ApiResult[ApiV1SmsResponse3, SmsShowErrorBody]`
- **Error**: `SmsShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Sms403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SmsResponse3` | `did_logic/models/api_v1_sms_response3.py` |
| `SmsShowErrorBody` | `did_logic/errors/sms_show_error.py` |
| `ApiV1Sms403Error1` | `did_logic/models/api_v1_sms403_error1.py` |
| `Error` | `did_logic/models/error.py` |

