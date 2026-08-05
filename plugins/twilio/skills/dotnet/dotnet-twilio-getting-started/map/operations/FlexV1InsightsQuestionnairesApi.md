# FlexV1InsightsQuestionnairesApi — operations

Accessor: `client.FlexV1InsightsQuestionnairesApi` · Source: `Api/FlexV1InsightsQuestionnairesApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInsightsQuestionnaires
- **HTTP**: `POST /v1/Insights/QualityManagement/Questionnaires` (Default3 (flex-api))
- **Notes**: To create a Questionnaire
- **Signature**: `CreateInsightsQuestionnaires(string? authorization, string name, string? description, bool? active, IReadOnlyList<string>? questionSids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`authorization` … `questionSids`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Name` ← `name`, `Description` ← `description`, `Active` ← `active`, `QuestionSids` ← `questionSids`
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInsightsQuestionnaires
- **HTTP**: `DELETE /v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}` (Default3 (flex-api))
- **Notes**: To delete the questionnaire
- **Signature**: `DeleteInsightsQuestionnaires(string questionnaireSid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchInsightsQuestionnaires
- **HTTP**: `GET /v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}` (Default3 (flex-api))
- **Notes**: To get the Questionnaire Detail
- **Signature**: `FetchInsightsQuestionnaires(string questionnaireSid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInsightsQuestionnaires
- **HTTP**: `GET /v1/Insights/QualityManagement/Questionnaires` (Default3 (flex-api))
- **Notes**: To get all questionnaires with questions
- **Signature**: `ListInsightsQuestionnaires(bool? includeInactive, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`includeInactive` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IncludeInactive` ← `includeInactive`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsQuestionnairesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateInsightsQuestionnaires
- **HTTP**: `POST /v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}` (Default3 (flex-api))
- **Notes**: To update the questionnaire
- **Signature**: `UpdateInsightsQuestionnaires(string questionnaireSid, string? authorization, bool active, string? name, string? description, IReadOnlyList<string>? questionSids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`authorization` … `questionSids`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Active` ← `active`, `Name` ← `name`, `Description` ← `description`, `QuestionSids` ← `questionSids`
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
