<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfilesEntityAssignments — operations

Accessor: `client.TrusthubV1CustomerProfilesEntityAssignments` · Source: `Api/TrusthubV1CustomerProfilesEntityAssignments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerProfileEntityAssignment

- **Server group**: `Default9`
- **Signature**: `CreateCustomerProfileEntityAssignment(string customerProfileSid, string objectSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `Models/TrusthubV1CustomerProfileCustomerProfileEntityAssignment.cs` |

### DeleteCustomerProfileEntityAssignment

- **Server group**: `Default9`
- **Signature**: `DeleteCustomerProfileEntityAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchCustomerProfileEntityAssignment

- **Server group**: `Default9`
- **Signature**: `FetchCustomerProfileEntityAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEntityAssignment` | `Models/TrusthubV1CustomerProfileCustomerProfileEntityAssignment.cs` |

### ListCustomerProfileEntityAssignment

- **Server group**: `Default9`
- **Signature**: `ListCustomerProfileEntityAssignment(string customerProfileSid, string? objectType, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`objectType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ObjectType` ← `objectType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileEntityAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCustomerProfileEntityAssignmentResponse` | `Models/ListCustomerProfileEntityAssignmentResponse.cs` |

