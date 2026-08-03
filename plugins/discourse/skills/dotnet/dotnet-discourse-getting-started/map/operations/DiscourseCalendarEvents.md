# DiscourseCalendarEvents — operations

Accessor: `client.DiscourseCalendarEvents` · Source: `Api/DiscourseCalendarEvents.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExportEventsIcs
- **HTTP**: `GET /discourse-post-event/events.ics` (Default)
- **Signature**: `ExportEventsIcs(int? categoryId, IncludeSubcategories? includeSubcategories, string? attendingUser, DateTimeOffset? before, DateTimeOffset? after, Order? order, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`categoryId` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`, `include_subcategories` ← `includeSubcategories`, `attending_user` ← `attendingUser`, `before` ← `before`, `after` ← `after`, `order` ← `order`, `limit` ← `limit`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEvents
- **HTTP**: `GET /discourse-post-event/events.json` (Default)
- **Signature**: `ListEvents(IncludeDetails? includeDetails, int? categoryId, IncludeSubcategories? includeSubcategories, int? postId, string? attendingUser, DateTimeOffset? before, DateTimeOffset? after, Order? order, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`includeDetails` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_details` ← `includeDetails`, `category_id` ← `categoryId`, `include_subcategories` ← `includeSubcategories`, `post_id` ← `postId`, `attending_user` ← `attendingUser`, `before` ← `before`, `after` ← `after`, `order` ← `order`, `limit` ← `limit`
- **Returns**: `DiscoursePostEventEventsJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
