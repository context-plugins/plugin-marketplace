<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReceivablePayments — operations

Accessor: `client.ReceivablePayments` · Source: `src/Bill/Api/ReceivablePayments.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ChargeCustomer

- **Signature**: `ChargeCustomer(ChargeCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ReceivablePaymentResponseDto`
- **Error**: `ApiException<ChargeCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChargeCustomerRequest` | `src/Bill/Requests/ReceivablePayments/ChargeCustomerRequest.cs` |
| `ChargeCustomerRequestDto` | `src/Bill/Models/ChargeCustomerRequestDto.cs` |
| `ReceivablePaymentResponseDto` | `src/Bill/Models/ReceivablePaymentResponseDto.cs` |
| `ChargeCustomerError` | `src/Bill/Errors/ChargeCustomerError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetReceivablePayment

- **Signature**: `GetReceivablePayment(GetReceivablePaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReceivedPaymentId`
- **Returns**: `ReceivablePaymentResponseDto`
- **Error**: `ApiException<GetReceivablePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReceivablePaymentRequest` | `src/Bill/Requests/ReceivablePayments/GetReceivablePaymentRequest.cs` |
| `ReceivablePaymentResponseDto` | `src/Bill/Models/ReceivablePaymentResponseDto.cs` |
| `GetReceivablePaymentError` | `src/Bill/Errors/GetReceivablePaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListReceivablePayments

- **Signature**: `ListReceivablePayments(ListReceivablePaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoReceivablePaymentResponseDto`
- **Error**: `ApiException<ListReceivablePaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReceivablePaymentsRequest` | `src/Bill/Requests/ReceivablePayments/ListReceivablePaymentsRequest.cs` |
| `ListResponseDtoReceivablePaymentResponseDto` | `src/Bill/Models/ListResponseDtoReceivablePaymentResponseDto.cs` |
| `ListReceivablePaymentsError` | `src/Bill/Errors/ListReceivablePaymentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

