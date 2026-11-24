<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.Traces` · Source: `src/Paid/Api/Traces.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTraces

- **Signature**: `GetTraces(GetTracesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `startTime` ← `StartTime`, `endTime` ← `EndTime`, `externalCustomerId` ← `ExternalCustomerId`, `externalProductId` ← `ExternalProductId`, `externalAgentId` ← `ExternalAgentId`, `metadata` ← `Metadata`
- **Returns**: `TracesResponse`
- **Error**: `ApiException<GetTracesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTracesRequest` | `src/Paid/Requests/Traces/GetTracesRequest.cs` |
| `TracesResponse` | `src/Paid/Models/TracesResponse.cs` |
| `GetTracesError` | `src/Paid/Errors/GetTracesError.cs` |
| `Error` | `src/Paid/Models/Error.cs` |

