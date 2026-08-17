<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2EndUserType — operations

Accessor: `client.NumbersV2EndUserType` · Source: `Api/NumbersV2EndUserType.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchEndUserType

- **Server group**: `Default5`
- **Signature**: `FetchEndUserType(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceEndUserType`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceEndUserType` | `Models/NumbersV2RegulatoryComplianceEndUserType.cs` |

### ListEndUserType

- **Server group**: `Default5`
- **Signature**: `ListEndUserType(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEndUserTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEndUserTypeResponse` | `Models/ListEndUserTypeResponse.cs` |

