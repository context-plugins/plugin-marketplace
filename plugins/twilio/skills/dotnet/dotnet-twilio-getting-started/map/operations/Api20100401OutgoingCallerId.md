# Api20100401OutgoingCallerId — operations

Accessor: `client.Api20100401OutgoingCallerId` · Source: `Api/Api20100401OutgoingCallerId.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteOutgoingCallerId
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json` (Default (api))
- **Notes**: Delete the caller-id specified from the account
- **Signature**: `DeleteOutgoingCallerId(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchOutgoingCallerId
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json` (Default (api))
- **Notes**: Fetch an outgoing-caller-id belonging to the account used to make the request
- **Signature**: `FetchOutgoingCallerId(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountOutgoingCallerId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListOutgoingCallerId
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json` (Default (api))
- **Notes**: Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
- **Signature**: `ListOutgoingCallerId(string accountSid, string? phoneNumber, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`phoneNumber` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PhoneNumber` ← `phoneNumber`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListOutgoingCallerIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOutgoingCallerId
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json` (Default (api))
- **Notes**: Updates the caller-id
- **Signature**: `UpdateOutgoingCallerId(string accountSid, string sid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountOutgoingCallerId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
