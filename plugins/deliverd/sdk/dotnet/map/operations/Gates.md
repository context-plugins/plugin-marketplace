<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gates — operations

Accessor: `client.Gates` · Source: `src/Deliverd/Api/Gates.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1GatesById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GatesById(GetApiV1GatesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1GatesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1GatesByIdRequest` | `src/Deliverd/Requests/Gates/GetApiV1GatesByIdRequest.cs` |
| `ApiV1GatesResponse` | `src/Deliverd/Models/ApiV1GatesResponse.cs` |

### GetApiV1GatesByIdEvidence

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1GatesByIdEvidence(GetApiV1GatesByIdEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1GatesByIdEvidenceRequest` | `src/Deliverd/Requests/Gates/GetApiV1GatesByIdEvidenceRequest.cs` |
| `Format` | `src/Deliverd/Models/Enums/Format.cs` |

### PostApiV1Gates

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Gates(PostApiV1GatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1GatesResponse`
- **Error**: `ApiException<PostApiV1GatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Gates423Error1([NotNullWhen(true)] out ApiV1Gates423Error1? value)` [423] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GatesRequest` | `src/Deliverd/Requests/Gates/PostApiV1GatesRequest.cs` |
| `ApiV1GatesRequest` | `src/Deliverd/Models/ApiV1GatesRequest.cs` |
| `ApiV1GatesResponse` | `src/Deliverd/Models/ApiV1GatesResponse.cs` |
| `PostApiV1GatesError` | `src/Deliverd/Errors/PostApiV1GatesError.cs` |
| `ApiV1Gates423Error1` | `src/Deliverd/Models/ApiV1Gates423Error1.cs` |

### PostApiV1GatesByIdCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GatesByIdCancel(PostApiV1GatesByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1GatesCancelResponse`
- **Error**: `ApiException<PostApiV1GatesByIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1GatesCancel403Error1([NotNullWhen(true)] out ApiV1GatesCancel403Error1? value)` [403] · `TryGetApiV1GatesCancel409Error1([NotNullWhen(true)] out ApiV1GatesCancel409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GatesByIdCancelRequest` | `src/Deliverd/Requests/Gates/PostApiV1GatesByIdCancelRequest.cs` |
| `ApiV1GatesCancelRequest` | `src/Deliverd/Models/ApiV1GatesCancelRequest.cs` |
| `ApiV1GatesCancelResponse` | `src/Deliverd/Models/ApiV1GatesCancelResponse.cs` |
| `PostApiV1GatesByIdCancelError` | `src/Deliverd/Errors/PostApiV1GatesByIdCancelError.cs` |
| `ApiV1GatesCancel403Error1` | `src/Deliverd/Models/ApiV1GatesCancel403Error1.cs` |
| `ApiV1GatesCancel409Error1` | `src/Deliverd/Models/ApiV1GatesCancel409Error1.cs` |

### PostApiV1GatesByIdExecution

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GatesByIdExecution(PostApiV1GatesByIdExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1GatesExecutionResponse`
- **Error**: `ApiException<PostApiV1GatesByIdExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1GatesExecution403Error1([NotNullWhen(true)] out ApiV1GatesExecution403Error1? value)` [403] · `TryGetApiV1GatesExecution409Error1([NotNullWhen(true)] out ApiV1GatesExecution409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GatesByIdExecutionRequest` | `src/Deliverd/Requests/Gates/PostApiV1GatesByIdExecutionRequest.cs` |
| `ApiV1GatesExecutionRequest` | `src/Deliverd/Models/ApiV1GatesExecutionRequest.cs` |
| `ApiV1GatesExecutionResponse` | `src/Deliverd/Models/ApiV1GatesExecutionResponse.cs` |
| `PostApiV1GatesByIdExecutionError` | `src/Deliverd/Errors/PostApiV1GatesByIdExecutionError.cs` |
| `ApiV1GatesExecution403Error1` | `src/Deliverd/Models/ApiV1GatesExecution403Error1.cs` |
| `ApiV1GatesExecution409Error1` | `src/Deliverd/Models/ApiV1GatesExecution409Error1.cs` |

### PostApiV1GatesByIdRelease

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GatesByIdRelease(PostApiV1GatesByIdReleaseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1GatesReleaseResponse`
- **Error**: `ApiException<PostApiV1GatesByIdReleaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1GatesRelease403Error1([NotNullWhen(true)] out ApiV1GatesRelease403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1GatesByIdReleaseRequest` | `src/Deliverd/Requests/Gates/PostApiV1GatesByIdReleaseRequest.cs` |
| `ApiV1GatesReleaseRequest` | `src/Deliverd/Models/ApiV1GatesReleaseRequest.cs` |
| `ApiV1GatesReleaseResponse` | `src/Deliverd/Models/ApiV1GatesReleaseResponse.cs` |
| `PostApiV1GatesByIdReleaseError` | `src/Deliverd/Errors/PostApiV1GatesByIdReleaseError.cs` |
| `ApiV1GatesRelease403Error1` | `src/Deliverd/Models/ApiV1GatesRelease403Error1.cs` |

### PostApiV1GatesVerifyToken

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1GatesVerifyToken(PostApiV1GatesVerifyTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1GatesVerifyTokenResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1GatesVerifyTokenRequest` | `src/Deliverd/Requests/Gates/PostApiV1GatesVerifyTokenRequest.cs` |
| `ApiV1GatesVerifyTokenRequest` | `src/Deliverd/Models/ApiV1GatesVerifyTokenRequest.cs` |
| `ApiV1GatesVerifyTokenResponse` | `src/Deliverd/Models/ApiV1GatesVerifyTokenResponse.cs` |

