# NumbersV2HostedNumberOrderApi — operations

Accessor: `client.NumbersV2HostedNumberOrderApi` · Source: `Api/NumbersV2HostedNumberOrderApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateHostedNumberOrder
- **HTTP**: `POST /v2/HostedNumber/Orders` (Default5 (numbers))
- **Notes**: Host a phone number's capability on Twilio's platform.
- **Signature**: `CreateHostedNumberOrder(string phoneNumber, string contactPhoneNumber, string addressSid, string email, string? accountSid, string? friendlyName, IReadOnlyList<string>? ccEmails, string? smsUrl, AmdStatusCallbackMethod? smsMethod, string? smsFallbackUrl, bool? smsCapability, AmdStatusCallbackMethod? smsFallbackMethod, string? statusCallbackUrl, AmdStatusCallbackMethod? statusCallbackMethod, string? smsApplicationSid, string? contactTitle, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`accountSid` … `contactTitle`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`, `ContactPhoneNumber` ← `contactPhoneNumber`, `AddressSid` ← `addressSid`, `Email` ← `email`, `AccountSid` ← `accountSid`, `FriendlyName` ← `friendlyName`, `CcEmails` ← `ccEmails`, `SmsUrl` ← `smsUrl`, `SmsMethod` ← `smsMethod`, `SmsFallbackUrl` ← `smsFallbackUrl`, `SmsCapability` ← `smsCapability`, `SmsFallbackMethod` ← `smsFallbackMethod`, `StatusCallbackUrl` ← `statusCallbackUrl`, `StatusCallbackMethod` ← `statusCallbackMethod`, `SmsApplicationSid` ← `smsApplicationSid`, `ContactTitle` ← `contactTitle`
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteHostedNumberOrder
- **HTTP**: `DELETE /v2/HostedNumber/Orders/{Sid}` (Default5 (numbers))
- **Notes**: Cancel the HostedNumberOrder (only available when the status is in `received`).
- **Signature**: `DeleteHostedNumberOrder(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchHostedNumberOrder
- **HTTP**: `GET /v2/HostedNumber/Orders/{Sid}` (Default5 (numbers))
- **Notes**: Fetch a specific HostedNumberOrder.
- **Signature**: `FetchHostedNumberOrder(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListHostedNumberOrder
- **HTTP**: `GET /v2/HostedNumber/Orders` (Default5 (numbers))
- **Notes**: Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
- **Signature**: `ListHostedNumberOrder(DependentOrderEnumStatus? status, bool? smsCapability, string? phoneNumber, string? incomingPhoneNumberSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `SmsCapability` ← `smsCapability`, `PhoneNumber` ← `phoneNumber`, `IncomingPhoneNumberSid` ← `incomingPhoneNumberSid`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListHostedNumberOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateHostedNumberOrder
- **HTTP**: `POST /v2/HostedNumber/Orders/{Sid}` (Default5 (numbers))
- **Notes**: Updates a specific HostedNumberOrder.
- **Signature**: `UpdateHostedNumberOrder(string sid, DependentOrderEnumStatus status, int? verificationCallDelay, string? verificationCallExtension, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `verificationCallDelay` — nullable, no default → **must pass explicitly**
  - `verificationCallExtension` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `VerificationCallDelay` ← `verificationCallDelay`, `VerificationCallExtension` ← `verificationCallExtension`
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
