<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Entity — operations

Accessor: `client.VerifyV2Entity` · Source: `Api/VerifyV2Entity.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEntity

- **Server group**: `Default3`
- **Signature**: `CreateEntity(string serviceSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceEntity`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntity` | `Models/VerifyV2ServiceEntity.cs` |

### DeleteEntity

- **Server group**: `Default3`
- **Signature**: `DeleteEntity(string serviceSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchEntity

- **Server group**: `Default3`
- **Signature**: `FetchEntity(string serviceSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceEntity`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntity` | `Models/VerifyV2ServiceEntity.cs` |

### ListEntity

- **Server group**: `Default3`
- **Signature**: `ListEntity(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEntityResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEntityResponse` | `Models/ListEntityResponse.cs` |

