# Genres — operations

Accessor: `client.Genres` · Source: `Api/Genres.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetRecommendationGenres
- **HTTP**: `GET /recommendations/available-genre-seeds` (Default (api))
- **Notes**: Retrieve a list of available genres seed parameter values for recommendations .
- **Signature**: `GetRecommendationGenres(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManyGenres`
- **Error**: `SdkException<GetRecommendationGenresError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
