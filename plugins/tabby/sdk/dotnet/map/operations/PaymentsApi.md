<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsApi — operations

Accessor: `client.PaymentsApi` · Source: `src/Tabby/Api/PaymentsApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ClosePayment

- **Auth**: `options.BearerAuth`
- **Signature**: `ClosePayment(ClosePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentClose`
- **Error**: `ApiException<ClosePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400PaymentsClose([NotNullWhen(true)] out Error400PaymentsClose? value)` [400] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [401, 403] · `TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClosePaymentRequest` | `src/Tabby/Requests/PaymentsApi/ClosePaymentRequest.cs` |
| `PaymentClose` | `src/Tabby/Models/PaymentClose.cs` |
| `ClosePaymentError` | `src/Tabby/Errors/ClosePaymentError.cs` |
| `Error400PaymentsClose` | `src/Tabby/Models/Error400PaymentsClose.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |
| `Error404NoSuchPayment` | `src/Tabby/Models/Error404NoSuchPayment.cs` |

### GetPayment

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPayment(GetPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PaymentResponse`
- **Error**: `ApiException<GetPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400PaymentsGet([NotNullWhen(true)] out Error400PaymentsGet? value)` [400] · `TryGetError401MissingBearer([NotNullWhen(true)] out Error401MissingBearer? value)` [401] · `TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentRequest` | `src/Tabby/Requests/PaymentsApi/GetPaymentRequest.cs` |
| `PaymentResponse` | `src/Tabby/Models/PaymentResponse.cs` |
| `GetPaymentError` | `src/Tabby/Errors/GetPaymentError.cs` |
| `Error400PaymentsGet` | `src/Tabby/Models/Error400PaymentsGet.cs` |
| `Error401MissingBearer` | `src/Tabby/Models/Error401MissingBearer.cs` |
| `Error404NoSuchPayment` | `src/Tabby/Models/Error404NoSuchPayment.cs` |

### GetPayments

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPayments(GetPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `created_at__gte` ← `CreatedAtGte`, `created_at__lte` ← `CreatedAtLte`, `limit` ← `Limit`, `status` ← `Status`, `offset` ← `Offset`
- **Returns**: `Payments`
- **Error**: `ApiException<GetPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400Failed([NotNullWhen(true)] out Error400Failed? value)` [400] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentsRequest` | `src/Tabby/Requests/PaymentsApi/GetPaymentsRequest.cs` |
| `Status1TabbyApiReferencePaymentsApi` | `src/Tabby/Models/Enums/Status1TabbyApiReferencePaymentsApi.cs` |
| `Payments` | `src/Tabby/Models/Payments.cs` |
| `GetPaymentsError` | `src/Tabby/Errors/GetPaymentsError.cs` |
| `Error400Failed` | `src/Tabby/Models/Error400Failed.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |

### PostPaymentCapture

- **Auth**: `options.BearerAuth`
- **Signature**: `PostPaymentCapture(PostPaymentCaptureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentCaptureResponse`
- **Error**: `ApiException<PostPaymentCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400PaymentsCapture([NotNullWhen(true)] out Error400PaymentsCapture? value)` [400] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [401, 403] · `TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostPaymentCaptureRequest` | `src/Tabby/Requests/PaymentsApi/PostPaymentCaptureRequest.cs` |
| `CaptureRequest` | `src/Tabby/Models/CaptureRequest.cs` |
| `PaymentCaptureResponse` | `src/Tabby/Models/PaymentCaptureResponse.cs` |
| `PostPaymentCaptureError` | `src/Tabby/Errors/PostPaymentCaptureError.cs` |
| `Error400PaymentsCapture` | `src/Tabby/Models/Error400PaymentsCapture.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |
| `Error404NoSuchPayment` | `src/Tabby/Models/Error404NoSuchPayment.cs` |

### PostPaymentRefund

- **Auth**: `options.BearerAuth`
- **Signature**: `PostPaymentRefund(PostPaymentRefundRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentRefundResponse`
- **Error**: `ApiException<PostPaymentRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400PaymentsRefund([NotNullWhen(true)] out Error400PaymentsRefund? value)` [400] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [401, 403] · `TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value)` [404] · `TryGetError400([NotNullWhen(true)] out Error400? value)` [409] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostPaymentRefundRequest` | `src/Tabby/Requests/PaymentsApi/PostPaymentRefundRequest.cs` |
| `RefundRequest` | `src/Tabby/Models/RefundRequest.cs` |
| `PaymentRefundResponse` | `src/Tabby/Models/PaymentRefundResponse.cs` |
| `PostPaymentRefundError` | `src/Tabby/Errors/PostPaymentRefundError.cs` |
| `Error400PaymentsRefund` | `src/Tabby/Models/Error400PaymentsRefund.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |
| `Error404NoSuchPayment` | `src/Tabby/Models/Error404NoSuchPayment.cs` |
| `Error400` | `src/Tabby/Models/Error400.cs` |

### PutPayment

- **Auth**: `options.BearerAuth`
- **Signature**: `PutPayment(PutPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PaymentUpdate`
- **Error**: `ApiException<PutPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400PaymentsGet([NotNullWhen(true)] out Error400PaymentsGet? value)` [400] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [401, 403] · `TryGetError404NoSuchPayment([NotNullWhen(true)] out Error404NoSuchPayment? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutPaymentRequest` | `src/Tabby/Requests/PaymentsApi/PutPaymentRequest.cs` |
| `ApiV2PaymentsRequest` | `src/Tabby/Models/ApiV2PaymentsRequest.cs` |
| `PaymentUpdate` | `src/Tabby/Models/PaymentUpdate.cs` |
| `PutPaymentError` | `src/Tabby/Errors/PutPaymentError.cs` |
| `Error400PaymentsGet` | `src/Tabby/Models/Error400PaymentsGet.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |
| `Error404NoSuchPayment` | `src/Tabby/Models/Error404NoSuchPayment.cs` |

