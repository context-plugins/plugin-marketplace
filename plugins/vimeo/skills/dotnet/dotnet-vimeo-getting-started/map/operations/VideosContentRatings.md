# VideosContentRatings — operations

Accessor: `client.VideosContentRatings` · Source: `Api/VideosContentRatings.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetContentRatings
- **HTTP**: `GET /contentratings` (Default (api))
- **Notes**: This method returns all available content ratings.
- **Signature**: `GetContentRatings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ContentRatingConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
