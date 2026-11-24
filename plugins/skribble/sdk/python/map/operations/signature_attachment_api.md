<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureAttachmentApi — operations

Accessor: `client.signature_attachment_api` · Source: `skribble/apis/signature_attachment_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signature_attachment_api.create_signature_attachment

- **Route**: `POST /signature-requests/{SR_ID}/attachments`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_attachment_api`
- **Signature**: `def create_signature_attachment(sr_id: UUID, body: CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `body`
- **Params**: `sr_id` — path `SR_ID` · `body` — JSON body
- **Returns (parsed)**: `SignatureResponseSkribbleSignatureAttachmentApi`
- **Returns (raw)**: `ApiResult[SignatureResponseSkribbleSignatureAttachmentApi, CreateSignatureAttachmentErrorBody]`
- **Error**: `CreateSignatureAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 404, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSignatureAttachmentRequest` | `skribble/models/create_signature_attachment_request.py` |
| `CreateSignatureAttachmentRequestDict` | `skribble/models/create_signature_attachment_request.py` |
| `SignatureResponseSkribbleSignatureAttachmentApi` | `skribble/models/signature_response_skribble_signature_attachment_api.py` |
| `CreateSignatureAttachmentErrorBody` | `skribble/errors/create_signature_attachment_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_attachment_api.delete_signature_attachment

- **Route**: `DELETE /signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_attachment_api`
- **Signature**: `def delete_signature_attachment(sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `attachment_id`
- **Params**: `sr_id` — path `SR_ID` · `attachment_id` — path `ATTACHMENT_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSignatureAttachmentErrorBody]`
- **Error**: `DeleteSignatureAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSignatureAttachmentErrorBody` | `skribble/errors/delete_signature_attachment_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_attachment_api.get_signature_attachment_content

- **Route**: `GET /signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}/content`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_attachment_api`
- **Signature**: `def get_signature_attachment_content(sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `attachment_id`
- **Params**: `sr_id` — path `SR_ID` · `attachment_id` — path `ATTACHMENT_ID`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, GetSignatureAttachmentContentErrorBody]`
- **Error**: `GetSignatureAttachmentContentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSignatureAttachmentContentErrorBody` | `skribble/errors/get_signature_attachment_content_error.py` |
| `Problem` | `skribble/models/problem.py` |

