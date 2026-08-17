<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1RoleApi — operations

Accessor: `client.ConversationsV1RoleApi` · Source: `Api/ConversationsV1RoleApi.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRole

- **Server group**: `Default7`
- **Signature**: `CreateRole(string friendlyName, RoleEnumRoleType type, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Role`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RoleEnumRoleType` | `Models/Enums/RoleEnumRoleType.cs` |
| `ConversationsV1Role` | `Models/ConversationsV1Role.cs` |

### CreateServiceRole

- **Server group**: `Default7`
- **Signature**: `CreateServiceRole(string chatServiceSid, string friendlyName, ServiceRoleEnumRoleType type, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceRoleEnumRoleType` | `Models/Enums/ServiceRoleEnumRoleType.cs` |
| `ConversationsV1ServiceServiceRole` | `Models/ConversationsV1ServiceServiceRole.cs` |

### DeleteRole

- **Server group**: `Default7`
- **Signature**: `DeleteRole(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### DeleteServiceRole

- **Server group**: `Default7`
- **Signature**: `DeleteServiceRole(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchRole

- **Server group**: `Default7`
- **Signature**: `FetchRole(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Role`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Role` | `Models/ConversationsV1Role.cs` |

### FetchServiceRole

- **Server group**: `Default7`
- **Signature**: `FetchServiceRole(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceRole` | `Models/ConversationsV1ServiceServiceRole.cs` |

### ListRole

- **Server group**: `Default7`
- **Signature**: `ListRole(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoleResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRoleResponse` | `Models/ListRoleResponse.cs` |

### ListServiceRole

- **Server group**: `Default7`
- **Signature**: `ListServiceRole(string chatServiceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceRoleResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceRoleResponse` | `Models/ListServiceRoleResponse.cs` |

### UpdateRole

- **Server group**: `Default7`
- **Signature**: `UpdateRole(string sid, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Role`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Role` | `Models/ConversationsV1Role.cs` |

### UpdateServiceRole

- **Server group**: `Default7`
- **Signature**: `UpdateServiceRole(string chatServiceSid, string sid, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceRole` | `Models/ConversationsV1ServiceServiceRole.cs` |

