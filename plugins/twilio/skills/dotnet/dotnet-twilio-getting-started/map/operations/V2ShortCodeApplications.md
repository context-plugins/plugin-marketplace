<!-- Generated file — do not edit; regenerated with the SDK. -->

# V2ShortCodeApplications — operations

Accessor: `client.V2ShortCodeApplications` · Source: `Api/V2ShortCodeApplications.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateShortCodeApplication

- **Server group**: `Default5`
- **Signature**: `CreateShortCodeApplication(CreateShortCodeApplicationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CreateShortCodeApplicationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateShortCodeApplicationRequest` | `Models/CreateShortCodeApplicationRequest.cs` |
| `CreateShortCodeApplicationResponse` | `Models/CreateShortCodeApplicationResponse.cs` |

### FetchShortCodeApplication

- **Server group**: `Default5`
- **Signature**: `FetchShortCodeApplication(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ShortCodeApplication`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ShortCodeApplication` | `Models/ShortCodeApplication.cs` |

### ListShortCodeApplications

- **Server group**: `Default5`
- **Signature**: `ListShortCodeApplications(string? accountSid, string? isoCountry, string? status, string? friendlyName, string? sid, int? pageSize, int? page = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`accountSid` … `pageSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `0`
- **Query params (wire ← C#)**: `AccountSid` ← `accountSid`, `IsoCountry` ← `isoCountry`, `Status` ← `status`, `FriendlyName` ← `friendlyName`, `Sid` ← `sid`, `PageSize` ← `pageSize`, `Page` ← `page`
- **Returns**: `ShortCodeApplicationResponsePage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ShortCodeApplicationResponsePage` | `Models/ShortCodeApplicationResponsePage.cs` |

