# OnDemandBackgrounds — operations

Accessor: `client.OnDemandBackgrounds` · Source: `Api/OnDemandBackgrounds.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVodBackground
- **HTTP**: `POST /ondemand/pages/{ondemand_id}/backgrounds` (Default (api))
- **Notes**: This method adds a background image to the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `CreateVodBackground(double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateVodBackgroundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVodBackground
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}/backgrounds/{background_id}` (Default (api))
- **Notes**: This method deletes the specified background image on an On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `DeleteVodBackground(double backgroundId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVodBackgroundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditVodBackground
- **HTTP**: `PATCH /ondemand/pages/{ondemand_id}/backgrounds/{background_id}` (Default (api))
- **Notes**: This method edits the specified background image on an On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `EditVodBackground(double backgroundId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditVodBackgroundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodBackground
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/backgrounds/{background_id}` (Default (api))
- **Notes**: This method returns a single background image on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodBackground(double backgroundId, double ondemandId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVodBackgroundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodBackgrounds
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/backgrounds` (Default (api))
- **Notes**: This method returns every background image on the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `GetVodBackgrounds(double ondemandId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVodBackgroundsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
