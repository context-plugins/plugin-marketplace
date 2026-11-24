<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.Usage` · Source: `src/Paid/Api/Usage.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckUsage

- **Signature**: `CheckUsage(CheckUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `UsageCheckUsageResponse200`
- **Error**: `ApiException<CheckUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsageRequest` | `src/Paid/Requests/Usage/CheckUsageRequest.cs` |
| `UsageCheckUsageRequest` | `src/Paid/Models/UsageCheckUsageRequest.cs` |
| `UsageCheckUsageResponse200` | `src/Paid/Models/UsageCheckUsageResponse200.cs` |
| `CheckUsageError` | `src/Paid/Errors/CheckUsageError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

### RecordBulk

- **Signature**: `RecordBulk(RecordBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RecordBulkRequest` | `src/Paid/Requests/Usage/RecordBulkRequest.cs` |
| `UsageSignalsBulkRequest` | `src/Paid/Models/UsageSignalsBulkRequest.cs` |

### UsageRecordBulkV2

- **Signature**: `UsageRecordBulkV2(UsageRecordBulkV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<UsageRecordBulkV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsageRecordBulkV2Request` | `src/Paid/Requests/Usage/UsageRecordBulkV2Request.cs` |
| `UsageV2SignalsBulkRequest` | `src/Paid/Models/UsageV2SignalsBulkRequest.cs` |
| `UsageRecordBulkV2Error` | `src/Paid/Errors/UsageRecordBulkV2Error.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

