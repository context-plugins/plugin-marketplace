<!-- Generated file — do not edit; regenerated with the SDK. -->

# PublicForms — operations

Accessor: `client.public_forms` · Source: `juri_sign/apis/public_forms.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.public_forms.create_public_form

- **Route**: `POST /public-forms`
- **Auth**: `bearer_auth`
- **Signature**: `def create_public_form(body: PublicFormsRequest | PublicFormsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicFormsResponse1`
- **Returns (raw)**: `ApiResult[PublicFormsResponse1, CreatePublicFormErrorBody]`
- **Error**: `CreatePublicFormErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicFormsRequest` | `juri_sign/models/public_forms_request.py` |
| `PublicFormsRequestDict` | `juri_sign/models/public_forms_request.py` |
| `PublicFormsResponse1` | `juri_sign/models/public_forms_response1.py` |
| `CreatePublicFormErrorBody` | `juri_sign/errors/create_public_form_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.public_forms.delete_public_form

- **Route**: `DELETE /public-forms/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_public_form(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeletePublicFormErrorBody]`
- **Error**: `DeletePublicFormErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `DeletePublicFormErrorBody` | `juri_sign/errors/delete_public_form_error.py` |

### client.public_forms.get_public_form

- **Route**: `GET /public-forms/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_public_form(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PublicFormsResponse1`
- **Returns (raw)**: `ApiResult[PublicFormsResponse1, GetPublicFormErrorBody]`
- **Error**: `GetPublicFormErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicFormsResponse1` | `juri_sign/models/public_forms_response1.py` |
| `GetPublicFormErrorBody` | `juri_sign/errors/get_public_form_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.public_forms.list_public_forms

- **Route**: `GET /public-forms`
- **Auth**: `bearer_auth`
- **Signature**: `def list_public_forms(*, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `per_page` — query
- **Returns (parsed)**: `PublicFormsResponse`
- **Returns (raw)**: `ApiResult[PublicFormsResponse, ListPublicFormsErrorBody]`
- **Error**: `ListPublicFormsErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicFormsResponse` | `juri_sign/models/public_forms_response.py` |
| `ListPublicFormsErrorBody` | `juri_sign/errors/list_public_forms_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.public_forms.rotate_public_form_token

- **Route**: `POST /public-forms/{id}/rotate-token`
- **Auth**: `bearer_auth`
- **Signature**: `def rotate_public_form_token(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PublicFormsRotateTokenResponse`
- **Returns (raw)**: `ApiResult[PublicFormsRotateTokenResponse, RotatePublicFormTokenErrorBody]`
- **Error**: `RotatePublicFormTokenErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicFormsRotateTokenResponse` | `juri_sign/models/public_forms_rotate_token_response.py` |
| `RotatePublicFormTokenErrorBody` | `juri_sign/errors/rotate_public_form_token_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.public_forms.update_public_form

- **Route**: `PUT /public-forms/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_public_form(id_: UUID, *, body: PublicFormsRequest1 | PublicFormsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PublicFormsResponse1`
- **Returns (raw)**: `ApiResult[PublicFormsResponse1, UpdatePublicFormErrorBody]`
- **Error**: `UpdatePublicFormErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicFormsRequest1` | `juri_sign/models/public_forms_request1.py` |
| `PublicFormsRequest1Dict` | `juri_sign/models/public_forms_request1.py` |
| `PublicFormsResponse1` | `juri_sign/models/public_forms_response1.py` |
| `UpdatePublicFormErrorBody` | `juri_sign/errors/update_public_form_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

