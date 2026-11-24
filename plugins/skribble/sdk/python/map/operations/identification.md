<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identification — operations

Accessor: `client.identification` · Source: `skribble/apis/identification.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.identification.get_identification_evidence_files

- **Route**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/files`
- **Auth**: `bearer`
- **Server**: `default_skribble_identification_api`
- **Signature**: `def get_identification_evidence_files(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `evidence_id`
- **Params**: `sr_id` — path `SR_ID` · `evidence_id` — path `EVIDENCE_ID`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, GetIdentificationEvidenceFilesErrorBody]`
- **Error**: `GetIdentificationEvidenceFilesErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceFilesErrorBody` | `skribble/errors/get_identification_evidence_files_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.identification.get_identification_evidence_json

- **Route**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_identification_api`
- **Signature**: `def get_identification_evidence_json(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `evidence_id`
- **Params**: `sr_id` — path `SR_ID` · `evidence_id` — path `EVIDENCE_ID`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetIdentificationEvidenceJsonErrorBody]`
- **Error**: `GetIdentificationEvidenceJsonErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceJsonErrorBody` | `skribble/errors/get_identification_evidence_json_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.identification.get_identification_evidence_jwt

- **Route**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/jwt`
- **Auth**: `bearer`
- **Server**: `default_skribble_identification_api`
- **Signature**: `def get_identification_evidence_jwt(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `evidence_id`
- **Params**: `sr_id` — path `SR_ID` · `evidence_id` — path `EVIDENCE_ID`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, GetIdentificationEvidenceJwtErrorBody]`
- **Error**: `GetIdentificationEvidenceJwtErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIdentificationEvidenceJwtErrorBody` | `skribble/errors/get_identification_evidence_jwt_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.identification.get_identification_evidence_status

- **Route**: `GET /signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/status`
- **Auth**: `bearer`
- **Server**: `default_skribble_identification_api`
- **Signature**: `def get_identification_evidence_status(sr_id: UUID, evidence_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `evidence_id`
- **Params**: `sr_id` — path `SR_ID` · `evidence_id` — path `EVIDENCE_ID`
- **Returns (parsed)**: `IdentificationEvidenceStatusResponse`
- **Returns (raw)**: `ApiResult[IdentificationEvidenceStatusResponse, GetIdentificationEvidenceStatusErrorBody]`
- **Error**: `GetIdentificationEvidenceStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdentificationEvidenceStatusResponse` | `skribble/models/identification_evidence_status_response.py` |
| `GetIdentificationEvidenceStatusErrorBody` | `skribble/errors/get_identification_evidence_status_error.py` |
| `Problem` | `skribble/models/problem.py` |

