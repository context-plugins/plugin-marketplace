<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IpAccessControlList — operations

Accessor: `client.Api20100401IpAccessControlList` · Source: `Api/Api20100401IpAccessControlList.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipIpAccessControlList

- **Signature**: `CreateSipIpAccessControlList(string accountSid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipIpAccessControlList` | `Models/ApiV2010AccountSipSipIpAccessControlList.cs` |

### DeleteSipIpAccessControlList

- **Signature**: `DeleteSipIpAccessControlList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipIpAccessControlList

- **Signature**: `FetchSipIpAccessControlList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipIpAccessControlList` | `Models/ApiV2010AccountSipSipIpAccessControlList.cs` |

### ListSipIpAccessControlList

- **Signature**: `ListSipIpAccessControlList(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipIpAccessControlListResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipIpAccessControlListResponse` | `Models/ListSipIpAccessControlListResponse.cs` |

### UpdateSipIpAccessControlList

- **Signature**: `UpdateSipIpAccessControlList(string accountSid, string sid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipIpAccessControlList` | `Models/ApiV2010AccountSipSipIpAccessControlList.cs` |

