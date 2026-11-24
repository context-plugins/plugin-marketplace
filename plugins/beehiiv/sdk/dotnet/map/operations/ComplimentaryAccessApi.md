<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComplimentaryAccessApi — operations

Accessor: `client.ComplimentaryAccessApi` · Source: `src/Beehiiv/Api/ComplimentaryAccessApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index8

- **Signature**: `Index8(Index8Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `IndexComplimentaryAccessResponse`
- **Error**: `ApiException<Index8Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index8Request` | `src/Beehiiv/Requests/ComplimentaryAccessApi/Index8Request.cs` |
| `IndexComplimentaryAccessResponse` | `src/Beehiiv/Models/IndexComplimentaryAccessResponse.cs` |
| `Index8Error` | `src/Beehiiv/Errors/Index8Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show5

- **Signature**: `Show5(Show5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `ComplimentaryAccessId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `ComplimentaryAccessResponse`
- **Error**: `ApiException<Show5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show5Request` | `src/Beehiiv/Requests/ComplimentaryAccessApi/Show5Request.cs` |
| `ComplimentaryAccessResponse` | `src/Beehiiv/Models/ComplimentaryAccessResponse.cs` |
| `Show5Error` | `src/Beehiiv/Errors/Show5Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

