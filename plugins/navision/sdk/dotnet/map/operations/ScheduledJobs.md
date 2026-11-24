<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduledJobs — operations

Accessor: `client.ScheduledJobs` · Source: `src/MicrosoftDynamicsNav/Api/ScheduledJobs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListScheduledJobs

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListScheduledJobs(ListScheduledJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiScheduledJobsResponse`
- **Error**: `ApiException<ListScheduledJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListScheduledJobsRequest` | `src/MicrosoftDynamicsNav/Requests/ScheduledJobs/ListScheduledJobsRequest.cs` |
| `CompaniesApiScheduledJobsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiScheduledJobsResponse.cs` |
| `ListScheduledJobsError` | `src/MicrosoftDynamicsNav/Errors/ListScheduledJobsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

