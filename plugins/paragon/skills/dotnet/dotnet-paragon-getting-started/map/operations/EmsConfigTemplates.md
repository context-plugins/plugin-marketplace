# EmsConfigTemplates — operations

Accessor: `client.EmsConfigTemplates` · Source: `Api/EmsConfigTemplates.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTemplates
- **HTTP**: `POST /api/v1/configtemplates/{org_id}` (Default)
- **Signature**: `CreateTemplates(string orgId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExecuteTemplate
- **HTTP**: `POST /api/v1/configtemplates/{org_id}/{template_id}/execute` (Default)
- **Signature**: `ExecuteTemplate(string orgId, string templateId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFormatsForVendor
- **HTTP**: `GET /api/v1/configtemplates/{org_id}/formats/{vendor_name}` (Default)
- **Notes**: Return the list of supported configuration-template formats (type choices) for the given device vendor. Drives the format selector in the template UI.
- **Signature**: `GetFormatsForVendor(string orgId, string vendorName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<IReadOnlyList<string>>`
- **Error**: `SdkException<GetFormatsForVendorError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTemplate
- **HTTP**: `GET /api/v1/configtemplates/{org_id}/{template_id}` (Default)
- **Signature**: `GetTemplate(string orgId, string templateId, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTemplates
- **HTTP**: `GET /api/v1/configtemplates/{org_id}` (Default)
- **Signature**: `GetTemplates(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RenderTemplate
- **HTTP**: `POST /api/v1/configtemplates/{org_id}/{template_id}/render` (Default)
- **Signature**: `RenderTemplate(string orgId, string templateId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RenderTemplateFromRequest
- **HTTP**: `POST /api/v1/configtemplates/{org_id}/render` (Default)
- **Notes**: Render an ad-hoc configuration template against supplied device variables without saving it. Used for live config preview in the template editor. Requires Org Network Admin privileges.
- **Signature**: `RenderTemplateFromRequest(string orgId, string? xCsrftoken, ApiV1ConfigtemplatesRenderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RenderTemplateFromRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTemplate
- **HTTP**: `PUT /api/v1/configtemplates/{org_id}/{template_id}` (Default)
- **Signature**: `UpdateTemplate(string orgId, string templateId, string? xCsrftoken, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
