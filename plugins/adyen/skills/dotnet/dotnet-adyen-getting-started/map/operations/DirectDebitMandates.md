# DirectDebitMandates — operations

Accessor: `client.DirectDebitMandates` · Source: `Api/DirectDebitMandates.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMandates
- **HTTP**: `GET /mandates` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of all direct debit mandates created for a business account.
- **Signature**: `GetMandates(string? balanceAccountId, string? paymentInstrumentId, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `balanceAccountId` — nullable, no default → **must pass explicitly**
  - `paymentInstrumentId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `balanceAccountId` ← `balanceAccountId`, `paymentInstrumentId` ← `paymentInstrumentId`, `cursor` ← `cursor`
- **Returns**: `ListMandatesResponse`
- **Error**: `SdkException<GetMandatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetMandates401Error1(out Mandates401Error1)` [401] · `TryGetMandates403Error1(out Mandates403Error1)` [403] · `TryGetMandates422Error1(out Mandates422Error1)` [422] · `TryGetMandates500Error1(out Mandates500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMandatesMandateId
- **HTTP**: `GET /mandates/{mandateId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the specified direct debit mandate .
- **Signature**: `GetMandatesMandateId(string mandateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Mandate`
- **Error**: `SdkException<GetMandatesMandateIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetMandates401Error1(out Mandates401Error1)` [401] · `TryGetMandates403Error1(out Mandates403Error1)` [403] · `TryGetMandates404Error1(out Mandates404Error1)` [404] · `TryGetMandates422Error1(out Mandates422Error1)` [422] · `TryGetMandates500Error1(out Mandates500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMandatesMandateId
- **HTTP**: `PATCH /mandates/{mandateId}` (Default (balanceplatform-api-test))
- **Notes**: Amend the specified direct debit mandate .
- **Signature**: `PatchMandatesMandateId(string mandateId, MandateUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchMandatesMandateIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetMandates401Error1(out Mandates401Error1)` [401] · `TryGetMandates403Error1(out Mandates403Error1)` [403] · `TryGetMandates404Error1(out Mandates404Error1)` [404] · `TryGetMandates422Error1(out Mandates422Error1)` [422] · `TryGetMandates500Error1(out Mandates500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMandatesMandateIdCancel
- **HTTP**: `POST /mandates/{mandateId}/cancel` (Default (balanceplatform-api-test))
- **Notes**: Cancel a specified direct debit mandate .
- **Signature**: `PostMandatesMandateIdCancel(string mandateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostMandatesMandateIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetMandatesCancel401Error1(out MandatesCancel401Error1)` [401] · `TryGetMandatesCancel403Error1(out MandatesCancel403Error1)` [403] · `TryGetMandatesCancel404Error1(out MandatesCancel404Error1)` [404] · `TryGetMandatesCancel422Error1(out MandatesCancel422Error1)` [422] · `TryGetMandatesCancel500Error1(out MandatesCancel500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
