<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Template — operations

Accessor: `client.VerifyV2Template` · Source: `Api/VerifyV2Template.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListVerificationTemplate

- **Server group**: `Default3`
- **Signature**: `ListVerificationTemplate(string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVerificationTemplateResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListVerificationTemplateResponse` | `Models/ListVerificationTemplateResponse.cs` |

