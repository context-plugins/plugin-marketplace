<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authors — operations

Accessor: `client.Authors` · Source: `src/Beehiiv/Api/Authors.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index4

- **Signature**: `Index4(Index4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`, `name` ← `Name`
- **Returns**: `AuthorsListResponse`
- **Error**: `ApiException<Index4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index4Request` | `src/Beehiiv/Requests/Authors/Index4Request.cs` |
| `AuthorsListResponse` | `src/Beehiiv/Models/AuthorsListResponse.cs` |
| `Index4Error` | `src/Beehiiv/Errors/Index4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show

- **Signature**: `Show(ShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `AuthorId`, `Authorization`
- **Returns**: `AuthorsGetResponse`
- **Error**: `ApiException<ShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShowRequest` | `src/Beehiiv/Requests/Authors/ShowRequest.cs` |
| `AuthorsGetResponse` | `src/Beehiiv/Models/AuthorsGetResponse.cs` |
| `ShowError` | `src/Beehiiv/Errors/ShowError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

