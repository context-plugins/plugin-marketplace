<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentTerms — operations

Accessor: `client.PaymentTerms` · Source: `src/Divvy/Api/PaymentTerms.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePaymentTerm

- **Signature**: `CreatePaymentTerm(CreatePaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `Body`
- **Returns**: `PaymentTermResponseDto`
- **Error**: `ApiException<CreatePaymentTermError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentTermRequest` | `src/Divvy/Requests/PaymentTerms/CreatePaymentTermRequest.cs` |
| `CreatePaymentTermRequestDto` | `src/Divvy/Models/CreatePaymentTermRequestDto.cs` |
| `PaymentTermResponseDto` | `src/Divvy/Models/PaymentTermResponseDto.cs` |
| `CreatePaymentTermError` | `src/Divvy/Errors/CreatePaymentTermError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPaymentTerm

- **Signature**: `GetPaymentTerm(GetPaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `PaymentTermId`
- **Returns**: `PaymentTermResponseDto`
- **Error**: `ApiException<GetPaymentTermError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentTermRequest` | `src/Divvy/Requests/PaymentTerms/GetPaymentTermRequest.cs` |
| `PaymentTermResponseDto` | `src/Divvy/Models/PaymentTermResponseDto.cs` |
| `GetPaymentTermError` | `src/Divvy/Errors/GetPaymentTermError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListPaymentTerms

- **Signature**: `ListPaymentTerms(ListPaymentTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `ListResponseDtoPaymentTermResponseDto`
- **Error**: `ApiException<ListPaymentTermsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentTermsRequest` | `src/Divvy/Requests/PaymentTerms/ListPaymentTermsRequest.cs` |
| `ListResponseDtoPaymentTermResponseDto` | `src/Divvy/Models/ListResponseDtoPaymentTermResponseDto.cs` |
| `ListPaymentTermsError` | `src/Divvy/Errors/ListPaymentTermsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdatePaymentTerm

- **Signature**: `UpdatePaymentTerm(UpdatePaymentTermRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationId`, `PaymentTermId`, `Body`
- **Returns**: `PaymentTermResponseDto`
- **Error**: `ApiException<UpdatePaymentTermError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentTermRequest` | `src/Divvy/Requests/PaymentTerms/UpdatePaymentTermRequest.cs` |
| `UpdatePaymentTermRequestDto` | `src/Divvy/Models/UpdatePaymentTermRequestDto.cs` |
| `PaymentTermResponseDto` | `src/Divvy/Models/PaymentTermResponseDto.cs` |
| `UpdatePaymentTermError` | `src/Divvy/Errors/UpdatePaymentTermError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

