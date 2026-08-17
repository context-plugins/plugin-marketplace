<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsQuestionnairesQuestionApi — operations

Accessor: `client.FlexV1InsightsQuestionnairesQuestionApi` · Source: `Api/FlexV1InsightsQuestionnairesQuestionApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInsightsQuestionnairesQuestion

- **Server group**: `Default13`
- **Signature**: `CreateInsightsQuestionnairesQuestion(string? authorization, string categorySid, string question, string answerSetId, bool allowNa, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
  - `description` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsQuestionnairesQuestion`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnairesQuestion` | `Models/FlexV1InsightsQuestionnairesQuestion.cs` |

### DeleteInsightsQuestionnairesQuestion

- **Server group**: `Default13`
- **Signature**: `DeleteInsightsQuestionnairesQuestion(string questionSid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### ListInsightsQuestionnairesQuestion

- **Server group**: `Default13`
- **Signature**: `ListInsightsQuestionnairesQuestion(IReadOnlyList<string>? categorySid, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`categorySid` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `CategorySid` ← `categorySid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsQuestionnairesQuestionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsQuestionnairesQuestionResponse` | `Models/ListInsightsQuestionnairesQuestionResponse.cs` |

### UpdateInsightsQuestionnairesQuestion

- **Server group**: `Default13`
- **Signature**: `UpdateInsightsQuestionnairesQuestion(string questionSid, string? authorization, bool allowNa, string? categorySid, string? question, string? description, string? answerSetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`authorization` … `answerSetId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1InsightsQuestionnairesQuestion`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnairesQuestion` | `Models/FlexV1InsightsQuestionnairesQuestion.cs` |

