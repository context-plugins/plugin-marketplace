# DisputeAttachments — operations

Accessor: `client.DisputeAttachments` · Source: `Api/DisputeAttachments.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDisputesDisputeIdAttachmentsAttachmentId
- **HTTP**: `DELETE /disputes/{disputeId}/attachments/{attachmentId}` (Default23 (balanceplatform-api-test))
- **Notes**: Removes the attachment from the raised dispute. Adyen may keep this file for compliance purposes.
- **Signature**: `DeleteDisputesDisputeIdAttachmentsAttachmentId(string disputeId, string attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteDisputesDisputeIdAttachmentsAttachmentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDisputesDisputeIdAttachments
- **HTTP**: `GET /disputes/{disputeId}/attachments` (Default23 (balanceplatform-api-test))
- **Notes**: Get a list of attachments associated with a dispute ID.
- **Signature**: `GetDisputesDisputeIdAttachments(string disputeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DisputeAttachment>`
- **Error**: `SdkException<GetDisputesDisputeIdAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDisputesDisputeIdAttachmentsAttachmentId
- **HTTP**: `GET /disputes/{disputeId}/attachments/{attachmentId}` (Default23 (balanceplatform-api-test))
- **Notes**: Search for a single attachment, providing the specific dispute ID and attachment ID.
- **Signature**: `GetDisputesDisputeIdAttachmentsAttachmentId(string disputeId, string attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DisputeAttachment`
- **Error**: `SdkException<GetDisputesDisputeIdAttachmentsAttachmentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostDisputesDisputeIdAttachments
- **HTTP**: `POST /disputes/{disputeId}/attachments` (Default23 (balanceplatform-api-test))
- **Notes**: Add supporting information as an attachment for the raised dispute. Upload receipts, communication, or any other documentation to support the dispute.
- **Signature**: `PostDisputesDisputeIdAttachments(string disputeId, DisputeAttachment body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AttachDocumentResponse`
- **Error**: `SdkException<PostDisputesDisputeIdAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
