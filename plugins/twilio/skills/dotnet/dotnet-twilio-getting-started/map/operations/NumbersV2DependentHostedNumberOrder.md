# NumbersV2DependentHostedNumberOrder — operations

Accessor: `client.NumbersV2DependentHostedNumberOrder` · Source: `Api/NumbersV2DependentHostedNumberOrder.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListDependentHostedNumberOrder
- **HTTP**: `GET /v2/HostedNumber/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders` (Default5 (numbers))
- **Notes**: Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
- **Signature**: `ListDependentHostedNumberOrder(string signingDocumentSid, DependentHostedNumberOrderEnumStatus? status, string? phoneNumber, string? incomingPhoneNumberSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `PhoneNumber` ← `phoneNumber`, `IncomingPhoneNumberSid` ← `incomingPhoneNumberSid`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDependentHostedNumberOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
