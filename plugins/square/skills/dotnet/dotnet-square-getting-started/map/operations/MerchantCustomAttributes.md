# MerchantCustomAttributes — operations

Accessor: `client.MerchantCustomAttributes` · Source: `Api/MerchantCustomAttributes.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkDeleteMerchantCustomAttributes
- **HTTP**: `POST /v2/merchants/custom-attributes/bulk-delete` (Default (connect))
- **Notes**: Deletes custom attributes for a merchant as a bulk operation. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkDeleteMerchantCustomAttributes(BulkDeleteMerchantCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkDeleteMerchantCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpsertMerchantCustomAttributes
- **HTTP**: `POST /v2/merchants/custom-attributes/bulk-upsert` (Default (connect))
- **Notes**: Creates or updates custom attributes for a merchant as a bulk operation. Use this endpoint to set the value of one or more custom attributes for a merchant. A custom attribute is based on a custom attribute definition in a Square seller account, which is created using the CreateMerchantCustomAttributeDefinition endpoint. This `BulkUpsertMerchantCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert requests and returns a map of individual upsert responses. Each upsert request has a unique ID and provides a merchant ID and custom attribute. Each upsert response is returned with the ID of the corresponding request. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkUpsertMerchantCustomAttributes(BulkUpsertMerchantCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpsertMerchantCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateMerchantCustomAttributeDefinition
- **HTTP**: `POST /v2/merchants/custom-attribute-definitions` (Default (connect))
- **Notes**: Creates a merchant-related custom attribute definition for a Square seller account. Use this endpoint to define a custom attribute that can be associated with a merchant connecting to your application. A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties for a custom attribute. After the definition is created, you can call UpsertMerchantCustomAttribute or BulkUpsertMerchantCustomAttributes to set the custom attribute for a merchant.
- **Signature**: `CreateMerchantCustomAttributeDefinition(CreateMerchantCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateMerchantCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMerchantCustomAttribute
- **HTTP**: `DELETE /v2/merchants/{merchant_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Deletes a custom attribute associated with a merchant. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `DeleteMerchantCustomAttribute(string merchantId, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteMerchantCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMerchantCustomAttributeDefinition
- **HTTP**: `DELETE /v2/merchants/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Deletes a merchant-related custom attribute definition from a Square seller account. Deleting a custom attribute definition also deletes the corresponding custom attribute from the merchant. Only the definition owner can delete a custom attribute definition.
- **Signature**: `DeleteMerchantCustomAttributeDefinition(string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteMerchantCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListMerchantCustomAttributeDefinitions
- **HTTP**: `GET /v2/merchants/custom-attribute-definitions` (Default (connect))
- **Notes**: Lists the merchant-related custom attribute definitions that belong to a Square seller account. When all response pages are retrieved, the results include all custom attribute definitions that are visible to the requesting application, including those that are created by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListMerchantCustomAttributeDefinitions(VisibilityFilter? visibilityFilter, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibilityFilter` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `visibility_filter` ← `visibilityFilter`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListMerchantCustomAttributeDefinitionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListMerchantCustomAttributes
- **HTTP**: `GET /v2/merchants/{merchant_id}/custom-attributes` (Default (connect))
- **Notes**: Lists the custom attributes associated with a merchant. You can use the `with_definitions` query parameter to also retrieve custom attribute definitions in the same call. When all response pages are retrieved, the results include all custom attributes that are visible to the requesting application, including those that are owned by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListMerchantCustomAttributes(string merchantId, VisibilityFilter? visibilityFilter, int? limit, string? cursor, bool? withDefinitions = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibilityFilter` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinitions` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `visibility_filter` ← `visibilityFilter`, `limit` ← `limit`, `cursor` ← `cursor`, `with_definitions` ← `withDefinitions`
- **Returns**: `ListMerchantCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveMerchantCustomAttribute
- **HTTP**: `GET /v2/merchants/{merchant_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Retrieves a custom attribute associated with a merchant. You can use the `with_definition` query parameter to also retrieve the custom attribute definition in the same call. To retrieve a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveMerchantCustomAttribute(string merchantId, string key, int? version, bool? withDefinition = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinition` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `with_definition` ← `withDefinition`, `version` ← `version`
- **Returns**: `RetrieveMerchantCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveMerchantCustomAttributeDefinition
- **HTTP**: `GET /v2/merchants/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Retrieves a merchant-related custom attribute definition from a Square seller account. To retrieve a custom attribute definition created by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveMerchantCustomAttributeDefinition(string key, int? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `RetrieveMerchantCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMerchantCustomAttributeDefinition
- **HTTP**: `PUT /v2/merchants/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Updates a merchant-related custom attribute definition for a Square seller account. Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the `schema` for a `Selection` data type. Only the definition owner can update a custom attribute definition.
- **Signature**: `UpdateMerchantCustomAttributeDefinition(string key, UpdateMerchantCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateMerchantCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertMerchantCustomAttribute
- **HTTP**: `POST /v2/merchants/{merchant_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Creates or updates a custom attribute for a merchant. Use this endpoint to set the value of a custom attribute for a specified merchant. A custom attribute is based on a custom attribute definition in a Square seller account, which is created using the CreateMerchantCustomAttributeDefinition endpoint. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `UpsertMerchantCustomAttribute(string merchantId, string key, UpsertMerchantCustomAttributeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertMerchantCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
