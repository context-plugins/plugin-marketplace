<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostTemplates — operations

Accessor: `client.PostTemplates` · Source: `src/Beehiiv/Api/PostTemplates.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index16

- **Signature**: `Index16(Index16Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`, `order` ← `Order`, `order_by` ← `OrderBy`
- **Returns**: `PostTemplatesGetResponse`
- **Error**: `ApiException<Index16Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index16Request` | `src/Beehiiv/Requests/PostTemplates/Index16Request.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PostTemplatesGetResponse` | `src/Beehiiv/Models/PostTemplatesGetResponse.cs` |
| `Index16Error` | `src/Beehiiv/Errors/Index16Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

