<!-- Generated file — do not edit; regenerated with the SDK. -->

# GovernanceApi — operations

Accessor: `client.GovernanceApi` · Source: `src/Deliverd/Api/GovernanceApi.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1GovernanceFrameworks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceFrameworks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

### GetApiV1GovernanceFrameworksMapping

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceFrameworksMapping(GetApiV1GovernanceFrameworksMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `taskId` ← `TaskId`, `framework` ← `Framework`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1GovernanceFrameworksMappingRequest` | `src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceFrameworksMappingRequest.cs` |

### GetApiV1GovernanceIctRegister

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceIctRegister(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

### GetApiV1GovernanceIctRegisterExport

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceIctRegisterExport(GetApiV1GovernanceIctRegisterExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `format` ← `Format`, `template` ← `Template`, `asOf` ← `AsOf`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1GovernanceIctRegisterExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GovernanceIctRegisterExportRequest` | `src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceIctRegisterExportRequest.cs` |
| `Format` | `src/Deliverd/Models/Enums/Format.cs` |
| `Template` | `src/Deliverd/Models/Enums/Template.cs` |
| `GetApiV1GovernanceIctRegisterExportError` | `src/Deliverd/Errors/GetApiV1GovernanceIctRegisterExportError.cs` |

### GetApiV1GovernanceIncidents

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceIncidents(GetApiV1GovernanceIncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `aiSystemId` ← `AiSystemId`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1GovernanceIncidentsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1GovernanceIncidentsRequest` | `src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceIncidentsRequest.cs` |
| `StatusDeliverdDevGovernanceApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevGovernanceApi.cs` |
| `ApiV1GovernanceIncidentsResponse` | `src/Deliverd/Models/ApiV1GovernanceIncidentsResponse.cs` |

### GetApiV1GovernanceIncidentsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceIncidentsById(GetApiV1GovernanceIncidentsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1GovernanceIncidentsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GovernanceIncidentsByIdRequest` | `src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceIncidentsByIdRequest.cs` |
| `GetApiV1GovernanceIncidentsByIdError` | `src/Deliverd/Errors/GetApiV1GovernanceIncidentsByIdError.cs` |

### GetApiV1GovernancePolicies

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernancePolicies(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

### GetApiV1GovernanceSummary

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GovernanceSummary(GetApiV1GovernanceSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `aiSystemId` ← `AiSystemId`, `risk` ← `Risk`, `owner` ← `Owner`, `provider` ← `Provider`, `dataClassification` ← `DataClassification`, `jurisdiction` ← `Jurisdiction`, `framework` ← `Framework`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1GovernanceSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1GovernanceSummaryRequest` | `src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceSummaryRequest.cs` |
| `Risk` | `src/Deliverd/Models/Enums/Risk.cs` |
| `GetApiV1GovernanceSummaryError` | `src/Deliverd/Errors/GetApiV1GovernanceSummaryError.cs` |

### PostApiV1GovernanceAuthorityEvaluate

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GovernanceAuthorityEvaluate(PostApiV1GovernanceAuthorityEvaluateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1GovernanceAuthorityEvaluateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GovernanceAuthorityEvaluateRequest` | `src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceAuthorityEvaluateRequest.cs` |
| `ApiV1GovernanceAuthorityEvaluateRequest` | `src/Deliverd/Models/ApiV1GovernanceAuthorityEvaluateRequest.cs` |
| `PostApiV1GovernanceAuthorityEvaluateError` | `src/Deliverd/Errors/PostApiV1GovernanceAuthorityEvaluateError.cs` |

### PostApiV1GovernanceFrameworks

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GovernanceFrameworks(PostApiV1GovernanceFrameworksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1GovernanceFrameworksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GovernanceFrameworksRequest` | `src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceFrameworksRequest.cs` |
| `ApiV1GovernanceFrameworksRequest` | `src/Deliverd/Models/ApiV1GovernanceFrameworksRequest.cs` |
| `PostApiV1GovernanceFrameworksError` | `src/Deliverd/Errors/PostApiV1GovernanceFrameworksError.cs` |

### PostApiV1GovernanceIncidents

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GovernanceIncidents(PostApiV1GovernanceIncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1GovernanceIncidentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GovernanceIncidentsRequest` | `src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceIncidentsRequest.cs` |
| `ApiV1GovernanceIncidentsRequest` | `src/Deliverd/Models/ApiV1GovernanceIncidentsRequest.cs` |
| `PostApiV1GovernanceIncidentsError` | `src/Deliverd/Errors/PostApiV1GovernanceIncidentsError.cs` |

### PostApiV1GovernanceIncidentsByIdReports

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GovernanceIncidentsByIdReports(PostApiV1GovernanceIncidentsByIdReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1GovernanceIncidentsByIdReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GovernanceIncidentsByIdReportsRequest` | `src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceIncidentsByIdReportsRequest.cs` |
| `ApiV1GovernanceIncidentsReportsRequest` | `src/Deliverd/Models/ApiV1GovernanceIncidentsReportsRequest.cs` |
| `PostApiV1GovernanceIncidentsByIdReportsError` | `src/Deliverd/Errors/PostApiV1GovernanceIncidentsByIdReportsError.cs` |

