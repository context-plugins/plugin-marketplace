<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1ServiceApi — operations

Accessor: `client.ProxyV1ServiceApi` · Source: `Api/ProxyV1ServiceApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateService4

- **Server group**: `Default10`
- **Signature**: `CreateService4(string uniqueName, int? defaultTtl, string? callbackUrl, ServiceEnumGeoMatchLevel? geoMatchLevel, ServiceEnumNumberSelectionBehavior? numberSelectionBehavior, string? interceptCallbackUrl, string? outOfSessionCallbackUrl, string? chatInstanceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`defaultTtl` … `chatInstanceSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ProxyV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceEnumGeoMatchLevel` | `Models/Enums/ServiceEnumGeoMatchLevel.cs` |
| `ServiceEnumNumberSelectionBehavior` | `Models/Enums/ServiceEnumNumberSelectionBehavior.cs` |
| `ProxyV1Service` | `Models/ProxyV1Service.cs` |

### DeleteService4

- **Server group**: `Default10`
- **Signature**: `DeleteService4(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchService4

- **Server group**: `Default10`
- **Signature**: `FetchService4(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProxyV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ProxyV1Service` | `Models/ProxyV1Service.cs` |

### ListService4

- **Server group**: `Default10`
- **Signature**: `ListService4(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse3`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceResponse3` | `Models/ListServiceResponse3.cs` |

### UpdateService3

- **Server group**: `Default10`
- **Signature**: `UpdateService3(string sid, string? uniqueName, int? defaultTtl, string? callbackUrl, ServiceEnumGeoMatchLevel? geoMatchLevel, ServiceEnumNumberSelectionBehavior? numberSelectionBehavior, string? interceptCallbackUrl, string? outOfSessionCallbackUrl, string? chatInstanceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`uniqueName` … `chatInstanceSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ProxyV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceEnumGeoMatchLevel` | `Models/Enums/ServiceEnumGeoMatchLevel.cs` |
| `ServiceEnumNumberSelectionBehavior` | `Models/Enums/ServiceEnumNumberSelectionBehavior.cs` |
| `ProxyV1Service` | `Models/ProxyV1Service.cs` |

