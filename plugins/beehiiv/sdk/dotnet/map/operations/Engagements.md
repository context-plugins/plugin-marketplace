<!-- Generated file — do not edit; regenerated with the SDK. -->

# Engagements — operations

Accessor: `client.Engagements` · Source: `src/Beehiiv/Api/Engagements.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index12

- **Signature**: `Index12(Index12Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `number_of_days` ← `NumberOfDays`, `granularity` ← `Granularity`, `email_type` ← `EmailType`, `direction` ← `Direction`
- **Returns**: `PublicationEngagementsResponse`
- **Error**: `ApiException<Index12Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index12Request` | `src/Beehiiv/Requests/Engagements/Index12Request.cs` |
| `PublicationEngagementGranularity` | `src/Beehiiv/Models/Enums/PublicationEngagementGranularity.cs` |
| `PublicationEngagementEmailType` | `src/Beehiiv/Models/Enums/PublicationEngagementEmailType.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PublicationEngagementsResponse` | `src/Beehiiv/Models/PublicationEngagementsResponse.cs` |
| `Index12Error` | `src/Beehiiv/Errors/Index12Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

