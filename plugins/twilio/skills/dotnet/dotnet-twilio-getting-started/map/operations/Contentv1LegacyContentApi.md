<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contentv1LegacyContentApi — operations

Accessor: `client.Contentv1LegacyContentApi` · Source: `Api/Contentv1LegacyContentApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListLegacyContent

- **Server group**: `Default2`
- **Signature**: `ListLegacyContent(int? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListLegacyContentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListLegacyContentResponse` | `Models/ListLegacyContentResponse.cs` |

