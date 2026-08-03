# AuthorizedCardUsers — operations

Accessor: `client.AuthorizedCardUsers` · Source: `Api/AuthorizedCardUsers.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **HTTP**: `DELETE /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers` (Default (balanceplatform-api-test))
- **Notes**: Deletes the list of authorized users assigned to a card.
- **Signature**: `DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentInstrumentsAuthorisedCardUsers401Error1(out PaymentInstrumentsAuthorisedCardUsers401Error1)` [401] · `TryGetPaymentInstrumentsAuthorisedCardUsers403Error1(out PaymentInstrumentsAuthorisedCardUsers403Error1)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **HTTP**: `GET /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers` (Default (balanceplatform-api-test))
- **Notes**: Returns the authorized users for a card.
- **Signature**: `GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AuthorisedCardUsers`
- **Error**: `SdkException<GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentInstrumentsAuthorisedCardUsers401Error1(out PaymentInstrumentsAuthorisedCardUsers401Error1)` [401] · `TryGetPaymentInstrumentsAuthorisedCardUsers403Error1(out PaymentInstrumentsAuthorisedCardUsers403Error1)` [403] · `TryGetPaymentInstrumentsAuthorisedCardUsers404Error1(out PaymentInstrumentsAuthorisedCardUsers404Error1)` [404] · `TryGetPaymentInstrumentsAuthorisedCardUsers422Error1(out PaymentInstrumentsAuthorisedCardUsers422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **HTTP**: `PATCH /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers` (Default (balanceplatform-api-test))
- **Notes**: Updates the list of authorized users for a card. &gt;This request replaces all existing authorized users for the card.
- **Signature**: `PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, AuthorisedCardUsers body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentInstrumentsAuthorisedCardUsers400Error1(out PaymentInstrumentsAuthorisedCardUsers400Error1)` [400] · `TryGetPaymentInstrumentsAuthorisedCardUsers401Error1(out PaymentInstrumentsAuthorisedCardUsers401Error1)` [401] · `TryGetPaymentInstrumentsAuthorisedCardUsers403Error1(out PaymentInstrumentsAuthorisedCardUsers403Error1)` [403] · `TryGetPaymentInstrumentsAuthorisedCardUsers422Error1(out PaymentInstrumentsAuthorisedCardUsers422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers
- **HTTP**: `POST /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers` (Default (balanceplatform-api-test))
- **Notes**: Assigns authorized users to a card. Users must have the authorisedPaymentInstrumentUser capability to be able to use the card.
- **Signature**: `PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(string paymentInstrumentId, AuthorisedCardUsers body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetPaymentInstrumentsAuthorisedCardUsers400Error1(out PaymentInstrumentsAuthorisedCardUsers400Error1)` [400] · `TryGetPaymentInstrumentsAuthorisedCardUsers401Error1(out PaymentInstrumentsAuthorisedCardUsers401Error1)` [401] · `TryGetPaymentInstrumentsAuthorisedCardUsers403Error1(out PaymentInstrumentsAuthorisedCardUsers403Error1)` [403] · `TryGetPaymentInstrumentsAuthorisedCardUsers422Error1(out PaymentInstrumentsAuthorisedCardUsers422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
