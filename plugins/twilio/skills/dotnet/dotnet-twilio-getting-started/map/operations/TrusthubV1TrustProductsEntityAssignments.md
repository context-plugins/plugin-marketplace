<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProductsEntityAssignments — operations

Accessor: `client.TrusthubV1TrustProductsEntityAssignments` · Source: `Api/TrusthubV1TrustProductsEntityAssignments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTrustProductEntityAssignment

- **Server group**: `Default9`
- **Signature**: `CreateTrustProductEntityAssignment(string trustProductSid, string objectSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProductTrustProductEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `Models/TrusthubV1TrustProductTrustProductEntityAssignment.cs` |

### DeleteTrustProductEntityAssignment

- **Server group**: `Default9`
- **Signature**: `DeleteTrustProductEntityAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTrustProductEntityAssignment

- **Server group**: `Default9`
- **Signature**: `FetchTrustProductEntityAssignment(string trustProductSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1TrustProductTrustProductEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `Models/TrusthubV1TrustProductTrustProductEntityAssignment.cs` |

### ListTrustProductEntityAssignment

- **Server group**: `Default9`
- **Signature**: `ListTrustProductEntityAssignment(string trustProductSid, string? objectType, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`objectType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ObjectType` ← `objectType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductEntityAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTrustProductEntityAssignmentResponse` | `Models/ListTrustProductEntityAssignmentResponse.cs` |

