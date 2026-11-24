<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.Calendar` · Source: `src/AlphaAi/Api/Calendar.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiCalendar

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiCalendar(GetApiCalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from_date` ← `FromDate`, `to_date` ← `ToDate`, `event_key` ← `EventKey`, `importance` ← `Importance`, `country` ← `Country`
- **Returns**: `CalendarEvents`
- **Error**: `ApiException<GetApiCalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiCalendarRequest` | `src/AlphaAi/Requests/Calendar/GetApiCalendarRequest.cs` |
| `Importance` | `src/AlphaAi/Models/Enums/Importance.cs` |
| `Country` | `src/AlphaAi/Models/Enums/Country.cs` |
| `CalendarEvents` | `src/AlphaAi/Models/CalendarEvents.cs` |
| `GetApiCalendarError` | `src/AlphaAi/Errors/GetApiCalendarError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

