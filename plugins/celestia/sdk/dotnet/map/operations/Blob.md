<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blob — operations

Accessor: `client.Blob` · Source: `src/Celestia/Api/Blob.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostRoot

- **Auth**: `options.BearerAuth`
- **Signature**: `PostRoot(PostRootRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `JsonRpcResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostRootRequest` | `src/Celestia/Requests/Blob/PostRootRequest.cs` |
| `JsonRpcRequest` | `src/Celestia/Models/JsonRpcRequest.cs` |
| `JsonRpcResponse` | `src/Celestia/Models/JsonRpcResponse.cs` |

