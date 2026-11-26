<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.Payments` · Source: `src/Bill/Api/Payments.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelPayment

- **Signature**: `CancelPayment(CancelPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<CancelPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPaymentRequest` | `src/Bill/Requests/Payments/CancelPaymentRequest.cs` |
| `PaymentResponseDto` | `src/Bill/Models/PaymentResponseDto.cs` |
| `CancelPaymentError` | `src/Bill/Errors/CancelPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateBulkPayment

- **Signature**: `CreateBulkPayment(CreateBulkPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkPaymentResponseDto`
- **Error**: `ApiException<CreateBulkPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkPaymentRequest` | `src/Bill/Requests/Payments/CreateBulkPaymentRequest.cs` |
| `BulkPaymentRequestDto` | `src/Bill/Models/BulkPaymentRequestDto.cs` |
| `BulkPaymentResponseDto` | `src/Bill/Models/BulkPaymentResponseDto.cs` |
| `CreateBulkPaymentError` | `src/Bill/Errors/CreateBulkPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateMassPayment

- **Signature**: `CreateMassPayment(CreateMassPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MassPaymentResponseDto`
- **Error**: `ApiException<CreateMassPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMassPaymentRequest` | `src/Bill/Requests/Payments/CreateMassPaymentRequest.cs` |
| `BulkPaymentRequestDto` | `src/Bill/Models/BulkPaymentRequestDto.cs` |
| `MassPaymentResponseDto` | `src/Bill/Models/MassPaymentResponseDto.cs` |
| `CreateMassPaymentError` | `src/Bill/Errors/CreateMassPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreatePayment

- **Signature**: `CreatePayment(CreatePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<CreatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentRequest` | `src/Bill/Requests/Payments/CreatePaymentRequest.cs` |
| `PaymentRequestDto` | `src/Bill/Models/PaymentRequestDto.cs` |
| `PaymentResponseDto` | `src/Bill/Models/PaymentResponseDto.cs` |
| `CreatePaymentError` | `src/Bill/Errors/CreatePaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCheckImageData

- **Signature**: `GetCheckImageData(GetCheckImageDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Returns**: `CheckImageDataResponseDto`
- **Error**: `ApiException<GetCheckImageDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCheckImageDataRequest` | `src/Bill/Requests/Payments/GetCheckImageDataRequest.cs` |
| `CheckImageDataResponseDto` | `src/Bill/Models/CheckImageDataResponseDto.cs` |
| `GetCheckImageDataError` | `src/Bill/Errors/GetCheckImageDataError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetExchangeRate

- **Signature**: `GetExchangeRate(GetExchangeRateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Amount`
- **Query params (wire ← C#)**: `vendorId` ← `VendorId`, `amount` ← `Amount`
- **Returns**: `ExchangeRateResponseDto`
- **Error**: `ApiException<GetExchangeRateError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExchangeRateRequest` | `src/Bill/Requests/Payments/GetExchangeRateRequest.cs` |
| `ExchangeRateResponseDto` | `src/Bill/Models/ExchangeRateResponseDto.cs` |
| `GetExchangeRateError` | `src/Bill/Errors/GetExchangeRateError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetExchangeRates

- **Signature**: `GetExchangeRates(GetExchangeRatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExchangeRatesResponseDto`
- **Error**: `ApiException<GetExchangeRatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExchangeRatesRequest` | `src/Bill/Requests/Payments/GetExchangeRatesRequest.cs` |
| `ExchangeRateRequestDto` | `src/Bill/Models/ExchangeRateRequestDto.cs` |
| `ExchangeRatesResponseDto` | `src/Bill/Models/ExchangeRatesResponseDto.cs` |
| `GetExchangeRatesError` | `src/Bill/Errors/GetExchangeRatesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetMassPayment

- **Signature**: `GetMassPayment(GetMassPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentBatchId`
- **Returns**: `MassPaymentDetailsResponseDto`
- **Error**: `ApiException<GetMassPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMassPaymentRequest` | `src/Bill/Requests/Payments/GetMassPaymentRequest.cs` |
| `MassPaymentDetailsResponseDto` | `src/Bill/Models/MassPaymentDetailsResponseDto.cs` |
| `GetMassPaymentError` | `src/Bill/Errors/GetMassPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPayment

- **Signature**: `GetPayment(GetPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<GetPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentRequest` | `src/Bill/Requests/Payments/GetPaymentRequest.cs` |
| `PaymentResponseDto` | `src/Bill/Models/PaymentResponseDto.cs` |
| `GetPaymentError` | `src/Bill/Errors/GetPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPaymentOptions

- **Signature**: `ListPaymentOptions(ListPaymentOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Amount`
- **Query params (wire ← C#)**: `vendorId` ← `VendorId`, `amount` ← `Amount`
- **Returns**: `PaymentOptionsResponseDto`
- **Error**: `ApiException<ListPaymentOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentOptionsRequest` | `src/Bill/Requests/Payments/ListPaymentOptionsRequest.cs` |
| `PaymentOptionsResponseDto` | `src/Bill/Models/PaymentOptionsResponseDto.cs` |
| `ListPaymentOptionsError` | `src/Bill/Errors/ListPaymentOptionsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPayments

- **Signature**: `ListPayments(ListPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListPaymentResponseDto`
- **Error**: `ApiException<ListPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentsRequest` | `src/Bill/Requests/Payments/ListPaymentsRequest.cs` |
| `ListPaymentResponseDto` | `src/Bill/Models/ListPaymentResponseDto.cs` |
| `ListPaymentsError` | `src/Bill/Errors/ListPaymentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### VoidPayment

- **Signature**: `VoidPayment(VoidPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentId`, `Body`
- **Returns**: `PaymentResponseDto`
- **Error**: `ApiException<VoidPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VoidPaymentRequest` | `src/Bill/Requests/Payments/VoidPaymentRequest.cs` |
| `VoidRequestDto` | `src/Bill/Models/VoidRequestDto.cs` |
| `PaymentResponseDto` | `src/Bill/Models/PaymentResponseDto.cs` |
| `VoidPaymentError` | `src/Bill/Errors/VoidPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

