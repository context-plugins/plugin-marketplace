<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkExport — operations

Accessor: `client.BulkExport` · Source: `src/CommonElements/Api/BulkExport.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Export

- **Auth**: `options.BearerAuth`
- **Signature**: `Export(ExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Resource`
- **Query params (wire ← C#)**: `format` ← `Format`, `columns` ← `Columns`, `state` ← `State`, `q` ← `Q`, `county` ← `County`, `subtype` ← `Subtype`, `category` ← `Category`, `unit_min / unit_max` ← `UnitMinUnitMax`, `year_min / year_max` ← `YearMinYearMax`, `is_claimed` ← `IsClaimed`, `mgmt` ← `Mgmt`, `chapter / topic` ← `ChapterTopic`, `sirs_on_file / elevator_delinquent` ← `SirsOnFileElevatorDelinquent`, `milestone_status / pool_last_result` ← `MilestoneStatusPoolLastResult`, `has_sirs / has_elevator_cert` ← `HasSirsHasElevatorCert`, `fha_status` ← `FhaStatus`, `min_risk / max_risk` ← `MinRiskMaxRisk`
- **Returns**: `ApiV1ExportResponse`
- **Error**: `ApiException<ExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportRequest` | `src/CommonElements/Requests/BulkExport/ExportRequest.cs` |
| `ApiV1ExportResponse` | `src/CommonElements/Models/ApiV1ExportResponse.cs` |
| `ExportError` | `src/CommonElements/Errors/ExportError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### ExportChanges

- **Auth**: `options.BearerAuth`
- **Signature**: `ExportChanges(ExportChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `format` ← `Format`, `columns` ← `Columns`, `kind` ← `Kind`, `state` ← `State`, `county` ← `County`, `subtype` ← `Subtype`, `since` ← `Since`, `until` ← `Until`, `min_magnitude` ← `MinMagnitude`
- **Returns**: `ApiV1ExportChangesResponse`
- **Error**: `ApiException<ExportChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportChangesRequest` | `src/CommonElements/Requests/BulkExport/ExportChangesRequest.cs` |
| `ApiV1ExportChangesResponse` | `src/CommonElements/Models/ApiV1ExportChangesResponse.cs` |
| `ExportChangesError` | `src/CommonElements/Errors/ExportChangesError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

