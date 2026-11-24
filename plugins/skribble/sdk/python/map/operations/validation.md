<!-- Generated file — do not edit; regenerated with the SDK. -->

# Validation — operations

Accessor: `client.validation` · Source: `skribble/apis/validation.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.validation.delete_validation

- **Route**: `DELETE /validate/{id}`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def delete_validation(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteValidationErrorBody]`
- **Error**: `DeleteValidationErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteValidationErrorBody` | `skribble/errors/delete_validation_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.validation.post_validate_document

- **Route**: `POST /validate/document`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def post_validate_document(content: FileInput, *, quality: QualityOrStr | None = None, long_term_validation: bool | None = None, legislation: LegislationOrStr | None = None, infos: list[InfoOrStr] | None = None, reject_visual_differences: bool | None = None, reject_undefined_changes: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content`
- **Params**: `quality` — query · `long_term_validation` — query `longTermValidation` · `legislation` — query · `infos` — query · `reject_visual_differences` — query `rejectVisualDifferences` · `reject_undefined_changes` — query `rejectUndefinedChanges` · `content` — multipart file
- **Returns (parsed)**: `DocumentValidationResponse`
- **Returns (raw)**: `ApiResult[DocumentValidationResponse, PostValidateDocumentErrorBody]`
- **Error**: `PostValidateDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 413, 415, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QualityOrStr` | `skribble/models/enums/quality.py` |
| `LegislationOrStr` | `skribble/models/enums/legislation.py` |
| `InfoOrStr` | `skribble/models/enums/info.py` |
| `DocumentValidationResponse` | `skribble/models/document_validation_response.py` |
| `PostValidateDocumentErrorBody` | `skribble/errors/post_validate_document_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.validation.post_validate_signature

- **Route**: `POST /validate/signature`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def post_validate_signature(content: FileInput, *, quality: QualityOrStr | None = None, long_term_validation: bool | None = None, legislation: LegislationOrStr | None = None, infos: list[InfoOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `content`
- **Params**: `quality` — query · `long_term_validation` — query `longTermValidation` · `legislation` — query · `infos` — query · `content` — multipart file
- **Returns (parsed)**: `SignatureValidationResponse`
- **Returns (raw)**: `ApiResult[SignatureValidationResponse, PostValidateSignatureErrorBody]`
- **Error**: `PostValidateSignatureErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 415, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QualityOrStr` | `skribble/models/enums/quality.py` |
| `LegislationOrStr` | `skribble/models/enums/legislation.py` |
| `InfoOrStr` | `skribble/models/enums/info.py` |
| `SignatureValidationResponse` | `skribble/models/signature_validation_response.py` |
| `PostValidateSignatureErrorBody` | `skribble/errors/post_validate_signature_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

