# CustomFields — operations

Accessor: `client.CustomFields` · Source: `Api/CustomFields.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMetadata
- **HTTP**: `POST /{resource_type}/{resource_id}/metadata.json` (Production)
- **Notes**: Creates metadata and metafields for a specific subscription or customer, or updates metadata values of existing metafields for a subscription or customer. Metadata values are limited to 2 KB in size. If you create metadata on a subscription or customer with a metafield that does not already exist, the metafield is created with the metadata you specify and it is always added as a text field. You can update the input_type for the metafield with the Update Metafield endpoint. &gt;Note: Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for Subscriptions and another 100 for Customers.
- **Signature**: `CreateMetadata(ResourceType resourceType, int resourceId, CreateMetadataRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Metadata>`
- **Error**: `SdkException<CreateMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleErrorResponse1(out SingleErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateMetafields
- **HTTP**: `POST /{resource_type}/metafields.json` (Production)
- **Notes**: Creates metafields on a Site for either the Subscriptions or Customers resource. Metafields and their metadata are created in the Custom Fields configuration page on your Site. Metafields can be populated with metadata when you create them or later with the Update Metafield , Create Metadata , or Update Metadata endpoints. The Create Metadata and Update Metadata endpoints allow you to add metafields and metadata values to a specific subscription or customer. Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for Subscriptions and another 100 for Customers. &gt; Note: After creating a metafield, the resource type cannot be modified. In the UI and product documentation, metafields and metadata are called Custom Fields. Metafield is the custom field Metadata is the data populating the custom field. See Custom Fields Reference and Custom Fields Tab for information on using Custom Fields in the Advanced Billing UI.
- **Signature**: `CreateMetafields(ResourceType resourceType, CreateMetafieldsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Metafield>`
- **Error**: `SdkException<CreateMetafieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleErrorResponse1(out SingleErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMetadata
- **HTTP**: `DELETE /{resource_type}/{resource_id}/metadata.json` (Production)
- **Notes**: Deletes one or more metafields (and associated metadata) from the specified subscription or customer.
- **Signature**: `DeleteMetadata(ResourceType resourceType, int resourceId, string? name, IReadOnlyList<string>? names, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `names` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `names` ← `names`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMetafield
- **HTTP**: `DELETE /{resource_type}/metafields.json` (Production)
- **Notes**: Deletes a metafield from your Site. Removes the metafield and associated metadata from all Subscriptions or Customers resources on the Site.
- **Signature**: `DeleteMetafield(ResourceType resourceType, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMetafieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMetadata
- **HTTP**: `GET /{resource_type}/{resource_id}/metadata.json` (Production)
- **Notes**: Lists metadata and metafields for a specific customer or subscription.
- **Signature**: `ListMetadata(ResourceType resourceType, int resourceId, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `PaginatedMetadata`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListMetadataForResourceType
- **HTTP**: `GET /{resource_type}/metadata.json` (Production)
- **Notes**: Lists metadata for a specified array of subscriptions or customers.
- **Signature**: `ListMetadataForResourceType(ResourceType resourceType, BasicDateField? dateField, DateTimeOffset? startDate, DateTimeOffset? endDate, DateTimeOffset? startDatetime, DateTimeOffset? endDatetime, bool? withDeleted, IReadOnlyList<int>? resourceIds, SortingDirection? direction, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`dateField` … `direction`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `date_field` ← `dateField`, `start_date` ← `startDate`, `end_date` ← `endDate`, `start_datetime` ← `startDatetime`, `end_datetime` ← `endDatetime`, `with_deleted` ← `withDeleted`, `resource_ids` ← `resourceIds`, `direction` ← `direction`
- **Returns**: `PaginatedMetadata`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListMetafields
- **HTTP**: `GET /{resource_type}/metafields.json` (Production)
- **Notes**: Lists the metafields and their associated details for a Site and resource type. You can filter the request to a specific metafield.
- **Signature**: `ListMetafields(ResourceType resourceType, string? name, SortingDirection? direction, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `direction` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `page` ← `page`, `per_page` ← `perPage`, `direction` ← `direction`
- **Returns**: `ListMetafieldsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateMetadata
- **HTTP**: `PUT /{resource_type}/{resource_id}/metadata.json` (Production)
- **Notes**: Updates metadata and metafields on the Site and the customer or subscription specified, and updates the metadata value on a subscription or customer. If you update metadata on a subscription or customer with a metafield that does not already exist, the metafield is created with the metadata you specify and it is always added as a text field to the Site and to the subscription or customer you specify. You can update the input_type for the metafield with the Update Metafield endpoint. Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for the Subscription resource and another 100 for the Customer resource.
- **Signature**: `UpdateMetadata(ResourceType resourceType, int resourceId, UpdateMetadataRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Metadata>`
- **Error**: `SdkException<UpdateMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleErrorResponse1(out SingleErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMetafield
- **HTTP**: `PUT /{resource_type}/metafields.json` (Production)
- **Notes**: Updates metafields on your Site for a resource type. Depending on the request structure, you can update or add metafields and metadata to the Subscriptions or Customers resource. With this endpoint, you can: - Add metafields. If the metafield specified in current_name does not exist, a new metafield is added. &gt;Note: Each site is limited to 100 unique metafields per resource. This means you can have 100 metafields for Subscriptions and another 100 for Customers. - Change the name of a metafield. &gt;Note: To keep the metafield name the same and only update the metadata for the metafield, you must use the current metafield name in both the `current_name` and `name` parameters. Change the input type for the metafield. For example, you can change a metafield input type from text to a dropdown. If you change the input type from text to a dropdown or radio, you must update the specific subscriptions or customers where the metafield was used to reflect the updated metafield and metadata. - Add metadata values to the existing metadata for a dropdown or radio metafield. &gt;Note: Updates to metadata overwrite. To add one or more values, you must specify all metadata values including the new value you want to add. Add new metadata to a dropdown or radio for a metafield that was created without metadata. - Remove metadata for a dropdown or radio for a metafield. &gt;Note: Updates to metadata overwrite existing values. To remove one or more values, specify all metadata values except those you want to remove. - Add or update scope settings for a metafield. &gt;Note: Scope changes overwrite existing settings. You must specify the complete scope, including the changes you want to make.
- **Signature**: `UpdateMetafield(ResourceType resourceType, UpdateMetafieldsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Metafield>`
- **Error**: `SdkException<UpdateMetafieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleErrorResponse1(out SingleErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
