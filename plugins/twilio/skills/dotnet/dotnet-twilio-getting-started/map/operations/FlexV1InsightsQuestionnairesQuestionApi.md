# FlexV1InsightsQuestionnairesQuestionApi — operations

Accessor: `client.FlexV1InsightsQuestionnairesQuestionApi` · Source: `Api/FlexV1InsightsQuestionnairesQuestionApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInsightsQuestionnairesQuestion
- **HTTP**: `POST /v1/Insights/QualityManagement/Questions` (Default13 (flex-api))
- **Notes**: To create a question for a Category
- **Signature**: `CreateInsightsQuestionnairesQuestion(string? authorization, string categorySid, string question, string answerSetId, bool allowNa, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - `description` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CategorySid` ← `categorySid`, `Question` ← `question`, `AnswerSetId` ← `answerSetId`, `AllowNa` ← `allowNa`, `Description` ← `description`
- **Returns**: `FlexV1InsightsQuestionnairesQuestion`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInsightsQuestionnairesQuestion
- **HTTP**: `DELETE /v1/Insights/QualityManagement/Questions/{QuestionSid}` (Default13 (flex-api))
- **Signature**: `DeleteInsightsQuestionnairesQuestion(string questionSid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInsightsQuestionnairesQuestion
- **HTTP**: `GET /v1/Insights/QualityManagement/Questions` (Default13 (flex-api))
- **Notes**: To get all the question for the given categories
- **Signature**: `ListInsightsQuestionnairesQuestion(IReadOnlyList<string>? categorySid, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`categorySid` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CategorySid` ← `categorySid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsQuestionnairesQuestionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateInsightsQuestionnairesQuestion
- **HTTP**: `POST /v1/Insights/QualityManagement/Questions/{QuestionSid}` (Default13 (flex-api))
- **Notes**: To update the question
- **Signature**: `UpdateInsightsQuestionnairesQuestion(string questionSid, string? authorization, bool allowNa, string? categorySid, string? question, string? description, string? answerSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`authorization` … `answerSetId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AllowNa` ← `allowNa`, `CategorySid` ← `categorySid`, `Question` ← `question`, `Description` ← `description`, `AnswerSetId` ← `answerSetId`
- **Returns**: `FlexV1InsightsQuestionnairesQuestion`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
