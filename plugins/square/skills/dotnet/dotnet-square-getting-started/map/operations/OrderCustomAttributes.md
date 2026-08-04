# OrderCustomAttributes — operations

Accessor: `client.OrderCustomAttributes` · Source: `Api/OrderCustomAttributes.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkDeleteOrderCustomAttributes
- **HTTP**: `POST /v2/orders/custom-attributes/bulk-delete` (Default (connect))
- **Notes**: Deletes order custom attributes as a bulk operation. Use this endpoint to delete one or more custom attributes from one or more orders. A custom attribute is based on a custom attribute definition in a Square seller account. (To create a custom attribute definition, use the CreateOrderCustomAttributeDefinition endpoint.) This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete requests and returns a map of individual delete responses. Each delete request has a unique ID and provides an order ID and custom attribute. Each delete response is returned with the ID of the corresponding request. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkDeleteOrderCustomAttributes(BulkDeleteOrderCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkDeleteOrderCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpsertOrderCustomAttributes
- **HTTP**: `POST /v2/orders/custom-attributes/bulk-upsert` (Default (connect))
- **Notes**: Creates or updates order custom attributes as a bulk operation. Use this endpoint to delete one or more custom attributes from one or more orders. A custom attribute is based on a custom attribute definition in a Square seller account. (To create a custom attribute definition, use the CreateOrderCustomAttributeDefinition endpoint.) This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert requests and returns a map of individual upsert responses. Each upsert request has a unique ID and provides an order ID and custom attribute. Each upsert response is returned with the ID of the corresponding request. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkUpsertOrderCustomAttributes(BulkUpsertOrderCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpsertOrderCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrderCustomAttributeDefinition
- **HTTP**: `POST /v2/orders/custom-attribute-definitions` (Default (connect))
- **Notes**: Creates an order-related custom attribute definition. Use this endpoint to define a custom attribute that can be associated with orders. After creating a custom attribute definition, you can set the custom attribute for orders in the Square seller account.
- **Signature**: `CreateOrderCustomAttributeDefinition(CreateOrderCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateOrderCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrderCustomAttribute
- **HTTP**: `DELETE /v2/orders/{order_id}/custom-attributes/{custom_attribute_key}` (Default (connect))
- **Notes**: Deletes a custom attribute associated with a customer profile. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `DeleteOrderCustomAttribute(string orderId, string customAttributeKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteOrderCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrderCustomAttributeDefinition
- **HTTP**: `DELETE /v2/orders/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Deletes an order-related custom attribute definition from a Square seller account. Only the definition owner can delete a custom attribute definition.
- **Signature**: `DeleteOrderCustomAttributeDefinition(string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteOrderCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListOrderCustomAttributeDefinitions
- **HTTP**: `GET /v2/orders/custom-attribute-definitions` (Default (connect))
- **Notes**: Lists the order-related custom attribute definitions that belong to a Square seller account. When all response pages are retrieved, the results include all custom attribute definitions that are visible to the requesting application, including those that are created by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListOrderCustomAttributeDefinitions(VisibilityFilter? visibilityFilter, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibilityFilter` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `visibility_filter` ← `visibilityFilter`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListOrderCustomAttributeDefinitionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListOrderCustomAttributes
- **HTTP**: `GET /v2/orders/{order_id}/custom-attributes` (Default (connect))
- **Notes**: Lists the custom attributes associated with an order. You can use the `with_definitions` query parameter to also retrieve custom attribute definitions in the same call. When all response pages are retrieved, the results include all custom attributes that are visible to the requesting application, including those that are owned by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListOrderCustomAttributes(string orderId, VisibilityFilter? visibilityFilter, string? cursor, int? limit, bool? withDefinitions = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibilityFilter` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinitions` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `visibility_filter` ← `visibilityFilter`, `cursor` ← `cursor`, `limit` ← `limit`, `with_definitions` ← `withDefinitions`
- **Returns**: `ListOrderCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveOrderCustomAttribute
- **HTTP**: `GET /v2/orders/{order_id}/custom-attributes/{custom_attribute_key}` (Default (connect))
- **Notes**: Retrieves a custom attribute associated with an order. You can use the `with_definition` query parameter to also retrieve the custom attribute definition in the same call. To retrieve a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveOrderCustomAttribute(string orderId, string customAttributeKey, int? version, bool? withDefinition = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinition` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`, `with_definition` ← `withDefinition`
- **Returns**: `RetrieveOrderCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveOrderCustomAttributeDefinition
- **HTTP**: `GET /v2/orders/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Retrieves an order-related custom attribute definition from a Square seller account. To retrieve a custom attribute definition created by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveOrderCustomAttributeDefinition(string key, int? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `RetrieveOrderCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrderCustomAttributeDefinition
- **HTTP**: `PUT /v2/orders/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Updates an order-related custom attribute definition for a Square seller account. Only the definition owner can update a custom attribute definition. Note that sellers can view all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
- **Signature**: `UpdateOrderCustomAttributeDefinition(string key, UpdateOrderCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateOrderCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertOrderCustomAttribute
- **HTTP**: `POST /v2/orders/{order_id}/custom-attributes/{custom_attribute_key}` (Default (connect))
- **Notes**: Creates or updates a custom attribute for an order. Use this endpoint to set the value of a custom attribute for a specific order. A custom attribute is based on a custom attribute definition in a Square seller account. (To create a custom attribute definition, use the CreateOrderCustomAttributeDefinition endpoint.) To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `UpsertOrderCustomAttribute(string orderId, string customAttributeKey, UpsertOrderCustomAttributeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertOrderCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
