<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentTerms — operations

Accessor: `client.PaymentTerms` · Source: `src/Bill/Api/PaymentTerms.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePaymentTerm

- **Signature**: `CreatePaymentTerm(CreatePaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `Body`
- **Returns**: `PaymentTermResponseDto`
- **Error**: `ApiException<CreatePaymentTermError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentTermRequest` | `src/Bill/Requests/PaymentTerms/CreatePaymentTermRequest.cs` |
| `CreatePaymentTermRequestDto` | `src/Bill/Models/CreatePaymentTermRequestDto.cs` |
| `PaymentTermResponseDto` | `src/Bill/Models/PaymentTermResponseDto.cs` |
| `CreatePaymentTermError` | `src/Bill/Errors/CreatePaymentTermError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPaymentTerm

- **Signature**: `GetPaymentTerm(GetPaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `PaymentTermId`
- **Returns**: `PaymentTermResponseDto`
- **Error**: `ApiException<GetPaymentTermError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentTermRequest` | `src/Bill/Requests/PaymentTerms/GetPaymentTermRequest.cs` |
| `PaymentTermResponseDto` | `src/Bill/Models/PaymentTermResponseDto.cs` |
| `GetPaymentTermError` | `src/Bill/Errors/GetPaymentTermError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListPaymentTerms

- **Signature**: `ListPaymentTerms(ListPaymentTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `ListResponseDtoPaymentTermResponseDto`
- **Error**: `ApiException<ListPaymentTermsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentTermsRequest` | `src/Bill/Requests/PaymentTerms/ListPaymentTermsRequest.cs` |
| `ListResponseDtoPaymentTermResponseDto` | `src/Bill/Models/ListResponseDtoPaymentTermResponseDto.cs` |
| `ListPaymentTermsError` | `src/Bill/Errors/ListPaymentTermsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdatePaymentTerm

- **Signature**: `UpdatePaymentTerm(UpdatePaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `PaymentTermId`, `Body`
- **Returns**: `PaymentTermResponseDto`
- **Error**: `ApiException<UpdatePaymentTermError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentTermRequest` | `src/Bill/Requests/PaymentTerms/UpdatePaymentTermRequest.cs` |
| `UpdatePaymentTermRequestDto` | `src/Bill/Models/UpdatePaymentTermRequestDto.cs` |
| `PaymentTermResponseDto` | `src/Bill/Models/PaymentTermResponseDto.cs` |
| `UpdatePaymentTermError` | `src/Bill/Errors/UpdatePaymentTermError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

