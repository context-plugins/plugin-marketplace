# PortfoliosEssentials — operations

Accessor: `client.PortfoliosEssentials` · Source: `Api/PortfoliosEssentials.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPortfolio
- **HTTP**: `GET /users/{user_id}/portfolios/{portfolio_id}` (Default (api))
- **Notes**: This method returns a single portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolio(double portfolioId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPortfolioAlt1
- **HTTP**: `GET /me/portfolios/{portfolio_id}` (Default (api))
- **Notes**: This method returns a single portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolioAlt1(double portfolioId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPortfolios
- **HTTP**: `GET /users/{user_id}/portfolios` (Default (api))
- **Notes**: This method returns every portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolios(double userId, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetPortfoliosAlt1
- **HTTP**: `GET /me/portfolios` (Default (api))
- **Notes**: This method returns every portfolio belonging to the authenticated user.
- **Signature**: `GetPortfoliosAlt1(Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
