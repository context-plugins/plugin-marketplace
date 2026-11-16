<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentInstrumentsApi — operations

Accessor: `client.PaymentInstrumentsApi` · Source: `src/FinixApiReference/Api/PaymentInstrumentsApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateApplePaySession

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateApplePaySession(CreateApplePaySessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PaymentInstrumentApplePaySession1`
- **Error**: `ApiException<CreateApplePaySessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateApplePaySessionRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/CreateApplePaySessionRequest.cs` |
| `PaymentInstrumentApplePaySession` | `src/FinixApiReference/Models/PaymentInstrumentApplePaySession.cs` |
| `PaymentInstrumentApplePaySession1` | `src/FinixApiReference/Models/PaymentInstrumentApplePaySession1.cs` |
| `CreateApplePaySessionError` | `src/FinixApiReference/Errors/CreateApplePaySessionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreatePaymentInstrument

- **Auth**: `options.BasicAuth`
- **Signature**: `CreatePaymentInstrument(CreatePaymentInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreatePaymentInstrument`
- **Error**: `ApiException<CreatePaymentInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentInstrumentRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/CreatePaymentInstrumentRequest.cs` |
| `PaymentInstrumentsRequest` | `src/FinixApiReference/Models/AnyOf/PaymentInstrumentsRequest.cs` |
| `CreatePaymentInstrument` | `src/FinixApiReference/Models/AnyOf/CreatePaymentInstrument.cs` |
| `CreatePaymentInstrumentError` | `src/FinixApiReference/Errors/CreatePaymentInstrumentError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreatePaymentInstrumentVerification

- **Auth**: `options.BasicAuth`
- **Signature**: `CreatePaymentInstrumentVerification(CreatePaymentInstrumentVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentIdVerify`, `Body`
- **Returns**: `PaymentInstrumentCard`
- **Error**: `ApiException<CreatePaymentInstrumentVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentInstrumentVerificationRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/CreatePaymentInstrumentVerificationRequest.cs` |
| `PaymentInstrumentsRequest2` | `src/FinixApiReference/Models/AnyOf/PaymentInstrumentsRequest2.cs` |
| `PaymentInstrumentCard` | `src/FinixApiReference/Models/PaymentInstrumentCard.cs` |
| `CreatePaymentInstrumentVerificationError` | `src/FinixApiReference/Errors/CreatePaymentInstrumentVerificationError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreatePaymentInstrumentVerificationPushToCard

- **Auth**: `options.BasicAuth`
- **Signature**: `CreatePaymentInstrumentVerificationPushToCard(CreatePaymentInstrumentVerificationPushToCardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentIdVerify`, `Body`
- **Returns**: `PaymentInstrumentVerification`
- **Error**: `ApiException<CreatePaymentInstrumentVerificationPushToCardError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePaymentInstrumentVerificationPushToCardRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/CreatePaymentInstrumentVerificationPushToCardRequest.cs` |
| `PushToCardEligibility` | `src/FinixApiReference/Models/PushToCardEligibility.cs` |
| `PaymentInstrumentVerification` | `src/FinixApiReference/Models/PaymentInstrumentVerification.cs` |
| `CreatePaymentInstrumentVerificationPushToCardError` | `src/FinixApiReference/Errors/CreatePaymentInstrumentVerificationPushToCardError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetPaymentInstrument

- **Auth**: `options.BasicAuth`
- **Signature**: `GetPaymentInstrument(GetPaymentInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentId`
- **Returns**: `PaymentInstrumentsResponse`
- **Error**: `ApiException<GetPaymentInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentInstrumentRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/GetPaymentInstrumentRequest.cs` |
| `PaymentInstrumentsResponse` | `src/FinixApiReference/Models/AnyOf/PaymentInstrumentsResponse.cs` |
| `GetPaymentInstrumentError` | `src/FinixApiReference/Errors/GetPaymentInstrumentError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListInstrumentHistoryEntries

- **Auth**: `options.BasicAuth`
- **Signature**: `ListInstrumentHistoryEntries(ListInstrumentHistoryEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`
- **Returns**: `ListInstrumentHistoryEntries`
- **Error**: `ApiException<ListInstrumentHistoryEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInstrumentHistoryEntriesRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/ListInstrumentHistoryEntriesRequest.cs` |
| `ListInstrumentHistoryEntries` | `src/FinixApiReference/Models/ListInstrumentHistoryEntries.cs` |
| `ListInstrumentHistoryEntriesError` | `src/FinixApiReference/Errors/ListInstrumentHistoryEntriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListPaymentInstruments

- **Auth**: `options.BasicAuth`
- **Signature**: `ListPaymentInstruments(ListPaymentInstrumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `account_last4` ← `AccountLast4`, `account_routing_number` ← `AccountRoutingNumber`, `bin` ← `Bin`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `expiration_month` ← `ExpirationMonth`, `expiration_year` ← `ExpirationYear`, `id` ← `Id`, `last4` ← `Last4`, `limit` ← `Limit`, `name` ← `Name`, `owner_identity_id` ← `OwnerIdentityId`, `type` ← `Type`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListPaymentInstruments`
- **Error**: `ApiException<ListPaymentInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentInstrumentsRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/ListPaymentInstrumentsRequest.cs` |
| `Type52` | `src/FinixApiReference/Models/Enums/Type52.cs` |
| `ListPaymentInstruments` | `src/FinixApiReference/Models/ListPaymentInstruments.cs` |
| `ListPaymentInstrumentsError` | `src/FinixApiReference/Errors/ListPaymentInstrumentsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdatePaymentInstrument

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdatePaymentInstrument(UpdatePaymentInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PaymentInstrumentId`, `Body`
- **Returns**: `PaymentInstrumentsResponse1`
- **Error**: `ApiException<UpdatePaymentInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentInstrumentRequest` | `src/FinixApiReference/Requests/PaymentInstrumentsApi/UpdatePaymentInstrumentRequest.cs` |
| `PaymentInstrumentsRequest1` | `src/FinixApiReference/Models/AnyOf/PaymentInstrumentsRequest1.cs` |
| `PaymentInstrumentsResponse1` | `src/FinixApiReference/Models/AnyOf/PaymentInstrumentsResponse1.cs` |
| `UpdatePaymentInstrumentError` | `src/FinixApiReference/Errors/UpdatePaymentInstrumentError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

