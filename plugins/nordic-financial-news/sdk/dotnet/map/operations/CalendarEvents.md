<!-- Generated file — do not edit; regenerated with the SDK. -->

# CalendarEvents — operations

Accessor: `client.CalendarEvents` · Source: `src/NordicFinancialNews/Api/CalendarEvents.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1CalendarEvents

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CalendarEvents(GetApiV1CalendarEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `updated_after` ← `UpdatedAfter`, `ticker` ← `Ticker`, `company` ← `Company`, `country` ← `Country`, `market` ← `Market`, `domicile` ← `Domicile`, `exchange` ← `Exchange`, `index` ← `Index`, `sector` ← `Sector`, `event_type` ← `EventType`, `status` ← `Status`, `scheduled_after` ← `ScheduledAfter`, `scheduled_before` ← `ScheduledBefore`, `watchlist` ← `Watchlist`
- **Returns**: `ApiV1CalendarEventsResponse`
- **Error**: `ApiException<GetApiV1CalendarEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CalendarEventsRequest` | `src/NordicFinancialNews/Requests/CalendarEvents/GetApiV1CalendarEventsRequest.cs` |
| `EventType1` | `src/NordicFinancialNews/Models/Enums/EventType1.cs` |
| `Status1` | `src/NordicFinancialNews/Models/Enums/Status1.cs` |
| `ApiV1CalendarEventsResponse` | `src/NordicFinancialNews/Models/ApiV1CalendarEventsResponse.cs` |
| `GetApiV1CalendarEventsError` | `src/NordicFinancialNews/Errors/GetApiV1CalendarEventsError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1CalendarEventsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CalendarEventsById(GetApiV1CalendarEventsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CalendarEventsResponse1`
- **Error**: `ApiException<GetApiV1CalendarEventsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CalendarEventsByIdRequest` | `src/NordicFinancialNews/Requests/CalendarEvents/GetApiV1CalendarEventsByIdRequest.cs` |
| `ApiV1CalendarEventsResponse1` | `src/NordicFinancialNews/Models/ApiV1CalendarEventsResponse1.cs` |
| `GetApiV1CalendarEventsByIdError` | `src/NordicFinancialNews/Errors/GetApiV1CalendarEventsByIdError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

