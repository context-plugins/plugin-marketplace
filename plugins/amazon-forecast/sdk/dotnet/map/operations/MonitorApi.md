<!-- Generated file — do not edit; regenerated with the SDK. -->

# MonitorApi — operations

Accessor: `client.MonitorApi` · Source: `src/AmazonForecast/Api/MonitorApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMonitor

- **Auth**: `options.Sigv4`
- **Signature**: `CreateMonitor(CreateMonitorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMonitorOperationRequest` | `src/AmazonForecast/Requests/MonitorApi/CreateMonitorOperationRequest.cs` |
| `XAmzTargetAmazonForecastServiceMonitorApi` | `src/AmazonForecast/Models/Enums/XAmzTargetAmazonForecastServiceMonitorApi.cs` |
| `CreateMonitorError` | `src/AmazonForecast/Errors/CreateMonitorError.cs` |

### DeleteMonitor

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteMonitor(DeleteMonitorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMonitorOperationRequest` | `src/AmazonForecast/Requests/MonitorApi/DeleteMonitorOperationRequest.cs` |
| `XAmzTarget1AmazonForecastServiceMonitorApi` | `src/AmazonForecast/Models/Enums/XAmzTarget1AmazonForecastServiceMonitorApi.cs` |
| `DeleteMonitorError` | `src/AmazonForecast/Errors/DeleteMonitorError.cs` |

### DescribeMonitor

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeMonitor(DescribeMonitorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeMonitorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeMonitorOperationRequest` | `src/AmazonForecast/Requests/MonitorApi/DescribeMonitorOperationRequest.cs` |
| `XAmzTarget2AmazonForecastServiceMonitorApi` | `src/AmazonForecast/Models/Enums/XAmzTarget2AmazonForecastServiceMonitorApi.cs` |
| `DescribeMonitorError` | `src/AmazonForecast/Errors/DescribeMonitorError.cs` |

### ListMonitors

- **Auth**: `options.Sigv4`
- **Signature**: `ListMonitors(ListMonitorsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMonitorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorsOperationRequest` | `src/AmazonForecast/Requests/MonitorApi/ListMonitorsOperationRequest.cs` |
| `XAmzTarget3AmazonForecastServiceMonitorApi` | `src/AmazonForecast/Models/Enums/XAmzTarget3AmazonForecastServiceMonitorApi.cs` |
| `ListMonitorsError` | `src/AmazonForecast/Errors/ListMonitorsError.cs` |

