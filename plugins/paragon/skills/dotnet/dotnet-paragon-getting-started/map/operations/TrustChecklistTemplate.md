# TrustChecklistTemplate — operations

Accessor: `client.TrustChecklistTemplate` · Source: `Api/TrustChecklistTemplate.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChecklistServiceCreateTemplate
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/checklist/templates` (Default)
- **Signature**: `ChecklistServiceCreateTemplate(string orgId, ChecklistServiceCreateTemplateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistCreateTemplateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceDeleteTemplate
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/checklist/templates/{id}` (Default)
- **Signature**: `ChecklistServiceDeleteTemplate(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceListTemplates
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/checklist/templates` (Default)
- **Signature**: `ChecklistServiceListTemplates(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistListTemplatesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceReadTemplate
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/checklist/templates/{id}` (Default)
- **Signature**: `ChecklistServiceReadTemplate(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistReadTemplateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
