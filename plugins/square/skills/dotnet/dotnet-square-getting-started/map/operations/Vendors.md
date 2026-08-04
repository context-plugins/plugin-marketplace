# Vendors — operations

Accessor: `client.Vendors` · Source: `Api/Vendors.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkCreateVendors
- **HTTP**: `POST /v2/vendors/bulk-create` (Default (connect))
- **Notes**: Creates one or more Vendor objects to represent suppliers to a seller.
- **Signature**: `BulkCreateVendors(BulkCreateVendorsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkCreateVendorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkRetrieveVendors
- **HTTP**: `POST /v2/vendors/bulk-retrieve` (Default (connect))
- **Notes**: Retrieves one or more vendors of specified Vendor IDs.
- **Signature**: `BulkRetrieveVendors(BulkRetrieveVendorsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkRetrieveVendorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpdateVendors
- **HTTP**: `PUT /v2/vendors/bulk-update` (Default (connect))
- **Notes**: Updates one or more of existing Vendor objects as suppliers to a seller.
- **Signature**: `BulkUpdateVendors(BulkUpdateVendorsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkUpdateVendorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateVendor
- **HTTP**: `POST /v2/vendors/create` (Default (connect))
- **Notes**: Creates a single Vendor object to represent a supplier to a seller.
- **Signature**: `CreateVendor(CreateVendorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateVendorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveVendor
- **HTTP**: `GET /v2/vendors/{vendor_id}` (Default (connect))
- **Notes**: Retrieves the vendor of a specified Vendor ID.
- **Signature**: `RetrieveVendor(string vendorId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveVendorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchVendors
- **HTTP**: `POST /v2/vendors/search` (Default (connect))
- **Notes**: Searches for vendors using a filter against supported Vendor properties and a supported sorter.
- **Signature**: `SearchVendors(SearchVendorsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchVendorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateVendor
- **HTTP**: `PUT /v2/vendors/{vendor_id}` (Default (connect))
- **Notes**: Updates an existing Vendor object as a supplier to a seller.
- **Signature**: `UpdateVendor(string vendorId, UpdateVendorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateVendorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
