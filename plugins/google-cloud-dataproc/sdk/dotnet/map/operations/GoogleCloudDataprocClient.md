<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudDataprocClient — operations

Accessor: `client` · Source: `src/GoogleCloudDataproc/GoogleCloudDataprocClient.cs` · 180 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DataprocProjectsLocationsAutoscalingPoliciesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesCreate(DataprocProjectsLocationsAutoscalingPoliciesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `AutoscalingPolicy`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesCreateRequest.cs` |
| `AutoscalingPolicy` | `src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesDelete(DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AutoscalingPoliciesId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesGet(DataprocProjectsLocationsAutoscalingPoliciesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AutoscalingPoliciesId`
- **Returns**: `AutoscalingPolicy`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesGetRequest.cs` |
| `AutoscalingPolicy` | `src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesList(DataprocProjectsLocationsAutoscalingPoliciesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAutoscalingPoliciesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesListRequest.cs` |
| `ListAutoscalingPoliciesResponse` | `src/GoogleCloudDataproc/Models/ListAutoscalingPoliciesResponse.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsAutoscalingPoliciesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsAutoscalingPoliciesUpdate(DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `AutoscalingPolicy`
- **Error**: `ApiException<DataprocProjectsLocationsAutoscalingPoliciesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest.cs` |
| `AutoscalingPolicy` | `src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs` |
| `DataprocProjectsLocationsAutoscalingPoliciesUpdateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesUpdateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesAnalyze

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesAnalyze(DataprocProjectsLocationsBatchesAnalyzeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesAnalyzeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesAnalyzeRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesAnalyzeRequest.cs` |
| `AnalyzeBatchRequest` | `src/GoogleCloudDataproc/Models/AnalyzeBatchRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsBatchesAnalyzeError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesAnalyzeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesCreate(DataprocProjectsLocationsBatchesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `batchId` ← `BatchId`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesCreateRequest.cs` |
| `Batch` | `src/GoogleCloudDataproc/Models/Batch.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsBatchesCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesDelete(DataprocProjectsLocationsBatchesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesDeleteRequest.cs` |
| `DataprocProjectsLocationsBatchesDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesGet(DataprocProjectsLocationsBatchesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`
- **Returns**: `Batch`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesGetRequest.cs` |
| `Batch` | `src/GoogleCloudDataproc/Models/Batch.cs` |
| `DataprocProjectsLocationsBatchesGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesList(DataprocProjectsLocationsBatchesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListBatchesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesListRequest.cs` |
| `ListBatchesResponse` | `src/GoogleCloudDataproc/Models/ListBatchesResponse.cs` |
| `DataprocProjectsLocationsBatchesListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccess

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccess(DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `AccessSparkApplicationResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest.cs` |
| `AccessSparkApplicationResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `AccessSparkApplicationEnvironmentInfoResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest.cs` |
| `AccessSparkApplicationEnvironmentInfoResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationEnvironmentInfoResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessJob

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessJob(DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `jobId` ← `JobId`, `parent` ← `Parent`
- **Returns**: `AccessSparkApplicationJobResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest.cs` |
| `AccessSparkApplicationJobResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationJobResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `AccessSparkApplicationNativeBuildInfoResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest.cs` |
| `AccessSparkApplicationNativeBuildInfoResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationNativeBuildInfoResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executionId` ← `ExecutionId`, `parent` ← `Parent`
- **Returns**: `AccessSparkApplicationNativeSqlQueryResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest.cs` |
| `AccessSparkApplicationNativeSqlQueryResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationNativeSqlQueryResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executionId` ← `ExecutionId`, `parent` ← `Parent`
- **Returns**: `AccessSparkApplicationSqlSparkPlanGraphResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest.cs` |
| `AccessSparkApplicationSqlSparkPlanGraphResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationSqlSparkPlanGraphResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `details` ← `Details`, `executionId` ← `ExecutionId`, `parent` ← `Parent`, `planDescription` ← `PlanDescription`
- **Returns**: `AccessSparkApplicationSqlQueryResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest.cs` |
| `AccessSparkApplicationSqlQueryResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationSqlQueryResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`, `summaryMetricsMask` ← `SummaryMetricsMask`
- **Returns**: `AccessSparkApplicationStageAttemptResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest.cs` |
| `AccessSparkApplicationStageAttemptResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationStageAttemptResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageId` ← `StageId`
- **Returns**: `AccessSparkApplicationStageRddOperationGraphResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest.cs` |
| `AccessSparkApplicationStageRddOperationGraphResponse` | `src/GoogleCloudDataproc/Models/AccessSparkApplicationStageRddOperationGraphResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executionId` ← `ExecutionId`, `parent` ← `Parent`, `semanticQueryId` ← `SemanticQueryId`
- **Returns**: `ComputeTuningConfigResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest.cs` |
| `ComputeTuningConfigResponse` | `src/GoogleCloudDataproc/Models/ComputeTuningConfigResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearch(DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`
- **Query params (wire ← C#)**: `applicationStatus` ← `ApplicationStatus`, `maxEndTime` ← `MaxEndTime`, `maxTime` ← `MaxTime`, `minEndTime` ← `MinEndTime`, `minTime` ← `MinTime`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `SearchSparkApplicationsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest.cs` |
| `ApplicationStatus` | `src/GoogleCloudDataproc/Models/Enums/ApplicationStatus.cs` |
| `SearchSparkApplicationsResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationsResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`
- **Returns**: `SearchSparkApplicationExecutorStageSummaryResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest.cs` |
| `SearchSparkApplicationExecutorStageSummaryResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationExecutorStageSummaryResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executorStatus` ← `ExecutorStatus`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`
- **Returns**: `SearchSparkApplicationExecutorsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest.cs` |
| `ExecutorStatus` | `src/GoogleCloudDataproc/Models/Enums/ExecutorStatus.cs` |
| `SearchSparkApplicationExecutorsResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationExecutorsResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchJobs

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `jobStatus` ← `JobStatus`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`
- **Returns**: `SearchSparkApplicationJobsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest.cs` |
| `JobStatus2` | `src/GoogleCloudDataproc/Models/Enums/JobStatus2.cs` |
| `SearchSparkApplicationJobsResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationJobsResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`
- **Returns**: `SearchSparkApplicationNativeSqlQueriesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest.cs` |
| `SearchSparkApplicationNativeSqlQueriesResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationNativeSqlQueriesResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `details` ← `Details`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `planDescription` ← `PlanDescription`
- **Returns**: `SearchSparkApplicationSqlQueriesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest.cs` |
| `SearchSparkApplicationSqlQueriesResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationSqlQueriesResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `sortRuntime` ← `SortRuntime`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`, `taskStatus` ← `TaskStatus`
- **Returns**: `SearchSparkApplicationStageAttemptTasksResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest.cs` |
| `TaskStatusEnum` | `src/GoogleCloudDataproc/Models/Enums/TaskStatusEnum.cs` |
| `SearchSparkApplicationStageAttemptTasksResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationStageAttemptTasksResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `stageId` ← `StageId`, `summaryMetricsMask` ← `SummaryMetricsMask`
- **Returns**: `SearchSparkApplicationStageAttemptsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest.cs` |
| `SearchSparkApplicationStageAttemptsResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationStageAttemptsResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSearchStages

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSearchStages(DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `stageStatus` ← `StageStatus`, `summaryMetricsMask` ← `SummaryMetricsMask`
- **Returns**: `SearchSparkApplicationStagesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest.cs` |
| `StageStatus` | `src/GoogleCloudDataproc/Models/Enums/StageStatus.cs` |
| `SearchSparkApplicationStagesResponse` | `src/GoogleCloudDataproc/Models/SearchSparkApplicationStagesResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `SummarizeSparkApplicationExecutorsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest.cs` |
| `SummarizeSparkApplicationExecutorsResponse` | `src/GoogleCloudDataproc/Models/SummarizeSparkApplicationExecutorsResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `SummarizeSparkApplicationJobsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest.cs` |
| `SummarizeSparkApplicationJobsResponse` | `src/GoogleCloudDataproc/Models/SummarizeSparkApplicationJobsResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`
- **Returns**: `SummarizeSparkApplicationStageAttemptTasksResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest.cs` |
| `SummarizeSparkApplicationStageAttemptTasksResponse` | `src/GoogleCloudDataproc/Models/SummarizeSparkApplicationStageAttemptTasksResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `SummarizeSparkApplicationStagesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest.cs` |
| `SummarizeSparkApplicationStagesResponse` | `src/GoogleCloudDataproc/Models/SummarizeSparkApplicationStagesResponse.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsBatchesSparkApplicationsWrite

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsBatchesSparkApplicationsWrite(DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `BatchesId`, `SparkApplicationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsBatchesSparkApplicationsWriteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest.cs` |
| `WriteSparkApplicationContextRequest` | `src/GoogleCloudDataproc/Models/WriteSparkApplicationContextRequest.cs` |
| `DataprocProjectsLocationsBatchesSparkApplicationsWriteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsWriteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsOperationsCancel(DataprocProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsOperationsCancelRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsCancelRequest.cs` |
| `DataprocProjectsLocationsOperationsCancelError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsOperationsDelete(DataprocProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsOperationsDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsDeleteRequest.cs` |
| `DataprocProjectsLocationsOperationsDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsOperationsGet(DataprocProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsOperationsGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsOperationsGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsOperationsList(DataprocProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListOperationsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsOperationsListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsListRequest.cs` |
| `ListOperationsResponse` | `src/GoogleCloudDataproc/Models/ListOperationsResponse.cs` |
| `DataprocProjectsLocationsOperationsListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionTemplatesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionTemplatesCreate(DataprocProjectsLocationsSessionTemplatesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `SessionTemplate`
- **Error**: `ApiException<DataprocProjectsLocationsSessionTemplatesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionTemplatesCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesCreateRequest.cs` |
| `SessionTemplate` | `src/GoogleCloudDataproc/Models/SessionTemplate.cs` |
| `DataprocProjectsLocationsSessionTemplatesCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionTemplatesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionTemplatesDelete(DataprocProjectsLocationsSessionTemplatesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionTemplatesId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsSessionTemplatesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionTemplatesDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesDeleteRequest.cs` |
| `DataprocProjectsLocationsSessionTemplatesDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionTemplatesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionTemplatesGet(DataprocProjectsLocationsSessionTemplatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionTemplatesId`
- **Returns**: `SessionTemplate`
- **Error**: `ApiException<DataprocProjectsLocationsSessionTemplatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionTemplatesGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesGetRequest.cs` |
| `SessionTemplate` | `src/GoogleCloudDataproc/Models/SessionTemplate.cs` |
| `DataprocProjectsLocationsSessionTemplatesGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionTemplatesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionTemplatesList(DataprocProjectsLocationsSessionTemplatesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListSessionTemplatesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionTemplatesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionTemplatesListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesListRequest.cs` |
| `ListSessionTemplatesResponse` | `src/GoogleCloudDataproc/Models/ListSessionTemplatesResponse.cs` |
| `DataprocProjectsLocationsSessionTemplatesListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionTemplatesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionTemplatesPatch(DataprocProjectsLocationsSessionTemplatesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionTemplatesId`, `Body`
- **Returns**: `SessionTemplate`
- **Error**: `ApiException<DataprocProjectsLocationsSessionTemplatesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionTemplatesPatchRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesPatchRequest.cs` |
| `SessionTemplate` | `src/GoogleCloudDataproc/Models/SessionTemplate.cs` |
| `DataprocProjectsLocationsSessionTemplatesPatchError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsCreate(DataprocProjectsLocationsSessionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`, `sessionId` ← `SessionId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsCreateRequest.cs` |
| `Session` | `src/GoogleCloudDataproc/Models/Session.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsSessionsCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsDelete(DataprocProjectsLocationsSessionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsSessionsDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsGet(DataprocProjectsLocationsSessionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`
- **Returns**: `Session`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsGetRequest.cs` |
| `Session` | `src/GoogleCloudDataproc/Models/Session.cs` |
| `DataprocProjectsLocationsSessionsGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsList(DataprocProjectsLocationsSessionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListSessionsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsListRequest.cs` |
| `ListSessionsResponse` | `src/GoogleCloudDataproc/Models/ListSessionsResponse.cs` |
| `DataprocProjectsLocationsSessionsListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccess

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccess(DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `AccessSessionSparkApplicationResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest.cs` |
| `AccessSessionSparkApplicationResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `AccessSessionSparkApplicationEnvironmentInfoResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest.cs` |
| `AccessSessionSparkApplicationEnvironmentInfoResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationEnvironmentInfoResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessJob

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessJob(DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `jobId` ← `JobId`, `parent` ← `Parent`
- **Returns**: `AccessSessionSparkApplicationJobResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest.cs` |
| `AccessSessionSparkApplicationJobResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationJobResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `AccessSessionSparkApplicationNativeBuildInfoResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest.cs` |
| `AccessSessionSparkApplicationNativeBuildInfoResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationNativeBuildInfoResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executionId` ← `ExecutionId`, `parent` ← `Parent`
- **Returns**: `AccessSessionSparkApplicationNativeSqlQueryResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest.cs` |
| `AccessSessionSparkApplicationNativeSqlQueryResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationNativeSqlQueryResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executionId` ← `ExecutionId`, `parent` ← `Parent`
- **Returns**: `AccessSessionSparkApplicationSqlSparkPlanGraphResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest.cs` |
| `AccessSessionSparkApplicationSqlSparkPlanGraphResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationSqlSparkPlanGraphResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `details` ← `Details`, `executionId` ← `ExecutionId`, `parent` ← `Parent`, `planDescription` ← `PlanDescription`
- **Returns**: `AccessSessionSparkApplicationSqlQueryResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest.cs` |
| `AccessSessionSparkApplicationSqlQueryResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationSqlQueryResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`, `summaryMetricsMask` ← `SummaryMetricsMask`
- **Returns**: `AccessSessionSparkApplicationStageAttemptResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest.cs` |
| `AccessSessionSparkApplicationStageAttemptResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationStageAttemptResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageId` ← `StageId`
- **Returns**: `AccessSessionSparkApplicationStageRddOperationGraphResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest.cs` |
| `AccessSessionSparkApplicationStageRddOperationGraphResponse` | `src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationStageRddOperationGraphResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearch(DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`
- **Query params (wire ← C#)**: `applicationStatus` ← `ApplicationStatus`, `maxEndTime` ← `MaxEndTime`, `maxTime` ← `MaxTime`, `minEndTime` ← `MinEndTime`, `minTime` ← `MinTime`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `SearchSessionSparkApplicationsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest.cs` |
| `ApplicationStatus` | `src/GoogleCloudDataproc/Models/Enums/ApplicationStatus.cs` |
| `SearchSessionSparkApplicationsResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationsResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`
- **Returns**: `SearchSessionSparkApplicationExecutorStageSummaryResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest.cs` |
| `SearchSessionSparkApplicationExecutorStageSummaryResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationExecutorStageSummaryResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `executorStatus` ← `ExecutorStatus`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`
- **Returns**: `SearchSessionSparkApplicationExecutorsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest.cs` |
| `ExecutorStatus` | `src/GoogleCloudDataproc/Models/Enums/ExecutorStatus.cs` |
| `SearchSessionSparkApplicationExecutorsResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationExecutorsResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchJobs

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `jobIds` ← `JobIds`, `jobStatus` ← `JobStatus`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`
- **Returns**: `SearchSessionSparkApplicationJobsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest.cs` |
| `JobStatus2` | `src/GoogleCloudDataproc/Models/Enums/JobStatus2.cs` |
| `SearchSessionSparkApplicationJobsResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationJobsResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`
- **Returns**: `SearchSessionSparkApplicationNativeSqlQueriesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest.cs` |
| `SearchSessionSparkApplicationNativeSqlQueriesResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationNativeSqlQueriesResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `details` ← `Details`, `operationIds` ← `OperationIds`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `planDescription` ← `PlanDescription`
- **Returns**: `SearchSessionSparkApplicationSqlQueriesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest.cs` |
| `SearchSessionSparkApplicationSqlQueriesResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationSqlQueriesResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `sortRuntime` ← `SortRuntime`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`, `taskStatus` ← `TaskStatus`
- **Returns**: `SearchSessionSparkApplicationStageAttemptTasksResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest.cs` |
| `TaskStatusEnum` | `src/GoogleCloudDataproc/Models/Enums/TaskStatusEnum.cs` |
| `SearchSessionSparkApplicationStageAttemptTasksResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationStageAttemptTasksResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `stageId` ← `StageId`, `summaryMetricsMask` ← `SummaryMetricsMask`
- **Returns**: `SearchSessionSparkApplicationStageAttemptsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest.cs` |
| `SearchSessionSparkApplicationStageAttemptsResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationStageAttemptsResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSearchStages

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSearchStages(DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `parent` ← `Parent`, `stageIds` ← `StageIds`, `stageStatus` ← `StageStatus`, `summaryMetricsMask` ← `SummaryMetricsMask`
- **Returns**: `SearchSessionSparkApplicationStagesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest.cs` |
| `StageStatus` | `src/GoogleCloudDataproc/Models/Enums/StageStatus.cs` |
| `SearchSessionSparkApplicationStagesResponse` | `src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationStagesResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `SummarizeSessionSparkApplicationExecutorsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest.cs` |
| `SummarizeSessionSparkApplicationExecutorsResponse` | `src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationExecutorsResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `jobIds` ← `JobIds`, `parent` ← `Parent`
- **Returns**: `SummarizeSessionSparkApplicationJobsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest.cs` |
| `SummarizeSessionSparkApplicationJobsResponse` | `src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationJobsResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageAttemptId` ← `StageAttemptId`, `stageId` ← `StageId`
- **Returns**: `SummarizeSessionSparkApplicationStageAttemptTasksResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest.cs` |
| `SummarizeSessionSparkApplicationStageAttemptTasksResponse` | `src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationStageAttemptTasksResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `stageIds` ← `StageIds`
- **Returns**: `SummarizeSessionSparkApplicationStagesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest.cs` |
| `SummarizeSessionSparkApplicationStagesResponse` | `src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationStagesResponse.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsSparkApplicationsWrite

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsSparkApplicationsWrite(DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `SparkApplicationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsSparkApplicationsWriteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest.cs` |
| `WriteSessionSparkApplicationContextRequest` | `src/GoogleCloudDataproc/Models/WriteSessionSparkApplicationContextRequest.cs` |
| `DataprocProjectsLocationsSessionsSparkApplicationsWriteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsWriteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsSessionsTerminate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsSessionsTerminate(DataprocProjectsLocationsSessionsTerminateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `SessionsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsSessionsTerminateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsSessionsTerminateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsTerminateRequest.cs` |
| `TerminateSessionRequest` | `src/GoogleCloudDataproc/Models/TerminateSessionRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsSessionsTerminateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsTerminateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesCreate(DataprocProjectsLocationsWorkflowTemplatesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `WorkflowTemplate`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesCreateRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesDelete(DataprocProjectsLocationsWorkflowTemplatesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`
- **Query params (wire ← C#)**: `version` ← `Version`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesDeleteRequest.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesGet(DataprocProjectsLocationsWorkflowTemplatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`
- **Query params (wire ← C#)**: `version` ← `Version`
- **Returns**: `WorkflowTemplate`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesGetRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesInstantiate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesInstantiate(DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesInstantiateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest.cs` |
| `InstantiateWorkflowTemplateRequest` | `src/GoogleCloudDataproc/Models/InstantiateWorkflowTemplateRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesInstantiateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesInstantiateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesInstantiateInline

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesInstantiateInline(DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesList(DataprocProjectsLocationsWorkflowTemplatesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListWorkflowTemplatesResponse`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesListRequest.cs` |
| `ListWorkflowTemplatesResponse` | `src/GoogleCloudDataproc/Models/ListWorkflowTemplatesResponse.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsLocationsWorkflowTemplatesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsLocationsWorkflowTemplatesUpdate(DataprocProjectsLocationsWorkflowTemplatesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `WorkflowTemplate`
- **Error**: `ApiException<DataprocProjectsLocationsWorkflowTemplatesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsLocationsWorkflowTemplatesUpdateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesUpdateRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `DataprocProjectsLocationsWorkflowTemplatesUpdateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesUpdateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesCreate(DataprocProjectsRegionsAutoscalingPoliciesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `Body`
- **Returns**: `AutoscalingPolicy`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesCreateRequest.cs` |
| `AutoscalingPolicy` | `src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesDelete(DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `AutoscalingPoliciesId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesGet(DataprocProjectsRegionsAutoscalingPoliciesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `AutoscalingPoliciesId`
- **Returns**: `AutoscalingPolicy`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesGetRequest.cs` |
| `AutoscalingPolicy` | `src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesList(DataprocProjectsRegionsAutoscalingPoliciesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAutoscalingPoliciesResponse`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesListRequest.cs` |
| `ListAutoscalingPoliciesResponse` | `src/GoogleCloudDataproc/Models/ListAutoscalingPoliciesResponse.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsAutoscalingPoliciesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsAutoscalingPoliciesUpdate(DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `AutoscalingPoliciesId`, `Body`
- **Returns**: `AutoscalingPolicy`
- **Error**: `ApiException<DataprocProjectsRegionsAutoscalingPoliciesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest.cs` |
| `AutoscalingPolicy` | `src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs` |
| `DataprocProjectsRegionsAutoscalingPoliciesUpdateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesUpdateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersCreate(DataprocProjectsRegionsClustersCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `Body`
- **Query params (wire ← C#)**: `actionOnFailedPrimaryWorkers` ← `ActionOnFailedPrimaryWorkers`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersCreateRequest.cs` |
| `ActionOnFailedPrimaryWorkers` | `src/GoogleCloudDataproc/Models/Enums/ActionOnFailedPrimaryWorkers.cs` |
| `Cluster` | `src/GoogleCloudDataproc/Models/Cluster.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersDelete(DataprocProjectsRegionsClustersDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`
- **Query params (wire ← C#)**: `clusterUuid` ← `ClusterUuid`, `gracefulTerminationTimeout` ← `GracefulTerminationTimeout`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersDiagnose

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersDiagnose(DataprocProjectsRegionsClustersDiagnoseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersDiagnoseError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersDiagnoseRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersDiagnoseRequest.cs` |
| `DiagnoseClusterRequest` | `src/GoogleCloudDataproc/Models/DiagnoseClusterRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersDiagnoseError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersDiagnoseError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersGet(DataprocProjectsRegionsClustersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`
- **Returns**: `Cluster`
- **Error**: `ApiException<DataprocProjectsRegionsClustersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersGetRequest.cs` |
| `Cluster` | `src/GoogleCloudDataproc/Models/Cluster.cs` |
| `DataprocProjectsRegionsClustersGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersGetIamPolicy(DataprocProjectsRegionsClustersGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsClustersGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsClustersGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersInjectCredentials

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersInjectCredentials(DataprocProjectsRegionsClustersInjectCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersInjectCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersInjectCredentialsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersInjectCredentialsRequest.cs` |
| `InjectCredentialsRequest` | `src/GoogleCloudDataproc/Models/InjectCredentialsRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersInjectCredentialsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersInjectCredentialsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersList(DataprocProjectsRegionsClustersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListClustersResponse`
- **Error**: `ApiException<DataprocProjectsRegionsClustersListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersListRequest.cs` |
| `ListClustersResponse` | `src/GoogleCloudDataproc/Models/ListClustersResponse.cs` |
| `DataprocProjectsRegionsClustersListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersNodeGroupsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersNodeGroupsCreate(DataprocProjectsRegionsClustersNodeGroupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `Body`
- **Query params (wire ← C#)**: `nodeGroupId` ← `NodeGroupId`, `parentOperationId` ← `ParentOperationId`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersNodeGroupsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersNodeGroupsCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsCreateRequest.cs` |
| `NodeGroup` | `src/GoogleCloudDataproc/Models/NodeGroup.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersNodeGroupsCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersNodeGroupsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersNodeGroupsGet(DataprocProjectsRegionsClustersNodeGroupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `NodeGroupsId`
- **Returns**: `NodeGroup`
- **Error**: `ApiException<DataprocProjectsRegionsClustersNodeGroupsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersNodeGroupsGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsGetRequest.cs` |
| `NodeGroup` | `src/GoogleCloudDataproc/Models/NodeGroup.cs` |
| `DataprocProjectsRegionsClustersNodeGroupsGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersNodeGroupsRepair

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersNodeGroupsRepair(DataprocProjectsRegionsClustersNodeGroupsRepairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `NodeGroupsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersNodeGroupsRepairError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersNodeGroupsRepairRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsRepairRequest.cs` |
| `RepairNodeGroupRequest` | `src/GoogleCloudDataproc/Models/RepairNodeGroupRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersNodeGroupsRepairError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsRepairError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersNodeGroupsResize

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersNodeGroupsResize(DataprocProjectsRegionsClustersNodeGroupsResizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `NodeGroupsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersNodeGroupsResizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersNodeGroupsResizeRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsResizeRequest.cs` |
| `ResizeNodeGroupRequest` | `src/GoogleCloudDataproc/Models/ResizeNodeGroupRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersNodeGroupsResizeError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsResizeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersPatch(DataprocProjectsRegionsClustersPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`, `Body`
- **Query params (wire ← C#)**: `gracefulDecommissionTimeout` ← `GracefulDecommissionTimeout`, `requestId` ← `RequestId`, `updateMask` ← `UpdateMask`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersPatchRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersPatchRequest.cs` |
| `Cluster` | `src/GoogleCloudDataproc/Models/Cluster.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersPatchError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersRepair

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersRepair(DataprocProjectsRegionsClustersRepairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersRepairError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersRepairRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersRepairRequest.cs` |
| `RepairClusterRequest` | `src/GoogleCloudDataproc/Models/RepairClusterRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersRepairError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersRepairError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersSetIamPolicy(DataprocProjectsRegionsClustersSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsClustersSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsClustersSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersStart

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersStart(DataprocProjectsRegionsClustersStartRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersStartError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersStartRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersStartRequest.cs` |
| `StartClusterRequest` | `src/GoogleCloudDataproc/Models/StartClusterRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersStartError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersStartError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersStop

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersStop(DataprocProjectsRegionsClustersStopRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `ClusterName`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsClustersStopError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersStopRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersStopRequest.cs` |
| `StopClusterRequest` | `src/GoogleCloudDataproc/Models/StopClusterRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsClustersStopError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersStopError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsClustersTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsClustersTestIamPermissions(DataprocProjectsRegionsClustersTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `ClustersId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsClustersTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsClustersTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsRegionsClustersTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsCancel(DataprocProjectsRegionsJobsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `JobId`, `Body`
- **Returns**: `Job`
- **Error**: `ApiException<DataprocProjectsRegionsJobsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsCancelRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsCancelRequest.cs` |
| `Job` | `src/GoogleCloudDataproc/Models/Job.cs` |
| `DataprocProjectsRegionsJobsCancelError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsDelete(DataprocProjectsRegionsJobsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `JobId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsRegionsJobsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsDeleteRequest.cs` |
| `DataprocProjectsRegionsJobsDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsGet(DataprocProjectsRegionsJobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `JobId`
- **Returns**: `Job`
- **Error**: `ApiException<DataprocProjectsRegionsJobsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsGetRequest.cs` |
| `Job` | `src/GoogleCloudDataproc/Models/Job.cs` |
| `DataprocProjectsRegionsJobsGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsGetIamPolicy(DataprocProjectsRegionsJobsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `JobsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsJobsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsJobsGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsList(DataprocProjectsRegionsJobsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`
- **Query params (wire ← C#)**: `clusterName` ← `ClusterName`, `filter` ← `Filter`, `jobStateMatcher` ← `JobStateMatcher`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListJobsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsJobsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsListRequest.cs` |
| `JobStateMatcher` | `src/GoogleCloudDataproc/Models/Enums/JobStateMatcher.cs` |
| `ListJobsResponse` | `src/GoogleCloudDataproc/Models/ListJobsResponse.cs` |
| `DataprocProjectsRegionsJobsListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsPatch(DataprocProjectsRegionsJobsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `JobId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `Job`
- **Error**: `ApiException<DataprocProjectsRegionsJobsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsPatchRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsPatchRequest.cs` |
| `Job` | `src/GoogleCloudDataproc/Models/Job.cs` |
| `DataprocProjectsRegionsJobsPatchError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsSetIamPolicy(DataprocProjectsRegionsJobsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `JobsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsJobsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsJobsSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsSubmit

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsSubmit(DataprocProjectsRegionsJobsSubmitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `Body`
- **Returns**: `Job`
- **Error**: `ApiException<DataprocProjectsRegionsJobsSubmitError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsSubmitRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsSubmitRequest.cs` |
| `SubmitJobRequest` | `src/GoogleCloudDataproc/Models/SubmitJobRequest.cs` |
| `Job` | `src/GoogleCloudDataproc/Models/Job.cs` |
| `DataprocProjectsRegionsJobsSubmitError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsSubmitError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsSubmitAsOperation

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsSubmitAsOperation(DataprocProjectsRegionsJobsSubmitAsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Region`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsJobsSubmitAsOperationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsSubmitAsOperationRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsSubmitAsOperationRequest.cs` |
| `SubmitJobRequest` | `src/GoogleCloudDataproc/Models/SubmitJobRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsJobsSubmitAsOperationError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsSubmitAsOperationError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsJobsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsJobsTestIamPermissions(DataprocProjectsRegionsJobsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `JobsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsJobsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsJobsTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsRegionsJobsTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsCancel(DataprocProjectsRegionsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsCancelRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsCancelRequest.cs` |
| `DataprocProjectsRegionsOperationsCancelError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsDelete(DataprocProjectsRegionsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsDeleteRequest.cs` |
| `DataprocProjectsRegionsOperationsDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsGet(DataprocProjectsRegionsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsOperationsGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsGetIamPolicy(DataprocProjectsRegionsOperationsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `OperationsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsOperationsGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsList(DataprocProjectsRegionsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListOperationsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsListRequest.cs` |
| `ListOperationsResponse` | `src/GoogleCloudDataproc/Models/ListOperationsResponse.cs` |
| `DataprocProjectsRegionsOperationsListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsSetIamPolicy(DataprocProjectsRegionsOperationsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `OperationsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsOperationsSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsOperationsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsOperationsTestIamPermissions(DataprocProjectsRegionsOperationsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `OperationsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsOperationsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsOperationsTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsRegionsOperationsTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesCreate(DataprocProjectsRegionsWorkflowTemplatesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `Body`
- **Returns**: `WorkflowTemplate`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesCreateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesCreateRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesCreateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesDelete(DataprocProjectsRegionsWorkflowTemplatesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`
- **Query params (wire ← C#)**: `version` ← `Version`
- **Returns**: `object`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesDeleteRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesDeleteRequest.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesDeleteError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesGet(DataprocProjectsRegionsWorkflowTemplatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`
- **Query params (wire ← C#)**: `version` ← `Version`
- **Returns**: `WorkflowTemplate`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesGetRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesGetRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesGetError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesInstantiate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesInstantiate(DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesInstantiateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest.cs` |
| `InstantiateWorkflowTemplateRequest` | `src/GoogleCloudDataproc/Models/InstantiateWorkflowTemplateRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesInstantiateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesInstantiateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesInstantiateInline

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesInstantiateInline(DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesList(DataprocProjectsRegionsWorkflowTemplatesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListWorkflowTemplatesResponse`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesListRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesListRequest.cs` |
| `ListWorkflowTemplatesResponse` | `src/GoogleCloudDataproc/Models/ListWorkflowTemplatesResponse.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesListError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudDataproc/Models/Policy.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### DataprocProjectsRegionsWorkflowTemplatesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DataprocProjectsRegionsWorkflowTemplatesUpdate(DataprocProjectsRegionsWorkflowTemplatesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `RegionsId`, `WorkflowTemplatesId`, `Body`
- **Returns**: `WorkflowTemplate`
- **Error**: `ApiException<DataprocProjectsRegionsWorkflowTemplatesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataprocProjectsRegionsWorkflowTemplatesUpdateRequest` | `src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesUpdateRequest.cs` |
| `WorkflowTemplate` | `src/GoogleCloudDataproc/Models/WorkflowTemplate.cs` |
| `DataprocProjectsRegionsWorkflowTemplatesUpdateError` | `src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesUpdateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsCreate(MetastoreProjectsLocationsFederationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `federationId` ← `FederationId`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsCreateRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsCreateRequest.cs` |
| `Federation` | `src/GoogleCloudDataproc/Models/Federation.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsFederationsCreateError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsDelete(MetastoreProjectsLocationsFederationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `FederationsId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsDeleteRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsFederationsDeleteError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsGet(MetastoreProjectsLocationsFederationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `FederationsId`
- **Returns**: `Federation`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsGetRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsGetRequest.cs` |
| `Federation` | `src/GoogleCloudDataproc/Models/Federation.cs` |
| `MetastoreProjectsLocationsFederationsGetError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsGetIamPolicy(MetastoreProjectsLocationsFederationsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `FederationsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsGetIamPolicyRequest.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsFederationsGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsList(MetastoreProjectsLocationsFederationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListFederationsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsListRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsListRequest.cs` |
| `ListFederationsResponse` | `src/GoogleCloudDataproc/Models/ListFederationsResponse.cs` |
| `MetastoreProjectsLocationsFederationsListError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsPatch(MetastoreProjectsLocationsFederationsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `FederationsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`, `updateMask` ← `UpdateMask`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsPatchRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsPatchRequest.cs` |
| `Federation` | `src/GoogleCloudDataproc/Models/Federation.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsFederationsPatchError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsSetIamPolicy(MetastoreProjectsLocationsFederationsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `FederationsId`, `Body`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest2` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest2.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsFederationsSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsFederationsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsFederationsTestIamPermissions(MetastoreProjectsLocationsFederationsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `FederationsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsFederationsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsFederationsTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `MetastoreProjectsLocationsFederationsTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsGet(MetastoreProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `Location`
- **Error**: `ApiException<MetastoreProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsGetRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsGetRequest.cs` |
| `Location` | `src/GoogleCloudDataproc/Models/Location.cs` |
| `MetastoreProjectsLocationsGetError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsList(MetastoreProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListLocationsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsListRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsListRequest.cs` |
| `ListLocationsResponse` | `src/GoogleCloudDataproc/Models/ListLocationsResponse.cs` |
| `MetastoreProjectsLocationsListError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesAlterLocation

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesAlterLocation(MetastoreProjectsLocationsServicesAlterLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesAlterLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesAlterLocationRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesAlterLocationRequest.cs` |
| `AlterMetadataResourceLocationRequest` | `src/GoogleCloudDataproc/Models/AlterMetadataResourceLocationRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesAlterLocationError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesAlterLocationError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesAlterTableProperties

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesAlterTableProperties(MetastoreProjectsLocationsServicesAlterTablePropertiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesAlterTablePropertiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesAlterTablePropertiesRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesAlterTablePropertiesRequest.cs` |
| `AlterTablePropertiesRequest` | `src/GoogleCloudDataproc/Models/AlterTablePropertiesRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesAlterTablePropertiesError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesAlterTablePropertiesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesBackupsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesBackupsCreate(MetastoreProjectsLocationsServicesBackupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Query params (wire ← C#)**: `backupId` ← `BackupId`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesBackupsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesBackupsCreateRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsCreateRequest.cs` |
| `Backup` | `src/GoogleCloudDataproc/Models/Backup.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesBackupsCreateError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesBackupsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesBackupsDelete(MetastoreProjectsLocationsServicesBackupsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `BackupsId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesBackupsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesBackupsDeleteRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesBackupsDeleteError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesBackupsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesBackupsGet(MetastoreProjectsLocationsServicesBackupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `BackupsId`
- **Returns**: `Backup`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesBackupsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesBackupsGetRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsGetRequest.cs` |
| `Backup` | `src/GoogleCloudDataproc/Models/Backup.cs` |
| `MetastoreProjectsLocationsServicesBackupsGetError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesBackupsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesBackupsGetIamPolicy(MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `BackupsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesBackupsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesBackupsGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesBackupsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesBackupsList(MetastoreProjectsLocationsServicesBackupsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListBackupsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesBackupsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesBackupsListRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsListRequest.cs` |
| `ListBackupsResponse` | `src/GoogleCloudDataproc/Models/ListBackupsResponse.cs` |
| `MetastoreProjectsLocationsServicesBackupsListError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesBackupsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesBackupsSetIamPolicy(MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `BackupsId`, `Body`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesBackupsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest2` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest2.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesBackupsSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesCancelMigration

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesCancelMigration(MetastoreProjectsLocationsServicesCancelMigrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesCancelMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesCancelMigrationRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesCancelMigrationRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesCancelMigrationError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesCancelMigrationError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesCompleteMigration

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesCompleteMigration(MetastoreProjectsLocationsServicesCompleteMigrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesCompleteMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesCompleteMigrationRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesCompleteMigrationRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesCompleteMigrationError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesCompleteMigrationError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesCreate(MetastoreProjectsLocationsServicesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`, `serviceId` ← `ServiceId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesCreateRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesCreateRequest.cs` |
| `Service` | `src/GoogleCloudDataproc/Models/Service.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesCreateError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesDatabasesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesDatabasesGetIamPolicy(MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `DatabasesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesDatabasesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesDatabasesSetIamPolicy(MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `DatabasesId`, `Body`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest2` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest2.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `DatabasesId`, `TablesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `DatabasesId`, `TablesId`, `Body`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest2` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest2.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesDelete(MetastoreProjectsLocationsServicesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesDeleteRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesDeleteError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesExportMetadata

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesExportMetadata(MetastoreProjectsLocationsServicesExportMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesExportMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesExportMetadataRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesExportMetadataRequest.cs` |
| `ExportMetadataRequest` | `src/GoogleCloudDataproc/Models/ExportMetadataRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesExportMetadataError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesExportMetadataError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesGet(MetastoreProjectsLocationsServicesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`
- **Returns**: `Service`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesGetRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesGetRequest.cs` |
| `Service` | `src/GoogleCloudDataproc/Models/Service.cs` |
| `MetastoreProjectsLocationsServicesGetError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesGetIamPolicy(MetastoreProjectsLocationsServicesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesGetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesGetIamPolicyRequest.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesGetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesList(MetastoreProjectsLocationsServicesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListServicesResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesListRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesListRequest.cs` |
| `ListServicesResponse` | `src/GoogleCloudDataproc/Models/ListServicesResponse.cs` |
| `MetastoreProjectsLocationsServicesListError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMetadataImportsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMetadataImportsCreate(MetastoreProjectsLocationsServicesMetadataImportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Query params (wire ← C#)**: `metadataImportId` ← `MetadataImportId`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMetadataImportsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMetadataImportsCreateRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsCreateRequest.cs` |
| `MetadataImport` | `src/GoogleCloudDataproc/Models/MetadataImport.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesMetadataImportsCreateError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMetadataImportsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMetadataImportsGet(MetastoreProjectsLocationsServicesMetadataImportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `MetadataImportsId`
- **Returns**: `MetadataImport`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMetadataImportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMetadataImportsGetRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsGetRequest.cs` |
| `MetadataImport` | `src/GoogleCloudDataproc/Models/MetadataImport.cs` |
| `MetastoreProjectsLocationsServicesMetadataImportsGetError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMetadataImportsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMetadataImportsList(MetastoreProjectsLocationsServicesMetadataImportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListMetadataImportsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMetadataImportsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMetadataImportsListRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsListRequest.cs` |
| `ListMetadataImportsResponse` | `src/GoogleCloudDataproc/Models/ListMetadataImportsResponse.cs` |
| `MetastoreProjectsLocationsServicesMetadataImportsListError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMetadataImportsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMetadataImportsPatch(MetastoreProjectsLocationsServicesMetadataImportsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `MetadataImportsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`, `updateMask` ← `UpdateMask`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMetadataImportsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMetadataImportsPatchRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsPatchRequest.cs` |
| `MetadataImport` | `src/GoogleCloudDataproc/Models/MetadataImport.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesMetadataImportsPatchError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMigrationExecutionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMigrationExecutionsDelete(MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `MigrationExecutionsId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMigrationExecutionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMigrationExecutionsGet(MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `MigrationExecutionsId`
- **Returns**: `MigrationExecution`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMigrationExecutionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest.cs` |
| `MigrationExecution` | `src/GoogleCloudDataproc/Models/MigrationExecution.cs` |
| `MetastoreProjectsLocationsServicesMigrationExecutionsGetError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMigrationExecutionsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMigrationExecutionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMigrationExecutionsList(MetastoreProjectsLocationsServicesMigrationExecutionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListMigrationExecutionsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMigrationExecutionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMigrationExecutionsListRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMigrationExecutionsListRequest.cs` |
| `ListMigrationExecutionsResponse` | `src/GoogleCloudDataproc/Models/ListMigrationExecutionsResponse.cs` |
| `MetastoreProjectsLocationsServicesMigrationExecutionsListError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMigrationExecutionsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesMoveTableToDatabase

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesMoveTableToDatabase(MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesMoveTableToDatabaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest.cs` |
| `MoveTableToDatabaseRequest` | `src/GoogleCloudDataproc/Models/MoveTableToDatabaseRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesMoveTableToDatabaseError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMoveTableToDatabaseError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesPatch(MetastoreProjectsLocationsServicesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`, `updateMask` ← `UpdateMask`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesPatchRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesPatchRequest.cs` |
| `Service` | `src/GoogleCloudDataproc/Models/Service.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesPatchError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesQueryMetadata

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesQueryMetadata(MetastoreProjectsLocationsServicesQueryMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesQueryMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesQueryMetadataRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesQueryMetadataRequest.cs` |
| `QueryMetadataRequest` | `src/GoogleCloudDataproc/Models/QueryMetadataRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesQueryMetadataError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesQueryMetadataError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesRestore

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesRestore(MetastoreProjectsLocationsServicesRestoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesRestoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesRestoreRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesRestoreRequest.cs` |
| `RestoreServiceRequest` | `src/GoogleCloudDataproc/Models/RestoreServiceRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesRestoreError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesRestoreError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesSetIamPolicy(MetastoreProjectsLocationsServicesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Policy2`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesSetIamPolicyRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest2` | `src/GoogleCloudDataproc/Models/SetIamPolicyRequest2.cs` |
| `Policy2` | `src/GoogleCloudDataproc/Models/Policy2.cs` |
| `MetastoreProjectsLocationsServicesSetIamPolicyError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesStartMigration

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesStartMigration(MetastoreProjectsLocationsServicesStartMigrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesStartMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesStartMigrationRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesStartMigrationRequest.cs` |
| `StartMigrationRequest` | `src/GoogleCloudDataproc/Models/StartMigrationRequest.cs` |
| `Operation` | `src/GoogleCloudDataproc/Models/Operation.cs` |
| `MetastoreProjectsLocationsServicesStartMigrationError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesStartMigrationError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

### MetastoreProjectsLocationsServicesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `MetastoreProjectsLocationsServicesTestIamPermissions(MetastoreProjectsLocationsServicesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ServicesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<MetastoreProjectsLocationsServicesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetastoreProjectsLocationsServicesTestIamPermissionsRequest` | `src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudDataproc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs` |
| `MetastoreProjectsLocationsServicesTestIamPermissionsError` | `src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDataproc/Models/GoogleRpcError.cs` |

