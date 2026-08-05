# NumbersV3HostedNumbersHostedNumberOrderApi — operations

Accessor: `client.NumbersV3HostedNumbersHostedNumberOrderApi` · Source: `Api/NumbersV3HostedNumbersHostedNumberOrderApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateHostedNumbersHostedNumberOrder
- **HTTP**: `POST /v3/HostedNumbers/HostedNumberOrders` (Default7 (numbers))
- **Signature**: `CreateHostedNumbersHostedNumberOrder(string phoneNumber, bool smsCapability, string? accountSid, string? friendlyName, string? uniqueName, IReadOnlyList<string>? ccEmails, string? smsUrl, AmdStatusCallbackMethod? smsMethod, string? smsFallbackUrl, AmdStatusCallbackMethod? smsFallbackMethod, string? statusCallbackUrl, AmdStatusCallbackMethod? statusCallbackMethod, string? smsApplicationSid, string? addressSid, string? email, DependentOrderEnumVerificationType? verificationType, string? verificationDocumentSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`accountSid` … `verificationDocumentSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `phoneNumber` ← `phoneNumber`, `smsCapability` ← `smsCapability`, `accountSid` ← `accountSid`, `friendlyName` ← `friendlyName`, `uniqueName` ← `uniqueName`, `ccEmails` ← `ccEmails`, `smsUrl` ← `smsUrl`, `smsMethod` ← `smsMethod`, `smsFallbackUrl` ← `smsFallbackUrl`, `smsFallbackMethod` ← `smsFallbackMethod`, `statusCallbackUrl` ← `statusCallbackUrl`, `statusCallbackMethod` ← `statusCallbackMethod`, `smsApplicationSid` ← `smsApplicationSid`, `addressSid` ← `addressSid`, `email` ← `email`, `verificationType` ← `verificationType`, `verificationDocumentSid` ← `verificationDocumentSid`
- **Returns**: `NumbersV3HostedNumbersHostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
