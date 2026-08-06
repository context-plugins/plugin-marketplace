# ContentV2ContentAndApprovals — operations

Accessor: `client.ContentV2ContentAndApprovals` · Source: `Api/ContentV2ContentAndApprovals.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListContentAndApprovals2
- **HTTP**: `GET /v2/ContentAndApprovals` (Default2 (content))
- **Signature**: `ListContentAndApprovals2(int? pageSize, int? page, string? pageToken, string? sortByDate, string? sortByContentName, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? contentName, string? content, IReadOnlyList<string>? language, IReadOnlyList<string>? contentType, IReadOnlyList<string>? channelEligibility, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`pageSize` … `channelEligibility`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`, `SortByDate` ← `sortByDate`, `SortByContentName` ← `sortByContentName`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `ContentName` ← `contentName`, `Content` ← `content`, `Language` ← `language`, `ContentType` ← `contentType`, `ChannelEligibility` ← `channelEligibility`
- **Returns**: `ListContentAndApprovalsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
