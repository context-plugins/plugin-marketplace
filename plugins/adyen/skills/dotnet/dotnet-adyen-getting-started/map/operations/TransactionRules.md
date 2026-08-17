# TransactionRules — operations

Accessor: `client.TransactionRules` · Source: `Api/TransactionRules.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteTransactionRulesTransactionRuleId
- **HTTP**: `DELETE /transactionRules/{transactionRuleId}` (Default13 (balanceplatform-api-test))
- **Notes**: Deletes a transaction rule.
- **Signature**: `DeleteTransactionRulesTransactionRuleId(string transactionRuleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRule`
- **Error**: `SdkException<DeleteTransactionRulesTransactionRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTransactionRulesTransactionRuleId
- **HTTP**: `GET /transactionRules/{transactionRuleId}` (Default13 (balanceplatform-api-test))
- **Notes**: Returns the details of a transaction rule.
- **Signature**: `GetTransactionRulesTransactionRuleId(string transactionRuleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRuleResponse`
- **Error**: `SdkException<GetTransactionRulesTransactionRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchTransactionRulesTransactionRuleId
- **HTTP**: `PATCH /transactionRules/{transactionRuleId}` (Default13 (balanceplatform-api-test))
- **Notes**: Updates a transaction rule. To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged. When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.
- **Signature**: `PatchTransactionRulesTransactionRuleId(string transactionRuleId, TransactionRuleInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRule`
- **Error**: `SdkException<PatchTransactionRulesTransactionRuleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransactionRules
- **HTTP**: `POST /transactionRules` (Default13 (balanceplatform-api-test))
- **Notes**: Creates a transaction rule . When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see examples .
- **Signature**: `PostTransactionRules(TransactionRuleInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRule`
- **Error**: `SdkException<PostTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
