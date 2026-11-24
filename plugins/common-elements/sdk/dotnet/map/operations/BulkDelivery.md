<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkDelivery — operations

Accessor: `client.BulkDelivery` · Source: `src/CommonElements/Api/BulkDelivery.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeliveriesCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesCancel(DeliveriesCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1DeliveriesResponse3`
- **Error**: `ApiException<DeliveriesCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesCancelRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesCancelRequest.cs` |
| `ApiV1DeliveriesResponse3` | `src/CommonElements/Models/ApiV1DeliveriesResponse3.cs` |
| `DeliveriesCancelError` | `src/CommonElements/Errors/DeliveriesCancelError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesCatalog

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesCatalog(DeliveriesCatalogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `dataset` ← `Dataset`
- **Returns**: `ApiV1DeliveriesDatasetsResponse`
- **Error**: `ApiException<DeliveriesCatalogError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesCatalogRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesCatalogRequest.cs` |
| `ApiV1DeliveriesDatasetsResponse` | `src/CommonElements/Models/ApiV1DeliveriesDatasetsResponse.cs` |
| `DeliveriesCatalogError` | `src/CommonElements/Errors/DeliveriesCatalogError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesCreate(DeliveriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1DeliveriesResponse`
- **Error**: `ApiException<DeliveriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesCreateRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesCreateRequest.cs` |
| `ApiV1DeliveriesRequest` | `src/CommonElements/Models/ApiV1DeliveriesRequest.cs` |
| `ApiV1DeliveriesResponse` | `src/CommonElements/Models/ApiV1DeliveriesResponse.cs` |
| `DeliveriesCreateError` | `src/CommonElements/Errors/DeliveriesCreateError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesDownload

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesDownload(DeliveriesDownloadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `token` ← `Token`, `part` ← `Part`
- **Returns**: `ApiV1DeliveriesDownloadResponse`
- **Error**: `ApiException<DeliveriesDownloadError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesDownloadRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesDownloadRequest.cs` |
| `ApiV1DeliveriesDownloadResponse` | `src/CommonElements/Models/ApiV1DeliveriesDownloadResponse.cs` |
| `DeliveriesDownloadError` | `src/CommonElements/Errors/DeliveriesDownloadError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesList

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1DeliveriesResponse1`
- **Error**: `ApiException<DeliveriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesResponse1` | `src/CommonElements/Models/ApiV1DeliveriesResponse1.cs` |
| `DeliveriesListError` | `src/CommonElements/Errors/DeliveriesListError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesScheduleDelete

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesScheduleDelete(DeliveriesScheduleDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1DeliveriesSchedulesResponse3`
- **Error**: `ApiException<DeliveriesScheduleDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesScheduleDeleteRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesScheduleDeleteRequest.cs` |
| `ApiV1DeliveriesSchedulesResponse3` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse3.cs` |
| `DeliveriesScheduleDeleteError` | `src/CommonElements/Errors/DeliveriesScheduleDeleteError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesScheduleDetail

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesScheduleDetail(DeliveriesScheduleDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1DeliveriesSchedulesResponse2`
- **Error**: `ApiException<DeliveriesScheduleDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesScheduleDetailRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesScheduleDetailRequest.cs` |
| `ApiV1DeliveriesSchedulesResponse2` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse2.cs` |
| `DeliveriesScheduleDetailError` | `src/CommonElements/Errors/DeliveriesScheduleDetailError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesScheduleUpdate

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesScheduleUpdate(DeliveriesScheduleUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1DeliveriesSchedulesResponse3`
- **Error**: `ApiException<DeliveriesScheduleUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesScheduleUpdateRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesScheduleUpdateRequest.cs` |
| `ApiV1DeliveriesSchedulesRequest1` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesRequest1.cs` |
| `ApiV1DeliveriesSchedulesResponse3` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse3.cs` |
| `DeliveriesScheduleUpdateError` | `src/CommonElements/Errors/DeliveriesScheduleUpdateError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesSchedulesCreate

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesSchedulesCreate(DeliveriesSchedulesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1DeliveriesSchedulesResponse`
- **Error**: `ApiException<DeliveriesSchedulesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesSchedulesCreateRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesSchedulesCreateRequest.cs` |
| `ApiV1DeliveriesSchedulesRequest` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesRequest.cs` |
| `ApiV1DeliveriesSchedulesResponse` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse.cs` |
| `DeliveriesSchedulesCreateError` | `src/CommonElements/Errors/DeliveriesSchedulesCreateError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesSchedulesList

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesSchedulesList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1DeliveriesSchedulesResponse1`
- **Error**: `ApiException<DeliveriesSchedulesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesSchedulesResponse1` | `src/CommonElements/Models/ApiV1DeliveriesSchedulesResponse1.cs` |
| `DeliveriesSchedulesListError` | `src/CommonElements/Errors/DeliveriesSchedulesListError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### DeliveriesStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `DeliveriesStatus(DeliveriesStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1DeliveriesResponse2`
- **Error**: `ApiException<DeliveriesStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeliveriesStatusRequest` | `src/CommonElements/Requests/BulkDelivery/DeliveriesStatusRequest.cs` |
| `ApiV1DeliveriesResponse2` | `src/CommonElements/Models/ApiV1DeliveriesResponse2.cs` |
| `DeliveriesStatusError` | `src/CommonElements/Errors/DeliveriesStatusError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

