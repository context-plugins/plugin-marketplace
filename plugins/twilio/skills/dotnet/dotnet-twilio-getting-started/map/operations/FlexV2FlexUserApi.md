<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV2FlexUserApi — operations

Accessor: `client.FlexV2FlexUserApi` · Source: `Api/FlexV2FlexUserApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchFlexUser

- **Server group**: `Default13`
- **Signature**: `FetchFlexUser(string instanceSid, string flexUserSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FlexV2FlexUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV2FlexUser` | `Models/FlexV2FlexUser.cs` |

### UpdateFlexUser

- **Server group**: `Default13`
- **Signature**: `UpdateFlexUser(string instanceSid, string flexUserSid, string? email, string? userSid, string? locale, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `email` — nullable, no default → **must pass explicitly**
  - `userSid` — nullable, no default → **must pass explicitly**
  - `locale` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV2FlexUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV2FlexUser` | `Models/FlexV2FlexUser.cs` |

