<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Conference — operations

Accessor: `client.Api20100401Conference` · Source: `Api/Api20100401Conference.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConference

- **Signature**: `FetchConference(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountConference`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountConference` | `Models/ApiV2010AccountConference.cs` |

### ListConference

- **Signature**: `ListConference(string accountSid, DateTimeOffset? dateCreated, DateTimeOffset? dateCreatedQuery, DateTimeOffset? dateCreatedQueryQuery, DateTimeOffset? dateUpdated, DateTimeOffset? dateUpdatedQuery, DateTimeOffset? dateUpdatedQueryQuery, string? friendlyName, ConferenceEnumStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`dateCreated` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `DateCreated` ← `dateCreated`, `DateCreated<` ← `dateCreatedQuery`, `DateCreated>` ← `dateCreatedQueryQuery`, `DateUpdated` ← `dateUpdated`, `DateUpdated<` ← `dateUpdatedQuery`, `DateUpdated>` ← `dateUpdatedQueryQuery`, `FriendlyName` ← `friendlyName`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConferenceEnumStatus` | `Models/Enums/ConferenceEnumStatus.cs` |
| `ListConferenceResponse` | `Models/ListConferenceResponse.cs` |

### UpdateConference

- **Signature**: `UpdateConference(string accountSid, string sid, ConferenceEnumUpdateStatus? status, string? announceUrl, AnnounceMethod? announceMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `announceUrl` — nullable, no default → **must pass explicitly**
  - `announceMethod` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountConference`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConferenceEnumUpdateStatus` | `Models/Enums/ConferenceEnumUpdateStatus.cs` |
| `AnnounceMethod` | `Models/Enums/AnnounceMethod.cs` |
| `ApiV2010AccountConference` | `Models/ApiV2010AccountConference.cs` |

