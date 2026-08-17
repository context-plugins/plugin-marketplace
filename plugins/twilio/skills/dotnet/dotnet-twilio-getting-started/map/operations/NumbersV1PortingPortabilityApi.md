<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingPortabilityApi — operations

Accessor: `client.NumbersV1PortingPortabilityApi` · Source: `Api/NumbersV1PortingPortabilityApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchPortingPortability

- **Server group**: `Default5`
- **Signature**: `FetchPortingPortability(string phoneNumber, string? targetAccountSid, string? addressSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `targetAccountSid` — nullable, no default → **must pass explicitly**
  - `addressSid` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `TargetAccountSid` ← `targetAccountSid`, `AddressSid` ← `addressSid`
- **Returns**: `NumbersV1PortingPortability`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV1PortingPortability` | `Models/NumbersV1PortingPortability.cs` |

