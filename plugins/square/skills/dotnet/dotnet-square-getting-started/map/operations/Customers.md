# Customers — operations

Accessor: `client.Customers` · Source: `Api/Customers.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddGroupToCustomer
- **HTTP**: `PUT /v2/customers/{customer_id}/groups/{group_id}` (Default (connect))
- **Notes**: Adds a group membership to a customer. The customer is identified by the `customer_id` value and the customer group is identified by the `group_id` value.
- **Signature**: `AddGroupToCustomer(string customerId, string groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AddGroupToCustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkCreateCustomers
- **HTTP**: `POST /v2/customers/bulk-create` (Default (connect))
- **Notes**: Creates multiple customer profiles for a business. This endpoint takes a map of individual create requests and returns a map of responses. You must provide at least one of the following values in each create request: `given_name` `family_name` `company_name` `email_address` `phone_number`
- **Signature**: `BulkCreateCustomers(BulkCreateCustomersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkCreateCustomersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkDeleteCustomers
- **HTTP**: `POST /v2/customers/bulk-delete` (Default (connect))
- **Notes**: Deletes multiple customer profiles. The endpoint takes a list of customer IDs and returns a map of responses.
- **Signature**: `BulkDeleteCustomers(BulkDeleteCustomersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkDeleteCustomersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkRetrieveCustomers
- **HTTP**: `POST /v2/customers/bulk-retrieve` (Default (connect))
- **Notes**: Retrieves multiple customer profiles. This endpoint takes a list of customer IDs and returns a map of responses.
- **Signature**: `BulkRetrieveCustomers(BulkRetrieveCustomersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkRetrieveCustomersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpdateCustomers
- **HTTP**: `POST /v2/customers/bulk-update` (Default (connect))
- **Notes**: Updates multiple customer profiles. This endpoint takes a map of individual update requests and returns a map of responses.
- **Signature**: `BulkUpdateCustomers(BulkUpdateCustomersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpdateCustomersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateCustomer
- **HTTP**: `POST /v2/customers` (Default (connect))
- **Notes**: Creates a new customer for a business. You must provide at least one of the following values in your request to this endpoint: `given_name` `family_name` `company_name` `email_address` `phone_number`
- **Signature**: `CreateCustomer(CreateCustomerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateCustomerCard
- **HTTP**: `POST /v2/customers/{customer_id}/cards` (Default (connect))
- **Notes**: Adds a card on file to an existing customer. As with charges, calls to `CreateCustomerCard` are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.
- **Signature**: `CreateCustomerCard(string customerId, CreateCustomerCardRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCustomerCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomer
- **HTTP**: `DELETE /v2/customers/{customer_id}` (Default (connect))
- **Notes**: Deletes a customer profile from a business. To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.
- **Signature**: `DeleteCustomer(string customerId, long? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `DeleteCustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerCard
- **HTTP**: `DELETE /v2/customers/{customer_id}/cards/{card_id}` (Default (connect))
- **Notes**: Removes a card on file from a customer.
- **Signature**: `DeleteCustomerCard(string customerId, string cardId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteCustomerCardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomers
- **HTTP**: `GET /v2/customers` (Default (connect))
- **Notes**: Lists customer profiles associated with a Square account. Under normal operating conditions, newly created or updated customer profiles become available for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
- **Signature**: `ListCustomers(string? cursor, int? limit, CustomerSortField? sortField, SortOrder? sortOrder, bool? count = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cursor` … `sortOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `count` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `limit` ← `limit`, `sort_field` ← `sortField`, `sort_order` ← `sortOrder`, `count` ← `count`
- **Returns**: `ListCustomersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemoveGroupFromCustomer
- **HTTP**: `DELETE /v2/customers/{customer_id}/groups/{group_id}` (Default (connect))
- **Notes**: Removes a group membership from a customer. The customer is identified by the `customer_id` value and the customer group is identified by the `group_id` value.
- **Signature**: `RemoveGroupFromCustomer(string customerId, string groupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RemoveGroupFromCustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCustomer
- **HTTP**: `GET /v2/customers/{customer_id}` (Default (connect))
- **Notes**: Returns details for a single customer.
- **Signature**: `RetrieveCustomer(string customerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveCustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchCustomers
- **HTTP**: `POST /v2/customers/search` (Default (connect))
- **Notes**: Searches the customer profiles associated with a Square account using one or more supported query filters. Calling `SearchCustomers` without any explicit query filter returns all customer profiles ordered alphabetically based on `given_name` and `family_name`. Under normal operating conditions, newly created or updated customer profiles become available for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
- **Signature**: `SearchCustomers(SearchCustomersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchCustomersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCustomer
- **HTTP**: `PUT /v2/customers/{customer_id}` (Default (connect))
- **Notes**: Updates a customer profile. This endpoint supports sparse updates, so only new or changed fields are required in the request. To add or update a field, specify the new value. To remove a field, specify `null`. To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.
- **Signature**: `UpdateCustomer(string customerId, UpdateCustomerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateCustomerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
