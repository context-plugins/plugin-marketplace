# CustomerCustomAttributes — operations

Accessor: `client.CustomerCustomAttributes` · Source: `Api/CustomerCustomAttributes.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkUpsertCustomerCustomAttributes
- **HTTP**: `POST /v2/customers/custom-attributes/bulk-upsert` (Default (connect))
- **Notes**: Creates or updates custom attributes for customer profiles as a bulk operation. Use this endpoint to set the value of one or more custom attributes for one or more customer profiles. A custom attribute is based on a custom attribute definition in a Square seller account, which is created using the CreateCustomerCustomAttributeDefinition endpoint. This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert requests and returns a map of individual upsert responses. Each upsert request has a unique ID and provides a customer ID and custom attribute. Each upsert response is returned with the ID of the corresponding request. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkUpsertCustomerCustomAttributes(BulkUpsertCustomerCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpsertCustomerCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateCustomerCustomAttributeDefinition
- **HTTP**: `POST /v2/customers/custom-attribute-definitions` (Default (connect))
- **Notes**: Creates a customer-related custom attribute definition for a Square seller account. Use this endpoint to define a custom attribute that can be associated with customer profiles. A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties for a custom attribute. After the definition is created, you can call UpsertCustomerCustomAttribute or BulkUpsertCustomerCustomAttributes to set the custom attribute for customer profiles in the seller's Customer Directory. Sellers can view all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
- **Signature**: `CreateCustomerCustomAttributeDefinition(CreateCustomerCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCustomerCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerCustomAttribute
- **HTTP**: `DELETE /v2/customers/{customer_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Deletes a custom attribute associated with a customer profile. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `DeleteCustomerCustomAttribute(string customerId, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteCustomerCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerCustomAttributeDefinition
- **HTTP**: `DELETE /v2/customers/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Deletes a customer-related custom attribute definition from a Square seller account. Deleting a custom attribute definition also deletes the corresponding custom attribute from all customer profiles in the seller's Customer Directory. Only the definition owner can delete a custom attribute definition.
- **Signature**: `DeleteCustomerCustomAttributeDefinition(string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteCustomerCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerCustomAttributeDefinitions
- **HTTP**: `GET /v2/customers/custom-attribute-definitions` (Default (connect))
- **Notes**: Lists the customer-related custom attribute definitions that belong to a Square seller account. When all response pages are retrieved, the results include all custom attribute definitions that are visible to the requesting application, including those that are created by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListCustomerCustomAttributeDefinitions(int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListCustomerCustomAttributeDefinitionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerCustomAttributes
- **HTTP**: `GET /v2/customers/{customer_id}/custom-attributes` (Default (connect))
- **Notes**: Lists the custom attributes associated with a customer profile. You can use the `with_definitions` query parameter to also retrieve custom attribute definitions in the same call. When all response pages are retrieved, the results include all custom attributes that are visible to the requesting application, including those that are owned by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListCustomerCustomAttributes(string customerId, int? limit, string? cursor, bool? withDefinitions = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinitions` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`, `with_definitions` ← `withDefinitions`
- **Returns**: `ListCustomerCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCustomerCustomAttribute
- **HTTP**: `GET /v2/customers/{customer_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Retrieves a custom attribute associated with a customer profile. You can use the `with_definition` query parameter to also retrieve the custom attribute definition in the same call. To retrieve a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveCustomerCustomAttribute(string customerId, string key, int? version, bool? withDefinition = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinition` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `with_definition` ← `withDefinition`, `version` ← `version`
- **Returns**: `RetrieveCustomerCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCustomerCustomAttributeDefinition
- **HTTP**: `GET /v2/customers/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Retrieves a customer-related custom attribute definition from a Square seller account. To retrieve a custom attribute definition created by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveCustomerCustomAttributeDefinition(string key, int? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `RetrieveCustomerCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCustomerCustomAttributeDefinition
- **HTTP**: `PUT /v2/customers/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Updates a customer-related custom attribute definition for a Square seller account. Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the `schema` for a `Selection` data type. Only the definition owner can update a custom attribute definition. Note that sellers can view all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
- **Signature**: `UpdateCustomerCustomAttributeDefinition(string key, UpdateCustomerCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateCustomerCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertCustomerCustomAttribute
- **HTTP**: `POST /v2/customers/{customer_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Creates or updates a custom attribute for a customer profile. Use this endpoint to set the value of a custom attribute for a specified customer profile. A custom attribute is based on a custom attribute definition in a Square seller account, which is created using the CreateCustomerCustomAttributeDefinition endpoint. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `UpsertCustomerCustomAttribute(string customerId, string key, UpsertCustomerCustomAttributeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertCustomerCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
