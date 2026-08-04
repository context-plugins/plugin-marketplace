# NewsApi — operations

Accessor: `client.NewsApi` · Source: `Api/NewsApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetNews
- **HTTP**: `GET /2/news/{id}` (Default (api))
- **Notes**: Retrieves news story by its ID.
- **Signature**: `GetNews(string id, IReadOnlyList<NewsField>? newsFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `newsFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `news.fields` ← `newsFields`
- **Returns**: `GetNewsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchNews
- **HTTP**: `GET /2/news/search` (Default (api))
- **Signature**: `SearchNews(string query, IReadOnlyList<NewsField>? newsFields, int? maxResults = 10, int? maxAgeHours = 168, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `newsFields` — nullable, no default → **must pass explicitly**
  - defaults: `maxResults` = 10, `maxAgeHours` = 168, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `max_results` ← `maxResults`, `max_age_hours` ← `maxAgeHours`, `news.fields` ← `newsFields`
- **Returns**: `SearchNewsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
