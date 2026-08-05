# FlexV1InsightsAssessmentsCommentApi — operations

Accessor: `client.FlexV1InsightsAssessmentsCommentApi` · Source: `Api/FlexV1InsightsAssessmentsCommentApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInsightsAssessmentsComment
- **HTTP**: `POST /v1/Insights/QualityManagement/Assessments/Comments` (Default3 (flex-api))
- **Notes**: To create a comment assessment for a conversation
- **Signature**: `CreateInsightsAssessmentsComment(string? authorization, string categoryId, string categoryName, string comment, string segmentId, string agentId, double offset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CategoryId` ← `categoryId`, `CategoryName` ← `categoryName`, `Comment` ← `comment`, `SegmentId` ← `segmentId`, `AgentId` ← `agentId`, `Offset` ← `offset`
- **Returns**: `FlexV1InsightsAssessmentsComment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInsightsAssessmentsComment
- **HTTP**: `GET /v1/Insights/QualityManagement/Assessments/Comments` (Default3 (flex-api))
- **Notes**: To create a comment assessment for a conversation
- **Signature**: `ListInsightsAssessmentsComment(string? segmentId, string? agentId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `AgentId` ← `agentId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsAssessmentsCommentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
