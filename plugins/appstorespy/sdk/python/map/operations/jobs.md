<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `appstore_spy/apis/jobs.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.create_search_jobs_search_post

- **Route**: `POST /jobs/search`
- **Auth**: `api_key_header`
- **Signature**: `def create_search_jobs_search_post(body: SearchCreate | SearchCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResult`
- **Returns (raw)**: `ApiResult[SearchResult, CreateSearchJobsSearchPostErrorBody]`
- **Error**: `CreateSearchJobsSearchPostErrorBody` — **Case A (typed)**
- **Error arms**: `JobsSearch401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchCreate` | `appstore_spy/models/search_create.py` |
| `SearchCreateDict` | `appstore_spy/models/search_create.py` |
| `SearchResult` | `appstore_spy/models/search_result.py` |
| `CreateSearchJobsSearchPostErrorBody` | `appstore_spy/errors/create_search_jobs_search_post_error.py` |
| `JobsSearch401Error1` | `appstore_spy/models/jobs_search401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.jobs.get_search_jobs_search_get

- **Route**: `GET /jobs/search`
- **Auth**: `api_key_header`
- **Signature**: `def get_search_jobs_search_get(*, store: StoreOrStr | None = None, term: str | None = None, id_user: str | None = None, country: str | None = None, search_id: str | None = None, updated_gte: RFC3339DateTime | None = None, updated_lte: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `store` — query · `term` — query · `id_user` — query · `country` — query · `search_id` — query · `updated_gte` — query · `updated_lte` — query
- **Returns (parsed)**: `list[SearchResult]`
- **Returns (raw)**: `ApiResult[list[SearchResult], GetSearchJobsSearchGetErrorBody]`
- **Error**: `GetSearchJobsSearchGetErrorBody` — **Case A (typed)**
- **Error arms**: `JobsSearch401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreOrStr` | `appstore_spy/models/enums/store.py` |
| `SearchResult` | `appstore_spy/models/search_result.py` |
| `GetSearchJobsSearchGetErrorBody` | `appstore_spy/errors/get_search_jobs_search_get_error.py` |
| `JobsSearch401Error1` | `appstore_spy/models/jobs_search401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

