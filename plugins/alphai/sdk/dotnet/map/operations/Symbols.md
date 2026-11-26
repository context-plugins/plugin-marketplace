<!-- Generated file — do not edit; regenerated with the SDK. -->

# Symbols — operations

Accessor: `client.Symbols` · Source: `src/AlphAi/Api/Symbols.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiSymbols

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbols(GetApiSymbolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `search` ← `Search`
- **Returns**: `IReadOnlyList<Symbol>`
- **Error**: `ApiException<GetApiSymbolsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsRequest.cs` |
| `Symbol` | `src/AlphAi/Models/Symbol.cs` |
| `GetApiSymbolsError` | `src/AlphAi/Errors/GetApiSymbolsError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTicker

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTicker(GetApiSymbolsByTickerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `Symbol`
- **Error**: `ApiException<GetApiSymbolsByTickerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerRequest.cs` |
| `Symbol` | `src/AlphAi/Models/Symbol.cs` |
| `GetApiSymbolsByTickerError` | `src/AlphAi/Errors/GetApiSymbolsByTickerError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTickerEarnings

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerEarnings(GetApiSymbolsByTickerEarningsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `TickerEarningsHistory`
- **Error**: `ApiException<GetApiSymbolsByTickerEarningsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerEarningsRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerEarningsRequest.cs` |
| `TickerEarningsHistory` | `src/AlphAi/Models/TickerEarningsHistory.cs` |
| `GetApiSymbolsByTickerEarningsError` | `src/AlphAi/Errors/GetApiSymbolsByTickerEarningsError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTickerEarningsLatest

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerEarningsLatest(GetApiSymbolsByTickerEarningsLatestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `LatestEarningsPointer`
- **Error**: `ApiException<GetApiSymbolsByTickerEarningsLatestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerEarningsLatestRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerEarningsLatestRequest.cs` |
| `LatestEarningsPointer` | `src/AlphAi/Models/LatestEarningsPointer.cs` |
| `GetApiSymbolsByTickerEarningsLatestError` | `src/AlphAi/Errors/GetApiSymbolsByTickerEarningsLatestError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTickerInsiderSummary

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerInsiderSummary(GetApiSymbolsByTickerInsiderSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `TickerInsiderSummary`
- **Error**: `ApiException<GetApiSymbolsByTickerInsiderSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerInsiderSummaryRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerInsiderSummaryRequest.cs` |
| `TickerInsiderSummary` | `src/AlphAi/Models/TickerInsiderSummary.cs` |
| `GetApiSymbolsByTickerInsiderSummaryError` | `src/AlphAi/Errors/GetApiSymbolsByTickerInsiderSummaryError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTickerInsiderTrades

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerInsiderTrades(GetApiSymbolsByTickerInsiderTradesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `side` ← `Side`, `cursor` ← `Cursor`, `page_size` ← `PageSize`
- **Returns**: `TickerInsiderTrades`
- **Error**: `ApiException<GetApiSymbolsByTickerInsiderTradesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerInsiderTradesRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerInsiderTradesRequest.cs` |
| `Side1` | `src/AlphAi/Models/Enums/Side1.cs` |
| `TickerInsiderTrades` | `src/AlphAi/Models/TickerInsiderTrades.cs` |
| `GetApiSymbolsByTickerInsiderTradesError` | `src/AlphAi/Errors/GetApiSymbolsByTickerInsiderTradesError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTickerPeers

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerPeers(GetApiSymbolsByTickerPeersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `SymbolPeers`
- **Error**: `ApiException<GetApiSymbolsByTickerPeersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerPeersRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerPeersRequest.cs` |
| `SymbolPeers` | `src/AlphAi/Models/SymbolPeers.cs` |
| `GetApiSymbolsByTickerPeersError` | `src/AlphAi/Errors/GetApiSymbolsByTickerPeersError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsByTickerSentimentSummary

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerSentimentSummary(GetApiSymbolsByTickerSentimentSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `TickerSentimentSummary`
- **Error**: `ApiException<GetApiSymbolsByTickerSentimentSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerSentimentSummaryRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerSentimentSummaryRequest.cs` |
| `TickerSentimentSummary` | `src/AlphAi/Models/TickerSentimentSummary.cs` |
| `GetApiSymbolsByTickerSentimentSummaryError` | `src/AlphAi/Errors/GetApiSymbolsByTickerSentimentSummaryError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsDirectory

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsDirectory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SymbolDirectory`
- **Error**: `ApiException<GetApiSymbolsDirectoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SymbolDirectory` | `src/AlphAi/Models/SymbolDirectory.cs` |
| `GetApiSymbolsDirectoryError` | `src/AlphAi/Errors/GetApiSymbolsDirectoryError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiSymbolsSectorsBySlug

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsSectorsBySlug(GetApiSymbolsSectorsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Query params (wire ← C#)**: `page` ← `Page`
- **Returns**: `SectorSymbols`
- **Error**: `ApiException<GetApiSymbolsSectorsBySlugError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsSectorsBySlugRequest` | `src/AlphAi/Requests/Symbols/GetApiSymbolsSectorsBySlugRequest.cs` |
| `SectorSymbols` | `src/AlphAi/Models/SectorSymbols.cs` |
| `GetApiSymbolsSectorsBySlugError` | `src/AlphAi/Errors/GetApiSymbolsSectorsBySlugError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

