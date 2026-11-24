<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blocks — operations

Accessor: `client.blocks` · Source: `cosmic/apis/blocks.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.blocks.list_blocks

- **Route**: `GET /buckets/{slug}/blocks`
- **Auth**: `read_key`
- **Signature**: `def list_blocks(slug: str, *, read_key: str | None = None, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path · `read_key` — query · `pretty` — query
- **Returns (parsed)**: `BlocksResponse`
- **Returns (raw)**: `ApiResult[BlocksResponse, ListBlocksErrorBody]`
- **Error**: `ListBlocksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BlocksResponse` | `cosmic/models/blocks_response.py` |
| `ListBlocksErrorBody` | `cosmic/errors/list_blocks_error.py` |
| `Error` | `cosmic/models/error.py` |

