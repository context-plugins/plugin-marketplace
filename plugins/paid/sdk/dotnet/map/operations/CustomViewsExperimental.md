<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomViewsExperimental — operations

Accessor: `client.CustomViewsExperimental` · Source: `src/Paid/Api/CustomViewsExperimental.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomView

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCustomView(CreateCustomViewOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `CustomView`
- **Error**: `ApiException<CreateCustomViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomViewOperationRequest` | `src/Paid/Requests/CustomViewsExperimental/CreateCustomViewOperationRequest.cs` |
| `CreateCustomViewRequest` | `src/Paid/Models/CreateCustomViewRequest.cs` |
| `CustomView` | `src/Paid/Models/CustomView.cs` |
| `CreateCustomViewError` | `src/Paid/Errors/CreateCustomViewError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomView

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetCustomView(GetCustomViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisplayId`, `Authorization`
- **Returns**: `CustomViewDetail`
- **Error**: `ApiException<GetCustomViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomViewRequest` | `src/Paid/Requests/CustomViewsExperimental/GetCustomViewRequest.cs` |
| `CustomViewDetail` | `src/Paid/Models/CustomViewDetail.cs` |
| `GetCustomViewError` | `src/Paid/Errors/GetCustomViewError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomViewData

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetCustomViewData(GetCustomViewDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisplayId`, `Authorization`
- **Query params (wire ← C#)**: `customerId` ← `CustomerId`, `periodKind` ← `PeriodKind`, `periodUnit` ← `PeriodUnit`, `periodAmount` ← `PeriodAmount`, `periodStart` ← `PeriodStart`, `periodEnd` ← `PeriodEnd`
- **Returns**: `ViewDataResponse`
- **Error**: `ApiException<GetCustomViewDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 408, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomViewDataRequest` | `src/Paid/Requests/CustomViewsExperimental/GetCustomViewDataRequest.cs` |
| `ExperimentalViewsDisplayIdDataGetParametersPeriodKind` | `src/Paid/Models/Enums/ExperimentalViewsDisplayIdDataGetParametersPeriodKind.cs` |
| `ExperimentalViewsDisplayIdDataGetParametersPeriodUnit` | `src/Paid/Models/Enums/ExperimentalViewsDisplayIdDataGetParametersPeriodUnit.cs` |
| `ViewDataResponse` | `src/Paid/Models/ViewDataResponse.cs` |
| `GetCustomViewDataError` | `src/Paid/Errors/GetCustomViewDataError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomViewEmbedToken

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetCustomViewEmbedToken(GetCustomViewEmbedTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisplayId`, `CustomerId`, `Authorization`
- **Query params (wire ← C#)**: `customerId` ← `CustomerId`, `ttlSeconds` ← `TtlSeconds`
- **Returns**: `CustomViewEmbedTokenResponse`
- **Error**: `ApiException<GetCustomViewEmbedTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomViewEmbedTokenRequest` | `src/Paid/Requests/CustomViewsExperimental/GetCustomViewEmbedTokenRequest.cs` |
| `CustomViewEmbedTokenResponse` | `src/Paid/Models/CustomViewEmbedTokenResponse.cs` |
| `GetCustomViewEmbedTokenError` | `src/Paid/Errors/GetCustomViewEmbedTokenError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListCustomViews

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListCustomViews(ListCustomViewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `CustomViewListResponse`
- **Error**: `ApiException<ListCustomViewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomViewsRequest` | `src/Paid/Requests/CustomViewsExperimental/ListCustomViewsRequest.cs` |
| `CustomViewListResponse` | `src/Paid/Models/CustomViewListResponse.cs` |
| `ListCustomViewsError` | `src/Paid/Errors/ListCustomViewsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### PublishCustomView

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `PublishCustomView(PublishCustomViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisplayId`, `Authorization`
- **Returns**: `CustomView`
- **Error**: `ApiException<PublishCustomViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishCustomViewRequest` | `src/Paid/Requests/CustomViewsExperimental/PublishCustomViewRequest.cs` |
| `CustomView` | `src/Paid/Models/CustomView.cs` |
| `PublishCustomViewError` | `src/Paid/Errors/PublishCustomViewError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateCustomView

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateCustomView(UpdateCustomViewOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisplayId`, `Authorization`
- **Returns**: `CustomView`
- **Error**: `ApiException<UpdateCustomViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomViewOperationRequest` | `src/Paid/Requests/CustomViewsExperimental/UpdateCustomViewOperationRequest.cs` |
| `UpdateCustomViewRequest` | `src/Paid/Models/UpdateCustomViewRequest.cs` |
| `CustomView` | `src/Paid/Models/CustomView.cs` |
| `UpdateCustomViewError` | `src/Paid/Errors/UpdateCustomViewError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateCustomViewPeriod

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateCustomViewPeriod(UpdateCustomViewPeriodOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DisplayId`, `Authorization`
- **Returns**: `CustomView`
- **Error**: `ApiException<UpdateCustomViewPeriodError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomViewPeriodOperationRequest` | `src/Paid/Requests/CustomViewsExperimental/UpdateCustomViewPeriodOperationRequest.cs` |
| `UpdateCustomViewPeriodRequest` | `src/Paid/Models/UpdateCustomViewPeriodRequest.cs` |
| `CustomView` | `src/Paid/Models/CustomView.cs` |
| `UpdateCustomViewPeriodError` | `src/Paid/Errors/UpdateCustomViewPeriodError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

