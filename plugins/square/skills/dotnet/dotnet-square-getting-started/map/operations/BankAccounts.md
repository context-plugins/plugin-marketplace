# BankAccounts — operations

Accessor: `client.BankAccounts` · Source: `Api/BankAccounts.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBankAccount
- **HTTP**: `POST /v2/bank-accounts` (Default (connect))
- **Notes**: Store a bank account on file for a square account
- **Signature**: `CreateBankAccount(CreateBankAccountRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateBankAccountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DisableBankAccount
- **HTTP**: `POST /v2/bank-accounts/{bank_account_id}/disable` (Default (connect))
- **Notes**: Disable a bank account.
- **Signature**: `DisableBankAccount(string bankAccountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DisableBankAccountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankAccount
- **HTTP**: `GET /v2/bank-accounts/{bank_account_id}` (Default (connect))
- **Notes**: Retrieve details of a BankAccount bank account linked to a Square account.
- **Signature**: `GetBankAccount(string bankAccountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetBankAccountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBankAccountByV1Id
- **HTTP**: `GET /v2/bank-accounts/by-v1-id/{v1_bank_account_id}` (Default (connect))
- **Notes**: Returns details of a BankAccount identified by V1 bank account ID.
- **Signature**: `GetBankAccountByV1Id(string v1BankAccountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetBankAccountByV1IdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBankAccounts
- **HTTP**: `GET /v2/bank-accounts` (Default (connect))
- **Notes**: Returns a list of BankAccount objects linked to a Square account.
- **Signature**: `ListBankAccounts(string? cursor, int? limit, string? locationId, string? customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cursor` … `customerId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `limit` ← `limit`, `location_id` ← `locationId`, `customer_id` ← `customerId`
- **Returns**: `ListBankAccountsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
