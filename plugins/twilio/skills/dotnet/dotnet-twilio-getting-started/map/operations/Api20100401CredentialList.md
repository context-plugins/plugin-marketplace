<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CredentialList — operations

Accessor: `client.Api20100401CredentialList` · Source: `Api/Api20100401CredentialList.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipCredentialList

- **Signature**: `CreateSipCredentialList(string accountSid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipCredentialList` | `Models/ApiV2010AccountSipSipCredentialList.cs` |

### DeleteSipCredentialList

- **Signature**: `DeleteSipCredentialList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipCredentialList

- **Signature**: `FetchSipCredentialList(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipCredentialList` | `Models/ApiV2010AccountSipSipCredentialList.cs` |

### ListSipCredentialList

- **Signature**: `ListSipCredentialList(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipCredentialListResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipCredentialListResponse` | `Models/ListSipCredentialListResponse.cs` |

### UpdateSipCredentialList

- **Signature**: `UpdateSipCredentialList(string accountSid, string sid, string friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipCredentialList` | `Models/ApiV2010AccountSipSipCredentialList.cs` |

