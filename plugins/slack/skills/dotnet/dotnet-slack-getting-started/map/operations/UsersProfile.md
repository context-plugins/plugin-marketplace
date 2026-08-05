# UsersProfile — operations

Accessor: `client.UsersProfile` · Source: `Api/UsersProfile.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UsersProfileGet
- **HTTP**: `GET /users.profile.get` (Default (slack))
- **Notes**: Retrieves a user's profile information.
- **Signature**: `UsersProfileGet(string token, bool? includeLabels, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeLabels` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `include_labels` ← `includeLabels`, `user` ← `user`
- **Returns**: `UsersProfileGetschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersProfileGet1
- **HTTP**: `GET /users.profile.get` (Default (slack))
- **Notes**: Retrieves a user's profile information.
- **Signature**: `UsersProfileGet1(string token, bool? includeLabels, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeLabels` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `include_labels` ← `includeLabels`, `user` ← `user`
- **Returns**: `UsersProfileGetschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersProfileSet
- **HTTP**: `POST /users.profile.set` (Default (slack))
- **Notes**: Set the profile information for a user.
- **Signature**: `UsersProfileSet(string token, ContentType contentType, string? name, string? profile, string? user, string? value, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`name` … `value`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `profile` ← `profile`, `user` ← `user`, `value` ← `value`
- **Returns**: `UsersProfileSetschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersProfileSet1
- **HTTP**: `POST /users.profile.set` (Default (slack))
- **Notes**: Set the profile information for a user.
- **Signature**: `UsersProfileSet1(string token, ContentType contentType, string? name, string? profile, string? user, string? value, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`name` … `value`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `profile` ← `profile`, `user` ← `user`, `value` ← `value`
- **Returns**: `UsersProfileSetschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
