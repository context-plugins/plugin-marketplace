<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blocks — operations

Accessor: `client.Blocks` · Source: `src/Cosmic/Api/Blocks.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListBlocks

- **Auth**: `options.ReadKey`
- **Signature**: `ListBlocks(ListBlocksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `pretty` ← `Pretty`
- **Returns**: `BlocksResponse`
- **Error**: `ApiException<ListBlocksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBlocksRequest` | `src/Cosmic/Requests/Blocks/ListBlocksRequest.cs` |
| `BlocksResponse` | `src/Cosmic/Models/BlocksResponse.cs` |
| `ListBlocksError` | `src/Cosmic/Errors/ListBlocksError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

