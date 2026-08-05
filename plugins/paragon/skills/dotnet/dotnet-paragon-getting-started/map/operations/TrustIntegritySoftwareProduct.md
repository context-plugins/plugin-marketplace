# TrustIntegritySoftwareProduct — operations

Accessor: `client.TrustIntegritySoftwareProduct` · Source: `Api/TrustIntegritySoftwareProduct.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### IntegrityServiceCreateSoftwareProduct
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/integrity/swproducts` (Default)
- **Signature**: `IntegrityServiceCreateSoftwareProduct(string orgId, IntegrityServiceCreateSoftwareProductBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityCreateSoftwareProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceDeleteSoftwareProduct
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/integrity/swproducts/{id}` (Default)
- **Signature**: `IntegrityServiceDeleteSoftwareProduct(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceListSoftwareProducts
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/swproducts` (Default)
- **Signature**: `IntegrityServiceListSoftwareProducts(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityListSoftwareProductsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceReadSoftwareProduct
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/swproducts/{id}` (Default)
- **Signature**: `IntegrityServiceReadSoftwareProduct(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityReadSoftwareProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceUpdateSoftwareProduct
- **HTTP**: `PUT /trust/api/v1/orgs/{orgId}/integrity/swproducts` (Default)
- **Signature**: `IntegrityServiceUpdateSoftwareProduct(string orgId, IntegrityServiceUpdateSoftwareProductBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityUpdateSoftwareProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
