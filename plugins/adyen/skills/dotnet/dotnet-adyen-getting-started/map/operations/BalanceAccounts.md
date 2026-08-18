<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceAccounts — operations

Accessor: `client.BalanceAccounts` · Source: `Api/BalanceAccounts.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBalanceAccountsId
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalanceAccount`
- **Error**: `SdkException<GetBalanceAccountsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccount` | `Models/BalanceAccount.cs` |
| `GetBalanceAccountsIdError` | `Errors/GetBalanceAccountsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetBalanceAccountsIdPaymentInstruments
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsIdPaymentInstruments(string id, int? offset, int? limit, string? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`, `status` ← `status`
- **Returns**: `PaginatedPaymentInstrumentsResponse`
- **Error**: `SdkException<GetBalanceAccountsIdPaymentInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaginatedPaymentInstrumentsResponse` | `Models/PaginatedPaymentInstrumentsResponse.cs` |
| `GetBalanceAccountsIdPaymentInstrumentsError` | `Errors/GetBalanceAccountsIdPaymentInstrumentsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetBalanceAccountsIdTransactionRules
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetBalanceAccountsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRulesResponse` | `Models/TransactionRulesResponse.cs` |
| `GetBalanceAccountsIdTransactionRulesError` | `Errors/GetBalanceAccountsIdTransactionRulesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchBalanceAccountsId
- **Server group**: `Default13`
- **Signature**: `PatchBalanceAccountsId(string id, BalanceAccountUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BalanceAccount`
- **Error**: `SdkException<PatchBalanceAccountsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccountUpdateRequest` | `Models/BalanceAccountUpdateRequest.cs` |
| `BalanceAccount` | `Models/BalanceAccount.cs` |
| `PatchBalanceAccountsIdError` | `Errors/PatchBalanceAccountsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostBalanceAccounts
- **Server group**: `Default13`
- **Signature**: `PostBalanceAccounts(BalanceAccountInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BalanceAccount`
- **Error**: `SdkException<PostBalanceAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccountInfo` | `Models/BalanceAccountInfo.cs` |
| `BalanceAccount` | `Models/BalanceAccount.cs` |
| `PostBalanceAccountsError` | `Errors/PostBalanceAccountsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

