# CustomerSegments — operations

Accessor: `client.CustomerSegments` · Source: `Api/CustomerSegments.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListCustomerSegments
- **HTTP**: `GET /v2/customers/segments` (Default (connect))
- **Notes**: Retrieves the list of customer segments of a business.
- **Signature**: `ListCustomerSegments(string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListCustomerSegmentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCustomerSegment
- **HTTP**: `GET /v2/customers/segments/{segment_id}` (Default (connect))
- **Notes**: Retrieves a specific customer segment as identified by the `segment_id` value.
- **Signature**: `RetrieveCustomerSegment(string segmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveCustomerSegmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
