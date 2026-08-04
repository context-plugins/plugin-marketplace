# Billing — operations

Accessor: `client.Billing` · Source: `Api/Billing.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCreditUsage
- **HTTP**: `GET /team/credit-usage` (Default (api))
- **Signature**: `GetCreditUsage(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamCreditUsageResponse`
- **Error**: `SdkException<GetCreditUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamCreditUsage404Error1(out TeamCreditUsage404Error1)` [404] · `TryGetTeamCreditUsage500Error1(out TeamCreditUsage500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTokenUsage
- **HTTP**: `GET /team/token-usage` (Default (api))
- **Signature**: `GetTokenUsage(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TeamTokenUsageResponse`
- **Error**: `SdkException<GetTokenUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamTokenUsage404Error1(out TeamTokenUsage404Error1)` [404] · `TryGetTeamTokenUsage500Error1(out TeamTokenUsage500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
