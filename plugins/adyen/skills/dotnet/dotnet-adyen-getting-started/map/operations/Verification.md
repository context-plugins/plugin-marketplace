# Verification — operations

Accessor: `client.Verification` · Source: `Api/Verification.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostCheckAccountHolder
- **HTTP**: `POST /checkAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.
- **Signature**: `PostCheckAccountHolder(PerformVerificationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostCheckAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeleteBankAccounts
- **HTTP**: `POST /deleteBankAccounts` (Default (balanceplatform-api-test))
- **Notes**: Deletes bank accounts associated with an account holder.
- **Signature**: `PostDeleteBankAccounts(DeleteBankAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteBankAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeleteLegalArrangements
- **HTTP**: `POST /deleteLegalArrangements` (Default (balanceplatform-api-test))
- **Notes**: Deletes legal arrangements and/or legal arrangement entities associated with an account holder.
- **Signature**: `PostDeleteLegalArrangements(DeleteLegalArrangementRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteLegalArrangementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeletePayoutMethods
- **HTTP**: `POST /deletePayoutMethods` (Default (balanceplatform-api-test))
- **Notes**: Deletes payout methods associated with an account holder.
- **Signature**: `PostDeletePayoutMethods(DeletePayoutMethodRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeletePayoutMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeleteShareholders
- **HTTP**: `POST /deleteShareholders` (Default (balanceplatform-api-test))
- **Notes**: Deletes shareholders associated with an account holder.
- **Signature**: `PostDeleteShareholders(DeleteShareholderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteShareholdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDeleteSignatories
- **HTTP**: `POST /deleteSignatories` (Default (balanceplatform-api-test))
- **Notes**: Deletes signatories associated with an account holder.
- **Signature**: `PostDeleteSignatories(DeleteSignatoriesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteSignatoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetUploadedDocuments
- **HTTP**: `POST /getUploadedDocuments` (Default (balanceplatform-api-test))
- **Notes**: Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the verification process .
- **Signature**: `PostGetUploadedDocuments(GetUploadedDocumentsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetUploadedDocumentsResponse`
- **Error**: `SdkException<PostGetUploadedDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUploadDocument
- **HTTP**: `POST /uploadDocument` (Default (balanceplatform-api-test))
- **Notes**: Uploads a document for an account holder. Adyen uses the documents during the verification process .
- **Signature**: `PostUploadDocument(UploadDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateAccountHolderResponse`
- **Error**: `SdkException<PostUploadDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
