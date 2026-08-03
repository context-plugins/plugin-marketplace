# TopicApi — operations

Accessor: `client.TopicApi` · Source: `Api/TopicApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTopic
- **HTTP**: `GET /topic/{topic_id}` (Default (api))
- **Signature**: `GetTopic(string topicId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Topic`
- **Error**: `SdkException<GetTopicError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTopics
- **HTTP**: `GET /topic` (Default (api))
- **Signature**: `GetTopics(string? continuationToken, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `continuationToken` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `continuation_token` ← `continuationToken`, `limit` ← `limit`
- **Returns**: `TopicSearchResponse`
- **Error**: `SdkException<GetTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
