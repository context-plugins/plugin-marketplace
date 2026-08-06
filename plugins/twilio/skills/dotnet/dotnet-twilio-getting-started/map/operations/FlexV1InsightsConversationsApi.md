# FlexV1InsightsConversationsApi — operations

Accessor: `client.FlexV1InsightsConversationsApi` · Source: `Api/FlexV1InsightsConversationsApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListInsightsConversations
- **HTTP**: `GET /v1/Insights/Conversations` (Default13 (flex-api))
- **Notes**: To get conversation with segment id
- **Signature**: `ListInsightsConversations(string? segmentId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsConversationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
