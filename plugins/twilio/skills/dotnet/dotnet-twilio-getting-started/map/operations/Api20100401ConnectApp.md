<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ConnectApp — operations

Accessor: `client.Api20100401ConnectApp` · Source: `Api/Api20100401ConnectApp.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteConnectApp

- **Signature**: `DeleteConnectApp(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchConnectApp

- **Signature**: `FetchConnectApp(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountConnectApp`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountConnectApp` | `Models/ApiV2010AccountConnectApp.cs` |

### ListConnectApp

- **Signature**: `ListConnectApp(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConnectAppResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConnectAppResponse` | `Models/ListConnectAppResponse.cs` |

### UpdateConnectApp

- **Signature**: `UpdateConnectApp(string accountSid, string sid, string? authorizeRedirectUrl, string? companyName, DeauthorizeCallbackMethod1? deauthorizeCallbackMethod, string? deauthorizeCallbackUrl, string? description, string? friendlyName, string? homepageUrl, IReadOnlyList<ConnectAppEnumPermission>? permissions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`authorizeRedirectUrl` … `permissions`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountConnectApp`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeauthorizeCallbackMethod1` | `Models/Enums/DeauthorizeCallbackMethod1.cs` |
| `ConnectAppEnumPermission` | `Models/Enums/ConnectAppEnumPermission.cs` |
| `ApiV2010AccountConnectApp` | `Models/ApiV2010AccountConnectApp.cs` |

