# DirectDebitMandates — operations

Accessor: `client.DirectDebitMandates` · Source: `Api/DirectDebitMandates.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMandates
- **HTTP**: `GET /mandates` (Default13 (balanceplatform-api-test))
- **Notes**: Returns a list of all direct debit mandates created for a business account.
- **Signature**: `GetMandates(string? balanceAccountId, string? paymentInstrumentId, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `balanceAccountId` — nullable, no default → **must pass explicitly**
  - `paymentInstrumentId` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `balanceAccountId` ← `balanceAccountId`, `paymentInstrumentId` ← `paymentInstrumentId`, `cursor` ← `cursor`
- **Returns**: `ListMandatesResponse`
- **Error**: `SdkException<GetMandatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMandatesMandateId
- **HTTP**: `GET /mandates/{mandateId}` (Default13 (balanceplatform-api-test))
- **Notes**: Returns the details of the specified direct debit mandate .
- **Signature**: `GetMandatesMandateId(string mandateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Mandate1`
- **Error**: `SdkException<GetMandatesMandateIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMandatesMandateId
- **HTTP**: `PATCH /mandates/{mandateId}` (Default13 (balanceplatform-api-test))
- **Notes**: Amend the specified direct debit mandate .
- **Signature**: `PatchMandatesMandateId(string mandateId, MandateUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchMandatesMandateIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMandatesMandateIdCancel
- **HTTP**: `POST /mandates/{mandateId}/cancel` (Default13 (balanceplatform-api-test))
- **Notes**: Cancel a specified direct debit mandate .
- **Signature**: `PostMandatesMandateIdCancel(string mandateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostMandatesMandateIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
