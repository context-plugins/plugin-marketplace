# PaymentInstrumentGroups — operations

Accessor: `client.PaymentInstrumentGroups` · Source: `Api/PaymentInstrumentGroups.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPaymentInstrumentGroupsId
- **HTTP**: `GET /paymentInstrumentGroups/{id}` (Default13 (balanceplatform-api-test))
- **Notes**: Returns the details of a payment instrument group.
- **Signature**: `GetPaymentInstrumentGroupsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInstrumentGroup`
- **Error**: `SdkException<GetPaymentInstrumentGroupsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInstrumentGroupsIdTransactionRules
- **HTTP**: `GET /paymentInstrumentGroups/{id}/transactionRules` (Default13 (balanceplatform-api-test))
- **Notes**: Returns a list of all the transaction rules associated with a payment instrument group.
- **Signature**: `GetPaymentInstrumentGroupsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetPaymentInstrumentGroupsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentInstrumentGroups
- **HTTP**: `POST /paymentInstrumentGroups` (Default13 (balanceplatform-api-test))
- **Notes**: Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.
- **Signature**: `PostPaymentInstrumentGroups(PaymentInstrumentGroupInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInstrumentGroup`
- **Error**: `SdkException<PostPaymentInstrumentGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
