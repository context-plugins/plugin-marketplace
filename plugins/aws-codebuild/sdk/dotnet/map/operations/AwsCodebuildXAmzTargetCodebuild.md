<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild — operations

Accessor: `client.AwsCodebuildXAmzTargetCodebuild` · Source: `src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild.cs` · 38 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchDeleteBuilds

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDeleteBuilds(BatchDeleteBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDeleteBuildsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDeleteBuildsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchDeleteBuildsRequest.cs` |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `src/AwsCodeBuild/Models/Enums/XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.cs` |
| `BatchDeleteBuildsError` | `src/AwsCodeBuild/Errors/BatchDeleteBuildsError.cs` |

### BatchGetBuildBatches

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetBuildBatches(BatchGetBuildBatchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetBuildBatchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetBuildBatchesRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetBuildBatchesRequest.cs` |
| `XAmzTarget3` | `src/AwsCodeBuild/Models/Enums/XAmzTarget3.cs` |
| `BatchGetBuildBatchesError` | `src/AwsCodeBuild/Errors/BatchGetBuildBatchesError.cs` |

### BatchGetBuilds

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetBuilds(BatchGetBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetBuildsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetBuildsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetBuildsRequest.cs` |
| `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.cs` |
| `BatchGetBuildsError` | `src/AwsCodeBuild/Errors/BatchGetBuildsError.cs` |

### BatchGetProjects

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetProjects(BatchGetProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetProjectsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetProjectsRequest.cs` |
| `XAmzTarget6` | `src/AwsCodeBuild/Models/Enums/XAmzTarget6.cs` |
| `BatchGetProjectsError` | `src/AwsCodeBuild/Errors/BatchGetProjectsError.cs` |

### BatchGetReportGroups

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetReportGroups(BatchGetReportGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetReportGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetReportGroupsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetReportGroupsRequest.cs` |
| `XAmzTarget10` | `src/AwsCodeBuild/Models/Enums/XAmzTarget10.cs` |
| `BatchGetReportGroupsError` | `src/AwsCodeBuild/Errors/BatchGetReportGroupsError.cs` |

### BatchGetReports

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetReports(BatchGetReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchGetReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetReportsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetReportsRequest.cs` |
| `XAmzTarget15` | `src/AwsCodeBuild/Models/Enums/XAmzTarget15.cs` |
| `BatchGetReportsError` | `src/AwsCodeBuild/Errors/BatchGetReportsError.cs` |

### CreateProject

- **Auth**: `options.Sigv4`
- **Signature**: `CreateProject(CreateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/CreateProjectRequest.cs` |
| `XAmzTarget7` | `src/AwsCodeBuild/Models/Enums/XAmzTarget7.cs` |
| `CreateProjectError` | `src/AwsCodeBuild/Errors/CreateProjectError.cs` |

### CreateReportGroup

- **Auth**: `options.Sigv4`
- **Signature**: `CreateReportGroup(CreateReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateReportGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReportGroupRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/CreateReportGroupRequest.cs` |
| `XAmzTarget11` | `src/AwsCodeBuild/Models/Enums/XAmzTarget11.cs` |
| `CreateReportGroupError` | `src/AwsCodeBuild/Errors/CreateReportGroupError.cs` |

### CreateWebhook

- **Auth**: `options.Sigv4`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/CreateWebhookRequest.cs` |
| `XAmzTarget17` | `src/AwsCodeBuild/Models/Enums/XAmzTarget17.cs` |
| `CreateWebhookError` | `src/AwsCodeBuild/Errors/CreateWebhookError.cs` |

### DeleteBuildBatch

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBuildBatch(DeleteBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBuildBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBuildBatchRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteBuildBatchRequest.cs` |
| `XAmzTarget20` | `src/AwsCodeBuild/Models/Enums/XAmzTarget20.cs` |
| `DeleteBuildBatchError` | `src/AwsCodeBuild/Errors/DeleteBuildBatchError.cs` |

### DeleteProject

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteProjectRequest.cs` |
| `XAmzTarget8` | `src/AwsCodeBuild/Models/Enums/XAmzTarget8.cs` |
| `DeleteProjectError` | `src/AwsCodeBuild/Errors/DeleteProjectError.cs` |

### DeleteReportGroup

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteReportGroup(DeleteReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReportGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReportGroupRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteReportGroupRequest.cs` |
| `XAmzTarget12` | `src/AwsCodeBuild/Models/Enums/XAmzTarget12.cs` |
| `DeleteReportGroupError` | `src/AwsCodeBuild/Errors/DeleteReportGroupError.cs` |

### DeleteResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResourcePolicy(DeleteResourcePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteResourcePolicyRequest.cs` |
| `XAmzTarget23` | `src/AwsCodeBuild/Models/Enums/XAmzTarget23.cs` |
| `DeleteResourcePolicyError` | `src/AwsCodeBuild/Errors/DeleteResourcePolicyError.cs` |

### DeleteSourceCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSourceCredentials(DeleteSourceCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSourceCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSourceCredentialsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteSourceCredentialsRequest.cs` |
| `XAmzTarget26` | `src/AwsCodeBuild/Models/Enums/XAmzTarget26.cs` |
| `DeleteSourceCredentialsError` | `src/AwsCodeBuild/Errors/DeleteSourceCredentialsError.cs` |

### DeleteWebhook

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteWebhookRequest.cs` |
| `XAmzTarget18` | `src/AwsCodeBuild/Models/Enums/XAmzTarget18.cs` |
| `DeleteWebhookError` | `src/AwsCodeBuild/Errors/DeleteWebhookError.cs` |

### DescribeCodeCoverages

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCodeCoverages(DescribeCodeCoveragesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCodeCoveragesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCodeCoveragesRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DescribeCodeCoveragesRequest.cs` |
| `XAmzTarget29` | `src/AwsCodeBuild/Models/Enums/XAmzTarget29.cs` |
| `DescribeCodeCoveragesError` | `src/AwsCodeBuild/Errors/DescribeCodeCoveragesError.cs` |

### DescribeTestCases

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTestCases(DescribeTestCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTestCasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTestCasesRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DescribeTestCasesRequest.cs` |
| `XAmzTarget30` | `src/AwsCodeBuild/Models/Enums/XAmzTarget30.cs` |
| `DescribeTestCasesError` | `src/AwsCodeBuild/Errors/DescribeTestCasesError.cs` |

### GetReportGroupTrend

- **Auth**: `options.Sigv4`
- **Signature**: `GetReportGroupTrend(GetReportGroupTrendRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetReportGroupTrendError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReportGroupTrendRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/GetReportGroupTrendRequest.cs` |
| `XAmzTarget31` | `src/AwsCodeBuild/Models/Enums/XAmzTarget31.cs` |
| `GetReportGroupTrendError` | `src/AwsCodeBuild/Errors/GetReportGroupTrendError.cs` |

### GetResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `GetResourcePolicy(GetResourcePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResourcePolicyRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/GetResourcePolicyRequest.cs` |
| `XAmzTarget24` | `src/AwsCodeBuild/Models/Enums/XAmzTarget24.cs` |
| `GetResourcePolicyError` | `src/AwsCodeBuild/Errors/GetResourcePolicyError.cs` |

### ImportSourceCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `ImportSourceCredentials(ImportSourceCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ImportSourceCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportSourceCredentialsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ImportSourceCredentialsRequest.cs` |
| `XAmzTarget27` | `src/AwsCodeBuild/Models/Enums/XAmzTarget27.cs` |
| `ImportSourceCredentialsError` | `src/AwsCodeBuild/Errors/ImportSourceCredentialsError.cs` |

### InvalidateProjectCache

- **Auth**: `options.Sigv4`
- **Signature**: `InvalidateProjectCache(InvalidateProjectCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<InvalidateProjectCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InvalidateProjectCacheRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/InvalidateProjectCacheRequest.cs` |
| `XAmzTarget32` | `src/AwsCodeBuild/Models/Enums/XAmzTarget32.cs` |
| `InvalidateProjectCacheError` | `src/AwsCodeBuild/Errors/InvalidateProjectCacheError.cs` |

### ListBuildBatches

- **Auth**: `options.Sigv4`
- **Signature**: `ListBuildBatches(ListBuildBatchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListBuildBatchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildBatchesRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListBuildBatchesRequest.cs` |
| `XAmzTarget4` | `src/AwsCodeBuild/Models/Enums/XAmzTarget4.cs` |
| `ListBuildBatchesError` | `src/AwsCodeBuild/Errors/ListBuildBatchesError.cs` |

### ListBuildBatchesForProject

- **Auth**: `options.Sigv4`
- **Signature**: `ListBuildBatchesForProject(ListBuildBatchesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListBuildBatchesForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildBatchesForProjectRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListBuildBatchesForProjectRequest.cs` |
| `XAmzTarget5` | `src/AwsCodeBuild/Models/Enums/XAmzTarget5.cs` |
| `ListBuildBatchesForProjectError` | `src/AwsCodeBuild/Errors/ListBuildBatchesForProjectError.cs` |

### ListBuildsForProject

- **Auth**: `options.Sigv4`
- **Signature**: `ListBuildsForProject(ListBuildsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListBuildsForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildsForProjectRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListBuildsForProjectRequest.cs` |
| `XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi` | `src/AwsCodeBuild/Models/Enums/XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.cs` |
| `ListBuildsForProjectError` | `src/AwsCodeBuild/Errors/ListBuildsForProjectError.cs` |

### ListCuratedEnvironmentImages

- **Auth**: `options.Sigv4`
- **Signature**: `ListCuratedEnvironmentImages(ListCuratedEnvironmentImagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCuratedEnvironmentImagesRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListCuratedEnvironmentImagesRequest.cs` |
| `XAmzTarget34` | `src/AwsCodeBuild/Models/Enums/XAmzTarget34.cs` |

### ListReportGroups

- **Auth**: `options.Sigv4`
- **Signature**: `ListReportGroups(ListReportGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListReportGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReportGroupsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListReportGroupsRequest.cs` |
| `XAmzTarget13` | `src/AwsCodeBuild/Models/Enums/XAmzTarget13.cs` |
| `ListReportGroupsError` | `src/AwsCodeBuild/Errors/ListReportGroupsError.cs` |

### ListReportsForReportGroup

- **Auth**: `options.Sigv4`
- **Signature**: `ListReportsForReportGroup(ListReportsForReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListReportsForReportGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReportsForReportGroupRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListReportsForReportGroupRequest.cs` |
| `XAmzTarget16` | `src/AwsCodeBuild/Models/Enums/XAmzTarget16.cs` |
| `ListReportsForReportGroupError` | `src/AwsCodeBuild/Errors/ListReportsForReportGroupError.cs` |

### ListSharedProjects

- **Auth**: `options.Sigv4`
- **Signature**: `ListSharedProjects(ListSharedProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListSharedProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSharedProjectsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListSharedProjectsRequest.cs` |
| `XAmzTarget35` | `src/AwsCodeBuild/Models/Enums/XAmzTarget35.cs` |
| `ListSharedProjectsError` | `src/AwsCodeBuild/Errors/ListSharedProjectsError.cs` |

### ListSharedReportGroups

- **Auth**: `options.Sigv4`
- **Signature**: `ListSharedReportGroups(ListSharedReportGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListSharedReportGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSharedReportGroupsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListSharedReportGroupsRequest.cs` |
| `XAmzTarget36` | `src/AwsCodeBuild/Models/Enums/XAmzTarget36.cs` |
| `ListSharedReportGroupsError` | `src/AwsCodeBuild/Errors/ListSharedReportGroupsError.cs` |

### ListSourceCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `ListSourceCredentials(ListSourceCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListSourceCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSourceCredentialsRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListSourceCredentialsRequest.cs` |
| `XAmzTarget28` | `src/AwsCodeBuild/Models/Enums/XAmzTarget28.cs` |
| `ListSourceCredentialsError` | `src/AwsCodeBuild/Errors/ListSourceCredentialsError.cs` |

### PutResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `PutResourcePolicy(PutResourcePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutResourcePolicyRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/PutResourcePolicyRequest.cs` |
| `XAmzTarget25` | `src/AwsCodeBuild/Models/Enums/XAmzTarget25.cs` |
| `PutResourcePolicyError` | `src/AwsCodeBuild/Errors/PutResourcePolicyError.cs` |

### RetryBuildBatch

- **Auth**: `options.Sigv4`
- **Signature**: `RetryBuildBatch(RetryBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RetryBuildBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetryBuildBatchRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/RetryBuildBatchRequest.cs` |
| `XAmzTarget33` | `src/AwsCodeBuild/Models/Enums/XAmzTarget33.cs` |
| `RetryBuildBatchError` | `src/AwsCodeBuild/Errors/RetryBuildBatchError.cs` |

### StartBuildBatch

- **Auth**: `options.Sigv4`
- **Signature**: `StartBuildBatch(StartBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartBuildBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartBuildBatchRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/StartBuildBatchRequest.cs` |
| `XAmzTarget21` | `src/AwsCodeBuild/Models/Enums/XAmzTarget21.cs` |
| `StartBuildBatchError` | `src/AwsCodeBuild/Errors/StartBuildBatchError.cs` |

### StopBuildBatch

- **Auth**: `options.Sigv4`
- **Signature**: `StopBuildBatch(StopBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopBuildBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopBuildBatchRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/StopBuildBatchRequest.cs` |
| `XAmzTarget22` | `src/AwsCodeBuild/Models/Enums/XAmzTarget22.cs` |
| `StopBuildBatchError` | `src/AwsCodeBuild/Errors/StopBuildBatchError.cs` |

### UpdateProject

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProjectRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateProjectRequest.cs` |
| `XAmzTarget9` | `src/AwsCodeBuild/Models/Enums/XAmzTarget9.cs` |
| `UpdateProjectError` | `src/AwsCodeBuild/Errors/UpdateProjectError.cs` |

### UpdateProjectVisibility

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateProjectVisibility(UpdateProjectVisibilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateProjectVisibilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProjectVisibilityRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateProjectVisibilityRequest.cs` |
| `XAmzTarget37` | `src/AwsCodeBuild/Models/Enums/XAmzTarget37.cs` |
| `UpdateProjectVisibilityError` | `src/AwsCodeBuild/Errors/UpdateProjectVisibilityError.cs` |

### UpdateReportGroup

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateReportGroup(UpdateReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateReportGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateReportGroupRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateReportGroupRequest.cs` |
| `XAmzTarget14` | `src/AwsCodeBuild/Models/Enums/XAmzTarget14.cs` |
| `UpdateReportGroupError` | `src/AwsCodeBuild/Errors/UpdateReportGroupError.cs` |

### UpdateWebhook

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateWebhookRequest.cs` |
| `XAmzTarget19` | `src/AwsCodeBuild/Models/Enums/XAmzTarget19.cs` |
| `UpdateWebhookError` | `src/AwsCodeBuild/Errors/UpdateWebhookError.cs` |

