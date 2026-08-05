# TrusthubV1CustomerProfilesChannelEndpointAssignment — operations

Accessor: `client.TrusthubV1CustomerProfilesChannelEndpointAssignment` · Source: `Api/TrusthubV1CustomerProfilesChannelEndpointAssignment.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomerProfileChannelEndpointAssignment
- **HTTP**: `POST /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments` (Default12 (trusthub))
- **Notes**: Create a new Assigned Item.
- **Signature**: `CreateCustomerProfileChannelEndpointAssignment(string customerProfileSid, string channelEndpointType, string channelEndpointSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ChannelEndpointType` ← `channelEndpointType`, `ChannelEndpointSid` ← `channelEndpointSid`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerProfileChannelEndpointAssignment
- **HTTP**: `DELETE /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}` (Default12 (trusthub))
- **Notes**: Remove an Assignment Item Instance.
- **Signature**: `DeleteCustomerProfileChannelEndpointAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCustomerProfileChannelEndpointAssignment
- **HTTP**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}` (Default12 (trusthub))
- **Notes**: Fetch specific Assigned Item Instance.
- **Signature**: `FetchCustomerProfileChannelEndpointAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerProfileChannelEndpointAssignment
- **HTTP**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments` (Default12 (trusthub))
- **Notes**: Retrieve a list of all Assigned Items for an account.
- **Signature**: `ListCustomerProfileChannelEndpointAssignment(string customerProfileSid, string? channelEndpointSid, string? channelEndpointSids, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`channelEndpointSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ChannelEndpointSid` ← `channelEndpointSid`, `ChannelEndpointSids` ← `channelEndpointSids`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileChannelEndpointAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
