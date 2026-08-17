<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1Deactivations — operations

Accessor: `client.MessagingV1Deactivations` · Source: `Api/MessagingV1Deactivations.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchDeactivation

- **Server group**: `Default1`
- **Signature**: `FetchDeactivation(DateTimeOffset? date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `Date` ← `date`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

