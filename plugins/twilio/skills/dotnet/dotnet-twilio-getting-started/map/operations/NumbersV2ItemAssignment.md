<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2ItemAssignment — operations

Accessor: `client.NumbersV2ItemAssignment` · Source: `Api/NumbersV2ItemAssignment.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateItemAssignment

- **Server group**: `Default5`
- **Signature**: `CreateItemAssignment(string bundleSid, string objectSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceBundleItemAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `Models/NumbersV2RegulatoryComplianceBundleItemAssignment.cs` |

### DeleteItemAssignment

- **Server group**: `Default5`
- **Signature**: `DeleteItemAssignment(string bundleSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchItemAssignment

- **Server group**: `Default5`
- **Signature**: `FetchItemAssignment(string bundleSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceBundleItemAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceBundleItemAssignment` | `Models/NumbersV2RegulatoryComplianceBundleItemAssignment.cs` |

### ListItemAssignment

- **Server group**: `Default5`
- **Signature**: `ListItemAssignment(string bundleSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListItemAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListItemAssignmentResponse` | `Models/ListItemAssignmentResponse.cs` |

