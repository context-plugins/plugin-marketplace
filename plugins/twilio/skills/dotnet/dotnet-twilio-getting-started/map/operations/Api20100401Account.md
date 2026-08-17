<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Account — operations

Accessor: `client.Api20100401Account` · Source: `Api/Api20100401Account.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAccount

- **Signature**: `CreateAccount(string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010Account`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010Account` | `Models/ApiV2010Account.cs` |

### FetchAccount

- **Signature**: `FetchAccount(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010Account`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010Account` | `Models/ApiV2010Account.cs` |

### ListAccount

- **Signature**: `ListAccount(string? friendlyName, AccountEnumStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAccountResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AccountEnumStatus` | `Models/Enums/AccountEnumStatus.cs` |
| `ListAccountResponse` | `Models/ListAccountResponse.cs` |

### UpdateAccount

- **Signature**: `UpdateAccount(string sid, string? friendlyName, AccountEnumStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010Account`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AccountEnumStatus` | `Models/Enums/AccountEnumStatus.cs` |
| `ApiV2010Account` | `Models/ApiV2010Account.cs` |

