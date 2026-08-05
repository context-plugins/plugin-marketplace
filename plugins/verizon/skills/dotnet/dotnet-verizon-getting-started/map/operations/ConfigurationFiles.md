# ConfigurationFiles — operations

Accessor: `client.ConfigurationFiles` · Source: `Api/ConfigurationFiles.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetListOfFiles
- **HTTP**: `GET /files/{acc}` (SoftwareManagementV2 (thingspace))
- **Notes**: You can retrieve a list of configuration or supplementary of files for an account.
- **Signature**: `GetListOfFiles(string acc, string distributionType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `distributionType` ← `distributionType`
- **Returns**: `RetrievesAvailableFilesResponseList`
- **Error**: `SdkException<GetListOfFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadConfigFile
- **HTTP**: `POST /files/{acc}` (SoftwareManagementV2 (thingspace))
- **Notes**: Uploads a configuration/supplementary file for an account. ThingSpace generates a fileName after the upload and is returned in the response.
- **Signature**: `UploadConfigFile(string acc, BinaryContent? fileupload, string? fileVersion, string? make, string? model, string? localTargetPath, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`fileupload` … `localTargetPath`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Returns**: `UploadConfigurationFilesResponse`
- **Error**: `SdkException<UploadConfigFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
