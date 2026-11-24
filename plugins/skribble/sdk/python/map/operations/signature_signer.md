<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureSigner — operations

Accessor: `client.signature_signer` · Source: `skribble/apis/signature_signer.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signature_signer.add_signature_signer

- **Route**: `POST /signature-requests/{SR_ID}/signatures`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_signer_api`
- **Signature**: `def add_signature_signer(sr_id: UUID, body: SignatureRecipientModel | SignatureRecipientModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `body`
- **Params**: `sr_id` — path `SR_ID` · `body` — JSON body
- **Returns (parsed)**: `SignatureResponseV3`
- **Returns (raw)**: `ApiResult[SignatureResponseV3, AddSignatureSignerErrorBody]`
- **Error**: `AddSignatureSignerErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureRecipientModel` | `skribble/models/unions/signature_recipient_model.py` |
| `SignatureRecipientModelDict` | `skribble/models/unions/signature_recipient_model.py` |
| `SignatureResponseV3` | `skribble/models/signature_response_v3.py` |
| `AddSignatureSignerErrorBody` | `skribble/errors/add_signature_signer_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_signer.remove_signature_signer

- **Route**: `DELETE /signature-requests/{SR_ID}/signatures/{SID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_signer_api`
- **Signature**: `def remove_signature_signer(sr_id: UUID, sid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `sid`
- **Params**: `sr_id` — path `SR_ID` · `sid` — path `SID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RemoveSignatureSignerErrorBody]`
- **Error**: `RemoveSignatureSignerErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RemoveSignatureSignerErrorBody` | `skribble/errors/remove_signature_signer_error.py` |
| `Problem` | `skribble/models/problem.py` |

