# SalesCommissions — operations

Accessor: `client.SalesCommissions` · Source: `Api/SalesCommissions.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSalesCommissionSettings
- **HTTP**: `GET /sellers/{seller_id}/sales_commission_settings.json` (Production)
- **Notes**: Lists subscriptions with associated sales reps. Modified Authentication Process The Sales Commission API differs from other Chargify API endpoints. This resource is associated with the seller itself. Up to now all available resources were at the level of the site, therefore creating the API Key per site was a sufficient solution. To share resources at the seller level, a new authentication method was introduced, which is user authentication. Creating an API Key for a user is a required step to correctly use the Sales Commission API, more details here . Access to the Sales Commission API endpoints is available to users with financial access, where the seller has the Advanced Analytics component enabled. For further information on getting access to Advanced Analytics contact Maxio support. &gt; Note: The request is at seller level, it means `&lt;&lt;subdomain&gt;&gt;` variable will be replaced by `app`.
- **Signature**: `ListSalesCommissionSettings(string sellerId, bool? liveMode, int? page = 1, int? perPage = 100, string? authorization = "Bearer <<apiKey>>", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `liveMode` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `authorization` = "Bearer <<apiKey>>", `requestOptions` = null
- **Query params (wire ← C#)**: `live_mode` ← `liveMode`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<SaleRepSettings>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListSalesReps
- **HTTP**: `GET /sellers/{seller_id}/sales_reps.json` (Production)
- **Notes**: Lists sales reps with details. Modified Authentication Process The Sales Commission API differs from other Chargify API endpoints. This resource is associated with the seller itself. Up to now all available resources were at the level of the site, therefore creating the API Key per site was a sufficient solution. To share resources at the seller level, a new authentication method was introduced, which is user authentication. Creating an API Key for a user is a required step to correctly use the Sales Commission API, more details here . Access to the Sales Commission API endpoints is available to users with financial access, where the seller has the Advanced Analytics component enabled. For further information on getting access to Advanced Analytics contact Maxio support. &gt; Note: The request is at seller level, it means `&lt;&lt;subdomain&gt;&gt;` variable will be replaced by `app`.
- **Signature**: `ListSalesReps(string sellerId, bool? liveMode, int? page = 1, int? perPage = 100, string? authorization = "Bearer <<apiKey>>", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `liveMode` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `authorization` = "Bearer <<apiKey>>", `requestOptions` = null
- **Query params (wire ← C#)**: `live_mode` ← `liveMode`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<ListSaleRepItem>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadSalesRep
- **HTTP**: `GET /sellers/{seller_id}/sales_reps/{sales_rep_id}.json` (Production)
- **Notes**: Returns a sales rep and attached subscription details. Modified Authentication Process The Sales Commission API differs from other Chargify API endpoints. This resource is associated with the seller itself. Up to now all available resources were at the level of the site, therefore creating the API Key per site was a sufficient solution. To share resources at the seller level, a new authentication method was introduced, which is user authentication. Creating an API Key for a user is a required step to correctly use the Sales Commission API, more details here . Access to the Sales Commission API endpoints is available to users with financial access, where the seller has the Advanced Analytics component enabled. For further information on getting access to Advanced Analytics contact Maxio support. &gt; Note: The request is at seller level, it means `&lt;&lt;subdomain&gt;&gt;` variable will be replaced by `app`.
- **Signature**: `ReadSalesRep(string sellerId, string salesRepId, bool? liveMode, int? page = 1, int? perPage = 100, string? authorization = "Bearer <<apiKey>>", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `liveMode` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `authorization` = "Bearer <<apiKey>>", `requestOptions` = null
- **Query params (wire ← C#)**: `live_mode` ← `liveMode`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `SaleRep`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
