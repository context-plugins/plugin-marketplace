<!-- Generated file — do not edit; regenerated with the SDK. -->

# Responses — operations

Accessor: `client.responses` · Source: `fillo/apis/responses.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.responses.delete_response

- **Route**: `DELETE /api/v1/manage/responses/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_response(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ManageResponsesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageResponsesResponse, DeleteResponseErrorBody]`
- **Error**: `DeleteResponseErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageResponsesResponse` | `fillo/models/api_v1_manage_responses_response.py` |
| `DeleteResponseErrorBody` | `fillo/errors/delete_response_error.py` |
| `Error` | `fillo/models/error.py` |

### client.responses.export_form_responses

- **Route**: `GET /api/v1/manage/forms/{form}/responses/export`
- **Auth**: `bearer_auth`
- **Signature**: `def export_form_responses(form: str, *, range_: RangeOrStr | None = None, q: str | None = None, source: str | None = None, respondent: str | None = None, where: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `range_` — query `range` · `q` — query · `source` — query · `respondent` — query · `where` — query
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, ExportFormResponsesErrorBody]`
- **Error**: `ExportFormResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RangeOrStr` | `fillo/models/enums/range.py` |
| `ExportFormResponsesErrorBody` | `fillo/errors/export_form_responses_error.py` |
| `Error` | `fillo/models/error.py` |

### client.responses.get_response

- **Route**: `GET /api/v1/manage/responses/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_response(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ResponseDetail`
- **Returns (raw)**: `ApiResult[ResponseDetail, GetResponseErrorBody]`
- **Error**: `GetResponseErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponseDetail` | `fillo/models/response_detail.py` |
| `GetResponseErrorBody` | `fillo/errors/get_response_error.py` |
| `Error` | `fillo/models/error.py` |

### client.responses.list_form_drafts

- **Route**: `GET /api/v1/manage/forms/{form}/drafts`
- **Auth**: `bearer_auth`
- **Signature**: `def list_form_drafts(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `FormDrafts`
- **Returns (raw)**: `ApiResult[FormDrafts, ListFormDraftsErrorBody]`
- **Error**: `ListFormDraftsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormDrafts` | `fillo/models/form_drafts.py` |
| `ListFormDraftsErrorBody` | `fillo/errors/list_form_drafts_error.py` |
| `Error` | `fillo/models/error.py` |

### client.responses.list_form_responses

- **Route**: `GET /api/v1/manage/forms/{form}/responses`
- **Auth**: `bearer_auth`
- **Signature**: `def list_form_responses(form: str, *, cursor: str | None = None, limit: int | None = 50, range_: RangeOrStr | None = None, q: str | None = None, source: str | None = None, respondent: str | None = None, where: list[str] | None = None, held: HeldOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `cursor` — query · `limit` — query · `range_` — query `range` · `q` — query · `source` — query · `respondent` — query · `where` — query · `held` — query
- **Returns (parsed)**: `ResponsePage`
- **Returns (raw)**: `ApiResult[ResponsePage, ListFormResponsesErrorBody]`
- **Error**: `ListFormResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RangeOrStr` | `fillo/models/enums/range.py` |
| `HeldOrStr` | `fillo/models/enums/held.py` |
| `ResponsePage` | `fillo/models/response_page.py` |
| `ListFormResponsesErrorBody` | `fillo/errors/list_form_responses_error.py` |
| `Error` | `fillo/models/error.py` |

### client.responses.release_held_responses

- **Route**: `POST /api/v1/manage/forms/{form}/responses/release`
- **Auth**: `bearer_auth`
- **Signature**: `def release_held_responses(form: str, body: ApiV1ManageFormsResponsesReleaseRequest | ApiV1ManageFormsResponsesReleaseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageFormsResponsesReleaseResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageFormsResponsesReleaseResponse, ReleaseHeldResponsesErrorBody]`
- **Error**: `ReleaseHeldResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageFormsResponsesReleaseRequest` | `fillo/models/api_v1_manage_forms_responses_release_request.py` |
| `ApiV1ManageFormsResponsesReleaseRequestDict` | `fillo/models/api_v1_manage_forms_responses_release_request.py` |
| `ApiV1ManageFormsResponsesReleaseResponse` | `fillo/models/api_v1_manage_forms_responses_release_response.py` |
| `ReleaseHeldResponsesErrorBody` | `fillo/errors/release_held_responses_error.py` |
| `Error` | `fillo/models/error.py` |

### client.responses.summarize_form_responses

- **Route**: `GET /api/v1/manage/forms/{form}/responses/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def summarize_form_responses(form: str, *, exclude: str | None = None, recent: int | None = 5, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path · `exclude` — query · `recent` — query
- **Returns (parsed)**: `ResponseSummary`
- **Returns (raw)**: `ApiResult[ResponseSummary, SummarizeFormResponsesErrorBody]`
- **Error**: `SummarizeFormResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponseSummary` | `fillo/models/response_summary.py` |
| `SummarizeFormResponsesErrorBody` | `fillo/errors/summarize_form_responses_error.py` |
| `Error` | `fillo/models/error.py` |

