<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/Skribble/Api/Reports.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetReportsEtsi

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetReportsEtsi(GetReportsEtsiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetReportsEtsiError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReportsEtsiRequest` | `src/Skribble/Requests/Reports/GetReportsEtsiRequest.cs` |
| `GetReportsEtsiError` | `src/Skribble/Errors/GetReportsEtsiError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### GetSkribbleReport

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSkribbleReport(GetSkribbleReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `lang` ← `Lang`, `attachETSIReport` ← `AttachEtsiReport`, `timeZone` ← `TimeZone`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<GetSkribbleReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 406, 429, 500, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSkribbleReportRequest` | `src/Skribble/Requests/Reports/GetSkribbleReportRequest.cs` |
| `Lang` | `src/Skribble/Models/Enums/Lang.cs` |
| `GetSkribbleReportError` | `src/Skribble/Errors/GetSkribbleReportError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

