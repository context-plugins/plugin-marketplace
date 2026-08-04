# BookingCustomAttributes — operations

Accessor: `client.BookingCustomAttributes` · Source: `Api/BookingCustomAttributes.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkDeleteBookingCustomAttributes
- **HTTP**: `POST /v2/bookings/custom-attributes/bulk-delete` (Default (connect))
- **Notes**: Bulk deletes bookings custom attributes. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `BulkDeleteBookingCustomAttributes(BulkDeleteBookingCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkDeleteBookingCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpsertBookingCustomAttributes
- **HTTP**: `POST /v2/bookings/custom-attributes/bulk-upsert` (Default (connect))
- **Notes**: Bulk upserts bookings custom attributes. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `BulkUpsertBookingCustomAttributes(BulkUpsertBookingCustomAttributesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpsertBookingCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateBookingCustomAttributeDefinition
- **HTTP**: `POST /v2/bookings/custom-attribute-definitions` (Default (connect))
- **Notes**: Creates a bookings custom attribute definition. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `CreateBookingCustomAttributeDefinition(CreateBookingCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateBookingCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBookingCustomAttribute
- **HTTP**: `DELETE /v2/bookings/{booking_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Deletes a bookings custom attribute. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `DeleteBookingCustomAttribute(string bookingId, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteBookingCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBookingCustomAttributeDefinition
- **HTTP**: `DELETE /v2/bookings/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Deletes a bookings custom attribute definition. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `DeleteBookingCustomAttributeDefinition(string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteBookingCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBookingCustomAttributeDefinitions
- **HTTP**: `GET /v2/bookings/custom-attribute-definitions` (Default (connect))
- **Notes**: Get all bookings custom attribute definitions. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `ListBookingCustomAttributeDefinitions(int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListBookingCustomAttributeDefinitionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBookingCustomAttributes
- **HTTP**: `GET /v2/bookings/{booking_id}/custom-attributes` (Default (connect))
- **Notes**: Lists a booking's custom attributes. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `ListBookingCustomAttributes(string bookingId, int? limit, string? cursor, bool? withDefinitions = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinitions` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`, `with_definitions` ← `withDefinitions`
- **Returns**: `ListBookingCustomAttributesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBookingCustomAttribute
- **HTTP**: `GET /v2/bookings/{booking_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Retrieves a bookings custom attribute. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `RetrieveBookingCustomAttribute(string bookingId, string key, int? version, bool? withDefinition = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `withDefinition` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `with_definition` ← `withDefinition`, `version` ← `version`
- **Returns**: `RetrieveBookingCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBookingCustomAttributeDefinition
- **HTTP**: `GET /v2/bookings/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Retrieves a bookings custom attribute definition. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `RetrieveBookingCustomAttributeDefinition(string key, int? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `RetrieveBookingCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBookingCustomAttributeDefinition
- **HTTP**: `PUT /v2/bookings/custom-attribute-definitions/{key}` (Default (connect))
- **Notes**: Updates a bookings custom attribute definition. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `UpdateBookingCustomAttributeDefinition(string key, UpdateBookingCustomAttributeDefinitionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateBookingCustomAttributeDefinitionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpsertBookingCustomAttribute
- **HTTP**: `PUT /v2/bookings/{booking_id}/custom-attributes/{key}` (Default (connect))
- **Notes**: Upserts a bookings custom attribute. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `UpsertBookingCustomAttribute(string bookingId, string key, UpsertBookingCustomAttributeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpsertBookingCustomAttributeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
