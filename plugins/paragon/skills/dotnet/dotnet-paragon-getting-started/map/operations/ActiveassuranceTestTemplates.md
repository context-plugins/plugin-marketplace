# ActiveassuranceTestTemplates — operations

Accessor: `client.ActiveassuranceTestTemplates` · Source: `Api/ActiveassuranceTestTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TestServiceCreateTestTemplate
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_templates` (Default)
- **Signature**: `TestServiceCreateTestTemplate(string orgId, bool? validateOnly, TestTemplate testTemplate, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `TestTemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceDeleteTestTemplate
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/test_templates/{test_template_id}` (Default)
- **Signature**: `TestServiceDeleteTestTemplate(string orgId, string testTemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceGetTestTemplate
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_templates/{test_template_id}` (Default)
- **Signature**: `TestServiceGetTestTemplate(string orgId, string testTemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestTemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestServiceListTestTemplates
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_templates` (Default)
- **Signature**: `TestServiceListTestTemplates(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListTestTemplatesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestServiceUpdateTestTemplate
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/test_templates/{test_template_id}` (Default)
- **Signature**: `TestServiceUpdateTestTemplate(string orgId, string testTemplateId, string? updateMask, bool? validateOnly, TestTemplate testTemplate, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `TestTemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
