<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1CredentialApi — operations

Accessor: `client.ConversationsV1CredentialApi` · Source: `Api/ConversationsV1CredentialApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCredential

- **Server group**: `Default7`
- **Signature**: `CreateCredential(CredentialEnumPushType type, string? friendlyName, string? certificate, string? privateKey, bool? sandbox, string? apiKey, string? secret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `secret`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1Credential`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CredentialEnumPushType` | `Models/Enums/CredentialEnumPushType.cs` |
| `ConversationsV1Credential` | `Models/ConversationsV1Credential.cs` |

### DeleteCredential

- **Server group**: `Default7`
- **Signature**: `DeleteCredential(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchCredential

- **Server group**: `Default7`
- **Signature**: `FetchCredential(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1Credential`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1Credential` | `Models/ConversationsV1Credential.cs` |

### ListCredential

- **Server group**: `Default7`
- **Signature**: `ListCredential(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCredentialResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCredentialResponse` | `Models/ListCredentialResponse.cs` |

### UpdateCredential

- **Server group**: `Default7`
- **Signature**: `UpdateCredential(string sid, CredentialEnumPushType? type, string? friendlyName, string? certificate, string? privateKey, bool? sandbox, string? apiKey, string? secret, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`type` … `secret`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1Credential`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CredentialEnumPushType` | `Models/Enums/CredentialEnumPushType.cs` |
| `ConversationsV1Credential` | `Models/ConversationsV1Credential.cs` |

