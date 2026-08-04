# AccountsV1AuthTokenPromotion — operations

Accessor: `client.AccountsV1AuthTokenPromotion` · Source: `Api/AccountsV1AuthTokenPromotion.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateAuthTokenPromotion
- **HTTP**: `POST /v1/AuthTokens/Promote` (Default (accounts))
- **Notes**: Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
- **Signature**: `UpdateAuthTokenPromotion(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AuthTokenPromotion`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
