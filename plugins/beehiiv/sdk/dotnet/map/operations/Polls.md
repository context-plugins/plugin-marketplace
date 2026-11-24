<!-- Generated file — do not edit; regenerated with the SDK. -->

# Polls — operations

Accessor: `client.Polls` · Source: `src/Beehiiv/Api/Polls.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index15

- **Signature**: `Index15(Index15Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `page` ← `Page`, `order_by` ← `OrderBy`, `direction` ← `Direction`, `expand[]` ← `Expand`, `post_id` ← `PostId`
- **Returns**: `PollsListResponse`
- **Error**: `ApiException<Index15Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index15Request` | `src/Beehiiv/Requests/Polls/Index15Request.cs` |
| `PollOrderBy` | `src/Beehiiv/Models/Enums/PollOrderBy.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PollsExpandItems` | `src/Beehiiv/Models/Enums/PollsExpandItems.cs` |
| `PollsListResponse` | `src/Beehiiv/Models/PollsListResponse.cs` |
| `Index15Error` | `src/Beehiiv/Errors/Index15Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### ListResponses

- **Signature**: `ListResponses(ListResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PollId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `page` ← `Page`, `order_by` ← `OrderBy`, `direction` ← `Direction`, `expand[]` ← `Expand`, `post_id` ← `PostId`
- **Returns**: `PollResponsesListResponse`
- **Error**: `ApiException<ListResponsesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResponsesRequest` | `src/Beehiiv/Requests/Polls/ListResponsesRequest.cs` |
| `PollResponsesOrderBy` | `src/Beehiiv/Models/Enums/PollResponsesOrderBy.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PollResponsesExpandItems` | `src/Beehiiv/Models/Enums/PollResponsesExpandItems.cs` |
| `PollResponsesListResponse` | `src/Beehiiv/Models/PollResponsesListResponse.cs` |
| `ListResponsesError` | `src/Beehiiv/Errors/ListResponsesError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show11

- **Signature**: `Show11(Show11Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PollId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `PollShowResponse`
- **Error**: `ApiException<Show11Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show11Request` | `src/Beehiiv/Requests/Polls/Show11Request.cs` |
| `PollsExpandItems` | `src/Beehiiv/Models/Enums/PollsExpandItems.cs` |
| `PollShowResponse` | `src/Beehiiv/Models/PollShowResponse.cs` |
| `Show11Error` | `src/Beehiiv/Errors/Show11Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

