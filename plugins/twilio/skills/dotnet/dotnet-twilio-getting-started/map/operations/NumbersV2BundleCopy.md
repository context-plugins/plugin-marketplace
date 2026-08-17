<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2BundleCopy — operations

Accessor: `client.NumbersV2BundleCopy` · Source: `Api/NumbersV2BundleCopy.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBundleCopy

- **Server group**: `Default5`
- **Signature**: `CreateBundleCopy(string bundleSid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2RegulatoryComplianceBundleBundleCopy`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceBundleBundleCopy` | `Models/NumbersV2RegulatoryComplianceBundleBundleCopy.cs` |

### ListBundleCopy

- **Server group**: `Default5`
- **Signature**: `ListBundleCopy(string bundleSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBundleCopyResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListBundleCopyResponse` | `Models/ListBundleCopyResponse.cs` |

