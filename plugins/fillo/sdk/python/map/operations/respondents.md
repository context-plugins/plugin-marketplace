<!-- Generated file — do not edit; regenerated with the SDK. -->

# Respondents — operations

Accessor: `client.respondents` · Source: `fillo/apis/respondents.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.respondents.find_respondents

- **Route**: `GET /api/v1/manage/respondents`
- **Auth**: `bearer_auth`
- **Signature**: `def find_respondents(*, external_id: str | None = None, email: str | None = None, cursor: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `external_id` — query `externalId` · `email` — query · `cursor` — query · `limit` — query
- **Returns (parsed)**: `ApiV1ManageRespondentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageRespondentsResponse, FindRespondentsErrorBody]`
- **Error**: `FindRespondentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageRespondentsResponse` | `fillo/models/api_v1_manage_respondents_response.py` |
| `FindRespondentsErrorBody` | `fillo/errors/find_respondents_error.py` |
| `Error` | `fillo/models/error.py` |

### client.respondents.forget_respondent

- **Route**: `DELETE /api/v1/manage/respondents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def forget_respondent(id_: str, body: ApiV1ManageRespondentsRequest | ApiV1ManageRespondentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageRespondentsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageRespondentsResponse1, ForgetRespondentErrorBody]`
- **Error**: `ForgetRespondentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageRespondentsRequest` | `fillo/models/api_v1_manage_respondents_request.py` |
| `ApiV1ManageRespondentsRequestDict` | `fillo/models/api_v1_manage_respondents_request.py` |
| `ApiV1ManageRespondentsResponse1` | `fillo/models/api_v1_manage_respondents_response1.py` |
| `ForgetRespondentErrorBody` | `fillo/errors/forget_respondent_error.py` |
| `Error` | `fillo/models/error.py` |

### client.respondents.list_respondent_responses

- **Route**: `GET /api/v1/manage/respondents/{id}/responses`
- **Auth**: `bearer_auth`
- **Signature**: `def list_respondent_responses(id_: str, *, cursor: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `cursor` — query · `limit` — query
- **Returns (parsed)**: `ResponsePage`
- **Returns (raw)**: `ApiResult[ResponsePage, ListRespondentResponsesErrorBody]`
- **Error**: `ListRespondentResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponsePage` | `fillo/models/response_page.py` |
| `ListRespondentResponsesErrorBody` | `fillo/errors/list_respondent_responses_error.py` |
| `Error` | `fillo/models/error.py` |

