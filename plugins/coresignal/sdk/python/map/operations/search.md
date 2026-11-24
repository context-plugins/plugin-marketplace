<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `coresignal/apis/search.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.search.search_companies_by_es_dsl

- **Route**: `POST /search/es_dsl`
- **Auth**: `api_key`
- **Signature**: `def search_companies_by_es_dsl(body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[int]`
- **Returns (raw)**: `ApiResult[list[int], RawError]`
- **Error**: `RawError` — **Case B**

### client.search.search_companies_by_filter

- **Route**: `POST /search/filter`
- **Auth**: `api_key`
- **Signature**: `def search_companies_by_filter(body: CompanyFilter | CompanyFilterDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[int]`
- **Returns (raw)**: `ApiResult[list[int], SearchCompaniesByFilterErrorBody]`
- **Error**: `SearchCompaniesByFilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 402, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyFilter` | `coresignal/models/company_filter.py` |
| `CompanyFilterDict` | `coresignal/models/company_filter.py` |
| `SearchCompaniesByFilterErrorBody` | `coresignal/errors/search_companies_by_filter_error.py` |

