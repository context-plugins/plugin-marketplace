<!-- Generated file — do not edit; regenerated with the SDK. -->

# Radar — operations

Accessor: `client.Radar` · Source: `src/AlphaAi/Api/Radar.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRadarSnapshot

- **Auth**: `options.ApiKey`
- **Signature**: `GetRadarSnapshot(GetRadarSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `window` ← `Window`, `scope` ← `Scope`, `market` ← `Market`, `ticker` ← `Ticker`, `tickers` ← `Tickers`, `search` ← `Search`, `sort` ← `Sort`, `order` ← `Order`, `sentiment` ← `Sentiment`, `min_z` ← `MinZ`, `limit` ← `Limit`, `offset` ← `Offset`, `cursor` ← `Cursor`
- **Returns**: `SnapshotPreviewDto`
- **Error**: `ApiException<GetRadarSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRadarSnapshotRequest` | `src/AlphaAi/Requests/Radar/GetRadarSnapshotRequest.cs` |
| `Window` | `src/AlphaAi/Models/Enums/Window.cs` |
| `Scope` | `src/AlphaAi/Models/Enums/Scope.cs` |
| `Market` | `src/AlphaAi/Models/Enums/Market.cs` |
| `SortAlphAiRestRadarApi` | `src/AlphaAi/Models/Enums/SortAlphAiRestRadarApi.cs` |
| `Order` | `src/AlphaAi/Models/Enums/Order.cs` |
| `SentimentAlphAiRestRadarApi` | `src/AlphaAi/Models/Enums/SentimentAlphAiRestRadarApi.cs` |
| `MinZ` | `src/AlphaAi/Models/AnyOf/MinZ.cs` |
| `SnapshotPreviewDto` | `src/AlphaAi/Models/SnapshotPreviewDto.cs` |
| `GetRadarSnapshotError` | `src/AlphaAi/Errors/GetRadarSnapshotError.cs` |

