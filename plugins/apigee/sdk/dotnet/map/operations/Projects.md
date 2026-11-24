<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/Apigee/Api/Projects.cs` · 101 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApigeeProjectsProvisionOrganization

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeProjectsProvisionOrganization(ApigeeProjectsProvisionOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeProjectsProvisionOrganizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeProjectsProvisionOrganizationRequest` | `src/Apigee/Requests/Projects/ApigeeProjectsProvisionOrganizationRequest.cs` |
| `GoogleCloudApigeeV1ProvisionOrganizationRequest` | `src/Apigee/Models/GoogleCloudApigeeV1ProvisionOrganizationRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeProjectsProvisionOrganizationError` | `src/Apigee/Errors/ApigeeProjectsProvisionOrganizationError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAddonsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAddonsGet(ApihubProjectsLocationsAddonsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AddonsId`
- **Returns**: `GoogleCloudApihubV1Addon`
- **Error**: `ApiException<ApihubProjectsLocationsAddonsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAddonsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAddonsGetRequest.cs` |
| `GoogleCloudApihubV1Addon` | `src/Apigee/Models/GoogleCloudApihubV1Addon.cs` |
| `ApihubProjectsLocationsAddonsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsAddonsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAddonsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAddonsList(ApihubProjectsLocationsAddonsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListAddonsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsAddonsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAddonsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAddonsListRequest.cs` |
| `GoogleCloudApihubV1ListAddonsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListAddonsResponse.cs` |
| `ApihubProjectsLocationsAddonsListError` | `src/Apigee/Errors/ApihubProjectsLocationsAddonsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAddonsManageConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAddonsManageConfig(ApihubProjectsLocationsAddonsManageConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AddonsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsAddonsManageConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAddonsManageConfigRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAddonsManageConfigRequest.cs` |
| `GoogleCloudApihubV1ManageAddonConfigRequest` | `src/Apigee/Models/GoogleCloudApihubV1ManageAddonConfigRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsAddonsManageConfigError` | `src/Apigee/Errors/ApihubProjectsLocationsAddonsManageConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApiHubInstancesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApiHubInstancesCreate(ApihubProjectsLocationsApiHubInstancesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `apiHubInstanceId` ← `ApiHubInstanceId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsApiHubInstancesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApiHubInstancesCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesCreateRequest.cs` |
| `GoogleCloudApihubV1ApiHubInstance` | `src/Apigee/Models/GoogleCloudApihubV1ApiHubInstance.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsApiHubInstancesCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApiHubInstancesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApiHubInstancesDelete(ApihubProjectsLocationsApiHubInstancesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApiHubInstancesId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsApiHubInstancesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApiHubInstancesDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsApiHubInstancesDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApiHubInstancesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApiHubInstancesGet(ApihubProjectsLocationsApiHubInstancesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApiHubInstancesId`
- **Returns**: `GoogleCloudApihubV1ApiHubInstance`
- **Error**: `ApiException<ApihubProjectsLocationsApiHubInstancesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApiHubInstancesGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesGetRequest.cs` |
| `GoogleCloudApihubV1ApiHubInstance` | `src/Apigee/Models/GoogleCloudApihubV1ApiHubInstance.cs` |
| `ApihubProjectsLocationsApiHubInstancesGetError` | `src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApiHubInstancesLookup

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApiHubInstancesLookup(ApihubProjectsLocationsApiHubInstancesLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `GoogleCloudApihubV1LookupApiHubInstanceResponse`
- **Error**: `ApiException<ApihubProjectsLocationsApiHubInstancesLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApiHubInstancesLookupRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesLookupRequest.cs` |
| `GoogleCloudApihubV1LookupApiHubInstanceResponse` | `src/Apigee/Models/GoogleCloudApihubV1LookupApiHubInstanceResponse.cs` |
| `ApihubProjectsLocationsApiHubInstancesLookupError` | `src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesLookupError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApiHubInstancesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApiHubInstancesPatch(ApihubProjectsLocationsApiHubInstancesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApiHubInstancesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsApiHubInstancesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApiHubInstancesPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesPatchRequest.cs` |
| `GoogleCloudApihubV1ApiHubInstance` | `src/Apigee/Models/GoogleCloudApihubV1ApiHubInstance.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsApiHubInstancesPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisCreate(ApihubProjectsLocationsApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `apiId` ← `ApiId`
- **Returns**: `GoogleCloudApihubV1Api`
- **Error**: `ApiException<ApihubProjectsLocationsApisCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisCreateRequest.cs` |
| `GoogleCloudApihubV1Api` | `src/Apigee/Models/GoogleCloudApihubV1Api.cs` |
| `ApihubProjectsLocationsApisCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsApisCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisDelete(ApihubProjectsLocationsApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Query params (wire ← C#)**: `force` ← `Force`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsApisDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisDeleteRequest.cs` |
| `ApihubProjectsLocationsApisDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsApisDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisGet(ApihubProjectsLocationsApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Returns**: `GoogleCloudApihubV1Api`
- **Error**: `ApiException<ApihubProjectsLocationsApisGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisGetRequest.cs` |
| `GoogleCloudApihubV1Api` | `src/Apigee/Models/GoogleCloudApihubV1Api.cs` |
| `ApihubProjectsLocationsApisGetError` | `src/Apigee/Errors/ApihubProjectsLocationsApisGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisList(ApihubProjectsLocationsApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListApisResponse`
- **Error**: `ApiException<ApihubProjectsLocationsApisListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisListRequest.cs` |
| `GoogleCloudApihubV1ListApisResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListApisResponse.cs` |
| `ApihubProjectsLocationsApisListError` | `src/Apigee/Errors/ApihubProjectsLocationsApisListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisPatch(ApihubProjectsLocationsApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Api`
- **Error**: `ApiException<ApihubProjectsLocationsApisPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisPatchRequest.cs` |
| `GoogleCloudApihubV1Api` | `src/Apigee/Models/GoogleCloudApihubV1Api.cs` |
| `ApihubProjectsLocationsApisPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsApisPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsCreate(ApihubProjectsLocationsApisVersionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `Body`
- **Query params (wire ← C#)**: `versionId` ← `VersionId`
- **Returns**: `GoogleCloudApihubV1Version`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsCreateRequest.cs` |
| `GoogleCloudApihubV1Version` | `src/Apigee/Models/GoogleCloudApihubV1Version.cs` |
| `ApihubProjectsLocationsApisVersionsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsDefinitionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsDefinitionsGet(ApihubProjectsLocationsApisVersionsDefinitionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `DefinitionsId`
- **Returns**: `GoogleCloudApihubV1Definition`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsDefinitionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsDefinitionsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsDefinitionsGetRequest.cs` |
| `GoogleCloudApihubV1Definition` | `src/Apigee/Models/GoogleCloudApihubV1Definition.cs` |
| `ApihubProjectsLocationsApisVersionsDefinitionsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsDefinitionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsDelete(ApihubProjectsLocationsApisVersionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`
- **Query params (wire ← C#)**: `force` ← `Force`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsDeleteRequest.cs` |
| `ApihubProjectsLocationsApisVersionsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsGet(ApihubProjectsLocationsApisVersionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`
- **Returns**: `GoogleCloudApihubV1Version`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsGetRequest.cs` |
| `GoogleCloudApihubV1Version` | `src/Apigee/Models/GoogleCloudApihubV1Version.cs` |
| `ApihubProjectsLocationsApisVersionsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsList(ApihubProjectsLocationsApisVersionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListVersionsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsListRequest.cs` |
| `GoogleCloudApihubV1ListVersionsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListVersionsResponse.cs` |
| `ApihubProjectsLocationsApisVersionsListError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsOperationsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsOperationsCreate(ApihubProjectsLocationsApisVersionsOperationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `Body`
- **Query params (wire ← C#)**: `apiOperationId` ← `ApiOperationId`
- **Returns**: `GoogleCloudApihubV1ApiOperation`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsOperationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsOperationsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsCreateRequest.cs` |
| `GoogleCloudApihubV1ApiOperation` | `src/Apigee/Models/GoogleCloudApihubV1ApiOperation.cs` |
| `ApihubProjectsLocationsApisVersionsOperationsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsOperationsDelete(ApihubProjectsLocationsApisVersionsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsOperationsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsDeleteRequest.cs` |
| `ApihubProjectsLocationsApisVersionsOperationsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsOperationsGet(ApihubProjectsLocationsApisVersionsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `OperationsId`
- **Returns**: `GoogleCloudApihubV1ApiOperation`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsOperationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsGetRequest.cs` |
| `GoogleCloudApihubV1ApiOperation` | `src/Apigee/Models/GoogleCloudApihubV1ApiOperation.cs` |
| `ApihubProjectsLocationsApisVersionsOperationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsOperationsList(ApihubProjectsLocationsApisVersionsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListApiOperationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsOperationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsListRequest.cs` |
| `GoogleCloudApihubV1ListApiOperationsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListApiOperationsResponse.cs` |
| `ApihubProjectsLocationsApisVersionsOperationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsOperationsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsOperationsPatch(ApihubProjectsLocationsApisVersionsOperationsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `OperationsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1ApiOperation`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsOperationsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsOperationsPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsPatchRequest.cs` |
| `GoogleCloudApihubV1ApiOperation` | `src/Apigee/Models/GoogleCloudApihubV1ApiOperation.cs` |
| `ApihubProjectsLocationsApisVersionsOperationsPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsPatch(ApihubProjectsLocationsApisVersionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Version`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsPatchRequest.cs` |
| `GoogleCloudApihubV1Version` | `src/Apigee/Models/GoogleCloudApihubV1Version.cs` |
| `ApihubProjectsLocationsApisVersionsPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsCreate(ApihubProjectsLocationsApisVersionsSpecsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `Body`
- **Query params (wire ← C#)**: `specId` ← `SpecId`
- **Returns**: `GoogleCloudApihubV1Spec`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsCreateRequest.cs` |
| `GoogleCloudApihubV1Spec` | `src/Apigee/Models/GoogleCloudApihubV1Spec.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsDelete(ApihubProjectsLocationsApisVersionsSpecsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `SpecsId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsDeleteRequest.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent(ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `SpecsId`
- **Query params (wire ← C#)**: `specContentType` ← `SpecContentType`
- **Returns**: `GoogleCloudApihubV1FetchAdditionalSpecContentResponse`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest.cs` |
| `SpecContentType1` | `src/Apigee/Models/Enums/SpecContentType1.cs` |
| `GoogleCloudApihubV1FetchAdditionalSpecContentResponse` | `src/Apigee/Models/GoogleCloudApihubV1FetchAdditionalSpecContentResponse.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsGet(ApihubProjectsLocationsApisVersionsSpecsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `SpecsId`
- **Returns**: `GoogleCloudApihubV1Spec`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsGetRequest.cs` |
| `GoogleCloudApihubV1Spec` | `src/Apigee/Models/GoogleCloudApihubV1Spec.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsGetContents

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsGetContents(ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `SpecsId`
- **Returns**: `GoogleCloudApihubV1SpecContents`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsGetContentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest.cs` |
| `GoogleCloudApihubV1SpecContents` | `src/Apigee/Models/GoogleCloudApihubV1SpecContents.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsGetContentsError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsGetContentsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsLint

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsLint(ApihubProjectsLocationsApisVersionsSpecsLintRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `SpecsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsLintError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsLintRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsLintRequest.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsLintError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsLintError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsList(ApihubProjectsLocationsApisVersionsSpecsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListSpecsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsListRequest.cs` |
| `GoogleCloudApihubV1ListSpecsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListSpecsResponse.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsListError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsApisVersionsSpecsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsApisVersionsSpecsPatch(ApihubProjectsLocationsApisVersionsSpecsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ApisId`, `VersionsId`, `SpecsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Spec`
- **Error**: `ApiException<ApihubProjectsLocationsApisVersionsSpecsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsApisVersionsSpecsPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsPatchRequest.cs` |
| `GoogleCloudApihubV1Spec` | `src/Apigee/Models/GoogleCloudApihubV1Spec.cs` |
| `ApihubProjectsLocationsApisVersionsSpecsPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAttributesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAttributesCreate(ApihubProjectsLocationsAttributesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `attributeId` ← `AttributeId`
- **Returns**: `GoogleCloudApihubV1Attribute`
- **Error**: `ApiException<ApihubProjectsLocationsAttributesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAttributesCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesCreateRequest.cs` |
| `GoogleCloudApihubV1Attribute` | `src/Apigee/Models/GoogleCloudApihubV1Attribute.cs` |
| `ApihubProjectsLocationsAttributesCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsAttributesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAttributesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAttributesDelete(ApihubProjectsLocationsAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AttributesId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsAttributesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAttributesDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesDeleteRequest.cs` |
| `ApihubProjectsLocationsAttributesDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsAttributesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAttributesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAttributesGet(ApihubProjectsLocationsAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AttributesId`
- **Returns**: `GoogleCloudApihubV1Attribute`
- **Error**: `ApiException<ApihubProjectsLocationsAttributesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAttributesGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesGetRequest.cs` |
| `GoogleCloudApihubV1Attribute` | `src/Apigee/Models/GoogleCloudApihubV1Attribute.cs` |
| `ApihubProjectsLocationsAttributesGetError` | `src/Apigee/Errors/ApihubProjectsLocationsAttributesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAttributesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAttributesList(ApihubProjectsLocationsAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListAttributesResponse`
- **Error**: `ApiException<ApihubProjectsLocationsAttributesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAttributesListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesListRequest.cs` |
| `GoogleCloudApihubV1ListAttributesResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListAttributesResponse.cs` |
| `ApihubProjectsLocationsAttributesListError` | `src/Apigee/Errors/ApihubProjectsLocationsAttributesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsAttributesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsAttributesPatch(ApihubProjectsLocationsAttributesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `AttributesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Attribute`
- **Error**: `ApiException<ApihubProjectsLocationsAttributesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsAttributesPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesPatchRequest.cs` |
| `GoogleCloudApihubV1Attribute` | `src/Apigee/Models/GoogleCloudApihubV1Attribute.cs` |
| `ApihubProjectsLocationsAttributesPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsAttributesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsCollectApiData

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsCollectApiData(ApihubProjectsLocationsCollectApiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsCollectApiDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCollectApiDataRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsCollectApiDataRequest.cs` |
| `GoogleCloudApihubV1CollectApiDataRequest` | `src/Apigee/Models/GoogleCloudApihubV1CollectApiDataRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsCollectApiDataError` | `src/Apigee/Errors/ApihubProjectsLocationsCollectApiDataError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsCurationsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsCurationsCreate(ApihubProjectsLocationsCurationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `curationId` ← `CurationId`
- **Returns**: `GoogleCloudApihubV1Curation`
- **Error**: `ApiException<ApihubProjectsLocationsCurationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCurationsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsCreateRequest.cs` |
| `GoogleCloudApihubV1Curation` | `src/Apigee/Models/GoogleCloudApihubV1Curation.cs` |
| `ApihubProjectsLocationsCurationsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsCurationsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsCurationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsCurationsDelete(ApihubProjectsLocationsCurationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `CurationsId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsCurationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCurationsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsDeleteRequest.cs` |
| `ApihubProjectsLocationsCurationsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsCurationsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsCurationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsCurationsGet(ApihubProjectsLocationsCurationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `CurationsId`
- **Returns**: `GoogleCloudApihubV1Curation`
- **Error**: `ApiException<ApihubProjectsLocationsCurationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCurationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsGetRequest.cs` |
| `GoogleCloudApihubV1Curation` | `src/Apigee/Models/GoogleCloudApihubV1Curation.cs` |
| `ApihubProjectsLocationsCurationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsCurationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsCurationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsCurationsList(ApihubProjectsLocationsCurationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListCurationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsCurationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCurationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsListRequest.cs` |
| `GoogleCloudApihubV1ListCurationsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListCurationsResponse.cs` |
| `ApihubProjectsLocationsCurationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsCurationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsCurationsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsCurationsPatch(ApihubProjectsLocationsCurationsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `CurationsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Curation`
- **Error**: `ApiException<ApihubProjectsLocationsCurationsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsCurationsPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsPatchRequest.cs` |
| `GoogleCloudApihubV1Curation` | `src/Apigee/Models/GoogleCloudApihubV1Curation.cs` |
| `ApihubProjectsLocationsCurationsPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsCurationsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDependenciesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDependenciesCreate(ApihubProjectsLocationsDependenciesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `dependencyId` ← `DependencyId`
- **Returns**: `GoogleCloudApihubV1Dependency`
- **Error**: `ApiException<ApihubProjectsLocationsDependenciesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDependenciesCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesCreateRequest.cs` |
| `GoogleCloudApihubV1Dependency` | `src/Apigee/Models/GoogleCloudApihubV1Dependency.cs` |
| `ApihubProjectsLocationsDependenciesCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsDependenciesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDependenciesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDependenciesDelete(ApihubProjectsLocationsDependenciesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DependenciesId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsDependenciesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDependenciesDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesDeleteRequest.cs` |
| `ApihubProjectsLocationsDependenciesDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsDependenciesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDependenciesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDependenciesGet(ApihubProjectsLocationsDependenciesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DependenciesId`
- **Returns**: `GoogleCloudApihubV1Dependency`
- **Error**: `ApiException<ApihubProjectsLocationsDependenciesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDependenciesGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesGetRequest.cs` |
| `GoogleCloudApihubV1Dependency` | `src/Apigee/Models/GoogleCloudApihubV1Dependency.cs` |
| `ApihubProjectsLocationsDependenciesGetError` | `src/Apigee/Errors/ApihubProjectsLocationsDependenciesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDependenciesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDependenciesList(ApihubProjectsLocationsDependenciesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListDependenciesResponse`
- **Error**: `ApiException<ApihubProjectsLocationsDependenciesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDependenciesListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesListRequest.cs` |
| `GoogleCloudApihubV1ListDependenciesResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListDependenciesResponse.cs` |
| `ApihubProjectsLocationsDependenciesListError` | `src/Apigee/Errors/ApihubProjectsLocationsDependenciesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDependenciesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDependenciesPatch(ApihubProjectsLocationsDependenciesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DependenciesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Dependency`
- **Error**: `ApiException<ApihubProjectsLocationsDependenciesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDependenciesPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesPatchRequest.cs` |
| `GoogleCloudApihubV1Dependency` | `src/Apigee/Models/GoogleCloudApihubV1Dependency.cs` |
| `ApihubProjectsLocationsDependenciesPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsDependenciesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDeploymentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDeploymentsCreate(ApihubProjectsLocationsDeploymentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `deploymentId` ← `DeploymentId`
- **Returns**: `GoogleCloudApihubV1Deployment`
- **Error**: `ApiException<ApihubProjectsLocationsDeploymentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDeploymentsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsCreateRequest.cs` |
| `GoogleCloudApihubV1Deployment` | `src/Apigee/Models/GoogleCloudApihubV1Deployment.cs` |
| `ApihubProjectsLocationsDeploymentsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsDeploymentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDeploymentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDeploymentsDelete(ApihubProjectsLocationsDeploymentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DeploymentsId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsDeploymentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDeploymentsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsDeleteRequest.cs` |
| `ApihubProjectsLocationsDeploymentsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsDeploymentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDeploymentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDeploymentsGet(ApihubProjectsLocationsDeploymentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DeploymentsId`
- **Returns**: `GoogleCloudApihubV1Deployment`
- **Error**: `ApiException<ApihubProjectsLocationsDeploymentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDeploymentsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsGetRequest.cs` |
| `GoogleCloudApihubV1Deployment` | `src/Apigee/Models/GoogleCloudApihubV1Deployment.cs` |
| `ApihubProjectsLocationsDeploymentsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsDeploymentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDeploymentsList(ApihubProjectsLocationsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListDeploymentsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDeploymentsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsListRequest.cs` |
| `GoogleCloudApihubV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListDeploymentsResponse.cs` |
| `ApihubProjectsLocationsDeploymentsListError` | `src/Apigee/Errors/ApihubProjectsLocationsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDeploymentsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDeploymentsPatch(ApihubProjectsLocationsDeploymentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DeploymentsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1Deployment`
- **Error**: `ApiException<ApihubProjectsLocationsDeploymentsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDeploymentsPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsPatchRequest.cs` |
| `GoogleCloudApihubV1Deployment` | `src/Apigee/Models/GoogleCloudApihubV1Deployment.cs` |
| `ApihubProjectsLocationsDeploymentsPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsDeploymentsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet(ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DiscoveredApiObservationsId`, `DiscoveredApiOperationsId`
- **Returns**: `GoogleCloudApihubV1DiscoveredApiOperation`
- **Error**: `ApiException<ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest.cs` |
| `GoogleCloudApihubV1DiscoveredApiOperation` | `src/Apigee/Models/GoogleCloudApihubV1DiscoveredApiOperation.cs` |
| `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList(ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DiscoveredApiObservationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListDiscoveredApiOperationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest.cs` |
| `GoogleCloudApihubV1ListDiscoveredApiOperationsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListDiscoveredApiOperationsResponse.cs` |
| `ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDiscoveredApiObservationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDiscoveredApiObservationsGet(ApihubProjectsLocationsDiscoveredApiObservationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `DiscoveredApiObservationsId`
- **Returns**: `GoogleCloudApihubV1DiscoveredApiObservation`
- **Error**: `ApiException<ApihubProjectsLocationsDiscoveredApiObservationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDiscoveredApiObservationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsGetRequest.cs` |
| `GoogleCloudApihubV1DiscoveredApiObservation` | `src/Apigee/Models/GoogleCloudApihubV1DiscoveredApiObservation.cs` |
| `ApihubProjectsLocationsDiscoveredApiObservationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsDiscoveredApiObservationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsDiscoveredApiObservationsList(ApihubProjectsLocationsDiscoveredApiObservationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListDiscoveredApiObservationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsDiscoveredApiObservationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsDiscoveredApiObservationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsListRequest.cs` |
| `GoogleCloudApihubV1ListDiscoveredApiObservationsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListDiscoveredApiObservationsResponse.cs` |
| `ApihubProjectsLocationsDiscoveredApiObservationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsExternalApisCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsExternalApisCreate(ApihubProjectsLocationsExternalApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `externalApiId` ← `ExternalApiId`
- **Returns**: `GoogleCloudApihubV1ExternalApi`
- **Error**: `ApiException<ApihubProjectsLocationsExternalApisCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsExternalApisCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisCreateRequest.cs` |
| `GoogleCloudApihubV1ExternalApi` | `src/Apigee/Models/GoogleCloudApihubV1ExternalApi.cs` |
| `ApihubProjectsLocationsExternalApisCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsExternalApisCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsExternalApisDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsExternalApisDelete(ApihubProjectsLocationsExternalApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ExternalApisId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsExternalApisDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsExternalApisDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisDeleteRequest.cs` |
| `ApihubProjectsLocationsExternalApisDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsExternalApisDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsExternalApisGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsExternalApisGet(ApihubProjectsLocationsExternalApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ExternalApisId`
- **Returns**: `GoogleCloudApihubV1ExternalApi`
- **Error**: `ApiException<ApihubProjectsLocationsExternalApisGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsExternalApisGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisGetRequest.cs` |
| `GoogleCloudApihubV1ExternalApi` | `src/Apigee/Models/GoogleCloudApihubV1ExternalApi.cs` |
| `ApihubProjectsLocationsExternalApisGetError` | `src/Apigee/Errors/ApihubProjectsLocationsExternalApisGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsExternalApisList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsExternalApisList(ApihubProjectsLocationsExternalApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListExternalApisResponse`
- **Error**: `ApiException<ApihubProjectsLocationsExternalApisListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsExternalApisListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisListRequest.cs` |
| `GoogleCloudApihubV1ListExternalApisResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListExternalApisResponse.cs` |
| `ApihubProjectsLocationsExternalApisListError` | `src/Apigee/Errors/ApihubProjectsLocationsExternalApisListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsExternalApisPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsExternalApisPatch(ApihubProjectsLocationsExternalApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ExternalApisId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1ExternalApi`
- **Error**: `ApiException<ApihubProjectsLocationsExternalApisPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsExternalApisPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisPatchRequest.cs` |
| `GoogleCloudApihubV1ExternalApi` | `src/Apigee/Models/GoogleCloudApihubV1ExternalApi.cs` |
| `ApihubProjectsLocationsExternalApisPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsExternalApisPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsGeneratedSpecApisGenerateSpec

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsGeneratedSpecApisGenerateSpec(ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GeneratedSpecApisId`, `Body`
- **Returns**: `GoogleCloudApihubV1GenerateSpecResponse`
- **Error**: `ApiException<ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest.cs` |
| `GoogleCloudApihubV1GenerateSpecRequest` | `src/Apigee/Models/GoogleCloudApihubV1GenerateSpecRequest.cs` |
| `GoogleCloudApihubV1GenerateSpecResponse` | `src/Apigee/Models/GoogleCloudApihubV1GenerateSpecResponse.cs` |
| `ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError` | `src/Apigee/Errors/ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsGeneratedSpecApisGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsGeneratedSpecApisGet(ApihubProjectsLocationsGeneratedSpecApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GeneratedSpecApisId`
- **Returns**: `GoogleCloudApihubV1GeneratedSpecApi`
- **Error**: `ApiException<ApihubProjectsLocationsGeneratedSpecApisGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsGeneratedSpecApisGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsGeneratedSpecApisGetRequest.cs` |
| `GoogleCloudApihubV1GeneratedSpecApi` | `src/Apigee/Models/GoogleCloudApihubV1GeneratedSpecApi.cs` |
| `ApihubProjectsLocationsGeneratedSpecApisGetError` | `src/Apigee/Errors/ApihubProjectsLocationsGeneratedSpecApisGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsGeneratedSpecApisList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsGeneratedSpecApisList(ApihubProjectsLocationsGeneratedSpecApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListGeneratedSpecApisResponse`
- **Error**: `ApiException<ApihubProjectsLocationsGeneratedSpecApisListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsGeneratedSpecApisListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsGeneratedSpecApisListRequest.cs` |
| `GoogleCloudApihubV1ListGeneratedSpecApisResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListGeneratedSpecApisResponse.cs` |
| `ApihubProjectsLocationsGeneratedSpecApisListError` | `src/Apigee/Errors/ApihubProjectsLocationsGeneratedSpecApisListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsGet(ApihubProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `GoogleCloudLocationLocation`
- **Error**: `ApiException<ApihubProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsGetRequest.cs` |
| `GoogleCloudLocationLocation` | `src/Apigee/Models/GoogleCloudLocationLocation.cs` |
| `ApihubProjectsLocationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsHostProjectRegistrationsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsHostProjectRegistrationsCreate(ApihubProjectsLocationsHostProjectRegistrationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `hostProjectRegistrationId` ← `HostProjectRegistrationId`
- **Returns**: `GoogleCloudApihubV1HostProjectRegistration`
- **Error**: `ApiException<ApihubProjectsLocationsHostProjectRegistrationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsHostProjectRegistrationsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsHostProjectRegistrationsCreateRequest.cs` |
| `GoogleCloudApihubV1HostProjectRegistration` | `src/Apigee/Models/GoogleCloudApihubV1HostProjectRegistration.cs` |
| `ApihubProjectsLocationsHostProjectRegistrationsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsHostProjectRegistrationsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsHostProjectRegistrationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsHostProjectRegistrationsGet(ApihubProjectsLocationsHostProjectRegistrationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `HostProjectRegistrationsId`
- **Returns**: `GoogleCloudApihubV1HostProjectRegistration`
- **Error**: `ApiException<ApihubProjectsLocationsHostProjectRegistrationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsHostProjectRegistrationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsHostProjectRegistrationsGetRequest.cs` |
| `GoogleCloudApihubV1HostProjectRegistration` | `src/Apigee/Models/GoogleCloudApihubV1HostProjectRegistration.cs` |
| `ApihubProjectsLocationsHostProjectRegistrationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsHostProjectRegistrationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsHostProjectRegistrationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsHostProjectRegistrationsList(ApihubProjectsLocationsHostProjectRegistrationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListHostProjectRegistrationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsHostProjectRegistrationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsHostProjectRegistrationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsHostProjectRegistrationsListRequest.cs` |
| `GoogleCloudApihubV1ListHostProjectRegistrationsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListHostProjectRegistrationsResponse.cs` |
| `ApihubProjectsLocationsHostProjectRegistrationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsHostProjectRegistrationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsList(ApihubProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudLocationListLocationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsListRequest.cs` |
| `GoogleCloudLocationListLocationsResponse` | `src/Apigee/Models/GoogleCloudLocationListLocationsResponse.cs` |
| `ApihubProjectsLocationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsLookupRuntimeProjectAttachment

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsLookupRuntimeProjectAttachment(ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse`
- **Error**: `ApiException<ApihubProjectsLocationsLookupRuntimeProjectAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest.cs` |
| `GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse` | `src/Apigee/Models/GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse.cs` |
| `ApihubProjectsLocationsLookupRuntimeProjectAttachmentError` | `src/Apigee/Errors/ApihubProjectsLocationsLookupRuntimeProjectAttachmentError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsOperationsCancel(ApihubProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsOperationsCancelRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsCancelRequest.cs` |
| `ApihubProjectsLocationsOperationsCancelError` | `src/Apigee/Errors/ApihubProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsOperationsDelete(ApihubProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsOperationsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsDeleteRequest.cs` |
| `ApihubProjectsLocationsOperationsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsOperationsGet(ApihubProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsOperationsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsGetRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsOperationsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsOperationsList(ApihubProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `GoogleLongrunningListOperationsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsOperationsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsListRequest.cs` |
| `GoogleLongrunningListOperationsResponse` | `src/Apigee/Models/GoogleLongrunningListOperationsResponse.cs` |
| `ApihubProjectsLocationsOperationsListError` | `src/Apigee/Errors/ApihubProjectsLocationsOperationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsCreate(ApihubProjectsLocationsPluginsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `pluginId` ← `PluginId`
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsCreateRequest.cs` |
| `GoogleCloudApihubV1Plugin` | `src/Apigee/Models/GoogleCloudApihubV1Plugin.cs` |
| `ApihubProjectsLocationsPluginsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsDelete(ApihubProjectsLocationsPluginsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsPluginsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsDisable

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsDisable(ApihubProjectsLocationsPluginsDisableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `Body`
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsDisableError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsDisableRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsDisableRequest.cs` |
| `GoogleCloudApihubV1Plugin` | `src/Apigee/Models/GoogleCloudApihubV1Plugin.cs` |
| `ApihubProjectsLocationsPluginsDisableError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsDisableError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsEnable

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsEnable(ApihubProjectsLocationsPluginsEnableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `Body`
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsEnableError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsEnableRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsEnableRequest.cs` |
| `GoogleCloudApihubV1Plugin` | `src/Apigee/Models/GoogleCloudApihubV1Plugin.cs` |
| `ApihubProjectsLocationsPluginsEnableError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsEnableError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsGet(ApihubProjectsLocationsPluginsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`
- **Returns**: `GoogleCloudApihubV1Plugin`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsGetRequest.cs` |
| `GoogleCloudApihubV1Plugin` | `src/Apigee/Models/GoogleCloudApihubV1Plugin.cs` |
| `ApihubProjectsLocationsPluginsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsGetStyleGuide

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsGetStyleGuide(ApihubProjectsLocationsPluginsGetStyleGuideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`
- **Returns**: `GoogleCloudApihubV1StyleGuide`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsGetStyleGuideError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsGetStyleGuideRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsGetStyleGuideRequest.cs` |
| `GoogleCloudApihubV1StyleGuide` | `src/Apigee/Models/GoogleCloudApihubV1StyleGuide.cs` |
| `ApihubProjectsLocationsPluginsGetStyleGuideError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsGetStyleGuideError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesCreate(ApihubProjectsLocationsPluginsInstancesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `Body`
- **Query params (wire ← C#)**: `pluginInstanceId` ← `PluginInstanceId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesCreateRequest.cs` |
| `GoogleCloudApihubV1PluginInstance` | `src/Apigee/Models/GoogleCloudApihubV1PluginInstance.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsPluginsInstancesCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesDelete(ApihubProjectsLocationsPluginsInstancesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsPluginsInstancesDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesDisableAction

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesDisableAction(ApihubProjectsLocationsPluginsInstancesDisableActionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesDisableActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesDisableActionRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesDisableActionRequest.cs` |
| `GoogleCloudApihubV1DisablePluginInstanceActionRequest` | `src/Apigee/Models/GoogleCloudApihubV1DisablePluginInstanceActionRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsPluginsInstancesDisableActionError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesDisableActionError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesEnableAction

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesEnableAction(ApihubProjectsLocationsPluginsInstancesEnableActionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesEnableActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesEnableActionRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesEnableActionRequest.cs` |
| `GoogleCloudApihubV1EnablePluginInstanceActionRequest` | `src/Apigee/Models/GoogleCloudApihubV1EnablePluginInstanceActionRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsPluginsInstancesEnableActionError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesEnableActionError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesExecuteAction

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesExecuteAction(ApihubProjectsLocationsPluginsInstancesExecuteActionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesExecuteActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesExecuteActionRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesExecuteActionRequest.cs` |
| `GoogleCloudApihubV1ExecutePluginInstanceActionRequest` | `src/Apigee/Models/GoogleCloudApihubV1ExecutePluginInstanceActionRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsPluginsInstancesExecuteActionError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesExecuteActionError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesGet(ApihubProjectsLocationsPluginsInstancesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`
- **Returns**: `GoogleCloudApihubV1PluginInstance`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesGetRequest.cs` |
| `GoogleCloudApihubV1PluginInstance` | `src/Apigee/Models/GoogleCloudApihubV1PluginInstance.cs` |
| `ApihubProjectsLocationsPluginsInstancesGetError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesList(ApihubProjectsLocationsPluginsInstancesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListPluginInstancesResponse`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesListRequest.cs` |
| `GoogleCloudApihubV1ListPluginInstancesResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListPluginInstancesResponse.cs` |
| `ApihubProjectsLocationsPluginsInstancesListError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesManageSourceData

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesManageSourceData(ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesManageSourceDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest.cs` |
| `GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest` | `src/Apigee/Models/GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest.cs` |
| `ApihubProjectsLocationsPluginsInstancesManageSourceDataError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesManageSourceDataError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsInstancesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsInstancesPatch(ApihubProjectsLocationsPluginsInstancesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `InstancesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1PluginInstance`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsInstancesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsInstancesPatchRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesPatchRequest.cs` |
| `GoogleCloudApihubV1PluginInstance` | `src/Apigee/Models/GoogleCloudApihubV1PluginInstance.cs` |
| `ApihubProjectsLocationsPluginsInstancesPatchError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsList(ApihubProjectsLocationsPluginsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListPluginsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsListRequest.cs` |
| `GoogleCloudApihubV1ListPluginsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListPluginsResponse.cs` |
| `ApihubProjectsLocationsPluginsListError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsStyleGuideGetContents

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsStyleGuideGetContents(ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`
- **Returns**: `GoogleCloudApihubV1StyleGuideContents`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsStyleGuideGetContentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest.cs` |
| `GoogleCloudApihubV1StyleGuideContents` | `src/Apigee/Models/GoogleCloudApihubV1StyleGuideContents.cs` |
| `ApihubProjectsLocationsPluginsStyleGuideGetContentsError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsStyleGuideGetContentsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsPluginsUpdateStyleGuide

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsPluginsUpdateStyleGuide(ApihubProjectsLocationsPluginsUpdateStyleGuideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PluginsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApihubV1StyleGuide`
- **Error**: `ApiException<ApihubProjectsLocationsPluginsUpdateStyleGuideError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsPluginsUpdateStyleGuideRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsUpdateStyleGuideRequest.cs` |
| `GoogleCloudApihubV1StyleGuide` | `src/Apigee/Models/GoogleCloudApihubV1StyleGuide.cs` |
| `ApihubProjectsLocationsPluginsUpdateStyleGuideError` | `src/Apigee/Errors/ApihubProjectsLocationsPluginsUpdateStyleGuideError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsRetrieveApiViews

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsRetrieveApiViews(ApihubProjectsLocationsRetrieveApiViewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `view` ← `View`
- **Returns**: `GoogleCloudApihubV1RetrieveApiViewsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsRetrieveApiViewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsRetrieveApiViewsRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsRetrieveApiViewsRequest.cs` |
| `ViewApigeeProjectsApi` | `src/Apigee/Models/Enums/ViewApigeeProjectsApi.cs` |
| `GoogleCloudApihubV1RetrieveApiViewsResponse` | `src/Apigee/Models/GoogleCloudApihubV1RetrieveApiViewsResponse.cs` |
| `ApihubProjectsLocationsRetrieveApiViewsError` | `src/Apigee/Errors/ApihubProjectsLocationsRetrieveApiViewsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsRuntimeProjectAttachmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsRuntimeProjectAttachmentsCreate(ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `runtimeProjectAttachmentId` ← `RuntimeProjectAttachmentId`
- **Returns**: `GoogleCloudApihubV1RuntimeProjectAttachment`
- **Error**: `ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest.cs` |
| `GoogleCloudApihubV1RuntimeProjectAttachment` | `src/Apigee/Models/GoogleCloudApihubV1RuntimeProjectAttachment.cs` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError` | `src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsRuntimeProjectAttachmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsRuntimeProjectAttachmentsDelete(ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `RuntimeProjectAttachmentsId`
- **Returns**: `object`
- **Error**: `ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest.cs` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError` | `src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsRuntimeProjectAttachmentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsRuntimeProjectAttachmentsGet(ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `RuntimeProjectAttachmentsId`
- **Returns**: `GoogleCloudApihubV1RuntimeProjectAttachment`
- **Error**: `ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest.cs` |
| `GoogleCloudApihubV1RuntimeProjectAttachment` | `src/Apigee/Models/GoogleCloudApihubV1RuntimeProjectAttachment.cs` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsGetError` | `src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsRuntimeProjectAttachmentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsRuntimeProjectAttachmentsList(ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse`
- **Error**: `ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest.cs` |
| `GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse` | `src/Apigee/Models/GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse.cs` |
| `ApihubProjectsLocationsRuntimeProjectAttachmentsListError` | `src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsSearchResources

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsSearchResources(ApihubProjectsLocationsSearchResourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `GoogleCloudApihubV1SearchResourcesResponse`
- **Error**: `ApiException<ApihubProjectsLocationsSearchResourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsSearchResourcesRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsSearchResourcesRequest.cs` |
| `GoogleCloudApihubV1SearchResourcesRequest` | `src/Apigee/Models/GoogleCloudApihubV1SearchResourcesRequest.cs` |
| `GoogleCloudApihubV1SearchResourcesResponse` | `src/Apigee/Models/GoogleCloudApihubV1SearchResourcesResponse.cs` |
| `ApihubProjectsLocationsSearchResourcesError` | `src/Apigee/Errors/ApihubProjectsLocationsSearchResourcesError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApihubProjectsLocationsServersConfigureAndDeployServer

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApihubProjectsLocationsServersConfigureAndDeployServer(ApihubProjectsLocationsServersConfigureAndDeployServerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApihubProjectsLocationsServersConfigureAndDeployServerError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApihubProjectsLocationsServersConfigureAndDeployServerRequest` | `src/Apigee/Requests/Projects/ApihubProjectsLocationsServersConfigureAndDeployServerRequest.cs` |
| `GoogleCloudApihubV1ConfigureAndDeployServerRequest` | `src/Apigee/Models/GoogleCloudApihubV1ConfigureAndDeployServerRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApihubProjectsLocationsServersConfigureAndDeployServerError` | `src/Apigee/Errors/ApihubProjectsLocationsServersConfigureAndDeployServerError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

