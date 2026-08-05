# Api20100401Feedback — operations

Accessor: `client.Api20100401Feedback` · Source: `Api/Api20100401Feedback.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMessageFeedback
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json` (Default (api))
- **Notes**: Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message
- **Signature**: `CreateMessageFeedback(string accountSid, string messageSid, MessageFeedbackEnumOutcome? outcome, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `outcome` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Outcome` ← `outcome`
- **Returns**: `ApiV2010AccountMessageMessageFeedback`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
