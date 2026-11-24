<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConditionSets — operations

Accessor: `client.ConditionSets` · Source: `src/Beehiiv/Api/ConditionSets.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index9

- **Signature**: `Index9(Index9Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `page` ← `Page`, `purpose` ← `Purpose`
- **Returns**: `ConditionSetsListResponse`
- **Error**: `ApiException<Index9Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index9Request` | `src/Beehiiv/Requests/ConditionSets/Index9Request.cs` |
| `ConditionSetPurpose` | `src/Beehiiv/Models/Enums/ConditionSetPurpose.cs` |
| `ConditionSetsListResponse` | `src/Beehiiv/Models/ConditionSetsListResponse.cs` |
| `Index9Error` | `src/Beehiiv/Errors/Index9Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show6

- **Signature**: `Show6(Show6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `ConditionSetId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `ConditionSetShowResponse`
- **Error**: `ApiException<Show6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show6Request` | `src/Beehiiv/Requests/ConditionSets/Show6Request.cs` |
| `ConditionSetShowExpandItems` | `src/Beehiiv/Models/Enums/ConditionSetShowExpandItems.cs` |
| `ConditionSetShowResponse` | `src/Beehiiv/Models/ConditionSetShowResponse.cs` |
| `Show6Error` | `src/Beehiiv/Errors/Show6Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

