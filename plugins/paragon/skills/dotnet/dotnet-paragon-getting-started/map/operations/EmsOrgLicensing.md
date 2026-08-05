# EmsOrgLicensing — operations

Accessor: `client.EmsOrgLicensing` · Source: `Api/EmsOrgLicensing.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddSystemLicense
- **HTTP**: `POST /api/v1/orgs/{org_id}/system-license` (Default)
- **Notes**: Upload a system license key file for the organization. The request body is the raw license key file content (plain text). Requires Org Admin privileges.
- **Signature**: `AddSystemLicense(string orgId, string? xCsrftoken, string body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<AddSystemLicenseError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSystemLicense
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/system-license/{license_id}` (Default)
- **Notes**: Delete the system license(s) matching the specified license id. Requires Org Admin privileges.
- **Signature**: `DeleteSystemLicense(string orgId, string licenseId, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<DeleteSystemLicenseError>` — **Case A (typed)**
- **Error accessors**: `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSystemLicenseFeaturesSummary
- **HTTP**: `GET /api/v1/orgs/{org_id}/system-licenses/features-summary` (Default)
- **Notes**: Retrieve the details of all supported licensed features for the organization.
- **Signature**: `GetSystemLicenseFeaturesSummary(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<GetSystemLicenseFeaturesSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFound1(out NotFound1)` [404] · `TryGetInternalServerError1(out InternalServerError1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSystemLicenses
- **HTTP**: `GET /api/v1/orgs/{org_id}/system-licenses` (Default)
- **Notes**: Retrieve the license-key contents for all available license ids in the organization.
- **Signature**: `GetSystemLicenses(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
