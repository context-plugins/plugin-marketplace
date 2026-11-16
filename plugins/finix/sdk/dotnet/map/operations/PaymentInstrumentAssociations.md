<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentInstrumentAssociations — operations

Accessor: `client.PaymentInstrumentAssociations` · Source: `src/FinixApiReference/Api/PaymentInstrumentAssociations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePaymentInstrumentAssociation

- **Auth**: `options.BasicAuth`
- **Signature**: `CreatePaymentInstrumentAssociation(CreatePaymentInstrumentAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PaymentInstrumentAssociation`
- **Error**: `ApiException<CreatePaymentInstrumentAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentInstrumentAssociationRequest` | `src/FinixApiReference/Requests/PaymentInstrumentAssociations/CreatePaymentInstrumentAssociationRequest.cs` |
| `CreatePaymentInstrumentAssociation` | `src/FinixApiReference/Models/CreatePaymentInstrumentAssociation.cs` |
| `PaymentInstrumentAssociation` | `src/FinixApiReference/Models/PaymentInstrumentAssociation.cs` |
| `CreatePaymentInstrumentAssociationError` | `src/FinixApiReference/Errors/CreatePaymentInstrumentAssociationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetPaymentInstrumentAssociation

- **Auth**: `options.BasicAuth`
- **Signature**: `GetPaymentInstrumentAssociation(GetPaymentInstrumentAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentAssociationId`
- **Returns**: `PaymentInstrumentAssociation`
- **Error**: `ApiException<GetPaymentInstrumentAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentInstrumentAssociationRequest` | `src/FinixApiReference/Requests/PaymentInstrumentAssociations/GetPaymentInstrumentAssociationRequest.cs` |
| `PaymentInstrumentAssociation` | `src/FinixApiReference/Models/PaymentInstrumentAssociation.cs` |
| `GetPaymentInstrumentAssociationError` | `src/FinixApiReference/Errors/GetPaymentInstrumentAssociationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListPaymentInstrumentAssociations

- **Auth**: `options.BasicAuth`
- **Signature**: `ListPaymentInstrumentAssociations(ListPaymentInstrumentAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`, `merchant_id` ← `MerchantId`, `payment_instrument_id` ← `PaymentInstrumentId`, `application_id` ← `ApplicationId`
- **Returns**: `ListPaymentInstrumentAssociations`
- **Error**: `ApiException<ListPaymentInstrumentAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentInstrumentAssociationsRequest` | `src/FinixApiReference/Requests/PaymentInstrumentAssociations/ListPaymentInstrumentAssociationsRequest.cs` |
| `ListPaymentInstrumentAssociations` | `src/FinixApiReference/Models/ListPaymentInstrumentAssociations.cs` |
| `ListPaymentInstrumentAssociationsError` | `src/FinixApiReference/Errors/ListPaymentInstrumentAssociationsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdatePaymentInstrumentAssociation

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdatePaymentInstrumentAssociation(UpdatePaymentInstrumentAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentAssociationId`, `Body`
- **Returns**: `PaymentInstrumentAssociation`
- **Error**: `ApiException<UpdatePaymentInstrumentAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentInstrumentAssociationRequest` | `src/FinixApiReference/Requests/PaymentInstrumentAssociations/UpdatePaymentInstrumentAssociationRequest.cs` |
| `PaymentInstrumentAssociationsRequest` | `src/FinixApiReference/Models/AnyOf/PaymentInstrumentAssociationsRequest.cs` |
| `PaymentInstrumentAssociation` | `src/FinixApiReference/Models/PaymentInstrumentAssociation.cs` |
| `UpdatePaymentInstrumentAssociationError` | `src/FinixApiReference/Errors/UpdatePaymentInstrumentAssociationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

