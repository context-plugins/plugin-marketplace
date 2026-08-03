# PaymentInstruments — operations

Accessor: `client.PaymentInstruments` · Source: `Api/PaymentInstruments.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPaymentInstrumentsId
- **HTTP**: `GET /paymentInstruments/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a payment instrument.
- **Signature**: `GetPaymentInstrumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInstrument`
- **Error**: `SdkException<GetPaymentInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInstrumentsIdNetworkTokenActivationData
- **HTTP**: `GET /paymentInstruments/{id}/networkTokenActivationData` (Default (balanceplatform-api-test))
- **Notes**: Get the network token activation data for a payment instrument.
- **Signature**: `GetPaymentInstrumentsIdNetworkTokenActivationData(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NetworkTokenActivationDataResponse`
- **Error**: `SdkException<GetPaymentInstrumentsIdNetworkTokenActivationDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInstrumentsIdNetworkTokens
- **HTTP**: `GET /paymentInstruments/{id}/networkTokens` (Default (balanceplatform-api-test))
- **Notes**: List the network tokens connected to a payment instrument.
- **Signature**: `GetPaymentInstrumentsIdNetworkTokens(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListNetworkTokensResponse`
- **Error**: `SdkException<GetPaymentInstrumentsIdNetworkTokensError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInstrumentsIdReveal
- **HTTP**: `GET /paymentInstruments/{id}/reveal` (Default (balanceplatform-api-test))
- **Notes**: Returns the primary account number (PAN) of a payment instrument. To make this request, your API credential must have the following role : Balance Platform BCL PCI role
- **Signature**: `GetPaymentInstrumentsIdReveal(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInstrumentRevealInfo`
- **Error**: `SdkException<GetPaymentInstrumentsIdRevealError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInstrumentsIdTransactionRules
- **HTTP**: `GET /paymentInstruments/{id}/transactionRules` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of transaction rules associated with a payment instrument.
- **Signature**: `GetPaymentInstrumentsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetPaymentInstrumentsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchPaymentInstrumentsId
- **HTTP**: `PATCH /paymentInstruments/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with inactive status, you can still update the balance account associated with the card.
- **Signature**: `PatchPaymentInstrumentsId(string id, PaymentInstrumentUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdatePaymentInstrument`
- **Error**: `SdkException<PatchPaymentInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentInstruments
- **HTTP**: `POST /paymentInstruments` (Default (balanceplatform-api-test))
- **Notes**: Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user. For more information, refer to Issue cards or Issue business accounts .
- **Signature**: `PostPaymentInstruments(PaymentInstrumentInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInstrument`
- **Error**: `SdkException<PostPaymentInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentInstrumentsIdNetworkTokenActivationData
- **HTTP**: `POST /paymentInstruments/{id}/networkTokenActivationData` (Default (balanceplatform-api-test))
- **Notes**: Create provisioning data for a network token. Use the provisioning data to add a user's payment instrument to their digital wallet.
- **Signature**: `PostPaymentInstrumentsIdNetworkTokenActivationData(string id, NetworkTokenActivationDataRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NetworkTokenActivationDataResponse`
- **Error**: `SdkException<PostPaymentInstrumentsIdNetworkTokenActivationDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentInstrumentsReveal
- **HTTP**: `POST /paymentInstruments/reveal` (Default (balanceplatform-api-test))
- **Notes**: Returns the encrypted data of a specified payment instrument. These data include: The primary account number (PAN) The card verification code (CVC) The expiry date You can decrypt the data to reveal it in your user interface. To make this request, your API credential must have the following role: * Bank Issuing PAN Reveal Webservice role
- **Signature**: `PostPaymentInstrumentsReveal(PaymentInstrumentRevealRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInstrumentRevealResponse`
- **Error**: `SdkException<PostPaymentInstrumentsRevealError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
