# UsersPictures — operations

Accessor: `client.UsersPictures` · Source: `Api/UsersPictures.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePicture
- **HTTP**: `POST /users/{user_id}/pictures` (Default (api))
- **Notes**: This method adds a portrait image to the authenticated user's Vimeo account. Send the binary data of the image file to the location that you receive from the link field in the response. For step-by-step instructions, see Working with Thumbnail Uploads .
- **Signature**: `CreatePicture(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreatePictureAlt1
- **HTTP**: `POST /me/pictures` (Default (api))
- **Notes**: This method adds a portrait image to the authenticated user's Vimeo account. Send the binary data of the image file to the location that you receive from the link field in the response. For step-by-step instructions, see Working with Thumbnail Uploads .
- **Signature**: `CreatePictureAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePicture
- **HTTP**: `DELETE /users/{user_id}/pictures/{portraitset_id}` (Default (api))
- **Notes**: This method removes the specified portrait image from the authenticated user's Vimeo account.
- **Signature**: `DeletePicture(double portraitsetId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePictureAlt1
- **HTTP**: `DELETE /me/pictures/{portraitset_id}` (Default (api))
- **Notes**: This method removes the specified portrait image from the authenticated user's Vimeo account.
- **Signature**: `DeletePictureAlt1(double portraitsetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EditPicture
- **HTTP**: `PATCH /users/{user_id}/pictures/{portraitset_id}` (Default (api))
- **Notes**: This method edits the specified portrait image belonging to the authenticated user.
- **Signature**: `EditPicture(double portraitsetId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EditPictureAlt1
- **HTTP**: `PATCH /me/pictures/{portraitset_id}` (Default (api))
- **Notes**: This method edits the specified portrait image belonging to the authenticated user.
- **Signature**: `EditPictureAlt1(double portraitsetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPicture
- **HTTP**: `GET /users/{user_id}/pictures/{portraitset_id}` (Default (api))
- **Notes**: This method returns a single portrait image belonging to the authenticated user.
- **Signature**: `GetPicture(double portraitsetId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPictureAlt1
- **HTTP**: `GET /me/pictures/{portraitset_id}` (Default (api))
- **Notes**: This method returns a single portrait image belonging to the authenticated user.
- **Signature**: `GetPictureAlt1(double portraitsetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPictures
- **HTTP**: `GET /users/{user_id}/pictures` (Default (api))
- **Notes**: This method returns every portrait image belonging to the authenticated user.
- **Signature**: `GetPictures(double userId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetPicturesAlt1
- **HTTP**: `GET /me/pictures` (Default (api))
- **Notes**: This method returns every portrait image belonging to the authenticated user.
- **Signature**: `GetPicturesAlt1(double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
