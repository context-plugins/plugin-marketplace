# ApiInformationEssentials — operations

Accessor: `client.ApiInformationEssentials` · Source: `Api/ApiInformationEssentials.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEndpoints
- **HTTP**: `GET /` (Default (api))
- **Notes**: This method returns the full OpenAPI specification for the Vimeo API.
- **Signature**: `GetEndpoints(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
