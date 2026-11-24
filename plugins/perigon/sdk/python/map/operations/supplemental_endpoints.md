<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupplementalEndpoints — operations

Accessor: `client.supplemental_endpoints` · Source: `perigon/apis/supplemental_endpoints.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.supplemental_endpoints.get_journalist_by_id

- **Route**: `GET /v1/journalists/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_journalist_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Journalist`
- **Returns (raw)**: `ApiResult[Journalist, GetJournalistByIdErrorBody]`
- **Error**: `GetJournalistByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Journalist` | `perigon/models/journalist.py` |
| `GetJournalistByIdErrorBody` | `perigon/errors/get_journalist_by_id_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.supplemental_endpoints.search_companies

- **Route**: `GET /v1/companies/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_companies(*, id_: list[str] | None = None, symbol: list[str] | None = None, symbol_isin: list[str] | None = None, domain: list[str] | None = None, country: list[str] | None = None, exchange: list[str] | None = None, num_employees_from: int | None = None, num_employees_to: int | None = None, ipo_from: RFC3339DateTime | None = None, ipo_to: RFC3339DateTime | None = None, q: str | None = None, name: str | None = None, industry: str | None = None, sector: str | None = None, size: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `id_` — query `id` · `symbol` — query · `symbol_isin` — query `symbolIsin` · `domain` — query · `country` — query · `exchange` — query · `num_employees_from` — query `numEmployeesFrom` · `num_employees_to` — query `numEmployeesTo` · `ipo_from` — query `ipoFrom` · `ipo_to` — query `ipoTo` · `q` — query · `name` — query · `industry` — query · `sector` — query · `size` — query · `page` — query
- **Returns (parsed)**: `CompanySearchResult`
- **Returns (raw)**: `ApiResult[CompanySearchResult, SearchCompaniesErrorBody]`
- **Error**: `SearchCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySearchResult` | `perigon/models/company_search_result.py` |
| `SearchCompaniesErrorBody` | `perigon/errors/search_companies_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.supplemental_endpoints.search_journalists

- **Route**: `GET /v1/journalists/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_journalists(*, id_: list[str] | None = None, q: str | None = None, name: str | None = None, twitter: str | None = None, sort_by: JournalistsSortByOrStr | None = None, size: int | None = None, page: int | None = None, source: list[str] | None = None, topic: list[str] | None = None, category: list[str] | None = None, label: list[str] | None = None, min_monthly_posts: int | None = None, max_monthly_posts: int | None = None, country: list[str] | None = None, location_country: list[str] | None = None, location_state: list[str] | None = None, location_county: list[str] | None = None, location_city: list[str] | None = None, location_area: list[str] | None = None, updated_at_from: RFC3339DateTime | None = None, updated_at_to: RFC3339DateTime | None = None, show_num_results: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `id_` — query `id` · `q` — query · `name` — query · `twitter` — query · `sort_by` — query `sortBy` · `size` — query · `page` — query · `source` — query · `topic` — query · `category` — query · `label` — query · `min_monthly_posts` — query `minMonthlyPosts` · `max_monthly_posts` — query `maxMonthlyPosts` · `country` — query · `location_country` — query `locationCountry` · `location_state` — query `locationState` · `location_county` — query `locationCounty` · `location_city` — query `locationCity` · `location_area` — query `locationArea` · `updated_at_from` — query `updatedAtFrom` · `updated_at_to` — query `updatedAtTo` · `show_num_results` — query `showNumResults`
- **Returns (parsed)**: `JournalistSearchResult`
- **Returns (raw)**: `ApiResult[JournalistSearchResult, SearchJournalistsErrorBody]`
- **Error**: `SearchJournalistsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JournalistsSortByOrStr` | `perigon/models/enums/journalists_sort_by.py` |
| `JournalistSearchResult` | `perigon/models/journalist_search_result.py` |
| `SearchJournalistsErrorBody` | `perigon/errors/search_journalists_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.supplemental_endpoints.search_people

- **Route**: `GET /v1/people/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_people(*, name: str | None = None, wikidata_id: list[str] | None = None, occupation_id: list[str] | None = None, occupation_label: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `wikidata_id` — query `wikidataId` · `occupation_id` — query `occupationId` · `occupation_label` — query `occupationLabel` · `page` — query · `size` — query
- **Returns (parsed)**: `PeopleSearchResult`
- **Returns (raw)**: `ApiResult[PeopleSearchResult, SearchPeopleErrorBody]`
- **Error**: `SearchPeopleErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeopleSearchResult` | `perigon/models/people_search_result.py` |
| `SearchPeopleErrorBody` | `perigon/errors/search_people_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.supplemental_endpoints.search_sources

- **Route**: `GET /v1/sources/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_sources(*, domain: list[str] | None = None, name: str | None = None, source_group: str | None = None, sort_by: SourcesSortByOrStr | None = None, page: int | None = None, size: int | None = None, min_monthly_visits: int | None = None, max_monthly_visits: int | None = None, min_monthly_posts: int | None = None, max_monthly_posts: int | None = None, country: list[str] | None = None, source_country: list[str] | None = None, source_state: list[str] | None = None, source_county: list[str] | None = None, source_city: list[str] | None = None, source_lat: float | None = None, source_lon: float | None = None, source_max_distance: float | None = None, category: list[str] | None = None, topic: list[str] | None = None, label: list[str] | None = None, paywall: bool | None = None, show_subdomains: bool | None = None, show_num_results: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `domain` — query · `name` — query · `source_group` — query `sourceGroup` · `sort_by` — query `sortBy` · `page` — query · `size` — query · `min_monthly_visits` — query `minMonthlyVisits` · `max_monthly_visits` — query `maxMonthlyVisits` · `min_monthly_posts` — query `minMonthlyPosts` · `max_monthly_posts` — query `maxMonthlyPosts` · `country` — query · `source_country` — query `sourceCountry` · `source_state` — query `sourceState` · `source_county` — query `sourceCounty` · `source_city` — query `sourceCity` · `source_lat` — query `sourceLat` · `source_lon` — query `sourceLon` · `source_max_distance` — query `sourceMaxDistance` · `category` — query · `topic` — query · `label` — query · `paywall` — query · `show_subdomains` — query `showSubdomains` · `show_num_results` — query `showNumResults`
- **Returns (parsed)**: `SourceSearchResult`
- **Returns (raw)**: `ApiResult[SourceSearchResult, SearchSourcesErrorBody]`
- **Error**: `SearchSourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourcesSortByOrStr` | `perigon/models/enums/sources_sort_by.py` |
| `SourceSearchResult` | `perigon/models/source_search_result.py` |
| `SearchSourcesErrorBody` | `perigon/errors/search_sources_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.supplemental_endpoints.search_topics

- **Route**: `GET /v1/topics/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_topics(*, name: str | None = None, category: str | None = None, subcategory: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `category` — query · `subcategory` — query · `page` — query · `size` — query
- **Returns (parsed)**: `TopicSearchResult`
- **Returns (raw)**: `ApiResult[TopicSearchResult, SearchTopicsErrorBody]`
- **Error**: `SearchTopicsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TopicSearchResult` | `perigon/models/topic_search_result.py` |
| `SearchTopicsErrorBody` | `perigon/errors/search_topics_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

