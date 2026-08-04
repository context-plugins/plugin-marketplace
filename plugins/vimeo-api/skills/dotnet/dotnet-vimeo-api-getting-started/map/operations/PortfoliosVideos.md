# PortfoliosVideos — operations

Accessor: `client.PortfoliosVideos` · Source: `Api/PortfoliosVideos.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToPortfolio
- **HTTP**: `PUT /users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a video to the specified portfolio belonging to the authenticated user.
- **Signature**: `AddVideoToPortfolio(double portfolioId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoToPortfolioAlt1
- **HTTP**: `PUT /me/portfolios/{portfolio_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a video to the specified portfolio belonging to the authenticated user.
- **Signature**: `AddVideoToPortfolioAlt1(double portfolioId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToPortfolioAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromPortfolio
- **HTTP**: `DELETE /users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a video from the specified portfolio belonging to the authenticated user.
- **Signature**: `DeleteVideoFromPortfolio(double portfolioId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoFromPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromPortfolioAlt1
- **HTTP**: `DELETE /me/portfolios/{portfolio_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a video from the specified portfolio belonging to the authenticated user.
- **Signature**: `DeleteVideoFromPortfolioAlt1(double portfolioId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoFromPortfolioAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPortfolioVideo
- **HTTP**: `GET /users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video from the specified portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolioVideo(double portfolioId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPortfolioVideoAlt1
- **HTTP**: `GET /me/portfolios/{portfolio_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video from the specified portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolioVideoAlt1(double portfolioId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPortfolioVideos
- **HTTP**: `GET /users/{user_id}/portfolios/{portfolio_id}/videos` (Default (api))
- **Notes**: This method returns every video from the specified portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolioVideos(double portfolioId, double userId, string? containingUri, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, Sort35? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetPortfolioVideosAlt1
- **HTTP**: `GET /me/portfolios/{portfolio_id}/videos` (Default (api))
- **Notes**: This method returns every video from the specified portfolio belonging to the authenticated user.
- **Signature**: `GetPortfolioVideosAlt1(double portfolioId, string? containingUri, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, Sort35? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
