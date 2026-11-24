<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.Calendar` · Source: `src/ApiVerve/Api/Calendar.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Agecalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Agecalculator(AgecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Dob`
- **Query params (wire ← C#)**: `dob` ← `Dob`, `timezone` ← `Timezone`
- **Returns**: `V1AgecalculatorResponse`
- **Error**: `ApiException<AgecalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AgecalculatorRequest` | `src/ApiVerve/Requests/Calendar/AgecalculatorRequest.cs` |
| `V1AgecalculatorResponse` | `src/ApiVerve/Models/V1AgecalculatorResponse.cs` |
| `AgecalculatorError` | `src/ApiVerve/Errors/AgecalculatorError.cs` |

### Datecalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Datecalculator(DatecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Start`, `End`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`
- **Returns**: `V1DatecalculatorResponse`
- **Error**: `ApiException<DatecalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatecalculatorRequest` | `src/ApiVerve/Requests/Calendar/DatecalculatorRequest.cs` |
| `V1DatecalculatorResponse` | `src/ApiVerve/Models/V1DatecalculatorResponse.cs` |
| `DatecalculatorError` | `src/ApiVerve/Errors/DatecalculatorError.cs` |

### Liturgicalcalendar

- **Auth**: `options.ApiKey`
- **Signature**: `Liturgicalcalendar(LiturgicalcalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `month` ← `Month`, `year` ← `Year`
- **Returns**: `V1LiturgicalcalendarResponse`
- **Error**: `ApiException<LiturgicalcalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LiturgicalcalendarRequest` | `src/ApiVerve/Requests/Calendar/LiturgicalcalendarRequest.cs` |
| `V1LiturgicalcalendarResponse` | `src/ApiVerve/Models/V1LiturgicalcalendarResponse.cs` |
| `LiturgicalcalendarError` | `src/ApiVerve/Errors/LiturgicalcalendarError.cs` |

### Workingdays

- **Auth**: `options.ApiKey`
- **Signature**: `Workingdays(WorkingdaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `month` ← `Month`, `year` ← `Year`
- **Returns**: `V1WorkingdaysResponse`
- **Error**: `ApiException<WorkingdaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WorkingdaysRequest` | `src/ApiVerve/Requests/Calendar/WorkingdaysRequest.cs` |
| `V1WorkingdaysResponse` | `src/ApiVerve/Models/V1WorkingdaysResponse.cs` |
| `WorkingdaysError` | `src/ApiVerve/Errors/WorkingdaysError.cs` |

### Worldholidays

- **Auth**: `options.ApiKey`
- **Signature**: `Worldholidays(WorldholidaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`
- **Returns**: `V1WorldholidaysResponse`
- **Error**: `ApiException<WorldholidaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WorldholidaysRequest` | `src/ApiVerve/Requests/Calendar/WorldholidaysRequest.cs` |
| `V1WorldholidaysResponse` | `src/ApiVerve/Models/V1WorldholidaysResponse.cs` |
| `WorldholidaysError` | `src/ApiVerve/Errors/WorldholidaysError.cs` |

