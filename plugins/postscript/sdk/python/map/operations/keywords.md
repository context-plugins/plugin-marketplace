<!-- Generated file — do not edit; regenerated with the SDK. -->

# Keywords — operations

Accessor: `client.keywords` · Source: `postscript/apis/keywords.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.keywords.get_keyword

- **Route**: `GET /api/v2/keywords/{id}`
- **Auth**: `sec0`
- **Signature**: `def get_keyword(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2KeywordsResponse`
- **Returns (raw)**: `ApiResult[ApiV2KeywordsResponse, GetKeywordErrorBody]`
- **Error**: `GetKeywordErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Keywords404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2KeywordsResponse` | `postscript/models/api_v2_keywords_response.py` |
| `GetKeywordErrorBody` | `postscript/errors/get_keyword_error.py` |
| `ApiV2Keywords404Error1` | `postscript/models/api_v2_keywords404_error1.py` |

### client.keywords.get_keywords

- **Route**: `GET /api/v2/keywords`
- **Auth**: `sec0`
- **Signature**: `def get_keywords(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2KeywordsResponse1`
- **Returns (raw)**: `ApiResult[ApiV2KeywordsResponse1, GetKeywordsErrorBody]`
- **Error**: `GetKeywordsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Keywords403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2KeywordsResponse1` | `postscript/models/api_v2_keywords_response1.py` |
| `GetKeywordsErrorBody` | `postscript/errors/get_keywords_error.py` |
| `ApiV2Keywords403Error1` | `postscript/models/api_v2_keywords403_error1.py` |

