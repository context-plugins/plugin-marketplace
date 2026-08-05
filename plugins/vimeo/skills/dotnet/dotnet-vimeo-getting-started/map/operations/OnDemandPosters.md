# OnDemandPosters — operations

Accessor: `client.OnDemandPosters` · Source: `Api/OnDemandPosters.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVodPoster
- **HTTP**: `POST /ondemand/pages/{ondemand_id}/pictures` (Default (api))
- **Notes**: This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `AddVodPoster(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<AddVodPosterError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditVodPoster
- **HTTP**: `PATCH /ondemand/pages/{ondemand_id}/pictures/{poster_id}` (Default (api))
- **Notes**: This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `EditVodPoster(double ondemandId, double posterId, OndemandPagesPicturesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVodPoster
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/pictures/{poster_id}` (Default (api))
- **Notes**: This method returns a single poster on the specified On Demand page.
- **Signature**: `GetVodPoster(double ondemandId, double posterId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVodPosters
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/pictures` (Default (api))
- **Notes**: This method returns every poster on the specified On Demand page.
- **Signature**: `GetVodPosters(double ondemandId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `PictureConnection`
- **Error**: `SdkException<GetVodPostersError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
