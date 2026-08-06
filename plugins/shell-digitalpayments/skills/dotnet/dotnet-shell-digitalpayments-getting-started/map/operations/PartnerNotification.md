# PartnerNotification — operations

Accessor: `client.PartnerNotification` · Source: `Api/PartnerNotification.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelFueling
- **HTTP**: `POST /cancelFueling` (Shell (api-test))
- **Signature**: `CancelFueling(CancelFuelingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CancelFuelingApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FinaliseFueling
- **HTTP**: `POST /finaliseFueling` (Shell (api-test))
- **Signature**: `FinaliseFueling(FinaliseFuelingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<FinaliseFuelingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PartnerToken
- **HTTP**: `POST /token` (Shell (api-test))
- **Notes**: To access the Partner’s endpoints, for sending callback messages, Shell will need to connect to the Partner API end points. It is recemmended that the partner offers OAuth 2.0 as a standard for call back APIs and will require the OAuth 2.0 token for authentication. Note this needs to be implemented over HTTPS
- **Signature**: `PartnerToken(string grantType = "client_credentials", string clientId = "SOFflRakNlwnWlxfOXQ4GHDVyqGawuKA", string clientSecret = "cRnWgw7gACqM3gVS", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `grantType` = "client_credentials", `clientId` = "SOFflRakNlwnWlxfOXQ4GHDVyqGawuKA", `clientSecret` = "cRnWgw7gACqM3gVS", `requestOptions` = null
- **Query params (wire ← C#)**: `grant_type` ← `grantType`, `client_id` ← `clientId`, `client_secret` ← `clientSecret`
- **Returns**: `AccessTokenResponse`
- **Error**: `SdkException<PartnerTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccessTokenError(out AccessTokenError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
