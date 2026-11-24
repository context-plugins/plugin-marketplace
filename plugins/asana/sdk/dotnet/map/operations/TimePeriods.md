<!-- Generated file — do not edit; regenerated with the SDK. -->

# TimePeriods — operations

Accessor: `client.TimePeriods` · Source: `src/Asana/Api/TimePeriods.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTimePeriod

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTimePeriod(GetTimePeriodRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TimePeriodGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TimePeriodsResponse`
- **Error**: `ApiException<GetTimePeriodError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTimePeriodRequest` | `src/Asana/Requests/TimePeriods/GetTimePeriodRequest.cs` |
| `TimePeriodsResponse` | `src/Asana/Models/TimePeriodsResponse.cs` |
| `GetTimePeriodError` | `src/Asana/Errors/GetTimePeriodError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTimePeriods

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTimePeriods(GetTimePeriodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Query params (wire ← C#)**: `workspace` ← `Workspace`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `start_on` ← `StartOn`, `end_on` ← `EndOn`
- **Returns**: `TimePeriodsResponse1`
- **Error**: `ApiException<GetTimePeriodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTimePeriodsRequest` | `src/Asana/Requests/TimePeriods/GetTimePeriodsRequest.cs` |
| `TimePeriodsResponse1` | `src/Asana/Models/TimePeriodsResponse1.cs` |
| `GetTimePeriodsError` | `src/Asana/Errors/GetTimePeriodsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

