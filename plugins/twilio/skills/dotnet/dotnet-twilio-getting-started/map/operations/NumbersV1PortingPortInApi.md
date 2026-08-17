<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingPortInApi — operations

Accessor: `client.NumbersV1PortingPortInApi` · Source: `Api/NumbersV1PortingPortInApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePortingPortIn

- **Server group**: `Default5`
- **Signature**: `CreatePortingPortIn(PortInRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV1PortingPortIn`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PortInRequest` | `Models/PortInRequest.cs` |
| `NumbersV1PortingPortIn` | `Models/NumbersV1PortingPortIn.cs` |

### DeletePortingPortIn

- **Server group**: `Default5`
- **Signature**: `DeletePortingPortIn(string portInRequestSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchPortingPortIn

- **Server group**: `Default5`
- **Signature**: `FetchPortingPortIn(string portInRequestSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV1PortingPortIn`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV1PortingPortIn` | `Models/NumbersV1PortingPortIn.cs` |

### ListPortInRequests

- **Server group**: `Default5`
- **Signature**: `ListPortInRequests(string? token, string? portInRequestSid, string? portInRequestStatus, string? createdBefore, string? createdAfter, int? size = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`token` … `createdAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `size` = `20`
- **Query params (wire ← C#)**: `Token` ← `token`, `Size` ← `size`, `PortInRequestSid` ← `portInRequestSid`, `PortInRequestStatus` ← `portInRequestStatus`, `CreatedBefore` ← `createdBefore`, `CreatedAfter` ← `createdAfter`
- **Returns**: `ListPortInRequestsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPortInRequestsResponse` | `Models/ListPortInRequestsResponse.cs` |

