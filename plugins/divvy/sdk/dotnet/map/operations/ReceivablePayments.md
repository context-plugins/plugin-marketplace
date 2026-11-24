<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReceivablePayments — operations

Accessor: `client.ReceivablePayments` · Source: `src/Divvy/Api/ReceivablePayments.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ChargeCustomer

- **Signature**: `ChargeCustomer(ChargeCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ReceivablePaymentResponseDto`
- **Error**: `ApiException<ChargeCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChargeCustomerRequest` | `src/Divvy/Requests/ReceivablePayments/ChargeCustomerRequest.cs` |
| `ChargeCustomerRequestDto` | `src/Divvy/Models/ChargeCustomerRequestDto.cs` |
| `ReceivablePaymentResponseDto` | `src/Divvy/Models/ReceivablePaymentResponseDto.cs` |
| `ChargeCustomerError` | `src/Divvy/Errors/ChargeCustomerError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetReceivablePayment

- **Signature**: `GetReceivablePayment(GetReceivablePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReceivedPaymentId`
- **Returns**: `ReceivablePaymentResponseDto`
- **Error**: `ApiException<GetReceivablePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReceivablePaymentRequest` | `src/Divvy/Requests/ReceivablePayments/GetReceivablePaymentRequest.cs` |
| `ReceivablePaymentResponseDto` | `src/Divvy/Models/ReceivablePaymentResponseDto.cs` |
| `GetReceivablePaymentError` | `src/Divvy/Errors/GetReceivablePaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListReceivablePayments

- **Signature**: `ListReceivablePayments(ListReceivablePaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoReceivablePaymentResponseDto`
- **Error**: `ApiException<ListReceivablePaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReceivablePaymentsRequest` | `src/Divvy/Requests/ReceivablePayments/ListReceivablePaymentsRequest.cs` |
| `ListResponseDtoReceivablePaymentResponseDto` | `src/Divvy/Models/ListResponseDtoReceivablePaymentResponseDto.cs` |
| `ListReceivablePaymentsError` | `src/Divvy/Errors/ListReceivablePaymentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

