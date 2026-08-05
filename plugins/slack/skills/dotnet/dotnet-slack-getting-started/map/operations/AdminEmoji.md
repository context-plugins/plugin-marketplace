# AdminEmoji — operations

Accessor: `client.AdminEmoji` · Source: `Api/AdminEmoji.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminEmojiAdd
- **HTTP**: `POST /admin.emoji.add` (Default (slack))
- **Notes**: Add an emoji.
- **Signature**: `AdminEmojiAdd(ContentType contentType, string token, string name, string url, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `url` ← `url`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAdd1
- **HTTP**: `POST /admin.emoji.add` (Default (slack))
- **Notes**: Add an emoji.
- **Signature**: `AdminEmojiAdd1(ContentType contentType, string token, string name, string url, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `url` ← `url`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAddAlias
- **HTTP**: `POST /admin.emoji.addAlias` (Default (slack))
- **Notes**: Add an emoji alias.
- **Signature**: `AdminEmojiAddAlias(ContentType contentType, string token, string name, string aliasFor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `alias_for` ← `aliasFor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiAddAlias1
- **HTTP**: `POST /admin.emoji.addAlias` (Default (slack))
- **Notes**: Add an emoji alias.
- **Signature**: `AdminEmojiAddAlias1(ContentType contentType, string token, string name, string aliasFor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `alias_for` ← `aliasFor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiList
- **HTTP**: `GET /admin.emoji.list` (Default (slack))
- **Notes**: List emoji for an Enterprise Grid organization.
- **Signature**: `AdminEmojiList(string token, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiList1
- **HTTP**: `GET /admin.emoji.list` (Default (slack))
- **Notes**: List emoji for an Enterprise Grid organization.
- **Signature**: `AdminEmojiList1(string token, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRemove
- **HTTP**: `POST /admin.emoji.remove` (Default (slack))
- **Notes**: Remove an emoji across an Enterprise Grid organization
- **Signature**: `AdminEmojiRemove(ContentType contentType, string token, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRemove1
- **HTTP**: `POST /admin.emoji.remove` (Default (slack))
- **Notes**: Remove an emoji across an Enterprise Grid organization
- **Signature**: `AdminEmojiRemove1(ContentType contentType, string token, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRename
- **HTTP**: `POST /admin.emoji.rename` (Default (slack))
- **Notes**: Rename an emoji.
- **Signature**: `AdminEmojiRename(ContentType contentType, string token, string name, string newName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `new_name` ← `newName`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminEmojiRename1
- **HTTP**: `POST /admin.emoji.rename` (Default (slack))
- **Notes**: Rename an emoji.
- **Signature**: `AdminEmojiRename1(ContentType contentType, string token, string name, string newName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `name` ← `name`, `new_name` ← `newName`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
