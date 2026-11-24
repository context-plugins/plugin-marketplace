<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureAttachmentApi — operations

Accessor: `client.SignatureAttachmentApi` · Source: `src/Skribble/Api/SignatureAttachmentApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSignatureAttachment

- **Server group**: `DefaultSkribbleSignatureAttachmentApi`
- **Auth**: `options.Bearer`
- **Signature**: `CreateSignatureAttachment(CreateSignatureAttachmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `Body`
- **Returns**: `SignatureResponseSkribbleSignatureAttachmentApi`
- **Error**: `ApiException<CreateSignatureAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 404, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignatureAttachmentOperationRequest` | `src/Skribble/Requests/SignatureAttachmentApi/CreateSignatureAttachmentOperationRequest.cs` |
| `CreateSignatureAttachmentRequest` | `src/Skribble/Models/CreateSignatureAttachmentRequest.cs` |
| `SignatureResponseSkribbleSignatureAttachmentApi` | `src/Skribble/Models/SignatureResponseSkribbleSignatureAttachmentApi.cs` |
| `CreateSignatureAttachmentError` | `src/Skribble/Errors/CreateSignatureAttachmentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### DeleteSignatureAttachment

- **Server group**: `DefaultSkribbleSignatureAttachmentApi`
- **Auth**: `options.Bearer`
- **Signature**: `DeleteSignatureAttachment(DeleteSignatureAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `AttachmentId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSignatureAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSignatureAttachmentRequest` | `src/Skribble/Requests/SignatureAttachmentApi/DeleteSignatureAttachmentRequest.cs` |
| `DeleteSignatureAttachmentError` | `src/Skribble/Errors/DeleteSignatureAttachmentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### GetSignatureAttachmentContent

- **Server group**: `DefaultSkribbleSignatureAttachmentApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetSignatureAttachmentContent(GetSignatureAttachmentContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `AttachmentId`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<GetSignatureAttachmentContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignatureAttachmentContentRequest` | `src/Skribble/Requests/SignatureAttachmentApi/GetSignatureAttachmentContentRequest.cs` |
| `GetSignatureAttachmentContentError` | `src/Skribble/Errors/GetSignatureAttachmentContentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

