<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.sources` · Source: `nordic_financial_news/apis/sources.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sources.get_api_v1_sources

- **Route**: `GET /api/v1/sources`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_sources(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1SourcesResponse`
- **Returns (raw)**: `ApiResult[ApiV1SourcesResponse, GetApiV1SourcesErrorBody]`
- **Error**: `GetApiV1SourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SourcesResponse` | `nordic_financial_news/models/api_v1_sources_response.py` |
| `GetApiV1SourcesErrorBody` | `nordic_financial_news/errors/get_api_v1_sources_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

