<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputesApi — operations

Accessor: `client.disputesApi` · Source: `src/resources/disputes-api.ts` · 6 operations · Request and error types: namespace `DisputesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tabby`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDispute

- **Signature**: `getDispute(request: DisputesApi.GetDisputeRequest, options?: RequestOptions): ApiPromise<Dispute1, DisputesApi.GetDisputeError>`
- **Wire**: `GET /api/v1/disputes/{disputeId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Dispute1`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `DisputesApi.GetDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404DisputeNotFound"` [400] `Error404DisputeNotFound` · `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404DisputeNotFound2"` [404] `Error404DisputeNotFound` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.GetDisputeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |
| `disputeIdTemplate` | `path` | `disputeId` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dispute1` | `dispute1Schema` | `src/models/dispute1.ts` |
| `Error404DisputeNotFound` | `error404DisputeNotFoundSchema` | `src/models/error404-dispute-not-found.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |

### getDisputes

- **Signature**: `getDisputes(request?: DisputesApi.GetDisputesRequest, options?: RequestOptions): ApiPromise<Disputes, DisputesApi.GetDisputesError>`
- **Wire**: `GET /api/v1/disputes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Disputes`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `DisputesApi.GetDisputesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404DisputeNotFound"` [400] `Error404DisputeNotFound` · `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.GetDisputesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `statuses` | `query` | — | `Statuses` | no |
| `createdAtGte` | `query` | `created_at_gte` | `string` | no |
| `createdAtLte` | `query` | `created_at_lte` | `string` | no |
| `pageToken` | `query` | `page_token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Statuses` | `statusesSchema` | `src/models/statuses.ts` |
| `Disputes` | `disputesSchema` | `src/models/disputes.ts` |
| `Error404DisputeNotFound` | `error404DisputeNotFoundSchema` | `src/models/error404-dispute-not-found.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |

### postDisputeProvideEvidence

- **Signature**: `postDisputeProvideEvidence(request: DisputesApi.PostDisputeProvideEvidenceRequest, options?: RequestOptions): ApiPromise<Evidence, DisputesApi.PostDisputeProvideEvidenceError>`
- **Wire**: `POST /api/v1/disputes/{disputeId}/provide-evidence`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Evidence`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `DisputesApi.PostDisputeProvideEvidenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404DisputeNotFound"` [400] `Error404DisputeNotFound` · `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404DisputeNotFound2"` [404] `Error404DisputeNotFound` · `"error400"` [409] `Error400` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.PostDisputeProvideEvidenceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |
| `disputeIdTemplate` | `path` | `disputeId` | `string` | yes |
| `body` | `body` | — | `ApiV1DisputesProvideEvidenceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DisputesProvideEvidenceRequest` | `apiV1DisputesProvideEvidenceRequestSchema` | `src/models/api-v1-disputes-provide-evidence-request.ts` |
| `Evidence` | `evidenceSchema` | `src/models/evidence.ts` |
| `Error404DisputeNotFound` | `error404DisputeNotFoundSchema` | `src/models/error404-dispute-not-found.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |

### postDisputesApprove

- **Signature**: `postDisputesApprove(request: DisputesApi.PostDisputesApproveRequest, options?: RequestOptions): ApiPromise<DisputesApprove, DisputesApi.PostDisputesApproveError>`
- **Wire**: `POST /api/v1/disputes/approve`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputesApprove`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `DisputesApi.PostDisputesApproveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404DisputeNotFound"` [400] `Error404DisputeNotFound` · `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.PostDisputesApproveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1DisputesApproveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DisputesApproveRequest` | `apiV1DisputesApproveRequestSchema` | `src/models/api-v1-disputes-approve-request.ts` |
| `DisputesApprove` | `disputesApproveSchema` | `src/models/disputes-approve.ts` |
| `Error404DisputeNotFound` | `error404DisputeNotFoundSchema` | `src/models/error404-dispute-not-found.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |

### postDisputesChallenge

- **Signature**: `postDisputesChallenge(request: DisputesApi.PostDisputesChallengeRequest, options?: RequestOptions): ApiPromise<DisputesChallenge, DisputesApi.PostDisputesChallengeError>`
- **Wire**: `POST /api/v1/disputes/challenge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputesChallenge`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `DisputesApi.PostDisputesChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404DisputeNotFound"` [400] `Error404DisputeNotFound` · `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.PostDisputesChallengeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1DisputesChallengeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DisputesChallengeRequest` | `apiV1DisputesChallengeRequestSchema` | `src/models/api-v1-disputes-challenge-request.ts` |
| `DisputesChallenge` | `disputesChallengeSchema` | `src/models/disputes-challenge.ts` |
| `Error404DisputeNotFound` | `error404DisputeNotFoundSchema` | `src/models/error404-dispute-not-found.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |

### postUploadAttachment

- **Signature**: `postUploadAttachment(request: DisputesApi.PostUploadAttachmentRequest, options?: RequestOptions): ApiPromise<DisputeAttachmentUpload, DisputesApi.PostUploadAttachmentError>`
- **Wire**: `POST /api/v1/disputes/attachments/upload`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `attachment` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputeAttachmentUpload`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `DisputesApi.PostUploadAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404DisputeNotFound"` [400] `Error404DisputeNotFound` · `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.PostUploadAttachmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `attachment` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeAttachmentUpload` | `disputeAttachmentUploadSchema` | `src/models/dispute-attachment-upload.ts` |
| `Error404DisputeNotFound` | `error404DisputeNotFoundSchema` | `src/models/error404-dispute-not-found.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |

