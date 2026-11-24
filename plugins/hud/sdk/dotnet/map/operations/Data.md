<!-- Generated file — do not edit; regenerated with the SDK. -->

# Data — operations

Accessor: `client.Data` · Source: `src/Hud/Api/Data.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CompleteDataFileV2DataFileIdCompletePost

- **Signature**: `CompleteDataFileV2DataFileIdCompletePost(CompleteDataFileV2DataFileIdCompletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Returns**: `DataFileResponse`
- **Error**: `ApiException<CompleteDataFileV2DataFileIdCompletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompleteDataFileV2DataFileIdCompletePostRequest` | `src/Hud/Requests/Data/CompleteDataFileV2DataFileIdCompletePostRequest.cs` |
| `DataFileResponse` | `src/Hud/Models/DataFileResponse.cs` |
| `CompleteDataFileV2DataFileIdCompletePostError` | `src/Hud/Errors/CompleteDataFileV2DataFileIdCompletePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CreateDataFileV2DataPost

- **Signature**: `CreateDataFileV2DataPost(CreateDataFileV2DataPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DataFileUploadResponse`
- **Error**: `ApiException<CreateDataFileV2DataPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDataFileV2DataPostRequest` | `src/Hud/Requests/Data/CreateDataFileV2DataPostRequest.cs` |
| `DataFileCreateRequest` | `src/Hud/Models/DataFileCreateRequest.cs` |
| `DataFileUploadResponse` | `src/Hud/Models/DataFileUploadResponse.cs` |
| `CreateDataFileV2DataPostError` | `src/Hud/Errors/CreateDataFileV2DataPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteDataFileV2DataFileIdDelete

- **Signature**: `DeleteDataFileV2DataFileIdDelete(DeleteDataFileV2DataFileIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDataFileV2DataFileIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDataFileV2DataFileIdDeleteRequest` | `src/Hud/Requests/Data/DeleteDataFileV2DataFileIdDeleteRequest.cs` |
| `DeleteDataFileV2DataFileIdDeleteError` | `src/Hud/Errors/DeleteDataFileV2DataFileIdDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteDataFilesV2DataDeletePost

- **Signature**: `DeleteDataFilesV2DataDeletePost(DeleteDataFilesV2DataDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDataFilesV2DataDeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDataFilesV2DataDeletePostRequest` | `src/Hud/Requests/Data/DeleteDataFilesV2DataDeletePostRequest.cs` |
| `DataFileIdsRequest` | `src/Hud/Models/DataFileIdsRequest.cs` |
| `DeleteDataFilesV2DataDeletePostError` | `src/Hud/Errors/DeleteDataFilesV2DataDeletePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DownloadDataFileV2DataFileIdDownloadGet

- **Signature**: `DownloadDataFileV2DataFileIdDownloadGet(DownloadDataFileV2DataFileIdDownloadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Returns**: `DataFileDownloadResponse`
- **Error**: `ApiException<DownloadDataFileV2DataFileIdDownloadGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadDataFileV2DataFileIdDownloadGetRequest` | `src/Hud/Requests/Data/DownloadDataFileV2DataFileIdDownloadGetRequest.cs` |
| `DataFileDownloadResponse` | `src/Hud/Models/DataFileDownloadResponse.cs` |
| `DownloadDataFileV2DataFileIdDownloadGetError` | `src/Hud/Errors/DownloadDataFileV2DataFileIdDownloadGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetDataFileStorageUsageV2DataUsageGet

- **Signature**: `GetDataFileStorageUsageV2DataUsageGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DataFileStorageUsageResponse`
- **Error**: `ApiException<GetDataFileStorageUsageV2DataUsageGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataFileStorageUsageResponse` | `src/Hud/Models/DataFileStorageUsageResponse.cs` |
| `GetDataFileStorageUsageV2DataUsageGetError` | `src/Hud/Errors/GetDataFileStorageUsageV2DataUsageGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### GetDataFileV2DataFileIdGet

- **Signature**: `GetDataFileV2DataFileIdGet(GetDataFileV2DataFileIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Returns**: `DataFileResponse`
- **Error**: `ApiException<GetDataFileV2DataFileIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDataFileV2DataFileIdGetRequest` | `src/Hud/Requests/Data/GetDataFileV2DataFileIdGetRequest.cs` |
| `DataFileResponse` | `src/Hud/Models/DataFileResponse.cs` |
| `GetDataFileV2DataFileIdGetError` | `src/Hud/Errors/GetDataFileV2DataFileIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListDataFileGroupsV2DataGroupsGet

- **Signature**: `ListDataFileGroupsV2DataGroupsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DataFileGroupListResponse`
- **Error**: `ApiException<ListDataFileGroupsV2DataGroupsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DataFileGroupListResponse` | `src/Hud/Models/DataFileGroupListResponse.cs` |
| `ListDataFileGroupsV2DataGroupsGetError` | `src/Hud/Errors/ListDataFileGroupsV2DataGroupsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### ListDataFilesV2DataGet

- **Signature**: `ListDataFilesV2DataGet(ListDataFilesV2DataGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `scope` ← `Scope`, `membership_id` ← `MembershipId`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `DataFileListResponse`
- **Error**: `ApiException<ListDataFilesV2DataGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDataFilesV2DataGetRequest` | `src/Hud/Requests/Data/ListDataFilesV2DataGetRequest.cs` |
| `Scope3` | `src/Hud/Models/Enums/Scope3.cs` |
| `MembershipId` | `src/Hud/Models/AnyOf/MembershipId.cs` |
| `DataFileListResponse` | `src/Hud/Models/DataFileListResponse.cs` |
| `ListDataFilesV2DataGetError` | `src/Hud/Errors/ListDataFilesV2DataGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateDataFileV2DataFileIdPatch

- **Signature**: `UpdateDataFileV2DataFileIdPatch(UpdateDataFileV2DataFileIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`, `Body`
- **Returns**: `DataFileResponse`
- **Error**: `ApiException<UpdateDataFileV2DataFileIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDataFileV2DataFileIdPatchRequest` | `src/Hud/Requests/Data/UpdateDataFileV2DataFileIdPatchRequest.cs` |
| `DataFileUpdateRequest` | `src/Hud/Models/DataFileUpdateRequest.cs` |
| `DataFileResponse` | `src/Hud/Models/DataFileResponse.cs` |
| `UpdateDataFileV2DataFileIdPatchError` | `src/Hud/Errors/UpdateDataFileV2DataFileIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

