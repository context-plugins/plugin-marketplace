# UsersAnalytics — operations

Accessor: `client.UsersAnalytics` · Source: `Api/UsersAnalytics.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetUserAnalytics
- **HTTP**: `GET /users/{user_id}/analytics` (Default (api))
- **Notes**: This method returns video analytics for the authenticated user's Vimeo account.
- **Signature**: `GetUserAnalytics(double userId, Dimension dimension, string from, string to, Direction? direction, string? filterContent, IReadOnlyList<string>? filterCountries, string? filterCustomMetadata, IReadOnlyList<string>? filterDeviceTypes, IReadOnlyList<string>? filterEmbedDomains, IReadOnlyList<string>? filterRegions, IReadOnlyList<string>? filterStreamingTypes, string? filterWorkspaces, double? page, double? perPage, Sort22? sort, TimeInterval? timeInterval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`direction` … `timeInterval`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dimension` ← `dimension`, `from` ← `from`, `to` ← `to`, `direction` ← `direction`, `filter_content` ← `filterContent`, `filter_countries` ← `filterCountries`, `filter_custom_metadata` ← `filterCustomMetadata`, `filter_device_types` ← `filterDeviceTypes`, `filter_embed_domains` ← `filterEmbedDomains`, `filter_regions` ← `filterRegions`, `filter_streaming_types` ← `filterStreamingTypes`, `filter_workspaces` ← `filterWorkspaces`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `time_interval` ← `timeInterval`
- **Returns**: `AnalyticsConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUserAnalyticsAlt1
- **HTTP**: `GET /me/analytics` (Default (api))
- **Notes**: This method returns video analytics for the authenticated user's Vimeo account.
- **Signature**: `GetUserAnalyticsAlt1(Dimension dimension, string from, string to, Direction? direction, string? filterContent, IReadOnlyList<string>? filterCountries, string? filterCustomMetadata, IReadOnlyList<string>? filterDeviceTypes, IReadOnlyList<string>? filterEmbedDomains, IReadOnlyList<string>? filterRegions, IReadOnlyList<string>? filterStreamingTypes, string? filterWorkspaces, double? page, double? perPage, Sort22? sort, TimeInterval? timeInterval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`direction` … `timeInterval`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dimension` ← `dimension`, `from` ← `from`, `to` ← `to`, `direction` ← `direction`, `filter_content` ← `filterContent`, `filter_countries` ← `filterCountries`, `filter_custom_metadata` ← `filterCustomMetadata`, `filter_device_types` ← `filterDeviceTypes`, `filter_embed_domains` ← `filterEmbedDomains`, `filter_regions` ← `filterRegions`, `filter_streaming_types` ← `filterStreamingTypes`, `filter_workspaces` ← `filterWorkspaces`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `time_interval` ← `timeInterval`
- **Returns**: `AnalyticsConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
