<!-- Generated file — do not edit; regenerated with the SDK. -->

# Publications — operations

Accessor: `client.Publications` · Source: `src/Beehiiv/Api/Publications.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index18

- **Signature**: `Index18(Index18Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `expand` ← `Expand`, `limit` ← `Limit`, `page` ← `Page`, `direction` ← `Direction`, `order_by` ← `OrderBy`
- **Returns**: `PublicationsListResponse`
- **Error**: `ApiException<Index18Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index18Request` | `src/Beehiiv/Requests/Publications/Index18Request.cs` |
| `PublicationsRequestExpandItem` | `src/Beehiiv/Models/Enums/PublicationsRequestExpandItem.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PublicationsListRequestOrderBy` | `src/Beehiiv/Models/Enums/PublicationsListRequestOrderBy.cs` |
| `PublicationsListResponse` | `src/Beehiiv/Models/PublicationsListResponse.cs` |
| `Index18Error` | `src/Beehiiv/Errors/Index18Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show13

- **Signature**: `Show13(Show13Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `expand` ← `Expand`
- **Returns**: `PublicationsGetResponse`
- **Error**: `ApiException<Show13Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show13Request` | `src/Beehiiv/Requests/Publications/Show13Request.cs` |
| `PublicationsGetRequestExpandItem` | `src/Beehiiv/Models/Enums/PublicationsGetRequestExpandItem.cs` |
| `PublicationsGetResponse` | `src/Beehiiv/Models/PublicationsGetResponse.cs` |
| `Show13Error` | `src/Beehiiv/Errors/Show13Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

