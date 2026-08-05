# PlacesApi — operations

Accessor: `client.PlacesApi` · Source: `Api/PlacesApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPlaces
- **HTTP**: `GET /places` (Default1 (api))
- **Notes**: Returns points of interest based on specified location and filters. You can filter places by category, conditions (e.g., wheelchair accessible), and geometry (bounding box, circle, etc.).
- **Signature**: `GetPlaces(string apiKey, string categories, string? conditions, string? filter, string? bias, int? limit, int? offset, string? lang, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`conditions` … `name`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `apiKey` ← `apiKey`, `categories` ← `categories`, `conditions` ← `conditions`, `filter` ← `filter`, `bias` ← `bias`, `limit` ← `limit`, `offset` ← `offset`, `lang` ← `lang`, `name` ← `name`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetPlacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
