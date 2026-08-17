<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Member — operations

Accessor: `client.Api20100401Member` · Source: `Api/Api20100401Member.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchMember

- **Signature**: `FetchMember(string accountSid, string queueSid, string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountQueueMember`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountQueueMember` | `Models/ApiV2010AccountQueueMember.cs` |

### ListMember

- **Signature**: `ListMember(string accountSid, string queueSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMemberResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMemberResponse` | `Models/ListMemberResponse.cs` |

### UpdateMember

- **Signature**: `UpdateMember(string accountSid, string queueSid, string callSid, string url, Method2? method, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `method` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountQueueMember`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Method2` | `Models/Enums/Method2.cs` |
| `ApiV2010AccountQueueMember` | `Models/ApiV2010AccountQueueMember.cs` |

