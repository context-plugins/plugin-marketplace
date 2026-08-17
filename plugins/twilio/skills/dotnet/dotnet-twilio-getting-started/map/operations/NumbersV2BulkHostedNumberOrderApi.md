<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2BulkHostedNumberOrderApi — operations

Accessor: `client.NumbersV2BulkHostedNumberOrderApi` · Source: `Api/NumbersV2BulkHostedNumberOrderApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBulkHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `CreateBulkHostedNumberOrder(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2BulkHostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2BulkHostedNumberOrder` | `Models/NumbersV2BulkHostedNumberOrder.cs` |

### FetchBulkHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `FetchBulkHostedNumberOrder(string bulkHostingSid, string? orderStatus, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderStatus` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `OrderStatus` ← `orderStatus`
- **Returns**: `NumbersV2BulkHostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2BulkHostedNumberOrder` | `Models/NumbersV2BulkHostedNumberOrder.cs` |

