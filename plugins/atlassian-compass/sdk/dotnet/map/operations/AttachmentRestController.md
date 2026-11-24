<!-- Generated file — do not edit; regenerated with the SDK. -->

# AttachmentRestController — operations

Accessor: `client.AttachmentRestController` · Source: `src/AtlassianCompass/Api/AttachmentRestController.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiSpec

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteApiSpec(DeleteApiSpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`
- **Returns**: `string`
- **Error**: `ApiException<DeleteApiSpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiSpecRequest` | `src/AtlassianCompass/Requests/AttachmentRestController/DeleteApiSpecRequest.cs` |
| `DeleteApiSpecError` | `src/AtlassianCompass/Errors/DeleteApiSpecError.cs` |

### DeleteAttachment

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`, `ForgeAppId`, `Key`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAttachmentRequest` | `src/AtlassianCompass/Requests/AttachmentRestController/DeleteAttachmentRequest.cs` |
| `DeleteAttachmentError` | `src/AtlassianCompass/Errors/DeleteAttachmentError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |

### GetAttachment

- **Auth**: `options.BasicAuth`
- **Signature**: `GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`, `ForgeAppId`, `Key`
- **Returns**: `Attachment`
- **Error**: `ApiException<GetAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAttachmentRequest` | `src/AtlassianCompass/Requests/AttachmentRestController/GetAttachmentRequest.cs` |
| `Attachment` | `src/AtlassianCompass/Models/Attachment.cs` |
| `GetAttachmentError` | `src/AtlassianCompass/Errors/GetAttachmentError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |

### UploadApiSpec

- **Auth**: `options.BasicAuth`
- **Signature**: `UploadApiSpec(UploadApiSpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`, `File`
- **Returns**: `string`
- **Error**: `ApiException<UploadApiSpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 403, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadApiSpecRequest` | `src/AtlassianCompass/Requests/AttachmentRestController/UploadApiSpecRequest.cs` |
| `UploadApiSpecError` | `src/AtlassianCompass/Errors/UploadApiSpecError.cs` |

### UploadAttachment

- **Auth**: `options.BasicAuth`
- **Signature**: `UploadAttachment(UploadAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`, `ForgeAppId`, `Key`, `File`
- **Returns**: `Attachment`
- **Error**: `ApiException<UploadAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [400, 403, 404, 422, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAttachmentRequest` | `src/AtlassianCompass/Requests/AttachmentRestController/UploadAttachmentRequest.cs` |
| `Attachment` | `src/AtlassianCompass/Models/Attachment.cs` |
| `UploadAttachmentError` | `src/AtlassianCompass/Errors/UploadAttachmentError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |

