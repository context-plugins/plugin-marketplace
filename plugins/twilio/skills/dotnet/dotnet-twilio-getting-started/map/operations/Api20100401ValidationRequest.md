# Api20100401ValidationRequest — operations

Accessor: `client.Api20100401ValidationRequest` · Source: `Api/Api20100401ValidationRequest.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateValidationRequest
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json` (Default (api))
- **Signature**: `CreateValidationRequest(string accountSid, string phoneNumber, string? friendlyName, int? callDelay, string? extension, string? statusCallback, StatusCallbackMethod15? statusCallbackMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `statusCallbackMethod`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`, `FriendlyName` ← `friendlyName`, `CallDelay` ← `callDelay`, `Extension` ← `extension`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`
- **Returns**: `ApiV2010AccountValidationRequest`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
