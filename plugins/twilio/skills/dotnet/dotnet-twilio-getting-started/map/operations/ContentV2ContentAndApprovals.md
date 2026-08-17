<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentV2ContentAndApprovals — operations

Accessor: `client.ContentV2ContentAndApprovals` · Source: `Api/ContentV2ContentAndApprovals.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListContentAndApprovals2

- **Server group**: `Default2`
- **Signature**: `ListContentAndApprovals2(int? pageSize, int? page, string? pageToken, string? sortByDate, string? sortByContentName, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? contentName, string? content, IReadOnlyList<string>? language, IReadOnlyList<string>? contentType, IReadOnlyList<string>? channelEligibility, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`pageSize` … `channelEligibility`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`, `SortByDate` ← `sortByDate`, `SortByContentName` ← `sortByContentName`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `ContentName` ← `contentName`, `Content` ← `content`, `Language` ← `language`, `ContentType` ← `contentType`, `ChannelEligibility` ← `channelEligibility`
- **Returns**: `ListContentAndApprovalsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListContentAndApprovalsResponse` | `Models/ListContentAndApprovalsResponse.cs` |

