# Api20100401AssignedAddOnExtension — operations

Accessor: `client.Api20100401AssignedAddOnExtension` · Source: `Api/Api20100401AssignedAddOnExtension.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchIncomingPhoneNumberAssignedAddOnExtension
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of an Extension for the Assigned Add-on.
- **Signature**: `FetchIncomingPhoneNumberAssignedAddOnExtension(string accountSid, string resourceSid, string assignedAddOnSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IncomingPhoneNumberAssignedAddOnExtension`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListIncomingPhoneNumberAssignedAddOnExtension
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json` (Default (api))
- **Notes**: Retrieve a list of Extensions for the Assigned Add-on.
- **Signature**: `ListIncomingPhoneNumberAssignedAddOnExtension(string accountSid, string resourceSid, string assignedAddOnSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberAssignedAddOnExtensionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
