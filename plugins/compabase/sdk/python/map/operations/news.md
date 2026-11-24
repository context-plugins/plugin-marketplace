<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `compabase/apis/news.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.news.get_companies_krs_by_krs_news

- **Route**: `GET /companies/krs/{krs}/news`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_news(krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `locale` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsNewsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsNewsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsNewsErrorBody` | `compabase/errors/get_companies_krs_by_krs_news_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.news.get_news

- **Route**: `GET /news`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_news(*, since: str | None = None, pkd: str | None = None, city: str | None = None, locale: LocaleOrStr | None = None, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `since` — query · `pkd` — query · `city` — query · `locale` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetNewsErrorBody]`
- **Error**: `GetNewsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LocaleOrStr` | `compabase/models/enums/locale.py` |
| `GetNewsErrorBody` | `compabase/errors/get_news_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

