# Authorizations — operations

Accessor: `client.Authorizations` · Source: `Api/Authorizations.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReadAuthorizationSearch
- **HTTP**: `GET /authorizations/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous authorization search.
- **Signature**: `ReadAuthorizationSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `AuthorizationSearchResult`
- **Error**: `SdkException<ReadAuthorizationSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchAuthorizations
- **HTTP**: `POST /authorizations/search` (Api (api))
- **Notes**: Search for authorizations — pending card transactions that have been authorized by a merchant but have not yet settled. Include a `scope` property in the request body. The response carries the requested page and a `searchId`; use `GET /authorizations/search/{searchId}` to paginate the cached result set. See Searching .
- **Signature**: `SearchAuthorizations(AuthorizationSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `AuthorizationSearchResult`
- **Error**: `SdkException<SearchAuthorizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
