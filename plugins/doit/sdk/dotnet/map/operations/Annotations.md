<!-- Generated file — do not edit; regenerated with the SDK. -->

# Annotations — operations

Accessor: `client.Annotations` · Source: `src/DoiT/Api/Annotations.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAnnotation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateAnnotation(CreateAnnotationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AnnotationListItem`
- **Error**: `ApiException<CreateAnnotationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAnnotationOperationRequest` | `src/DoiT/Requests/Annotations/CreateAnnotationOperationRequest.cs` |
| `CreateAnnotationRequest` | `src/DoiT/Models/CreateAnnotationRequest.cs` |
| `AnnotationListItem` | `src/DoiT/Models/AnnotationListItem.cs` |
| `CreateAnnotationError` | `src/DoiT/Errors/CreateAnnotationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteAnnotation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteAnnotation(DeleteAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteAnnotationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAnnotationRequest` | `src/DoiT/Requests/Annotations/DeleteAnnotationRequest.cs` |
| `DeleteAnnotationError` | `src/DoiT/Errors/DeleteAnnotationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetAnnotation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAnnotation(GetAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AnnotationListItem`
- **Error**: `ApiException<GetAnnotationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnnotationRequest` | `src/DoiT/Requests/Annotations/GetAnnotationRequest.cs` |
| `AnnotationListItem` | `src/DoiT/Models/AnnotationListItem.cs` |
| `GetAnnotationError` | `src/DoiT/Errors/GetAnnotationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListAnnotations

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAnnotations(ListAnnotationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`
- **Returns**: `AnalyticsV1AnnotationsResponse`
- **Error**: `ApiException<ListAnnotationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAnnotationsRequest` | `src/DoiT/Requests/Annotations/ListAnnotationsRequest.cs` |
| `SortByDoiTAnnotationsApi` | `src/DoiT/Models/Enums/SortByDoiTAnnotationsApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `AnalyticsV1AnnotationsResponse` | `src/DoiT/Models/AnalyticsV1AnnotationsResponse.cs` |
| `ListAnnotationsError` | `src/DoiT/Errors/ListAnnotationsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateAnnotation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateAnnotation(UpdateAnnotationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AnnotationListItem`
- **Error**: `ApiException<UpdateAnnotationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAnnotationOperationRequest` | `src/DoiT/Requests/Annotations/UpdateAnnotationOperationRequest.cs` |
| `UpdateAnnotationRequest` | `src/DoiT/Models/UpdateAnnotationRequest.cs` |
| `AnnotationListItem` | `src/DoiT/Models/AnnotationListItem.cs` |
| `UpdateAnnotationError` | `src/DoiT/Errors/UpdateAnnotationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

