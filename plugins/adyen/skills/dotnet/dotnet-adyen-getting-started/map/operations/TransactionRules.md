<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionRules — operations

Accessor: `client.TransactionRules` · Source: `Api/TransactionRules.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteTransactionRulesTransactionRuleId
- **Server group**: `Default13`
- **Signature**: `DeleteTransactionRulesTransactionRuleId(string transactionRuleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRule`
- **Error**: `SdkException<DeleteTransactionRulesTransactionRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRule` | `Models/TransactionRule.cs` |
| `DeleteTransactionRulesTransactionRuleIdError` | `Errors/DeleteTransactionRulesTransactionRuleIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetTransactionRulesTransactionRuleId
- **Server group**: `Default13`
- **Signature**: `GetTransactionRulesTransactionRuleId(string transactionRuleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRuleResponse`
- **Error**: `SdkException<GetTransactionRulesTransactionRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRuleResponse` | `Models/TransactionRuleResponse.cs` |
| `GetTransactionRulesTransactionRuleIdError` | `Errors/GetTransactionRulesTransactionRuleIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchTransactionRulesTransactionRuleId
- **Server group**: `Default13`
- **Signature**: `PatchTransactionRulesTransactionRuleId(string transactionRuleId, TransactionRuleInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransactionRule`
- **Error**: `SdkException<PatchTransactionRulesTransactionRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRuleInfo` | `Models/TransactionRuleInfo.cs` |
| `TransactionRule` | `Models/TransactionRule.cs` |
| `PatchTransactionRulesTransactionRuleIdError` | `Errors/PatchTransactionRulesTransactionRuleIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostTransactionRules
- **Server group**: `Default13`
- **Signature**: `PostTransactionRules(TransactionRuleInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransactionRule`
- **Error**: `SdkException<PostTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRuleInfo` | `Models/TransactionRuleInfo.cs` |
| `TransactionRule` | `Models/TransactionRule.cs` |
| `PostTransactionRulesError` | `Errors/PostTransactionRulesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

