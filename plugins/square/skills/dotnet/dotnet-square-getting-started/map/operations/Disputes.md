# Disputes — operations

Accessor: `client.Disputes` · Source: `Api/Disputes.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AcceptDispute
- **HTTP**: `POST /v2/disputes/{dispute_id}/accept` (Default (connect))
- **Notes**: Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and updates the dispute state to ACCEPTED. Square debits the disputed amount from the seller’s Square account. If the Square account does not have sufficient funds, Square debits the associated bank account.
- **Signature**: `AcceptDispute(string disputeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AcceptDisputeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateDisputeEvidenceFile
- **HTTP**: `POST /v2/disputes/{dispute_id}/evidence-files` (Default (connect))
- **Notes**: Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.
- **Signature**: `CreateDisputeEvidenceFile(string disputeId, CreateDisputeEvidenceFileRequest? request, BinaryContent? imageFile, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `request` — nullable, no default → **must pass explicitly**
  - `imageFile` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateDisputeEvidenceFileResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateDisputeEvidenceText
- **HTTP**: `POST /v2/disputes/{dispute_id}/evidence-text` (Default (connect))
- **Notes**: Uploads text to use as evidence for a dispute challenge.
- **Signature**: `CreateDisputeEvidenceText(string disputeId, CreateDisputeEvidenceTextRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateDisputeEvidenceTextResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDisputeEvidence
- **HTTP**: `DELETE /v2/disputes/{dispute_id}/evidence/{evidence_id}` (Default (connect))
- **Notes**: Removes specified evidence from a dispute. Square does not send the bank any evidence that is removed.
- **Signature**: `DeleteDisputeEvidence(string disputeId, string evidenceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteDisputeEvidenceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDisputeEvidence
- **HTTP**: `GET /v2/disputes/{dispute_id}/evidence` (Default (connect))
- **Notes**: Returns a list of evidence associated with a dispute.
- **Signature**: `ListDisputeEvidence(string disputeId, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`
- **Returns**: `ListDisputeEvidenceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDisputes
- **HTTP**: `GET /v2/disputes` (Default (connect))
- **Notes**: Returns a list of disputes associated with a particular account.
- **Signature**: `ListDisputes(string? cursor, DisputeState? states, string? locationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `states` — nullable, no default → **must pass explicitly**
  - `locationId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `states` ← `states`, `location_id` ← `locationId`
- **Returns**: `ListDisputesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveDispute
- **HTTP**: `GET /v2/disputes/{dispute_id}` (Default (connect))
- **Notes**: Returns details about a specific dispute.
- **Signature**: `RetrieveDispute(string disputeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveDisputeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveDisputeEvidence
- **HTTP**: `GET /v2/disputes/{dispute_id}/evidence/{evidence_id}` (Default (connect))
- **Notes**: Returns the metadata for the evidence specified in the request URL path. You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence cannot be downloaded after you upload it.
- **Signature**: `RetrieveDisputeEvidence(string disputeId, string evidenceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveDisputeEvidenceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SubmitEvidence
- **HTTP**: `POST /v2/disputes/{dispute_id}/submit-evidence` (Default (connect))
- **Notes**: Submits evidence to the cardholder's bank. The evidence submitted by this endpoint includes evidence uploaded using the CreateDisputeEvidenceFile and CreateDisputeEvidenceText endpoints and evidence automatically provided by Square, when available. Evidence cannot be removed from a dispute after submission.
- **Signature**: `SubmitEvidence(string disputeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubmitEvidenceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
