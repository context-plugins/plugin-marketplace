# Tenants — operations

Accessor: `client.Tenants` · Source: `Api/Tenants.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create1
- **HTTP**: `POST /entities/tenants` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a new tenant for your workspace. Tenants are business customers that integrate via APIs.
- **Signature**: `Create1(string authorization, CreateTenantRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TenantResponse`
- **Error**: `SdkException<Create1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindAll2
- **HTTP**: `GET /entities/tenants` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve all tenants for your workspace with optional search filtering.
- **Signature**: `FindAll2(bool? includeSecure, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeSecure` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_secure` ← `includeSecure`
- **Returns**: `TenantListResponse`
- **Error**: `SdkException<FindAll2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindOne1
- **HTTP**: `GET /entities/tenants/{id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve a specific tenant by its unique identifier
- **Signature**: `FindOne1(string id, bool? includeSecure, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeSecure` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_secure` ← `includeSecure`
- **Returns**: `TenantResponse`
- **Error**: `SdkException<FindOne1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update2
- **HTTP**: `PATCH /entities/tenants/{id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Update an existing tenant's information. Only the following fields can be updated: - business_legal_name - business_dba - business_address_country - webhook_url At least one field must be provided.
- **Signature**: `Update2(string id, string authorization, UpdateTenantRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TenantResponse`
- **Error**: `SdkException<Update2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
