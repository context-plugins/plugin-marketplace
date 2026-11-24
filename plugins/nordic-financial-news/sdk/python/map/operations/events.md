<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `nordic_financial_news/apis/events.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.get_api_v1_events

- **Route**: `GET /api/v1/events`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_events(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, mode: ModeOrStr | None = None, event_type: str | None = None, significance: str | None = None, ticker: str | None = None, company: str | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, source_type: str | None = None, content_type: str | None = None, exchange: str | None = None, market: str | None = None, domicile: str | None = None, index: str | None = None, sector: str | None = None, listed: str | None = None, watchlist: str | None = None, first_reported_after: str | None = None, first_reported_before: str | None = None, last_article_after: str | None = None, last_article_before: str | None = None, window: str | None = None, sort: str | None = None, related_to: str | None = None, include_peripheral: bool | None = None, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `updated_after` — query · `q` — query · `mode` — query · `event_type` — query · `significance` — query · `ticker` — query · `company` — query · `country` — query · `category` — query · `sources` — query · `source_type` — query · `content_type` — query · `exchange` — query · `market` — query · `domicile` — query · `index` — query · `sector` — query · `listed` — query · `watchlist` — query · `first_reported_after` — query · `first_reported_before` — query · `last_article_after` — query · `last_article_before` — query · `window` — query · `sort` — query · `related_to` — query · `include_peripheral` — query · `if_none_match` — header `If-None-Match`
- **Returns (parsed)**: `ApiV1EventsResponse`
- **Returns (raw)**: `ApiResult[ApiV1EventsResponse, GetApiV1EventsErrorBody]`
- **Error**: `GetApiV1EventsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModeOrStr` | `nordic_financial_news/models/enums/mode.py` |
| `ApiV1EventsResponse` | `nordic_financial_news/models/api_v1_events_response.py` |
| `GetApiV1EventsErrorBody` | `nordic_financial_news/errors/get_api_v1_events_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.events.get_api_v1_events_by_id

- **Route**: `GET /api/v1/events/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_events_by_id(id_: str, *, include_peripheral: bool | None = None, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `include_peripheral` — query · `if_none_match` — header `If-None-Match`
- **Returns (parsed)**: `ApiV1EventsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1EventsResponse1, GetApiV1EventsByIdErrorBody]`
- **Error**: `GetApiV1EventsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EventsResponse1` | `nordic_financial_news/models/api_v1_events_response1.py` |
| `GetApiV1EventsByIdErrorBody` | `nordic_financial_news/errors/get_api_v1_events_by_id_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

