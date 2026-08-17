<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IpAccessControlListMapping — operations

Accessor: `client.Api20100401IpAccessControlListMapping` · Source: `Api/Api20100401IpAccessControlListMapping.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipIpAccessControlListMapping

- **Signature**: `CreateSipIpAccessControlListMapping(string accountSid, string domainSid, string ipAccessControlListSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `Models/ApiV2010AccountSipSipDomainSipIpAccessControlListMapping.cs` |

### DeleteSipIpAccessControlListMapping

- **Signature**: `DeleteSipIpAccessControlListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipIpAccessControlListMapping

- **Signature**: `FetchSipIpAccessControlListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `Models/ApiV2010AccountSipSipDomainSipIpAccessControlListMapping.cs` |

### ListSipIpAccessControlListMapping

- **Signature**: `ListSipIpAccessControlListMapping(string accountSid, string domainSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipIpAccessControlListMappingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipIpAccessControlListMappingResponse` | `Models/ListSipIpAccessControlListMappingResponse.cs` |

