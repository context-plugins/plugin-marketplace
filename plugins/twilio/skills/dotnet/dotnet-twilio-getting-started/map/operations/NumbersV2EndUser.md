<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2EndUser — operations

Accessor: `client.NumbersV2EndUser` · Source: `Api/NumbersV2EndUser.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEndUser

- **Server group**: `Default5`
- **Signature**: `CreateEndUser(string friendlyName, EndUserEnumType type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EndUserEnumType` | `Models/Enums/EndUserEnumType.cs` |
| `NumbersV2RegulatoryComplianceEndUser` | `Models/NumbersV2RegulatoryComplianceEndUser.cs` |

### DeleteEndUser

- **Server group**: `Default5`
- **Signature**: `DeleteEndUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchEndUser

- **Server group**: `Default5`
- **Signature**: `FetchEndUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceEndUser` | `Models/NumbersV2RegulatoryComplianceEndUser.cs` |

### ListEndUser

- **Server group**: `Default5`
- **Signature**: `ListEndUser(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEndUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEndUserResponse` | `Models/ListEndUserResponse.cs` |

### UpdateEndUser

- **Server group**: `Default5`
- **Signature**: `UpdateEndUser(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceEndUser` | `Models/NumbersV2RegulatoryComplianceEndUser.cs` |

