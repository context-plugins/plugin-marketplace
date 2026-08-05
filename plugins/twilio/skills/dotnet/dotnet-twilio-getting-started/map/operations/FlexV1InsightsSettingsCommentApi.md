# FlexV1InsightsSettingsCommentApi — operations

Accessor: `client.FlexV1InsightsSettingsCommentApi` · Source: `Api/FlexV1InsightsSettingsCommentApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchInsightsSettingsComment
- **HTTP**: `GET /v1/Insights/QualityManagement/Settings/CommentTags` (Default3 (flex-api))
- **Notes**: To get the Comment Settings for an Account
- **Signature**: `FetchInsightsSettingsComment(string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InsightsSettingsComment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
