# TwilioInsights — operations

Accessor: `client.TwilioInsights` · Source: `Api/TwilioInsights.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateQueryResults
- **HTTP**: `POST /v3/InsightsDomains/Conversations/Query` (Default14 (insights))
- **Notes**: Execute a semantic query against the Conversations domain.
- **Signature**: `CreateQueryResults(int? pageSize, InsightsQueryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageSize` ← `pageSize`
- **Returns**: `InsightsQueryResponse`
- **Error**: `SdkException<CreateQueryResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV3InsightsDomainsConversationsQuery400Error1(out V3InsightsDomainsConversationsQuery400Error1)` [400] · `TryGetV3InsightsDomainsConversationsQuery429Error1(out V3InsightsDomainsConversationsQuery429Error1)` [429] · `TryGetV3InsightsDomainsConversationsQuery500Error1(out V3InsightsDomainsConversationsQuery500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchMetadata
- **HTTP**: `GET /v3/InsightsDomains/Conversations/Metadata` (Default14 (insights))
- **Notes**: Fetch Metadata for the Conversations domain.
- **Signature**: `FetchMetadata(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsMetadataResponse`
- **Error**: `SdkException<FetchMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetV3InsightsDomainsConversationsMetadata400Error1(out V3InsightsDomainsConversationsMetadata400Error1)` [400] · `TryGetV3InsightsDomainsConversationsMetadata429Error1(out V3InsightsDomainsConversationsMetadata429Error1)` [429] · `TryGetV3InsightsDomainsConversationsMetadata500Error1(out V3InsightsDomainsConversationsMetadata500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FetchQueryResults
- **HTTP**: `GET /v3/InsightsDomains/Conversations/Query` (Default14 (insights))
- **Signature**: `FetchQueryResults(string pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageToken` ← `pageToken`
- **Returns**: `InsightsQueryResponse`
- **Error**: `SdkException<FetchQueryResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV3InsightsDomainsConversationsQuery400Error1(out V3InsightsDomainsConversationsQuery400Error1)` [400] · `TryGetV3InsightsDomainsConversationsQuery429Error1(out V3InsightsDomainsConversationsQuery429Error1)` [429] · `TryGetV3InsightsDomainsConversationsQuery500Error1(out V3InsightsDomainsConversationsQuery500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
