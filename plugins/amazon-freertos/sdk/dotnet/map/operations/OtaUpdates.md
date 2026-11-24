<!-- Generated file — do not edit; regenerated with the SDK. -->

# OtaUpdates — operations

Accessor: `client.OtaUpdates` · Source: `src/AmazonFreeRtos/Api/OtaUpdates.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateOtaUpdate

- **Auth**: `options.AwsSigV4`
- **Signature**: `CreateOtaUpdate(CreateOtaUpdateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OtaUpdate`
- **Error**: `ApiException<CreateOtaUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOtaUpdateOperationRequest` | `src/AmazonFreeRtos/Requests/OtaUpdates/CreateOtaUpdateOperationRequest.cs` |
| `CreateOtaUpdateRequest` | `src/AmazonFreeRtos/Models/CreateOtaUpdateRequest.cs` |
| `OtaUpdate` | `src/AmazonFreeRtos/Models/OtaUpdate.cs` |
| `CreateOtaUpdateError` | `src/AmazonFreeRtos/Errors/CreateOtaUpdateError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### DeleteOtaUpdate

- **Auth**: `options.AwsSigV4`
- **Signature**: `DeleteOtaUpdate(DeleteOtaUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OtaUpdateId`
- **Query params (wire ← C#)**: `deleteStream` ← `DeleteStream`, `forceDeleteAWSJob` ← `ForceDeleteAwsJob`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteOtaUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteOtaUpdateRequest` | `src/AmazonFreeRtos/Requests/OtaUpdates/DeleteOtaUpdateRequest.cs` |
| `DeleteOtaUpdateError` | `src/AmazonFreeRtos/Errors/DeleteOtaUpdateError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### GetOtaUpdate

- **Auth**: `options.AwsSigV4`
- **Signature**: `GetOtaUpdate(GetOtaUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OtaUpdateId`
- **Returns**: `OtaUpdateInfo`
- **Error**: `ApiException<GetOtaUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOtaUpdateRequest` | `src/AmazonFreeRtos/Requests/OtaUpdates/GetOtaUpdateRequest.cs` |
| `OtaUpdateInfo` | `src/AmazonFreeRtos/Models/OtaUpdateInfo.cs` |
| `GetOtaUpdateError` | `src/AmazonFreeRtos/Errors/GetOtaUpdateError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### ListOtaUpdates

- **Auth**: `options.AwsSigV4`
- **Signature**: `ListOtaUpdates(ListOtaUpdatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `nextToken` ← `NextToken`, `otaUpdateStatus` ← `OtaUpdateStatus`
- **Returns**: `OtaUpdatesResponse`
- **Error**: `ApiException<ListOtaUpdatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOtaUpdatesRequest` | `src/AmazonFreeRtos/Requests/OtaUpdates/ListOtaUpdatesRequest.cs` |
| `OtaUpdatesResponse` | `src/AmazonFreeRtos/Models/OtaUpdatesResponse.cs` |
| `ListOtaUpdatesError` | `src/AmazonFreeRtos/Errors/ListOtaUpdatesError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

