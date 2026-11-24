<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.Payments` · Source: `src/Divvy/Api/Payments.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelPayment

- **Signature**: `CancelPayment(CancelPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<CancelPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPaymentRequest` | `src/Divvy/Requests/Payments/CancelPaymentRequest.cs` |
| `PaymentResponseDto` | `src/Divvy/Models/PaymentResponseDto.cs` |
| `CancelPaymentError` | `src/Divvy/Errors/CancelPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateBulkPayment

- **Signature**: `CreateBulkPayment(CreateBulkPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkPaymentResponseDto`
- **Error**: `ApiException<CreateBulkPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkPaymentRequest` | `src/Divvy/Requests/Payments/CreateBulkPaymentRequest.cs` |
| `BulkPaymentRequestDto` | `src/Divvy/Models/BulkPaymentRequestDto.cs` |
| `BulkPaymentResponseDto` | `src/Divvy/Models/BulkPaymentResponseDto.cs` |
| `CreateBulkPaymentError` | `src/Divvy/Errors/CreateBulkPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateMassPayment

- **Signature**: `CreateMassPayment(CreateMassPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MassPaymentResponseDto`
- **Error**: `ApiException<CreateMassPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMassPaymentRequest` | `src/Divvy/Requests/Payments/CreateMassPaymentRequest.cs` |
| `BulkPaymentRequestDto` | `src/Divvy/Models/BulkPaymentRequestDto.cs` |
| `MassPaymentResponseDto` | `src/Divvy/Models/MassPaymentResponseDto.cs` |
| `CreateMassPaymentError` | `src/Divvy/Errors/CreateMassPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreatePayment

- **Signature**: `CreatePayment(CreatePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<CreatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentRequest` | `src/Divvy/Requests/Payments/CreatePaymentRequest.cs` |
| `PaymentRequestDto` | `src/Divvy/Models/PaymentRequestDto.cs` |
| `PaymentResponseDto` | `src/Divvy/Models/PaymentResponseDto.cs` |
| `CreatePaymentError` | `src/Divvy/Errors/CreatePaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCheckImageData

- **Signature**: `GetCheckImageData(GetCheckImageDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Returns**: `CheckImageDataResponseDto`
- **Error**: `ApiException<GetCheckImageDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCheckImageDataRequest` | `src/Divvy/Requests/Payments/GetCheckImageDataRequest.cs` |
| `CheckImageDataResponseDto` | `src/Divvy/Models/CheckImageDataResponseDto.cs` |
| `GetCheckImageDataError` | `src/Divvy/Errors/GetCheckImageDataError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetExchangeRate

- **Signature**: `GetExchangeRate(GetExchangeRateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Amount`
- **Query params (wire ← C#)**: `vendorId` ← `VendorId`, `amount` ← `Amount`
- **Returns**: `ExchangeRateResponseDto`
- **Error**: `ApiException<GetExchangeRateError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExchangeRateRequest` | `src/Divvy/Requests/Payments/GetExchangeRateRequest.cs` |
| `ExchangeRateResponseDto` | `src/Divvy/Models/ExchangeRateResponseDto.cs` |
| `GetExchangeRateError` | `src/Divvy/Errors/GetExchangeRateError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetExchangeRates

- **Signature**: `GetExchangeRates(GetExchangeRatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExchangeRatesResponseDto`
- **Error**: `ApiException<GetExchangeRatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExchangeRatesRequest` | `src/Divvy/Requests/Payments/GetExchangeRatesRequest.cs` |
| `ExchangeRateRequestDto` | `src/Divvy/Models/ExchangeRateRequestDto.cs` |
| `ExchangeRatesResponseDto` | `src/Divvy/Models/ExchangeRatesResponseDto.cs` |
| `GetExchangeRatesError` | `src/Divvy/Errors/GetExchangeRatesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetMassPayment

- **Signature**: `GetMassPayment(GetMassPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentBatchId`
- **Returns**: `MassPaymentDetailsResponseDto`
- **Error**: `ApiException<GetMassPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMassPaymentRequest` | `src/Divvy/Requests/Payments/GetMassPaymentRequest.cs` |
| `MassPaymentDetailsResponseDto` | `src/Divvy/Models/MassPaymentDetailsResponseDto.cs` |
| `GetMassPaymentError` | `src/Divvy/Errors/GetMassPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPayment

- **Signature**: `GetPayment(GetPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<GetPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentRequest` | `src/Divvy/Requests/Payments/GetPaymentRequest.cs` |
| `PaymentResponseDto` | `src/Divvy/Models/PaymentResponseDto.cs` |
| `GetPaymentError` | `src/Divvy/Errors/GetPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPaymentOptions

- **Signature**: `ListPaymentOptions(ListPaymentOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Amount`
- **Query params (wire ← C#)**: `vendorId` ← `VendorId`, `amount` ← `Amount`
- **Returns**: `PaymentOptionsResponseDto`
- **Error**: `ApiException<ListPaymentOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentOptionsRequest` | `src/Divvy/Requests/Payments/ListPaymentOptionsRequest.cs` |
| `PaymentOptionsResponseDto` | `src/Divvy/Models/PaymentOptionsResponseDto.cs` |
| `ListPaymentOptionsError` | `src/Divvy/Errors/ListPaymentOptionsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPayments

- **Signature**: `ListPayments(ListPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListPaymentResponseDto`
- **Error**: `ApiException<ListPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentsRequest` | `src/Divvy/Requests/Payments/ListPaymentsRequest.cs` |
| `ListPaymentResponseDto` | `src/Divvy/Models/ListPaymentResponseDto.cs` |
| `ListPaymentsError` | `src/Divvy/Errors/ListPaymentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### VoidPayment

- **Signature**: `VoidPayment(VoidPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`, `Body`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<VoidPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VoidPaymentRequest` | `src/Divvy/Requests/Payments/VoidPaymentRequest.cs` |
| `VoidRequestDto` | `src/Divvy/Models/VoidRequestDto.cs` |
| `PaymentResponseDto` | `src/Divvy/Models/PaymentResponseDto.cs` |
| `VoidPaymentError` | `src/Divvy/Errors/VoidPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

