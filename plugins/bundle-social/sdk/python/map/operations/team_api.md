<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamApi — operations

Accessor: `client.team_api` · Source: `bundle_social/apis/team_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.team_api.team_create_team

- **Route**: `POST /api/v1/team/`
- **Auth**: `api_key_auth`
- **Signature**: `def team_create_team(*, body: ApiV1TeamRequest1 | ApiV1TeamRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1TeamResponse1`
- **Returns (raw)**: `ApiResult[ApiV1TeamResponse1, TeamCreateTeamErrorBody]`
- **Error**: `TeamCreateTeamErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Team400Error1` [400] · `ApiV1Team401Error1` [401] · `ApiV1Team403Error1` [403] · `ApiV1Team404Error21` [404] · `ApiV1Team429Error1` [429] · `ApiV1Team500Error1` [500] · `ApiV1Team502Error1` [502] · `ApiV1Team503Error1` [503] · `ApiV1Team504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TeamRequest1` | `bundle_social/models/api_v1_team_request1.py` |
| `ApiV1TeamRequest1Dict` | `bundle_social/models/api_v1_team_request1.py` |
| `ApiV1TeamResponse1` | `bundle_social/models/api_v1_team_response1.py` |
| `TeamCreateTeamErrorBody` | `bundle_social/errors/team_create_team_error.py` |
| `ApiV1Team400Error1` | `bundle_social/models/api_v1_team400_error1.py` |
| `ApiV1Team401Error1` | `bundle_social/models/api_v1_team401_error1.py` |
| `ApiV1Team403Error1` | `bundle_social/models/api_v1_team403_error1.py` |
| `ApiV1Team404Error21` | `bundle_social/models/api_v1_team404_error21.py` |
| `ApiV1Team429Error1` | `bundle_social/models/api_v1_team429_error1.py` |
| `ApiV1Team500Error1` | `bundle_social/models/api_v1_team500_error1.py` |
| `ApiV1Team502Error1` | `bundle_social/models/api_v1_team502_error1.py` |
| `ApiV1Team503Error1` | `bundle_social/models/api_v1_team503_error1.py` |
| `ApiV1Team504Error1` | `bundle_social/models/api_v1_team504_error1.py` |

### client.team_api.team_delete_team

- **Route**: `DELETE /api/v1/team/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def team_delete_team(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1TeamResponse1`
- **Returns (raw)**: `ApiResult[ApiV1TeamResponse1, TeamDeleteTeamErrorBody]`
- **Error**: `TeamDeleteTeamErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Team400Error1` [400] · `ApiV1Team401Error1` [401] · `ApiV1Team403Error1` [403] · `ApiV1Team404Error21` [404] · `ApiV1Team429Error1` [429] · `ApiV1Team500Error1` [500] · `ApiV1Team502Error1` [502] · `ApiV1Team503Error1` [503] · `ApiV1Team504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TeamResponse1` | `bundle_social/models/api_v1_team_response1.py` |
| `TeamDeleteTeamErrorBody` | `bundle_social/errors/team_delete_team_error.py` |
| `ApiV1Team400Error1` | `bundle_social/models/api_v1_team400_error1.py` |
| `ApiV1Team401Error1` | `bundle_social/models/api_v1_team401_error1.py` |
| `ApiV1Team403Error1` | `bundle_social/models/api_v1_team403_error1.py` |
| `ApiV1Team404Error21` | `bundle_social/models/api_v1_team404_error21.py` |
| `ApiV1Team429Error1` | `bundle_social/models/api_v1_team429_error1.py` |
| `ApiV1Team500Error1` | `bundle_social/models/api_v1_team500_error1.py` |
| `ApiV1Team502Error1` | `bundle_social/models/api_v1_team502_error1.py` |
| `ApiV1Team503Error1` | `bundle_social/models/api_v1_team503_error1.py` |
| `ApiV1Team504Error1` | `bundle_social/models/api_v1_team504_error1.py` |

### client.team_api.team_get_list

- **Route**: `GET /api/v1/team/`
- **Auth**: `api_key_auth`
- **Signature**: `def team_get_list(*, offset: float | None = 0.0, limit: float | None = 10.0, search: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `offset` — query · `limit` — query · `search` — query
- **Returns (parsed)**: `ApiV1TeamResponse3`
- **Returns (raw)**: `ApiResult[ApiV1TeamResponse3, TeamGetListErrorBody]`
- **Error**: `TeamGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Team400Error1` [400] · `ApiV1Team401Error1` [401] · `ApiV1Team403Error1` [403] · `ApiV1Team404Error21` [404] · `ApiV1Team429Error1` [429] · `ApiV1Team500Error1` [500] · `ApiV1Team502Error1` [502] · `ApiV1Team503Error1` [503] · `ApiV1Team504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TeamResponse3` | `bundle_social/models/api_v1_team_response3.py` |
| `TeamGetListErrorBody` | `bundle_social/errors/team_get_list_error.py` |
| `ApiV1Team400Error1` | `bundle_social/models/api_v1_team400_error1.py` |
| `ApiV1Team401Error1` | `bundle_social/models/api_v1_team401_error1.py` |
| `ApiV1Team403Error1` | `bundle_social/models/api_v1_team403_error1.py` |
| `ApiV1Team404Error21` | `bundle_social/models/api_v1_team404_error21.py` |
| `ApiV1Team429Error1` | `bundle_social/models/api_v1_team429_error1.py` |
| `ApiV1Team500Error1` | `bundle_social/models/api_v1_team500_error1.py` |
| `ApiV1Team502Error1` | `bundle_social/models/api_v1_team502_error1.py` |
| `ApiV1Team503Error1` | `bundle_social/models/api_v1_team503_error1.py` |
| `ApiV1Team504Error1` | `bundle_social/models/api_v1_team504_error1.py` |

### client.team_api.team_get_team

- **Route**: `GET /api/v1/team/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def team_get_team(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1TeamResponse`
- **Returns (raw)**: `ApiResult[ApiV1TeamResponse, TeamGetTeamErrorBody]`
- **Error**: `TeamGetTeamErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Team400Error1` [400] · `ApiV1Team401Error1` [401] · `ApiV1Team403Error1` [403] · `ApiV1Team404Error1` [404] · `ApiV1Team429Error1` [429] · `ApiV1Team500Error1` [500] · `ApiV1Team502Error1` [502] · `ApiV1Team503Error1` [503] · `ApiV1Team504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TeamResponse` | `bundle_social/models/api_v1_team_response.py` |
| `TeamGetTeamErrorBody` | `bundle_social/errors/team_get_team_error.py` |
| `ApiV1Team400Error1` | `bundle_social/models/api_v1_team400_error1.py` |
| `ApiV1Team401Error1` | `bundle_social/models/api_v1_team401_error1.py` |
| `ApiV1Team403Error1` | `bundle_social/models/api_v1_team403_error1.py` |
| `ApiV1Team404Error1` | `bundle_social/models/api_v1_team404_error1.py` |
| `ApiV1Team429Error1` | `bundle_social/models/api_v1_team429_error1.py` |
| `ApiV1Team500Error1` | `bundle_social/models/api_v1_team500_error1.py` |
| `ApiV1Team502Error1` | `bundle_social/models/api_v1_team502_error1.py` |
| `ApiV1Team503Error1` | `bundle_social/models/api_v1_team503_error1.py` |
| `ApiV1Team504Error1` | `bundle_social/models/api_v1_team504_error1.py` |

### client.team_api.team_update_team

- **Route**: `PATCH /api/v1/team/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def team_update_team(id_: str, *, body: ApiV1TeamRequest | ApiV1TeamRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1TeamResponse1`
- **Returns (raw)**: `ApiResult[ApiV1TeamResponse1, TeamUpdateTeamErrorBody]`
- **Error**: `TeamUpdateTeamErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Team400Error1` [400] · `ApiV1Team401Error1` [401] · `ApiV1Team403Error1` [403] · `ApiV1Team404Error21` [404] · `ApiV1Team429Error1` [429] · `ApiV1Team500Error1` [500] · `ApiV1Team502Error1` [502] · `ApiV1Team503Error1` [503] · `ApiV1Team504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TeamRequest` | `bundle_social/models/api_v1_team_request.py` |
| `ApiV1TeamRequestDict` | `bundle_social/models/api_v1_team_request.py` |
| `ApiV1TeamResponse1` | `bundle_social/models/api_v1_team_response1.py` |
| `TeamUpdateTeamErrorBody` | `bundle_social/errors/team_update_team_error.py` |
| `ApiV1Team400Error1` | `bundle_social/models/api_v1_team400_error1.py` |
| `ApiV1Team401Error1` | `bundle_social/models/api_v1_team401_error1.py` |
| `ApiV1Team403Error1` | `bundle_social/models/api_v1_team403_error1.py` |
| `ApiV1Team404Error21` | `bundle_social/models/api_v1_team404_error21.py` |
| `ApiV1Team429Error1` | `bundle_social/models/api_v1_team429_error1.py` |
| `ApiV1Team500Error1` | `bundle_social/models/api_v1_team500_error1.py` |
| `ApiV1Team502Error1` | `bundle_social/models/api_v1_team502_error1.py` |
| `ApiV1Team503Error1` | `bundle_social/models/api_v1_team503_error1.py` |
| `ApiV1Team504Error1` | `bundle_social/models/api_v1_team504_error1.py` |

