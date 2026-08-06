# InsightsV1ConferenceApi — operations

Accessor: `client.InsightsV1ConferenceApi` · Source: `Api/InsightsV1ConferenceApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchConference2
- **HTTP**: `GET /v1/Conferences/{ConferenceSid}` (Default14 (insights))
- **Notes**: Get a specific Conference Summary.
- **Signature**: `FetchConference2(string conferenceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV1Conference`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListConference2
- **HTTP**: `GET /v1/Conferences` (Default14 (insights))
- **Notes**: Get a list of Conference Summaries.
- **Signature**: `ListConference2(string? conferenceSid, string? friendlyName, string? status, string? createdAfter, string? createdBefore, string? mixerRegion, string? tags, string? subaccount, string? detectedIssues, string? endReason, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`conferenceSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ConferenceSid` ← `conferenceSid`, `FriendlyName` ← `friendlyName`, `Status` ← `status`, `CreatedAfter` ← `createdAfter`, `CreatedBefore` ← `createdBefore`, `MixerRegion` ← `mixerRegion`, `Tags` ← `tags`, `Subaccount` ← `subaccount`, `DetectedIssues` ← `detectedIssues`, `EndReason` ← `endReason`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
