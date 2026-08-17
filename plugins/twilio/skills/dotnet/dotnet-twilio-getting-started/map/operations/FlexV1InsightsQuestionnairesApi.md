<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsQuestionnairesApi — operations

Accessor: `client.FlexV1InsightsQuestionnairesApi` · Source: `Api/FlexV1InsightsQuestionnairesApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInsightsQuestionnaires

- **Server group**: `Default13`
- **Signature**: `CreateInsightsQuestionnaires(string? authorization, string name, string? description, bool? active, IReadOnlyList<string>? questionSids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`authorization` … `questionSids`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnaires` | `Models/FlexV1InsightsQuestionnaires.cs` |

### DeleteInsightsQuestionnaires

- **Server group**: `Default13`
- **Signature**: `DeleteInsightsQuestionnaires(string questionnaireSid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchInsightsQuestionnaires

- **Server group**: `Default13`
- **Signature**: `FetchInsightsQuestionnaires(string questionnaireSid, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authorization` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnaires` | `Models/FlexV1InsightsQuestionnaires.cs` |

### ListInsightsQuestionnaires

- **Server group**: `Default13`
- **Signature**: `ListInsightsQuestionnaires(bool? includeInactive, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`includeInactive` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `IncludeInactive` ← `includeInactive`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsQuestionnairesResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListInsightsQuestionnairesResponse` | `Models/ListInsightsQuestionnairesResponse.cs` |

### UpdateInsightsQuestionnaires

- **Server group**: `Default13`
- **Signature**: `UpdateInsightsQuestionnaires(string questionnaireSid, string? authorization, bool active, string? name, string? description, IReadOnlyList<string>? questionSids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`authorization` … `questionSids`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1InsightsQuestionnaires`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1InsightsQuestionnaires` | `Models/FlexV1InsightsQuestionnaires.cs` |

