<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AssignedAddOn — operations

Accessor: `client.Api20100401AssignedAddOn` · Source: `Api/Api20100401AssignedAddOn.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateIncomingPhoneNumberAssignedAddOn

- **Signature**: `CreateIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, string installedAddOnSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `Models/ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn.cs` |

### DeleteIncomingPhoneNumberAssignedAddOn

- **Signature**: `DeleteIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchIncomingPhoneNumberAssignedAddOn

- **Signature**: `FetchIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `Models/ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn.cs` |

### ListIncomingPhoneNumberAssignedAddOn

- **Signature**: `ListIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberAssignedAddOnResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `Models/ListIncomingPhoneNumberAssignedAddOnResponse.cs` |

