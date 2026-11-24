<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudTalentSolutionClient — operations

Accessor: `client` · Source: `src/GoogleCloudTalentSolution/GoogleCloudTalentSolutionClient.cs` · 23 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### JobsProjectsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsOperationsGet(JobsProjectsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<JobsProjectsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsOperationsGetRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudTalentSolution/Models/Operation.cs` |
| `JobsProjectsOperationsGetError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsClientEventsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsClientEventsCreate(JobsProjectsTenantsClientEventsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `ClientEvent`
- **Error**: `ApiException<JobsProjectsTenantsClientEventsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsClientEventsCreateRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsClientEventsCreateRequest.cs` |
| `ClientEvent` | `src/GoogleCloudTalentSolution/Models/ClientEvent.cs` |
| `JobsProjectsTenantsClientEventsCreateError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsClientEventsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCompaniesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCompaniesCreate(JobsProjectsTenantsCompaniesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `Company`
- **Error**: `ApiException<JobsProjectsTenantsCompaniesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompaniesCreateRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesCreateRequest.cs` |
| `Company` | `src/GoogleCloudTalentSolution/Models/Company.cs` |
| `JobsProjectsTenantsCompaniesCreateError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCompaniesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCompaniesDelete(JobsProjectsTenantsCompaniesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `CompaniesId`
- **Returns**: `object`
- **Error**: `ApiException<JobsProjectsTenantsCompaniesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompaniesDeleteRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesDeleteRequest.cs` |
| `JobsProjectsTenantsCompaniesDeleteError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCompaniesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCompaniesGet(JobsProjectsTenantsCompaniesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `CompaniesId`
- **Returns**: `Company`
- **Error**: `ApiException<JobsProjectsTenantsCompaniesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompaniesGetRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesGetRequest.cs` |
| `Company` | `src/GoogleCloudTalentSolution/Models/Company.cs` |
| `JobsProjectsTenantsCompaniesGetError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCompaniesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCompaniesList(JobsProjectsTenantsCompaniesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `requireOpenJobs` ← `RequireOpenJobs`
- **Returns**: `ListCompaniesResponse`
- **Error**: `ApiException<JobsProjectsTenantsCompaniesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompaniesListRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesListRequest.cs` |
| `ListCompaniesResponse` | `src/GoogleCloudTalentSolution/Models/ListCompaniesResponse.cs` |
| `JobsProjectsTenantsCompaniesListError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCompaniesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCompaniesPatch(JobsProjectsTenantsCompaniesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `CompaniesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `Company`
- **Error**: `ApiException<JobsProjectsTenantsCompaniesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompaniesPatchRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesPatchRequest.cs` |
| `Company` | `src/GoogleCloudTalentSolution/Models/Company.cs` |
| `JobsProjectsTenantsCompaniesPatchError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCompleteQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCompleteQuery(JobsProjectsTenantsCompleteQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`
- **Query params (wire ← C#)**: `company` ← `Company`, `languageCodes` ← `LanguageCodes`, `pageSize` ← `PageSize`, `query` ← `Query`, `scope` ← `Scope`, `type` ← `Type`
- **Returns**: `CompleteQueryResponse`
- **Error**: `ApiException<JobsProjectsTenantsCompleteQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompleteQueryRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompleteQueryRequest.cs` |
| `Scope` | `src/GoogleCloudTalentSolution/Models/Enums/Scope.cs` |
| `Type4` | `src/GoogleCloudTalentSolution/Models/Enums/Type4.cs` |
| `CompleteQueryResponse` | `src/GoogleCloudTalentSolution/Models/CompleteQueryResponse.cs` |
| `JobsProjectsTenantsCompleteQueryError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompleteQueryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsCreate(JobsProjectsTenantsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `Body`
- **Returns**: `Tenant`
- **Error**: `ApiException<JobsProjectsTenantsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCreateRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCreateRequest.cs` |
| `Tenant` | `src/GoogleCloudTalentSolution/Models/Tenant.cs` |
| `JobsProjectsTenantsCreateError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsDelete(JobsProjectsTenantsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`
- **Returns**: `object`
- **Error**: `ApiException<JobsProjectsTenantsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsDeleteRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsDeleteRequest.cs` |
| `JobsProjectsTenantsDeleteError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsGet(JobsProjectsTenantsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`
- **Returns**: `Tenant`
- **Error**: `ApiException<JobsProjectsTenantsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsGetRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsGetRequest.cs` |
| `Tenant` | `src/GoogleCloudTalentSolution/Models/Tenant.cs` |
| `JobsProjectsTenantsGetError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsBatchCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsBatchCreate(JobsProjectsTenantsJobsBatchCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<JobsProjectsTenantsJobsBatchCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsBatchCreateRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsBatchCreateRequest.cs` |
| `BatchCreateJobsRequest` | `src/GoogleCloudTalentSolution/Models/BatchCreateJobsRequest.cs` |
| `Operation` | `src/GoogleCloudTalentSolution/Models/Operation.cs` |
| `JobsProjectsTenantsJobsBatchCreateError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsBatchCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsBatchDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsBatchDelete(JobsProjectsTenantsJobsBatchDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<JobsProjectsTenantsJobsBatchDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsBatchDeleteRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsBatchDeleteRequest.cs` |
| `BatchDeleteJobsRequest` | `src/GoogleCloudTalentSolution/Models/BatchDeleteJobsRequest.cs` |
| `Operation` | `src/GoogleCloudTalentSolution/Models/Operation.cs` |
| `JobsProjectsTenantsJobsBatchDeleteError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsBatchDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsBatchUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsBatchUpdate(JobsProjectsTenantsJobsBatchUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<JobsProjectsTenantsJobsBatchUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsBatchUpdateRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsBatchUpdateRequest.cs` |
| `BatchUpdateJobsRequest` | `src/GoogleCloudTalentSolution/Models/BatchUpdateJobsRequest.cs` |
| `Operation` | `src/GoogleCloudTalentSolution/Models/Operation.cs` |
| `JobsProjectsTenantsJobsBatchUpdateError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsBatchUpdateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsCreate(JobsProjectsTenantsJobsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `Job`
- **Error**: `ApiException<JobsProjectsTenantsJobsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsCreateRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsCreateRequest.cs` |
| `Job` | `src/GoogleCloudTalentSolution/Models/Job.cs` |
| `JobsProjectsTenantsJobsCreateError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsDelete(JobsProjectsTenantsJobsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `JobsId`
- **Returns**: `object`
- **Error**: `ApiException<JobsProjectsTenantsJobsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsDeleteRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsDeleteRequest.cs` |
| `JobsProjectsTenantsJobsDeleteError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsGet(JobsProjectsTenantsJobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `JobsId`
- **Returns**: `Job`
- **Error**: `ApiException<JobsProjectsTenantsJobsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsGetRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsGetRequest.cs` |
| `Job` | `src/GoogleCloudTalentSolution/Models/Job.cs` |
| `JobsProjectsTenantsJobsGetError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsList(JobsProjectsTenantsJobsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `jobView` ← `JobView`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListJobsResponse`
- **Error**: `ApiException<JobsProjectsTenantsJobsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsListRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsListRequest.cs` |
| `JobView1` | `src/GoogleCloudTalentSolution/Models/Enums/JobView1.cs` |
| `ListJobsResponse` | `src/GoogleCloudTalentSolution/Models/ListJobsResponse.cs` |
| `JobsProjectsTenantsJobsListError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsPatch(JobsProjectsTenantsJobsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `JobsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `Job`
- **Error**: `ApiException<JobsProjectsTenantsJobsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsPatchRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsPatchRequest.cs` |
| `Job` | `src/GoogleCloudTalentSolution/Models/Job.cs` |
| `JobsProjectsTenantsJobsPatchError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsSearch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsSearch(JobsProjectsTenantsJobsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `SearchJobsResponse`
- **Error**: `ApiException<JobsProjectsTenantsJobsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsSearchRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsSearchRequest.cs` |
| `SearchJobsRequest` | `src/GoogleCloudTalentSolution/Models/SearchJobsRequest.cs` |
| `SearchJobsResponse` | `src/GoogleCloudTalentSolution/Models/SearchJobsResponse.cs` |
| `JobsProjectsTenantsJobsSearchError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsSearchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsJobsSearchForAlert

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsJobsSearchForAlert(JobsProjectsTenantsJobsSearchForAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Returns**: `SearchJobsResponse`
- **Error**: `ApiException<JobsProjectsTenantsJobsSearchForAlertError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsSearchForAlertRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsSearchForAlertRequest.cs` |
| `SearchJobsRequest` | `src/GoogleCloudTalentSolution/Models/SearchJobsRequest.cs` |
| `SearchJobsResponse` | `src/GoogleCloudTalentSolution/Models/SearchJobsResponse.cs` |
| `JobsProjectsTenantsJobsSearchForAlertError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsSearchForAlertError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsList(JobsProjectsTenantsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListTenantsResponse`
- **Error**: `ApiException<JobsProjectsTenantsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsListRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsListRequest.cs` |
| `ListTenantsResponse` | `src/GoogleCloudTalentSolution/Models/ListTenantsResponse.cs` |
| `JobsProjectsTenantsListError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

### JobsProjectsTenantsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `JobsProjectsTenantsPatch(JobsProjectsTenantsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `TenantsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `Tenant`
- **Error**: `ApiException<JobsProjectsTenantsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsPatchRequest` | `src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsPatchRequest.cs` |
| `Tenant` | `src/GoogleCloudTalentSolution/Models/Tenant.cs` |
| `JobsProjectsTenantsPatchError` | `src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTalentSolution/Models/GoogleRpcError.cs` |

