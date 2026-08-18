<!-- Generated file — do not edit; regenerated with the SDK. -->

# Verification — operations

Accessor: `client.Verification` · Source: `Api/Verification.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCheckAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostCheckAccountHolder(PerformVerificationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostCheckAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PerformVerificationRequest` | `Models/PerformVerificationRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostCheckAccountHolderError` | `Errors/PostCheckAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeleteBankAccounts
- **Server group**: `Default10`
- **Signature**: `PostDeleteBankAccounts(DeleteBankAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteBankAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBankAccountRequest` | `Models/DeleteBankAccountRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostDeleteBankAccountsError` | `Errors/PostDeleteBankAccountsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeleteLegalArrangements
- **Server group**: `Default10`
- **Signature**: `PostDeleteLegalArrangements(DeleteLegalArrangementRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteLegalArrangementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLegalArrangementRequest` | `Models/DeleteLegalArrangementRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostDeleteLegalArrangementsError` | `Errors/PostDeleteLegalArrangementsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeletePayoutMethods
- **Server group**: `Default10`
- **Signature**: `PostDeletePayoutMethods(DeletePayoutMethodRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeletePayoutMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePayoutMethodRequest` | `Models/DeletePayoutMethodRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostDeletePayoutMethodsError` | `Errors/PostDeletePayoutMethodsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeleteShareholders
- **Server group**: `Default10`
- **Signature**: `PostDeleteShareholders(DeleteShareholderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteShareholdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteShareholderRequest` | `Models/DeleteShareholderRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostDeleteShareholdersError` | `Errors/PostDeleteShareholdersError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostDeleteSignatories
- **Server group**: `Default10`
- **Signature**: `PostDeleteSignatories(DeleteSignatoriesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostDeleteSignatoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSignatoriesRequest` | `Models/DeleteSignatoriesRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostDeleteSignatoriesError` | `Errors/PostDeleteSignatoriesError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetUploadedDocuments
- **Server group**: `Default10`
- **Signature**: `PostGetUploadedDocuments(GetUploadedDocumentsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetUploadedDocumentsResponse`
- **Error**: `SdkException<PostGetUploadedDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUploadedDocumentsRequest` | `Models/GetUploadedDocumentsRequest.cs` |
| `GetUploadedDocumentsResponse` | `Models/GetUploadedDocumentsResponse.cs` |
| `PostGetUploadedDocumentsError` | `Errors/PostGetUploadedDocumentsError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostUploadDocument
- **Server group**: `Default10`
- **Signature**: `PostUploadDocument(UploadDocumentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `UpdateAccountHolderResponse`
- **Error**: `SdkException<PostUploadDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UploadDocumentRequest` | `Models/UploadDocumentRequest.cs` |
| `UpdateAccountHolderResponse` | `Models/UpdateAccountHolderResponse.cs` |
| `PostUploadDocumentError` | `Errors/PostUploadDocumentError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

