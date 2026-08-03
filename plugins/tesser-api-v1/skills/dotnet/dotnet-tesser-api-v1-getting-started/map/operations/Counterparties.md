# Counterparties — operations

Accessor: `client.Counterparties` · Source: `Api/Counterparties.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create
- **HTTP**: `POST /entities/counterparties` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a new counterparty for your workspace. A counterparty is any external party that your organization transacts with, such as vendors, customers, or partners. Classifications: - individual : A natural person (requires first/last name) - business : A legal entity (requires legal name)
- **Signature**: `Create(string authorization, CreateCounterpartyRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCounterpartyResponse`
- **Error**: `SdkException<CreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindAll1
- **HTTP**: `GET /entities/counterparties` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve all counterparties for your workspace with optional filtering. Use query parameters to filter results: - classification : Filter by 'individual' or 'business'
- **Signature**: `FindAll1(Classification71? classification, bool? includeSecure, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `classification` — nullable, no default → **must pass explicitly**
  - `includeSecure` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `classification` ← `classification`, `include_secure` ← `includeSecure`
- **Returns**: `CounterpartyListResponse`
- **Error**: `SdkException<FindAll1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindOne
- **HTTP**: `GET /entities/counterparties/{id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve a specific counterparty by its unique identifier
- **Signature**: `FindOne(string id, Classification72? classification, bool? includeSecure, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `classification` — nullable, no default → **must pass explicitly**
  - `includeSecure` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `classification` ← `classification`, `include_secure` ← `includeSecure`
- **Returns**: `CounterpartyResponse`
- **Error**: `SdkException<FindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update1
- **HTTP**: `PATCH /entities/counterparties/{id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Update an existing counterparty's information. Only provide the fields you want to update. At least one field must be provided. Note: If changing classification from 'individual' to 'business' (or vice versa), make sure to also provide the appropriate fields for the new classification.
- **Signature**: `Update1(string id, string authorization, UpdateCounterpartyRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateCounterpartyResponse`
- **Error**: `SdkException<Update1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
