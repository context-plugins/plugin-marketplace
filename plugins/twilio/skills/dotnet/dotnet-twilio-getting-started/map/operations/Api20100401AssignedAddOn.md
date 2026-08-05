# Api20100401AssignedAddOn — operations

Accessor: `client.Api20100401AssignedAddOn` · Source: `Api/Api20100401AssignedAddOn.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateIncomingPhoneNumberAssignedAddOn
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json` (Default (api))
- **Notes**: Assign an Add-on installation to the Number specified.
- **Signature**: `CreateIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, string installedAddOnSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `InstalledAddOnSid` ← `installedAddOnSid`
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteIncomingPhoneNumberAssignedAddOn
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json` (Default (api))
- **Notes**: Remove the assignment of an Add-on installation from the Number specified.
- **Signature**: `DeleteIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchIncomingPhoneNumberAssignedAddOn
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json` (Default (api))
- **Notes**: Fetch an instance of an Add-on installation currently assigned to this Number.
- **Signature**: `FetchIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListIncomingPhoneNumberAssignedAddOn
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json` (Default (api))
- **Notes**: Retrieve a list of Add-on installations currently assigned to this Number.
- **Signature**: `ListIncomingPhoneNumberAssignedAddOn(string accountSid, string resourceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListIncomingPhoneNumberAssignedAddOnResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
