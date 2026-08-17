<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthorizedConnectApp — operations

Accessor: `client.Api20100401AuthorizedConnectApp` · Source: `Api/Api20100401AuthorizedConnectApp.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchAuthorizedConnectApp

- **Signature**: `FetchAuthorizedConnectApp(string accountSid, string connectAppSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountAuthorizedConnectApp`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountAuthorizedConnectApp` | `Models/ApiV2010AccountAuthorizedConnectApp.cs` |

### ListAuthorizedConnectApp

- **Signature**: `ListAuthorizedConnectApp(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAuthorizedConnectAppResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAuthorizedConnectAppResponse` | `Models/ListAuthorizedConnectAppResponse.cs` |

