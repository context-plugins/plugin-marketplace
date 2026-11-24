<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Jid/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchBusinesses

- **Signature**: `SearchBusinesses(SearchBusinessesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `country` ← `Country`
- **Returns**: `SearchResponse`
- **Error**: `ApiException<SearchBusinessesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchBusinessesRequest` | `src/Jid/Requests/Search/SearchBusinessesRequest.cs` |
| `SearchResponse` | `src/Jid/Models/SearchResponse.cs` |
| `SearchBusinessesError` | `src/Jid/Errors/SearchBusinessesError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

