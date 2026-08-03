# Sites — operations

Accessor: `client.Sites` · Source: `Api/Sites.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClearSite
- **HTTP**: `POST /sites/clear_data.json` (Production)
- **Notes**: Clears all data from a test site asynchronously. This call is asynchronous and there may be a delay before the site data is fully deleted. If you are clearing site data for an automated test, you will need to build in a delay and/or check that there are no products, etc., in the site before proceeding. This functionality will only work on sites in TEST mode. Attempts to perform this on sites in “live” mode will result in a response of 403 FORBIDDEN.
- **Signature**: `ClearSite(CleanupScope? cleanupScope, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cleanupScope` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cleanup_scope` ← `cleanupScope`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListChargifyJsPublicKeys
- **HTTP**: `GET /chargify_js_keys.json` (Production)
- **Notes**: Lists public keys used for Maxio.js (formerly Chargify.js).
- **Signature**: `ListChargifyJsPublicKeys(int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `ListPublicKeysResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadSite
- **HTTP**: `GET /site.json` (Production)
- **Notes**: Retrieves site data. Full documentation on Sites in the Advanced Billing UI can be located here . Specifically, the Clearing Site Data section is relevant to this endpoint documentation. Relationship invoicing enabled If the site has RI enabled then you will see more settings like: "customer_hierarchy_enabled": true, "whopays_enabled": true, "whopays_default_payer": "self" You can read more about these settings here: Who Pays &amp; Customer Hierarchy .
- **Signature**: `ReadSite(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
