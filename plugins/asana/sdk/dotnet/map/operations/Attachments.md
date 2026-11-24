<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attachments — operations

Accessor: `client.Attachments` · Source: `src/Asana/Api/Attachments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAttachmentForObject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateAttachmentForObject(CreateAttachmentForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `AttachmentsResponse`
- **Error**: `ApiException<CreateAttachmentForObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAttachmentForObjectRequest` | `src/Asana/Requests/Attachments/CreateAttachmentForObjectRequest.cs` |
| `ResourceSubtype1` | `src/Asana/Models/Enums/ResourceSubtype1.cs` |
| `AttachmentsResponse` | `src/Asana/Models/AttachmentsResponse.cs` |
| `CreateAttachmentForObjectError` | `src/Asana/Errors/CreateAttachmentForObjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteAttachment

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttachmentGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `AttachmentsResponse1`
- **Error**: `ApiException<DeleteAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAttachmentRequest` | `src/Asana/Requests/Attachments/DeleteAttachmentRequest.cs` |
| `AttachmentsResponse1` | `src/Asana/Models/AttachmentsResponse1.cs` |
| `DeleteAttachmentError` | `src/Asana/Errors/DeleteAttachmentError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetAttachment

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttachmentGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `AttachmentsResponse`
- **Error**: `ApiException<GetAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 424, 500, 501, 503, 504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAttachmentRequest` | `src/Asana/Requests/Attachments/GetAttachmentRequest.cs` |
| `AttachmentsResponse` | `src/Asana/Models/AttachmentsResponse.cs` |
| `GetAttachmentError` | `src/Asana/Errors/GetAttachmentError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetAttachmentsForObject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetAttachmentsForObject(GetAttachmentsForObjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Parent`
- **Query params (wire ← C#)**: `parent` ← `Parent`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `AttachmentsResponse2`
- **Error**: `ApiException<GetAttachmentsForObjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAttachmentsForObjectRequest` | `src/Asana/Requests/Attachments/GetAttachmentsForObjectRequest.cs` |
| `AttachmentsResponse2` | `src/Asana/Models/AttachmentsResponse2.cs` |
| `GetAttachmentsForObjectError` | `src/Asana/Errors/GetAttachmentsForObjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

