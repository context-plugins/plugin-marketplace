<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureChangeRequests — operations

Accessor: `client.FeatureChangeRequests` · Source: `src/DevCycle/Api/FeatureChangeRequests.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FeatureChangeRequestsControllerApplyFeatureChangeRequest

- **Signature**: `FeatureChangeRequestsControllerApplyFeatureChangeRequest(FeatureChangeRequestsControllerApplyFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Feature`, `Project`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FeatureChangeRequestsControllerApplyFeatureChangeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 405] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerApplyFeatureChangeRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerApplyFeatureChangeRequest.cs` |
| `ApplyFeatureChangeRequestDto` | `src/DevCycle/Models/ApplyFeatureChangeRequestDto.cs` |
| `FeatureChangeRequestsControllerApplyFeatureChangeRequestError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerApplyFeatureChangeRequestError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeatureChangeRequestsControllerCancelFeatureChangeRequest

- **Signature**: `FeatureChangeRequestsControllerCancelFeatureChangeRequest(FeatureChangeRequestsControllerCancelFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Feature`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FeatureChangeRequestsControllerCancelFeatureChangeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 405] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerCancelFeatureChangeRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerCancelFeatureChangeRequest.cs` |
| `FeatureChangeRequestsControllerCancelFeatureChangeRequestError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerCancelFeatureChangeRequestError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeatureChangeRequestsControllerCreateChangeRequest

- **Signature**: `FeatureChangeRequestsControllerCreateChangeRequest(FeatureChangeRequestsControllerCreateChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `FeatureChangeRequest`
- **Error**: `ApiException<FeatureChangeRequestsControllerCreateChangeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerCreateChangeRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerCreateChangeRequest.cs` |
| `CreateFeatureChangeRequestDto` | `src/DevCycle/Models/CreateFeatureChangeRequestDto.cs` |
| `FeatureChangeRequest` | `src/DevCycle/Models/FeatureChangeRequest.cs` |
| `FeatureChangeRequestsControllerCreateChangeRequestError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerCreateChangeRequestError.cs` |

### FeatureChangeRequestsControllerGetFeatureChangeRequest

- **Signature**: `FeatureChangeRequestsControllerGetFeatureChangeRequest(FeatureChangeRequestsControllerGetFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Feature`, `Project`
- **Returns**: `FeatureChangeRequest`
- **Error**: `ApiException<FeatureChangeRequestsControllerGetFeatureChangeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerGetFeatureChangeRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerGetFeatureChangeRequest.cs` |
| `FeatureChangeRequest` | `src/DevCycle/Models/FeatureChangeRequest.cs` |
| `FeatureChangeRequestsControllerGetFeatureChangeRequestError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerGetFeatureChangeRequestError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeatureChangeRequestsControllerGetLatestFeatureChangeRequest

- **Signature**: `FeatureChangeRequestsControllerGetLatestFeatureChangeRequest(FeatureChangeRequestsControllerGetLatestFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `FeatureChangeRequest`
- **Error**: `ApiException<FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerGetLatestFeatureChangeRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerGetLatestFeatureChangeRequest.cs` |
| `FeatureChangeRequest` | `src/DevCycle/Models/FeatureChangeRequest.cs` |
| `FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeatureChangeRequestsControllerGetPendingFeatureChangeRequests

- **Signature**: `FeatureChangeRequestsControllerGetPendingFeatureChangeRequests(FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `IReadOnlyList<FeatureChangeRequest>`
- **Error**: `ApiException<FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest.cs` |
| `FeatureChangeRequest` | `src/DevCycle/Models/FeatureChangeRequest.cs` |
| `FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeatureChangeRequestsControllerReviewFeatureChangeRequest

- **Signature**: `FeatureChangeRequestsControllerReviewFeatureChangeRequest(FeatureChangeRequestsControllerReviewFeatureChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Feature`, `Project`, `Body`
- **Query params (wire ← C#)**: `apply` ← `Apply`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FeatureChangeRequestsControllerReviewFeatureChangeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 405] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerReviewFeatureChangeRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerReviewFeatureChangeRequest.cs` |
| `ReviewFeatureChangeRequestDto` | `src/DevCycle/Models/ReviewFeatureChangeRequestDto.cs` |
| `FeatureChangeRequestsControllerReviewFeatureChangeRequestError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerReviewFeatureChangeRequestError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### FeatureChangeRequestsControllerSubmitChangeRequestForReview

- **Signature**: `FeatureChangeRequestsControllerSubmitChangeRequestForReview(FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Feature`, `Project`, `Body`
- **Returns**: `FeatureChangeRequest`
- **Error**: `ApiException<FeatureChangeRequestsControllerSubmitChangeRequestForReviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 405] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest` | `src/DevCycle/Requests/FeatureChangeRequests/FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest.cs` |
| `SubmitFeatureChangeRequestDto` | `src/DevCycle/Models/SubmitFeatureChangeRequestDto.cs` |
| `FeatureChangeRequest` | `src/DevCycle/Models/FeatureChangeRequest.cs` |
| `FeatureChangeRequestsControllerSubmitChangeRequestForReviewError` | `src/DevCycle/Errors/FeatureChangeRequestsControllerSubmitChangeRequestForReviewError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

