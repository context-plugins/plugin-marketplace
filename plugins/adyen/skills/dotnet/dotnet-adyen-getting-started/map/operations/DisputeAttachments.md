<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputeAttachments — operations

Accessor: `client.DisputeAttachments` · Source: `Api/DisputeAttachments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDisputesDisputeIdAttachmentsAttachmentId
- **Server group**: `Default23`
- **Signature**: `DeleteDisputesDisputeIdAttachmentsAttachmentId(string disputeId, string attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteDisputesDisputeIdAttachmentsAttachmentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDisputesDisputeIdAttachmentsAttachmentIdError` | `Errors/DeleteDisputesDisputeIdAttachmentsAttachmentIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetDisputesDisputeIdAttachments
- **Server group**: `Default23`
- **Signature**: `GetDisputesDisputeIdAttachments(string disputeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `IReadOnlyList<DisputeAttachment>`
- **Error**: `SdkException<GetDisputesDisputeIdAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisputeAttachment` | `Models/DisputeAttachment.cs` |
| `GetDisputesDisputeIdAttachmentsError` | `Errors/GetDisputesDisputeIdAttachmentsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetDisputesDisputeIdAttachmentsAttachmentId
- **Server group**: `Default23`
- **Signature**: `GetDisputesDisputeIdAttachmentsAttachmentId(string disputeId, string attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DisputeAttachment`
- **Error**: `SdkException<GetDisputesDisputeIdAttachmentsAttachmentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisputeAttachment` | `Models/DisputeAttachment.cs` |
| `GetDisputesDisputeIdAttachmentsAttachmentIdError` | `Errors/GetDisputesDisputeIdAttachmentsAttachmentIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostDisputesDisputeIdAttachments
- **Server group**: `Default23`
- **Signature**: `PostDisputesDisputeIdAttachments(string disputeId, DisputeAttachment body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AttachDocumentResponse`
- **Error**: `SdkException<PostDisputesDisputeIdAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisputeAttachment` | `Models/DisputeAttachment.cs` |
| `AttachDocumentResponse` | `Models/AttachDocumentResponse.cs` |
| `PostDisputesDisputeIdAttachmentsError` | `Errors/PostDisputesDisputeIdAttachmentsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

