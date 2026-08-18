<!-- Generated file — do not edit; regenerated with the SDK. -->

# BankAccountValidation — operations

Accessor: `client.BankAccountValidation` · Source: `Api/BankAccountValidation.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostValidateBankAccountIdentification
- **Server group**: `Default13`
- **Signature**: `PostValidateBankAccountIdentification(BankAccountIdentificationValidationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostValidateBankAccountIdentificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BankAccountIdentificationValidationRequest` | `Models/BankAccountIdentificationValidationRequest.cs` |
| `PostValidateBankAccountIdentificationError` | `Errors/PostValidateBankAccountIdentificationError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

