<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.categories` · Source: `nordic_financial_news/apis/categories.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.categories.get_api_v1_categories

- **Route**: `GET /api/v1/categories`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_categories(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CategoriesResponse`
- **Returns (raw)**: `ApiResult[ApiV1CategoriesResponse, GetApiV1CategoriesErrorBody]`
- **Error**: `GetApiV1CategoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CategoriesResponse` | `nordic_financial_news/models/api_v1_categories_response.py` |
| `GetApiV1CategoriesErrorBody` | `nordic_financial_news/errors/get_api_v1_categories_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

