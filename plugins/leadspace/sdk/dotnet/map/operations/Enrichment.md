<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrichment — operations

Accessor: `client.Enrichment` · Source: `src/Leadspace/Api/Enrichment.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EnrichBulkRecords

- **Auth**: `options.BearerAuth`
- **Signature**: `EnrichBulkRecords(EnrichBulkRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkAccepted`
- **Error**: `ApiException<EnrichBulkRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorLeadspaceApiV4EnrichmentApi([NotNullWhen(true)] out ErrorLeadspaceApiV4EnrichmentApi? value)` [400, 427, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichBulkRecordsRequest` | `src/Leadspace/Requests/Enrichment/EnrichBulkRecordsRequest.cs` |
| `BulkEnrichmentRequest` | `src/Leadspace/Models/BulkEnrichmentRequest.cs` |
| `BulkAccepted` | `src/Leadspace/Models/BulkAccepted.cs` |
| `EnrichBulkRecordsError` | `src/Leadspace/Errors/EnrichBulkRecordsError.cs` |
| `ErrorLeadspaceApiV4EnrichmentApi` | `src/Leadspace/Models/ErrorLeadspaceApiV4EnrichmentApi.cs` |

### EnrichSingleRecord

- **Auth**: `options.BearerAuth`
- **Signature**: `EnrichSingleRecord(EnrichSingleRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EnrichmentResult`
- **Error**: `ApiException<EnrichSingleRecordError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorLeadspaceApiV4EnrichmentApi([NotNullWhen(true)] out ErrorLeadspaceApiV4EnrichmentApi? value)` [400, 427, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 405, 415, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichSingleRecordRequest` | `src/Leadspace/Requests/Enrichment/EnrichSingleRecordRequest.cs` |
| `SingleEnrichmentRequest` | `src/Leadspace/Models/SingleEnrichmentRequest.cs` |
| `EnrichmentResult` | `src/Leadspace/Models/EnrichmentResult.cs` |
| `EnrichSingleRecordError` | `src/Leadspace/Errors/EnrichSingleRecordError.cs` |
| `ErrorLeadspaceApiV4EnrichmentApi` | `src/Leadspace/Models/ErrorLeadspaceApiV4EnrichmentApi.cs` |

