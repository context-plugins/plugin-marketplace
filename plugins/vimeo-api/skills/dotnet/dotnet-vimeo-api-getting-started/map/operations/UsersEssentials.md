# UsersEssentials — operations

Accessor: `client.UsersEssentials` · Source: `Api/UsersEssentials.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EditUser
- **HTTP**: `PATCH /users/{user_id}` (Default (api))
- **Notes**: This method edits the Vimeo account of the authenticated user.
- **Signature**: `EditUser(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditUserAlt1
- **HTTP**: `PATCH /me` (Default (api))
- **Notes**: This method edits the Vimeo account of the authenticated user.
- **Signature**: `EditUserAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditUserAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUser
- **HTTP**: `GET /users/{user_id}` (Default (api))
- **Notes**: This method returns the authenticated user.
- **Signature**: `GetUser(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUserAlt1
- **HTTP**: `GET /me` (Default (api))
- **Notes**: This method returns the authenticated user.
- **Signature**: `GetUserAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
