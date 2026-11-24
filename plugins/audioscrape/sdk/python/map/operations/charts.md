<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charts — operations

Accessor: `client.charts` · Source: `audioscrape/apis/charts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.charts.get_chart_podcasts

- **Route**: `GET /api/charts/podcasts`
- **Auth**: `bearer_auth`
- **Signature**: `def get_chart_podcasts(*, country: str | None = None, platform: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `country` — query · `platform` — query · `limit` — query
- **Returns (parsed)**: `list[ChartPodcastEntry]`
- **Returns (raw)**: `ApiResult[list[ChartPodcastEntry], GetChartPodcastsErrorBody]`
- **Error**: `GetChartPodcastsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChartPodcastEntry` | `audioscrape/models/chart_podcast_entry.py` |
| `GetChartPodcastsErrorBody` | `audioscrape/errors/get_chart_podcasts_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

