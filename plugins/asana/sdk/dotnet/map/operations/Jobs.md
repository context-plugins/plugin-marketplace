<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/Asana/Api/Jobs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJob

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `JobsResponse`
- **Error**: `ApiException<GetJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobRequest` | `src/Asana/Requests/Jobs/GetJobRequest.cs` |
| `JobsResponse` | `src/Asana/Models/JobsResponse.cs` |
| `GetJobError` | `src/Asana/Errors/GetJobError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

