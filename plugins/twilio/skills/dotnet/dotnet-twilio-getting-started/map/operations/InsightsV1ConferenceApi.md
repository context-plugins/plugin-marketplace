<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1ConferenceApi — operations

Accessor: `client.InsightsV1ConferenceApi` · Source: `Api/InsightsV1ConferenceApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConference2

- **Server group**: `Default14`
- **Signature**: `FetchConference2(string conferenceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InsightsV1Conference`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1Conference` | `Models/InsightsV1Conference.cs` |

### ListConference2

- **Server group**: `Default14`
- **Signature**: `ListConference2(string? conferenceSid, string? friendlyName, string? status, string? createdAfter, string? createdBefore, string? mixerRegion, string? tags, string? subaccount, string? detectedIssues, string? endReason, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`conferenceSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ConferenceSid` ← `conferenceSid`, `FriendlyName` ← `friendlyName`, `Status` ← `status`, `CreatedAfter` ← `createdAfter`, `CreatedBefore` ← `createdBefore`, `MixerRegion` ← `mixerRegion`, `Tags` ← `tags`, `Subaccount` ← `subaccount`, `DetectedIssues` ← `detectedIssues`, `EndReason` ← `endReason`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConferenceResponse1` | `Models/ListConferenceResponse1.cs` |

