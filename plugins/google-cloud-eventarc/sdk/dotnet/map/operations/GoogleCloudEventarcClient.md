<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudEventarcClient — operations

Accessor: `client` · Source: `src/GoogleCloudEventarc/GoogleCloudEventarcClient.cs` · 66 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EventarcProjectsLocationsChannelConnectionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsCreate(EventarcProjectsLocationsChannelConnectionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `channelConnectionId` ← `ChannelConnectionId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsCreateRequest.cs` |
| `ChannelConnection` | `src/GoogleCloudEventarc/Models/ChannelConnection.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsChannelConnectionsCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelConnectionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsDelete(EventarcProjectsLocationsChannelConnectionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelConnectionsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsChannelConnectionsDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelConnectionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsGet(EventarcProjectsLocationsChannelConnectionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelConnectionsId`
- **Returns**: `ChannelConnection`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsGetRequest.cs` |
| `ChannelConnection` | `src/GoogleCloudEventarc/Models/ChannelConnection.cs` |
| `EventarcProjectsLocationsChannelConnectionsGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelConnectionsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsGetIamPolicy(EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelConnectionsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsChannelConnectionsGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelConnectionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsList(EventarcProjectsLocationsChannelConnectionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListChannelConnectionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsListRequest.cs` |
| `ListChannelConnectionsResponse` | `src/GoogleCloudEventarc/Models/ListChannelConnectionsResponse.cs` |
| `EventarcProjectsLocationsChannelConnectionsListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelConnectionsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsSetIamPolicy(EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelConnectionsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsChannelConnectionsSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelConnectionsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelConnectionsTestIamPermissions(EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelConnectionsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsCreate(EventarcProjectsLocationsChannelsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `channelId` ← `ChannelId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsCreateRequest.cs` |
| `Channel` | `src/GoogleCloudEventarc/Models/Channel.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsChannelsCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsDelete(EventarcProjectsLocationsChannelsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelsId`
- **Query params (wire ← C#)**: `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsChannelsDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsGet(EventarcProjectsLocationsChannelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelsId`
- **Returns**: `Channel`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsGetRequest.cs` |
| `Channel` | `src/GoogleCloudEventarc/Models/Channel.cs` |
| `EventarcProjectsLocationsChannelsGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsGetIamPolicy(EventarcProjectsLocationsChannelsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsChannelsGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsList(EventarcProjectsLocationsChannelsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListChannelsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsListRequest.cs` |
| `ListChannelsResponse` | `src/GoogleCloudEventarc/Models/ListChannelsResponse.cs` |
| `EventarcProjectsLocationsChannelsListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsPatch(EventarcProjectsLocationsChannelsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsPatchRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsPatchRequest.cs` |
| `Channel` | `src/GoogleCloudEventarc/Models/Channel.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsChannelsPatchError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsSetIamPolicy(EventarcProjectsLocationsChannelsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsChannelsSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsChannelsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsChannelsTestIamPermissions(EventarcProjectsLocationsChannelsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ChannelsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsChannelsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsChannelsTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsChannelsTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsCreate(EventarcProjectsLocationsEnrollmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `enrollmentId` ← `EnrollmentId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsCreateRequest.cs` |
| `Enrollment` | `src/GoogleCloudEventarc/Models/Enrollment.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsEnrollmentsCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsDelete(EventarcProjectsLocationsEnrollmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `EnrollmentsId`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsEnrollmentsDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsGet(EventarcProjectsLocationsEnrollmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `EnrollmentsId`
- **Returns**: `Enrollment`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsGetRequest.cs` |
| `Enrollment` | `src/GoogleCloudEventarc/Models/Enrollment.cs` |
| `EventarcProjectsLocationsEnrollmentsGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsGetIamPolicy(EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `EnrollmentsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsEnrollmentsGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsList(EventarcProjectsLocationsEnrollmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListEnrollmentsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsListRequest.cs` |
| `ListEnrollmentsResponse` | `src/GoogleCloudEventarc/Models/ListEnrollmentsResponse.cs` |
| `EventarcProjectsLocationsEnrollmentsListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsPatch(EventarcProjectsLocationsEnrollmentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `EnrollmentsId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsPatchRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsPatchRequest.cs` |
| `Enrollment` | `src/GoogleCloudEventarc/Models/Enrollment.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsEnrollmentsPatchError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsSetIamPolicy(EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `EnrollmentsId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsEnrollmentsSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsEnrollmentsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsEnrollmentsTestIamPermissions(EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `EnrollmentsId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsEnrollmentsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsEnrollmentsTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGet(EventarcProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `Location`
- **Error**: `ApiException<EventarcProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGetRequest.cs` |
| `Location` | `src/GoogleCloudEventarc/Models/Location.cs` |
| `EventarcProjectsLocationsGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGetGoogleChannelConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGetGoogleChannelConfig(EventarcProjectsLocationsGetGoogleChannelConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `GoogleChannelConfig`
- **Error**: `ApiException<EventarcProjectsLocationsGetGoogleChannelConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGetGoogleChannelConfigRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGetGoogleChannelConfigRequest.cs` |
| `GoogleChannelConfig` | `src/GoogleCloudEventarc/Models/GoogleChannelConfig.cs` |
| `EventarcProjectsLocationsGetGoogleChannelConfigError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGetGoogleChannelConfigError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesCreate(EventarcProjectsLocationsGoogleApiSourcesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `googleApiSourceId` ← `GoogleApiSourceId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesCreateRequest.cs` |
| `GoogleApiSource` | `src/GoogleCloudEventarc/Models/GoogleApiSource.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesDelete(EventarcProjectsLocationsGoogleApiSourcesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GoogleApiSourcesId`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesGet(EventarcProjectsLocationsGoogleApiSourcesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GoogleApiSourcesId`
- **Returns**: `GoogleApiSource`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesGetRequest.cs` |
| `GoogleApiSource` | `src/GoogleCloudEventarc/Models/GoogleApiSource.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GoogleApiSourcesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesList(EventarcProjectsLocationsGoogleApiSourcesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListGoogleApiSourcesResponse`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesListRequest.cs` |
| `ListGoogleApiSourcesResponse` | `src/GoogleCloudEventarc/Models/ListGoogleApiSourcesResponse.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesPatch(EventarcProjectsLocationsGoogleApiSourcesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GoogleApiSourcesId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesPatchRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesPatchRequest.cs` |
| `GoogleApiSource` | `src/GoogleCloudEventarc/Models/GoogleApiSource.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesPatchError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GoogleApiSourcesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsGoogleApiSourcesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `GoogleApiSourcesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsList(EventarcProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListLocationsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsListRequest.cs` |
| `ListLocationsResponse` | `src/GoogleCloudEventarc/Models/ListLocationsResponse.cs` |
| `EventarcProjectsLocationsListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesCreate(EventarcProjectsLocationsMessageBusesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `messageBusId` ← `MessageBusId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesCreateRequest.cs` |
| `MessageBus` | `src/GoogleCloudEventarc/Models/MessageBus.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsMessageBusesCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesDelete(EventarcProjectsLocationsMessageBusesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsMessageBusesDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesGet(EventarcProjectsLocationsMessageBusesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`
- **Returns**: `MessageBus`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesGetRequest.cs` |
| `MessageBus` | `src/GoogleCloudEventarc/Models/MessageBus.cs` |
| `EventarcProjectsLocationsMessageBusesGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesGetIamPolicy(EventarcProjectsLocationsMessageBusesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsMessageBusesGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesList(EventarcProjectsLocationsMessageBusesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListMessageBusesResponse`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesListRequest.cs` |
| `ListMessageBusesResponse` | `src/GoogleCloudEventarc/Models/ListMessageBusesResponse.cs` |
| `EventarcProjectsLocationsMessageBusesListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesListEnrollments

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesListEnrollments(EventarcProjectsLocationsMessageBusesListEnrollmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListMessageBusEnrollmentsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesListEnrollmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesListEnrollmentsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesListEnrollmentsRequest.cs` |
| `ListMessageBusEnrollmentsResponse` | `src/GoogleCloudEventarc/Models/ListMessageBusEnrollmentsResponse.cs` |
| `EventarcProjectsLocationsMessageBusesListEnrollmentsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesListEnrollmentsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesPatch(EventarcProjectsLocationsMessageBusesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesPatchRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesPatchRequest.cs` |
| `MessageBus` | `src/GoogleCloudEventarc/Models/MessageBus.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsMessageBusesPatchError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesSetIamPolicy(EventarcProjectsLocationsMessageBusesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsMessageBusesSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsMessageBusesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsMessageBusesTestIamPermissions(EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `MessageBusesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsMessageBusesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsMessageBusesTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsOperationsCancel(EventarcProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<EventarcProjectsLocationsOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsOperationsCancelRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsCancelRequest.cs` |
| `EventarcProjectsLocationsOperationsCancelError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsOperationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsOperationsDelete(EventarcProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `object`
- **Error**: `ApiException<EventarcProjectsLocationsOperationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsOperationsDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsDeleteRequest.cs` |
| `EventarcProjectsLocationsOperationsDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsOperationsGet(EventarcProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsOperationsGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsGetRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsOperationsGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsOperationsList(EventarcProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `GoogleLongrunningListOperationsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsOperationsListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsListRequest.cs` |
| `GoogleLongrunningListOperationsResponse` | `src/GoogleCloudEventarc/Models/GoogleLongrunningListOperationsResponse.cs` |
| `EventarcProjectsLocationsOperationsListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesCreate(EventarcProjectsLocationsPipelinesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `pipelineId` ← `PipelineId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesCreateRequest.cs` |
| `Pipeline` | `src/GoogleCloudEventarc/Models/Pipeline.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsPipelinesCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesDelete(EventarcProjectsLocationsPipelinesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PipelinesId`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsPipelinesDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesGet(EventarcProjectsLocationsPipelinesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PipelinesId`
- **Returns**: `Pipeline`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesGetRequest.cs` |
| `Pipeline` | `src/GoogleCloudEventarc/Models/Pipeline.cs` |
| `EventarcProjectsLocationsPipelinesGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesGetIamPolicy(EventarcProjectsLocationsPipelinesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PipelinesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsPipelinesGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesList(EventarcProjectsLocationsPipelinesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListPipelinesResponse`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesListRequest.cs` |
| `ListPipelinesResponse` | `src/GoogleCloudEventarc/Models/ListPipelinesResponse.cs` |
| `EventarcProjectsLocationsPipelinesListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesPatch(EventarcProjectsLocationsPipelinesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PipelinesId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesPatchRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesPatchRequest.cs` |
| `Pipeline` | `src/GoogleCloudEventarc/Models/Pipeline.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsPipelinesPatchError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesSetIamPolicy(EventarcProjectsLocationsPipelinesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PipelinesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsPipelinesSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsPipelinesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsPipelinesTestIamPermissions(EventarcProjectsLocationsPipelinesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `PipelinesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsPipelinesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsPipelinesTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsPipelinesTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsProvidersGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsProvidersGet(EventarcProjectsLocationsProvidersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `ProvidersId`
- **Returns**: `Provider`
- **Error**: `ApiException<EventarcProjectsLocationsProvidersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsProvidersGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsProvidersGetRequest.cs` |
| `Provider` | `src/GoogleCloudEventarc/Models/Provider.cs` |
| `EventarcProjectsLocationsProvidersGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsProvidersGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsProvidersList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsProvidersList(EventarcProjectsLocationsProvidersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListProvidersResponse`
- **Error**: `ApiException<EventarcProjectsLocationsProvidersListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsProvidersListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsProvidersListRequest.cs` |
| `ListProvidersResponse` | `src/GoogleCloudEventarc/Models/ListProvidersResponse.cs` |
| `EventarcProjectsLocationsProvidersListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsProvidersListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersCreate(EventarcProjectsLocationsTriggersCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `triggerId` ← `TriggerId`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersCreateRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersCreateRequest.cs` |
| `Trigger` | `src/GoogleCloudEventarc/Models/Trigger.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsTriggersCreateError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersDelete(EventarcProjectsLocationsTriggersDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `TriggersId`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `etag` ← `Etag`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersDeleteRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsTriggersDeleteError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersGet(EventarcProjectsLocationsTriggersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `TriggersId`
- **Returns**: `Trigger`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersGetRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersGetRequest.cs` |
| `Trigger` | `src/GoogleCloudEventarc/Models/Trigger.cs` |
| `EventarcProjectsLocationsTriggersGetError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersGetIamPolicy(EventarcProjectsLocationsTriggersGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `TriggersId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersGetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersGetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsTriggersGetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersList(EventarcProjectsLocationsTriggersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `orderBy` ← `OrderBy`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListTriggersResponse`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersListRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersListRequest.cs` |
| `ListTriggersResponse` | `src/GoogleCloudEventarc/Models/ListTriggersResponse.cs` |
| `EventarcProjectsLocationsTriggersListError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersPatch(EventarcProjectsLocationsTriggersPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `TriggersId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `updateMask` ← `UpdateMask`, `validateOnly` ← `ValidateOnly`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersPatchRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersPatchRequest.cs` |
| `Trigger` | `src/GoogleCloudEventarc/Models/Trigger.cs` |
| `GoogleLongrunningOperation` | `src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs` |
| `EventarcProjectsLocationsTriggersPatchError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersSetIamPolicy(EventarcProjectsLocationsTriggersSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `TriggersId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersSetIamPolicyRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudEventarc/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudEventarc/Models/Policy.cs` |
| `EventarcProjectsLocationsTriggersSetIamPolicyError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsTriggersTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsTriggersTestIamPermissions(EventarcProjectsLocationsTriggersTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `TriggersId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<EventarcProjectsLocationsTriggersTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsTriggersTestIamPermissionsRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudEventarc/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs` |
| `EventarcProjectsLocationsTriggersTestIamPermissionsError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

### EventarcProjectsLocationsUpdateGoogleChannelConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `EventarcProjectsLocationsUpdateGoogleChannelConfig(EventarcProjectsLocationsUpdateGoogleChannelConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleChannelConfig`
- **Error**: `ApiException<EventarcProjectsLocationsUpdateGoogleChannelConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EventarcProjectsLocationsUpdateGoogleChannelConfigRequest` | `src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsUpdateGoogleChannelConfigRequest.cs` |
| `GoogleChannelConfig` | `src/GoogleCloudEventarc/Models/GoogleChannelConfig.cs` |
| `EventarcProjectsLocationsUpdateGoogleChannelConfigError` | `src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsUpdateGoogleChannelConfigError.cs` |
| `GoogleRpcError` | `src/GoogleCloudEventarc/Models/GoogleRpcError.cs` |

