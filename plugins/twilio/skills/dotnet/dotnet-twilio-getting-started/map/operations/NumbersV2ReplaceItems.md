# NumbersV2ReplaceItems — operations

Accessor: `client.NumbersV2ReplaceItems` · Source: `Api/NumbersV2ReplaceItems.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateReplaceItems
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems` (Default5 (numbers))
- **Notes**: Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
- **Signature**: `CreateReplaceItems(string bundleSid, string fromBundleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FromBundleSid` ← `fromBundleSid`
- **Returns**: `NumbersV2RegulatoryComplianceBundleReplaceItems`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
