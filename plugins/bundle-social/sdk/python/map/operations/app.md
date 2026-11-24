<!-- Generated file — do not edit; regenerated with the SDK. -->

# App — operations

Accessor: `client.app` · Source: `bundle_social/apis/app.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.app.app_get_health

- **Route**: `GET /api/v1/`
- **Auth**: `api_key_auth`
- **Signature**: `def app_get_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1Response`
- **Returns (raw)**: `ApiResult[ApiV1Response, AppGetHealthErrorBody]`
- **Error**: `AppGetHealthErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1400Error1` [400] · `ApiV1401Error1` [401] · `ApiV1403Error1` [403] · `ApiV1404Error1` [404] · `ApiV1429Error1` [429] · `ApiV1500Error1` [500] · `ApiV1502Error1` [502] · `ApiV1503Error1` [503] · `ApiV1504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1Response` | `bundle_social/models/api_v1_response.py` |
| `AppGetHealthErrorBody` | `bundle_social/errors/app_get_health_error.py` |
| `ApiV1400Error1` | `bundle_social/models/api_v1400_error1.py` |
| `ApiV1401Error1` | `bundle_social/models/api_v1401_error1.py` |
| `ApiV1403Error1` | `bundle_social/models/api_v1403_error1.py` |
| `ApiV1404Error1` | `bundle_social/models/api_v1404_error1.py` |
| `ApiV1429Error1` | `bundle_social/models/api_v1429_error1.py` |
| `ApiV1500Error1` | `bundle_social/models/api_v1500_error1.py` |
| `ApiV1502Error1` | `bundle_social/models/api_v1502_error1.py` |
| `ApiV1503Error1` | `bundle_social/models/api_v1503_error1.py` |
| `ApiV1504Error1` | `bundle_social/models/api_v1504_error1.py` |

