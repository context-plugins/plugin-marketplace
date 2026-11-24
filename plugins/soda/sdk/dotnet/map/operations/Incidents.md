<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.Incidents` · Source: `src/Soda/Api/Incidents.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Incidents

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Incidents(GetApiV1IncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `datasetId` ← `DatasetId`, `from` ← `From`, `incidentIds` ← `IncidentIds`, `leadId` ← `LeadId`, `page` ← `Page`, `severity` ← `Severity`, `size` ← `Size`, `status` ← `Status`, `to` ← `To`
- **Returns**: `PublicApiIncidentsResponse`
- **Error**: `ApiException<GetApiV1IncidentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1IncidentsRequest` | `src/Soda/Requests/Incidents/GetApiV1IncidentsRequest.cs` |
| `PublicApiIncidentsResponse` | `src/Soda/Models/PublicApiIncidentsResponse.cs` |
| `GetApiV1IncidentsError` | `src/Soda/Errors/GetApiV1IncidentsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1IncidentsIncidentIdRcaReport

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1IncidentsIncidentIdRcaReport(GetApiV1IncidentsIncidentIdRcaReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IncidentId`
- **Returns**: `PublicApiRcaReportContentDto`
- **Error**: `ApiException<GetApiV1IncidentsIncidentIdRcaReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1IncidentsIncidentIdRcaReportRequest` | `src/Soda/Requests/Incidents/GetApiV1IncidentsIncidentIdRcaReportRequest.cs` |
| `PublicApiRcaReportContentDto` | `src/Soda/Models/PublicApiRcaReportContentDto.cs` |
| `GetApiV1IncidentsIncidentIdRcaReportError` | `src/Soda/Errors/GetApiV1IncidentsIncidentIdRcaReportError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Incidents

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Incidents(PostApiV1IncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IncidentContentDto`
- **Error**: `ApiException<PostApiV1IncidentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1IncidentsRequest` | `src/Soda/Requests/Incidents/PostApiV1IncidentsRequest.cs` |
| `PublicApiCreateIncidentDto` | `src/Soda/Models/PublicApiCreateIncidentDto.cs` |
| `IncidentContentDto` | `src/Soda/Models/IncidentContentDto.cs` |
| `PostApiV1IncidentsError` | `src/Soda/Errors/PostApiV1IncidentsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1IncidentsIncidentId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1IncidentsIncidentId(PostApiV1IncidentsIncidentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IncidentId`, `Body`
- **Returns**: `IncidentContentDto`
- **Error**: `ApiException<PostApiV1IncidentsIncidentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1IncidentsIncidentIdRequest` | `src/Soda/Requests/Incidents/PostApiV1IncidentsIncidentIdRequest.cs` |
| `PublicApiUpdateIncidentDto` | `src/Soda/Models/PublicApiUpdateIncidentDto.cs` |
| `IncidentContentDto` | `src/Soda/Models/IncidentContentDto.cs` |
| `PostApiV1IncidentsIncidentIdError` | `src/Soda/Errors/PostApiV1IncidentsIncidentIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1IncidentsIncidentIdRcaReport

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1IncidentsIncidentIdRcaReport(PostApiV1IncidentsIncidentIdRcaReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IncidentId`, `Body`
- **Returns**: `PublicApiRcaReportContentDto`
- **Error**: `ApiException<PostApiV1IncidentsIncidentIdRcaReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1IncidentsIncidentIdRcaReportRequest` | `src/Soda/Requests/Incidents/PostApiV1IncidentsIncidentIdRcaReportRequest.cs` |
| `PublicApiRcaReportDto` | `src/Soda/Models/PublicApiRcaReportDto.cs` |
| `PublicApiRcaReportContentDto` | `src/Soda/Models/PublicApiRcaReportContentDto.cs` |
| `PostApiV1IncidentsIncidentIdRcaReportError` | `src/Soda/Errors/PostApiV1IncidentsIncidentIdRcaReportError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

