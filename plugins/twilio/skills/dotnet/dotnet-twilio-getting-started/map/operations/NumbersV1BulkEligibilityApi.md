<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1BulkEligibilityApi — operations

Accessor: `client.NumbersV1BulkEligibilityApi` · Source: `Api/NumbersV1BulkEligibilityApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBulkEligibility

- **Server group**: `Default5`
- **Signature**: `CreateBulkEligibility(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV1BulkEligibility`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV1BulkEligibility` | `Models/NumbersV1BulkEligibility.cs` |

### FetchBulkEligibility

- **Server group**: `Default5`
- **Signature**: `FetchBulkEligibility(string requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV1BulkEligibility`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV1BulkEligibility` | `Models/NumbersV1BulkEligibility.cs` |

