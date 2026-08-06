# NumbersV2BundleCloneApi — operations

Accessor: `client.NumbersV2BundleCloneApi` · Source: `Api/NumbersV2BundleCloneApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBundleClone
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/Clones` (Default5 (numbers))
- **Notes**: Creates a new clone of the Bundle in target Account. It will internally create clones of all the bundle items (identities and documents) of the original bundle
- **Signature**: `CreateBundleClone(string bundleSid, string targetAccountSid, bool? moveToDraft, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `moveToDraft` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TargetAccountSid` ← `targetAccountSid`, `MoveToDraft` ← `moveToDraft`, `FriendlyName` ← `friendlyName`
- **Returns**: `NumbersV2BundleClone`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
