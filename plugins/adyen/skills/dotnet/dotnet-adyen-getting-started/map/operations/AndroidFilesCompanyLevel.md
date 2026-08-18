<!-- Generated file — do not edit; regenerated with the SDK. -->

# AndroidFilesCompanyLevel — operations

Accessor: `client.AndroidFilesCompanyLevel` · Source: `Api/AndroidFilesCompanyLevel.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesCompanyIdAndroidApps
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdAndroidApps(string companyId, int? pageNumber, int? pageSize, string? packageName, int? versionCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `versionCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `packageName` ← `packageName`, `versionCode` ← `versionCode`
- **Returns**: `AndroidAppsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdAndroidAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AndroidAppsResponse` | `Models/AndroidAppsResponse.cs` |
| `GetCompaniesCompanyIdAndroidAppsError` | `Errors/GetCompaniesCompanyIdAndroidAppsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdAndroidAppsId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdAndroidAppsId(string companyId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AndroidApp`
- **Error**: `SdkException<GetCompaniesCompanyIdAndroidAppsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AndroidApp` | `Models/AndroidApp.cs` |
| `GetCompaniesCompanyIdAndroidAppsIdError` | `Errors/GetCompaniesCompanyIdAndroidAppsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdAndroidCertificates
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdAndroidCertificates(string companyId, int? pageNumber, int? pageSize, string? certificateName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `certificateName` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `certificateName` ← `certificateName`
- **Returns**: `AndroidCertificatesResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdAndroidCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AndroidCertificatesResponse` | `Models/AndroidCertificatesResponse.cs` |
| `GetCompaniesCompanyIdAndroidCertificatesError` | `Errors/GetCompaniesCompanyIdAndroidCertificatesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdAndroidAppsId
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdAndroidAppsId(string companyId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ReprocessAndroidAppResponse`
- **Error**: `SdkException<PatchCompaniesCompanyIdAndroidAppsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ReprocessAndroidAppResponse` | `Models/ReprocessAndroidAppResponse.cs` |
| `PatchCompaniesCompanyIdAndroidAppsIdError` | `Errors/PatchCompaniesCompanyIdAndroidAppsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdAndroidApps
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdAndroidApps(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `UploadAndroidAppResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdAndroidAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAndroidAppResponse` | `Models/UploadAndroidAppResponse.cs` |
| `PostCompaniesCompanyIdAndroidAppsError` | `Errors/PostCompaniesCompanyIdAndroidAppsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdAndroidCertificates
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdAndroidCertificates(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `UploadAndroidCertificateResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdAndroidCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAndroidCertificateResponse` | `Models/UploadAndroidCertificateResponse.cs` |
| `PostCompaniesCompanyIdAndroidCertificatesError` | `Errors/PostCompaniesCompanyIdAndroidCertificatesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

