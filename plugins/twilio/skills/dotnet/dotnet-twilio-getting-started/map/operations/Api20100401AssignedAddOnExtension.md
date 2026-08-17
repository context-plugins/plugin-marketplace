<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AssignedAddOnExtension — operations

Accessor: `client.Api20100401AssignedAddOnExtension` · Source: `Api/Api20100401AssignedAddOnExtension.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchIncomingPhoneNumberAssignedAddOnExtension

- **Signature**: `FetchIncomingPhoneNumberAssignedAddOnExtension(string accountSid, string resourceSid, string assignedAddOnSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `IncomingPhoneNumberAssignedAddOnExtension`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `IncomingPhoneNumberAssignedAddOnExtension` | `Models/IncomingPhoneNumberAssignedAddOnExtension.cs` |

### ListIncomingPhoneNumberAssignedAddOnExtension

- **Signature**: `ListIncomingPhoneNumberAssignedAddOnExtension(string accountSid, string resourceSid, string assignedAddOnSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberAssignedAddOnExtensionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncomingPhoneNumberAssignedAddOnExtensionResponse` | `Models/ListIncomingPhoneNumberAssignedAddOnExtensionResponse.cs` |

