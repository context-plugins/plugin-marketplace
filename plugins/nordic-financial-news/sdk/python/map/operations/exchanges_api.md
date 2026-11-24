<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExchangesApi — operations

Accessor: `client.exchanges_api` · Source: `nordic_financial_news/apis/exchanges_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.exchanges_api.get_api_v1_exchanges

- **Route**: `GET /api/v1/exchanges`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_exchanges(*, limit: int | None = None, cursor: str | None = None, country: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `country` — query · `fields` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1ExchangesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ExchangesResponse, GetApiV1ExchangesErrorBody]`
- **Error**: `GetApiV1ExchangesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ExchangesResponse` | `nordic_financial_news/models/api_v1_exchanges_response.py` |
| `GetApiV1ExchangesErrorBody` | `nordic_financial_news/errors/get_api_v1_exchanges_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.exchanges_api.get_api_v1_exchanges_by_identifier

- **Route**: `GET /api/v1/exchanges/{identifier}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_exchanges_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1ExchangesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ExchangesResponse1, GetApiV1ExchangesByIdentifierErrorBody]`
- **Error**: `GetApiV1ExchangesByIdentifierErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ExchangesResponse1` | `nordic_financial_news/models/api_v1_exchanges_response1.py` |
| `GetApiV1ExchangesByIdentifierErrorBody` | `nordic_financial_news/errors/get_api_v1_exchanges_by_identifier_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.exchanges_api.get_api_v1_exchanges_by_identifier_companies

- **Route**: `GET /api/v1/exchanges/{identifier}/companies`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_exchanges_by_identifier_companies(identifier: str, *, limit: int | None = None, cursor: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `limit` — query · `cursor` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1ExchangesCompaniesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ExchangesCompaniesResponse, GetApiV1ExchangesByIdentifierCompaniesErrorBody]`
- **Error**: `GetApiV1ExchangesByIdentifierCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ExchangesCompaniesResponse` | `nordic_financial_news/models/api_v1_exchanges_companies_response.py` |
| `GetApiV1ExchangesByIdentifierCompaniesErrorBody` | `nordic_financial_news/errors/get_api_v1_exchanges_by_identifier_companies_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

