<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsQuestionnairesCategoryApi — operations

Accessor: `client.FlexV1InsightsQuestionnairesCategoryApi` · Source: `Api/FlexV1InsightsQuestionnairesCategoryApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInsightsQuestionnairesCategory

- **Server group**: `Default13`
- **Signature**: `CreateInsightsQuestionnairesCategory(string? authorization, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsQuestionnairesCategory`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnairesCategory` | `Models/FlexV1InsightsQuestionnairesCategory.cs` |

### DeleteInsightsQuestionnairesCategory

- **Server group**: `Default13`
- **Signature**: `DeleteInsightsQuestionnairesCategory(string categorySid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### ListInsightsQuestionnairesCategory

- **Server group**: `Default13`
- **Signature**: `ListInsightsQuestionnairesCategory(long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsQuestionnairesCategoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsQuestionnairesCategoryResponse` | `Models/ListInsightsQuestionnairesCategoryResponse.cs` |

### UpdateInsightsQuestionnairesCategory

- **Server group**: `Default13`
- **Signature**: `UpdateInsightsQuestionnairesCategory(string categorySid, string? authorization, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsQuestionnairesCategory`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnairesCategory` | `Models/FlexV1InsightsQuestionnairesCategory.cs` |

