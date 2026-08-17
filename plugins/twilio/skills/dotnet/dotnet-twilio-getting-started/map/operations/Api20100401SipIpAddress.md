<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401SipIpAddress — operations

Accessor: `client.Api20100401SipIpAddress` · Source: `Api/Api20100401SipIpAddress.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipIpAddress

- **Signature**: `CreateSipIpAddress(string accountSid, string ipAccessControlListSid, string friendlyName, string ipAddress, int? cidrPrefixLength, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cidrPrefixLength` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `Models/ApiV2010AccountSipSipIpAccessControlListSipIpAddress.cs` |

### DeleteSipIpAddress

- **Signature**: `DeleteSipIpAddress(string accountSid, string ipAccessControlListSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipIpAddress

- **Signature**: `FetchSipIpAddress(string accountSid, string ipAccessControlListSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `Models/ApiV2010AccountSipSipIpAccessControlListSipIpAddress.cs` |

### ListSipIpAddress

- **Signature**: `ListSipIpAddress(string accountSid, string ipAccessControlListSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipIpAddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipIpAddressResponse` | `Models/ListSipIpAddressResponse.cs` |

### UpdateSipIpAddress

- **Signature**: `UpdateSipIpAddress(string accountSid, string ipAccessControlListSid, string sid, string? ipAddress, string? friendlyName, int? cidrPrefixLength, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ipAddress` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `cidrPrefixLength` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `Models/ApiV2010AccountSipSipIpAccessControlListSipIpAddress.cs` |

