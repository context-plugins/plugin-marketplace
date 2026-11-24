<!-- Generated file — do not edit; regenerated with the SDK. -->

# ImageProxy — operations

Accessor: `client.ImageProxy` · Source: `src/Apibara/Api/ImageProxy.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProxyAuctionImage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ProxyAuctionImage(ProxyAuctionImageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Url`
- **Query params (wire ← C#)**: `url` ← `Url`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<ProxyAuctionImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProxyAuctionImageRequest` | `src/Apibara/Requests/ImageProxy/ProxyAuctionImageRequest.cs` |
| `ProxyAuctionImageError` | `src/Apibara/Errors/ProxyAuctionImageError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

