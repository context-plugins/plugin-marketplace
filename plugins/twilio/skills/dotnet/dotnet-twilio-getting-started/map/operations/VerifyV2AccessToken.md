<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2AccessToken — operations

Accessor: `client.VerifyV2AccessToken` · Source: `Api/VerifyV2AccessToken.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAccessToken

- **Server group**: `Default3`
- **Signature**: `CreateAccessToken(string serviceSid, string identity, AccessTokenEnumFactorTypes factorType, string? factorFriendlyName, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `factorFriendlyName` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceAccessToken`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AccessTokenEnumFactorTypes` | `Models/Enums/AccessTokenEnumFactorTypes.cs` |
| `VerifyV2ServiceAccessToken` | `Models/VerifyV2ServiceAccessToken.cs` |

### FetchAccessToken

- **Server group**: `Default3`
- **Signature**: `FetchAccessToken(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceAccessToken`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceAccessToken` | `Models/VerifyV2ServiceAccessToken.cs` |

