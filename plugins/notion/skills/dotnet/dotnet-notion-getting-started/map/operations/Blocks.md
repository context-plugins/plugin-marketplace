# Blocks — operations

Accessor: `client.Blocks` · Source: `Api/Blocks.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AppendBlockChildren
- **HTTP**: `PATCH /blocks/{block_id}/children` (Default (api))
- **Notes**: Creates and appends new children blocks to the parent block specified by block_id. Returns the updated parent block. Blocks can be appended to pages, or to other blocks that support children. The maximum number of blocks that can be appended in a single request is 100.
- **Signature**: `AppendBlockChildren(Guid blockId, BlocksChildrenRequest body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `PaginatedList`
- **Error**: `SdkException<AppendBlockChildrenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBlock
- **HTTP**: `DELETE /blocks/{block_id}` (Default (api))
- **Notes**: Sets a Block object, including page blocks, to archived: true using the ID specified in the path. This is equivalent to trashing the block in the Notion UI. To restore an archived block, use the update block endpoint to set archived to false.
- **Signature**: `DeleteBlock(Guid blockId, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Block`
- **Error**: `SdkException<DeleteBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBlock
- **HTTP**: `GET /blocks/{block_id}` (Default (api))
- **Notes**: Retrieves a Block object using the ID specified in the path. If the block is a page, the page properties will be returned. The block's children are not included; use the retrieve block children endpoint to get them.
- **Signature**: `RetrieveBlock(Guid blockId, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Block`
- **Error**: `SdkException<RetrieveBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBlockChildren
- **HTTP**: `GET /blocks/{block_id}/children` (Default (api))
- **Notes**: Returns a paginated array of child block objects contained in the block using the ID specified. This is used to read page content by passing a page ID as the block_id. Responses include a maximum of 100 blocks per request and are returned in the order they appear in the parent block.
- **Signature**: `RetrieveBlockChildren(Guid blockId, string? startCursor, int? pageSize, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startCursor` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Query params (wire ← C#)**: `start_cursor` ← `startCursor`, `page_size` ← `pageSize`
- **Returns**: `PaginatedList`
- **Error**: `SdkException<RetrieveBlockChildrenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBlock
- **HTTP**: `PATCH /blocks/{block_id}` (Default (api))
- **Notes**: Updates the content of a block. The fields that can be updated depend on the block type. Blocks can also be archived by setting the archived field to true.
- **Signature**: `UpdateBlock(Guid blockId, BlocksRequest body, string notionVersion = "2022-06-28", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `notionVersion` = "2022-06-28", `requestOptions` = null
- **Returns**: `Block`
- **Error**: `SdkException<UpdateBlockError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
