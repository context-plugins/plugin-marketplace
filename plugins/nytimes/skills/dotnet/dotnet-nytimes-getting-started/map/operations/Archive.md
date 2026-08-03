# Archive — operations

Accessor: `client.Archive` · Source: `Api/Archive.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReturnsAnArrayOfArticlesForAGivenMonth
- **HTTP**: `GET /{year}/{month}.json` (Default (api))
- **Signature**: `ReturnsAnArrayOfArticlesForAGivenMonth(int year = 2018, int month = 9, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `year` = 2018, `month` = 9, `requestOptions` = null
- **Returns**: `ReturnsAnArrayOfArticlesForAGivenMonthResponse`
- **Error**: `SdkException<ReturnsAnArrayOfArticlesForAGivenMonthError>` — **Case A (typed)**
- **Error accessors**: `TryGetReturnsAnArrayOfArticlesForAgivenMonthException1(out ReturnsAnArrayOfArticlesForAGivenMonthException1)` [401] · `TryGetNoContent(out RawError)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
