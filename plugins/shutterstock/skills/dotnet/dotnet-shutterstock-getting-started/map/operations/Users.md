<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccessToken

- **Signature**: `GetAccessToken(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AccessTokenDetails`
- **Error**: `SdkException<GetAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccessTokenDetails` | `Models/AccessTokenDetails.cs` |
| `GetAccessTokenError` | `Errors/GetAccessTokenError.cs` |

### GetUser

- **Signature**: `GetUser(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `UserDetails`
- **Error**: `SdkException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UserDetails` | `Models/UserDetails.cs` |
| `GetUserError` | `Errors/GetUserError.cs` |

### GetUserSubscriptionList

- **Signature**: `GetUserSubscriptionList(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SubscriptionDataList`
- **Error**: `SdkException<GetUserSubscriptionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SubscriptionDataList` | `Models/SubscriptionDataList.cs` |
| `GetUserSubscriptionListError` | `Errors/GetUserSubscriptionListError.cs` |

