<!-- Generated file — do not edit; regenerated with the SDK. -->

# Imports — operations

Accessor: `client.Imports` · Source: `src/Hud/Api/Imports.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelImportV2ImportsImportIdCancelPost

- **Signature**: `CancelImportV2ImportsImportIdCancelPost(CancelImportV2ImportsImportIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ImportResponse`
- **Error**: `ApiException<CancelImportV2ImportsImportIdCancelPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelImportV2ImportsImportIdCancelPostRequest` | `src/Hud/Requests/Imports/CancelImportV2ImportsImportIdCancelPostRequest.cs` |
| `ImportResponse` | `src/Hud/Models/ImportResponse.cs` |
| `CancelImportV2ImportsImportIdCancelPostError` | `src/Hud/Errors/CancelImportV2ImportsImportIdCancelPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CreateImportUploadV2ImportsUploadsPost

- **Signature**: `CreateImportUploadV2ImportsUploadsPost(CreateImportUploadV2ImportsUploadsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DataFileUploadResponse`
- **Error**: `ApiException<CreateImportUploadV2ImportsUploadsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateImportUploadV2ImportsUploadsPostRequest` | `src/Hud/Requests/Imports/CreateImportUploadV2ImportsUploadsPostRequest.cs` |
| `ImportUploadRequest` | `src/Hud/Models/ImportUploadRequest.cs` |
| `DataFileUploadResponse` | `src/Hud/Models/DataFileUploadResponse.cs` |
| `CreateImportUploadV2ImportsUploadsPostError` | `src/Hud/Errors/CreateImportUploadV2ImportsUploadsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### EstimateImportV2ImportsEstimateGet

- **Signature**: `EstimateImportV2ImportsEstimateGet(EstimateImportV2ImportsEstimateGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Format`, `FileId`
- **Query params (wire ← C#)**: `format` ← `Format`, `file_id` ← `FileId`
- **Returns**: `ImportEstimateResponse`
- **Error**: `ApiException<EstimateImportV2ImportsEstimateGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EstimateImportV2ImportsEstimateGetRequest` | `src/Hud/Requests/Imports/EstimateImportV2ImportsEstimateGetRequest.cs` |
| `Format` | `src/Hud/Models/Enums/Format.cs` |
| `ImportEstimateResponse` | `src/Hud/Models/ImportEstimateResponse.cs` |
| `EstimateImportV2ImportsEstimateGetError` | `src/Hud/Errors/EstimateImportV2ImportsEstimateGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetImportReportV2ImportsImportIdReportGet

- **Signature**: `GetImportReportV2ImportsImportIdReportGet(GetImportReportV2ImportsImportIdReportGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `object`
- **Error**: `ApiException<GetImportReportV2ImportsImportIdReportGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 413, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetImportReportV2ImportsImportIdReportGetRequest` | `src/Hud/Requests/Imports/GetImportReportV2ImportsImportIdReportGetRequest.cs` |
| `GetImportReportV2ImportsImportIdReportGetError` | `src/Hud/Errors/GetImportReportV2ImportsImportIdReportGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetImportV2ImportsImportIdGet

- **Signature**: `GetImportV2ImportsImportIdGet(GetImportV2ImportsImportIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ImportResponse`
- **Error**: `ApiException<GetImportV2ImportsImportIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetImportV2ImportsImportIdGetRequest` | `src/Hud/Requests/Imports/GetImportV2ImportsImportIdGetRequest.cs` |
| `ImportResponse` | `src/Hud/Models/ImportResponse.cs` |
| `GetImportV2ImportsImportIdGetError` | `src/Hud/Errors/GetImportV2ImportsImportIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListImportFormatsV2ImportsFormatsGet

- **Signature**: `ListImportFormatsV2ImportsFormatsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ImportFormatListResponse`
- **Error**: `ApiException<ListImportFormatsV2ImportsFormatsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportFormatListResponse` | `src/Hud/Models/ImportFormatListResponse.cs` |
| `ListImportFormatsV2ImportsFormatsGetError` | `src/Hud/Errors/ListImportFormatsV2ImportsFormatsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### ListImportsV2ImportsGet

- **Signature**: `ListImportsV2ImportsGet(ListImportsV2ImportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `format` ← `Format`, `taskset_id` ← `TasksetId`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ImportListResponse`
- **Error**: `ApiException<ListImportsV2ImportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListImportsV2ImportsGetRequest` | `src/Hud/Requests/Imports/ListImportsV2ImportsGetRequest.cs` |
| `Format1` | `src/Hud/Models/AnyOf/Format1.cs` |
| `TasksetId` | `src/Hud/Models/AnyOf/TasksetId.cs` |
| `ImportListResponse` | `src/Hud/Models/ImportListResponse.cs` |
| `ListImportsV2ImportsGetError` | `src/Hud/Errors/ListImportsV2ImportsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### StartImportV2ImportsPost

- **Signature**: `StartImportV2ImportsPost(StartImportV2ImportsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ImportResponse`
- **Error**: `ApiException<StartImportV2ImportsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartImportV2ImportsPostRequest` | `src/Hud/Requests/Imports/StartImportV2ImportsPostRequest.cs` |
| `ImportCreateRequest` | `src/Hud/Models/ImportCreateRequest.cs` |
| `ImportResponse` | `src/Hud/Models/ImportResponse.cs` |
| `StartImportV2ImportsPostError` | `src/Hud/Errors/StartImportV2ImportsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

