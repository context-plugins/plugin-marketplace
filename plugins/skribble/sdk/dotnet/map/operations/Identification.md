<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identification — operations

Accessor: `client.Identification` · Source: `src/Skribble/Api/Identification.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetIdentificationEvidenceFiles

- **Server group**: `DefaultSkribbleIdentificationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetIdentificationEvidenceFiles(GetIdentificationEvidenceFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `EvidenceId`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<GetIdentificationEvidenceFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceFilesRequest` | `src/Skribble/Requests/Identification/GetIdentificationEvidenceFilesRequest.cs` |
| `GetIdentificationEvidenceFilesError` | `src/Skribble/Errors/GetIdentificationEvidenceFilesError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetIdentificationEvidenceJson

- **Server group**: `DefaultSkribbleIdentificationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetIdentificationEvidenceJson(GetIdentificationEvidenceJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `EvidenceId`
- **Returns**: `object`
- **Error**: `ApiException<GetIdentificationEvidenceJsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceJsonRequest` | `src/Skribble/Requests/Identification/GetIdentificationEvidenceJsonRequest.cs` |
| `GetIdentificationEvidenceJsonError` | `src/Skribble/Errors/GetIdentificationEvidenceJsonError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetIdentificationEvidenceJwt

- **Server group**: `DefaultSkribbleIdentificationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetIdentificationEvidenceJwt(GetIdentificationEvidenceJwtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `EvidenceId`
- **Returns**: `string`
- **Error**: `ApiException<GetIdentificationEvidenceJwtError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceJwtRequest` | `src/Skribble/Requests/Identification/GetIdentificationEvidenceJwtRequest.cs` |
| `GetIdentificationEvidenceJwtError` | `src/Skribble/Errors/GetIdentificationEvidenceJwtError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetIdentificationEvidenceStatus

- **Server group**: `DefaultSkribbleIdentificationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetIdentificationEvidenceStatus(GetIdentificationEvidenceStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `EvidenceId`
- **Returns**: `IdentificationEvidenceStatusResponse`
- **Error**: `ApiException<GetIdentificationEvidenceStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceStatusRequest` | `src/Skribble/Requests/Identification/GetIdentificationEvidenceStatusRequest.cs` |
| `IdentificationEvidenceStatusResponse` | `src/Skribble/Models/IdentificationEvidenceStatusResponse.cs` |
| `GetIdentificationEvidenceStatusError` | `src/Skribble/Errors/GetIdentificationEvidenceStatusError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

