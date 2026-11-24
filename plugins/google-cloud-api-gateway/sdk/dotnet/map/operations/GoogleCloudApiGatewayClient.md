<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudApiGatewayClient — operations

Accessor: `client` · Source: `src/GoogleCloudApiGateway/GoogleCloudApiGatewayClient.cs` · 30 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApigatewayProjectsLocationsApisConfigsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsCreate(ApigatewayProjectsLocationsApisConfigsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `Body`
- **Query params (wire ← C#)**: `apiConfigId` ← `ApiConfigId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsCreateRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsCreateRequest.cs` |
| `ApigatewayApiConfig` | `src/GoogleCloudApiGateway/Models/ApigatewayApiConfig.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsApisConfigsCreateError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsDelete(ApigatewayProjectsLocationsApisConfigsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `ConfigsId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsDeleteRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsDeleteRequest.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsApisConfigsDeleteError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsGet(ApigatewayProjectsLocationsApisConfigsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `ConfigsId`
- **Query params (wire ← C#)**: `view` ← `View`
- **Returns**: `ApigatewayApiConfig`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsGetRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsGetRequest.cs` |
| `View` | `src/GoogleCloudApiGateway/Models/Enums/View.cs` |
| `ApigatewayApiConfig` | `src/GoogleCloudApiGateway/Models/ApigatewayApiConfig.cs` |
| `ApigatewayProjectsLocationsApisConfigsGetError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsGetIamPolicy(ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `ConfigsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `ApigatewayPolicy`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest.cs` |
| `ApigatewayPolicy` | `src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs` |
| `ApigatewayProjectsLocationsApisConfigsGetIamPolicyError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsList(ApigatewayProjectsLocationsApisConfigsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApigatewayListApiConfigsResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsListRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsListRequest.cs` |
| `ApigatewayListApiConfigsResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayListApiConfigsResponse.cs` |
| `ApigatewayProjectsLocationsApisConfigsListError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsPatch(ApigatewayProjectsLocationsApisConfigsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `ConfigsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsPatchRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsPatchRequest.cs` |
| `ApigatewayApiConfig` | `src/GoogleCloudApiGateway/Models/ApigatewayApiConfig.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsApisConfigsPatchError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsSetIamPolicy(ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `ConfigsId`, `Body`
- **Returns**: `ApigatewayPolicy`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest.cs` |
| `ApigatewaySetIamPolicyRequest` | `src/GoogleCloudApiGateway/Models/ApigatewaySetIamPolicyRequest.cs` |
| `ApigatewayPolicy` | `src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs` |
| `ApigatewayProjectsLocationsApisConfigsSetIamPolicyError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisConfigsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisConfigsTestIamPermissions(ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `ConfigsId`, `Body`
- **Returns**: `ApigatewayTestIamPermissionsResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest.cs` |
| `ApigatewayTestIamPermissionsRequest` | `src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsRequest.cs` |
| `ApigatewayTestIamPermissionsResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsResponse.cs` |
| `ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisCreate(ApigatewayProjectsLocationsApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `apiId` ← `ApiId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisCreateRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisCreateRequest.cs` |
| `ApigatewayApi` | `src/GoogleCloudApiGateway/Models/ApigatewayApi.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsApisCreateError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisDelete(ApigatewayProjectsLocationsApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisDeleteRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisDeleteRequest.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsApisDeleteError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisGet(ApigatewayProjectsLocationsApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Returns**: `ApigatewayApi`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisGetRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisGetRequest.cs` |
| `ApigatewayApi` | `src/GoogleCloudApiGateway/Models/ApigatewayApi.cs` |
| `ApigatewayProjectsLocationsApisGetError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisGetIamPolicy(ApigatewayProjectsLocationsApisGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `ApigatewayPolicy`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisGetIamPolicyRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisGetIamPolicyRequest.cs` |
| `ApigatewayPolicy` | `src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs` |
| `ApigatewayProjectsLocationsApisGetIamPolicyError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisList(ApigatewayProjectsLocationsApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApigatewayListApisResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisListRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisListRequest.cs` |
| `ApigatewayListApisResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayListApisResponse.cs` |
| `ApigatewayProjectsLocationsApisListError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisPatch(ApigatewayProjectsLocationsApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisPatchRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisPatchRequest.cs` |
| `ApigatewayApi` | `src/GoogleCloudApiGateway/Models/ApigatewayApi.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsApisPatchError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisSetIamPolicy(ApigatewayProjectsLocationsApisSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `Body`
- **Returns**: `ApigatewayPolicy`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisSetIamPolicyRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisSetIamPolicyRequest.cs` |
| `ApigatewaySetIamPolicyRequest` | `src/GoogleCloudApiGateway/Models/ApigatewaySetIamPolicyRequest.cs` |
| `ApigatewayPolicy` | `src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs` |
| `ApigatewayProjectsLocationsApisSetIamPolicyError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsApisTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsApisTestIamPermissions(ApigatewayProjectsLocationsApisTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `Body`
- **Returns**: `ApigatewayTestIamPermissionsResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsApisTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsApisTestIamPermissionsRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisTestIamPermissionsRequest.cs` |
| `ApigatewayTestIamPermissionsRequest` | `src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsRequest.cs` |
| `ApigatewayTestIamPermissionsResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsResponse.cs` |
| `ApigatewayProjectsLocationsApisTestIamPermissionsError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysCreate(ApigatewayProjectsLocationsGatewaysCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `gatewayId` ← `GatewayId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysCreateRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysCreateRequest.cs` |
| `ApigatewayGateway` | `src/GoogleCloudApiGateway/Models/ApigatewayGateway.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsGatewaysCreateError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysDelete(ApigatewayProjectsLocationsGatewaysDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GatewaysId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysDeleteRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysDeleteRequest.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsGatewaysDeleteError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysGet(ApigatewayProjectsLocationsGatewaysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GatewaysId`
- **Returns**: `ApigatewayGateway`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysGetRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysGetRequest.cs` |
| `ApigatewayGateway` | `src/GoogleCloudApiGateway/Models/ApigatewayGateway.cs` |
| `ApigatewayProjectsLocationsGatewaysGetError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysGetIamPolicy(ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GatewaysId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `ApigatewayPolicy`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest.cs` |
| `ApigatewayPolicy` | `src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs` |
| `ApigatewayProjectsLocationsGatewaysGetIamPolicyError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysList(ApigatewayProjectsLocationsGatewaysListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApigatewayListGatewaysResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysListRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysListRequest.cs` |
| `ApigatewayListGatewaysResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayListGatewaysResponse.cs` |
| `ApigatewayProjectsLocationsGatewaysListError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysPatch(ApigatewayProjectsLocationsGatewaysPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GatewaysId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysPatchRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysPatchRequest.cs` |
| `ApigatewayGateway` | `src/GoogleCloudApiGateway/Models/ApigatewayGateway.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsGatewaysPatchError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysSetIamPolicy(ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GatewaysId`, `Body`
- **Returns**: `ApigatewayPolicy`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest.cs` |
| `ApigatewaySetIamPolicyRequest` | `src/GoogleCloudApiGateway/Models/ApigatewaySetIamPolicyRequest.cs` |
| `ApigatewayPolicy` | `src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs` |
| `ApigatewayProjectsLocationsGatewaysSetIamPolicyError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGatewaysTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGatewaysTestIamPermissions(ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GatewaysId`, `Body`
- **Returns**: `ApigatewayTestIamPermissionsResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsGatewaysTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest.cs` |
| `ApigatewayTestIamPermissionsRequest` | `src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsRequest.cs` |
| `ApigatewayTestIamPermissionsResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsResponse.cs` |
| `ApigatewayProjectsLocationsGatewaysTestIamPermissionsError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsGet(ApigatewayProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `ApigatewayLocation`
- **Error**: `ApiException<ApigatewayProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsGetRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGetRequest.cs` |
| `ApigatewayLocation` | `src/GoogleCloudApiGateway/Models/ApigatewayLocation.cs` |
| `ApigatewayProjectsLocationsGetError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsList(ApigatewayProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ApigatewayListLocationsResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsListRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsListRequest.cs` |
| `ApigatewayListLocationsResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayListLocationsResponse.cs` |
| `ApigatewayProjectsLocationsListError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsOperationsCancel(ApigatewayProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<ApigatewayProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsOperationsCancelRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsCancelRequest.cs` |
| `ApigatewayProjectsLocationsOperationsCancelError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsOperationsDelete(ApigatewayProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigatewayProjectsLocationsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsOperationsDeleteRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsDeleteRequest.cs` |
| `ApigatewayProjectsLocationsOperationsDeleteError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsOperationsGet(ApigatewayProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `ApigatewayOperation`
- **Error**: `ApiException<ApigatewayProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsOperationsGetRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsGetRequest.cs` |
| `ApigatewayOperation` | `src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs` |
| `ApigatewayProjectsLocationsOperationsGetError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

### ApigatewayProjectsLocationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigatewayProjectsLocationsOperationsList(ApigatewayProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ApigatewayListOperationsResponse`
- **Error**: `ApiException<ApigatewayProjectsLocationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigatewayProjectsLocationsOperationsListRequest` | `src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsListRequest.cs` |
| `ApigatewayListOperationsResponse` | `src/GoogleCloudApiGateway/Models/ApigatewayListOperationsResponse.cs` |
| `ApigatewayProjectsLocationsOperationsListError` | `src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudApiGateway/Models/GoogleRpcError.cs` |

