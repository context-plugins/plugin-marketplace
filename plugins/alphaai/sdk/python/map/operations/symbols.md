<!-- Generated file — do not edit; regenerated with the SDK. -->

# Symbols — operations

Accessor: `client.symbols` · Source: `alpha_ai/apis/symbols.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.symbols.get_api_symbols

- **Route**: `GET /api/symbols/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols(*, limit: int | None = None, offset: int | None = 0, search: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `search` — query
- **Returns (parsed)**: `list[Symbol]`
- **Returns (raw)**: `ApiResult[list[Symbol], GetApiSymbolsErrorBody]`
- **Error**: `GetApiSymbolsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `Symbol` | `alpha_ai/models/symbol.py` |
| `GetApiSymbolsErrorBody` | `alpha_ai/errors/get_api_symbols_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker

- **Route**: `GET /api/symbols/{ticker}/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path
- **Returns (parsed)**: `Symbol`
- **Returns (raw)**: `ApiResult[Symbol, GetApiSymbolsByTickerErrorBody]`
- **Error**: `GetApiSymbolsByTickerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Symbol` | `alpha_ai/models/symbol.py` |
| `GetApiSymbolsByTickerErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker_earnings

- **Route**: `GET /api/symbols/{ticker}/earnings/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker_earnings(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path
- **Returns (parsed)**: `TickerEarningsHistory`
- **Returns (raw)**: `ApiResult[TickerEarningsHistory, GetApiSymbolsByTickerEarningsErrorBody]`
- **Error**: `GetApiSymbolsByTickerEarningsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `TickerEarningsHistory` | `alpha_ai/models/ticker_earnings_history.py` |
| `GetApiSymbolsByTickerEarningsErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_earnings_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker_earnings_latest

- **Route**: `GET /api/symbols/{ticker}/earnings/latest/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker_earnings_latest(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path
- **Returns (parsed)**: `LatestEarningsPointer`
- **Returns (raw)**: `ApiResult[LatestEarningsPointer, GetApiSymbolsByTickerEarningsLatestErrorBody]`
- **Error**: `GetApiSymbolsByTickerEarningsLatestErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `LatestEarningsPointer` | `alpha_ai/models/latest_earnings_pointer.py` |
| `GetApiSymbolsByTickerEarningsLatestErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_earnings_latest_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker_insider_summary

- **Route**: `GET /api/symbols/{ticker}/insider-summary/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker_insider_summary(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path
- **Returns (parsed)**: `TickerInsiderSummary`
- **Returns (raw)**: `ApiResult[TickerInsiderSummary, GetApiSymbolsByTickerInsiderSummaryErrorBody]`
- **Error**: `GetApiSymbolsByTickerInsiderSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `TickerInsiderSummary` | `alpha_ai/models/ticker_insider_summary.py` |
| `GetApiSymbolsByTickerInsiderSummaryErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_insider_summary_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker_insider_trades

- **Route**: `GET /api/symbols/{ticker}/insider-trades/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker_insider_trades(ticker: str, *, side: Side1OrStr | None = Side1.ALL, cursor: str | None = None, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path · `side` — query · `cursor` — query · `page_size` — query
- **Returns (parsed)**: `TickerInsiderTrades`
- **Returns (raw)**: `ApiResult[TickerInsiderTrades, GetApiSymbolsByTickerInsiderTradesErrorBody]`
- **Error**: `GetApiSymbolsByTickerInsiderTradesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `Side1OrStr` | `alpha_ai/models/enums/side1.py` |
| `TickerInsiderTrades` | `alpha_ai/models/ticker_insider_trades.py` |
| `GetApiSymbolsByTickerInsiderTradesErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_insider_trades_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker_peers

- **Route**: `GET /api/symbols/{ticker}/peers/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker_peers(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path
- **Returns (parsed)**: `SymbolPeers`
- **Returns (raw)**: `ApiResult[SymbolPeers, GetApiSymbolsByTickerPeersErrorBody]`
- **Error**: `GetApiSymbolsByTickerPeersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `SymbolPeers` | `alpha_ai/models/symbol_peers.py` |
| `GetApiSymbolsByTickerPeersErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_peers_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_by_ticker_sentiment_summary

- **Route**: `GET /api/symbols/{ticker}/sentiment-summary/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_by_ticker_sentiment_summary(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — path
- **Returns (parsed)**: `TickerSentimentSummary`
- **Returns (raw)**: `ApiResult[TickerSentimentSummary, GetApiSymbolsByTickerSentimentSummaryErrorBody]`
- **Error**: `GetApiSymbolsByTickerSentimentSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `TickerSentimentSummary` | `alpha_ai/models/ticker_sentiment_summary.py` |
| `GetApiSymbolsByTickerSentimentSummaryErrorBody` | `alpha_ai/errors/get_api_symbols_by_ticker_sentiment_summary_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_directory

- **Route**: `GET /api/symbols/directory/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_directory(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SymbolDirectory`
- **Returns (raw)**: `ApiResult[SymbolDirectory, GetApiSymbolsDirectoryErrorBody]`
- **Error**: `GetApiSymbolsDirectoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SymbolDirectory` | `alpha_ai/models/symbol_directory.py` |
| `GetApiSymbolsDirectoryErrorBody` | `alpha_ai/errors/get_api_symbols_directory_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.symbols.get_api_symbols_sectors_by_slug

- **Route**: `GET /api/symbols/sectors/{slug}/`
- **Auth**: `api_key`
- **Signature**: `def get_api_symbols_sectors_by_slug(slug: str, *, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path · `page` — query
- **Returns (parsed)**: `SectorSymbols`
- **Returns (raw)**: `ApiResult[SectorSymbols, GetApiSymbolsSectorsBySlugErrorBody]`
- **Error**: `GetApiSymbolsSectorsBySlugErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SectorSymbols` | `alpha_ai/models/sector_symbols.py` |
| `GetApiSymbolsSectorsBySlugErrorBody` | `alpha_ai/errors/get_api_symbols_sectors_by_slug_error.py` |
| `Error` | `alpha_ai/models/error.py` |

