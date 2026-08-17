<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1EndUserApi — operations

Accessor: `client.TrusthubV1EndUserApi` · Source: `Api/TrusthubV1EndUserApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEndUser2

- **Server group**: `Default9`
- **Signature**: `CreateEndUser2(string friendlyName, string type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1EndUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1EndUser` | `Models/TrusthubV1EndUser.cs` |

### DeleteEndUser2

- **Server group**: `Default9`
- **Signature**: `DeleteEndUser2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchEndUser2

- **Server group**: `Default9`
- **Signature**: `FetchEndUser2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1EndUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1EndUser` | `Models/TrusthubV1EndUser.cs` |

### ListEndUser2

- **Server group**: `Default9`
- **Signature**: `ListEndUser2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEndUserResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEndUserResponse1` | `Models/ListEndUserResponse1.cs` |

### UpdateEndUser2

- **Server group**: `Default9`
- **Signature**: `UpdateEndUser2(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `TrusthubV1EndUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1EndUser` | `Models/TrusthubV1EndUser.cs` |

