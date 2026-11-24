<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blocks — operations

Accessor: `client.blocks` · Source: `src/resources/blocks.ts` · 1 operation · Request and error types: namespace `Blocks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cosmic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listBlocks

- **Signature**: `listBlocks(request: Blocks.ListBlocksRequest, options?: RequestOptions): ApiPromise<BlocksResponse, Blocks.ListBlocksError>`
- **Wire**: `GET /buckets/{slug}/blocks`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BlocksResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `Blocks.ListBlocksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Blocks.ListBlocksRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BlocksResponse` | `blocksResponseSchema` | `src/models/blocks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

