<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueModels — operations

Accessor: `client.ValueModels` · Source: `src/Paid/Api/ValueModels.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCurrentValueModel

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetCurrentValueModel(GetCurrentValueModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `ValueModelDetail`
- **Error**: `ApiException<GetCurrentValueModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCurrentValueModelRequest` | `src/Paid/Requests/ValueModels/GetCurrentValueModelRequest.cs` |
| `ValueModelDetail` | `src/Paid/Models/ValueModelDetail.cs` |
| `GetCurrentValueModelError` | `src/Paid/Errors/GetCurrentValueModelError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetValueModelVersion

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetValueModelVersion(GetValueModelVersionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Version`, `Authorization`
- **Returns**: `ValueModelDetail`
- **Error**: `ApiException<GetValueModelVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetValueModelVersionRequest` | `src/Paid/Requests/ValueModels/GetValueModelVersionRequest.cs` |
| `ValueModelDetail` | `src/Paid/Models/ValueModelDetail.cs` |
| `GetValueModelVersionError` | `src/Paid/Errors/GetValueModelVersionError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListValueModelVersions

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListValueModelVersions(ListValueModelVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ValueModelVersionListResponse`
- **Error**: `ApiException<ListValueModelVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListValueModelVersionsRequest` | `src/Paid/Requests/ValueModels/ListValueModelVersionsRequest.cs` |
| `ValueModelVersionListResponse` | `src/Paid/Models/ValueModelVersionListResponse.cs` |
| `ListValueModelVersionsError` | `src/Paid/Errors/ListValueModelVersionsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### RefreshValueModelBackfill

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `RefreshValueModelBackfill(RefreshValueModelBackfillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `BackfillResponse`
- **Error**: `ApiException<RefreshValueModelBackfillError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshValueModelBackfillRequest` | `src/Paid/Requests/ValueModels/RefreshValueModelBackfillRequest.cs` |
| `BackfillResponse` | `src/Paid/Models/BackfillResponse.cs` |
| `RefreshValueModelBackfillError` | `src/Paid/Errors/RefreshValueModelBackfillError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateValueModel

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateValueModel(UpdateValueModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `ValueModelDetail`
- **Error**: `ApiException<UpdateValueModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateValueModelRequest` | `src/Paid/Requests/ValueModels/UpdateValueModelRequest.cs` |
| `ValueModelUploadRequest` | `src/Paid/Models/ValueModelUploadRequest.cs` |
| `ValueModelDetail` | `src/Paid/Models/ValueModelDetail.cs` |
| `UpdateValueModelError` | `src/Paid/Errors/UpdateValueModelError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

