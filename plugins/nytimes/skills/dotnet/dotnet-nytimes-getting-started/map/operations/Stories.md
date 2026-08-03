# Stories — operations

Accessor: `client.Stories` · Source: `Api/Stories.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopStories
- **HTTP**: `GET /{section}.json` (Default5 (api))
- **Signature**: `TopStories(Section1 section, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TopStoriesResponse`
- **Error**: `SdkException<TopStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
