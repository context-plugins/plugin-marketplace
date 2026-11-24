<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/GoogleCloudStorageTransferService/Api/Projects.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StoragetransferProjectsAgentPoolsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferProjectsAgentPoolsCreate(StoragetransferProjectsAgentPoolsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `Body`
- **Query params (wire ← C#)**: `agentPoolId` ← `AgentPoolId`
- **Returns**: `AgentPool`
- **Error**: `ApiException<StoragetransferProjectsAgentPoolsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferProjectsAgentPoolsCreateRequest` | `src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsCreateRequest.cs` |
| `AgentPool` | `src/GoogleCloudStorageTransferService/Models/AgentPool.cs` |
| `StoragetransferProjectsAgentPoolsCreateError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferProjectsAgentPoolsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferProjectsAgentPoolsDelete(StoragetransferProjectsAgentPoolsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `AgentPoolsId`
- **Returns**: `object`
- **Error**: `ApiException<StoragetransferProjectsAgentPoolsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferProjectsAgentPoolsDeleteRequest` | `src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsDeleteRequest.cs` |
| `StoragetransferProjectsAgentPoolsDeleteError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferProjectsAgentPoolsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferProjectsAgentPoolsGet(StoragetransferProjectsAgentPoolsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `AgentPoolsId`
- **Returns**: `AgentPool`
- **Error**: `ApiException<StoragetransferProjectsAgentPoolsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferProjectsAgentPoolsGetRequest` | `src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsGetRequest.cs` |
| `AgentPool` | `src/GoogleCloudStorageTransferService/Models/AgentPool.cs` |
| `StoragetransferProjectsAgentPoolsGetError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferProjectsAgentPoolsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferProjectsAgentPoolsList(StoragetransferProjectsAgentPoolsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListAgentPoolsResponse`
- **Error**: `ApiException<StoragetransferProjectsAgentPoolsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferProjectsAgentPoolsListRequest` | `src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsListRequest.cs` |
| `ListAgentPoolsResponse` | `src/GoogleCloudStorageTransferService/Models/ListAgentPoolsResponse.cs` |
| `StoragetransferProjectsAgentPoolsListError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferProjectsAgentPoolsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferProjectsAgentPoolsPatch(StoragetransferProjectsAgentPoolsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `AgentPoolsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `AgentPool`
- **Error**: `ApiException<StoragetransferProjectsAgentPoolsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferProjectsAgentPoolsPatchRequest` | `src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsPatchRequest.cs` |
| `AgentPool` | `src/GoogleCloudStorageTransferService/Models/AgentPool.cs` |
| `StoragetransferProjectsAgentPoolsPatchError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

