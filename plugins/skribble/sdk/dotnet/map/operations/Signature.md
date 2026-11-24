<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signature — operations

Accessor: `client.Signature` · Source: `src/Skribble/Api/Signature.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddDocumentInSignatureRequest

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `AddDocumentInSignatureRequest(AddDocumentInSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddDocumentInSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddDocumentInSignatureRequest` | `src/Skribble/Requests/Signature/AddDocumentInSignatureRequest.cs` |
| `SignatureDocumentUpload` | `src/Skribble/Models/SignatureDocumentUpload.cs` |
| `AddDocumentInSignatureRequestError` | `src/Skribble/Errors/AddDocumentInSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### CreateSignatureRequest

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `CreateSignatureRequest(CreateSignatureRequestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SignatureResponseV3`
- **Error**: `ApiException<CreateSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignatureRequestOperationRequest` | `src/Skribble/Requests/Signature/CreateSignatureRequestOperationRequest.cs` |
| `CreateSignatureRequest` | `src/Skribble/Models/CreateSignatureRequest.cs` |
| `SignatureResponseV3` | `src/Skribble/Models/SignatureResponseV3.cs` |
| `CreateSignatureRequestError` | `src/Skribble/Errors/CreateSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DeleteDocumentInSignatureRequest

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `DeleteDocumentInSignatureRequest(DeleteDocumentInSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `DocId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDocumentInSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocumentInSignatureRequest` | `src/Skribble/Requests/Signature/DeleteDocumentInSignatureRequest.cs` |
| `DeleteDocumentInSignatureRequestError` | `src/Skribble/Errors/DeleteDocumentInSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DeleteSignatureRequest

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `DeleteSignatureRequest(DeleteSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSignatureRequest` | `src/Skribble/Requests/Signature/DeleteSignatureRequest.cs` |
| `DeleteSignatureRequestError` | `src/Skribble/Errors/DeleteSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureRequestDetails

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureRequestDetails(GetSignatureRequestDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `SignatureResponseV3`
- **Error**: `ApiException<GetSignatureRequestDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureRequestDetailsRequest` | `src/Skribble/Requests/Signature/GetSignatureRequestDetailsRequest.cs` |
| `SignatureResponseV3` | `src/Skribble/Models/SignatureResponseV3.cs` |
| `GetSignatureRequestDetailsError` | `src/Skribble/Errors/GetSignatureRequestDetailsError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### InitiateSignatureRequest

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `InitiateSignatureRequest(InitiateSignatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<InitiateSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InitiateSignatureRequest` | `src/Skribble/Requests/Signature/InitiateSignatureRequest.cs` |
| `InitiateSignatureRequestError` | `src/Skribble/Errors/InitiateSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### WithdrawSignatureRequest

- **Server group**: `DefaultSkribbleSignatureApi`
- **Auth**: `options.Bearer`
- **Signature**: `WithdrawSignatureRequest(WithdrawSignatureRequestOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`
- **Returns**: `SignatureResponse`
- **Error**: `ApiException<WithdrawSignatureRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 404, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WithdrawSignatureRequestOperationRequest` | `src/Skribble/Requests/Signature/WithdrawSignatureRequestOperationRequest.cs` |
| `WithdrawSignatureRequest` | `src/Skribble/Models/WithdrawSignatureRequest.cs` |
| `SignatureResponse` | `src/Skribble/Models/SignatureResponse.cs` |
| `WithdrawSignatureRequestError` | `src/Skribble/Errors/WithdrawSignatureRequestError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

