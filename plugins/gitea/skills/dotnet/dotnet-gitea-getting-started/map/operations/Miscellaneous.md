# Miscellaneous — operations

Accessor: `client.Miscellaneous` · Source: `Api/Miscellaneous.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteCurrentToken
- **HTTP**: `DELETE /token` (Server1 (gitea))
- **Signature**: `DeleteCurrentToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCurrentToken
- **HTTP**: `GET /token` (Server1 (gitea))
- **Signature**: `GetCurrentToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CurrentAccessTokenRepresentsTheMetadataOfTheCurrentlyAuthenticatedToken`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetGitignoreTemplateInfo
- **HTTP**: `GET /gitignore/templates/{name}` (Server1 (gitea))
- **Signature**: `GetGitignoreTemplateInfo(string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GitignoreTemplateInfo`
- **Error**: `SdkException<GetGitignoreTemplateInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLabelTemplateInfo
- **HTTP**: `GET /label/templates/{name}` (Server1 (gitea))
- **Signature**: `GetLabelTemplateInfo(string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LabelTemplate>`
- **Error**: `SdkException<GetLabelTemplateInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLicenseTemplateInfo
- **HTTP**: `GET /licenses/{name}` (Server1 (gitea))
- **Signature**: `GetLicenseTemplateInfo(string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LicenseTemplateInfo`
- **Error**: `SdkException<GetLicenseTemplateInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSigningKey
- **HTTP**: `GET /signing-key.gpg` (Server1 (gitea))
- **Signature**: `GetSigningKey(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSigningKeySsh
- **HTTP**: `GET /signing-key.pub` (Server1 (gitea))
- **Signature**: `GetSigningKeySsh(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVersion
- **HTTP**: `GET /version` (Server1 (gitea))
- **Signature**: `GetVersion(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ServerVersion`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListGitignoresTemplates
- **HTTP**: `GET /gitignore/templates` (Server1 (gitea))
- **Signature**: `ListGitignoresTemplates(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLabelTemplates
- **HTTP**: `GET /label/templates` (Server1 (gitea))
- **Signature**: `ListLabelTemplates(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLicenseTemplates
- **HTTP**: `GET /licenses` (Server1 (gitea))
- **Signature**: `ListLicenseTemplates(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<LicensesTemplateListEntry>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RenderMarkdown
- **HTTP**: `POST /markdown` (Server1 (gitea))
- **Signature**: `RenderMarkdown(MarkdownOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenderMarkdownError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RenderMarkdownRaw
- **HTTP**: `POST /markdown/raw` (Server1 (gitea))
- **Signature**: `RenderMarkdownRaw(string body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenderMarkdownRawError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RenderMarkup
- **HTTP**: `POST /markup` (Server1 (gitea))
- **Signature**: `RenderMarkup(MarkupOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenderMarkupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
