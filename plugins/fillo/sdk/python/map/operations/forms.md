<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forms — operations

Accessor: `client.forms` · Source: `fillo/apis/forms.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.forms.discard_form_draft

- **Route**: `POST /api/v1/manage/forms/{form}/discard`
- **Auth**: `bearer_auth`
- **Signature**: `def discard_form_draft(form: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsDiscardResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsDiscardResponse, DiscardFormDraftErrorBody]`
- **Error**: `DiscardFormDraftErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsDiscardResponse` | `fillo/models/api_v1_manage_forms_discard_response.py` |
| `DiscardFormDraftErrorBody` | `fillo/errors/discard_form_draft_error.py` |
| `Error` | `fillo/models/error.py` |

### client.forms.duplicate_form

- **Route**: `POST /api/v1/manage/forms/{form}/duplicate`
- **Auth**: `bearer_auth`
- **Signature**: `def duplicate_form(form: str, *, body: ApiV1ManageFormsDuplicateRequest | ApiV1ManageFormsDuplicateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsDuplicateResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsDuplicateResponse, DuplicateFormErrorBody]`
- **Error**: `DuplicateFormErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 410, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsDuplicateRequest` | `fillo/models/api_v1_manage_forms_duplicate_request.py` |
| `ApiV1ManageFormsDuplicateRequestDict` | `fillo/models/api_v1_manage_forms_duplicate_request.py` |
| `ApiV1ManageFormsDuplicateResponse` | `fillo/models/api_v1_manage_forms_duplicate_response.py` |
| `DuplicateFormErrorBody` | `fillo/errors/duplicate_form_error.py` |
| `Error` | `fillo/models/error.py` |

### client.forms.get_form

- **Route**: `GET /api/v1/manage/forms/{form}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_form(form: str, *, include: IncludeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `include` — query
- **Returns (parsed)**: `FormDetail`
- **Returns (raw)**: `ApiResult[FormDetail, GetFormErrorBody]`
- **Error**: `GetFormErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IncludeOrStr` | `fillo/models/enums/include.py` |
| `FormDetail` | `fillo/models/form_detail.py` |
| `GetFormErrorBody` | `fillo/errors/get_form_error.py` |
| `Error` | `fillo/models/error.py` |

### client.forms.list_form_versions

- **Route**: `GET /api/v1/manage/forms/{form}/versions`
- **Auth**: `bearer_auth`
- **Signature**: `def list_form_versions(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `ApiV1ManageFormsVersionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsVersionsResponse, ListFormVersionsErrorBody]`
- **Error**: `ListFormVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsVersionsResponse` | `fillo/models/api_v1_manage_forms_versions_response.py` |
| `ListFormVersionsErrorBody` | `fillo/errors/list_form_versions_error.py` |
| `Error` | `fillo/models/error.py` |

### client.forms.list_forms

- **Route**: `GET /api/v1/manage/forms`
- **Auth**: `bearer_auth`
- **Signature**: `def list_forms(*, cursor: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `limit` — query
- **Returns (parsed)**: `ApiV1ManageFormsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsResponse, ListFormsErrorBody]`
- **Error**: `ListFormsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsResponse` | `fillo/models/api_v1_manage_forms_response.py` |
| `ListFormsErrorBody` | `fillo/errors/list_forms_error.py` |
| `Error` | `fillo/models/error.py` |

### client.forms.rename_form

- **Route**: `PATCH /api/v1/manage/forms/{form}`
- **Auth**: `bearer_auth`
- **Signature**: `def rename_form(form: str, body: ApiV1ManageFormsRequest | ApiV1ManageFormsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsResponse1, RenameFormErrorBody]`
- **Error**: `RenameFormErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsRequest` | `fillo/models/api_v1_manage_forms_request.py` |
| `ApiV1ManageFormsRequestDict` | `fillo/models/api_v1_manage_forms_request.py` |
| `ApiV1ManageFormsResponse1` | `fillo/models/api_v1_manage_forms_response1.py` |
| `RenameFormErrorBody` | `fillo/errors/rename_form_error.py` |
| `Error` | `fillo/models/error.py` |

### client.forms.unpublish_form

- **Route**: `POST /api/v1/manage/forms/{form}/unpublish`
- **Auth**: `bearer_auth`
- **Signature**: `def unpublish_form(form: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsUnpublishResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsUnpublishResponse, UnpublishFormErrorBody]`
- **Error**: `UnpublishFormErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsUnpublishResponse` | `fillo/models/api_v1_manage_forms_unpublish_response.py` |
| `UnpublishFormErrorBody` | `fillo/errors/unpublish_form_error.py` |
| `Error` | `fillo/models/error.py` |

