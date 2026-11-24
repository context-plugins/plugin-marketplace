<!-- Generated file — do not edit; regenerated with the SDK. -->

# IndicesApi — operations

Accessor: `client.indices_api` · Source: `nordic_financial_news/apis/indices_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.indices_api.get_api_v1_indices

- **Route**: `GET /api/v1/indices`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_indices(*, limit: int | None = None, cursor: str | None = None, exchange: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `exchange` — query · `fields` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1IndicesResponse`
- **Returns (raw)**: `ApiResult[ApiV1IndicesResponse, GetApiV1IndicesErrorBody]`
- **Error**: `GetApiV1IndicesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IndicesResponse` | `nordic_financial_news/models/api_v1_indices_response.py` |
| `GetApiV1IndicesErrorBody` | `nordic_financial_news/errors/get_api_v1_indices_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.indices_api.get_api_v1_indices_by_identifier

- **Route**: `GET /api/v1/indices/{identifier}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_indices_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1IndicesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1IndicesResponse1, GetApiV1IndicesByIdentifierErrorBody]`
- **Error**: `GetApiV1IndicesByIdentifierErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IndicesResponse1` | `nordic_financial_news/models/api_v1_indices_response1.py` |
| `GetApiV1IndicesByIdentifierErrorBody` | `nordic_financial_news/errors/get_api_v1_indices_by_identifier_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.indices_api.get_api_v1_indices_by_identifier_companies

- **Route**: `GET /api/v1/indices/{identifier}/companies`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_indices_by_identifier_companies(identifier: str, *, limit: int | None = None, cursor: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `limit` — query · `cursor` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1IndicesCompaniesResponse`
- **Returns (raw)**: `ApiResult[ApiV1IndicesCompaniesResponse, GetApiV1IndicesByIdentifierCompaniesErrorBody]`
- **Error**: `GetApiV1IndicesByIdentifierCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IndicesCompaniesResponse` | `nordic_financial_news/models/api_v1_indices_companies_response.py` |
| `GetApiV1IndicesByIdentifierCompaniesErrorBody` | `nordic_financial_news/errors/get_api_v1_indices_by_identifier_companies_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

