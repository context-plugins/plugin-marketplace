<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Credential — operations

Accessor: `client.Api20100401Credential` · Source: `Api/Api20100401Credential.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipCredential

- **Signature**: `CreateSipCredential(string accountSid, string credentialListSid, string username, string password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipCredentialListSipCredential`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `Models/ApiV2010AccountSipSipCredentialListSipCredential.cs` |

### DeleteSipCredential

- **Signature**: `DeleteSipCredential(string accountSid, string credentialListSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipCredential

- **Signature**: `FetchSipCredential(string accountSid, string credentialListSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipCredentialListSipCredential`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `Models/ApiV2010AccountSipSipCredentialListSipCredential.cs` |

### ListSipCredential

- **Signature**: `ListSipCredential(string accountSid, string credentialListSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipCredentialResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipCredentialResponse` | `Models/ListSipCredentialResponse.cs` |

### UpdateSipCredential

- **Signature**: `UpdateSipCredential(string accountSid, string credentialListSid, string sid, string? password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `password` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountSipSipCredentialListSipCredential`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `Models/ApiV2010AccountSipSipCredentialListSipCredential.cs` |

