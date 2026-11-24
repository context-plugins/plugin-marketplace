<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudBuildClient — operations

Accessor: `client` · Source: `src/GoogleCloudBuild/GoogleCloudBuildClient.cs` · 22 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CloudbuildProjectsLocationsConnectionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsCreate(CloudbuildProjectsLocationsConnectionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `connectionId` ← `ConnectionId`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsCreateRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsCreateRequest.cs` |
| `Connection` | `src/GoogleCloudBuild/Models/Connection.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsConnectionsCreateError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsDelete(CloudbuildProjectsLocationsConnectionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`
- **Query params (wire ← C#)**: `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsDeleteRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsConnectionsDeleteError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsFetchLinkableRepositories

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `FetchLinkableRepositoriesResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest.cs` |
| `FetchLinkableRepositoriesResponse` | `src/GoogleCloudBuild/Models/FetchLinkableRepositoriesResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsGet(CloudbuildProjectsLocationsConnectionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`
- **Returns**: `Connection`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsGetRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsGetRequest.cs` |
| `Connection` | `src/GoogleCloudBuild/Models/Connection.cs` |
| `CloudbuildProjectsLocationsConnectionsGetError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsGetIamPolicy(CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudBuild/Models/Policy.cs` |
| `CloudbuildProjectsLocationsConnectionsGetIamPolicyError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsList(CloudbuildProjectsLocationsConnectionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListConnectionsResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsListRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsListRequest.cs` |
| `ListConnectionsResponse` | `src/GoogleCloudBuild/Models/ListConnectionsResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsListError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsPatch(CloudbuildProjectsLocationsConnectionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `etag` ← `Etag`, `updateMask` ← `UpdateMask`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsPatchRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsPatchRequest.cs` |
| `Connection` | `src/GoogleCloudBuild/Models/Connection.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsConnectionsPatchError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsProcessWebhook

- **Auth**: `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsProcessWebhook(CloudbuildProjectsLocationsConnectionsProcessWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `webhookKey` ← `WebhookKey`
- **Returns**: `object`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsProcessWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsProcessWebhookRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsProcessWebhookRequest.cs` |
| `HttpBody` | `src/GoogleCloudBuild/Models/HttpBody.cs` |
| `CloudbuildProjectsLocationsConnectionsProcessWebhookError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsProcessWebhookError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `RepositoriesId`, `Body`
- **Returns**: `FetchReadTokenResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest.cs` |
| `FetchReadTokenResponse` | `src/GoogleCloudBuild/Models/FetchReadTokenResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `RepositoriesId`, `Body`
- **Returns**: `FetchReadWriteTokenResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest.cs` |
| `FetchReadWriteTokenResponse` | `src/GoogleCloudBuild/Models/FetchReadWriteTokenResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest.cs` |
| `BatchCreateRepositoriesRequest` | `src/GoogleCloudBuild/Models/BatchCreateRepositoriesRequest.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesCreate(CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `Body`
- **Query params (wire ← C#)**: `repositoryId` ← `RepositoryId`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest.cs` |
| `Repository` | `src/GoogleCloudBuild/Models/Repository.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesCreateError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesDelete(CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `RepositoriesId`
- **Query params (wire ← C#)**: `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `RepositoriesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `refType` ← `RefType`
- **Returns**: `FetchGitRefsResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest.cs` |
| `RefType` | `src/GoogleCloudBuild/Models/Enums/RefType.cs` |
| `FetchGitRefsResponse` | `src/GoogleCloudBuild/Models/FetchGitRefsResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesGet(CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `RepositoriesId`
- **Returns**: `Repository`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest.cs` |
| `Repository` | `src/GoogleCloudBuild/Models/Repository.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesGetError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsRepositoriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsRepositoriesList(CloudbuildProjectsLocationsConnectionsRepositoriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListRepositoriesResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsRepositoriesListRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesListRequest.cs` |
| `ListRepositoriesResponse` | `src/GoogleCloudBuild/Models/ListRepositoriesResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesListError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsSetIamPolicy(CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudBuild/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudBuild/Models/Policy.cs` |
| `CloudbuildProjectsLocationsConnectionsSetIamPolicyError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsConnectionsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsConnectionsTestIamPermissions(CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsConnectionsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudBuild/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudBuild/Models/TestIamPermissionsResponse.cs` |
| `CloudbuildProjectsLocationsConnectionsTestIamPermissionsError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsGet(CloudbuildProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `Location`
- **Error**: `ApiException<CloudbuildProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsGetRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsGetRequest.cs` |
| `Location` | `src/GoogleCloudBuild/Models/Location.cs` |
| `CloudbuildProjectsLocationsGetError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsList(CloudbuildProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListLocationsResponse`
- **Error**: `ApiException<CloudbuildProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsListRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsListRequest.cs` |
| `ListLocationsResponse` | `src/GoogleCloudBuild/Models/ListLocationsResponse.cs` |
| `CloudbuildProjectsLocationsListError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsOperationsCancel(CloudbuildProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<CloudbuildProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsOperationsCancelRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsOperationsCancelRequest.cs` |
| `CloudbuildProjectsLocationsOperationsCancelError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

### CloudbuildProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudbuildProjectsLocationsOperationsGet(CloudbuildProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudbuildProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsOperationsGetRequest` | `src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudBuild/Models/Operation.cs` |
| `CloudbuildProjectsLocationsOperationsGetError` | `src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudBuild/Models/GoogleRpcError.cs` |

