<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1ContentAndApprovalsApi — operations

Accessor: `client.Contentv1ContentAndApprovalsApi` · Source: `Api/Contentv1ContentAndApprovalsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListContentAndApprovals

- **Server group**: `Default2`
- **Signature**: `ListContentAndApprovals(int? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListContentAndApprovalsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListContentAndApprovalsResponse` | `Models/ListContentAndApprovalsResponse.cs` |

