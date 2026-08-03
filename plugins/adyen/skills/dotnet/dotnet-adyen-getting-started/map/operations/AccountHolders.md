# AccountHolders — operations

Accessor: `client.AccountHolders` · Source: `Api/AccountHolders.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountHoldersId
- **HTTP**: `GET /accountHolders/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns an account holder.
- **Signature**: `GetAccountHoldersId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountHolder2`
- **Error**: `SdkException<GetAccountHoldersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountHoldersIdBalanceAccounts
- **HTTP**: `GET /accountHolders/{id}/balanceAccounts` (Default (balanceplatform-api-test))
- **Notes**: Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&amp;offset=10`.
- **Signature**: `GetAccountHoldersIdBalanceAccounts(string id, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedBalanceAccountsResponse`
- **Error**: `SdkException<GetAccountHoldersIdBalanceAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountHoldersIdTaxFormSummary
- **HTTP**: `GET /accountHolders/{id}/taxFormSummary` (Default (balanceplatform-api-test))
- **Notes**: Returns a summary of all tax forms for an account holder.
- **Signature**: `GetAccountHoldersIdTaxFormSummary(string id, string formType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `formType` ← `formType`
- **Returns**: `TaxFormSummaryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountHoldersIdTaxForms
- **HTTP**: `GET /accountHolders/{id}/taxForms` (Default (balanceplatform-api-test))
- **Notes**: Generates a tax form for account holders operating in the US. For more information, refer to US tax forms for marketplaces or platforms .
- **Signature**: `GetAccountHoldersIdTaxForms(string id, FormType1 formType, int year, string? legalEntityId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `legalEntityId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `formType` ← `formType`, `year` ← `year`, `legalEntityId` ← `legalEntityId`
- **Returns**: `GetTaxFormResponse1`
- **Error**: `SdkException<GetAccountHoldersIdTaxFormsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountHoldersIdTransactionRules
- **HTTP**: `GET /accountHolders/{id}/transactionRules` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of transaction rules associated with an account holder.
- **Signature**: `GetAccountHoldersIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetAccountHoldersIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchAccountHoldersId
- **HTTP**: `PATCH /accountHolders/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.
- **Signature**: `PatchAccountHoldersId(string id, AccountHolderUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountHolder2`
- **Error**: `SdkException<PatchAccountHoldersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAccountHolders
- **HTTP**: `POST /accountHolders` (Default (balanceplatform-api-test))
- **Notes**: Creates an account holder linked to a legal entity .
- **Signature**: `PostAccountHolders(AccountHolderInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountHolder2`
- **Error**: `SdkException<PostAccountHoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCloseAccountHolder
- **HTTP**: `POST /closeAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Changes the status of an account holder to Closed . This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a Closed `status` , the payments are sent to your liable account.
- **Signature**: `PostCloseAccountHolder(CloseAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CloseAccountHolderResponse`
- **Error**: `SdkException<PostCloseAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCloseStores
- **HTTP**: `POST /closeStores` (Default (balanceplatform-api-test))
- **Notes**: Closes stores associated with an account holder.
- **Signature**: `PostCloseStores(CloseStoresRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GenericResponse`
- **Error**: `SdkException<PostCloseStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCreateAccountHolder
- **HTTP**: `POST /createAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Creates an account holder that represents the sub-merchant's entity in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to Account holder and accounts .
- **Signature**: `PostCreateAccountHolder(CreateAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateAccountHolderResponse`
- **Error**: `SdkException<PostCreateAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetAccountHolder
- **HTTP**: `POST /getAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of an account holder.
- **Signature**: `PostGetAccountHolder(GetAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetAccountHolderResponse`
- **Error**: `SdkException<PostGetAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGetTaxForm
- **HTTP**: `POST /getTaxForm` (Default (balanceplatform-api-test))
- **Notes**: Generates a tax form for account holders operating in the US. For more information, refer to Providing tax forms .
- **Signature**: `PostGetTaxForm(GetTaxFormRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetTaxFormResponse`
- **Error**: `SdkException<PostGetTaxFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostSuspendAccountHolder
- **HTTP**: `POST /suspendAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Changes the status of an account holder to Suspended .
- **Signature**: `PostSuspendAccountHolder(SuspendAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SuspendAccountHolderResponse`
- **Error**: `SdkException<PostSuspendAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUnSuspendAccountHolder
- **HTTP**: `POST /unSuspendAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Changes the status of an account holder from Suspended to Inactive . Account holders can have a Suspended `status` if you suspend them through the `/suspendAccountHolder` endpoint or if a verification deadline expires. You can only unsuspend account holders if they do not have verification checks with a FAILED `status` .
- **Signature**: `PostUnSuspendAccountHolder(UnSuspendAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UnSuspendAccountHolderResponse`
- **Error**: `SdkException<PostUnSuspendAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUpdateAccountHolder
- **HTTP**: `POST /updateAccountHolder` (Default (balanceplatform-api-test))
- **Notes**: Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders. When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object: `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs. When updating any field in the following objects, you must submit all the fields required for validation: `address` `fullPhoneNumber` `bankAccountDetails.BankAccountDetail` `businessDetails.shareholders.ShareholderContact` For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated. To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.
- **Signature**: `PostUpdateAccountHolder(UpdateAccountHolderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateAccountHolderResponse`
- **Error**: `SdkException<PostUpdateAccountHolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUpdateAccountHolderState
- **HTTP**: `POST /updateAccountHolderState` (Default (balanceplatform-api-test))
- **Notes**: Disables or enables the processing or payout state of an account holder.
- **Signature**: `PostUpdateAccountHolderState(UpdateAccountHolderStateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetAccountHolderStatusResponse`
- **Error**: `SdkException<PostUpdateAccountHolderStateError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
