# TrusthubV1CustomerProfilesEntityAssignments — operations

Accessor: `client.TrusthubV1CustomerProfilesEntityAssignments` · Source: `Api/TrusthubV1CustomerProfilesEntityAssignments.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomerProfileEntityAssignment
- **HTTP**: `POST /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments` (Default9 (trusthub))
- **Notes**: Create a new Assigned Item.
- **Signature**: `CreateCustomerProfileEntityAssignment(string customerProfileSid, string objectSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ObjectSid` ← `objectSid`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerProfileEntityAssignment
- **HTTP**: `DELETE /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}` (Default9 (trusthub))
- **Notes**: Remove an Assignment Item Instance.
- **Signature**: `DeleteCustomerProfileEntityAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCustomerProfileEntityAssignment
- **HTTP**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}` (Default9 (trusthub))
- **Notes**: Fetch specific Assigned Item Instance.
- **Signature**: `FetchCustomerProfileEntityAssignment(string customerProfileSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEntityAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerProfileEntityAssignment
- **HTTP**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments` (Default9 (trusthub))
- **Notes**: Retrieve a list of all Assigned Items for an account.
- **Signature**: `ListCustomerProfileEntityAssignment(string customerProfileSid, string? objectType, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`objectType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ObjectType` ← `objectType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileEntityAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
