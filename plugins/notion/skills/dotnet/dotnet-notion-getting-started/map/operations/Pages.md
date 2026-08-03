# Pages — operations

Accessor: `client.Pages` · Source: `Api/Pages.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePage
- **HTTP**: `POST /pages` (Default (api))
- **Notes**: Creates a new page that is a child of an existing page or database. If the parent is a database, the property values of the new page must conform to the parent database's schema. The request body must include a parent and properties. Page content can optionally be provided as an array of block objects in the children field.
- **Signature**: `CreatePage(PagesRequest body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Page`
- **Error**: `SdkException<CreatePageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrievePage
- **HTTP**: `GET /pages/{page_id}` (Default (api))
- **Notes**: Retrieves a Page object using the ID specified in the path. Returns page properties but not page content (blocks). To retrieve page content, use the retrieve block children endpoint on the page ID.
- **Signature**: `RetrievePage(Guid pageId, IReadOnlyList<string>? filterProperties, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filterProperties` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Query params (wire ← C#)**: `filter_properties` ← `filterProperties`
- **Returns**: `Page`
- **Error**: `SdkException<RetrievePageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrievePageProperty
- **HTTP**: `GET /pages/{page_id}/properties/{property_id}` (Default (api))
- **Notes**: Retrieves a property item from a page. For paginated properties like rich text, relation, rollup, and people, this endpoint returns a paginated list. For all other property types, it returns a single property item.
- **Signature**: `RetrievePageProperty(Guid pageId, string propertyId, string? startCursor, int? pageSize, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startCursor` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Query params (wire ← C#)**: `start_cursor` ← `startCursor`, `page_size` ← `pageSize`
- **Returns**: `object`
- **Error**: `SdkException<RetrievePagePropertyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePage
- **HTTP**: `PATCH /pages/{page_id}` (Default (api))
- **Notes**: Updates the properties of a page. Only the properties specified in the request body will be updated. Properties that are not included will remain unchanged. Can also update the page icon, cover, and archived status.
- **Signature**: `UpdatePage(Guid pageId, PagesRequest1 body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Page`
- **Error**: `SdkException<UpdatePageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
