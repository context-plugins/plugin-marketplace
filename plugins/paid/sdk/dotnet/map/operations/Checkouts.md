<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checkouts — operations

Accessor: `client.Checkouts` · Source: `src/Paid/Api/Checkouts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveCheckout

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ArchiveCheckout(ArchiveCheckoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<ArchiveCheckoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCheckoutRequest` | `src/Paid/Requests/Checkouts/ArchiveCheckoutRequest.cs` |
| `ArchiveCheckoutError` | `src/Paid/Errors/ArchiveCheckoutError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### CreateCheckout

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCheckout(CreateCheckoutOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Checkout`
- **Error**: `ApiException<CreateCheckoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCheckoutOperationRequest` | `src/Paid/Requests/Checkouts/CreateCheckoutOperationRequest.cs` |
| `CreateCheckoutRequest` | `src/Paid/Models/CreateCheckoutRequest.cs` |
| `Checkout` | `src/Paid/Models/Checkout.cs` |
| `CreateCheckoutError` | `src/Paid/Errors/CreateCheckoutError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCheckout

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetCheckout(GetCheckoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CheckoutDetails`
- **Error**: `ApiException<GetCheckoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCheckoutRequest` | `src/Paid/Requests/Checkouts/GetCheckoutRequest.cs` |
| `CheckoutDetails` | `src/Paid/Models/CheckoutDetails.cs` |
| `GetCheckoutError` | `src/Paid/Errors/GetCheckoutError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListCheckouts

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListCheckouts(ListCheckoutsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `status` ← `Status`
- **Returns**: `CheckoutListResponse`
- **Error**: `ApiException<ListCheckoutsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCheckoutsRequest` | `src/Paid/Requests/Checkouts/ListCheckoutsRequest.cs` |
| `CheckoutsGetParametersStatus` | `src/Paid/Models/Enums/CheckoutsGetParametersStatus.cs` |
| `CheckoutListResponse` | `src/Paid/Models/CheckoutListResponse.cs` |
| `ListCheckoutsError` | `src/Paid/Errors/ListCheckoutsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

