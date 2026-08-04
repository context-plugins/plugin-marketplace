# CustomerGroups — operations

Accessor: `client.CustomerGroups` · Source: `Api/CustomerGroups.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomerGroup
- **HTTP**: `POST /v2/customers/groups` (Default (connect))
- **Notes**: Creates a new customer group for a business. The request must include the `name` value of the group.
- **Signature**: `CreateCustomerGroup(CreateCustomerGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCustomerGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerGroup
- **HTTP**: `DELETE /v2/customers/groups/{group_id}` (Default (connect))
- **Notes**: Deletes a customer group as identified by the `group_id` value.
- **Signature**: `DeleteCustomerGroup(string groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteCustomerGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerGroups
- **HTTP**: `GET /v2/customers/groups` (Default (connect))
- **Notes**: Retrieves the list of customer groups of a business.
- **Signature**: `ListCustomerGroups(string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListCustomerGroupsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCustomerGroup
- **HTTP**: `GET /v2/customers/groups/{group_id}` (Default (connect))
- **Notes**: Retrieves a specific customer group as identified by the `group_id` value.
- **Signature**: `RetrieveCustomerGroup(string groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveCustomerGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCustomerGroup
- **HTTP**: `PUT /v2/customers/groups/{group_id}` (Default (connect))
- **Notes**: Updates a customer group as identified by the `group_id` value.
- **Signature**: `UpdateCustomerGroup(string groupId, UpdateCustomerGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateCustomerGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
