<!-- Generated file — do not edit; regenerated with the SDK. -->

# Symbols — operations

Accessor: `client.Symbols` · Source: `src/AlphaAi/Api/Symbols.cs` · 10 operations

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
| `GetApiSymbolsRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsRequest.cs` |
| `Symbol` | `src/AlphaAi/Models/Symbol.cs` |
| `GetApiSymbolsError` | `src/AlphaAi/Errors/GetApiSymbolsError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsByTicker

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTicker(GetApiSymbolsByTickerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `Symbol`
- **Error**: `ApiException<GetApiSymbolsByTickerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerRequest.cs` |
| `Symbol` | `src/AlphaAi/Models/Symbol.cs` |
| `GetApiSymbolsByTickerError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsByTickerEarnings

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerEarnings(GetApiSymbolsByTickerEarningsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `TickerEarningsHistory`
- **Error**: `ApiException<GetApiSymbolsByTickerEarningsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerEarningsRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerEarningsRequest.cs` |
| `TickerEarningsHistory` | `src/AlphaAi/Models/TickerEarningsHistory.cs` |
| `GetApiSymbolsByTickerEarningsError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerEarningsError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsByTickerEarningsLatest

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerEarningsLatest(GetApiSymbolsByTickerEarningsLatestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `LatestEarningsPointer`
- **Error**: `ApiException<GetApiSymbolsByTickerEarningsLatestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerEarningsLatestRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerEarningsLatestRequest.cs` |
| `LatestEarningsPointer` | `src/AlphaAi/Models/LatestEarningsPointer.cs` |
| `GetApiSymbolsByTickerEarningsLatestError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerEarningsLatestError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsByTickerInsiderSummary

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerInsiderSummary(GetApiSymbolsByTickerInsiderSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `TickerInsiderSummary`
- **Error**: `ApiException<GetApiSymbolsByTickerInsiderSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerInsiderSummaryRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerInsiderSummaryRequest.cs` |
| `TickerInsiderSummary` | `src/AlphaAi/Models/TickerInsiderSummary.cs` |
| `GetApiSymbolsByTickerInsiderSummaryError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerInsiderSummaryError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

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
| `GetApiSymbolsByTickerInsiderTradesRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerInsiderTradesRequest.cs` |
| `Side1` | `src/AlphaAi/Models/Enums/Side1.cs` |
| `TickerInsiderTrades` | `src/AlphaAi/Models/TickerInsiderTrades.cs` |
| `GetApiSymbolsByTickerInsiderTradesError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerInsiderTradesError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsByTickerPeers

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerPeers(GetApiSymbolsByTickerPeersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `SymbolPeers`
- **Error**: `ApiException<GetApiSymbolsByTickerPeersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerPeersRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerPeersRequest.cs` |
| `SymbolPeers` | `src/AlphaAi/Models/SymbolPeers.cs` |
| `GetApiSymbolsByTickerPeersError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerPeersError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsByTickerSentimentSummary

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsByTickerSentimentSummary(GetApiSymbolsByTickerSentimentSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Returns**: `TickerSentimentSummary`
- **Error**: `ApiException<GetApiSymbolsByTickerSentimentSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiSymbolsByTickerSentimentSummaryRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsByTickerSentimentSummaryRequest.cs` |
| `TickerSentimentSummary` | `src/AlphaAi/Models/TickerSentimentSummary.cs` |
| `GetApiSymbolsByTickerSentimentSummaryError` | `src/AlphaAi/Errors/GetApiSymbolsByTickerSentimentSummaryError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiSymbolsDirectory

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiSymbolsDirectory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SymbolDirectory`
- **Error**: `ApiException<GetApiSymbolsDirectoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SymbolDirectory` | `src/AlphaAi/Models/SymbolDirectory.cs` |
| `GetApiSymbolsDirectoryError` | `src/AlphaAi/Errors/GetApiSymbolsDirectoryError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

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
| `GetApiSymbolsSectorsBySlugRequest` | `src/AlphaAi/Requests/Symbols/GetApiSymbolsSectorsBySlugRequest.cs` |
| `SectorSymbols` | `src/AlphaAi/Models/SectorSymbols.cs` |
| `GetApiSymbolsSectorsBySlugError` | `src/AlphaAi/Errors/GetApiSymbolsSectorsBySlugError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

