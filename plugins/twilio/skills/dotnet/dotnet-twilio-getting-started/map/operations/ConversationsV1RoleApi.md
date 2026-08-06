# ConversationsV1RoleApi — operations

Accessor: `client.ConversationsV1RoleApi` · Source: `Api/ConversationsV1RoleApi.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateRole
- **HTTP**: `POST /v1/Roles` (Default7 (conversations))
- **Notes**: Create a new user role in your account's default service
- **Signature**: `CreateRole(string friendlyName, RoleEnumRoleType type, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Type` ← `type`, `Permission` ← `permission`
- **Returns**: `ConversationsV1Role`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateServiceRole
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Roles` (Default7 (conversations))
- **Notes**: Create a new user role in your service
- **Signature**: `CreateServiceRole(string chatServiceSid, string friendlyName, ServiceRoleEnumRoleType type, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Type` ← `type`, `Permission` ← `permission`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteRole
- **HTTP**: `DELETE /v1/Roles/{Sid}` (Default7 (conversations))
- **Notes**: Remove a user role from your account's default service
- **Signature**: `DeleteRole(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteServiceRole
- **HTTP**: `DELETE /v1/Services/{ChatServiceSid}/Roles/{Sid}` (Default7 (conversations))
- **Notes**: Remove a user role from your service
- **Signature**: `DeleteServiceRole(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRole
- **HTTP**: `GET /v1/Roles/{Sid}` (Default7 (conversations))
- **Notes**: Fetch a user role from your account's default service
- **Signature**: `FetchRole(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1Role`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchServiceRole
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Roles/{Sid}` (Default7 (conversations))
- **Notes**: Fetch a user role from your service
- **Signature**: `FetchServiceRole(string chatServiceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRole
- **HTTP**: `GET /v1/Roles` (Default7 (conversations))
- **Notes**: Retrieve a list of all user roles in your account's default service
- **Signature**: `ListRole(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoleResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListServiceRole
- **HTTP**: `GET /v1/Services/{ChatServiceSid}/Roles` (Default7 (conversations))
- **Notes**: Retrieve a list of all user roles in your service
- **Signature**: `ListServiceRole(string chatServiceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceRoleResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateRole
- **HTTP**: `POST /v1/Roles/{Sid}` (Default7 (conversations))
- **Notes**: Update an existing user role in your account's default service
- **Signature**: `UpdateRole(string sid, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Permission` ← `permission`
- **Returns**: `ConversationsV1Role`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateServiceRole
- **HTTP**: `POST /v1/Services/{ChatServiceSid}/Roles/{Sid}` (Default7 (conversations))
- **Notes**: Update an existing user role in your service
- **Signature**: `UpdateServiceRole(string chatServiceSid, string sid, IReadOnlyList<string> permission, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Permission` ← `permission`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
