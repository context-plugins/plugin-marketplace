# MessagingV1Deactivations — operations

Accessor: `client.MessagingV1Deactivations` · Source: `Api/MessagingV1Deactivations.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchDeactivation
- **HTTP**: `GET /v1/Deactivations` (Default6 (messaging))
- **Notes**: Fetch a list of all United States numbers that have been deactivated on a specific date.
- **Signature**: `FetchDeactivation(DateTimeOffset? date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Date` ← `date`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
