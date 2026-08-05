# Api20100401UserDefinedMessage — operations

Accessor: `client.Api20100401UserDefinedMessage` · Source: `Api/Api20100401UserDefinedMessage.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateUserDefinedMessage
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json` (Default (api))
- **Notes**: Create a new User Defined Message for the given Call SID.
- **Signature**: `CreateUserDefinedMessage(string accountSid, string callSid, string content, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Content` ← `content`, `IdempotencyKey` ← `idempotencyKey`
- **Returns**: `ApiV2010AccountCallUserDefinedMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
