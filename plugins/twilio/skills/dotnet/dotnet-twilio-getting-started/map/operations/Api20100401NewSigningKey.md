# Api20100401NewSigningKey — operations

Accessor: `client.Api20100401NewSigningKey` · Source: `Api/Api20100401NewSigningKey.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNewSigningKey
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/SigningKeys.json` (Default (api))
- **Notes**: Create a new Signing Key for the account making the request.
- **Signature**: `CreateNewSigningKey(string accountSid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountNewSigningKey`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
