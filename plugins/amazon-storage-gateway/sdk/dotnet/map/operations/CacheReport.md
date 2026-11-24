<!-- Generated file — do not edit; regenerated with the SDK. -->

# CacheReport — operations

Accessor: `client.CacheReport` · Source: `src/AwsStorageGateway/Api/CacheReport.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelCacheReport

- **Auth**: `options.Sigv4`
- **Signature**: `CancelCacheReport(CancelCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CancelCacheReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelCacheReportRequest` | `src/AwsStorageGateway/Requests/CacheReport/CancelCacheReportRequest.cs` |
| `XAmzTargetAwsStorageGatewayCacheReportApi` | `src/AwsStorageGateway/Models/Enums/XAmzTargetAwsStorageGatewayCacheReportApi.cs` |
| `CancelCacheReportError` | `src/AwsStorageGateway/Errors/CancelCacheReportError.cs` |

### DeleteCacheReport

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteCacheReport(DeleteCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCacheReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCacheReportRequest` | `src/AwsStorageGateway/Requests/CacheReport/DeleteCacheReportRequest.cs` |
| `XAmzTarget1AwsStorageGatewayCacheReportApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget1AwsStorageGatewayCacheReportApi.cs` |
| `DeleteCacheReportError` | `src/AwsStorageGateway/Errors/DeleteCacheReportError.cs` |

### DescribeCacheReport

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCacheReport(DescribeCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCacheReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCacheReportRequest` | `src/AwsStorageGateway/Requests/CacheReport/DescribeCacheReportRequest.cs` |
| `XAmzTarget2AwsStorageGatewayCacheReportApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget2AwsStorageGatewayCacheReportApi.cs` |
| `DescribeCacheReportError` | `src/AwsStorageGateway/Errors/DescribeCacheReportError.cs` |

### ListCacheReports

- **Auth**: `options.Sigv4`
- **Signature**: `ListCacheReports(ListCacheReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCacheReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCacheReportsRequest` | `src/AwsStorageGateway/Requests/CacheReport/ListCacheReportsRequest.cs` |
| `XAmzTarget3AwsStorageGatewayCacheReportApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget3AwsStorageGatewayCacheReportApi.cs` |
| `ListCacheReportsError` | `src/AwsStorageGateway/Errors/ListCacheReportsError.cs` |

### StartCacheReport

- **Auth**: `options.Sigv4`
- **Signature**: `StartCacheReport(StartCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartCacheReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCacheReportRequest` | `src/AwsStorageGateway/Requests/CacheReport/StartCacheReportRequest.cs` |
| `XAmzTarget4AwsStorageGatewayCacheReportApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget4AwsStorageGatewayCacheReportApi.cs` |
| `StartCacheReportError` | `src/AwsStorageGateway/Errors/StartCacheReportError.cs` |

