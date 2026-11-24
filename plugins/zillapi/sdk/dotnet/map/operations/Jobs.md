<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/Zillapi/Api/Jobs.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJob

- **Auth**: `options.BearerAuth`
- **Signature**: `GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `V1JobsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetJobRequest` | `src/Zillapi/Requests/Jobs/GetJobRequest.cs` |
| `V1JobsResponse1` | `src/Zillapi/Models/V1JobsResponse1.cs` |

### GetJobResults

- **Auth**: `options.BearerAuth`
- **Signature**: `GetJobResults(GetJobResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `format` ← `Format`
- **Returns**: `V1JobsResultsResponse`
- **Error**: `ApiException<GetJobResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobResultsRequest` | `src/Zillapi/Requests/Jobs/GetJobResultsRequest.cs` |
| `Format` | `src/Zillapi/Models/Enums/Format.cs` |
| `V1JobsResultsResponse` | `src/Zillapi/Models/V1JobsResultsResponse.cs` |
| `GetJobResultsError` | `src/Zillapi/Errors/GetJobResultsError.cs` |
| `ApiErrorModel` | `src/Zillapi/Models/ApiErrorModel.cs` |

### ListJobs

- **Auth**: `options.BearerAuth`
- **Signature**: `ListJobs(ListJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `type` ← `Type`, `since` ← `Since`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `V1JobsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListJobsRequest` | `src/Zillapi/Requests/Jobs/ListJobsRequest.cs` |
| `StatusZillapiZillowPropertyDataJobsApi` | `src/Zillapi/Models/Enums/StatusZillapiZillowPropertyDataJobsApi.cs` |
| `TypeEnum` | `src/Zillapi/Models/Enums/TypeEnum.cs` |
| `V1JobsResponse` | `src/Zillapi/Models/V1JobsResponse.cs` |

