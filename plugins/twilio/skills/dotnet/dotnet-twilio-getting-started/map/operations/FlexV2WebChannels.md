<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV2WebChannels — operations

Accessor: `client.FlexV2WebChannels` · Source: `Api/FlexV2WebChannels.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebChannel2

- **Server group**: `Default13`
- **Signature**: `CreateWebChannel2(string? uiVersion, string addressSid, string? chatFriendlyName, string? customerFriendlyName, string? preEngagementData, string? identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`uiVersion` … `identity`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV2WebChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV2WebChannel` | `Models/FlexV2WebChannel.cs` |

