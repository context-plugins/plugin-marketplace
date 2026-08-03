# AndroidFilesCompanyLevel — operations

Accessor: `client.AndroidFilesCompanyLevel` · Source: `Api/AndroidFilesCompanyLevel.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompaniesCompanyIdAndroidApps
- **HTTP**: `GET /companies/{companyId}/androidApps` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of the Android apps that are available for the company identified in the path. These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through terminal actions . To make this request, your API credential must have one of the following roles : * Management API—Android files read * Management API—Android files read and write * Management API—Terminal actions read * Management API—Terminal actions read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdAndroidApps(string companyId, int? pageNumber, int? pageSize, string? packageName, int? versionCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `versionCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `packageName` ← `packageName`, `versionCode` ← `versionCode`
- **Returns**: `AndroidAppsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdAndroidAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdAndroidAppsId
- **HTTP**: `GET /companies/{companyId}/androidApps/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the Android app identified in the path. These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through terminal actions . To make this request, your API credential must have one of the following roles : * Management API—Android files read * Management API—Android files read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdAndroidAppsId(string companyId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AndroidApp`
- **Error**: `SdkException<GetCompaniesCompanyIdAndroidAppsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdAndroidCertificates
- **HTTP**: `GET /companies/{companyId}/androidCertificates` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of the Android certificates that are available for the company identified in the path. Typically, these certificates enable running apps on Android payment terminals. The certificates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through terminal actions . To make this request, your API credential must have one of the following roles : * Management API—Android files read * Management API—Android files read and write * Management API—Terminal actions read * Management API—Terminal actions read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdAndroidCertificates(string companyId, int? pageNumber, int? pageSize, string? certificateName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `certificateName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `certificateName` ← `certificateName`
- **Returns**: `AndroidCertificatesResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdAndroidCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdAndroidAppsId
- **HTTP**: `PATCH /companies/{companyId}/androidApps/{id}` (Default (balanceplatform-api-test))
- **Notes**: Reuploads the Android app identified in the path. To make this request, your API credential must have this role : * Management API—Android files read and write In the live environment, requests to this endpoint are subject to rate limits . &gt;By choosing to upload, install, or run any third-party applications on an Adyen payment terminal, you accept full responsibility and liability for any consequences of uploading, installing, or running any such applications.
- **Signature**: `PatchCompaniesCompanyIdAndroidAppsId(string companyId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReprocessAndroidAppResponse`
- **Error**: `SdkException<PatchCompaniesCompanyIdAndroidAppsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdAndroidApps
- **HTTP**: `POST /companies/{companyId}/androidApps` (Default (balanceplatform-api-test))
- **Notes**: Uploads an Android APK file to Adyen. The maximum APK file size is 200 MB. To make this request, your API credential must have the following role : * Management API—Android files read and write In the live environment, requests to this endpoint are subject to rate limits . &gt;By choosing to upload, install, or run any third-party applications on an Adyen payment terminal, you accept full responsibility and liability for any consequences of uploading, installing, or running any such applications.
- **Signature**: `PostCompaniesCompanyIdAndroidApps(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EntityReference`
- **Error**: `SdkException<PostCompaniesCompanyIdAndroidAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdAndroidCertificates
- **HTTP**: `POST /companies/{companyId}/androidCertificates` (Default (balanceplatform-api-test))
- **Notes**: Uploads an Android Certificate file to Adyen. In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostCompaniesCompanyIdAndroidCertificates(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EntityReference`
- **Error**: `SdkException<PostCompaniesCompanyIdAndroidCertificatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
