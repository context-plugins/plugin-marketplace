<!-- Generated file — do not edit; regenerated with the SDK. -->

# Report — operations

Accessor: `client.Report` · Source: `src/Skribble/Api/Report.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetActivitiesSignaturesByBusiness

- **Server group**: `DefaultSkribbleReportApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetActivitiesSignaturesByBusiness(GetActivitiesSignaturesByBusinessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `end_date` ← `EndDate`, `page` ← `Page`, `size` ← `Size`, `sort` ← `Sort`
- **Returns**: `ActivitiesSignaturesByBusinessResponse`
- **Error**: `ApiException<GetActivitiesSignaturesByBusinessError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetActivitiesSignaturesByBusinessRequest` | `src/Skribble/Requests/Report/GetActivitiesSignaturesByBusinessRequest.cs` |
| `Sort` | `src/Skribble/Models/Enums/Sort.cs` |
| `ActivitiesSignaturesByBusinessResponse` | `src/Skribble/Models/ActivitiesSignaturesByBusinessResponse.cs` |
| `GetActivitiesSignaturesByBusinessError` | `src/Skribble/Errors/GetActivitiesSignaturesByBusinessError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

