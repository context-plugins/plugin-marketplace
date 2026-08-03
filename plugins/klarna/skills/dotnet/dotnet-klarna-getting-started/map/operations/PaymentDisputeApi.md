# PaymentDisputeApi — operations

Accessor: `client.PaymentDisputeApi` · Source: `Api/PaymentDisputeApi.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AcceptLoss
- **HTTP**: `POST /v4/payment/disputes/{payment_dispute_id}/accept-loss` (Default (api))
- **Notes**: Use this endpoint to accept the loss of the dispute when the dispute is in `INITIATED` or `PRE_ARBITRATION` state. The dispute will transition to state `CLOSED` with outcome `LOST`.
- **Signature**: `AcceptLoss(string paymentDisputeId, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrationMetadata` — nullable, no default → **must pass explicitly**
  - `partnerCorrelationId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `V4PaymentDisputesAcceptLossResponse`
- **Error**: `SdkException<AcceptLossError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetResourceErrorConflictError(out ResourceErrorConflictError)` [409] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AppealDispute
- **HTTP**: `POST /v4/payment/disputes/{payment_dispute_id}/appeal` (Default (api))
- **Notes**: Use this endpoint to submit an appeal for a preliminary dispute decision by providing a summary of the reasons why the decision is considered incorrect when the dispute is in `PRE_ARBITRATION` state. The dispute will transition to state `ARBITRATION` while Klarna will review the appeal information.
- **Signature**: `AppealDispute(string paymentDisputeId, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, V4PaymentDisputesAppealRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrationMetadata` — nullable, no default → **must pass explicitly**
  - `partnerCorrelationId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentDisputeAppealResponse`
- **Error**: `SdkException<AppealDisputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetResourceErrorConflictError(out ResourceErrorConflictError)` [409] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnrollMerchant
- **HTTP**: `POST /v4/payment/disputes/merchants/{merchant_id}/enroll` (Default (api))
- **Notes**: Activates dispute handling for a single merchant account. Partners are not allowed and cannot enroll individual merchants.
- **Signature**: `EnrollMerchant(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EnrollMerchantError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnrollPartner
- **HTTP**: `POST /v4/payment/disputes/partners/{partner_id}/enroll` (Default (api))
- **Notes**: Activates dispute handling for a partner account. Merchants are not allowed and cannot enroll a partner.
- **Signature**: `EnrollPartner(string partnerId, SelfOnboardPartnerRequestPayload body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EnrollPartnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDisputeAttachment
- **HTTP**: `GET /v4/payment/disputes/{payment_dispute_id}/attachments/{payment_dispute_attachment_id}/download` (Default (api))
- **Notes**: Download an attachment file associated with the dispute. This can be either a partner-submitted evidence attachment or a customer-provided evidence attachment. If the attachment_id does not belong to the specified dispute_id, a 404 error will be returned.
- **Signature**: `GetDisputeAttachment(string paymentDisputeId, string paymentDisputeAttachmentId, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrationMetadata` — nullable, no default → **must pass explicitly**
  - `partnerCorrelationId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetDisputeAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDisputeDetails
- **HTTP**: `GET /v4/payment/disputes/{payment_dispute_id}` (Default (api))
- **Notes**: Retrieve the dispute in its current state.
- **Signature**: `GetDisputeDetails(string paymentDisputeId, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrationMetadata` — nullable, no default → **must pass explicitly**
  - `partnerCorrelationId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentDisputeBody`
- **Error**: `SdkException<GetDisputeDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDisputes
- **HTTP**: `GET /v4/payment/disputes` (Default (api))
- **Notes**: Retrieve a list of disputes. Filter by payment transaction ids, state, reason, purchase references, dispute creation date (created_at), or dispute closing date (closed_at).
- **Signature**: `ListDisputes(IReadOnlyList<string>? orderIds, IReadOnlyList<string>? paymentTransactionIds, IReadOnlyList<PaymentDisputeState>? state, IReadOnlyList<PaymentDisputeReason>? reason, IReadOnlyList<SortBy>? sortBy, IReadOnlyList<string>? purchaseReferences, DateTimeOffset? createdAtStart, DateTimeOffset? createdAtEnd, DateTimeOffset? closedAtStart, DateTimeOffset? closedAtEnd, DateTimeOffset? updatedAtStart, DateTimeOffset? updatedAtEnd, int? size, string? startingAfter, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`orderIds` … `partnerCorrelationId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order_ids` ← `orderIds`, `payment_transaction_ids` ← `paymentTransactionIds`, `state` ← `state`, `reason` ← `reason`, `sort_by` ← `sortBy`, `purchase_references` ← `purchaseReferences`, `created_at_start` ← `createdAtStart`, `created_at_end` ← `createdAtEnd`, `closed_at_start` ← `closedAtStart`, `closed_at_end` ← `closedAtEnd`, `updated_at_start` ← `updatedAtStart`, `updated_at_end` ← `updatedAtEnd`, `size` ← `size`, `starting_after` ← `startingAfter`
- **Returns**: `DisputesList`
- **Error**: `SdkException<ListDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RespondToDisputeRequest
- **HTTP**: `POST /v4/payment/disputes/{payment_dispute_id}/represent` (Default (api))
- **Notes**: Use this endpoint to submit partner information by providing a document containing all relevant information when the dispute is in `INITIATED` state. Optionally, include `partner_proposed_refund_amount` to propose a partial refund while providing evidence for why the remaining amount should not be refunded. The dispute will transition to state `REPRESENTMENT` for Klarna review after submission.
- **Signature**: `RespondToDisputeRequest(string paymentDisputeId, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, PaymentDisputeRespondToEvidenceRequestPayload body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrationMetadata` — nullable, no default → **must pass explicitly**
  - `partnerCorrelationId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentDisputeEvidenceRequestResponse`
- **Error**: `SdkException<RespondToDisputeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetInputErrorValidationError(out InputErrorValidationError)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetResourceErrorConflictError(out ResourceErrorConflictError)` [409] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadAttachment
- **HTTP**: `POST /v4/payment/disputes/{payment_dispute_id}/attachments` (Default (api))
- **Notes**: Upload a partner evidence attachment using multipart/form-data. The response returns a `payment_dispute_attachment_id` that you can reference when using the respond endpoint. Supported file types: PDF, JPEG, PNG, and DOCX. Maximum file size is 7MB.
- **Signature**: `UploadAttachment(string paymentDisputeId, ApplicationJson? klarnaIntegrationMetadata, string? partnerCorrelationId, BinaryContent file, string? filename, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIntegrationMetadata` — nullable, no default → **must pass explicitly**
  - `partnerCorrelationId` — nullable, no default → **must pass explicitly**
  - `filename` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentDisputeNewAttachmentResponse`
- **Error**: `SdkException<UploadAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetAccessErrorUnauthorized(out AccessErrorUnauthorized)` [401] · `TryGetResourceErrorOperationForbidden(out ResourceErrorOperationForbidden)` [403] · `TryGetResourceErrorNotFoundError(out ResourceErrorNotFoundError)` [404] · `TryGetResourceErrorConflictError(out ResourceErrorConflictError)` [409] · `TryGetAccessErrorRateLimited(out AccessErrorRateLimited)` [429] · `TryGetTechnicalErrorInternalError(out TechnicalErrorInternalError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
