<!-- Generated file — do not edit; regenerated with the SDK. -->

# Radar — operations

Accessor: `client.radar` · Source: `alpha_ai/apis/radar.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.radar.get_radar_snapshot

- **Route**: `GET /api/signals/snapshot/`
- **Auth**: `api_key`
- **Signature**: `def get_radar_snapshot(*, window: WindowOrStr | None = Window._24H, scope: ScopeOrStr | None = Scope.MARKET, market: MarketOrStr | None = Market.ALL, ticker: str | None = "", tickers: str | None = "", search: str | None = "", sort: SortAlphAiRestRadarApiOrStr | None = SortAlphAiRestRadarApi.SCORE, order: OrderOrStr | None = Order.DESC, sentiment: SentimentAlphAiRestRadarApiOrStr | None = SentimentAlphAiRestRadarApi.ALL, min_z: float | None = None, limit: int | None = 50, offset: int | None = 0, cursor: str | None = "", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `window` — query · `scope` — query · `market` — query · `ticker` — query · `tickers` — query · `search` — query · `sort` — query · `order` — query · `sentiment` — query · `min_z` — query · `limit` — query · `offset` — query · `cursor` — query
- **Returns (parsed)**: `SnapshotPreviewDto`
- **Returns (raw)**: `ApiResult[SnapshotPreviewDto, GetRadarSnapshotErrorBody]`
- **Error**: `GetRadarSnapshotErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 404, 409, 429, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `WindowOrStr` | `alpha_ai/models/enums/window.py` |
| `ScopeOrStr` | `alpha_ai/models/enums/scope.py` |
| `MarketOrStr` | `alpha_ai/models/enums/market.py` |
| `SortAlphAiRestRadarApiOrStr` | `alpha_ai/models/enums/sort_alph_ai_rest_radar_api.py` |
| `OrderOrStr` | `alpha_ai/models/enums/order.py` |
| `SentimentAlphAiRestRadarApiOrStr` | `alpha_ai/models/enums/sentiment_alph_ai_rest_radar_api.py` |
| `SnapshotPreviewDto` | `alpha_ai/models/snapshot_preview_dto.py` |
| `GetRadarSnapshotErrorBody` | `alpha_ai/errors/get_radar_snapshot_error.py` |

