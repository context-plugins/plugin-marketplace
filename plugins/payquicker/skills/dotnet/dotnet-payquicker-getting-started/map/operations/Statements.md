# Statements — operations

Accessor: `client.Statements` · Source: `Api/Statements.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetStatement
- **HTTP**: `GET /statements/{document-token}` (Api (api))
- **Notes**: Fetch a single statement by its token.
- **Signature**: `GetStatement(string documentToken = "docu-6e582242-5dd4-4883-b0c2-488e09a26595", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `documentToken` = "docu-6e582242-5dd4-4883-b0c2-488e09a26595", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `StatementResult`
- **Error**: `SdkException<GetStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadStatementSearch
- **HTTP**: `GET /statements/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous statement search.
- **Signature**: `ReadStatementSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `StatementSearchResult`
- **Error**: `SdkException<ReadStatementSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchStatements
- **HTTP**: `POST /statements/search` (Api (api))
- **Notes**: Search for statements across scopes. Include `scope` in body.
- **Signature**: `SearchStatements(StatementSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `StatementSearchResult`
- **Error**: `SdkException<SearchStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
