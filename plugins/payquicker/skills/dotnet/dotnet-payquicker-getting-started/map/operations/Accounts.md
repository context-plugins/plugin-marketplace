# Accounts — operations

Accessor: `client.Accounts` · Source: `Api/Accounts.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountsAcctToken
- **HTTP**: `GET /accounts/{account-token}` (Api (api))
- **Notes**: Fetch a single account by its `acct-` token . Returns the account configuration and capabilities.
- **Signature**: `GetAccountsAcctToken(string accountToken = "acct-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `accountToken` = "acct-6a272eca-9487-d83a-c9e4-8df8c9a7f6eb", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `AccountResult`
- **Error**: `SdkException<GetAccountsAcctTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
