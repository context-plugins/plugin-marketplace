<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mapping — operations

Accessor: `client.Mapping` · Source: `Api/Mapping.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MapUrls

- **Signature**: `MapUrls(MapRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MapResponse`
- **Error**: `SdkException<MapUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMap402Error1(out Map402Error1)` [402] · `TryGetMap429Error1(out Map429Error1)` [429] · `TryGetMap500Error1(out Map500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MapRequest` | `Models/MapRequest.cs` |
| `MapResponse` | `Models/MapResponse.cs` |
| `MapUrlsError` | `Errors/MapUrlsError.cs` |
| `Map402Error1` | `Models/Map402Error1.cs` |
| `Map429Error1` | `Models/Map429Error1.cs` |
| `Map500Error1` | `Models/Map500Error1.cs` |

