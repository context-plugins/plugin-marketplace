# Platform — operations

Accessor: `client.Platform` · Source: `Api/Platform.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBalancePlatformsId
- **HTTP**: `GET /balancePlatforms/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns a balance platform.
- **Signature**: `GetBalancePlatformsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalancePlatform`
- **Error**: `SdkException<GetBalancePlatformsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsIdAccountHolders
- **HTTP**: `GET /balancePlatforms/{id}/accountHolders` (Default (balanceplatform-api-test))
- **Notes**: Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&amp;offset=20`.
- **Signature**: `GetBalancePlatformsIdAccountHolders(string id, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedAccountHoldersResponse`
- **Error**: `SdkException<GetBalancePlatformsIdAccountHoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsIdTransactionRules
- **HTTP**: `GET /balancePlatforms/{id}/transactionRules` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of transaction rules associated with a balance platform.
- **Signature**: `GetBalancePlatformsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetBalancePlatformsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
