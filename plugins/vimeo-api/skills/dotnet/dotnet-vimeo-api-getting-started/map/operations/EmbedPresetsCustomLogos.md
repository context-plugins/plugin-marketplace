# EmbedPresetsCustomLogos — operations

Accessor: `client.EmbedPresetsCustomLogos` · Source: `Api/EmbedPresetsCustomLogos.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomLogo
- **HTTP**: `POST /users/{user_id}/customlogos` (Default (api))
- **Notes**: This method adds a custom logo representing the authenticated user for display in the embedded player. Be sure to use this method in the context of the multi-step upload procedure described in our Working with Thumbnail Uploads guide. This method represents Step 2 of the procedure.
- **Signature**: `CreateCustomLogo(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateCustomLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCustomLogoAlt1
- **HTTP**: `POST /me/customlogos` (Default (api))
- **Notes**: This method adds a custom logo representing the authenticated user for display in the embedded player. Be sure to use this method in the context of the multi-step upload procedure described in our Working with Thumbnail Uploads guide. This method represents Step 2 of the procedure.
- **Signature**: `CreateCustomLogoAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateCustomLogoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomLogo
- **HTTP**: `DELETE /users/{user_id}/customlogos/{logo_id}` (Default (api))
- **Notes**: This method deletes the specified custom logo belonging to the authenticated user.
- **Signature**: `DeleteCustomLogo(double logoId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCustomLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomLogoAlt1
- **HTTP**: `DELETE /me/customlogos/{logo_id}` (Default (api))
- **Notes**: This method deletes the specified custom logo belonging to the authenticated user.
- **Signature**: `DeleteCustomLogoAlt1(double logoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCustomLogoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCustomLogo
- **HTTP**: `GET /users/{user_id}/customlogos/{logo_id}` (Default (api))
- **Notes**: This method returns a single custom logo belonging to the authenticated user.
- **Signature**: `GetCustomLogo(double logoId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetCustomLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCustomLogoAlt1
- **HTTP**: `GET /me/customlogos/{logo_id}` (Default (api))
- **Notes**: This method returns a single custom logo belonging to the authenticated user.
- **Signature**: `GetCustomLogoAlt1(double logoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetCustomLogoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCustomLogos
- **HTTP**: `GET /users/{user_id}/customlogos` (Default (api))
- **Notes**: This method returns every custom logo that belongs to the authenticated user or team owner.
- **Signature**: `GetCustomLogos(double userId, double? page, double? perPage, string? sizes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `sizes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sizes` ← `sizes`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetCustomLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetCustomLogosAlt1
- **HTTP**: `GET /me/customlogos` (Default (api))
- **Notes**: This method returns every custom logo that belongs to the authenticated user or team owner.
- **Signature**: `GetCustomLogosAlt1(double? page, double? perPage, string? sizes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `sizes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sizes` ← `sizes`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetCustomLogosAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
