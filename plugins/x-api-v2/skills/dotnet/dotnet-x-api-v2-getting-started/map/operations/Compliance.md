# Compliance — operations

Accessor: `client.Compliance` · Source: `Api/Compliance.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateComplianceJobs
- **HTTP**: `POST /2/compliance/jobs` (Default (api))
- **Notes**: Creates a new Compliance Job for the specified job type.
- **Signature**: `CreateComplianceJobs(IReadOnlyList<ComplianceJobField>? complianceJobFields, CreateComplianceJobsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `complianceJobFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `compliance_job.fields` ← `complianceJobFields`
- **Returns**: `CreateComplianceJobsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetComplianceJobs
- **HTTP**: `GET /2/compliance/jobs` (Default (api))
- **Notes**: Retrieves a list of Compliance Jobs filtered by job type and optional status.
- **Signature**: `GetComplianceJobs(Type5 type, Status? status, IReadOnlyList<ComplianceJobField>? complianceJobFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `complianceJobFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `status` ← `status`, `compliance_job.fields` ← `complianceJobFields`
- **Returns**: `GetComplianceJobsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetComplianceJobsById
- **HTTP**: `GET /2/compliance/jobs/{id}` (Default (api))
- **Notes**: Retrieves details of a specific Compliance Job by its ID.
- **Signature**: `GetComplianceJobsById(string id, IReadOnlyList<ComplianceJobField>? complianceJobFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `complianceJobFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `compliance_job.fields` ← `complianceJobFields`
- **Returns**: `GetComplianceJobsByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
