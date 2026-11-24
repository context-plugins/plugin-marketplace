<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleCloudTasksClient — operations

Accessor: `client` · Source: `src/GoogleCloudTasks/GoogleCloudTasksClient.cs` · 24 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CloudtasksProjectsLocationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsGet(CloudtasksProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `Location`
- **Error**: `ApiException<CloudtasksProjectsLocationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsGetRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsGetRequest.cs` |
| `Location` | `src/GoogleCloudTasks/Models/Location.cs` |
| `CloudtasksProjectsLocationsGetError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsGetCmekConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsGetCmekConfig(CloudtasksProjectsLocationsGetCmekConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Returns**: `CmekConfig`
- **Error**: `ApiException<CloudtasksProjectsLocationsGetCmekConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsGetCmekConfigRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsGetCmekConfigRequest.cs` |
| `CmekConfig` | `src/GoogleCloudTasks/Models/CmekConfig.cs` |
| `CloudtasksProjectsLocationsGetCmekConfigError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsGetCmekConfigError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsList(CloudtasksProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`
- **Query params (wire ← C#)**: `extraLocationTypes` ← `ExtraLocationTypes`, `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListLocationsResponse`
- **Error**: `ApiException<CloudtasksProjectsLocationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsListRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsListRequest.cs` |
| `ListLocationsResponse` | `src/GoogleCloudTasks/Models/ListLocationsResponse.cs` |
| `CloudtasksProjectsLocationsListError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsOperationsGet(CloudtasksProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `OperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudtasksProjectsLocationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsOperationsGetRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudTasks/Models/Operation.cs` |
| `CloudtasksProjectsLocationsOperationsGetError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesCreate(CloudtasksProjectsLocationsQueuesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Returns**: `QueueModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesCreateRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesCreateRequest.cs` |
| `QueueModel` | `src/GoogleCloudTasks/Models/QueueModel.cs` |
| `CloudtasksProjectsLocationsQueuesCreateError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesDelete(CloudtasksProjectsLocationsQueuesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`
- **Returns**: `object`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesDeleteRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesDeleteRequest.cs` |
| `CloudtasksProjectsLocationsQueuesDeleteError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesGet(CloudtasksProjectsLocationsQueuesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`
- **Returns**: `QueueModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesGetRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesGetRequest.cs` |
| `QueueModel` | `src/GoogleCloudTasks/Models/QueueModel.cs` |
| `CloudtasksProjectsLocationsQueuesGetError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesGetIamPolicy(CloudtasksProjectsLocationsQueuesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesGetIamPolicyRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesGetIamPolicyRequest.cs` |
| `GetIamPolicyRequest` | `src/GoogleCloudTasks/Models/GetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudTasks/Models/Policy.cs` |
| `CloudtasksProjectsLocationsQueuesGetIamPolicyError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesList(CloudtasksProjectsLocationsQueuesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListQueuesResponse`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesListRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesListRequest.cs` |
| `ListQueuesResponse` | `src/GoogleCloudTasks/Models/ListQueuesResponse.cs` |
| `CloudtasksProjectsLocationsQueuesListError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesPatch(CloudtasksProjectsLocationsQueuesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `QueueModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesPatchRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesPatchRequest.cs` |
| `QueueModel` | `src/GoogleCloudTasks/Models/QueueModel.cs` |
| `CloudtasksProjectsLocationsQueuesPatchError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesPause

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesPause(CloudtasksProjectsLocationsQueuesPauseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `QueueModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesPauseError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesPauseRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesPauseRequest.cs` |
| `QueueModel` | `src/GoogleCloudTasks/Models/QueueModel.cs` |
| `CloudtasksProjectsLocationsQueuesPauseError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesPauseError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesPurge

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesPurge(CloudtasksProjectsLocationsQueuesPurgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `QueueModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesPurgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesPurgeRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesPurgeRequest.cs` |
| `QueueModel` | `src/GoogleCloudTasks/Models/QueueModel.cs` |
| `CloudtasksProjectsLocationsQueuesPurgeError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesPurgeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesResume

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesResume(CloudtasksProjectsLocationsQueuesResumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `QueueModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesResumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesResumeRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesResumeRequest.cs` |
| `QueueModel` | `src/GoogleCloudTasks/Models/QueueModel.cs` |
| `CloudtasksProjectsLocationsQueuesResumeError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesResumeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesSetIamPolicy(CloudtasksProjectsLocationsQueuesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `Policy`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesSetIamPolicyRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesSetIamPolicyRequest.cs` |
| `SetIamPolicyRequest` | `src/GoogleCloudTasks/Models/SetIamPolicyRequest.cs` |
| `Policy` | `src/GoogleCloudTasks/Models/Policy.cs` |
| `CloudtasksProjectsLocationsQueuesSetIamPolicyError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksBatchCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksBatchCreate(CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksBatchCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest.cs` |
| `BatchCreateTasksRequest` | `src/GoogleCloudTasks/Models/BatchCreateTasksRequest.cs` |
| `Operation` | `src/GoogleCloudTasks/Models/Operation.cs` |
| `CloudtasksProjectsLocationsQueuesTasksBatchCreateError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksBatchCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksBatchDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksBatchDelete(CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksBatchDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest.cs` |
| `BatchDeleteTasksRequest` | `src/GoogleCloudTasks/Models/BatchDeleteTasksRequest.cs` |
| `Operation` | `src/GoogleCloudTasks/Models/Operation.cs` |
| `CloudtasksProjectsLocationsQueuesTasksBatchDeleteError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksBatchDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksBuffer

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksBuffer(CloudtasksProjectsLocationsQueuesTasksBufferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `TaskId`, `Body`
- **Returns**: `BufferTaskResponse`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksBufferError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksBufferRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksBufferRequest.cs` |
| `BufferTaskRequest` | `src/GoogleCloudTasks/Models/BufferTaskRequest.cs` |
| `BufferTaskResponse` | `src/GoogleCloudTasks/Models/BufferTaskResponse.cs` |
| `CloudtasksProjectsLocationsQueuesTasksBufferError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksBufferError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksCreate(CloudtasksProjectsLocationsQueuesTasksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `TaskModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksCreateRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksCreateRequest.cs` |
| `CreateTaskRequest` | `src/GoogleCloudTasks/Models/CreateTaskRequest.cs` |
| `TaskModel` | `src/GoogleCloudTasks/Models/TaskModel.cs` |
| `CloudtasksProjectsLocationsQueuesTasksCreateError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksDelete(CloudtasksProjectsLocationsQueuesTasksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `TasksId`
- **Returns**: `object`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksDeleteRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksDeleteRequest.cs` |
| `CloudtasksProjectsLocationsQueuesTasksDeleteError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksGet(CloudtasksProjectsLocationsQueuesTasksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `TasksId`
- **Query params (wire ← C#)**: `responseView` ← `ResponseView`
- **Returns**: `TaskModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksGetRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksGetRequest.cs` |
| `ResponseView2` | `src/GoogleCloudTasks/Models/Enums/ResponseView2.cs` |
| `TaskModel` | `src/GoogleCloudTasks/Models/TaskModel.cs` |
| `CloudtasksProjectsLocationsQueuesTasksGetError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksList(CloudtasksProjectsLocationsQueuesTasksListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `responseView` ← `ResponseView`
- **Returns**: `ListTasksResponse`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksListRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksListRequest.cs` |
| `ResponseView2` | `src/GoogleCloudTasks/Models/Enums/ResponseView2.cs` |
| `ListTasksResponse` | `src/GoogleCloudTasks/Models/ListTasksResponse.cs` |
| `CloudtasksProjectsLocationsQueuesTasksListError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTasksRun

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTasksRun(CloudtasksProjectsLocationsQueuesTasksRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `TasksId`, `Body`
- **Returns**: `TaskModel`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTasksRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksRunRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksRunRequest.cs` |
| `RunTaskRequest` | `src/GoogleCloudTasks/Models/RunTaskRequest.cs` |
| `TaskModel` | `src/GoogleCloudTasks/Models/TaskModel.cs` |
| `CloudtasksProjectsLocationsQueuesTasksRunError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksRunError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsQueuesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsQueuesTestIamPermissions(CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `QueuesId`, `Body`
- **Returns**: `TestIamPermissionsResponse`
- **Error**: `ApiException<CloudtasksProjectsLocationsQueuesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest.cs` |
| `TestIamPermissionsRequest` | `src/GoogleCloudTasks/Models/TestIamPermissionsRequest.cs` |
| `TestIamPermissionsResponse` | `src/GoogleCloudTasks/Models/TestIamPermissionsResponse.cs` |
| `CloudtasksProjectsLocationsQueuesTestIamPermissionsError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

### CloudtasksProjectsLocationsUpdateCmekConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `CloudtasksProjectsLocationsUpdateCmekConfig(CloudtasksProjectsLocationsUpdateCmekConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectsId`, `LocationsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `CmekConfig`
- **Error**: `ApiException<CloudtasksProjectsLocationsUpdateCmekConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsUpdateCmekConfigRequest` | `src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsUpdateCmekConfigRequest.cs` |
| `CmekConfig` | `src/GoogleCloudTasks/Models/CmekConfig.cs` |
| `CloudtasksProjectsLocationsUpdateCmekConfigError` | `src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsUpdateCmekConfigError.cs` |
| `GoogleRpcError` | `src/GoogleCloudTasks/Models/GoogleRpcError.cs` |

