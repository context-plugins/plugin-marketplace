<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2BundleCloneApi — operations

Accessor: `client.NumbersV2BundleCloneApi` · Source: `Api/NumbersV2BundleCloneApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBundleClone

- **Server group**: `Default5`
- **Signature**: `CreateBundleClone(string bundleSid, string targetAccountSid, bool? moveToDraft, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `moveToDraft` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2BundleClone`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2BundleClone` | `Models/NumbersV2BundleClone.cs` |

