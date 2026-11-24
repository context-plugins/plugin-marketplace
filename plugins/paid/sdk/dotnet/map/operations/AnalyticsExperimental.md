<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnalyticsExperimental — operations

Accessor: `client.AnalyticsExperimental` · Source: `src/Paid/Api/AnalyticsExperimental.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExecuteAnalyticsQuery

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ExecuteAnalyticsQuery(ExecuteAnalyticsQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `AnalyticsQueryResponse`
- **Error**: `ApiException<ExecuteAnalyticsQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 408, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExecuteAnalyticsQueryRequest` | `src/Paid/Requests/AnalyticsExperimental/ExecuteAnalyticsQueryRequest.cs` |
| `AnalyticsQueryRequest` | `src/Paid/Models/AnalyticsQueryRequest.cs` |
| `AnalyticsQueryResponse` | `src/Paid/Models/AnalyticsQueryResponse.cs` |
| `ExecuteAnalyticsQueryError` | `src/Paid/Errors/ExecuteAnalyticsQueryError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetAnalyticsSchema

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetAnalyticsSchema(GetAnalyticsSchemaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `AnalyticsSchemaResponse`
- **Error**: `ApiException<GetAnalyticsSchemaError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnalyticsSchemaRequest` | `src/Paid/Requests/AnalyticsExperimental/GetAnalyticsSchemaRequest.cs` |
| `AnalyticsSchemaResponse` | `src/Paid/Models/AnalyticsSchemaResponse.cs` |
| `GetAnalyticsSchemaError` | `src/Paid/Errors/GetAnalyticsSchemaError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetSignalsMetadata

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetSignalsMetadata(GetSignalsMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `signalName` ← `SignalName`, `fromDate` ← `FromDate`, `toDate` ← `ToDate`
- **Returns**: `SignalsMetadataResponse`
- **Error**: `ApiException<GetSignalsMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignalsMetadataRequest` | `src/Paid/Requests/AnalyticsExperimental/GetSignalsMetadataRequest.cs` |
| `SignalsMetadataResponse` | `src/Paid/Models/SignalsMetadataResponse.cs` |
| `GetSignalsMetadataError` | `src/Paid/Errors/GetSignalsMetadataError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

