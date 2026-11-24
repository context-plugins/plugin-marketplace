<!-- Generated file — do not edit; regenerated with the SDK. -->

# CoverageApi — operations

Accessor: `client.CoverageApi` · Source: `src/HealthGorilla/Api/CoverageApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReadCoverage

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadCoverage(ReadCoverageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Coverage`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadCoverageRequest` | `src/HealthGorilla/Requests/CoverageApi/ReadCoverageRequest.cs` |
| `Coverage` | `src/HealthGorilla/Models/Coverage.cs` |

### SearchCoverage

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchCoverage(SearchCoverageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `patient` ← `Patient`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchCoverageRequest` | `src/HealthGorilla/Requests/CoverageApi/SearchCoverageRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

