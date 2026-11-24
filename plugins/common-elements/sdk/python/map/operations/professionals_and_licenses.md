<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProfessionalsAndLicenses — operations

Accessor: `client.professionals_and_licenses` · Source: `common_elements/apis/professionals_and_licenses.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.professionals_and_licenses.licenses_verify

- **Route**: `GET /api/v1/licenses/verify`
- **Auth**: `bearer_auth`
- **Signature**: `def licenses_verify(state: str, *, license_number: str | None = None, name: str | None = None, license_type: str | None = None, limit: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `state`
- **Params**: `state` — query · `license_number` — query · `name` — query · `license_type` — query · `limit` — query
- **Returns (parsed)**: `ApiV1LicensesVerifyResponse`
- **Returns (raw)**: `ApiResult[ApiV1LicensesVerifyResponse, LicensesVerifyErrorBody]`
- **Error**: `LicensesVerifyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1LicensesVerifyResponse` | `common_elements/models/api_v1_licenses_verify_response.py` |
| `LicensesVerifyErrorBody` | `common_elements/errors/licenses_verify_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.professionals_and_licenses.professionals_associations

- **Route**: `GET /api/v1/professionals/{id}/associations`
- **Auth**: `bearer_auth`
- **Signature**: `def professionals_associations(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ProfessionalsAssociationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ProfessionalsAssociationsResponse, ProfessionalsAssociationsErrorBody]`
- **Error**: `ProfessionalsAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ProfessionalsAssociationsResponse` | `common_elements/models/api_v1_professionals_associations_response.py` |
| `ProfessionalsAssociationsErrorBody` | `common_elements/errors/professionals_associations_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.professionals_and_licenses.professionals_detail

- **Route**: `GET /api/v1/professionals/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def professionals_detail(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ProfessionalsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ProfessionalsResponse, ProfessionalsDetailErrorBody]`
- **Error**: `ProfessionalsDetailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ProfessionalsResponse` | `common_elements/models/api_v1_professionals_response.py` |
| `ProfessionalsDetailErrorBody` | `common_elements/errors/professionals_detail_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.professionals_and_licenses.professionals_search

- **Route**: `GET /api/v1/professionals/search`
- **Auth**: `bearer_auth`
- **Signature**: `def professionals_search(*, q: str | None = None, state: str | None = None, license_type: str | None = None, board: str | None = None, status: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `state` — query · `license_type` — query · `board` — query · `status` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1ProfessionalsSearchResponse`
- **Returns (raw)**: `ApiResult[ApiV1ProfessionalsSearchResponse, ProfessionalsSearchErrorBody]`
- **Error**: `ProfessionalsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ProfessionalsSearchResponse` | `common_elements/models/api_v1_professionals_search_response.py` |
| `ProfessionalsSearchErrorBody` | `common_elements/errors/professionals_search_error.py` |
| `Error` | `common_elements/models/error.py` |

