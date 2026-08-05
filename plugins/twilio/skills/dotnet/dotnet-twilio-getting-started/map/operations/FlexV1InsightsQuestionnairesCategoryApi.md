# FlexV1InsightsQuestionnairesCategoryApi — operations

Accessor: `client.FlexV1InsightsQuestionnairesCategoryApi` · Source: `Api/FlexV1InsightsQuestionnairesCategoryApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInsightsQuestionnairesCategory
- **HTTP**: `POST /v1/Insights/QualityManagement/Categories` (Default3 (flex-api))
- **Notes**: To create a category for Questions
- **Signature**: `CreateInsightsQuestionnairesCategory(string? authorization, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Name` ← `name`
- **Returns**: `FlexV1InsightsQuestionnairesCategory`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInsightsQuestionnairesCategory
- **HTTP**: `DELETE /v1/Insights/QualityManagement/Categories/{CategorySid}` (Default3 (flex-api))
- **Signature**: `DeleteInsightsQuestionnairesCategory(string categorySid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInsightsQuestionnairesCategory
- **HTTP**: `GET /v1/Insights/QualityManagement/Categories` (Default3 (flex-api))
- **Notes**: To get all the categories
- **Signature**: `ListInsightsQuestionnairesCategory(long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsQuestionnairesCategoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateInsightsQuestionnairesCategory
- **HTTP**: `POST /v1/Insights/QualityManagement/Categories/{CategorySid}` (Default3 (flex-api))
- **Notes**: To update the category for Questions
- **Signature**: `UpdateInsightsQuestionnairesCategory(string categorySid, string? authorization, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Name` ← `name`
- **Returns**: `FlexV1InsightsQuestionnairesCategory`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
