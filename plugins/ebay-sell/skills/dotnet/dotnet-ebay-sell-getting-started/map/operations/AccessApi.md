# AccessApi — operations

Accessor: `client.AccessApi` · Source: `Api/AccessApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccess
- **HTTP**: `GET /access` (Default (api))
- **Notes**: This method retrieves the access rules specific to the application; for example, the feed types to which the application has permissions. An application may be constrained to certain marketplaces, and to specific L1 categories within those marketplaces. You can use this information to apply filters to the &lt;a href="/develop/api/buy/buy_feed_apibuy-buy_feed_api-file-getfiles" target="_blank"&gt;getFiles&lt;/a&gt; method when obtaining details on accessible downloadable files.&lt;h3&gt;&lt;b&gt;Restrictions &lt;/b&gt;&lt;/h3&gt;For a list of supported sites and other restrictions, see &lt;a href="/api-docs/buy/static/api-feed.htmlrestrictions" target="_blank"&gt;API restrictions&lt;/a&gt;.
- **Signature**: `GetAccess(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApplicationAccess`
- **Error**: `SdkException<GetAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
