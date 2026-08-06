# PackageApi — operations

Accessor: `client.PackageApi` · Source: `Api/PackageApi.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeletePackage
- **HTTP**: `DELETE /packages/{owner}/{type}/{name}` (Server1)
- **Signature**: `DeletePackage(string owner, string type, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeletePackageVersion
- **HTTP**: `DELETE /packages/{owner}/{type}/{name}/{version}` (Server1)
- **Signature**: `DeletePackageVersion(string owner, string type, string name, string version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePackageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLatestPackageVersion
- **HTTP**: `GET /packages/{owner}/{type}/{name}/-/latest` (Server1)
- **Signature**: `GetLatestPackageVersion(string owner, string type, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Package`
- **Error**: `SdkException<GetLatestPackageVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPackage
- **HTTP**: `GET /packages/{owner}/{type}/{name}/{version}` (Server1)
- **Signature**: `GetPackage(string owner, string type, string name, string version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Package`
- **Error**: `SdkException<GetPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LinkPackage
- **HTTP**: `POST /packages/{owner}/{type}/{name}/-/link/{repo_name}` (Server1)
- **Signature**: `LinkPackage(string owner, string type, string name, string repoName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LinkPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPackageFiles
- **HTTP**: `GET /packages/{owner}/{type}/{name}/{version}/files` (Server1)
- **Signature**: `ListPackageFiles(string owner, string type, string name, string version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<PackageFile>`
- **Error**: `SdkException<ListPackageFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPackageVersions
- **HTTP**: `GET /packages/{owner}/{type}/{name}` (Server1)
- **Signature**: `ListPackageVersions(string owner, string type, string name, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Package>`
- **Error**: `SdkException<ListPackageVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListPackages
- **HTTP**: `GET /packages/{owner}` (Server1)
- **Signature**: `ListPackages(string owner, int? page, int? limit, Type4? type, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `q`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `type` ← `type`, `q` ← `q`
- **Returns**: `IReadOnlyList<Package>`
- **Error**: `SdkException<ListPackagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UnlinkPackage
- **HTTP**: `POST /packages/{owner}/{type}/{name}/-/unlink` (Server1)
- **Signature**: `UnlinkPackage(string owner, string type, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnlinkPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
