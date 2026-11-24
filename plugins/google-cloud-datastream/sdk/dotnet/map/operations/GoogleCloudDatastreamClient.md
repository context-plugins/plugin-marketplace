<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudDatastreamClient — operations

Accessor: `client` · Source: `src/GoogleCloudDatastream/GoogleCloudDatastreamClient.cs` · 32 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DatastreamProjectsLocationsConnectionProfilesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsConnectionProfilesCreate(DatastreamProjectsLocationsConnectionProfilesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `connectionProfileId` ← `ConnectionProfileId`, `force` ← `Force`, `requestId` ← `RequestId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsConnectionProfilesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsConnectionProfilesCreateRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesCreateRequest.cs` |
| `ConnectionProfile` | `src/GoogleCloudDatastream/Models/ConnectionProfile.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsConnectionProfilesCreateError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsConnectionProfilesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsConnectionProfilesDelete(DatastreamProjectsLocationsConnectionProfilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionProfilesId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsConnectionProfilesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsConnectionProfilesDeleteRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsConnectionProfilesDeleteError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsConnectionProfilesDiscover

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsConnectionProfilesDiscover(DatastreamProjectsLocationsConnectionProfilesDiscoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `DiscoverConnectionProfileResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsConnectionProfilesDiscoverError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsConnectionProfilesDiscoverRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesDiscoverRequest.cs` |
| `DiscoverConnectionProfileRequest` | `src/GoogleCloudDatastream/Models/DiscoverConnectionProfileRequest.cs` |
| `DiscoverConnectionProfileResponse` | `src/GoogleCloudDatastream/Models/DiscoverConnectionProfileResponse.cs` |
| `DatastreamProjectsLocationsConnectionProfilesDiscoverError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesDiscoverError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsConnectionProfilesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsConnectionProfilesGet(DatastreamProjectsLocationsConnectionProfilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionProfilesId`
- **Returns**: `ConnectionProfile`
- **Error**: `ApiException<DatastreamProjectsLocationsConnectionProfilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsConnectionProfilesGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesGetRequest.cs` |
| `ConnectionProfile` | `src/GoogleCloudDatastream/Models/ConnectionProfile.cs` |
| `DatastreamProjectsLocationsConnectionProfilesGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsConnectionProfilesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsConnectionProfilesList(DatastreamProjectsLocationsConnectionProfilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListConnectionProfilesResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsConnectionProfilesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsConnectionProfilesListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesListRequest.cs` |
| `ListConnectionProfilesResponse` | `src/GoogleCloudDatastream/Models/ListConnectionProfilesResponse.cs` |
| `DatastreamProjectsLocationsConnectionProfilesListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsConnectionProfilesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsConnectionProfilesPatch(DatastreamProjectsLocationsConnectionProfilesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ConnectionProfilesId`, `Body`
- **Query params (wire ← C#)**: `force` ← `Force`, `requestId` ← `RequestId`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsConnectionProfilesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsConnectionProfilesPatchRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesPatchRequest.cs` |
| `ConnectionProfile` | `src/GoogleCloudDatastream/Models/ConnectionProfile.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsConnectionProfilesPatchError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsFetchStaticIps

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsFetchStaticIps(DatastreamProjectsLocationsFetchStaticIpsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `FetchStaticIpsResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsFetchStaticIpsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsFetchStaticIpsRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsFetchStaticIpsRequest.cs` |
| `FetchStaticIpsResponse` | `src/GoogleCloudDatastream/Models/FetchStaticIpsResponse.cs` |
| `DatastreamProjectsLocationsFetchStaticIpsError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsFetchStaticIpsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsGet(DatastreamProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `Location`
- **Error**: `ApiException<DatastreamProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsGetRequest.cs` |
| `Location` | `src/GoogleCloudDatastream/Models/Location.cs` |
| `DatastreamProjectsLocationsGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsList(DatastreamProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListLocationsResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsListRequest.cs` |
| `ListLocationsResponse` | `src/GoogleCloudDatastream/Models/ListLocationsResponse.cs` |
| `DatastreamProjectsLocationsListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsOperationsCancel(DatastreamProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<DatastreamProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsOperationsCancelRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsCancelRequest.cs` |
| `DatastreamProjectsLocationsOperationsCancelError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsOperationsDelete(DatastreamProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<DatastreamProjectsLocationsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsOperationsDeleteRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsDeleteRequest.cs` |
| `DatastreamProjectsLocationsOperationsDeleteError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsOperationsGet(DatastreamProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsOperationsGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsOperationsGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsOperationsList(DatastreamProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListOperationsResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsOperationsListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsListRequest.cs` |
| `ListOperationsResponse` | `src/GoogleCloudDatastream/Models/ListOperationsResponse.cs` |
| `DatastreamProjectsLocationsOperationsListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsCreate(DatastreamProjectsLocationsPrivateConnectionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `force` ← `Force`, `privateConnectionId` ← `PrivateConnectionId`, `requestId` ← `RequestId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsCreateRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsCreateRequest.cs` |
| `PrivateConnection` | `src/GoogleCloudDatastream/Models/PrivateConnection.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsCreateError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsDelete(DatastreamProjectsLocationsPrivateConnectionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PrivateConnectionsId`
- **Query params (wire ← C#)**: `force` ← `Force`, `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsDeleteRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsDeleteError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsGet(DatastreamProjectsLocationsPrivateConnectionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PrivateConnectionsId`
- **Returns**: `PrivateConnection`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsGetRequest.cs` |
| `PrivateConnection` | `src/GoogleCloudDatastream/Models/PrivateConnection.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsList(DatastreamProjectsLocationsPrivateConnectionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListPrivateConnectionsResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsListRequest.cs` |
| `ListPrivateConnectionsResponse` | `src/GoogleCloudDatastream/Models/ListPrivateConnectionsResponse.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsRoutesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsRoutesCreate(DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PrivateConnectionsId`, `Body`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`, `routeId` ← `RouteId`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest.cs` |
| `Route` | `src/GoogleCloudDatastream/Models/Route.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsRoutesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsRoutesDelete(DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PrivateConnectionsId`, `RoutesId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsRoutesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsRoutesGet(DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PrivateConnectionsId`, `RoutesId`
- **Returns**: `Route`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest.cs` |
| `Route` | `src/GoogleCloudDatastream/Models/Route.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsPrivateConnectionsRoutesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsPrivateConnectionsRoutesList(DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PrivateConnectionsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListRoutesResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest.cs` |
| `ListRoutesResponse` | `src/GoogleCloudDatastream/Models/ListRoutesResponse.cs` |
| `DatastreamProjectsLocationsPrivateConnectionsRoutesListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsCreate(DatastreamProjectsLocationsStreamsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `force` ← `Force`, `requestId` ← `RequestId`, `streamId` ← `StreamId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsCreateRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsCreateRequest.cs` |
| `Stream` | `src/GoogleCloudDatastream/Models/Stream.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsStreamsCreateError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsDelete(DatastreamProjectsLocationsStreamsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`
- **Query params (wire ← C#)**: `requestId` ← `RequestId`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsDeleteRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsDeleteRequest.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsStreamsDeleteError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsGet(DatastreamProjectsLocationsStreamsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`
- **Returns**: `Stream`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsGetRequest.cs` |
| `Stream` | `src/GoogleCloudDatastream/Models/Stream.cs` |
| `DatastreamProjectsLocationsStreamsGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsList(DatastreamProjectsLocationsStreamsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListStreamsResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsListRequest.cs` |
| `ListStreamsResponse` | `src/GoogleCloudDatastream/Models/ListStreamsResponse.cs` |
| `DatastreamProjectsLocationsStreamsListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsObjectsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsObjectsGet(DatastreamProjectsLocationsStreamsObjectsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`, `ObjectsId`
- **Returns**: `StreamObject`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsObjectsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsObjectsGetRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsGetRequest.cs` |
| `StreamObject` | `src/GoogleCloudDatastream/Models/StreamObject.cs` |
| `DatastreamProjectsLocationsStreamsObjectsGetError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsObjectsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsObjectsList(DatastreamProjectsLocationsStreamsObjectsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListStreamObjectsResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsObjectsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsObjectsListRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsListRequest.cs` |
| `ListStreamObjectsResponse` | `src/GoogleCloudDatastream/Models/ListStreamObjectsResponse.cs` |
| `DatastreamProjectsLocationsStreamsObjectsListError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsObjectsLookup

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsObjectsLookup(DatastreamProjectsLocationsStreamsObjectsLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`, `Body`
- **Returns**: `StreamObject`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsObjectsLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsObjectsLookupRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsLookupRequest.cs` |
| `LookupStreamObjectRequest` | `src/GoogleCloudDatastream/Models/LookupStreamObjectRequest.cs` |
| `StreamObject` | `src/GoogleCloudDatastream/Models/StreamObject.cs` |
| `DatastreamProjectsLocationsStreamsObjectsLookupError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsLookupError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsObjectsStartBackfillJob

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsObjectsStartBackfillJob(DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`, `ObjectsId`, `Body`
- **Returns**: `StartBackfillJobResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest.cs` |
| `StartBackfillJobRequest` | `src/GoogleCloudDatastream/Models/StartBackfillJobRequest.cs` |
| `StartBackfillJobResponse` | `src/GoogleCloudDatastream/Models/StartBackfillJobResponse.cs` |
| `DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsObjectsStopBackfillJob

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsObjectsStopBackfillJob(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`, `ObjectsId`, `Body`
- **Returns**: `StopBackfillJobResponse`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest.cs` |
| `StopBackfillJobResponse` | `src/GoogleCloudDatastream/Models/StopBackfillJobResponse.cs` |
| `DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsPatch(DatastreamProjectsLocationsStreamsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`, `Body`
- **Query params (wire ← C#)**: `force` ← `Force`, `requestId` ← `RequestId`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsPatchRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsPatchRequest.cs` |
| `Stream` | `src/GoogleCloudDatastream/Models/Stream.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsStreamsPatchError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

### DatastreamProjectsLocationsStreamsRun

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `DatastreamProjectsLocationsStreamsRun(DatastreamProjectsLocationsStreamsRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `StreamsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<DatastreamProjectsLocationsStreamsRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatastreamProjectsLocationsStreamsRunRequest` | `src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsRunRequest.cs` |
| `RunStreamRequest` | `src/GoogleCloudDatastream/Models/RunStreamRequest.cs` |
| `Operation` | `src/GoogleCloudDatastream/Models/Operation.cs` |
| `DatastreamProjectsLocationsStreamsRunError` | `src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsRunError.cs` |
| `GoogleRpcError` | `src/GoogleCloudDatastream/Models/GoogleRpcError.cs` |

