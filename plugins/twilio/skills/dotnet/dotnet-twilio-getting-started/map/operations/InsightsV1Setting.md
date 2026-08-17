<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Setting — operations

Accessor: `client.InsightsV1Setting` · Source: `Api/InsightsV1Setting.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchAccountSettings

- **Server group**: `Default14`
- **Signature**: `FetchAccountSettings(string? subaccountSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `subaccountSid` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `SubaccountSid` ← `subaccountSid`
- **Returns**: `InsightsV1AccountSettings`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1AccountSettings` | `Models/InsightsV1AccountSettings.cs` |

### UpdateAccountSettings

- **Server group**: `Default14`
- **Signature**: `UpdateAccountSettings(bool? advancedFeatures, bool? voiceTrace, string? subaccountSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `advancedFeatures` — nullable, no default → **must pass explicitly**
  - `voiceTrace` — nullable, no default → **must pass explicitly**
  - `subaccountSid` — nullable, no default → **must pass explicitly**
- **Returns**: `InsightsV1AccountSettings`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1AccountSettings` | `Models/InsightsV1AccountSettings.cs` |

