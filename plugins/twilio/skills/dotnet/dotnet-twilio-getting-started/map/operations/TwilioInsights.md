<!-- Generated file — do not edit; regenerated with the SDK. -->

# TwilioInsights — operations

Accessor: `client.TwilioInsights` · Source: `Api/TwilioInsights.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateQueryResults

- **Server group**: `Default14`
- **Signature**: `CreateQueryResults(int? pageSize, InsightsQueryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageSize` ← `pageSize`
- **Returns**: `InsightsQueryResponse`
- **Error**: `SdkException<CreateQueryResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV3InsightsDomainsConversationsQuery400Error1(out V3InsightsDomainsConversationsQuery400Error1)` [400] · `TryGetV3InsightsDomainsConversationsQuery429Error1(out V3InsightsDomainsConversationsQuery429Error1)` [429] · `TryGetV3InsightsDomainsConversationsQuery500Error1(out V3InsightsDomainsConversationsQuery500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `InsightsQueryRequest` | `Models/InsightsQueryRequest.cs` |
| `InsightsQueryResponse` | `Models/InsightsQueryResponse.cs` |
| `CreateQueryResultsError` | `Errors/CreateQueryResultsError.cs` |
| `V3InsightsDomainsConversationsQuery400Error1` | `Models/V3InsightsDomainsConversationsQuery400Error1.cs` |
| `V3InsightsDomainsConversationsQuery429Error1` | `Models/V3InsightsDomainsConversationsQuery429Error1.cs` |
| `V3InsightsDomainsConversationsQuery500Error1` | `Models/V3InsightsDomainsConversationsQuery500Error1.cs` |

### FetchMetadata

- **Server group**: `Default14`
- **Signature**: `FetchMetadata(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InsightsMetadataResponse`
- **Error**: `SdkException<FetchMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetV3InsightsDomainsConversationsMetadata400Error1(out V3InsightsDomainsConversationsMetadata400Error1)` [400] · `TryGetV3InsightsDomainsConversationsMetadata429Error1(out V3InsightsDomainsConversationsMetadata429Error1)` [429] · `TryGetV3InsightsDomainsConversationsMetadata500Error1(out V3InsightsDomainsConversationsMetadata500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `InsightsMetadataResponse` | `Models/InsightsMetadataResponse.cs` |
| `FetchMetadataError` | `Errors/FetchMetadataError.cs` |
| `V3InsightsDomainsConversationsMetadata400Error1` | `Models/V3InsightsDomainsConversationsMetadata400Error1.cs` |
| `V3InsightsDomainsConversationsMetadata429Error1` | `Models/V3InsightsDomainsConversationsMetadata429Error1.cs` |
| `V3InsightsDomainsConversationsMetadata500Error1` | `Models/V3InsightsDomainsConversationsMetadata500Error1.cs` |

### FetchQueryResults

- **Server group**: `Default14`
- **Signature**: `FetchQueryResults(string pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `pageToken` ← `pageToken`
- **Returns**: `InsightsQueryResponse`
- **Error**: `SdkException<FetchQueryResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV3InsightsDomainsConversationsQuery400Error1(out V3InsightsDomainsConversationsQuery400Error1)` [400] · `TryGetV3InsightsDomainsConversationsQuery429Error1(out V3InsightsDomainsConversationsQuery429Error1)` [429] · `TryGetV3InsightsDomainsConversationsQuery500Error1(out V3InsightsDomainsConversationsQuery500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `InsightsQueryResponse` | `Models/InsightsQueryResponse.cs` |
| `FetchQueryResultsError` | `Errors/FetchQueryResultsError.cs` |
| `V3InsightsDomainsConversationsQuery400Error1` | `Models/V3InsightsDomainsConversationsQuery400Error1.cs` |
| `V3InsightsDomainsConversationsQuery429Error1` | `Models/V3InsightsDomainsConversationsQuery429Error1.cs` |
| `V3InsightsDomainsConversationsQuery500Error1` | `Models/V3InsightsDomainsConversationsQuery500Error1.cs` |

