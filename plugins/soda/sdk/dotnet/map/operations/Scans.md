<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scans — operations

Accessor: `client.Scans` · Source: `src/Soda/Api/Scans.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1ScansScanId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1ScansScanId(DeleteApiV1ScansScanIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScanId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteApiV1ScansScanIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1ScansScanIdRequest` | `src/Soda/Requests/Scans/DeleteApiV1ScansScanIdRequest.cs` |
| `DeleteApiV1ScansScanIdError` | `src/Soda/Errors/DeleteApiV1ScansScanIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1ScansScanId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1ScansScanId(GetApiV1ScansScanIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScanId`
- **Returns**: `PublicApiScanStatusResponse`
- **Error**: `ApiException<GetApiV1ScansScanIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ScansScanIdRequest` | `src/Soda/Requests/Scans/GetApiV1ScansScanIdRequest.cs` |
| `PublicApiScanStatusResponse` | `src/Soda/Models/PublicApiScanStatusResponse.cs` |
| `GetApiV1ScansScanIdError` | `src/Soda/Errors/GetApiV1ScansScanIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1ScansScanIdLogs

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1ScansScanIdLogs(GetApiV1ScansScanIdLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScanId`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiScanLogsResponse`
- **Error**: `ApiException<GetApiV1ScansScanIdLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ScansScanIdLogsRequest` | `src/Soda/Requests/Scans/GetApiV1ScansScanIdLogsRequest.cs` |
| `PublicApiScanLogsResponse` | `src/Soda/Models/PublicApiScanLogsResponse.cs` |
| `GetApiV1ScansScanIdLogsError` | `src/Soda/Errors/GetApiV1ScansScanIdLogsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

