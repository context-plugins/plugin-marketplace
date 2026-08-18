<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountHolders — operations

Accessor: `client.AccountHolders` · Source: `Api/AccountHolders.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountHoldersId
- **Server group**: `Default13`
- **Signature**: `GetAccountHoldersId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AccountHolder`
- **Error**: `SdkException<GetAccountHoldersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccountHolder` | `Models/AccountHolder.cs` |
| `GetAccountHoldersIdError` | `Errors/GetAccountHoldersIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetAccountHoldersIdBalanceAccounts
- **Server group**: `Default13`
- **Signature**: `GetAccountHoldersIdBalanceAccounts(string id, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedBalanceAccountsResponse`
- **Error**: `SdkException<GetAccountHoldersIdBalanceAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaginatedBalanceAccountsResponse` | `Models/PaginatedBalanceAccountsResponse.cs` |
| `GetAccountHoldersIdBalanceAccountsError` | `Errors/GetAccountHoldersIdBalanceAccountsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetAccountHoldersIdTaxFormSummary
- **Server group**: `Default13`
- **Signature**: `GetAccountHoldersIdTaxFormSummary(string id, string formType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `formType` ← `formType`
- **Returns**: `TaxFormSummaryResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaxFormSummaryResponse` | `Models/TaxFormSummaryResponse.cs` |

### GetAccountHoldersIdTaxForms
- **Server group**: `Default13`
- **Signature**: `GetAccountHoldersIdTaxForms(string id, FormType formType, int year, string? legalEntityId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `legalEntityId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `formType` ← `formType`, `year` ← `year`, `legalEntityId` ← `legalEntityId`
- **Returns**: `GetTaxFormResponse1`
- **Error**: `SdkException<GetAccountHoldersIdTaxFormsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `FormType` | `Models/Enums/FormType.cs` |
| `GetTaxFormResponse1` | `Models/GetTaxFormResponse1.cs` |
| `GetAccountHoldersIdTaxFormsError` | `Errors/GetAccountHoldersIdTaxFormsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetAccountHoldersIdTransactionRules
- **Server group**: `Default13`
- **Signature**: `GetAccountHoldersIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetAccountHoldersIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRulesResponse` | `Models/TransactionRulesResponse.cs` |
| `GetAccountHoldersIdTransactionRulesError` | `Errors/GetAccountHoldersIdTransactionRulesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchAccountHoldersId
- **Server group**: `Default13`
- **Signature**: `PatchAccountHoldersId(string id, AccountHolderUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AccountHolder`
- **Error**: `SdkException<PatchAccountHoldersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccountHolderUpdateRequest` | `Models/AccountHolderUpdateRequest.cs` |
| `AccountHolder` | `Models/AccountHolder.cs` |
| `PatchAccountHoldersIdError` | `Errors/PatchAccountHoldersIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostAccountHolders
- **Server group**: `Default13`
- **Signature**: `PostAccountHolders(AccountHolderInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AccountHolder`
- **Error**: `SdkException<PostAccountHoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccountHolderInfo` | `Models/AccountHolderInfo.cs` |
| `AccountHolder` | `Models/AccountHolder.cs` |
| `PostAccountHoldersError` | `Errors/PostAccountHoldersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCloseAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostCloseAccountHolder(CloseAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CloseAccountHolderResponse`
- **Error**: `SdkException<PostCloseAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CloseAccountHolderRequest` | `Models/CloseAccountHolderRequest.cs` |
| `CloseAccountHolderResponse` | `Models/CloseAccountHolderResponse.cs` |
| `PostCloseAccountHolderError` | `Errors/PostCloseAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostCloseStores
- **Server group**: `Default10`
- **Signature**: `PostCloseStores(CloseStoresRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostCloseStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CloseStoresRequest` | `Models/CloseStoresRequest.cs` |
| `GenericResponse` | `Models/GenericResponse.cs` |
| `PostCloseStoresError` | `Errors/PostCloseStoresError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostCreateAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostCreateAccountHolder(CreateAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateAccountHolderResponse`
- **Error**: `SdkException<PostCreateAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAccountHolderRequest` | `Models/CreateAccountHolderRequest.cs` |
| `CreateAccountHolderResponse` | `Models/CreateAccountHolderResponse.cs` |
| `PostCreateAccountHolderError` | `Errors/PostCreateAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostGetAccountHolder(GetAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetAccountHolderResponse`
- **Error**: `SdkException<PostGetAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountHolderRequest` | `Models/GetAccountHolderRequest.cs` |
| `GetAccountHolderResponse` | `Models/GetAccountHolderResponse.cs` |
| `PostGetAccountHolderError` | `Errors/PostGetAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostGetTaxForm
- **Server group**: `Default10`
- **Signature**: `PostGetTaxForm(GetTaxFormRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetTaxFormResponse`
- **Error**: `SdkException<PostGetTaxFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaxFormRequest` | `Models/GetTaxFormRequest.cs` |
| `GetTaxFormResponse` | `Models/GetTaxFormResponse.cs` |
| `PostGetTaxFormError` | `Errors/PostGetTaxFormError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostSuspendAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostSuspendAccountHolder(SuspendAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SuspendAccountHolderResponse`
- **Error**: `SdkException<PostSuspendAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SuspendAccountHolderRequest` | `Models/SuspendAccountHolderRequest.cs` |
| `SuspendAccountHolderResponse` | `Models/SuspendAccountHolderResponse.cs` |
| `PostSuspendAccountHolderError` | `Errors/PostSuspendAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostUnSuspendAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostUnSuspendAccountHolder(UnSuspendAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `UnSuspendAccountHolderResponse`
- **Error**: `SdkException<PostUnSuspendAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UnSuspendAccountHolderRequest` | `Models/UnSuspendAccountHolderRequest.cs` |
| `UnSuspendAccountHolderResponse` | `Models/UnSuspendAccountHolderResponse.cs` |
| `PostUnSuspendAccountHolderError` | `Errors/PostUnSuspendAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostUpdateAccountHolder
- **Server group**: `Default10`
- **Signature**: `PostUpdateAccountHolder(UpdateAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `UpdateAccountHolderResponse`
- **Error**: `SdkException<PostUpdateAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAccountHolderRequest` | `Models/UpdateAccountHolderRequest.cs` |
| `UpdateAccountHolderResponse` | `Models/UpdateAccountHolderResponse.cs` |
| `PostUpdateAccountHolderError` | `Errors/PostUpdateAccountHolderError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

### PostUpdateAccountHolderState
- **Server group**: `Default10`
- **Signature**: `PostUpdateAccountHolderState(UpdateAccountHolderStateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `GetAccountHolderStatusResponse`
- **Error**: `SdkException<PostUpdateAccountHolderStateError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAccountHolderStateRequest` | `Models/UpdateAccountHolderStateRequest.cs` |
| `GetAccountHolderStatusResponse` | `Models/GetAccountHolderStatusResponse.cs` |
| `PostUpdateAccountHolderStateError` | `Errors/PostUpdateAccountHolderStateError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |

