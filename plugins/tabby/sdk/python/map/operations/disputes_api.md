<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputesApi — operations

Accessor: `client.disputes_api` · Source: `tabby/apis/disputes_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.disputes_api.get_dispute

- **Route**: `GET /api/v1/disputes/{disputeId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_dispute(dispute_id: UUID, dispute_id_template: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dispute_id`, `dispute_id_template`
- **Params**: `dispute_id` — path · `dispute_id_template` — path `disputeId`
- **Returns (parsed)**: `Dispute1`
- **Returns (raw)**: `ApiResult[Dispute1, GetDisputeErrorBody]`
- **Error**: `GetDisputeErrorBody` — **Case A (typed)**
- **Error arms**: `Error404DisputeNotFound` [400, 404] · `Error401InvalidSecretKey` [401] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Dispute1` | `tabby/models/dispute1.py` |
| `GetDisputeErrorBody` | `tabby/errors/get_dispute_error.py` |
| `Error404DisputeNotFound` | `tabby/models/error404_dispute_not_found.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |

### client.disputes_api.get_disputes

- **Route**: `GET /api/v1/disputes`
- **Auth**: `bearer_auth`
- **Signature**: `def get_disputes(*, statuses: StatusesOrStr | None = None, created_at_gte: str | None = None, created_at_lte: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `statuses` — query · `created_at_gte` — query · `created_at_lte` — query · `page_token` — query
- **Returns (parsed)**: `Disputes`
- **Returns (raw)**: `ApiResult[Disputes, GetDisputesErrorBody]`
- **Error**: `GetDisputesErrorBody` — **Case A (typed)**
- **Error arms**: `Error404DisputeNotFound` [400] · `Error401InvalidSecretKey` [401] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusesOrStr` | `tabby/models/enums/statuses.py` |
| `Disputes` | `tabby/models/disputes.py` |
| `GetDisputesErrorBody` | `tabby/errors/get_disputes_error.py` |
| `Error404DisputeNotFound` | `tabby/models/error404_dispute_not_found.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |

### client.disputes_api.post_dispute_provide_evidence

- **Route**: `POST /api/v1/disputes/{disputeId}/provide-evidence`
- **Auth**: `bearer_auth`
- **Signature**: `def post_dispute_provide_evidence(dispute_id: UUID, dispute_id_template: str, body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dispute_id`, `dispute_id_template`, `body`
- **Params**: `dispute_id` — path · `dispute_id_template` — path `disputeId` · `body` — JSON body
- **Returns (parsed)**: `Evidence`
- **Returns (raw)**: `ApiResult[Evidence, PostDisputeProvideEvidenceErrorBody]`
- **Error**: `PostDisputeProvideEvidenceErrorBody` — **Case A (typed)**
- **Error arms**: `Error404DisputeNotFound` [400, 404] · `Error401InvalidSecretKey` [401] · `Error400` [409] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DisputesProvideEvidenceRequest` | `tabby/models/api_v1_disputes_provide_evidence_request.py` |
| `ApiV1DisputesProvideEvidenceRequestDict` | `tabby/models/api_v1_disputes_provide_evidence_request.py` |
| `Evidence` | `tabby/models/evidence.py` |
| `PostDisputeProvideEvidenceErrorBody` | `tabby/errors/post_dispute_provide_evidence_error.py` |
| `Error404DisputeNotFound` | `tabby/models/error404_dispute_not_found.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |
| `Error400` | `tabby/models/error400.py` |

### client.disputes_api.post_disputes_approve

- **Route**: `POST /api/v1/disputes/approve`
- **Auth**: `bearer_auth`
- **Signature**: `def post_disputes_approve(body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DisputesApprove`
- **Returns (raw)**: `ApiResult[DisputesApprove, PostDisputesApproveErrorBody]`
- **Error**: `PostDisputesApproveErrorBody` — **Case A (typed)**
- **Error arms**: `Error404DisputeNotFound` [400] · `Error401InvalidSecretKey` [401] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DisputesApproveRequest` | `tabby/models/api_v1_disputes_approve_request.py` |
| `ApiV1DisputesApproveRequestDict` | `tabby/models/api_v1_disputes_approve_request.py` |
| `DisputesApprove` | `tabby/models/disputes_approve.py` |
| `PostDisputesApproveErrorBody` | `tabby/errors/post_disputes_approve_error.py` |
| `Error404DisputeNotFound` | `tabby/models/error404_dispute_not_found.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |

### client.disputes_api.post_disputes_challenge

- **Route**: `POST /api/v1/disputes/challenge`
- **Auth**: `bearer_auth`
- **Signature**: `def post_disputes_challenge(body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DisputesChallenge`
- **Returns (raw)**: `ApiResult[DisputesChallenge, PostDisputesChallengeErrorBody]`
- **Error**: `PostDisputesChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `Error404DisputeNotFound` [400] · `Error401InvalidSecretKey` [401] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DisputesChallengeRequest` | `tabby/models/api_v1_disputes_challenge_request.py` |
| `ApiV1DisputesChallengeRequestDict` | `tabby/models/api_v1_disputes_challenge_request.py` |
| `DisputesChallenge` | `tabby/models/disputes_challenge.py` |
| `PostDisputesChallengeErrorBody` | `tabby/errors/post_disputes_challenge_error.py` |
| `Error404DisputeNotFound` | `tabby/models/error404_dispute_not_found.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |

### client.disputes_api.post_upload_attachment

- **Route**: `POST /api/v1/disputes/attachments/upload`
- **Auth**: `bearer_auth`
- **Signature**: `def post_upload_attachment(attachment: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `attachment`
- **Params**: `attachment` — multipart file
- **Returns (parsed)**: `DisputeAttachmentUpload`
- **Returns (raw)**: `ApiResult[DisputeAttachmentUpload, PostUploadAttachmentErrorBody]`
- **Error**: `PostUploadAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error404DisputeNotFound` [400] · `Error401InvalidSecretKey` [401] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisputeAttachmentUpload` | `tabby/models/dispute_attachment_upload.py` |
| `PostUploadAttachmentErrorBody` | `tabby/errors/post_upload_attachment_error.py` |
| `Error404DisputeNotFound` | `tabby/models/error404_dispute_not_found.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |

