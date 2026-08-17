<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1UserApi — operations

Accessor: `client.ConversationsV1UserApi` · Source: `Api/ConversationsV1UserApi.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateServiceUser

- **Server group**: `Default7`
- **Signature**: `CreateServiceUser(string chatServiceSid, Confirmation? xTwilioWebhookEnabled, string identity, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ServiceServiceUser` | `Models/ConversationsV1ServiceServiceUser.cs` |

### CreateUser

- **Server group**: `Default7`
- **Signature**: `CreateUser(Confirmation? xTwilioWebhookEnabled, string identity, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1User`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1User` | `Models/ConversationsV1User.cs` |

### DeleteServiceUser

- **Server group**: `Default7`
- **Signature**: `DeleteServiceUser(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### DeleteUser

- **Server group**: `Default7`
- **Signature**: `DeleteUser(string sid, Confirmation? xTwilioWebhookEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xTwilioWebhookEnabled` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |

### FetchServiceUser

- **Server group**: `Default7`
- **Signature**: `FetchServiceUser(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceUser` | `Models/ConversationsV1ServiceServiceUser.cs` |

### FetchUser

- **Server group**: `Default7`
- **Signature**: `FetchUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1User`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1User` | `Models/ConversationsV1User.cs` |

### ListServiceUser

- **Server group**: `Default7`
- **Signature**: `ListServiceUser(string chatServiceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceUserResponse` | `Models/ListServiceUserResponse.cs` |

### ListUser

- **Server group**: `Default7`
- **Signature**: `ListUser(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListUserResponse` | `Models/ListUserResponse.cs` |

### UpdateServiceUser

- **Server group**: `Default7`
- **Signature**: `UpdateServiceUser(string chatServiceSid, string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1ServiceServiceUser` | `Models/ConversationsV1ServiceServiceUser.cs` |

### UpdateUser

- **Server group**: `Default7`
- **Signature**: `UpdateUser(string sid, Confirmation? xTwilioWebhookEnabled, string? friendlyName, string? attributes, string? roleSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`xTwilioWebhookEnabled` … `roleSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1User`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ConversationsV1User` | `Models/ConversationsV1User.cs` |

