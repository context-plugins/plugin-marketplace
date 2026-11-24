<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompaniesApi — operations

Accessor: `client.companies_api` · Source: `nordic_financial_news/apis/companies_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.companies_api.get_api_v1_companies

- **Route**: `GET /api/v1/companies`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_companies(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, q: str | None = None, mode: ModeOrStr | None = None, company: str | None = None, ticker: str | None = None, country: str | None = None, market: str | None = None, domicile: str | None = None, exchange: str | None = None, sector: str | None = None, listed: str | None = None, watchlist: str | None = None, is_active: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `q` — query · `mode` — query · `company` — query · `ticker` — query · `country` — query · `market` — query · `domicile` — query · `exchange` — query · `sector` — query · `listed` — query · `watchlist` — query · `is_active` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CompaniesResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompaniesResponse, GetApiV1CompaniesErrorBody]`
- **Error**: `GetApiV1CompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModeOrStr` | `nordic_financial_news/models/enums/mode.py` |
| `ApiV1CompaniesResponse` | `nordic_financial_news/models/api_v1_companies_response.py` |
| `GetApiV1CompaniesErrorBody` | `nordic_financial_news/errors/get_api_v1_companies_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.companies_api.get_api_v1_companies_by_identifier

- **Route**: `GET /api/v1/companies/{identifier}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_companies_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CompaniesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CompaniesResponse1, GetApiV1CompaniesByIdentifierErrorBody]`
- **Error**: `GetApiV1CompaniesByIdentifierErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CompaniesResponse1` | `nordic_financial_news/models/api_v1_companies_response1.py` |
| `GetApiV1CompaniesByIdentifierErrorBody` | `nordic_financial_news/errors/get_api_v1_companies_by_identifier_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.companies_api.get_api_v1_companies_by_identifier_articles

- **Route**: `GET /api/v1/companies/{identifier}/articles`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_companies_by_identifier_articles(identifier: str, *, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, sort: SortOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, source_type: str | None = None, content_type: str | None = None, published_after: str | None = None, published_before: str | None = None, primary_only: bool | None = None, include_peripheral: bool | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `limit` — query · `cursor` — query · `fields` — query · `updated_after` — query · `q` — query · `sort` — query · `country` — query · `category` — query · `sources` — query · `source_type` — query · `content_type` — query · `published_after` — query · `published_before` — query · `primary_only` — query · `include_peripheral` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CompaniesArticlesResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompaniesArticlesResponse, GetApiV1CompaniesByIdentifierArticlesErrorBody]`
- **Error**: `GetApiV1CompaniesByIdentifierArticlesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrStr` | `nordic_financial_news/models/enums/sort.py` |
| `ApiV1CompaniesArticlesResponse` | `nordic_financial_news/models/api_v1_companies_articles_response.py` |
| `GetApiV1CompaniesByIdentifierArticlesErrorBody` | `nordic_financial_news/errors/get_api_v1_companies_by_identifier_articles_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.companies_api.get_api_v1_companies_by_identifier_calendar_events

- **Route**: `GET /api/v1/companies/{identifier}/calendar_events`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_companies_by_identifier_calendar_events(identifier: str, *, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, status: Status1OrStr | None = None, event_type: EventType1OrStr | None = None, scheduled_after: str | None = None, scheduled_before: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `limit` — query · `cursor` — query · `fields` — query · `updated_after` — query · `status` — query · `event_type` — query · `scheduled_after` — query · `scheduled_before` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CompaniesCalendarEventsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompaniesCalendarEventsResponse, GetApiV1CompaniesByIdentifierCalendarEventsErrorBody]`
- **Error**: `GetApiV1CompaniesByIdentifierCalendarEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status1OrStr` | `nordic_financial_news/models/enums/status1.py` |
| `EventType1OrStr` | `nordic_financial_news/models/enums/event_type1.py` |
| `ApiV1CompaniesCalendarEventsResponse` | `nordic_financial_news/models/api_v1_companies_calendar_events_response.py` |
| `GetApiV1CompaniesByIdentifierCalendarEventsErrorBody` | `nordic_financial_news/errors/get_api_v1_companies_by_identifier_calendar_events_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.companies_api.get_api_v1_companies_by_identifier_events

- **Route**: `GET /api/v1/companies/{identifier}/events`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_companies_by_identifier_events(identifier: str, *, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, event_type: str | None = None, significance: str | None = None, sort: str | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, first_reported_after: str | None = None, first_reported_before: str | None = None, last_article_after: str | None = None, last_article_before: str | None = None, window: str | None = None, source_type: str | None = None, content_type: str | None = None, related_to: str | None = None, include_peripheral: bool | None = None, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `limit` — query · `cursor` — query · `fields` — query · `updated_after` — query · `q` — query · `event_type` — query · `significance` — query · `sort` — query · `country` — query · `category` — query · `sources` — query · `first_reported_after` — query · `first_reported_before` — query · `last_article_after` — query · `last_article_before` — query · `window` — query · `source_type` — query · `content_type` — query · `related_to` — query · `include_peripheral` — query · `if_none_match` — header `If-None-Match`
- **Returns (parsed)**: `ApiV1CompaniesEventsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompaniesEventsResponse, GetApiV1CompaniesByIdentifierEventsErrorBody]`
- **Error**: `GetApiV1CompaniesByIdentifierEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CompaniesEventsResponse` | `nordic_financial_news/models/api_v1_companies_events_response.py` |
| `GetApiV1CompaniesByIdentifierEventsErrorBody` | `nordic_financial_news/errors/get_api_v1_companies_by_identifier_events_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.companies_api.get_api_v1_companies_by_identifier_stories

- **Route**: `GET /api/v1/companies/{identifier}/stories`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_companies_by_identifier_stories(identifier: str, *, limit: int | None = None, cursor: str | None = None, updated_after: str | None = None, fields: str | None = None, q: str | None = None, sort: SortOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, published_after: str | None = None, published_before: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `identifier`
- **Params**: `identifier` — path · `limit` — query · `cursor` — query · `updated_after` — query · `fields` — query · `q` — query · `sort` — query · `country` — query · `category` — query · `sources` — query · `published_after` — query · `published_before` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1CompaniesStoriesResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompaniesStoriesResponse, GetApiV1CompaniesByIdentifierStoriesErrorBody]`
- **Error**: `GetApiV1CompaniesByIdentifierStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrStr` | `nordic_financial_news/models/enums/sort.py` |
| `ApiV1CompaniesStoriesResponse` | `nordic_financial_news/models/api_v1_companies_stories_response.py` |
| `GetApiV1CompaniesByIdentifierStoriesErrorBody` | `nordic_financial_news/errors/get_api_v1_companies_by_identifier_stories_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

