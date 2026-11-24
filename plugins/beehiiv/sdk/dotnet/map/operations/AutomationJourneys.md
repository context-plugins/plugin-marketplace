<!-- Generated file — do not edit; regenerated with the SDK. -->

# AutomationJourneys — operations

Accessor: `client.AutomationJourneys` · Source: `src/Beehiiv/Api/AutomationJourneys.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create2

- **Signature**: `Create2(Create2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `AutomationId`, `Authorization`
- **Returns**: `AutomationJourneysResponse`
- **Error**: `ApiException<Create2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create2Request` | `src/Beehiiv/Requests/AutomationJourneys/Create2Request.cs` |
| `PublicationsAutomationsJourneysRequest` | `src/Beehiiv/Models/PublicationsAutomationsJourneysRequest.cs` |
| `AutomationJourneysResponse` | `src/Beehiiv/Models/AutomationJourneysResponse.cs` |
| `Create2Error` | `src/Beehiiv/Errors/Create2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index5

- **Signature**: `Index5(Index5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `AutomationId`, `Authorization`
- **Query params (wire ← C#)**: `status` ← `Status`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `AutomationJourneysIndexResponse`
- **Error**: `ApiException<Index5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index5Request` | `src/Beehiiv/Requests/AutomationJourneys/Index5Request.cs` |
| `AutomationJourneysGetRequestStatus` | `src/Beehiiv/Models/Enums/AutomationJourneysGetRequestStatus.cs` |
| `AutomationJourneysIndexResponse` | `src/Beehiiv/Models/AutomationJourneysIndexResponse.cs` |
| `Index5Error` | `src/Beehiiv/Errors/Index5Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show2

- **Signature**: `Show2(Show2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `AutomationId`, `AutomationJourneyId`, `Authorization`
- **Returns**: `AutomationJourneysResponse`
- **Error**: `ApiException<Show2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show2Request` | `src/Beehiiv/Requests/AutomationJourneys/Show2Request.cs` |
| `AutomationJourneysResponse` | `src/Beehiiv/Models/AutomationJourneysResponse.cs` |
| `Show2Error` | `src/Beehiiv/Errors/Show2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

