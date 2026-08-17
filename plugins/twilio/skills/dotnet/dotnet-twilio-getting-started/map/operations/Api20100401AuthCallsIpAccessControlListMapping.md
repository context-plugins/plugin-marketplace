<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthCallsIpAccessControlListMapping — operations

Accessor: `client.Api20100401AuthCallsIpAccessControlListMapping` · Source: `Api/Api20100401AuthCallsIpAccessControlListMapping.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipAuthCallsIpAccessControlListMapping

- **Signature**: `CreateSipAuthCallsIpAccessControlListMapping(string accountSid, string domainSid, string ipAccessControlListSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SipAuthCallsIpAccessControlListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SipAuthCallsIpAccessControlListMapping` | `Models/SipAuthCallsIpAccessControlListMapping.cs` |

### DeleteSipAuthCallsIpAccessControlListMapping

- **Signature**: `DeleteSipAuthCallsIpAccessControlListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipAuthCallsIpAccessControlListMapping

- **Signature**: `FetchSipAuthCallsIpAccessControlListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SipAuthCallsIpAccessControlListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SipAuthCallsIpAccessControlListMapping` | `Models/SipAuthCallsIpAccessControlListMapping.cs` |

### ListSipAuthCallsIpAccessControlListMapping

- **Signature**: `ListSipAuthCallsIpAccessControlListMapping(string accountSid, string domainSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipAuthCallsIpAccessControlListMappingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipAuthCallsIpAccessControlListMappingResponse` | `Models/ListSipAuthCallsIpAccessControlListMappingResponse.cs` |

