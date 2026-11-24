<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tiers — operations

Accessor: `client.Tiers` · Source: `src/Beehiiv/Api/Tiers.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create12

- **Signature**: `Create12(Create12Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `TierResponse`
- **Error**: `ApiException<Create12Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create12Request` | `src/Beehiiv/Requests/Tiers/Create12Request.cs` |
| `PublicationsTiersRequest` | `src/Beehiiv/Models/PublicationsTiersRequest.cs` |
| `TierResponse` | `src/Beehiiv/Models/TierResponse.cs` |
| `Create12Error` | `src/Beehiiv/Errors/Create12Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index21

- **Signature**: `Index21(Index21Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`, `limit` ← `Limit`, `page` ← `Page`, `direction` ← `Direction`
- **Returns**: `IndexTiersResponse`
- **Error**: `ApiException<Index21Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index21Request` | `src/Beehiiv/Requests/Tiers/Index21Request.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `IndexTiersResponse` | `src/Beehiiv/Models/IndexTiersResponse.cs` |
| `Index21Error` | `src/Beehiiv/Errors/Index21Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Patch4

- **Signature**: `Patch4(Patch4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `TierId`, `Authorization`
- **Returns**: `TierResponse`
- **Error**: `ApiException<Patch4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Patch4Request` | `src/Beehiiv/Requests/Tiers/Patch4Request.cs` |
| `PublicationsTiersRequest1` | `src/Beehiiv/Models/PublicationsTiersRequest1.cs` |
| `TierResponse` | `src/Beehiiv/Models/TierResponse.cs` |
| `Patch4Error` | `src/Beehiiv/Errors/Patch4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Put4

- **Signature**: `Put4(Put4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `TierId`, `Authorization`
- **Returns**: `TierResponse`
- **Error**: `ApiException<Put4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Put4Request` | `src/Beehiiv/Requests/Tiers/Put4Request.cs` |
| `PublicationsTiersRequest1` | `src/Beehiiv/Models/PublicationsTiersRequest1.cs` |
| `TierResponse` | `src/Beehiiv/Models/TierResponse.cs` |
| `Put4Error` | `src/Beehiiv/Errors/Put4Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show16

- **Signature**: `Show16(Show16Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `TierId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `TierResponse`
- **Error**: `ApiException<Show16Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show16Request` | `src/Beehiiv/Requests/Tiers/Show16Request.cs` |
| `TierResponse` | `src/Beehiiv/Models/TierResponse.cs` |
| `Show16Error` | `src/Beehiiv/Errors/Show16Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

