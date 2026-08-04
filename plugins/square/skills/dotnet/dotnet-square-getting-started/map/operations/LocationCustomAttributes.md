# LocationCustomAttributes — operations

Accessor: `client.LocationCustomAttributes` · Source: `Api/LocationCustomAttributes.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkDeleteLocationCustomAttributes
- **HTTP**: `POST /v2/locations/custom-attributes/bulk-delete` (Default (connect))
- **Notes**: Deletes custom attributes for locations as a bulk operation. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkDeleteLocationCustomAttributes(BulkDeleteLocationCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkDeleteLocationCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpsertLocationCustomAttributes
- **HTTP**: `POST /v2/locations/custom-attributes/bulk-upsert` (Default (connect))
- **Notes**: Creates or updates custom attributes for locations as a bulk operation. Use this endpoint to set the value of one or more custom attributes for one or more locations. A custom attribute is based on a custom attribute definition in a Square seller account, which is created using the CreateLocationCustomAttributeDefinition endpoint. This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert requests and returns a map of individual upsert responses. Each upsert request has a unique ID and provides a location ID and custom attribute. Each upsert response is returned with the ID of the corresponding request. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `BulkUpsertLocationCustomAttributes(BulkUpsertLocationCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpsertLocationCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateLocationCustomAttributeDefinition
- **HTTP**: `POST /v2/locations/custom-attribute-definitions` (Default (connect))
- **Notes**: Creates a location-related custom attribute definition for a Square seller account. Use this endpoint to define a custom attribute that can be associated with locations. A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties for a custom attribute. After the definition is created, you can call UpsertLocationCustomAttribute or BulkUpsertLocationCustomAttributes to set the custom attribute for locations.
- **Signature**: `CreateLocationCustomAttributeDefinition(CreateLocationCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateLocationCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLocationCustomAttribute
- **HTTP**: `DELETE /v2/locations/{location_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Deletes a custom attribute associated with a location. To delete a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `DeleteLocationCustomAttribute(string locationId, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteLocationCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLocationCustomAttributeDefinition
- **HTTP**: `DELETE /v2/locations/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Deletes a location-related custom attribute definition from a Square seller account. Deleting a custom attribute definition also deletes the corresponding custom attribute from all locations. Only the definition owner can delete a custom attribute definition.
- **Signature**: `DeleteLocationCustomAttributeDefinition(string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteLocationCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLocationCustomAttributeDefinitions
- **HTTP**: `GET /v2/locations/custom-attribute-definitions` (Default (connect))
- **Notes**: Lists the location-related custom attribute definitions that belong to a Square seller account. When all response pages are retrieved, the results include all custom attribute definitions that are visible to the requesting application, including those that are created by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListLocationCustomAttributeDefinitions(VisibilityFilter? visibilityFilter, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibilityFilter` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `visibility_filter` ← `visibilityFilter`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListLocationCustomAttributeDefinitionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLocationCustomAttributes
- **HTTP**: `GET /v2/locations/{location_id}/custom-attributes` (Default (connect))
- **Notes**: Lists the custom attributes associated with a location. You can use the `with_definitions` query parameter to also retrieve custom attribute definitions in the same call. When all response pages are retrieved, the results include all custom attributes that are visible to the requesting application, including those that are owned by other applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `ListLocationCustomAttributes(string locationId, VisibilityFilter? visibilityFilter, int? limit, string? cursor, bool? withDefinitions = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibilityFilter` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinitions` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `visibility_filter` ← `visibilityFilter`, `limit` ← `limit`, `cursor` ← `cursor`, `with_definitions` ← `withDefinitions`
- **Returns**: `ListLocationCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLocationCustomAttribute
- **HTTP**: `GET /v2/locations/{location_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Retrieves a custom attribute associated with a location. You can use the `with_definition` query parameter to also retrieve the custom attribute definition in the same call. To retrieve a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveLocationCustomAttribute(string locationId, string key, int? version, bool? withDefinition = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinition` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `with_definition` ← `withDefinition`, `version` ← `version`
- **Returns**: `RetrieveLocationCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLocationCustomAttributeDefinition
- **HTTP**: `GET /v2/locations/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Retrieves a location-related custom attribute definition from a Square seller account. To retrieve a custom attribute definition created by another application, the `visibility` setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `RetrieveLocationCustomAttributeDefinition(string key, int? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `RetrieveLocationCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLocationCustomAttributeDefinition
- **HTTP**: `PUT /v2/locations/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Updates a location-related custom attribute definition for a Square seller account. Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the `schema` for a `Selection` data type. Only the definition owner can update a custom attribute definition.
- **Signature**: `UpdateLocationCustomAttributeDefinition(string key, UpdateLocationCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateLocationCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertLocationCustomAttribute
- **HTTP**: `POST /v2/locations/{location_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Creates or updates a custom attribute for a location. Use this endpoint to set the value of a custom attribute for a specified location. A custom attribute is based on a custom attribute definition in a Square seller account, which is created using the CreateLocationCustomAttributeDefinition endpoint. To create or update a custom attribute owned by another application, the `visibility` setting must be `VISIBILITY_READ_WRITE_VALUES`.
- **Signature**: `UpsertLocationCustomAttribute(string locationId, string key, UpsertLocationCustomAttributeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertLocationCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
