<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferOperations — operations

Accessor: `client.TransferOperations` · Source: `src/GoogleCloudStorageTransferService/Api/TransferOperations.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StoragetransferTransferOperationsCancel

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferOperationsCancel(StoragetransferTransferOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferOperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<StoragetransferTransferOperationsCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsCancelRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsCancelRequest.cs` |
| `StoragetransferTransferOperationsCancelError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsCancelError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferOperationsGet(StoragetransferTransferOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferOperationsId`
- **Returns**: `Operation`
- **Error**: `ApiException<StoragetransferTransferOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsGetRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsGetRequest.cs` |
| `Operation` | `src/GoogleCloudStorageTransferService/Models/Operation.cs` |
| `StoragetransferTransferOperationsGetError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsGetError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferOperationsList(StoragetransferTransferOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Filter`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `ListOperationsResponse`
- **Error**: `ApiException<StoragetransferTransferOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsListRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsListRequest.cs` |
| `ListOperationsResponse` | `src/GoogleCloudStorageTransferService/Models/ListOperationsResponse.cs` |
| `StoragetransferTransferOperationsListError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsListError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferOperationsPause

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferOperationsPause(StoragetransferTransferOperationsPauseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferOperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<StoragetransferTransferOperationsPauseError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsPauseRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsPauseRequest.cs` |
| `StoragetransferTransferOperationsPauseError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsPauseError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

### StoragetransferTransferOperationsResume

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `StoragetransferTransferOperationsResume(StoragetransferTransferOperationsResumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransferOperationsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<StoragetransferTransferOperationsResumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsResumeRequest` | `src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsResumeRequest.cs` |
| `StoragetransferTransferOperationsResumeError` | `src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsResumeError.cs` |
| `GoogleRpcError` | `src/GoogleCloudStorageTransferService/Models/GoogleRpcError.cs` |

