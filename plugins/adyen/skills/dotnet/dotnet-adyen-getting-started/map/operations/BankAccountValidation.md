# BankAccountValidation — operations

Accessor: `client.BankAccountValidation` · Source: `Api/BankAccountValidation.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostValidateBankAccountIdentification
- **HTTP**: `POST /validateBankAccountIdentification` (Default13 (balanceplatform-api-test))
- **Notes**: Validates bank account identification details. You can use this endpoint to validate bank account details before you make a transfer or create a transfer instrument .
- **Signature**: `PostValidateBankAccountIdentification(BankAccountIdentificationValidationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostValidateBankAccountIdentificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
