# FlexV1Assessments — operations

Accessor: `client.FlexV1Assessments` · Source: `Api/FlexV1Assessments.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateInsightsAssessments
- **HTTP**: `POST /v1/Insights/QualityManagement/Assessments` (Default13 (flex-api))
- **Notes**: Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
- **Signature**: `CreateInsightsAssessments(string? authorization, string categorySid, string categoryName, string segmentId, string agentId, double offset, string metricId, string metricName, string answerText, string answerId, string questionnaireSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CategorySid` ← `categorySid`, `CategoryName` ← `categoryName`, `SegmentId` ← `segmentId`, `AgentId` ← `agentId`, `Offset` ← `offset`, `MetricId` ← `metricId`, `MetricName` ← `metricName`, `AnswerText` ← `answerText`, `AnswerId` ← `answerId`, `QuestionnaireSid` ← `questionnaireSid`
- **Returns**: `FlexV1InsightsAssessments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInsightsAssessments
- **HTTP**: `GET /v1/Insights/QualityManagement/Assessments` (Default13 (flex-api))
- **Notes**: Get assessments done for a conversation by logged in user
- **Signature**: `ListInsightsAssessments(string? segmentId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsAssessmentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateInsightsAssessments
- **HTTP**: `POST /v1/Insights/QualityManagement/Assessments/{AssessmentSid}` (Default13 (flex-api))
- **Notes**: Update a specific Assessment assessed earlier
- **Signature**: `UpdateInsightsAssessments(string assessmentSid, string? authorization, double offset, string answerText, string answerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Offset` ← `offset`, `AnswerText` ← `answerText`, `AnswerId` ← `answerId`
- **Returns**: `FlexV1InsightsAssessments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
