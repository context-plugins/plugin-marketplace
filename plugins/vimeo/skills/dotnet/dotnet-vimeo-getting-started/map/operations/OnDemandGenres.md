# OnDemandGenres — operations

Accessor: `client.OnDemandGenres` · Source: `Api/OnDemandGenres.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVodGenre
- **HTTP**: `PUT /ondemand/pages/{ondemand_id}/genres/{genre_id}` (Default (api))
- **Notes**: This method adds the specified genre designation to an On Demand page. A page can be associated with a maximum of two genres. The authenticated user must be the owner of the page.
- **Signature**: `AddVodGenre(string genreId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandGenre`
- **Error**: `SdkException<AddVodGenreError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVodGenre
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}/genres/{genre_id}` (Default (api))
- **Notes**: This method removes a genre association from the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `DeleteVodGenre(string genreId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVodGenreError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGenreVod
- **HTTP**: `GET /ondemand/genres/{genre_id}/pages/{ondemand_id}` (Default (api))
- **Notes**: This method returns a single On Demand page that belongs to the specified genre.
- **Signature**: `GetGenreVod(string genreId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandPage`
- **Error**: `SdkException<GetGenreVodError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGenreVods
- **HTTP**: `GET /ondemand/genres/{genre_id}/pages` (Default (api))
- **Notes**: This method returns every On Demand page that belongs to the specified genre.
- **Signature**: `GetGenreVods(string genreId, Direction? direction, Filter24? filter, double? page, double? perPage, string? query, Sort41? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `OnDemandPageConnection`
- **Error**: `SdkException<GetGenreVodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVodGenre
- **HTTP**: `GET /ondemand/genres/{genre_id}` (Default (api))
- **Notes**: This method returns a single On Demand genre.
- **Signature**: `GetVodGenre(string genreId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandGenre`
- **Error**: `SdkException<GetVodGenreError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodGenreByOndemandId
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/genres/{genre_id}` (Default (api))
- **Notes**: This method determines whether an On Demand page is associated with the specified genre.
- **Signature**: `GetVodGenreByOndemandId(string genreId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandGenre`
- **Error**: `SdkException<GetVodGenreByOndemandIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodGenres
- **HTTP**: `GET /ondemand/genres` (Default (api))
- **Notes**: This method returns every existing On Demand genre.
- **Signature**: `GetVodGenres(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandGenreConnection`
- **Error**: `SdkException<GetVodGenresError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodGenresByOndemandId
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/genres` (Default (api))
- **Notes**: This method returns every genre associated with the specified On Demand page.
- **Signature**: `GetVodGenresByOndemandId(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandGenreConnection`
- **Error**: `SdkException<GetVodGenresByOndemandIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
