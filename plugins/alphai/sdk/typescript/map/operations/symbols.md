<!-- Generated file — do not edit; regenerated with the SDK. -->

# Symbols — operations

Accessor: `client.symbols` · Source: `src/resources/symbols.ts` · 10 operations · Request and error types: namespace `Symbols`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `alph-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiSymbols

- **Signature**: `getApiSymbols(request?: Symbols.GetApiSymbolsRequest, options?: RequestOptions): ApiPromise<Symbol[], Symbols.GetApiSymbolsError>`
- **Wire**: `GET /api/symbols/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Symbol[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Symbol` | `symbolSchema` | `src/models/symbol.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTicker

- **Signature**: `getApiSymbolsByTicker(request: Symbols.GetApiSymbolsByTickerRequest, options?: RequestOptions): ApiPromise<Symbol, Symbols.GetApiSymbolsByTickerError>`
- **Wire**: `GET /api/symbols/{ticker}/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Symbol`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Symbol` | `symbolSchema` | `src/models/symbol.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTickerEarnings

- **Signature**: `getApiSymbolsByTickerEarnings(request: Symbols.GetApiSymbolsByTickerEarningsRequest, options?: RequestOptions): ApiPromise<TickerEarningsHistory, Symbols.GetApiSymbolsByTickerEarningsError>`
- **Wire**: `GET /api/symbols/{ticker}/earnings/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TickerEarningsHistory`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerEarningsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerEarningsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TickerEarningsHistory` | `tickerEarningsHistorySchema` | `src/models/ticker-earnings-history.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTickerEarningsLatest

- **Signature**: `getApiSymbolsByTickerEarningsLatest(request: Symbols.GetApiSymbolsByTickerEarningsLatestRequest, options?: RequestOptions): ApiPromise<LatestEarningsPointer, Symbols.GetApiSymbolsByTickerEarningsLatestError>`
- **Wire**: `GET /api/symbols/{ticker}/earnings/latest/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LatestEarningsPointer`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerEarningsLatestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerEarningsLatestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LatestEarningsPointer` | `latestEarningsPointerSchema` | `src/models/latest-earnings-pointer.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTickerInsiderSummary

- **Signature**: `getApiSymbolsByTickerInsiderSummary(request: Symbols.GetApiSymbolsByTickerInsiderSummaryRequest, options?: RequestOptions): ApiPromise<TickerInsiderSummary, Symbols.GetApiSymbolsByTickerInsiderSummaryError>`
- **Wire**: `GET /api/symbols/{ticker}/insider-summary/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TickerInsiderSummary`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerInsiderSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [404] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerInsiderSummaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TickerInsiderSummary` | `tickerInsiderSummarySchema` | `src/models/ticker-insider-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTickerInsiderTrades

- **Signature**: `getApiSymbolsByTickerInsiderTrades(request: Symbols.GetApiSymbolsByTickerInsiderTradesRequest, options?: RequestOptions): ApiPromise<TickerInsiderTrades, Symbols.GetApiSymbolsByTickerInsiderTradesError>`
- **Wire**: `GET /api/symbols/{ticker}/insider-trades/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TickerInsiderTrades`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerInsiderTradesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [404] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerInsiderTradesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ticker` | `path` | — | `string` | yes | — |
| `side` | `query` | — | `Side1` | no | `Side1.All` |
| `cursor` | `query` | — | `string` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Side1` | `side1Schema` | `src/models/side1.ts` |
| `TickerInsiderTrades` | `tickerInsiderTradesSchema` | `src/models/ticker-insider-trades.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTickerPeers

- **Signature**: `getApiSymbolsByTickerPeers(request: Symbols.GetApiSymbolsByTickerPeersRequest, options?: RequestOptions): ApiPromise<SymbolPeers, Symbols.GetApiSymbolsByTickerPeersError>`
- **Wire**: `GET /api/symbols/{ticker}/peers/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SymbolPeers`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerPeersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerPeersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SymbolPeers` | `symbolPeersSchema` | `src/models/symbol-peers.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsByTickerSentimentSummary

- **Signature**: `getApiSymbolsByTickerSentimentSummary(request: Symbols.GetApiSymbolsByTickerSentimentSummaryRequest, options?: RequestOptions): ApiPromise<TickerSentimentSummary, Symbols.GetApiSymbolsByTickerSentimentSummaryError>`
- **Wire**: `GET /api/symbols/{ticker}/sentiment-summary/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TickerSentimentSummary`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsByTickerSentimentSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [404] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsByTickerSentimentSummaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TickerSentimentSummary` | `tickerSentimentSummarySchema` | `src/models/ticker-sentiment-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsDirectory

- **Signature**: `getApiSymbolsDirectory(options?: RequestOptions): ApiPromise<SymbolDirectory, Symbols.GetApiSymbolsDirectoryError>`
- **Wire**: `GET /api/symbols/directory/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SymbolDirectory`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsDirectoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SymbolDirectory` | `symbolDirectorySchema` | `src/models/symbol-directory.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiSymbolsSectorsBySlug

- **Signature**: `getApiSymbolsSectorsBySlug(request: Symbols.GetApiSymbolsSectorsBySlugRequest, options?: RequestOptions): ApiPromise<SectorSymbols, Symbols.GetApiSymbolsSectorsBySlugError>`
- **Wire**: `GET /api/symbols/sectors/{slug}/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SectorSymbols`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Symbols.GetApiSymbolsSectorsBySlugError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Symbols.GetApiSymbolsSectorsBySlugRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `slug` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectorSymbols` | `sectorSymbolsSchema` | `src/models/sector-symbols.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

