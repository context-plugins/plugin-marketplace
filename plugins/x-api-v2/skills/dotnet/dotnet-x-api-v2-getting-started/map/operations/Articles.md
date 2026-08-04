# Articles — operations

Accessor: `client.Articles` · Source: `Api/Articles.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArticleCreateDraft
- **HTTP**: `POST /2/articles/draft` (Default (api))
- **Notes**: Creates a new Article draft that can later be published.
- **Signature**: `ArticleCreateDraft(ArticleCreateDraftRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ArticleCreateDraftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ArticlePublish
- **HTTP**: `POST /2/articles/{article_id}/publish` (Default (api))
- **Notes**: Publishes a draft Article, making it publicly visible.
- **Signature**: `ArticlePublish(string articleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ArticlePublishResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
