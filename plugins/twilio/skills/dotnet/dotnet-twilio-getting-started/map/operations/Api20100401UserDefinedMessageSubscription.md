# Api20100401UserDefinedMessageSubscription — operations

Accessor: `client.Api20100401UserDefinedMessageSubscription` · Source: `Api/Api20100401UserDefinedMessageSubscription.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateUserDefinedMessageSubscription
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json` (Default (api))
- **Notes**: Subscribe to User Defined Messages for a given Call SID.
- **Signature**: `CreateUserDefinedMessageSubscription(string accountSid, string callSid, string callback, string? idempotencyKey, Method3? method, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `method` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Callback` ← `callback`, `IdempotencyKey` ← `idempotencyKey`, `Method` ← `method`
- **Returns**: `ApiV2010AccountCallUserDefinedMessageSubscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUserDefinedMessageSubscription
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json` (Default (api))
- **Notes**: Delete a specific User Defined Message Subscription.
- **Signature**: `DeleteUserDefinedMessageSubscription(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
