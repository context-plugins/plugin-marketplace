<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1EndUserType — operations

Accessor: `client.TrusthubV1EndUserType` · Source: `Api/TrusthubV1EndUserType.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchEndUserType2

- **Server group**: `Default9`
- **Signature**: `FetchEndUserType2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2RegulatoryComplianceEndUserType`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2RegulatoryComplianceEndUserType` | `Models/NumbersV2RegulatoryComplianceEndUserType.cs` |

### ListEndUserType2

- **Server group**: `Default9`
- **Signature**: `ListEndUserType2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEndUserTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEndUserTypeResponse` | `Models/ListEndUserTypeResponse.cs` |

