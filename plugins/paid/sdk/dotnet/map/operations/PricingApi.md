<!-- Generated file — do not edit; regenerated with the SDK. -->

# PricingApi — operations

Accessor: `client.PricingApi` · Source: `src/Paid/Api/PricingApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPricing

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetPricing(GetPricingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProductAttributeId`, `Authorization`
- **Returns**: `PricingResponse`
- **Error**: `ApiException<GetPricingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPricingRequest` | `src/Paid/Requests/PricingApi/GetPricingRequest.cs` |
| `PricingResponse` | `src/Paid/Models/PricingResponse.cs` |
| `GetPricingError` | `src/Paid/Errors/GetPricingError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListPricing

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListPricing(ListPricingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProductId`, `Authorization`
- **Query params (wire ← C#)**: `productId` ← `ProductId`
- **Returns**: `PricingListResponse`
- **Error**: `ApiException<ListPricingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPricingRequest` | `src/Paid/Requests/PricingApi/ListPricingRequest.cs` |
| `PricingListResponse` | `src/Paid/Models/PricingListResponse.cs` |
| `ListPricingError` | `src/Paid/Errors/ListPricingError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdatePricing

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdatePricing(UpdatePricingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProductAttributeId`, `Authorization`
- **Returns**: `PricingResponse`
- **Error**: `ApiException<UpdatePricingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePricingOperationRequest` | `src/Paid/Requests/PricingApi/UpdatePricingOperationRequest.cs` |
| `UpdatePricingRequest` | `src/Paid/Models/UpdatePricingRequest.cs` |
| `PricingResponse` | `src/Paid/Models/PricingResponse.cs` |
| `UpdatePricingError` | `src/Paid/Errors/UpdatePricingError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

