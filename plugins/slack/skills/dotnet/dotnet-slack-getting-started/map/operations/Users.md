# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 24 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UsersConversations
- **HTTP**: `GET /users.conversations` (Default (slack))
- **Notes**: List conversations the calling user may access.
- **Signature**: `UsersConversations(string? token, string? user, string? types, bool? excludeArchived, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`, `types` ← `types`, `exclude_archived` ← `excludeArchived`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `UsersConversationssuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersConversations1
- **HTTP**: `GET /users.conversations` (Default (slack))
- **Notes**: List conversations the calling user may access.
- **Signature**: `UsersConversations1(string? token, string? user, string? types, bool? excludeArchived, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`, `types` ← `types`, `exclude_archived` ← `excludeArchived`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `UsersConversationssuccessschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersDeletePhoto
- **HTTP**: `POST /users.deletePhoto` (Default (slack))
- **Notes**: Delete the user profile photo
- **Signature**: `UsersDeletePhoto(ContentType contentType, string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `UsersDeletePhotoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersDeletePhoto1
- **HTTP**: `POST /users.deletePhoto` (Default (slack))
- **Notes**: Delete the user profile photo
- **Signature**: `UsersDeletePhoto1(ContentType contentType, string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `UsersDeletePhotoschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersGetPresence
- **HTTP**: `GET /users.getPresence` (Default (slack))
- **Notes**: Gets user presence information.
- **Signature**: `UsersGetPresence(string token, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`
- **Returns**: `ApimethodusersGetPresence`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersGetPresence1
- **HTTP**: `GET /users.getPresence` (Default (slack))
- **Notes**: Gets user presence information.
- **Signature**: `UsersGetPresence1(string token, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`
- **Returns**: `ApimethodusersGetPresence1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersIdentity
- **HTTP**: `GET /users.identity` (Default (slack))
- **Notes**: Get a user's identity.
- **Signature**: `UsersIdentity(string? token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersIdentity1
- **HTTP**: `GET /users.identity` (Default (slack))
- **Notes**: Get a user's identity.
- **Signature**: `UsersIdentity1(string? token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersInfo
- **HTTP**: `GET /users.info` (Default (slack))
- **Notes**: Gets information about a user.
- **Signature**: `UsersInfo(string token, bool? includeLocale, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeLocale` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `include_locale` ← `includeLocale`, `user` ← `user`
- **Returns**: `UsersInfosuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersInfo1
- **HTTP**: `GET /users.info` (Default (slack))
- **Notes**: Gets information about a user.
- **Signature**: `UsersInfo1(string token, bool? includeLocale, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeLocale` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `include_locale` ← `includeLocale`, `user` ← `user`
- **Returns**: `UsersInfosuccessschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersList
- **HTTP**: `GET /users.list` (Default (slack))
- **Notes**: Lists all users in a Slack team.
- **Signature**: `UsersList(string? token, int? limit, string? cursor, bool? includeLocale, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `includeLocale`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `include_locale` ← `includeLocale`
- **Returns**: `UsersListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersList1
- **HTTP**: `GET /users.list` (Default (slack))
- **Notes**: Lists all users in a Slack team.
- **Signature**: `UsersList1(string? token, int? limit, string? cursor, bool? includeLocale, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `includeLocale`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `limit` ← `limit`, `cursor` ← `cursor`, `include_locale` ← `includeLocale`
- **Returns**: `UsersListschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersLookupByEmail
- **HTTP**: `GET /users.lookupByEmail` (Default (slack))
- **Notes**: Find a user with an email address.
- **Signature**: `UsersLookupByEmail(string token, string email, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `email` ← `email`
- **Returns**: `UsersLookupByEmailsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersLookupByEmail1
- **HTTP**: `GET /users.lookupByEmail` (Default (slack))
- **Notes**: Find a user with an email address.
- **Signature**: `UsersLookupByEmail1(string token, string email, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `email` ← `email`
- **Returns**: `UsersLookupByEmailsuccessschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

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

### UsersSetActive
- **HTTP**: `POST /users.setActive` (Default (slack))
- **Notes**: Marked a user as active. Deprecated and non-functional.
- **Signature**: `UsersSetActive(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UsersSetActiveschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersSetActive1
- **HTTP**: `POST /users.setActive` (Default (slack))
- **Notes**: Marked a user as active. Deprecated and non-functional.
- **Signature**: `UsersSetActive1(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UsersSetActiveschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersSetPhoto
- **HTTP**: `POST /users.setPhoto` (Default (slack))
- **Notes**: Set the user profile photo
- **Signature**: `UsersSetPhoto(ContentType contentType, string token, string? cropW, string? cropX, string? cropY, string? image, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cropW` … `image`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `crop_w` ← `cropW`, `crop_x` ← `cropX`, `crop_y` ← `cropY`, `image` ← `image`
- **Returns**: `UsersSetPhotoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersSetPhoto1
- **HTTP**: `POST /users.setPhoto` (Default (slack))
- **Notes**: Set the user profile photo
- **Signature**: `UsersSetPhoto1(ContentType contentType, string token, string? cropW, string? cropX, string? cropY, string? image, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cropW` … `image`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `crop_w` ← `cropW`, `crop_x` ← `cropX`, `crop_y` ← `cropY`, `image` ← `image`
- **Returns**: `UsersSetPhotoschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersSetPresence
- **HTTP**: `POST /users.setPresence` (Default (slack))
- **Notes**: Manually sets user presence.
- **Signature**: `UsersSetPresence(string token, ContentType contentType, string presence, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `presence` ← `presence`
- **Returns**: `UsersSetPresenceschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UsersSetPresence1
- **HTTP**: `POST /users.setPresence` (Default (slack))
- **Notes**: Manually sets user presence.
- **Signature**: `UsersSetPresence1(string token, ContentType contentType, string presence, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `presence` ← `presence`
- **Returns**: `UsersSetPresenceschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
