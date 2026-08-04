# Balances — operations

Accessor: `client.Balances` · Source: `Api/Balances.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReadBalanceSearch
- **HTTP**: `GET /balances/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous balance search.
- **Signature**: `ReadBalanceSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `BalanceSearchResult`
- **Error**: `SdkException<ReadBalanceSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchBalances
- **HTTP**: `POST /balances/search` (Api (api))
- **Notes**: Search for balances — user wallet, prepaid card, and company-account balances — using a structured filter body. Include a `scope` property to address the target user. The response carries the requested page and a `searchId`; use `GET /balances/search/{searchId}` to paginate the cached result set. See Searching . Common Hosted Portal use cases: displaying available balance in a payee's portal/UX; pre-checking available balance before a spendback purchase. See Program Types .
- **Signature**: `SearchBalances(BalanceSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `BalanceSearchResult`
- **Error**: `SdkException<SearchBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
