<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferJobs — operations

Accessor: `client.TransferJobs` · Source: `src/GoogleCloudStorageTransferService/Api/TransferJobs.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StoragetransferTransferJobsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferJobsCreate(StoragetransferTransferJobsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TransferJob`
- **Error**: `ApiException<StoragetransferTransferJobsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsCreateRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsCreateRequest.cs` |
| `TransferJob` | `src/GoogleCloudStorageTransferService/Models/TransferJob.cs` |
| `StoragetransferTransferJobsCreateError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsCreateError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferJobsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferJobsDelete(StoragetransferTransferJobsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferJobsId`, `ProjectId`
- **Query params (wire ← C#)**: `projectId` ← `ProjectId`
- **Returns**: `object`
- **Error**: `ApiException<StoragetransferTransferJobsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsDeleteRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsDeleteRequest.cs` |
| `StoragetransferTransferJobsDeleteError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferJobsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferJobsGet(StoragetransferTransferJobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferJobsId`, `ProjectId`
- **Query params (wire ← C#)**: `projectId` ← `ProjectId`
- **Returns**: `TransferJob`
- **Error**: `ApiException<StoragetransferTransferJobsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsGetRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsGetRequest.cs` |
| `TransferJob` | `src/GoogleCloudStorageTransferService/Models/TransferJob.cs` |
| `StoragetransferTransferJobsGetError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferJobsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferJobsList(StoragetransferTransferJobsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Filter`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `ListTransferJobsResponse`
- **Error**: `ApiException<StoragetransferTransferJobsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsListRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsListRequest.cs` |
| `ListTransferJobsResponse` | `src/GoogleCloudStorageTransferService/Models/ListTransferJobsResponse.cs` |
| `StoragetransferTransferJobsListError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferJobsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferJobsPatch(StoragetransferTransferJobsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferJobsId`, `Body`
- **Returns**: `TransferJob`
- **Error**: `ApiException<StoragetransferTransferJobsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsPatchRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsPatchRequest.cs` |
| `UpdateTransferJobRequest` | `src/GoogleCloudStorageTransferService/Models/UpdateTransferJobRequest.cs` |
| `TransferJob` | `src/GoogleCloudStorageTransferService/Models/TransferJob.cs` |
| `StoragetransferTransferJobsPatchError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsPatchError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferJobsRun

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferJobsRun(StoragetransferTransferJobsRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferJobsId`, `Body`
- **Returns**: `Operation`
- **Error**: `ApiException<StoragetransferTransferJobsRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsRunRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsRunRequest.cs` |
| `RunTransferJobRequest` | `src/GoogleCloudStorageTransferService/Models/RunTransferJobRequest.cs` |
| `Operation` | `src/GoogleCloudStorageTransferService/Models/Operation.cs` |
| `StoragetransferTransferJobsRunError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsRunError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

