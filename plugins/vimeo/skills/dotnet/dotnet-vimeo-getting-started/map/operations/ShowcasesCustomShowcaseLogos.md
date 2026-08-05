# ShowcasesCustomShowcaseLogos — operations

Accessor: `client.ShowcasesCustomShowcaseLogos` · Source: `Api/ShowcasesCustomShowcaseLogos.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateShowcaseLogo
- **HTTP**: `POST /users/{user_id}/albums/{album_id}/logos` (Default (api))
- **Notes**: This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase. For information on how to upload the logo, see our Working with Thumbnail Uploads guide.
- **Signature**: `CreateShowcaseLogo(double albumId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<CreateShowcaseLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteShowcaseLogo
- **HTTP**: `DELETE /users/{user_id}/albums/{album_id}/logos/{logo_id}` (Default (api))
- **Notes**: This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `DeleteShowcaseLogo(double albumId, double logoId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteShowcaseLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseLogo
- **HTTP**: `GET /users/{user_id}/albums/{album_id}/logos/{logo_id}` (Default (api))
- **Notes**: This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseLogo(double albumId, double logoId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<GetShowcaseLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseLogos
- **HTTP**: `GET /users/{user_id}/albums/{album_id}/logos` (Default (api))
- **Notes**: This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseLogos(double albumId, double userId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `PictureConnection`
- **Error**: `SdkException<GetShowcaseLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReplaceShowcaseLogo
- **HTTP**: `PATCH /users/{user_id}/albums/{album_id}/logos/{logo_id}` (Default (api))
- **Notes**: This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase. For information on how to upload the logo, see our Working with Thumbnail Uploads guide.
- **Signature**: `ReplaceShowcaseLogo(double albumId, double logoId, double userId, UsersAlbumsLogosLogoIdRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<ReplaceShowcaseLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
