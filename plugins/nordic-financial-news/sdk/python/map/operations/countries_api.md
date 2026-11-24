<!-- Generated file — do not edit; regenerated with the SDK. -->

# CountriesApi — operations

Accessor: `client.countries_api` · Source: `nordic_financial_news/apis/countries_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.countries_api.get_api_v1_countries

- **Route**: `GET /api/v1/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_countries(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CountriesResponse`
- **Returns (raw)**: `ApiResult[ApiV1CountriesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1CountriesResponse` | `nordic_financial_news/models/api_v1_countries_response.py` |

### client.countries_api.get_api_v1_countries_by_identifier

- **Route**: `GET /api/v1/countries/{identifier}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_countries_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CountriesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CountriesResponse1, GetApiV1CountriesByIdentifierErrorBody]`
- **Error**: `GetApiV1CountriesByIdentifierErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CountriesResponse1` | `nordic_financial_news/models/api_v1_countries_response1.py` |
| `GetApiV1CountriesByIdentifierErrorBody` | `nordic_financial_news/errors/get_api_v1_countries_by_identifier_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

