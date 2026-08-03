# File — operations

Accessor: `client.File` · Source: `Api/File.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DownloadFile
- **HTTP**: `GET /file/{file_id}/download` (Default (api))
- **Signature**: `DownloadFile(string fileId, string xEbayCMarketplaceId, string? range, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `range` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<DownloadFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 416, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFile
- **HTTP**: `GET /file/{file_id}` (Default (api))
- **Notes**: Use this method to fetch the details of a feed file available to download, as specified by the file's &lt;b&gt;file_id&lt;/b&gt;.&lt;/p&gt;&lt;p&gt;Details in the response include: the feed's &lt;b&gt;file_id&lt;/b&gt;, the date it became available, eBay categories that support the feed, its frequency, the time span it covers, its feed type, its format, its size in bytes, the schema under which it was pulled, and the marketplaces it applies to.&lt;/p&gt;
- **Signature**: `GetFile(string fileId, string xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FileMetadata`
- **Error**: `SdkException<GetFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFiles
- **HTTP**: `GET /file` (Default (api))
- **Notes**: &lt;p&gt;This method provides a list of the feed files available for download.&lt;/p&gt;&lt;p&gt;Details for each feed returned include the date the feed was generated, the frequency with which it is pulled, its feed type, its &lt;b&gt;fileId&lt;/b&gt;, its format, the eBay marketplaces it applies to, the schema version under which it was generated, its size in bytes, and the time span it covers (in hours).&lt;/p&gt;&lt;p&gt;You can limit your search results by feed type, marketplace, scope, eBay L1 category, and how far back in time from the present the feed was made available. Set the &lt;blook_back&lt;/b&gt; field to control exactly how many feeds from the past are retrieved.&lt;/p&gt;&lt;h3&gt;&lt;b&gt;Restrictions &lt;/b&gt;&lt;/h3&gt;&lt;p&gt;For a list of supported sites and other restrictions, see &lt;a href="/api-docs/buy/static/api-feed.htmlrestrictions"&gt;API Restrictions&lt;/a&gt;.&lt;/p&gt;
- **Signature**: `GetFiles(string feedTypeId, string? categoryIds, string? continuationToken, string? feedScope, string? limit, string? lookBack, string xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`categoryIds` … `lookBack`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `feed_type_id` ← `feedTypeId`, `category_ids` ← `categoryIds`, `continuation_token` ← `continuationToken`, `feed_scope` ← `feedScope`, `limit` ← `limit`, `look_back` ← `lookBack`
- **Returns**: `FileMetadataSearchResponse`
- **Error**: `SdkException<GetFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
